import { useEffect } from 'react'

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} |  مجموعة العجايبي الكشفية ` : 'مجموعة العجايبي الكشفية'
  }, [title])
}
