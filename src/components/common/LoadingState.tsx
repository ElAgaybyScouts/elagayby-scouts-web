import { LoaderCircle } from 'lucide-react'

export function LoadingState({ label = 'جاري التحميل...' }: { label?: string }) {
  return (
    <div className="flex min-h-48 items-center justify-center rounded-lg border border-[#d8e7f0] bg-white">
      <div className="flex items-center gap-3 text-[#0b355c]">
        <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" />
        <span className="font-semibold">{label}</span>
      </div>
    </div>
  )
}
