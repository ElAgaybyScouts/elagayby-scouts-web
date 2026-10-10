import { CalendarDays, Clock, MapPin } from 'lucide-react'
import type { EventItem } from '../../types/content'
import { Card } from '../common/Card'

export function EventCard({ event }: { event: EventItem }) {
  return (
    <Card className="h-full">
      <div className="mb-4 inline-flex rounded-full bg-[#fff5d8] px-3 py-1 text-xs font-extrabold text-[#6f520d]">
        {event.status}
      </div>
      <h3 className="text-xl font-extrabold text-[#0b355c]">{event.title}</h3>
      <p className="mt-4 leading-8 text-[#526a7d]">{event.description}</p>
      <dl className="mt-6 grid gap-3 text-sm font-semibold text-[#34546e]">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-[#0b355c]" aria-hidden="true" />
          <dt className="sr-only">التاريخ</dt>
          <dd>{event.date}</dd>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-[#0b355c]" aria-hidden="true" />
          <dt className="sr-only">الوقت</dt>
          <dd>{event.time}</dd>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-[#0b355c]" aria-hidden="true" />
          <dt className="sr-only">المكان</dt>
          <dd>{event.location}</dd>
        </div>
      </dl>
    </Card>
  )
}
