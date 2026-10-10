import { useState } from 'react'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'
import { siteConfig } from '../../data/siteData'
import type { ContactCard } from '../../types/content'
import { ContactForm } from './ContactForm'

const cards: ContactCard[] = [
  {
    icon: 'phone_in_talk',
    title: 'الاتصال الهاتفي',
    subtitle: siteConfig.phone.display,
    cta: 'اتصل الآن ←',
    href: siteConfig.phone.href,
  },
  {
    icon: 'chat',
    title: 'محادثة واتساب',
    subtitle: 'رد سريع خلال دقائق',
    cta: 'راسلنا على واتساب ←',
    href: siteConfig.whatsapp.href,
    external: true,
  },
  {
    icon: 'mail',
    title: 'البريد الإلكتروني',
    subtitle: siteConfig.email,
    cta: 'أرسل رسالة ←',
    href: `mailto:${siteConfig.email}`,
  },
]

const cardClass =
  'bg-surface-container-lowest p-space-lg rounded-xl shadow-xs flex flex-col items-center text-center'
const iconBubbleClass =
  'w-14 h-14 rounded-full bg-surface-container text-primary flex items-center justify-center mb-space-sm transition-colors'

export function Contact() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <section className="w-full py-20 bg-surface" id="contact">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <SectionHeading
          icon="contact_support"
          eyebrow="نحن دائمًا في الخدمة"
          title="تواصل معنا"
          description="يسعدنا الرد على جميع استفسارات أولياء الأمور والشباب عبر قنوات التواصل المباشرة التالية."
          compactDescription
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mb-16">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`${cardClass} hover:shadow-md transition-all group`}
            >
              <div className={`${iconBubbleClass} group-hover:bg-primary group-hover:text-on-primary`}>
                <Icon name={card.icon} className="text-[28px]" />
              </div>
              <span className="font-title-md text-title-md font-bold text-primary">{card.title}</span>
              <span className="font-body-sm text-body-sm text-secondary mt-1">{card.subtitle}</span>
              <span className="font-label-sm text-label-sm text-primary mt-3 group-hover:underline">
                {card.cta}
              </span>
            </a>
          ))}

          <div className={cardClass}>
            <div className={iconBubbleClass}>
              <Icon name="share" className="text-[28px]" />
            </div>
            <span className="font-title-md text-title-md font-bold text-primary">صفحات التواصل</span>
            <span className="font-body-sm text-body-sm text-secondary mt-1">فيسبوك &amp; إنستغرام</span>
            <div className="flex items-center gap-space-sm mt-3 font-label-md text-label-md text-primary">
              {siteConfig.social.slice(0, 2).map((item, index) => (
                <span key={item.label} className="flex items-center gap-space-sm">
                  {index > 0 ? <span>•</span> : null}
                  <a className="hover:underline" href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low p-space-lg md:p-space-xl rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-space-lg">
            <div className="flex flex-col gap-space-xs text-right max-w-xl">
              <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
                لديك سؤال محدد أو اقتراح لقادة الكشافة؟
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                فريق مجموعة العجايبي الكشفية جاهز للإصغاء والمساعدة في أي وقت لمصلحة ونمو أولادنا.
              </p>
            </div>
            <div className="flex items-center gap-space-sm shrink-0">
              <button
                type="button"
                aria-expanded={formOpen}
                aria-controls="support-form"
                onClick={() => setFormOpen((open) => !open)}
                className="bg-primary text-on-primary font-label-lg text-label-lg px-8 py-3.5 rounded-lg font-bold hover:bg-primary-container transition-all"
              >
                {formOpen ? 'إغلاق النموذج ✕' : 'أرسل سؤالك أو مشكلتك 💬'}
              </button>
            </div>
          </div>

          {formOpen ? (
            <div
              id="support-form"
              className="mt-space-lg pt-space-lg border-t border-outline-variant bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-xs"
            >
              <ContactForm />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}