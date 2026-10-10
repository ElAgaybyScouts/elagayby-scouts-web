import { Link } from 'react-router-dom'
import { quickLinks } from '../../data/siteData'

export function Footer() {
  return (
    <footer className="bg-[#e5f3fb] py-12 text-[#28465e]">
      <div className="container-page grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#0b355c] font-extrabold text-[#eec252]">
              ع
            </span>
            <h2 className="text-xl font-extrabold text-[#0b355c]">كشافة العجايبي</h2>
          </div>
          <p className="leading-8">
            فوج كشفي كنسي يربّي أجيالًا محبة للخدمة، منضبطة، وقادرة على القيادة بروح
            الإيمان والعمل الجماعي.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-extrabold text-[#0b355c]">روابط سريعة</h3>
          <ul className="grid gap-3">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link className="focus-ring rounded text-sm font-semibold hover:text-[#0b355c]" to={link.path}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-extrabold text-[#0b355c]">مواعيد الاجتماعات</h3>
          <div className="grid gap-3 text-sm leading-7">
            <p>الأشبال والزهرات: الجمعة ٤:٠٠ م</p>
            <p>الكشافة والمرشدات: الجمعة ٦:٣٠ م</p>
            <p>المتقدم والجوالة: الأحد ٧:٠٠ م</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-extrabold text-[#0b355c]">تواصل معنا</h3>
          <div className="grid gap-3 text-sm leading-7">
            <p>هاتف: <span className="number-ltr">0120 000 0000</span></p>
            <p>البريد: info@elagayby-scouts.org</p>
            <p>كنيسة الشهيد العظيم مارمينا</p>
          </div>
        </div>
      </div>
      <div className="container-page mt-10 border-t border-[#c8dce8] pt-6 text-center text-sm font-semibold">
        © ٢٠٢٦ كشافة العجايبي — جميع الحقوق محفوظة
      </div>
    </footer>
  )
}
