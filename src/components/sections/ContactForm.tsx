import { useEffect, useRef, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Field, controlClass, controlErrorClass } from '../forms/Field'
import { Icon } from '../ui/Icon'
import { supportMessageService } from '../../services/supportMessageService'
import type { SupportMessage } from '../../types/content'
import { cn } from '../../utils/cn'
import { isEgyptianMobile, toLatinDigits } from '../../utils/format'

type Errors = Partial<Record<keyof SupportMessage, string>>

const idOf = (key: keyof SupportMessage) => `support-${key}`

const emptyForm: SupportMessage = { fullName: '', phone: '', message: '' }

const fieldOrder: Array<keyof SupportMessage> = ['fullName', 'phone', 'message']

function validate(values: SupportMessage): Errors {
  const errors: Errors = {}
  if (values.fullName.trim().split(/\s+/).filter(Boolean).length < 2) {
    errors.fullName = 'اكتب الاسم ثنائي على الأقل.'
  }
  if (!isEgyptianMobile(values.phone)) {
    errors.phone = 'اكتب رقم موبايل مصري صحيح (مثال: 01012345678).'
  }
  if (values.message.trim().length < 10) {
    errors.message = 'اكتب وصف السؤال أو المشكلة (١٠ حروف على الأقل).'
  }
  return errors
}

export function ContactForm() {
  const [values, setValues] = useState<SupportMessage>(emptyForm)
  const [attempted, setAttempted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const nameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    nameRef.current?.focus()
  }, [])

  const errors = attempted ? validate(values) : {}

  function bind(key: keyof SupportMessage) {
    return {
      id: idOf(key),
      value: values[key],
      onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setValues((prev) => ({ ...prev, [key]: event.target.value })),
      'aria-invalid': errors[key] ? true : undefined,
      'aria-describedby': errors[key] ? `${idOf(key)}-error` : undefined,
      className: cn(controlClass, errors[key] && controlErrorClass),
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setAttempted(true)

    const found = validate(values)
    const firstInvalid = fieldOrder.find((key) => found[key])
    if (firstInvalid) {
      document.getElementById(idOf(firstInvalid))?.focus()
      return
    }

    setStatus('submitting')
    try {
      await supportMessageService.submit({
        fullName: values.fullName.trim(),
        phone: toLatinDigits(values.phone).trim(),
        message: values.message.trim(),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  function startAnother() {
    setValues(emptyForm)
    setAttempted(false)
    setStatus('idle')
  }

  if (status === 'success') {
    return (
      <div role="status" className="text-center py-8 flex flex-col items-center gap-space-md">
        <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary">
          <Icon name="verified" className="text-[36px]" />
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
          وصلتنا رسالتك ❤️
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-lg leading-relaxed">
          شكرًا لتواصلك معنا. هنراجع رسالتك ونتواصل معاك على رقم الموبايل في أقرب وقت.
        </p>
        <button
          type="button"
          onClick={startAnother}
          className="text-primary font-label-lg text-label-lg underline"
        >
          إرسال رسالة أخرى
        </button>
      </div>
    )
  }

  return (
    <form className="flex flex-col gap-space-md" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        <Field id={idOf('fullName')} label="الاسم *" error={errors.fullName}>
          <input
            {...bind('fullName')}
            ref={nameRef}
            type="text"
            placeholder="مثال: شنوده جرجس"
            autoComplete="name"
          />
        </Field>
        <Field id={idOf('phone')} label="رقم الموبايل *" error={errors.phone}>
          <input
            {...bind('phone')}
            type="tel"
            inputMode="tel"
            placeholder="01XXXXXXXXX"
            autoComplete="tel"
          />
        </Field>
      </div>

      <Field id={idOf('message')} label="وصف المساعدة أو المشكلة *" error={errors.message}>
        <textarea
          {...bind('message')}
          rows={4}
          placeholder="اكتب سؤالك أو اقتراحك أو المشكلة اللي محتاج فيها مساعدة..."
        />
      </Field>

      {status === 'error' ? (
        <p role="alert" className="font-body-sm text-body-sm text-error">
          حصلت مشكلة أثناء إرسال الرسالة. جرّب تاني، أو كلّمنا على الواتساب.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full md:w-auto self-start inline-flex items-center justify-center gap-space-xs bg-primary text-on-primary font-label-lg text-label-lg px-8 py-3.5 rounded-lg font-bold shadow-md hover:bg-primary-container transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Icon name="send" className="text-[20px]" />
        <span>{status === 'submitting' ? 'جاري الإرسال...' : 'إرسال الرسالة'}</span>
      </button>
    </form>
  )
}