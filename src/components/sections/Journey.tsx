import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'
import { journeyNote, journeySteps } from '../../data/siteData'
import { cn } from '../../utils/cn'

export function Journey() {
  return (
    <section className="w-full py-20 bg-surface" id="journey">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <SectionHeading
          icon="stairs"
          eyebrow="التدرج الحركي والتربوي"
          title="رحلتنا: مسار تطور الكشاف"
          description="الكشافة ليست مجرد نشاط ترفيهي عابر، بل رحلة تصاعدية لبناء شخصية متكاملة عبر خمس محطات تربوية من الطفولة وحتى قيادة المجتمع."
        />

        <ol className="grid grid-cols-1 md:grid-cols-5 gap-space-md relative">
          {journeySteps.map((step) => (
            <li
              key={step.number}
              className="bg-surface-container-lowest p-space-md rounded-xl shadow-xs flex flex-col items-start relative group hover:-translate-y-1 transition-transform"
            >
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center font-title-md text-title-md font-bold mb-space-sm',
                  step.circle,
                )}
              >
                {step.number}
              </div>
              <span className="font-label-sm text-label-sm text-secondary">{step.stage}</span>
              <h3 className="font-title-lg text-title-lg text-primary font-bold mt-1 mb-2">{step.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {step.description}
              </p>
              <div
                className={cn(
                  'mt-space-md text-label-sm font-label-sm flex items-center gap-1',
                  step.highlight ? 'text-tertiary font-bold' : 'text-primary font-semibold',
                )}
              >
                <Icon name={step.audienceIcon} className="text-[14px]" />
                <span>{step.audience}</span>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 bg-surface-container p-space-md rounded-xl flex items-center gap-space-md">
          <Icon name="info" className="text-primary text-[28px] shrink-0" />
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            <strong>{journeyNote.title}</strong> {journeyNote.text}
          </p>
        </div>
      </div>
    </section>
  )
}
