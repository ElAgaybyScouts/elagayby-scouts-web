import { cn } from '../../utils/cn'

type IconProps = {
  /** اسم الأيقونة في Material Symbols Outlined، مثال: "church" */
  name: string
  /** مقاس الأيقونة بالـ px */
  size?: number
  className?: string
}

export function Icon({ name, size, className }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn('material-symbols-outlined', className)}
      style={size ? { fontSize: size } : undefined}
    >
      {name}
    </span>
  )
}
