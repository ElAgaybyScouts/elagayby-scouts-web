import type { InputHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  helperText?: string
}

export function TextField({ id, label, helperText, className, ...props }: TextFieldProps) {
  const inputId = id ?? props.name ?? label

  return (
    <label className="block text-right" htmlFor={inputId}>
      <span className="mb-2 block text-sm font-bold text-[#1c3850]">{label}</span>
      <input
        id={inputId}
        className={cn(
          'focus-ring w-full rounded-lg border border-[#c7ddeb] bg-white px-4 py-3 text-right text-[#102033] placeholder:text-[#8296a7]',
          className,
        )}
        {...props}
      />
      {helperText ? <span className="mt-2 block text-xs text-[#6d8292]">{helperText}</span> : null}
    </label>
  )
}
