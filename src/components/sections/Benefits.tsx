import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'
import { benefits } from '../../data/siteData'

export function Benefits() {
  return (
    <section className="w-full py-20 bg-surface-container-low" id="benefits">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <SectionHeading
          icon="stars"
          eyebrow="قيم وثمار حقيقية"
          title="ليه تنضم لمجموعة العجايبي الكشفية؟"
          description="الكشافة ليست مجرد قضاء وقت فراغ، بل بيئة آمنة توفر لابنك أو ابنتك مقومات الشخصية المتوازنة والمحبوبة في عالم مليء بالتحديات."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="bg-surface-container-lowest p-space-lg rounded-xl shadow-xs flex items-start gap-space-md"
            >
              <div className="w-12 h-12 rounded-full bg-surface-container text-primary flex items-center justify-center shrink-0">
                <Icon name={benefit.icon} className="text-[24px]" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-title-lg text-title-lg text-primary font-bold mb-1">{benefit.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
