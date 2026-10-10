import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'
import { activities } from '../../data/siteData'

export function Activities() {
  return (
    <section className="w-full py-20 bg-surface-container-low" id="activities">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <SectionHeading
          icon="hiking"
          eyebrow="منهج متكامل الأبعاد"
          title="بنعمل إيه؟"
          description="برامج متخصصة ومدروسة تصنع شخصية قوية تجمع بين اللياقة البدنية، الذكاء الميداني، والروح القيادية في كافة مجالات الحياة."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {activities.map((activity) => (
            <article
              key={activity.title}
              className="bg-surface-container-lowest p-space-lg rounded-xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <Icon name={activity.icon} className="text-[26px]" />
                  </span>
                  <span className="font-label-sm text-label-sm text-primary bg-surface-container-high px-space-sm py-1 rounded-full font-bold">
                    {activity.badge}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">
                  {activity.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {activity.description}
                </p>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-surface-container flex items-center justify-between text-secondary font-label-sm text-label-sm">
                <span>{activity.footer}</span>
                <Icon name="verified" className="text-[18px] text-primary" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
