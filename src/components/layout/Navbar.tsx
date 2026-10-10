import { useEffect, useState } from 'react'
import { Icon } from '../ui/Icon'
import { useActiveSection } from '../../hooks/useActiveSection'
import { announcement, logoUrl, navItems, siteConfig } from '../../data/siteData'
import { cn } from '../../utils/cn'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(navItems.map((item) => item.id))

  // قفل المنيو بزرار Escape، وقفله لو الشاشة كبرت لحجم الديسكتوب
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const mq = window.matchMedia('(min-width: 1280px)')
    const onChange = () => mq.matches && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onChange)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onChange)
    }
  }, [menuOpen])

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_2px_8px_-1px_rgba(16,55,92,0.06),0_1px_3px_0_rgba(16,55,92,0.04)]">
      <div className="bg-primary text-on-primary py-space-xs px-margin-mobile lg:px-margin text-center flex items-center justify-center gap-space-sm font-label-md text-label-md">
        <span>{announcement.text}</span>
        <a
          className="text-tertiary-fixed underline font-label-md hover:text-on-primary transition-colors shrink-0"
          href="#join"
        >
          {announcement.linkLabel}
        </a>
      </div>

      <div className="h-20 w-full max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
        <a href="#hero" className="flex items-center gap-space-sm shrink-0">
          <img alt="شعار الفوج" className="w-8 h-8 rounded-full object-cover" src={logoUrl} />
          <div className="flex flex-col text-right">
            <span className="font-title-md text-title-md text-primary font-bold leading-tight">
              {siteConfig.name}
            </span>
            <span className="font-label-sm text-label-sm text-secondary hidden sm:block">
              {siteConfig.tagline}
            </span>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-space-md" aria-label="التنقل الرئيسي">
          {navItems.map((item) => {
            const isActive = item.id === activeId
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={cn(
                  'font-label-lg text-label-lg transition-colors',
                  isActive ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary',
                )}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-space-sm shrink-0">
          <a
            className="bg-primary text-on-primary font-label-lg text-label-lg px-space-md py-space-xs rounded-lg shadow-xs hover:bg-primary-container hover:text-on-primary-container transition-all"
            href="#join"
          >
            قدّم الآن
          </a>
          <button
            type="button"
            className="xl:hidden w-10 h-10 inline-flex items-center justify-center rounded-lg text-primary hover:bg-surface-container transition-colors"
            aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} className="text-[26px]" />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-menu"
          aria-label="القائمة"
          className="xl:hidden border-t border-surface-container bg-surface max-h-[calc(100vh-7rem)] overflow-y-auto"
        >
          <ul className="max-w-[1320px] mx-auto px-margin-mobile py-space-sm flex flex-col">
            {navItems.map((item) => {
              const isActive = item.id === activeId
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'block py-3 px-space-sm rounded-lg font-title-md text-title-md transition-colors',
                      isActive
                        ? 'bg-surface-container text-primary font-bold'
                        : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
