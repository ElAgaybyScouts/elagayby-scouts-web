export type NavItem = {
  label: string
  /** id القسم داخل الصفحة (بدون #) */
  id: string
}

export type Stat = {
  value: string
  unit: string
  label: string
}

export type Pillar = {
  icon: string
  title: string
  description: string
  tag: string
}

export type Activity = {
  icon: string
  badge: string
  title: string
  description: string
  footer: string
}

export type JourneyStep = {
  number: string
  stage: string
  title: string
  description: string
  audienceIcon: string
  audience: string
  /** كلاسات لون دايرة الرقم */
  circle: string
  /** آخر مرحلة بتتلوّن بلون مميز */
  highlight: boolean
}

export type Benefit = {
  icon: string
  title: string
  description: string
}

export type ScheduleRow = {
  group: string
  shortGroup: string
  time: string
  dot: string
}

export type GalleryCategory = 'all' | 'camps' | 'ropes' | 'service' | 'campfire'

export type GalleryPhoto = {
  src: string
  alt: string
  kicker: string
  title: string
  category: Exclude<GalleryCategory, 'all'>
  wide: boolean
  tall: boolean
}

export type FaqItem = {
  question: string
  answer: string
}

export type ContactCard = {
  icon: string
  title: string
  subtitle: string
  cta: string
  href: string
  external?: boolean
}

export type JoinRequest = {
  fullName: string
  age: string
  grade: string
  scoutStage: string
  address: string
  phone: string
  whatsapp: string
  email: string
  hasExperience: 'yes' | 'no'
  motivation: string
  talents: string
  parentName: string
  parentPhone: string
  parentRelation: string
  consent: boolean
}

export type SavedJoinRequest = JoinRequest & {
  id: string
  createdAt: string
}

export type SupportMessage = {
  fullName: string
  phone: string
  message: string
}