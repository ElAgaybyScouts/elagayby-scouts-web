import { Card } from '../../components/common/Card'
import { SectionHeader } from '../../components/common/SectionHeader'
import { usePageTitle } from '../../hooks/usePageTitle'
import { localContentService } from '../../services/localContentService'

export function AboutPage() {
  usePageTitle('عن الكشافة')
  const pillars = localContentService.getPillars()

  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow="عن الكشافة"
          title="فوج يبني الإنسان قبل النشاط"
          description="كشافة العجايبي مجتمع كنسي تربوي يجمع الأطفال والشباب حول قيم الوعد والقانون والخدمة، في إطار آمن ومنظم ومبهج."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <Card as="section" className="leading-9 text-[#526a7d]">
            <h2 className="mb-4 text-2xl font-extrabold text-[#0b355c]">رسالتنا</h2>
            <p>
              نعمل على إعداد عضو يحب الكنيسة والوطن، يعرف قيمة الفريق، يحترم النظام، ويتعلم
              مهارات الحياة من خلال الخبرة العملية لا الكلام فقط.
            </p>
            <p className="mt-4">
              نعطي مساحة للشباب كي يقودوا ويتعلموا من التجربة، ونساعد الأصغر سنًا على اكتشاف
              مواهبهم بثقة وفرح.
            </p>
          </Card>
          <Card as="aside" className="bg-[#fff8e5]">
            <h2 className="text-2xl font-extrabold text-[#0b355c]">شعارنا العملي</h2>
            <p className="mt-4 text-xl font-bold leading-9 text-[#6f520d]">
              شرف في الوعد، أمانة في الخدمة، وفرح في كل مغامرة.
            </p>
          </Card>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <Card key={pillar.title}>
                <Icon className="mb-4 h-8 w-8 text-[#0b355c]" aria-hidden="true" />
                <h3 className="text-xl font-extrabold text-[#0b355c]">{pillar.title}</h3>
                <p className="mt-3 leading-8 text-[#526a7d]">{pillar.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
