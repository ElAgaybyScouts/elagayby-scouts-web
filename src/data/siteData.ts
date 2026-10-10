import type {
  Activity,
  Benefit,
  FaqItem,
  GalleryCategory,
  GalleryPhoto,
  JourneyStep,
  NavItem,
  Pillar,
  ScheduleRow,
  Stat,
} from '../types/content'

export const logoUrl =
  '/images/logo.webp'

export const heroImageUrl =
  '/images/home.webp'

export const siteConfig = {
  name: 'مجموعة العجايبي الكشفية',
  tagline: 'منذ ٢٠٠٤ • خدمة ومحبة ومغامرة',
  groupFullName: 'كشافة الشهيد العظيم مارمينا سنترال الوراق • منذ ٢٠٠٤',
  churchName: ' كنيسة الشهيد العظيم مارمينا سنترال الوراق',
  phone: { href: 'tel:---', display: '---' },
  whatsapp: { href: 'https://wa.me/2010000000', display: '----' },
  email: 'elagybyscout@gmail.com',
  address: 'شارع لبيب عبده، بجوار ملف السيما، الوراق / الجيزة.',
  coordinatesLabel: '30.0933758, 31.2155152',
  mapsUrl: 'https://maps.app.goo.gl/Rk5GqmmHxC8bSfSo7',
  social: [
    { label: 'فيسبوك', href: 'https://www.facebook.com/groups/7784479775' },
    { label: 'إنستغرام', href: 'https://www.instagram.com/el_3agybi_scout/' },
    { label: 'يوتيوب', href: 'https://www.youtube.com/@ElagybyScout' },
  ],
}

export const announcement = {
  text: '🏕️ فتح باب التقديم للعام الكشفي الجديد — الأماكن محدودة لجميع المراحل الكشفية!',
  linkLabel: 'سجل الآن ←',
}

export const navItems: NavItem[] = [
  { label: 'الرئيسية', id: 'hero' },
  { label: 'من نحن', id: 'about' },
  { label: 'بنعمل إيه؟', id: 'activities' },
  { label: 'رحلتنا', id: 'journey' },
  { label: 'مكاننا', id: 'location' },
//   { label: 'معرض الصور', id: 'gallery' },
  { label: 'الأسئلة الشائعة', id: 'faq' },
  { label: 'تواصل معنا', id: 'contact' },
]

export const heroStats: Stat[] = [
  { value: '+٢٣', unit: 'عاماً', label: 'عطاء كشفي ورعوي مستمر' },
  { value: '+١٠٠', unit: 'عضو', label: 'كشاف ومرشدة وقائد نشط' },
  { value: '+٢٠', unit: 'مخيماً', label: 'مخيم خلوي ورحلة استكشافية' },
  { value: '٥', unit: 'مراحل', label: 'من البراعم وحتى الجوالة' },
]

export const pillars: Pillar[] = [
  {
    "icon": "church",
    "title": "القيم الروحية",
    "description": "الإيمان الواعي، الإخلاص، المسؤولية الأخلاقية، ومحبة الخدمة والعطاء المبني على نقاء الضمير والانضباط المسيحي القويم.",
    "tag": "وعد وقانون الكشاف"
  },
  {
    "icon": "construction",
    "title": "المهارات الحياتية",
    "description": "تطوير مهارات القيادة، الاعتماد الكامل على النفس، الإسعافات الأولية السريعة، وتطبيقات الريادة الكشفية والعقد والحبال.",
    "tag": "شارات الهواية والجدارة"
  },
  {
    "icon": "landscape",
    "title": "روح المغامرة",
    "description": "رحلات استكشافية دورية، تخييم تحت قبّة السماء، تحديات الطهي الخلوي، وتنمية لياقة التحدي والتعامل مع ظروف البرية.",
    "tag": "مخيمات سنوية متجددة"
  },
  {
    "icon": "volunteer_activism",
    "title": "الخدمة المجتمعية",
    "description": "مشاركة منظمة في تأمين وتنظيم أعياد ومناسبات الكنيسة، دعم المبادرات البيئية والخيرية، ومساندة كل محتاج بكل تفانٍ.",
    "tag": "عمل يومي نبيل"
  }
]

