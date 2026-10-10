import type { SelectHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string
  options: string[]
}

export function SelectField({ id, label, options, className, ...props }: SelectFieldProps) {
  const selectId = id ?? props.name ?? label

  return (
    <label className="block text-right" htmlFor={selectId}>
      <span className="mb-2 block text-sm font-bold text-[#1c3850]">{label}</span>
      <select
        id={selectId}
        className={cn(
          'focus-ring w-full rounded-lg border border-[#c7ddeb] bg-white px-4 py-3 text-right text-[#102033]',
          className,
        )}
        {...props}
      >
        <option value="">اختر من القائمة</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}
