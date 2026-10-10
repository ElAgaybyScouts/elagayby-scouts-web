import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'
import { faqItems } from '../../data/siteData'

export function Faq() {
  return (
    <section className="w-full py-20 bg-surface-container-low" id="faq">
      <div className="max-w-[1080px] mx-auto px-margin-mobile lg:px-margin">
        <SectionHeading
          icon="quiz"
          eyebrow="إجابات واضحة"
          title="الأسئلة الشائعة"
          description="إليك أبرز الإجابات عن الاستفسارات التي تهم الشباب وأولياء الأمور قبل الانضمام."
          compactDescription
        />

        <div className="flex flex-col gap-space-sm">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group bg-surface-container-lowest rounded-xl shadow-xs transition-all"
            >
              <summary className="flex items-center justify-between gap-space-sm p-space-md cursor-pointer select-none font-title-lg text-title-lg text-primary font-bold">
                <span className="flex items-center gap-2">
                  <Icon name="help_outline" className="text-primary text-[20px] shrink-0" />
                  <span>{item.question}</span>
                </span>
                <Icon
                  name="expand_more"
                  className="text-[22px] shrink-0 transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <div className="px-space-md pb-space-md pt-space-xs font-body-md text-body-md text-on-surface-variant border-t border-surface-container leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
