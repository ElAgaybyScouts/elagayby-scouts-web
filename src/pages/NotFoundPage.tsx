import { Icon } from '../components/ui/Icon'
import { usePageTitle } from '../hooks/usePageTitle'

export function NotFoundPage() {
  usePageTitle('الصفحة غير موجودة')

  return (
    <main className="grid min-h-screen place-items-center bg-background px-4 text-center" dir="rtl">
      <section className="max-w-xl">
        <Icon name="explore" className="text-[64px] text-primary" />
        <p className="mt-6 text-6xl font-bold text-tertiary-fixed-dim">٤٠٤</p>
        <h1 className="mt-4 font-headline-lg text-headline-lg text-primary font-bold">الصفحة غير موجودة</h1>
        <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant">
          يبدو أن الرابط الذي طلبته غير متاح. تقدر ترجع للصفحة الرئيسية وتكمل منها.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-space-xs bg-primary text-on-primary font-label-lg text-label-lg px-8 py-3.5 rounded-lg font-bold hover:bg-primary-container transition-all"
        >
          العودة للرئيسية
        </a>
      </section>
    </main>
  )
}
