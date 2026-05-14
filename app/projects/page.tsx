import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Landscape design and installation projects by Lunella Landscapes across Victoria.',
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
                <Link
                  href={`/projects/${p.slug}`}
                  className="group block"
                >
                  <div className="image-frame aspect-[4/3] mb-5 overflow-hidden">
                    <Image
                      src={p.coverSrc}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
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
