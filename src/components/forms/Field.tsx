import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

export const controlClass =
  'bg-surface-container-lowest border border-outline-variant rounded-lg p-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-right'

export const controlErrorClass = 'border-error focus:border-error focus:ring-error/20'

type FieldProps = {
  id: string
  label: string
  error?: string
  className?: string
  children: ReactNode
}

/** Label + control + رسالة الخطأ (لو فيه). الـ control نفسه بيتمرّر كـ children. */
export function Field({ id, label, error, className, children }: FieldProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <label className="font-label-md text-label-md text-on-surface" htmlFor={id}>
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="font-label-md text-label-md text-error">
          {error}
        </p>
      ) : null}
    </div>
  )
}
