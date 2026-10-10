import { logoUrl, schedule, siteConfig } from '../../data/siteData'

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low pt-space-xl pb-space-lg text-on-surface mt-space-xl">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg mb-space-xl">
          <div className="flex flex-col gap-space-sm text-right">
            <div className="flex items-center gap-space-sm">
              <img alt="شعار الفوج" className="w-8 h-8 rounded-full object-cover" src={logoUrl} />
              <span className="font-title-lg text-title-lg text-primary font-bold">{siteConfig.name}</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              ننشئ أجيالاً واعية بروح الخدمة، والانضباط، ومحبة الوطن والكنيسة منذ عام ٢٠٠٤ عبر التقاليد
              الكشفية الأصيلة والأنشطة الميدانية والروحية المتكاملة.
            </p>
          </div>

          <div className="flex flex-col gap-space-sm text-right">
            <h4 className="font-title-md text-title-md text-primary font-bold">روابط سريعة</h4>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              {[
                ['#about', 'عن المجموعة وتاريخه'],
                ['#activities', 'المراحل الكشفية والأنشطة'],
                // TODO: فك الكومنت لما قسم المعرض (Gallery) يرجع
                // ['#gallery', 'معرض المخيمات والأنشطة'],
                ['#faq', 'الشروط والأسئلة المتكررة'],
                ['#join', 'استمارة الالتحاق الجديدة'],
              ].map(([href, label]) => (
                <li key={href} className="hover:text-primary transition-colors">
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-space-sm text-right">
            <h4 className="font-title-md text-title-md text-primary font-bold">مواعيد الاجتماعات</h4>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              {schedule.map((row) => (
                <p key={row.group}>
                  <strong>{row.shortGroup}:</strong> {row.time}
                </p>
              ))}
              <p className="text-secondary text-label-sm font-label-sm mt-space-xs">
                {siteConfig.churchName} — مصر
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm text-right">
            <h4 className="font-title-md text-title-md text-primary font-bold">تواصل معنا</h4>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <p>هاتف: {siteConfig.phone.display}</p>
              <p>واتساب: {siteConfig.whatsapp.display}</p>
              <p>البريد: {siteConfig.email}</p>
              <div className="flex items-center gap-space-sm mt-space-xs font-label-md text-label-md text-primary">
                {siteConfig.social.map((item, index) => (
                  <span key={item.label} className="flex items-center gap-space-sm">
                    {index > 0 ? <span>•</span> : null}
                    <a
                      className="hover:underline"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-space-md text-center text-on-surface-variant font-label-md text-label-md">
          <p>
            ©{" "}
            {new Intl.DateTimeFormat("ar-EG", {
              year: "numeric",
              timeZone: "Africa/Cairo",
            }).format(new Date())}{" "}
            {siteConfig.name} — جميع الحقوق محفوظة
          </p>
        </div>

      </div>
    </footer>
  )
}