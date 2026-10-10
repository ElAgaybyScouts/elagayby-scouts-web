import { useEffect, useState } from 'react'

/**
 * بيراقب الأقسام (حسب الـ ids) وبيرجّع id القسم اللي المستخدم واقف عنده دلوقتي.
 * بيتستخدم في الـ Navbar عشان نلوّن اللينك النشط.
 */
export function useActiveSection(ids: string[], offset = 140) {
  const [active, setActive] = useState(ids[0] ?? '')
  const key = ids.join('|')

  useEffect(() => {
    const sectionIds = key.split('|').filter(Boolean)

    const update = () => {
      // لو وصلنا لآخر الصفحة نفعّل آخر قسم حتى لو قصير
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4
      if (atBottom) {
        setActive(sectionIds[sectionIds.length - 1])
        return
      }

      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id
      }
      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [key, offset])

  return active
}
