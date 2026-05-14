import Link from 'next/link'
import { Reveal } from './reveal'

const services = [
  {
    title: 'Landscape Design',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M8 40 L24 10 L40 40" />
        <path d="M14 28 h20" />
        <path d="M24 10 C24 10 18 20 24 26 C30 20 24 10 24 10Z" />
      </svg>
    ),
  },
  {
    title: 'Garden Installation',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="8" y="30" width="32" height="10" rx="1" />
        <path d="M16 30 C16 22 12 14 24 10 C36 14 32 22 32 30" />
        <path d="M24 10 L24 30" />
      </svg>
    ),
  },
  {
    title: 'Natural Stone Paving & Brickwork',
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
    title: 'Planting Schemes',
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
    title: 'Turfs & Lawns',
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
    title: 'Driveways & Concreting',
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
    title: 'Fencing',
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
    title: 'Water Features',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M24 8 C24 8 14 20 14 28 a10 10 0 0 0 20 0 C34 20 24 8 24 8Z" />
        <path d="M18 32 C18 34 20 36 24 36" />
      </svg>
    ),
  },
  {
    title: 'Garden Lighting',
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
    title: 'Irrigation Solutions',
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
    title: 'Decking & Pergolas',
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
    title: 'Raised Garden Beds',
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

export function ServicesGrid() {
  return (
    <section className="section-pad bg-ink border-t border-slate relative overflow-hidden">
      {/* Large faded watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
        <span
          className="font-display font-black text-paper/[0.08] whitespace-nowrap"
          style={{ fontSize: 'clamp(80px, 18vw, 240px)', letterSpacing: '-0.02em' }}
        >
          Lunella
        </span>
      </div>

      <div className="site-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <Reveal>
            <p className="eyebrow text-stone mb-4">What We Do</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-paper">
              Craft at every
              <br />
              scale
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/services"
              className="eyebrow text-stone hover:text-paper transition-colors duration-200 inline-flex items-center gap-2"
            >
              View All Services <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group bg-transparent hover:bg-white/5 transition-colors duration-300 p-6 md:p-8 flex flex-col items-center text-center gap-4">
                <div className="text-stone group-hover:text-paper transition-colors duration-300">
                  {s.icon}
                </div>
                <p className="font-sans text-xs font-medium tracking-wider uppercase text-stone group-hover:text-paper transition-colors duration-300 leading-snug">
                  {s.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
