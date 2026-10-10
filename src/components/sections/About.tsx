import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'
import { pillars } from '../../data/siteData'

export function About() {
  return (
    <section className="w-full py-20 bg-surface" id="about">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-space-md">
          <SectionHeading
            align="start"
            icon="explore"
            eyebrow="هويتنا ورسالتنا"
            title="من نحن؟"
            description="مجموعة العجايبي الكشفية هي مجتمع كنسي وتربوي متكامل من الشباب والأطفال، يجتمعون معًا لتعلّم مهارات جديدة، وخدمة مجتمعهم، وبناء شخصيات متزنة ومستقيمة عبر معايشة الطبيعة والعمل الجماعي والانضباط المحب."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mb-16">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-xs hover:shadow-md transition-all flex flex-col gap-space-sm relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <Icon name={pillar.icon} className="text-[26px]" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">{pillar.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {pillar.description}
              </p>
              <div className="mt-auto pt-space-xs flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-bold">
                <span>{pillar.tag}</span>
                <Icon name="arrow_back" className="text-[14px]" />
              </div>
            </article>
          ))}
        </div>

        <div className="w-full bg-primary-container text-on-primary p-space-lg md:p-space-xl rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-14 h-14 shrink-0 rounded-full bg-surface-container-lowest/15 flex items-center justify-center text-tertiary-fixed">
              <Icon name="format_quote" className="text-[32px]" />
            </div>
            <blockquote className="flex flex-col">
              <p className="font-title-lg text-title-lg text-on-primary font-bold italic leading-snug">
                «الكشافة أسلوب حياة، وصناعة القادة المخلصين لكنيستهم ووطنهم.»
              </p>
              <footer className="font-label-md text-label-md text-on-primary-container mt-1">
                من ميثاق فوج كشافة ومرشدات مجموعة العجايبي الكشفية
              </footer>
            </blockquote>
          </div>
          <a
            className="shrink-0 bg-surface-container-lowest text-primary px-space-md py-2.5 rounded-lg font-label-lg text-label-lg hover:bg-surface-container transition-colors"
            href="#benefits"
          >
            لماذا نختار الكشافة؟ ←
          </a>
        </div>
      </div>
    </section>
  )
}
