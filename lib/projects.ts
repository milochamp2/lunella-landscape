export interface Project {
  slug: string
  title: string
  category: string
  location: string
  year: string
  description: string
  coverSrc: string
  images: { src: string; alt: string }[]
}

export const projects: Project[] = [
  {
    slug: 'fernside-residence',
    title: 'The Fernside Residence',
    category: 'Private Garden',
    location: 'Toorak, VIC',
    year: '2024',
    description:
      'A formal garden reimagined for contemporary living. Structured bluestone paths, clipped hedges, and a central reflecting pool anchor the design while allowing seasonal planting to evolve with the year.',
    coverSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    images: [
      { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80', alt: 'Fernside garden entry path' },
      { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=80', alt: 'Fernside formal garden beds' },
      { src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=80', alt: 'Fernside reflecting pool' },
      { src: 'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?auto=format&fit=crop&w=1400&q=80', alt: 'Fernside terrace detail' },
    ],
  },
  {
    slug: 'merri-creek-commons',
    title: 'Merri Creek Commons',
    category: 'Community Space',
    location: 'Northcote, VIC',
    year: '2024',
    description:
      'A community gathering space that blends native riparian planting with robust public infrastructure. Permeable paving, rain gardens, and interpretive planting acknowledge the ecological history of the Merri Creek corridor.',
    coverSrc: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
    images: [
      { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80', alt: 'Merri Creek commons aerial' },
      { src: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1400&q=80', alt: 'Merri Creek native planting' },
      { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80', alt: 'Merri Creek seating area' },
    ],
  },
  {
    slug: 'heathcote-vineyard',
    title: 'Heathcote Vineyard',
    category: 'Rural Estate',
    location: 'Heathcote, VIC',
    year: '2023',
    description:
      'An estate garden that draws its palette directly from the surrounding landscape — ironstone gravels, silver-leafed natives, and windbreak plantings that echo the rhythm of the vineyard rows beyond.',
    coverSrc: 'https://images.unsplash.com/photo-1470058869966-2a3a9d1399b1?auto=format&fit=crop&w=1200&q=80',
    images: [
      { src: 'https://images.unsplash.com/photo-1470058869966-2a3a9d1399b1?auto=format&fit=crop&w=1400&q=80', alt: 'Heathcote vineyard entrance' },
      { src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80', alt: 'Heathcote estate garden' },
      { src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80', alt: 'Heathcote rural landscape' },
      { src: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=1400&q=80', alt: 'Heathcote planting detail' },
    ],
  },
  {
    slug: 'collins-quarter-rooftop',
    title: 'Collins Quarter Rooftop',
    category: 'Commercial',
    location: 'Melbourne CBD',
    year: '2023',
    description:
      'A rooftop garden that transforms underutilised commercial space into a productive green amenity. Modular raised beds, a drip-feed irrigation system, and robust wind-tolerant planting deliver year-round greenery at elevation.',
    coverSrc: 'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?auto=format&fit=crop&w=1200&q=80',
    images: [
      { src: 'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?auto=format&fit=crop&w=1400&q=80', alt: 'Collins Quarter rooftop overview' },
      { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80', alt: 'Collins Quarter raised beds' },
      { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=80', alt: 'Collins Quarter planting' },
    ],
  },
  {
    slug: 'south-yarra-courtyard',
    title: 'South Yarra Courtyard',
    category: 'Private Garden',
    location: 'South Yarra, VIC',
    year: '2022',
    description:
      'A compact inner-city courtyard transformed through layered planting and considered stonework. A single mature olive anchors the space; ground level is given over to decomposed granite and creeping thyme.',
    coverSrc: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    images: [
      { src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=80', alt: 'South Yarra courtyard overview' },
      { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80', alt: 'South Yarra planting detail' },
      { src: 'https://images.unsplash.com/photo-1553774781-c98e2e0a6e89?auto=format&fit=crop&w=1400&q=80', alt: 'South Yarra stonework' },
    ],
  },
  {
    slug: 'portsea-coastal-garden',
    title: 'Portsea Coastal Garden',
    category: 'Private Garden',
    location: 'Portsea, VIC',
    year: '2022',
    description:
      'A coastal garden designed to endure salt winds and sandy soils. Native ti-trees, coastal wattles, and a sweeping lawn create a relaxed connection between the house and the dunes beyond.',
    coverSrc: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
    images: [
      { src: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1400&q=80', alt: 'Portsea coastal landscape' },
      { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80', alt: 'Portsea dune planting' },
      { src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80', alt: 'Portsea garden path' },
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
