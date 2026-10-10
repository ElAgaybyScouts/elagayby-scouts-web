import { useState } from 'react'
import { Button } from '../../components/common/Button'
import { Card } from '../../components/common/Card'
import { SectionHeader } from '../../components/common/SectionHeader'
import { SelectField } from '../../components/forms/SelectField'
import { TextAreaField } from '../../components/forms/TextAreaField'
import { TextField } from '../../components/forms/TextField'
import { usePageTitle } from '../../hooks/usePageTitle'

export function JoinPage() {
  usePageTitle('انضم إلينا')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow="انضم إلينا"
          title="ابدأ رحلة كشفية جديدة"
          description="النموذج الحالي أمامي فقط لتجربة الواجهة. عند تجهيز backend سيتم إرسال الطلبات وتخزينها بشكل آمن."
        />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="bg-[#0b355c] text-white">
            <h2 className="text-2xl font-extrabold">قبل التقديم</h2>
            <ul className="mt-6 grid gap-4 leading-8 text-[#e3f3ff]">
              <li>تأكد من كتابة رقم ولي الأمر بدقة.</li>
              <li>اختيار المرحلة يساعدنا على توجيه الطلب للقائد المناسب.</li>
              <li>سيتم التواصل لاحقًا لتحديد موعد مقابلة أو حضور تجريبي.</li>
            </ul>
          </Card>

          <Card as="section">
            {submitted ? (
              <div className="py-10 text-center">
                <h2 className="text-2xl font-extrabold text-[#0b355c]">تم تسجيل الطلب تجريبيًا</h2>
                <p className="mt-4 leading-8 text-[#526a7d]">
                  هذا تأكيد واجهة فقط. سيتم تفعيل الحفظ والإرسال بعد بناء backend.
                </p>
                <Button className="mt-6" variant="secondary" onClick={() => setSubmitted(false)}>
                  تقديم طلب آخر
                </Button>
              </div>
            ) : (
              <form
                className="grid gap-5"
                onSubmit={(event) => {
                  event.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <TextField label="اسم العضو" name="memberName" required placeholder="اكتب الاسم بالكامل" />
                  <TextField label="سن العضو" name="age" required inputMode="numeric" placeholder="مثال: ١٢" />
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <TextField label="اسم ولي الأمر" name="guardianName" required />
                  <TextField label="رقم ولي الأمر" name="phone" required inputMode="tel" dir="ltr" />
                </div>
                <SelectField
                  label="المرحلة المطلوبة"
                  name="program"
                  required
                  options={['البراعم', 'الأشبال والزهرات', 'الكشافة والمرشدات', 'المتقدم والرائدات', 'الجوالة والجوالات']}
                />
                <TextAreaField label="ملاحظات إضافية" name="notes" placeholder="أي معلومات صحية أو مواعيد مناسبة للتواصل" />
                <Button type="submit" variant="gold" className="w-full md:w-auto">
                  إرسال الطلب
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
