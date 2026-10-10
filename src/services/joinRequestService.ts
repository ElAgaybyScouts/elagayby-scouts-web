import type { JoinRequest, SavedJoinRequest } from '../types/content'

/**
 * طبقة الخدمة بتاعة طلبات الانضمام.
 *
 * TODO: الربط مع الباك إند (Spring Boot) عن طريق الـ API.
 * لحد ما الـ endpoints تجهز، الدوال دي مش بتحفظ أي حاجة فعليًا
 * (الطلبات اللي بتتبعت دلوقتي مش بتوصل لأي مكان).
 *
 *   submit()  ->  POST   /api/join-requests        Body: JoinRequest
 *   list()    ->  GET    /api/join-requests        (للأدمن — محتاجة صلاحيات)
 *   clear()   ->  DELETE /api/join-requests        (للأدمن — لازم تتأكد إنها محتاجة تفضل موجودة)
 *
 * كود الـ fetch الجاهز (فعّله وشيل الأسطر المؤقتة):
 *
 *   // submit
 *   const response = await fetch('/api/join-requests', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(request),
 *   })
 *   if (!response.ok) throw new Error('Failed to submit join request')
 *
 *   // list
 *   const response = await fetch('/api/join-requests')
 *   if (!response.ok) throw new Error('Failed to load join requests')
 *   return (await response.json()) as SavedJoinRequest[]
 *
 * مش هتحتاج تلمس أي كومبوننت (Join.tsx بيعمل catch للخطأ ويعرض رسالة الفشل).
 *
 * ملحوظة: list() و clear() موجودين دلوقتي بس عشان صفحة الأدمن (AdminDashboardPage) تفضل
 * شغالة من غير تعديل — بيرجّعوا قيم فاضية.
 */
export const joinRequestService = {
  async submit(request: JoinRequest): Promise<void> {
    // TODO: احذف السطر ده بعد ربط الـ API (مؤقت عشان الفورم تكمّل لحد ما الباك إند يجهز)
    void request
  },

  async list(): Promise<SavedJoinRequest[]> {
    // TODO: استبدلها بـ GET /api/join-requests
    return []
  },

  async clear(): Promise<void> {
    // TODO: استبدلها بـ DELETE /api/join-requests (أو احذفها لو مش محتاجها)
  },
}