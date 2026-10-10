import { EmptyState } from '../../components/common/EmptyState'
import { SectionHeader } from '../../components/common/SectionHeader'
import { ProgramCard } from '../../components/public/ProgramCard'
import { usePageTitle } from '../../hooks/usePageTitle'
import { localContentService } from '../../services/localContentService'

export function ProgramsPage() {
  usePageTitle('البرامج')
  const programs = localContentService.getPrograms()

  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow="البرامج الكشفية"
          title="مراحل واضحة تنمو مع العضو خطوة بخطوة"
          description="تعتمد البرامج على السن، القدرة، والمسؤولية المتدرجة حتى يصل العضو إلى الخدمة والقيادة."
        />
        {programs.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.title} program={program} />
            ))}
          </div>
        ) : (
          <EmptyState title="لا توجد برامج منشورة" description="سيتم نشر المراحل الكشفية قريبًا." />
        )}
      </div>
    </section>
  )
}
