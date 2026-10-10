import { Compass } from 'lucide-react'
import { Button } from '../../components/common/Button'
import { usePageTitle } from '../../hooks/usePageTitle'

export function NotFoundPage() {
  usePageTitle('الصفحة غير موجودة')

  return (
    <main className="grid min-h-screen place-items-center bg-[#f5fbff] px-4 text-center" dir="rtl">
      <section className="max-w-xl">
        <Compass className="mx-auto h-16 w-16 text-[#0b355c]" aria-hidden="true" />
        <p className="mt-6 text-6xl font-extrabold text-[#eec252]">٤٠٤</p>
        <h1 className="mt-4 text-3xl font-extrabold text-[#0b355c]">الصفحة غير موجودة</h1>
        <p className="mt-4 leading-8 text-[#526a7d]">
          يبدو أن الرابط الذي طلبته غير متاح. يمكنك العودة للرئيسية أو تصفح صفحات الموقع.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">العودة للرئيسية</Button>
        </div>
      </section>
    </main>
  )
}
