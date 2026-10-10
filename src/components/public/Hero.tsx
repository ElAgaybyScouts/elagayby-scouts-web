import { ArrowDown, Tent } from 'lucide-react'
import heroImage from '../../assets/hero.png'
import { heroStats } from '../../data/siteData'
import { Button } from '../common/Button'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b355c] text-white">
      <img
        src={heroImage}
        alt="أعضاء كشافة العجايبي أثناء نشاط كشفي"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
      />
      <div className="hero-pattern absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#0b355c] via-[#0b355c]/88 to-[#08243d]/70" />

      <div className="container-page grid min-h-[calc(100svh-7rem)] items-center gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-[#ffe4a0] backdrop-blur">
            <Tent className="h-4 w-4" aria-hidden="true" />
            فوج كشافة العجايبي • خدمة ومحبة ومغامرة
          </div>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.35] md:text-6xl">
            اكتشف روح الكشافة مع مجتمع يعلّم ويخدم ويقود
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-[#e3f3ff]">
            برنامج كشفي كنسي للشباب والأطفال يجمع بين التكوين الروحي، المهارات العملية،
            الانضباط، المغامرة، والعمل الجماعي في بيئة آمنة ومرحبة.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/join" variant="gold" className="text-base">
              قدّم الآن للعام الجديد
            </Button>
            <Button href="/about" variant="secondary" className="bg-white/95 text-base">
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
              اعرف أكثر عنا
            </Button>
          </div>
        </div>

        <div className="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur">
          <div className="grid grid-cols-2 gap-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-lg bg-white/12 p-5">
                <p className="text-3xl font-extrabold text-[#eec252]">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#e3f3ff]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
