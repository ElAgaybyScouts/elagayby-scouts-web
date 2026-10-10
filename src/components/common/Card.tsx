import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
  as?: 'article' | 'aside' | 'div' | 'section'
}

export function Card({ as: Component = 'article', children, className, ...props }: CardProps) {
  return (
    <Component
      className={cn(
        'rounded-lg border border-[#d8e7f0] bg-white p-6 shadow-[0_12px_30px_rgba(12,52,91,0.07)]',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
