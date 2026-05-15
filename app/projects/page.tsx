import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Landscape design and installation projects by Lunella Landscapes across Victoria.',
}

const categoryColors: Record<string, string> = {
  'Private Garden': 'bg-slate',
  'Community Space': 'bg-stone',
  'Rural Estate': 'bg-ink',
  'Commercial': 'bg-slate',
}

export default function ProjectsPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="section-pad bg-bone border-b border-sand">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow mb-4">Our Work</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-tight">
              Selected
              <br />
              Projects
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-stone text-sm leading-relaxed max-w-md mt-6">
              A cross-section of our work — from intimate inner-city courtyards to expansive rural estates
              across Victoria.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Projects grid ── */}
      <section className="section-pad bg-paper">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.07}>
                <Link href={`/projects/${p.slug}`} className="group block">
                  {/* Placeholder panel — replace with real project photo */}
                  <div
                    className={`aspect-[4/3] mb-5 flex items-end p-6 relative overflow-hidden ${categoryColors[p.category] ?? 'bg-ink'} group-hover:opacity-90 transition-opacity duration-300`}
                  >
                    <span
                      className="absolute inset-0 flex items-center justify-center font-display font-black text-paper/[0.07] select-none pointer-events-none"
                      style={{ fontSize: 'clamp(48px, 10vw, 96px)' }}
                      aria-hidden
                    >
                      Lunella
                    </span>
                    <span className="relative text-paper/40 text-xs font-sans tracking-widest uppercase">
                      {p.category}
                    </span>
                    <span className="absolute bottom-6 right-6 text-paper/30 font-display font-bold text-2xl group-hover:text-paper/50 transition-colors duration-300">
                      →
                    </span>
                  </div>

                  <p className="eyebrow mb-2">{p.category} &middot; {p.location}</p>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-ink group-hover:text-slate transition-colors duration-200 mb-1">
                    {p.title}
                  </h2>
                  <p className="text-stone text-sm">{p.year}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
