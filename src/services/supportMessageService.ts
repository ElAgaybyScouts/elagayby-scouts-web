import type { SupportMessage } from '../types/content'

/**
 * طبقة الخدمة بتاعة رسائل الأسئلة والمقترحات والمشاكل.
 *
 * TODO: الربط مع الباك إند (Spring Boot) عن طريق الـ API:
 *   POST /api/support-messages
 *   Body: { fullName, phone, message }
 *
 * لما الـ endpoint يجهز، هنشيل السطر المؤقت تحت وفعّل الـ fetch:
 *
 *   const response = await fetch('/api/support-messages', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(message),
 *   })
 *   if (!response.ok) throw new Error('Failed to send support message')
 *
 * مش هنتحتاج نلمس أي كومبوننت (ContactForm بيعمل catch للخطأ ويعرض رسالة الفشل).
 */
export const supportMessageService = {
  async submit(message: SupportMessage): Promise<void> {
    // TODO: احذف السطر ده بعد ربط الـ API (بيمنع تحذير "unused parameter" ويخلّي الفورم تكمّل لحد ما الباك إند يجهز)
    void message
  },
}