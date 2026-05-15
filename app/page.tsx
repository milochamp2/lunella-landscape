import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'
import { ServicesScroll } from '@/components/services-scroll'

const projects = [
  {
    title: 'The Fernside Residence',
    category: 'Private Garden',
    location: 'Toorak, VIC',
    year: '2024',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    aspect: 'aspect-[4/3]',
  },
  {
    title: 'Merri Creek Commons',
    category: 'Community Space',
    location: 'Northcote, VIC',
    year: '2024',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&q=80',
    aspect: 'aspect-[16/9]',
  },
  {
    title: 'Heathcote Vineyard',
    category: 'Rural Estate',
    location: 'Heathcote, VIC',
    year: '2023',
    src: 'https://images.unsplash.com/photo-1470058869966-2a3a9d1399b1?auto=format&fit=crop&w=800&q=80',
    aspect: 'aspect-[4/3]',
  },
  {
    title: 'Collins Quarter Rooftop',
    category: 'Commercial',
    location: 'Melbourne CBD',
    year: '2023',
    src: 'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?auto=format&fit=crop&w=1000&q=80',
    aspect: 'aspect-[16/9]',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1600&q=80"
          alt="Lush formal garden"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay — strong left-side wash for text legibility */}
        <div className="absolute inset-0 bg-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />

        <div className="relative z-10 site-container pt-24 pb-20 md:pt-32 md:pb-28">
          <Reveal>
            <p className="eyebrow text-paper/80 mb-8">Melbourne Landscape Company</p>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-paper leading-[1.02] mb-8 max-w-4xl">
              We shape land
              <br />
              into living art.
            </h1>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="text-paper/90 max-w-lg text-base leading-relaxed mb-12">
              Lunella Landscapes is a landscape company creating considered outdoor environments —
              from intimate city gardens to expansive rural estates across Victoria.
            </p>
          </Reveal>
          <Reveal delay={0.36}>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Begin Your Project
              </Link>
              <Link
                href="/services"
                className="btn-secondary border-paper/40 text-paper hover:bg-paper hover:text-ink"
              >
                Our Services
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
          <div className="w-px h-12 bg-paper animate-pulse" />
        </div>
      </section>

      {/* ── Services ── */}
      <ServicesScroll />

      {/* ── Selected projects ── */}
      <section className="section-pad bg-bone border-t border-sand">
        <div className="site-container">
          <div className="mb-14">
            <Reveal>
              <p className="eyebrow mb-4">Selected Work</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">
                Recent
                <br />
                projects
              </h2>
            </Reveal>
          </div>

          <div className="divide-y divide-sand">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="group py-8 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 hover:translate-x-1 transition-transform duration-300">
                  <div className={`flex-shrink-0 w-full sm:w-44 lg:w-56 image-frame ${p.aspect}`}>
                    <Image
                      src={p.src}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 224px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="eyebrow mb-2">
                      {p.category} &middot; {p.location}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-1">{p.title}</h3>
                    <p className="text-stone text-sm">{p.year}</p>
                  </div>
                  <span
                    className="hidden sm:block font-display text-2xl text-stone group-hover:text-ink transition-colors duration-300"
                    aria-hidden
                  >
                    →
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-12 text-center">
            <Link href="/projects" className="btn-secondary">
              View All Projects
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── About teaser ── */}
      <section className="section-pad bg-paper border-t border-sand">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <Reveal>
              <div className="flex items-center justify-center py-8">
                <Image
                  src="/lunellalogo.png"
                  alt="Lunella Landscapes"
                  width={400}
                  height={400}
                  className="w-72 h-72 md:w-96 md:h-96 object-contain"
                />
              </div>
            </Reveal>
            <div>
              <Reveal delay={0.1}>
                <p className="eyebrow mb-6">About the Company</p>
              </Reveal>
              <Reveal delay={0.2}>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6">
                  Land as a medium,
                  <br />
                  time as a collaborator
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-stone text-sm leading-relaxed mb-4">
                  Founded in 2015, Lunella Landscapes has spent a decade developing a practice
                  grounded in ecological sensitivity and material restraint. We believe the best
                  gardens are those that improve with age.
                </p>
              </Reveal>
              <Reveal delay={0.35}>
                <p className="text-stone text-sm leading-relaxed mb-10">
                  Our company works closely with architects, interior designers, and private clients
                  to create outdoor spaces as considered as the buildings they surround.
                </p>
              </Reveal>
              <Reveal delay={0.42}>
                <Link href="/about" className="btn-secondary">
                  Our Philosophy
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
