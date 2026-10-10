import { Outlet } from 'react-router-dom'
import { siteConfig } from '../data/siteData'

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-surface-container-low text-right" dir="rtl">
      <header className="border-b border-surface-variant bg-surface-container-lowest">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex h-16 items-center justify-between">
          <h1 className="font-title-lg text-title-lg font-bold text-primary">لوحة إدارة {siteConfig.name}</h1>
          <span className="rounded-full bg-tertiary-fixed px-3 py-1 font-label-md text-label-md text-tertiary">
            واجهة أمامية فقط
          </span>
        </div>
      </header>
      <main className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin py-10">
        <Outlet />
      </main>
    </div>
  )
}
