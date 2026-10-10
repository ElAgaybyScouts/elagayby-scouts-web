import { Icon } from '../ui/Icon'
import { heroImageUrl, heroStats, siteConfig } from '../../data/siteData'

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-primary text-on-primary" id="hero">
      <div className="absolute inset-0 z-0">
        <img
          alt="كشافة الشهيد مارمينا في المخيم الخلوي"
          className="w-full h-full object-cover object-center brightness-[0.45] contrast-105 scale-105"
          src={heroImageUrl}
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/75 to-primary/40" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-24 flex flex-col items-start justify-center min-h-[82vh]">
        <div className="inline-flex items-center gap-space-sm bg-surface-container-lowest/15 backdrop-blur-md px-space-md py-1.5 rounded-full mb-space-lg shadow-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim animate-pulse" />
          <span className="font-label-md text-label-md text-tertiary-fixed tracking-wide">
            {siteConfig.groupFullName}
          </span>
          <Icon name="military_tech" className="text-[16px] text-tertiary-fixed" />
        </div>

        <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-primary max-w-4xl font-bold leading-tight drop-shadow-md">
          اكتشف روح الكشافة مع <br className="hidden sm:inline" />
          <span className="text-tertiary-fixed decoration-tertiary-fixed-dim/60 underline-offset-8">
            {siteConfig.name}
          </span>
        </h1>

        <p className="font-body-lg text-body-lg text-surface-container-lowest/90 max-w-2xl mt-space-md mb-space-xl leading-relaxed">
          نتعلم، نخدم، نكتشف، وننمو معًا في بيئة تجمع بين المبادئ الروحية، وشجاعة المغامرة، والانضباط
          الكشفي والعمل الجماعي لبناء جيل يقود المستقبل.
        </p>

        <div className="flex flex-wrap items-center gap-space-md w-full sm:w-auto">
          <a
            className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-space-xs bg-tertiary-fixed text-tertiary font-label-lg text-label-lg px-8 py-3.5 rounded-lg font-bold shadow-md hover:bg-tertiary-fixed-dim hover:shadow-lg transition-all hover:-translate-y-0.5"
            href="#join"
          >
            <Icon name="camping" className="text-[20px]" />
            <span>قدّم الآن للعام الجديد</span>
          </a>
          <a
            className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-space-xs bg-surface-container-lowest/10 backdrop-blur-md text-on-primary font-label-lg text-label-lg px-7 py-3.5 rounded-lg hover:bg-surface-container-lowest/20 transition-all"
            href="#about"
          >
            <span>اعرف أكثر عنا</span>
            <Icon name="arrow_downward" className="text-[18px]" />
          </a>
        </div>

        <dl className="w-full mt-16 pt-space-lg border-t border-surface-container-lowest/15 grid grid-cols-2 md:grid-cols-4 gap-space-md">
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-0.5">
              <dt className="flex items-center gap-1 font-headline-lg text-headline-lg text-tertiary-fixed font-bold">
                <span>{stat.value}</span>
                <span className="font-label-sm text-label-sm text-surface-variant/80 font-normal">
                  {stat.unit}
                </span>
              </dt>
              <dd className="font-label-md text-label-md text-surface-variant">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
