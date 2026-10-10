import { Button } from '../../components/common/Button'
import { Card } from '../../components/common/Card'
import { SectionHeader } from '../../components/common/SectionHeader'
import { TextAreaField } from '../../components/forms/TextAreaField'
import { TextField } from '../../components/forms/TextField'
import { usePageTitle } from '../../hooks/usePageTitle'
import { localContentService } from '../../services/localContentService'

export function ContactPage() {
  usePageTitle('تواصل معنا')
  const methods = localContentService.getContactMethods()

  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow="تواصل معنا"
          title="نسعد بسماع أسئلتك واقتراحاتك"
          description="اختر قناة التواصل المناسبة أو اترك رسالة تجريبية داخل الواجهة."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {methods.map((method) => {
            const Icon = method.icon
            return (
              <a key={method.label} href={method.href} className="focus-ring rounded-lg">
                <Card className="h-full text-center transition hover:-translate-y-1 hover:shadow-lg">
                  <Icon className="mx-auto h-8 w-8 text-[#0b355c]" aria-hidden="true" />
                  <h2 className="mt-4 text-lg font-extrabold text-[#0b355c]">{method.label}</h2>
                  <p className="mt-2 text-sm font-semibold leading-7 text-[#526a7d]">{method.value}</p>
                </Card>
              </a>
            )
          })}
        </div>

        <Card as="section" className="mt-8">
          <form
            className="grid gap-5"
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <TextField label="الاسم" name="name" required />
              <TextField label="رقم التواصل" name="phone" inputMode="tel" dir="ltr" />
            </div>
            <TextAreaField label="رسالتك" name="message" required />
            <Button type="submit" className="w-full md:w-auto">
              إرسال رسالة تجريبية
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
