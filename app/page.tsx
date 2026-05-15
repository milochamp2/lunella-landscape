import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'
import { ServicesScroll } from '@/components/services-scroll'

const projects = [
  {
    title: 'Heathmont Residence',
    category: 'Stone Paving & Pool Surrounds',
    location: 'Heathmont, VIC',
    year: '2025',
    src: '/projects/heathmont/h4.jpg',
    href: '/projects/heathmont',
    aspect: 'aspect-[4/3]',
  },
  {
    title: 'Parkville Courtyard',
    category: 'Stone Paving & Screening',
    location: 'Parkville, VIC',
    year: '2025',
    src: '/projects/parkville/pk3.jpg',
    href: '/projects/parkville',
    aspect: 'aspect-[4/3]',
  },
  {
    title: 'Flemington Terrace',
    category: 'Decking & Outdoor Living',
    location: 'Flemington, VIC',
    year: '2025',
    src: '/projects/flemington/fm5.jpg',
    href: '/projects/flemington',
    aspect: 'aspect-[4/3]',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-start overflow-hidden">
        {/* Background image */}
        <Image
          src="/projects/capelsound/cp1.jpg"
          alt="Timber deck — Cape Sound project"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay — strong left-side wash for text legibility */}
        <div className="absolute inset-0 bg-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />

        <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20 pt-4 sm:pt-6 md:pt-10 md:pb-16 max-w-4xl">
          <Reveal>
            <p className="eyebrow text-paper/80 mb-4 md:mb-5">Melbourne Landscape Company</p>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-paper leading-[1.5] mb-5 md:mb-6">
              We shape land
              <br />
              into living art.
            </h1>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="text-paper/90 text-sm leading-[1.5] mb-5 md:mb-6 max-w-xs sm:max-w-sm md:max-w-md">
              Lunella Landscapes is a landscape company creating considered outdoor environments —
              from intimate city gardens to expansive properties across Melbourne and the South East.
            </p>
          </Reveal>
          <Reveal delay={0.36}>
            <div className="flex flex-nowrap gap-3">
              <Link href="/contact" className="btn-primary text-xs px-5 py-3 md:px-8 md:py-3.5">
                Begin Your Project
              </Link>
              <Link
                href="/services"
                className="btn-secondary border-paper/40 text-paper hover:bg-paper hover:text-ink text-xs px-5 py-3 md:px-8 md:py-3.5"
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
      <section className="py-12 md:py-20 bg-bone border-t border-sand">
        <div className="site-container">
          <div className="mb-8 md:mb-10">
            <Reveal>
              <p className="eyebrow mb-2">Selected Work</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
                Recent projects
              </h2>
            </Reveal>
          </div>

          <div className="divide-y divide-sand">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <Link href={p.href} className="group py-5 md:py-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 hover:translate-x-1 transition-transform duration-300 block">
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
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-8 text-center">
            <Link href="/projects" className="btn-secondary">
              View All Projects
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── About teaser ── */}
      <section className="py-14 md:py-20 bg-paper border-t border-sand">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <Reveal className="flex justify-center items-center">
              <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 relative">
                <Image
                  src="/lunella2ndlogo.png"
                  alt="Lunella Landscapes"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 240px, 288px"
                />
              </div>
            </Reveal>
            <div>
              <Reveal delay={0.1}>
                <p className="eyebrow mb-4">About the Company</p>
              </Reveal>
              <Reveal delay={0.2}>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
                  Modern landscapes,
                  <br />
                  naturally grounded.
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-stone text-sm leading-relaxed mb-3">
                  Established in 2025, Lunella Landscapes brings over 20 years of industry
                  experience to every project — grounded in ecological sensitivity and material
                  restraint. We believe the best gardens are those that improve with age.
                </p>
              </Reveal>
              <Reveal delay={0.35}>
                <p className="text-stone text-sm leading-relaxed mb-8">
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