export const activities: Activity[] = [
  {
    "icon": "all_inclusive",
    "badge": "الريادة والحبال",
    "title": "الفنون والتقاليد الكشفية",
    "description": "تعلّم العقد والربطات الهندسية، واستخدام البوصلة والخرائط الطبوغرافية، وإشارات المورس، ونصب الأبراج والخيام بمجهود ذاتي ممتع.",
    "footer": "التطبيق الميداني: أسبوعياً"
  },
  {
    "icon": "forest",
    "badge": "الحياة الخلوية",
    "title": "المخيمات والرحلات الخلوية",
    "description": "مغامرات سنوية في وادي الريان وسيناء وسائر المحميات؛ إعداد الطعام الخلوي، مواقد السمر الليلية، والتعايش الكامل مع عناصر الطبيعة.",
    "footer": "مخيمات: شتوية وصيفية"
  },
  {
    "icon": "sports_martial_arts",
    "badge": "اللياقة والمرونة",
    "title": "اللياقة والرياضة البدنية",
    "description": "دورات كرة القدم وكرة السلة، سباقات اختراق الضاحية، مسابقات الجري والوثب، ومسارات الحواجز الكشفية لرفع التحمل ومقاومة التعب.",
    "footer": "بطولات فوج سنوية"
  },
  {
    "icon": "diversity_3",
    "badge": "العطاء المجتمعي",
    "title": "الخدمة العامة والتطوع",
    "description": "تنظيم الاحتفالات الكبرى، إدارة الحشود بنظام وهدوء، حملات تنظيف وتشجير البيئة، وتعبئة وتوزيع المساعدات على الأسر الأكثر احتياجًا.",
    "footer": "خدمة الكنيسة والوطن"
  },
  {
    "icon": "menu_book",
    "badge": "البناء الفكري",
    "title": "النمو الروحي والوعي الفكري",
    "description": "جلسات تأمل، دراسات كتابية مبسطة مناسبة لكل مرحلة عمرية، ندوات لمكافحة الإدمان والتكنولوجيا السلبية، وتوجيه نفسي وتربوي سليم.",
    "footer": "إرشاد قادة متخصصين"
  },
  {
    "icon": "workspace_premium",
    "badge": "إعداد القادة",
    "title": "القيادة وصنع القرار",
    "description": "نظام الطليعة الديمقراطي: تدريب الكشاف على قيادة زملائه، إدارة الميزانيات التقديرية، التخطيط الاستراتيجي، وحل المشكلات بحكمة وسرعة.",
    "footer": "رتب وشارات معتمدة"
  }
]

export const journeySteps: JourneyStep[] = [
  {
    "number": "١",
    "stage": "المرحلة الأولى",
    "title": "اكتشِف",
    "description": "التعرف على المجموعة وروح الصداقة، زرع حب المغامرة، وفهم الوعد والقانون البسيط في سن مبكرة.",
    "audienceIcon": "child_care",
    "audience": "البراعم والأشبال",
    "circle": "bg-primary text-on-primary",
    "highlight": false
  },
  {
    "number": "٢",
    "stage": "المرحلة الثانية",
    "title": "تعلَّم",
    "description": "اكتساب التقاليد الكشفية، مهارات العقد وفك الشفرات، الإسعاف الأولي، والمبادئ الأساسية للتخييم.",
    "audienceIcon": "school",
    "audience": "الفتيان والكشافة",
    "circle": "bg-primary-container text-on-primary",
    "highlight": false
  },
  {
    "number": "٣",
    "stage": "المرحلة الثالثة",
    "title": "شارِك",
    "description": "الاندماج العميق في الطليعة، خوض المخيمات الطويلة، إعداد وجبات الخلاء، والمشاركة في مسابقات الفوج.",
    "audienceIcon": "group",
    "audience": "المرشدات والمتقدم",
    "circle": "bg-surface-tint text-on-primary",
    "highlight": false
  },
  {
    "number": "٤",
    "stage": "المرحلة الرابعة",
    "title": "اخدِم",
    "description": "ترجمة المهارات لخدمة الكنيسة، تنظيم المؤتمرات الحاشدة، ومساندة الحملات الخيرية ومبادرات المحافظة.",
    "audienceIcon": "volunteer_activism",
    "audience": "مرحلة الجوالة",
    "circle": "bg-primary-fixed-dim text-primary",
    "highlight": false
  },
  {
    "number": "٥",
    "stage": "المرحلة الخامسة",
    "title": "قُد",
    "description": "تولي قيادة الطليعة والفرقة، تدريب الأجيال الجديدة، وإدارة المشاريع الكشفية والتربوية الكبرى.",
    "audienceIcon": "military_tech",
    "audience": "قادة ومساعدو الفوج",
    "circle": "bg-tertiary-fixed text-tertiary",
    "highlight": true
  }
]

