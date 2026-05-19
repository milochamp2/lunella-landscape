import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Browse completed landscape projects by Lunella Landscapes — stone paving, decking, retaining walls, garden installation, and concrete work across Melbourne suburbs including Heathmont, Carnegie, Parkville, Flemington and more.',
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
            <h1 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold text-ink leading-tight">
              Client Projects
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-stone text-sm leading-relaxed max-w-md mt-6">
              Real work, real results — a gallery of completed landscape projects across Melbourne
              and Victoria, organised by location.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="section-pad bg-paper">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 0.07}>
                <Link href={`/projects/${p.slug}`} className="group block">
                  {/* Cover image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-bone mb-4">
                    <Image
                      src={p.images[0]}
                      alt={`${p.title} — Lunella Landscapes`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Image count badge */}
                    <span className="absolute bottom-3 right-3 bg-ink/70 text-paper text-xs font-sans px-2 py-1 tracking-wider">
                      {p.images.length} photos
                    </span>
                  </div>

                  <p className="font-display font-bold text-lg text-ink group-hover:text-slate transition-colors duration-200 leading-snug">
                    {p.title}
                  </p>
                  <p className="text-stone text-xs mt-1">{p.location}</p>
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
