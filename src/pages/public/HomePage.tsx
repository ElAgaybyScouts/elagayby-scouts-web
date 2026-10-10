import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Button } from '../../components/common/Button'
import { Card } from '../../components/common/Card'
import { SectionHeader } from '../../components/common/SectionHeader'
import { Hero } from '../../components/public/Hero'
import { ProgramCard } from '../../components/public/ProgramCard'
import { usePageTitle } from '../../hooks/usePageTitle'
import { localContentService } from '../../services/localContentService'

export function HomePage() {
  usePageTitle('الرئيسية')
  const pillars = localContentService.getPillars()
  const programs = localContentService.getPrograms().slice(0, 3)

  return (
    <>
      <Hero />

      <section className="py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="هويتنا ورسالتنا"
            title="كشافة كنسية بروح شبابية ومسؤولية واضحة"
            description="نساعد كل عضو على النمو في الإيمان، الشخصية، المهارة، والقدرة على الخدمة من خلال أنشطة عملية منظمة."
            action={
              <Button href="/about" variant="secondary">
                اقرأ عن الكشافة
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </Button>
            }
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <Card key={pillar.title}>
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-[#e4f2fb] text-[#0b355c]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0b355c]">{pillar.title}</h3>
                  <p className="mt-4 leading-8 text-[#526a7d]">{pillar.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf6fd] py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="المراحل والبرامج"
            title="مسار مناسب لكل عمر"
            description="كل مرحلة لها أهدافها، قائدها، ونظامها، مع أنشطة تراعي العمر والنمو النفسي والروحي."
            action={
              <Button href="/programs" variant="primary">
                كل البرامج
              </Button>
            }
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.title} program={program} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold text-[#9a7415]">لماذا ينضم الأولاد والشباب؟</p>
            <h2 className="text-3xl font-extrabold leading-tight text-[#0b355c] md:text-4xl">
              لأن الكشافة تصنع ذكريات جميلة وشخصيات أقوى
            </h2>
            <p className="mt-5 text-lg leading-9 text-[#526a7d]">
              لا نقدم نشاطًا ترفيهيًا فقط، بل تجربة مستمرة يتعلم فيها العضو كيف يخدم، يقود،
              يتحمل مسؤولية، ويعيش روح الفريق داخل إطار كنسي أمين.
            </p>
          </div>
          <Card className="bg-[#0b355c] text-white">
            <ul className="grid gap-4">
              {['برنامج واضح لكل مرحلة', 'قادة متابعون ومؤهلون', 'أنشطة آمنة ومنظمة', 'تواصل مستمر مع أولياء الأمور'].map(
                (item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#eec252]" aria-hidden="true" />
                    <span className="text-lg font-bold leading-8">{item}</span>
                  </li>
                ),
              )}
            </ul>
          </Card>
        </div>
      </section>
    </>
  )
}