export const journeyNote = {
  title: 'ملحوظة تربوية:',
  text: 'يمر كل عضو ببرنامج ترقي رسمي، يحصل بموجبه على وشاح وشارات جدارة معتمدة تُسلّم في حفل سنوي رسمي بحضور كهنة الكنيسة وأولياء الأمور.',
}

export const benefits: Benefit[] = [
  {
    "icon": "diversity_1",
    "title": "صداقات تدوم مدى الحياة",
    "description": "ينشأ الشباب وسط رفقاء مخلصين يشاركونهم نفس المبادئ والاهتمامات الراقية داخل أسوار الكنيسة وخارجها."
  },
  {
    "icon": "psychology",
    "title": "مهارات عملية وحياتية نادرة",
    "description": "الإسعاف الأولي، التصرف في الطوارئ، فنون الطهي السريع، التخييم، والتعامل الآمن مع الحبال والأدوات."
  },
  {
    "icon": "shield",
    "title": "بناء شخصية واثقة ومرنة",
    "description": "الخروج من منطقة الراحة عبر معايشة الطبيعة، وتعلّم الصبر وتخطي الصعاب والاعتماد على الذات في كل موقف."
  },
  {
    "icon": "rocket_launch",
    "title": "تنمية روح المبادرة والقيادة",
    "description": "تعويد الكشاف على التفكير المستقل، تقديم الحلول الإبداعية، وقيادة زملائه وتحفيزهم بروح التواضع والمحبة."
  },
  {
    "icon": "terrain",
    "title": "خوض مغامرات واكتشاف الطبيعة",
    "description": "بديل صحي وملهم للشاشات الرقمية والألعاب الإلكترونية من خلال المسير الخلوي، واستكشاف صحاري ووديان مصر."
  },
  {
    "icon": "favorite",
    "title": "الإحساس بالانتماء وخدمة الآخرين",
    "description": "الشعور بالفخر بارتداء الزي الموحد والمنديل الكشفي، والتسابق على فعل الخير وإسعاد الناس دون مقابل."
  }
]

export const schedule: ScheduleRow[] = [
  { group: 'الأشبال والزهرات (٧ - ١١ سنة)', shortGroup: 'الأشبال والزهرات', time: 'الجمعة: ٢:٠٠ م - ٤:٣٠ م', dot: 'bg-primary' },
  { group: 'الكشافة والمرشدات (١١ - ١٥ سنة)', shortGroup: 'الكشافة والمرشدات', time: 'الجمعة: ٤:٣٠ م - ٧:٠٠ م', dot: 'bg-primary-container' },
  { group: 'الكشاف المتقدم والجوالة (١٥+ سنة)', shortGroup: 'المتقدم والجوالة', time: 'الأحد: ٧:٠٠ م - ٩:٣٠ م', dot: 'bg-tertiary-container' },
]

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'الكل' },
  { id: 'camps', label: 'المخيمات' },
  { id: 'ropes', label: 'الريادة والحبال' },
  { id: 'service', label: 'الخدمة' },
  { id: 'campfire', label: 'المسامرة' },
]

