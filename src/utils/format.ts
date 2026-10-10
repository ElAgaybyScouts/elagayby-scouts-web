const ARABIC_INDIC = '٠١٢٣٤٥٦٧٨٩'
const EXTENDED_ARABIC_INDIC = '۰۱۲۳۴۵۶۷۸۹'

/** بيحوّل الأرقام العربية (٠١٢٣) للإنجليزية (0123) عشان التحقق يشتغل مهما كتب المستخدم بأي كيبورد */
export function toLatinDigits(value: string) {
  return value
    .replace(/[٠-٩]/g, (d) => String(ARABIC_INDIC.indexOf(d)))
    .replace(/[۰-۹]/g, (d) => String(EXTENDED_ARABIC_INDIC.indexOf(d)))
}

/** رقم موبايل مصري: 010 / 011 / 012 / 015 + 8 أرقام، ويقبل +20 أو 0020 في الأول */
export function isEgyptianMobile(value: string) {
  const cleaned = toLatinDigits(value).replace(/[\s\-()]/g, '').replace(/^(\+20|0020|20)/, '0')
  return /^01[0125]\d{8}$/.test(cleaned)
}
