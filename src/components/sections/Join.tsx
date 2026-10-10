import { useRef, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Field, controlClass, controlErrorClass } from '../forms/Field'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'
import { scoutStages } from '../../data/siteData'
import { joinRequestService } from '../../services/joinRequestService'
import type { JoinRequest } from '../../types/content'
import { cn } from '../../utils/cn'
import { isEgyptianMobile, toLatinDigits } from '../../utils/format'

type Errors = Partial<Record<keyof JoinRequest, string>>

const emptyForm: JoinRequest = {
  fullName: '',
  age: '',
  grade: '',
  scoutStage: '',
  address: '',
  phone: '',
  whatsapp: '',
  email: '',
  hasExperience: 'no',
  motivation: '',
  talents: '',
  parentName: '',
  parentPhone: '',
  parentRelation: 'الأب',
  consent: false,
}

/** ترتيب الحقول زي ما بتظهر في الصفحة — بنستخدمه عشان نعمل focus على أول خطأ */
const fieldOrder: Array<keyof JoinRequest> = [
  'fullName',
  'age',
  'grade',
  'scoutStage',
  'address',
  'phone',
  'whatsapp',
  'email',
  'parentName',
  'parentPhone',
  'consent',
]

function validate(values: JoinRequest): Errors {
  const errors: Errors = {}
  const age = Number(toLatinDigits(values.age))
  const isMinor = Number.isFinite(age) && values.age.trim() !== '' && age < 18

  if (values.fullName.trim().split(/\s+/).filter(Boolean).length < 3) {
    errors.fullName = 'اكتب الاسم ثلاثي على الأقل (الاسم رباعي مفضّل).'
  }
  if (!values.age.trim() || !Number.isInteger(age) || age < 5 || age > 30) {
    errors.age = 'السن لازم يكون من ٥ لـ ٣٠ سنة.'
  }
  if (!values.grade.trim()) errors.grade = 'اكتب الصف الدراسي.'
  if (!values.scoutStage) errors.scoutStage = 'اختار المرحلة الكشفية.'
  if (!values.address.trim()) errors.address = 'اكتب المنطقة / محل السكن.'
  if (!isEgyptianMobile(values.phone)) errors.phone = 'اكتب رقم موبايل مصري صحيح (مثال: 01012345678).'
  if (!isEgyptianMobile(values.whatsapp)) errors.whatsapp = 'اكتب رقم واتساب صحيح (مثال: 01012345678).'
  if (values.email.trim() && !/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = 'البريد الإلكتروني غير صحيح.'
  }

  // بيانات ولي الأمر مطلوبة للي أقل من ١٨ سنة، واختيارية بعد كده (بس لو اتكتبت لازم تبقى صحيحة)
  if (isMinor && !values.parentName.trim()) errors.parentName = 'اسم ولي الأمر مطلوب لمن هم دون ١٨ سنة.'
  if (isMinor && !values.parentPhone.trim()) {
    errors.parentPhone = 'رقم ولي الأمر مطلوب لمن هم دون ١٨ سنة.'
  } else if (values.parentPhone.trim() && !isEgyptianMobile(values.parentPhone)) {
    errors.parentPhone = 'اكتب رقم موبايل مصري صحيح.'
  }

  if (!values.consent) errors.consent = 'لازم توافق على استخدام البيانات عشان نقدر نتواصل معاك.'
  return errors
}

