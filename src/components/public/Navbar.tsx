import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from '../../data/siteData'
import { Button } from '../common/Button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#d8e7f0] bg-[#f8fcff]/95 backdrop-blur">
      <div className="bg-[#0b355c] px-4 py-2 text-center text-sm font-semibold text-white">
        فتح باب التقديم للعام الكشفي الجديد — الأماكن محدودة حسب كل مرحلة
      </div>
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-lg" aria-label="كشافة العجايبي">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[#0b355c] text-lg font-extrabold text-[#eec252]">
            ع
          </span>
          <span className="text-right">
            <span className="block text-lg font-extrabold text-[#0b355c]">كشافة العجايبي</span>
            <span className="block text-xs font-semibold text-[#60798e]">خدمة ومحبة ومغامرة</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="التنقل الرئيسي">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `focus-ring rounded-lg px-3 py-2 text-sm font-bold transition ${
                  isActive ? 'bg-[#e4f2fb] text-[#0b355c]' : 'text-[#40596c] hover:bg-[#edf7fd]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href="/join" variant="gold">
            قدّم الآن
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring grid h-11 w-11 place-items-center rounded-lg bg-[#e4f2fb] text-[#0b355c] lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {isOpen ? (
        <nav className="border-t border-[#d8e7f0] bg-white px-4 py-4 lg:hidden" aria-label="تنقل الجوال">
          <div className="container-page grid gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `focus-ring rounded-lg px-4 py-3 text-sm font-bold ${
                    isActive ? 'bg-[#e4f2fb] text-[#0b355c]' : 'text-[#40596c]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
