import { EmptyState } from '../../components/common/EmptyState'
import { SectionHeader } from '../../components/common/SectionHeader'
import { EventCard } from '../../components/public/EventCard'
import { usePageTitle } from '../../hooks/usePageTitle'
import { localContentService } from '../../services/localContentService'

export function EventsPage() {
  usePageTitle('الفعاليات')
  const events = localContentService.getEvents()

  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow="الفعاليات"
          title="أنشطة قادمة بتخطيط واضح وإشراف أمين"
          description="هذه مواعيد مبدئية للواجهة فقط، وسيتم ربطها لاحقًا بلوحة إدارة وقاعدة بيانات."
        />
        {events.length > 0 ? (
          <div className="grid gap-5 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        ) : (
          <EmptyState title="لا توجد فعاليات قادمة" description="تابع الصفحة لاحقًا لمعرفة المواعيد الجديدة." />
        )}
      </div>
    </section>
  )
}
