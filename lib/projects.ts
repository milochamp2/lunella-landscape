export interface Project {
  slug: string
  title: string
  location: string
  suburb: string
  images: string[]
}

function imgs(folder: string, files: string[]): string[] {
  return files.map((f) => `/projects/${folder}/${f}`)
}

export const projects: Project[] = [
  // ── Featured first ──
  {
    slug: 'heathmont',
    title: 'Heathmont',
    location: 'Heathmont, VIC',
    suburb: 'Heathmont',
    images: imgs('heathmont', ['h7.png', 'h4.jpg', 'h5.jpg', 'h6.jpg', 'h1.jpg', 'h2.jpg']),
  },
  {
    slug: 'carnegie',
    title: 'Carnegie',
    location: 'Carnegie, VIC',
    suburb: 'Carnegie',
    images: imgs('carnegie', ['cr1.jpg', 'cr2.jpg', 'cr3.jpg', 'cr4.jpg', 'cr5.jpg', 'cr6.jpg']),
  },
  {
    slug: 'capelsound',
    title: 'Capel Sound',
    location: 'Capel Sound, VIC',
    suburb: 'Capel Sound',
    images: imgs('capelsound', ['cp1.jpg', 'cp2.jpg', 'cp3.jpg', 'cp4.jpg']),
  },
  {
    slug: 'parkville',
    title: 'Parkville',
    location: 'Parkville, VIC',
    suburb: 'Parkville',
    images: imgs('parkville', ['pk1.jpg', 'pk2.jpg', 'pk3.jpg']),
  },
  {
    slug: 'flemington',
    title: 'Flemington',
    location: 'Flemington, VIC',
    suburb: 'Flemington',
    images: imgs('flemington', ['fm2.png', 'fm5.jpg', 'fm1.jpg', 'fm2.jpg', 'fm3.jpg', 'fm4.jpg', 'fm6.jpg', 'fm3.png']),
  },
  {
    slug: 'richmond',
    title: 'Richmond',
    location: 'Richmond, VIC',
    suburb: 'Richmond',
    images: imgs('richmond', ['rc3.jpg', 'rc1.jpg', 'rc2.jpg']),
  },
  // ── Middle ──
  {
    slug: 'canterbury',
    title: 'Canterbury',
    location: 'Canterbury, VIC',
    suburb: 'Canterbury',
    images: imgs('canterbury', ['cnt1.jpg', 'cnt2.jpg', 'cnt3.jpg']),
  },
  {
    slug: 'caufield',
    title: 'Caulfield',
    location: 'Caulfield, VIC',
    suburb: 'Caulfield',
    images: imgs('caufield', ['ca1.jpg', 'ca2.jpg', 'ca3.jpg']),
  },
  {
    slug: 'croydon',
    title: 'Croydon',
    location: 'Croydon, VIC',
    suburb: 'Croydon',
    images: imgs('croydon', ['cr5.jpg', 'cr6.jpg', 'cr2.jpg', 'cr3.jpg', 'cr4.jpg', 'cr7.jpg']),
  },
  {
    slug: 'croydon2',
    title: 'Croydon Poolside',
    location: 'Croydon, VIC',
    suburb: 'Croydon',
    images: imgs('croydon2', ['cr3.jpg']),
  },
  {
    slug: 'dingley',
    title: 'Dingley',
    location: 'Dingley Village, VIC',
    suburb: 'Dingley',
    images: imgs('dingley', ['d1.jpg', 'd2.jpg', 'd3.jpg', 'd4.jpg', 'd5.jpg']),
  },
  {
    slug: 'footscray',
    title: 'Footscray',
    location: 'Footscray, VIC',
    suburb: 'Footscray',
    images: imgs('footscray', ['fs2.jpg', 'fs3.jpg']),
  },
  {
    slug: 'hawthorn',
    title: 'Hawthorn',
    location: 'Hawthorn, VIC',
    suburb: 'Hawthorn',
    images: imgs('hawthorn', ['hw1.jpg', 'hw2.jpg']),
  },
  {
    slug: 'malvern',
    title: 'Malvern',
    location: 'Malvern, VIC',
    suburb: 'Malvern',
    images: imgs('malvern', ['mv2.jpg', 'mv3.jpg']),
  },
  {
    slug: 'northcote',
    title: 'Northcote',
    location: 'Northcote, VIC',
    suburb: 'Northcote',
    images: imgs('northcote', ['nt1.jpg', 'nt2.jpg', 'nt3.jpg', 'nt4.jpg']),
  },
  {
    slug: 'stkilda',
    title: 'St Kilda',
    location: 'St Kilda, VIC',
    suburb: 'St Kilda',
    images: imgs('stkilda', ['st1.jpg', 'st2.jpg', 'st3.jpg', 'st4.jpg', 'st5.jpg']),
  },
  {
    slug: 'wantirna',
    title: 'Wantirna',
    location: 'Wantirna, VIC',
    suburb: 'Wantirna',
    images: imgs('wantirna', ['w4.jpg', 'w5.jpg', 'w7.jpg', 'w8.jpg', 'w9.jpg', 'w10.jpg', 'w11.jpg', 'w12.jpg', 'w13.jpg', 'w14.jpg']),
  },
  // ── Last ──
  {
    slug: 'upwey',
    title: 'Upwey',
    location: 'Upwey, VIC',
    suburb: 'Upwey',
    images: imgs('upwey', ['u1.jpg', 'u2.jpg']),
  },
  {
    slug: 'fitzroy',
    title: 'Fitzroy',
    location: 'Fitzroy, VIC',
    suburb: 'Fitzroy',
    images: imgs('fitzroy', ['f4.png', 'f1.jpg', 'f2.jpg', 'f3.jpg', 'f4.jpg', 'f5.jpg', 'f6.jpg', 'f7.jpg']),
  },
  {
    slug: 'clifftonhill',
    title: 'Clifton Hill',
    location: 'Clifton Hill, VIC',
    suburb: 'Clifton Hill',
    images: imgs('clifftonhill', ['c4.jpg', 'c5.jpg', 'c6.jpg']),
  },
  {
    slug: 'mt-waverly',
    title: 'Mt Waverley',
    location: 'Mt Waverley, VIC',
    suburb: 'Mt Waverley',
    images: imgs('mt-waverly', ['m1.jpg', 'm2.jpg', 'm3.jpg']),
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
