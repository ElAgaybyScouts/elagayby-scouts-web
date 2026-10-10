import { Icon } from './Icon'
import { cn } from '../../utils/cn'

type SectionHeadingProps = {
  icon: string
  eyebrow: string
  title: string
  description: string
  /** centered: العنوان في النص بـ pill | start: العنوان على الجنب (قسم من نحن / مكاننا / المعرض) */
  align?: 'center' | 'start'
  /** عرض النص الوصفي بالـ body-md بدل body-lg */
  compactDescription?: boolean
  className?: string
}

export function SectionHeading({
  icon,
  eyebrow,
  title,
  description,
  align = 'center',
  compactDescription = false,
  className,
}: SectionHeadingProps) {
  const descriptionClass = compactDescription
    ? 'font-body-md text-body-md text-on-surface-variant mt-2'
    : 'font-body-lg text-body-lg text-on-surface-variant mt-2 leading-relaxed'

  if (align === 'start') {
    return (
      <div className={cn('flex flex-col gap-space-xs max-w-2xl', className)}>
        <div className="inline-flex items-center gap-1 text-primary font-label-md text-label-md">
          <Icon name={icon} className="text-[18px]" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-primary font-bold">{title}</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mt-space-xs">
          {description}
        </p>
      </div>
    )
  }

  return (
    <div className={cn('text-center max-w-3xl mx-auto mb-16 flex flex-col items-center', className)}>
      <span className="inline-flex items-center gap-1 text-primary font-label-md text-label-md px-space-md py-1 bg-surface-container rounded-full mb-space-xs">
        <Icon name={icon} className="text-[16px]" />
        <span>{eyebrow}</span>
      </span>
      <h2 className="font-headline-lg text-headline-lg text-primary font-bold">{title}</h2>
      <p className={descriptionClass}>{description}</p>
    </div>
  )
}
