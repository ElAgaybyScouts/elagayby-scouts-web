import { useEffect, useState } from 'react'
import { scoutStages } from '../../data/siteData'
import { usePageTitle } from '../../hooks/usePageTitle'
import { joinRequestService } from '../../services/joinRequestService'
import type { SavedJoinRequest } from '../../types/content'

const stageLabel = (value: string) => scoutStages.find((stage) => stage.value === value)?.label ?? value

export function AdminDashboardPage() {
  usePageTitle('لوحة الإدارة')
  const [requests, setRequests] = useState<SavedJoinRequest[] | null>(null)

  useEffect(() => {
    joinRequestService.list().then(setRequests)
  }, [])

  async function clearAll() {
    if (!window.confirm('مسح كل الطلبات المحفوظة على الجهاز ده؟')) return
    await joinRequestService.clear()
    setRequests([])
  }

  return (
    <section className="flex flex-col gap-space-lg">
      <div className="flex flex-col gap-space-xs">
        <h2 className="font-headline-md text-headline-md text-primary font-bold">طلبات الانضمام</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          الطلبات دي محفوظة مؤقتًا في المتصفح (localStorage) لحد ما يتربط الباك إند Spring Boot / PostgreSQL.
        </p>
      </div>

      {requests === null ? (
        <p className="font-body-md text-body-md text-secondary">جاري التحميل...</p>
      ) : requests.length === 0 ? (
        <div className="bg-surface-container-lowest p-space-xl rounded-xl text-center text-secondary font-body-md text-body-md shadow-xs">
          لسه مفيش طلبات. جرّب تقدّم من الصفحة الرئيسية.
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <span className="font-label-lg text-label-lg text-primary">العدد: {requests.length}</span>
            <button
              type="button"
              onClick={clearAll}
              className="font-label-md text-label-md text-error underline"
            >
              مسح الكل
            </button>
          </div>
          <div className="overflow-x-auto bg-surface-container-lowest rounded-xl shadow-xs">
            <table className="w-full min-w-[720px] text-right font-body-sm text-body-sm">
              <thead className="bg-surface-container text-primary font-label-md text-label-md">
                <tr>
                  {['الاسم', 'السن', 'المرحلة', 'الموبايل', 'الواتساب', 'ولي الأمر', 'التاريخ'].map((h) => (
                    <th key={h} className="p-space-sm font-bold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {requests.map((r) => (
                  <tr key={r.id} className="border-t border-surface-container">
                    <td className="p-space-sm font-bold text-primary">{r.fullName}</td>
                    <td className="p-space-sm">{r.age}</td>
                    <td className="p-space-sm">{stageLabel(r.scoutStage)}</td>
                    <td className="p-space-sm" dir="ltr">{r.phone}</td>
                    <td className="p-space-sm" dir="ltr">{r.whatsapp}</td>
                    <td className="p-space-sm">
                      {r.parentName ? `${r.parentName} (${r.parentRelation})` : '—'}
                    </td>
                    <td className="p-space-sm">{new Date(r.createdAt).toLocaleDateString('ar-EG')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  )
}