export const galleryPhotos: GalleryPhoto[] = [
  {
    "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuDa9AAtQ3eyabNWepn0aMgsLRGvVGTeP4vyPwk7UNijIZ1m6qe4kITZH8Ir4N-Q0FiA9xtyi14N3IMw7XQB1n5UOirs2FKqHlh18pXy__r8ANRukYh4wVeMEzrqiXT5KB2saR-3T_oA-CSd-ZRAsjmeOXP6axc4mB3P_beKds0lHQiCGzq_g8SMrc9DcUYkXpT7324_9TQzH-Cm_bP-bAnCjPxbde8iY7WwPgJ7Uh8y",
    "alt": "مخيم كشافة الشهيد مارمينا الخلوي في صحراء وادي الريان",
    "kicker": "المخيم الخلوي السنوي • محمية وادي الريان",
    "title": "تدريب الطليعة على بناء المواقد الخشبية والطهي الخلوي",
    "wide": true,
    "tall": true,
    "category": "camps"
  },
  {
    "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCaQEqvIZuCaNi3i4q0bkHkV2Kl_HQhjw1REY5e8cnPM3vbWgUpkfau7o-d7EkXsUEAG4nAvh8_vBaKrh7Ij8dU6LLYegMjTdpeOTdyJAmSASQd1VPGRrk12MPpKVeCden0XSrmwPUbgTXSV2lTtU2FvSRwLeWwa-zS7CXzSfexuXyyfEZn9CGiLHKgWLGa_dmAcllcje_5K8_ydr9pZZ_CdUY0JkwHCIfkeW33W4r8",
    "alt": "معلم كشفي يشرح العقد والربطات الهندسية للأعضاء",
    "kicker": "ورشة الريادة الكشفية",
    "title": "إتقان العقد والربطات الهندسية",
    "wide": false,
    "tall": true,
    "category": "ropes"
  },
  {
    "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ5fQWcQooFhws3i9I9b6IC47u199ygPCQqYxaDp6nCZr_-nECRnXPwFHNg0hPaM21QSnXh8TE1lFjBslslY_qIqNHCyP6vsHQFVqfpJuT84TSL3xeRZuyZ8Tpf3JA4w7it_XqnGK3WRtl3XQmU520kUEFyn9Mw8AyROoc6bcFhn3LWm2PI8h8_KMdjRKKkT52RErUkUUauZoO6y4ZtCrpSZwn-7_W1locKMkOzk5z",
    "alt": "موسيقى الفوج في طابور العرض الرسمي بفناء الكنيسة",
    "kicker": "طابور العرض الرسمي",
    "title": "موسيقى الفوج واستعراض الأعلام في العيد",
    "wide": false,
    "tall": false,
    "category": "service"
  },
  {
    "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCWB4W-j9DzIYc8Ruqy9yfiel0yTwhPA3lkXzx_Ml4b7HhwArtgF1BewhajYSqUxxRuk79tKtPJb8uIUNl9WbSA9gKwRx_l7TY_4p0fb4zEhI6I59sYqWREt6cbgELzjTu-5jaGeLvnRwzATSbxIwA4O133vBWGntvfJgRqVq54qHkrD1TKh7KONTvOskwAjcPi92i6mG-guup8SKwIJF_8GWK1nOY4UrKSlq7nV_x2",
    "alt": "كشافة حول نار المسامرة تحت سماء النجوم",
    "kicker": "نيران المسامرة",
    "title": "أهازيج وترانيم كشفية تحت سماء النجوم",
    "wide": false,
    "tall": false,
    "category": "campfire"
  },
  {
    "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuDvOYh9r7PVYQiN0u-g71sN8vFFuJ4bfv0et3WvVH-VZcIwAbyQcN6RmovCGSwMz35cO8T3R5JUBD4PZFGLC00FNeOdxBDuoVl-oOnm4O_J5poGviDn58fZ4LJ99uyxnZJJrRZY0lVGvgxOgrDPHAsxdiZIUOp_hyQs2TRDjrXqexrhJN208xESmhULDMbKFRYX4IAPSCebY30fp1uCuSKkXLZAwlN-xMdE3bH8LfTo",
    "alt": "أعضاء الفوج ينظمون احتفالات الكنيسة ويساعدون الحضور",
    "kicker": "خدمة الكنيسة",
    "title": "تنظيم الاحتفالات ومساندة شعب الكنيسة",
    "wide": false,
    "tall": false,
    "category": "service"
  }
]

