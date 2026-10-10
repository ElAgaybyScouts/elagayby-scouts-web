
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'
import { schedule, siteConfig } from '../../data/siteData'

export function Location() {
  return (
    <section className="w-full py-20 bg-surface" id="location">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-space-md">
          <SectionHeading
            align="start"
            icon="location_on"
            eyebrow="المقر والمواعيد"
            title="مكاننا ومواعيد التجمع الأسبوعي"
            description="نلتقي أسبوعيًا في فناء وقاعات كنيسة الشهيد العظيم مارمينا سنترال الوراق لممارسة الأنشطة التدريبية، التجمع الصباحي، والصلوات المشتركة."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          {/* بيانات المكان والمواعيد */}
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            {/* عنوان الكنيسة */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-xs flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <span className="w-10 h-10 rounded-lg bg-surface-container text-primary flex items-center justify-center">
                  <Icon name="church" className="text-[22px]" />
                </span>

                <div>
                  <h3 className="font-title-lg text-title-lg text-primary font-bold">
                    {siteConfig.churchName}
                  </h3>
                </div>
              </div>

              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                العنوان: {siteConfig.address}
              </p>
            </div>

            {/* مواعيد الاجتماعات */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-xs flex flex-col gap-space-sm">
              <h3 className="font-title-lg text-title-lg text-primary font-bold flex items-center gap-2">
                <Icon
                  name="calendar_clock"
                  className="text-[20px] text-tertiary"
                />
                <span>مواعيد التجمع الأسبوعي</span>
              </h3>

              <ul className="flex flex-col gap-space-xs mt-2">
                {schedule.map((row) => (
                  <li
                    key={row.group}
                    className="p-space-sm bg-surface-container-low rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                  >
                    <div className="flex items-center gap-space-xs">
                      <span
                        className={`w-2.5 h-2.5 rounded-full shrink-0 ${row.dot}`}
                      />
                      <span className="font-title-md text-title-md text-primary font-bold">
                        {row.group}
                      </span>
                    </div>

                    <span className="font-label-md text-label-md text-secondary">
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* التواصل وفتح الاتجاهات */}
            <div className="bg-surface-container p-space-md rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-sm">
                <Icon
                  name="handshake"
                  className="text-primary text-[28px] shrink-0"
                />

                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  يسعد قادة المجموعات بمقابلة أولياء الأمور الجدد كل جمعة بعد
                  صلاة القداس الإلهي مباشرة للإجابة عن أي استفسار.
                </p>
              </div>

              <a
                className="shrink-0 inline-flex items-center gap-1.5 bg-primary text-on-primary px-space-md py-2.5 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors"
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="directions" className="text-[18px]" />
                <span>فتح في خرائط Google</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 bg-surface-container-lowest p-space-sm rounded-xl shadow-xs flex flex-col gap-space-sm overflow-hidden">
            <div className="w-full h-80 rounded-lg overflow-hidden relative">
              <iframe
                title="موقع كنيسة الشهيد العظيم مارمينا - سنترال الوراق"
                src="https://maps.google.com/maps?q=30.0933758,31.2155152&z=18&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div
                dir="ltr"
                className="absolute bottom-3 left-3 bg-surface-container-lowest/95 px-2.5 py-1 rounded-md text-label-sm text-secondary shadow-sm pointer-events-none"
              >
                {siteConfig.coordinatesLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
