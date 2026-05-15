'use client'

import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    number: '01',
    title: 'Consultation, Vision & Design',
    tagline: 'We listen, walk the site, and shape a clear direction — ideas and experience, before anything goes in the ground.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M8 40 L24 10 L40 40" />
        <path d="M14 28 h20" />
        <path d="M24 10 C24 10 18 20 24 26 C30 20 24 10 24 10Z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Garden Installation & Planting',
    tagline: 'Expert construction and considered planting — built and grown by our in-house team.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="8" y="30" width="32" height="10" rx="1" />
        <path d="M16 30 C16 22 12 14 24 10 C36 14 32 22 32 30" />
        <path d="M24 10 L24 30" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Natural Stone Paving & Brickwork',
    tagline: 'Beautifully laid natural stone and brickwork that grounds a garden for generations.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="8" y="8" width="14" height="14" rx="1" />
        <rect x="26" y="8" width="14" height="14" rx="1" />
        <rect x="8" y="26" width="14" height="14" rx="1" />
        <rect x="26" y="26" width="14" height="14" rx="1" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Retaining Walls',
    tagline: 'Structural walls built to hold, frame, and define your landscape for the long term.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="6" y="10" width="36" height="7" rx="1" />
        <rect x="6" y="19" width="36" height="7" rx="1" />
        <rect x="6" y="28" width="36" height="7" rx="1" />
        <path d="M18 10 L18 17" />
        <path d="M30 10 L30 17" />
        <path d="M12 19 L12 26" />
        <path d="M24 19 L24 26" />
        <path d="M36 19 L36 26" />
        <path d="M18 28 L18 35" />
        <path d="M30 28 L30 35" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Decking',
    tagline: 'Natural timber decks built to last — our finest work underfoot.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="8" y="28" width="32" height="12" rx="1" />
        <path d="M8 28 L8 16" />
        <path d="M40 28 L40 16" />
        <path d="M8 16 h32" />
        <path d="M14 16 L14 28" />
        <path d="M20 16 L20 28" />
        <path d="M26 16 L26 28" />
        <path d="M32 16 L32 28" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Turfs & Lawns',
    tagline: 'Lush, healthy lawns established right and maintained with care.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M6 34 Q12 20 18 30 Q24 18 30 30 Q36 20 42 34" />
        <path d="M6 40 h36" />
        <path d="M18 34 L18 40" />
        <path d="M30 34 L30 40" />
      </svg>
    ),
  },
  {
    number: '07',
    title: 'Water Features',
    tagline: 'Pools, ponds, and water walls that bring life and sound to any space.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M24 8 C24 8 14 20 14 28 a10 10 0 0 0 20 0 C34 20 24 8 24 8Z" />
        <path d="M18 32 C18 34 20 36 24 36" />
      </svg>
    ),
  },
  {
    number: '08',
    title: 'Garden Lighting',
    tagline: 'Lighting that reveals the garden after dark — subtle and architectural.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <circle cx="24" cy="20" r="8" />
        <path d="M24 4 L24 8" />
        <path d="M24 32 L24 36" />
        <path d="M8 20 L12 20" />
        <path d="M36 20 L40 20" />
        <path d="M12.7 8.7 L15.5 11.5" />
        <path d="M32.5 28.5 L35.3 31.3" />
        <path d="M35.3 8.7 L32.5 11.5" />
        <path d="M15.5 28.5 L12.7 31.3" />
        <path d="M20 36 h8" />
        <path d="M22 40 h4" />
      </svg>
    ),
  },
  {
    number: '09',
    title: 'Irrigation Solutions',
    tagline: 'Smart irrigation that keeps every plant thriving with minimal waste.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M8 34 Q16 34 16 26 Q16 18 24 18 Q32 18 32 26 Q32 34 40 34" />
        <path d="M16 26 L16 40" />
        <path d="M32 26 L32 40" />
        <path d="M22 10 Q24 8 26 10" strokeDasharray="2 2" />
        <path d="M18 13 Q20 10 22 13" strokeDasharray="2 2" />
        <path d="M26 13 Q28 10 30 13" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    number: '10',
    title: 'Fencing',
    tagline: 'All aspects of hard and soft scapes — boundary, privacy, and structure.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M10 14 L10 38" />
        <path d="M10 14 L14 10 L18 14" />
        <path d="M18 14 L18 38" />
        <path d="M18 14 L22 10 L26 14" />
        <path d="M26 14 L26 38" />
        <path d="M26 14 L30 10 L34 14" />
        <path d="M34 14 L34 38" />
        <path d="M10 24 h24" />
        <path d="M10 32 h24" />
      </svg>
    ),
  },
  {
    number: '11',
    title: 'Concrete — Driveways & Paths',
    tagline: 'Durable, well-finished concrete driveways and paths built to last.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M14 8 L10 40 h28 L34 8 Z" />
        <path d="M18 8 L16 40" />
        <path d="M30 8 L32 40" />
        <path d="M24 8 L24 40" />
      </svg>
    ),
  },
  {
    number: '12',
    title: 'Raised Garden Beds',
    tagline: 'Custom timber and steel raised beds for edibles, herbs, and flowers.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="8" y="28" width="32" height="12" rx="1" />
        <path d="M14 28 C14 22 12 16 24 12 C36 16 34 22 34 28" />
        <path d="M24 12 L24 28" />
        <path d="M16 22 h16" />
      </svg>
    ),
  },
]

