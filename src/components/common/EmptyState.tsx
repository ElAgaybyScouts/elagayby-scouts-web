import type { LucideIcon } from 'lucide-react'
import { Inbox } from 'lucide-react'

type EmptyStateProps = {
  title?: string
  description?: string
  icon?: LucideIcon
}

export function EmptyState({
  title = 'لا توجد بيانات حاليًا',
  description = 'سيتم عرض المحتوى هنا فور إضافته.',
  icon: Icon = Inbox,
}: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed border-[#b8d0df] bg-[#f8fcff] p-8 text-center">
      <Icon className="mx-auto h-10 w-10 text-[#53728c]" aria-hidden="true" />
      <h3 className="mt-4 text-xl font-bold text-[#0b355c]">{title}</h3>
      <p className="mt-2 text-[#5b6f80]">{description}</p>
    </div>
  )
}