export function Join() {
  const sectionRef = useRef<HTMLElement>(null)
  const [values, setValues] = useState<JoinRequest>(emptyForm)
  const [attempted, setAttempted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  // بعد أول محاولة إرسال، الأخطاء بتتحدّث لحظيًا وانت بتكتب
  const errors = attempted ? validate(values) : {}

  const age = Number(toLatinDigits(values.age))
  const isMinor = values.age.trim() !== '' && Number.isFinite(age) && age < 18

  function set<K extends keyof JoinRequest>(key: K, value: JoinRequest[K]) {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  function bind(key: Exclude<keyof JoinRequest, 'consent' | 'hasExperience'>) {
    return {
      id: key,
      value: values[key],
      onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        set(key, event.target.value),
      'aria-invalid': errors[key] ? true : undefined,
      'aria-describedby': errors[key] ? `${key}-error` : undefined,
      className: cn(controlClass, errors[key] && controlErrorClass),
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setAttempted(true)

    const found = validate(values)
    const firstInvalid = fieldOrder.find((key) => found[key])
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus()
      return
    }

    setStatus('submitting')
    try {
      await joinRequestService.submit({
        ...values,
        // نخزّن الأرقام بالإنجليزي عشان تتقري في أي نظام (واتساب/باك إند)
        age: toLatinDigits(values.age).trim(),
        phone: toLatinDigits(values.phone).trim(),
        whatsapp: toLatinDigits(values.whatsapp).trim(),
        parentPhone: toLatinDigits(values.parentPhone).trim(),
      })
      setStatus('success')
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } catch {
      setStatus('error')
    }
  }

  function startAnother() {
    setValues(emptyForm)
    setAttempted(false)
    setStatus('idle')
  }

  return (
    <section ref={sectionRef} className="w-full py-20 bg-surface" id="join">
      <div className="max-w-[1080px] mx-auto px-margin-mobile lg:px-margin">
        <SectionHeading
          className="max-w-2xl mb-12"
          icon="how_to_reg"
          eyebrow="الانضمام لمجموعة العجايبي الكشفية "
          title="جاهز تبدأ رحلتك الكشفية؟"
          description="املأ البيانات التالية وسنتواصل معك ومع ولي الأمر لتحديد موعد المقابلة والفرقة المناسبة لك في أقرب فرصة."
        />

        <div className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-2xl shadow-md border-t-4 border-primary">
          {status === 'success' ? (
            <div
              role="status"
              className="text-center py-12 flex flex-col items-center gap-space-md"
            >
              <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center text-primary mb-space-xs">
                <Icon name="verified" className="text-[44px]" />
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary font-bold">
                تم إرسال طلبك بنجاح ❤️
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
                شكرًا لاهتمامك بالانضمام إلى مجموعة العجايبي الكشفية . سيقوم مسؤول التسجيل بالتواصل
                معك ومع ولي الأمر عبر الواتساب أو اتصال هاتفي لتحديد موعد المقابلة والزيارة الأولى!
              </p>
              <button
                type="button"
                onClick={startAnother}
                className="mt-space-md text-primary font-label-lg text-label-lg underline"
              >
                تقديم طلب آخر لعضو جديد
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-space-lg" onSubmit={handleSubmit} noValidate>
              {/* ١ — بيانات المتقدم */}
              <fieldset className="flex flex-col gap-space-md border-0 p-0 m-0 min-w-0">
                <FormStep number="١" title="بيانات المتقدم الكشفي" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <Field id="fullName" label="الاسم رباعي بالكامل *" error={errors.fullName}>
                    <input {...bind('fullName')} type="text" placeholder="مثال: بيتر ميخائيل شنودة غالي" autoComplete="name" />
                  </Field>
                  <div className="grid grid-cols-2 gap-space-sm">
                    <Field id="age" label="السن *" error={errors.age}>
                      <input {...bind('age')} type="text" inputMode="numeric" maxLength={2} placeholder="مثال: ١٤" />
                    </Field>
                    <Field id="grade" label="الصف الدراسي *" error={errors.grade}>
                      <input {...bind('grade')} type="text" placeholder="مثال: الصف الثاني الإعدادي" />
                    </Field>
                  </div>
                  <Field id="scoutStage" label="المرحلة الكشفية المقترحة *" error={errors.scoutStage}>
                    <select {...bind('scoutStage')}>
                      <option value="" disabled>
                        اختر المرحلة حسب السن
                      </option>
                      {scoutStages.map((stage) => (
                        <option key={stage.value} value={stage.value}>
                          {stage.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field id="address" label="المنطقة / محل السكن *" error={errors.address}>
                    <input {...bind('address')} type="text" placeholder="مثال: مصر الجديدة / الدقي / شبرا" autoComplete="address-level2" />
                  </Field>
                </div>
              </fieldset>

              {/* ٢ — بيانات التواصل */}
              <fieldset className="flex flex-col gap-space-md border-0 p-0 m-0 min-w-0">
                <FormStep number="٢" title="بيانات التواصل السريع" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                  <Field id="phone" label="رقم هاتف المتقدم *" error={errors.phone}>
                    <input {...bind('phone')} type="tel" inputMode="tel" placeholder="012XXXXXXXX" autoComplete="tel" />
                  </Field>
                  <Field id="whatsapp" label="رقم الواتساب (WhatsApp) *" error={errors.whatsapp}>
                    <input {...bind('whatsapp')} type="tel" inputMode="tel" placeholder="010XXXXXXXX" />
                  </Field>
                  <Field id="email" label="البريد الإلكتروني (اختياري)" error={errors.email}>
                    <input {...bind('email')} type="email" placeholder="example@gmail.com" autoComplete="email" />
                  </Field>
                </div>
              </fieldset>

              {/* ٣ — الخبرات والاهتمامات */}
              <fieldset className="flex flex-col gap-space-md border-0 p-0 m-0 min-w-0">
                <FormStep number="٣" title="الخبرات والاهتمامات الشخصية" />
                <div className="flex flex-col gap-space-sm">
                  <legend className="font-label-md text-label-md text-on-surface">
                    هل سبق لك الانضمام لأي نشاط كشفي من قبل؟ *
                  </legend>
                  <div className="flex flex-wrap items-center gap-x-space-lg gap-y-space-sm">
                    {(
                      [
                        ['no', 'لا، أول مرة (مرحب بك جداً!)'],
                        ['yes', 'نعم، لدي خبرة سابقة'],
                      ] as const
                    ).map(([value, label]) => (
                      <label
                        key={value}
                        className="inline-flex items-center gap-2 cursor-pointer font-body-md text-body-md"
                      >
                        <input
                          type="radio"
                          name="scoutExperience"
                          value={value}
                          checked={values.hasExperience === value}
                          onChange={() => set('hasExperience', value)}
                          className="accent-primary w-4 h-4"
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <Field id="motivation" label="لماذا تريد الانضمام لمجوعة العجايبي الكشفيةلمن هم دون ١٨ سنة؟">
                    <textarea {...bind('motivation')} rows={3} placeholder="تعلّم مهارات جديدة، تكوين أصدقاء، حب التخييم والمغامرة..." />
                  </Field>
                  <Field id="talents" label="هل لديك أي مهارات أو مواهب خاصة؟">
                    <textarea {...bind('talents')} rows={3} placeholder="عزف، رسم، رياضة معينة، سباحة، مهارات يدوية..." />
                  </Field>
                </div>
              </fieldset>

              {/* ٤ — ولي الأمر */}
              <fieldset className="flex flex-col gap-space-md border-0 p-0 m-0 min-w-0">
                <FormStep
                  number="٤"
                  title={isMinor ? 'بيانات ولي الأمر (مطلوبة)' : 'بيانات ولي الأمر (لمن هم أقل من  ١٨ سنة)'}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                  <Field id="parentName" label={isMinor ? 'اسم ولي الأمر بالكامل *' : 'اسم ولي الأمر بالكامل'} error={errors.parentName}>
                    <input {...bind('parentName')} type="text" placeholder="الأب / الأم / الوصي" />
                  </Field>
                  <Field id="parentPhone" label={isMinor ? 'رقم هاتف ولي الأمر *' : 'رقم هاتف ولي الأمر'} error={errors.parentPhone}>
                    <input {...bind('parentPhone')} type="tel" inputMode="tel" placeholder="012XXXXXXXX" />
                  </Field>
                  <Field id="parentRelation" label="صلة القرابة">
                    <select {...bind('parentRelation')}>
                      <option value="الأب">الأب</option>
                      <option value="الأم">الأم</option>
                      <option value="آخر">آخر</option>
                    </select>
                  </Field>
                </div>
              </fieldset>

              <div className="flex flex-col gap-space-md pt-space-xs">
                <div className="flex flex-col gap-1">
                  <label className="inline-flex items-start gap-2.5 cursor-pointer font-body-sm text-body-sm text-on-surface-variant">
                    <input
                      id="consent"
                      type="checkbox"
                      checked={values.consent}
                      onChange={(event) => set('consent', event.target.checked)}
                      aria-invalid={errors.consent ? true : undefined}
                      aria-describedby={errors.consent ? 'consent-error' : undefined}
                      className="accent-primary w-4 h-4 mt-0.5"
                    />
                    <span>
                      أوافق على استخدام هذه البيانات للتواصل معي ومع ولي الأمر لتنسيق الالتحاق وحضور الاجتماع
                      التمهيدي الأول.
                    </span>
                  </label>
                  {errors.consent ? (
                    <p id="consent-error" role="alert" className="font-label-md text-label-md text-error">
                      {errors.consent}
                    </p>
                  ) : null}
                </div>

                {status === 'error' ? (
                  <p role="alert" className="font-body-sm text-body-sm text-error">
                    حصلت مشكلة أثناء حفظ الطلب. جرّب تاني، أو كلّمنا على الواتساب.
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full md:w-auto self-start inline-flex items-center justify-center gap-space-xs bg-primary text-on-primary font-label-lg text-label-lg px-10 py-4 rounded-lg font-bold shadow-md hover:bg-primary-container transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Icon name="send" className="text-[20px]" />
                  <span>{status === 'submitting' ? 'جاري الإرسال...' : 'إرسال طلب التقديم ⛺'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function FormStep({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-space-xs pb-space-xs border-b border-surface-container">
      <span className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">
        {number}
      </span>
      <h3 className="font-title-lg text-title-lg text-primary font-bold">{title}</h3>
    </div>
  )
}
