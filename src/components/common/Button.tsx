import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'gold'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  href?: string
  variant?: ButtonVariant
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-[#0b355c] text-white hover:bg-[#123f6a] shadow-sm',
  secondary: 'bg-white text-[#0b355c] ring-1 ring-[#c8dce8] hover:bg-[#eef8ff]',
  ghost: 'text-[#24445d] hover:bg-[#e4f2fb]',
  gold: 'bg-[#eec252] text-[#2e2100] hover:bg-[#d9ab32] shadow-sm',
}

export function Button({
  children,
  className,
  href,
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = cn(
    'focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition',
    variants[variant],
    className,
  )

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
