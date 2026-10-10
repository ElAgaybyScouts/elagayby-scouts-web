import type { ReactNode } from 'react'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  action?: ReactNode
  centered?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between ${
        centered ? 'mx-auto max-w-3xl text-center md:block' : ''
      }`}
    >
      <div className={centered ? 'mx-auto max-w-3xl' : 'max-w-3xl'}>
        {eyebrow ? (
          <p className="mb-3 text-sm font-bold text-[#9a7415]">{eyebrow}</p>
        ) : null}
        <h2 className="text-3xl font-extrabold leading-tight text-[#0b355c] md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-8 text-[#516779] md:text-lg">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
