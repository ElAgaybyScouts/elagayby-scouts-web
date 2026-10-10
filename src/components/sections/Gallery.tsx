// TODO: معرض الصور متخبّي دلوقتي لحد ما نجمع صور المجموعة.
// لما الصور تجهز: فك الكومنت عن الـ imports والـ state والـ JSX تحت، وشيل `return null`،
// وفك الكومنت عن رابط #gallery في src/components/layout/Footer.tsx وعن عنصر المعرض في navItems (src/data/siteData.ts).
//
// import { useState } from 'react'
// import { Icon } from '../ui/Icon'
// import { galleryCategories, galleryPhotos } from '../../data/siteData'
// import type { GalleryCategory } from '../../types/content'
// import { cn } from '../../utils/cn'

export function Gallery() {
  // const [category, setCategory] = useState<GalleryCategory>('all')
  // const isAll = category === 'all'
  // const photos = isAll ? galleryPhotos : galleryPhotos.filter((photo) => photo.category === category)

  return null

//   return (
//     <section className="w-full py-20 bg-surface-container-low" id="gallery">
//       <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-space-md">
//           <div className="flex flex-col gap-space-xs">
//             <span className="inline-flex items-center gap-1 text-primary font-label-md text-label-md">
//               <Icon name="photo_library" className="text-[18px]" />
//               <span>توثيق الذكريات</span>
//             </span>
//             <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
//               معرض الصور: لقطات من حياتنا الكشفية
//             </h2>
//             <p className="font-body-md text-body-md text-on-surface-variant">
//               لحظات حقيقية تسجل شجاعة الاستكشاف، ضحكات السمر، والخدمة المشرفة في مخيماتنا ومناسباتنا
//               الرسمية.
//             </p>
//           </div>
//
//           <div
//             role="group"
//             aria-label="تصفية الصور"
//             className="flex items-center flex-wrap gap-1.5 bg-surface-container p-1 rounded-lg"
//           >
//             {galleryCategories.map((item) => {
//               const isActive = item.id === category
//               return (
//                 <button
//                   key={item.id}
//                   type="button"
//                   aria-pressed={isActive}
//                   onClick={() => setCategory(item.id)}
//                   className={cn(
//                     'px-space-md py-1.5 rounded-md font-label-md text-label-md transition-all',
//                     isActive
//                       ? 'bg-primary text-on-primary'
//                       : 'text-secondary hover:text-primary',
//                   )}
//                 >
//                   {item.label}
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
//           {photos.map((photo) => (
//             <figure
//               key={photo.src + photo.title}
//               className={cn(
//                 'group relative overflow-hidden rounded-xl shadow-xs',
//                 // الشكل الأصلي (الصورة الأولى عريضة) بيتطبّق بس في "الكل"
//                 isAll ? (photo.tall ? 'h-80' : 'h-72') : 'h-72',
//                 isAll && photo.wide && 'md:col-span-2',
//               )}
//             >
//               <img
//                 alt={photo.alt}
//                 src={photo.src}
//                 loading="lazy"
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
//               />
//               <figcaption className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-space-md text-on-primary">
//                 <span className="font-label-sm text-label-sm text-tertiary-fixed font-bold">{photo.kicker}</span>
//                 <h3
//                   className={cn(
//                     'font-bold text-on-primary',
//                     isAll && photo.wide
//                       ? 'font-headline-sm text-headline-sm'
//                       : 'font-title-lg text-title-lg',
//                   )}
//                 >
//                   {photo.title}
//                 </h3>
//               </figcaption>
//             </figure>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
}