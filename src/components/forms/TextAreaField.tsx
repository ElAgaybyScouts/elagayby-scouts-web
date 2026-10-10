import type { TextareaHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type TextAreaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
}

export function TextAreaField({ id, label, className, ...props }: TextAreaFieldProps) {
  const areaId = id ?? props.name ?? label

  return (
    <label className="block text-right" htmlFor={areaId}>
      <span className="mb-2 block text-sm font-bold text-[#1c3850]">{label}</span>
      <textarea
        id={areaId}
        className={cn(
          'focus-ring min-h-32 w-full resize-y rounded-lg border border-[#c7ddeb] bg-white px-4 py-3 text-right text-[#102033] placeholder:text-[#8296a7]',
          className,
        )}
        {...props}
      />
    </label>
  )
}
