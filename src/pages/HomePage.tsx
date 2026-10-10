import { useEffect } from 'react'
import { About } from '../components/sections/About'
import { Activities } from '../components/sections/Activities'
import { Benefits } from '../components/sections/Benefits'
import { Contact } from '../components/sections/Contact'
import { Faq } from '../components/sections/Faq'
import { Gallery } from '../components/sections/Gallery'
import { Hero } from '../components/sections/Hero'
import { Join } from '../components/sections/Join'
import { Journey } from '../components/sections/Journey'
import { Location } from '../components/sections/Location'
import { usePageTitle } from '../hooks/usePageTitle'

export function HomePage() {
  usePageTitle()

  // لينك مباشر زي /#join: الأقسام بتتعمل render بعد ما المتصفح يحاول يعمل scroll، فبنكمّلها بإيدينا
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Activities />
      <Journey />
      <Benefits />
      <Location />
      <Gallery />
      <Join />
      <Faq />
      <Contact />
    </>
  )
}
