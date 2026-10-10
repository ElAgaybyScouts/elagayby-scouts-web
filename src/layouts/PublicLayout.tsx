import { Outlet } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-background text-on-surface text-right" dir="rtl">
      <Navbar />
      <main className="w-full pt-28 bg-background min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