function ServiceCard({ s }: { s: typeof services[0] }) {
  return (
    <div
      className="group flex-shrink-0 w-64 md:w-72 bg-transparent hover:bg-white/5 transition-colors duration-300 p-8 flex flex-col gap-6 border-l border-white/10"
    >
      <div className="text-stone group-hover:text-paper transition-colors duration-300">
        {s.icon}
      </div>
      <div>
        <p className="text-paper/30 text-xs font-sans font-medium tracking-widest mb-2">
          {s.number}
        </p>
        <h3 className="font-display font-bold text-paper text-lg leading-snug mb-3">
          {s.title}
        </h3>
        <p className="text-stone text-xs leading-relaxed group-hover:text-stone/80 transition-colors duration-300">
          {s.tagline}
        </p>
      </div>
    </div>
  )
}

export function ServicesScroll() {
  return (
    <section className="border-t border-slate overflow-hidden">

      {/* ── Photo banner ── */}
      <div className="relative flex items-center justify-center" style={{ height: '50vh', minHeight: '280px' }}>
        <Image
          src="/projects/heathmont/h4.jpg"
          alt="Heathmont residence — stone paving and pool"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-ink/50" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1e1e1e] to-transparent" />

        {/* Text — truly centred with padding to account for fade */}
        <div className="relative z-10 text-center px-4 pb-6 md:pb-8">
          <p className="eyebrow text-paper/60 mb-3 md:mb-4">What We Do</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-paper leading-tight">
            Craft at every scale
          </h2>
        </div>
      </div>

      {/* ── Services marquee strip ── */}
      <div className="relative pb-8 md:pb-12 pt-5 md:pt-6" style={{ backgroundColor: '#1e1e1e' }}>

        {/* Header row: left label + right link, aligned with cards */}
        <div className="site-container flex items-center justify-between mb-8">
          <p className="eyebrow text-stone">Our Services</p>
          <Link
            href="/services"
            className="eyebrow text-stone hover:text-paper transition-colors duration-200 inline-flex items-center gap-2"
          >
            View All <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Marquee */}
        <div className="marquee-wrapper relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(to right, #1e1e1e, transparent)' }} />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(to left, #1e1e1e, transparent)' }} />
          <div
            className="marquee-track flex gap-px"
          >
            {services.map((s) => <ServiceCard key={`a-${s.number}`} s={s} />)}
            {services.map((s) => <ServiceCard key={`b-${s.number}`} s={s} />)}
          </div>
        </div>

      </div>

    </section>
  )
}