export const scoutStages = [
  { value: 'براعم', label: 'براعم (٥ - ٧ سنوات)' },
  { value: 'أشبال_وزهرات', label: 'أشبال وزهرات (٧ - ١١ سنة)' },
  { value: 'كشافة_ومرشدات', label: 'كشافة ومرشدات (١١ - ١٥ سنة)' },
  { value: 'متقدم', label: 'كشاف متقدم ورائدات (١٥ - ١٨ سنة)' },
  { value: 'جوالة', label: 'عشيرة الجوالة (١٨ سنة فما فوق)' },
] as const

export const faqItems: FaqItem[] = [
  {
    "question": "من يمكنه الانضمام إلى مجموعة العجايبي الكشفية؟",
    "answer": "التقديم مفتوح لجميع الأطفال والشباب (بنين وبنات) بدءًا من سن ٥ سنوات وحتى مرحلة الشباب والجامعة، دون أي شروط مسبقة سوى الرغبة الصادقة في الالتزام بحضور الاجتماعات والتحلي بروح المحبة والخدمة."
  },
  {
    "question": "ما هي المراحل الكشفية المتاحة في المجموعة؟",
    "answer": "تنقسم المجموعة إلى ٥ مراحل تخصصية: البراعم (٥-٧ سنوات)، الأشبال والزهرات (٧-١١ سنة)، الكشافة والمرشدات (١١-١٥ سنة)، الكشاف المتقدم والرائدات (١٥-١٨ سنة)، وعشيرة الجوالة والجوالات (١٨ سنة فما فوق)."
  },
  {
    "question": "أين ومتى تُقام الاجتماعات الأسبوعية؟",
    "answer": "تُعقد الاجتماعات أسبوعياً في فناء وقاعات كنيسة الشهيد العظيم مارمينا سنترال الوراق. يوم الجمعة مخصص لمراحل الأشبال والكشافة (من ٢:٠٠ م إلى ٧:٠٠ م حسب المرحلة)، ويوم الأحد مخصص للمتقدم والجوالة (من ٧:٠٠ م إلى ٩:٣٠ م)."
  },
  {
    "question": "هل يُشترط وجود خبرة كشفية سابقة للمتقدم؟",
    "answer": "إطلاقاً! يبدأ كل عضو جديد في مرحلة تسمى «فترة الإعداد والتهيئة»، حيث يتعلم أساسيات الحركة الكشفية، الوعد، والقانون ومهارات الحبال البسيطة تدريجيًا على يد قادة متخصصين حتى موعد حفل القبول الرسمي."
  },
  {
    "question": "ما طبيعة الأنشطة المقدمة على مدار السنة الدراسية والإجازة؟",
    "answer": "خلال الدراسة نراعي المواعيد والامتحانات وتتركز الأنشطة في الاجتماع الأسبوعي وساعات محدودة، بينما في الإجازة الصيفية تُنظم المخيمات الخلوية الكبرى، الرحلات الشاطئية، والدورات الرياضية ومعسكرات التدريب المكثف."
  },
  {
    "question": "هل تنظم الكشافة رحلات ومخيمات مبيت خارج المحافظة؟",
    "answer": "نعم، تُنظم مخيمات شتوية وصيفية بموافقة كتابية مسبقة من ولي الأمر وإشراف رعوي كامل، في محميات وأماكن مجهزة مثل الفيوم، الإسكندرية، وادي النطرون، ومخيمات الاتحاد الكشفي المصري."
  },
  {
    "question": "هل يمكنني الانضمام إذا كنت لا أعرف أحدًا داخل الكشافة؟",
    "answer": "بالتأكيد! روح الكشافة قائمة على الأخوة والترحيب الفوري. بمجرد حضورك اليوم الأول، يتم استقبالك وإدماجك داخل طليعة تضم أصدقاء في نفس سنك يشجعونك على المشاركة بسرعة وبكل محبة."
  },
  {
    "question": "كيف يتم إبلاغي بنتيجة القبول وتحديد موعد المقابلة؟",
    "answer": "بعد ملء استمارة التقديم على هذا الموقع، يقوم مسؤول العلاقات العامة بالتواصل عبر رسالة واتساب ومكالمة هاتفية مع ولي الأمر خلال ٤٨ إلى ٧٢ ساعة لتأكيد موعد الحضور للمقابلة الشخصية الودية."
  }
]
