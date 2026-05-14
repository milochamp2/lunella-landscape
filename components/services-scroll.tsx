'use client'

import { useRef, useCallback } from 'react'
import Link from 'next/link'

const services = [
  {
    number: '01',
    title: 'Landscape Design',
    tagline: 'Spatial thinking that resolves the relationship between structure, plant, and light.',
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
    title: 'Garden Installation',
    tagline: 'Expert construction and planting by our in-house team, end to end.',
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
    title: 'Planting Schemes',
    tagline: 'Considered plant communities that thrive with minimal intervention.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M24 40 L24 20" />
        <path d="M24 20 C24 20 14 18 12 10 C20 8 26 14 24 20Z" />
        <path d="M24 28 C24 28 34 26 36 18 C28 16 22 22 24 28Z" />
        <path d="M16 40 h16" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Decking & Pergolas',
    tagline: 'Natural timber decks and pergolas built to last — our finest work.',
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
    tagline: 'Timber, steel, and composite fencing that defines boundaries beautifully.',
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
    title: 'Driveways & Concreting',
    tagline: 'Durable, well-finished driveways and concrete work that lasts.',
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

export function ServicesScroll() {
  const trackRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!trackRef.current) return
    isDragging.current = true
    startX.current = e.pageX - trackRef.current.offsetLeft
    scrollLeft.current = trackRef.current.scrollLeft
    trackRef.current.style.cursor = 'grabbing'
  }, [])

  const onMouseUp = useCallback(() => {
    isDragging.current = false
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX.current) * 1.2
    trackRef.current.scrollLeft = scrollLeft.current - walk
  }, [])

  const onMouseLeave = useCallback(() => {
    isDragging.current = false
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }, [])

  return (
    <section className="bg-ink border-t border-slate relative overflow-hidden py-16 md:py-24">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
        <span
          className="font-display font-black text-paper/[0.06] whitespace-nowrap"
          style={{ fontSize: 'clamp(80px, 18vw, 240px)', letterSpacing: '-0.02em' }}
        >
          Lunella
        </span>
      </div>

      {/* Header */}
      <div className="site-container relative z-10 mb-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-stone mb-4">What We Do</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-paper">
              Craft at every
              <br />
              scale
            </h2>
          </div>
          <Link
            href="/services"
            className="eyebrow text-stone hover:text-paper transition-colors duration-200 inline-flex items-center gap-2 shrink-0 mb-1"
          >
            View All <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      {/* Scroll hint fade edges */}
      <div className="relative z-10">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-ink to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-ink to-transparent z-10" />

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className="flex gap-px overflow-x-auto scrollbar-none pl-[max(1.5rem,calc((100vw-1440px)/2+1.5rem))] pr-24 select-none"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            cursor: 'grab',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex-shrink-0 w-64 md:w-72 bg-transparent hover:bg-white/5 transition-colors duration-300 p-8 flex flex-col gap-6 border-l border-white/10 first:border-l-0"
              style={{ scrollSnapAlign: 'start' }}
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
          ))}
        </div>
      </div>

      {/* Scroll progress hint */}
      <div className="site-container relative z-10 mt-8">
        <p className="text-paper/20 text-xs font-sans tracking-widest uppercase">
          Drag to explore
        </p>
      </div>
    </section>
  )
}
