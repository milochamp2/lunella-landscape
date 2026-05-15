import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'From landscape design to stonework and ongoing maintenance — Lunella Landscape offers a complete landscape service across Melbourne and Victoria.',
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-14 h-14 flex items-center justify-center rounded-full border border-sand bg-bone mb-6 text-slate">
      {children}
    </div>
  )
}

const services = [
  {
    id: 'design',
    number: '01',
    title: 'Landscape Design',
    tagline: 'We connect clients with trusted designers and manage the full build — concept to completed garden.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M8 40 L24 10 L40 40" />
        <path d="M14 28 h20" />
        <path d="M24 10 C24 10 18 20 24 26 C30 20 24 10 24 10Z" />
      </svg>
    ),
    paragraphs: [
      'Lunella does not operate an in-house design studio, but we work closely with a trusted network of landscape designers and architects to get your project designed right. We make the introduction, stay active in the process, and ensure plans are buildable before a single shovel goes in.',
      'Once design documentation is complete, we take full responsibility for construction and installation — giving you a seamless experience from first concept to finished landscape without having to manage multiple parties yourself.',
    ],
    includes: [
      'Introduction to trusted landscape designers',
      'Design brief development support',
      'Buildability review of documentation',
      'Material & supplier recommendations',
      'Full construction from approved plans',
      'Ongoing liaison between designer & client',
    ],
  },
  {
    id: 'installation',
    number: '02',
    title: 'Garden Installation & Planting',
    tagline: 'Expert construction and considered planting — built and grown by our in-house team.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="8" y="30" width="32" height="10" rx="1" />
        <path d="M16 30 C16 22 12 14 24 10 C36 14 32 22 32 30" />
        <path d="M24 10 L24 30" />
      </svg>
    ),
    paragraphs: [
      'We self-perform all construction and planting with our permanent team — no subcontracting to unknown parties. This gives us direct control over quality at every stage, from bulk earthworks through to establishment planting and aftercare.',
      'Our planting philosophy draws on ecological principles: plant communities that support each other, respond to site conditions, and evolve over time. We work with indigenous Victorian species, Australian natives, and carefully selected exotic perennials and grasses.',
    ],
    includes: [
      'Earthworks & drainage',
      'Soil preparation & amendment',
      'Structural & feature planting',
      'Mixed borders & planting schemes',
      'Lawn establishment',
      'Establishment care & watering',
    ],
  },
  {
    id: 'stonework',
    number: '03',
    title: 'Natural Stone Paving & Brickwork',
    tagline: 'Beautifully laid natural stone and brickwork that grounds a garden for generations.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="8" y="8" width="14" height="14" rx="1" />
        <rect x="26" y="8" width="14" height="14" rx="1" />
        <rect x="8" y="26" width="14" height="14" rx="1" />
        <rect x="26" y="26" width="14" height="14" rx="1" />
      </svg>
    ),
    paragraphs: [
      'We specialise in natural stone paving — the kind that develops character over time and never looks out of place in the landscape. Every surface we lay is selected for its texture, tone, and durability underfoot.',
      'Our brickwork complements our paving work, offering clean, considered edging, retaining walls, and feature details that give a garden its structure. We do not use materials that fake age or require constant upkeep to look presentable.',
    ],
    includes: [
      'Natural stone paving & pathways',
      'Brick paving & feature brickwork',
      'Steps, terracing & retaining walls',
      'Courtyard & entertaining area paving',
      'Garden edging & border detail',
      'Restoration of existing paved areas',
    ],
  },
  {
    id: 'retaining',
    number: '04',
    title: 'Retaining Walls',
    tagline: 'Structural walls built to hold, frame, and define your landscape for the long term.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
    paragraphs: [
      'Retaining walls are one of the most technically demanding elements of any landscape — getting the engineering right is as important as the finish. We build in natural stone, concrete block, timber sleeper, and corten steel, matching the material to the site and the design intent.',
      'From low garden terracing to significant level changes, our walls are engineered to last and detailed to look considered — not an industrial fix, but a genuine landscape feature.',
    ],
    includes: [
      'Natural stone retaining walls',
      'Concrete block & besser block walls',
      'Timber sleeper retaining',
      'Corten steel & modern finishes',
      'Engineered footing & drainage',
      'Terracing & level change management',
    ],
  },
  {
    id: 'decking',
    number: '05',
    title: 'Decking',
    tagline: 'Our best work is underfoot — natural timber decks built to last a lifetime.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
    paragraphs: [
      'We take real pride in our decks. Natural timber is the material we love most for outdoor living — warm, honest, and only more beautiful as it weathers. Every deck we build is designed to feel like a natural extension of the home, not an afterthought.',
      'Hardwood, merbau, spotted gum, ironbark — we select the right species for each site and build with no shortcuts on framing, fixings, or finish. A Lunella deck is built to improve with every season.',
    ],
    includes: [
      'Hardwood & spotted gum decking',
      'Merbau & ironbark decking',
      'Deck framing & substructure',
      'Balustrades & screening',
      'Steps & level changes',
      'Oiling, sealing & long-term care',
    ],
  },
  {
    id: 'concrete',
    number: '06',
    title: 'Concrete — Driveways & Paths',
    tagline: 'Durable, well-finished concrete work that anchors the landscape for decades.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 8 L10 40 h28 L34 8 Z" />
        <path d="M18 8 L16 40" />
        <path d="M30 8 L32 40" />
        <path d="M24 8 L24 40" />
      </svg>
    ),
    paragraphs: [
      'Concrete done well is one of the most versatile and enduring surfaces in landscape design. We pour, finish, and detail driveways and paths that hold up to Australian conditions without cracking, staining, or looking tired within a few years.',
      'We work with exposed aggregate, broom-finished, and honed concrete to achieve surfaces that are both practical and considered — matching the material to the project rather than defaulting to the same finish every time.',
    ],
    includes: [
      'Driveway design & construction',
      'Pathways & garden paths',
      'Exposed aggregate concrete',
      'Broom & honed finishes',
      'Footings & base preparation',
      'Expansion joints & drainage detail',
    ],
  },
  {
    id: 'fencing',
    number: '07',
    title: 'Fencing',
    tagline: 'All aspects of hard and soft scapes — boundary, privacy, and structure.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
    paragraphs: [
      'Fencing defines the boundary between spaces, and we treat it as an integral part of the landscape rather than an afterthought. Our fencing work spans all aspects of the hardscape and softscape — from robust structural boundaries to decorative screens that frame planting and let light through.',
      'We work with natural timber, steel, Colorbond, and composite materials, selecting the right solution for the site, the aesthetic, and the maintenance expectations of each client.',
    ],
    includes: [
      'Timber paling & picket fencing',
      'Steel & Colorbond fencing',
      'Decorative screening panels',
      'Retaining & boundary walls',
      'Garden edging & soft landscape borders',
      'Gates & entry structures',
    ],
  },
]

const process = [
  {
    step: '01',
    title: 'Enquiry',
    description:
      "Tell us about your project. We'll respond within 2 business days to arrange an initial conversation.",
  },
  {
    step: '02',
    title: 'Site Visit',
    description:
      'We visit your property to understand the site and discuss your vision, budget, and timeline.',
  },
  {
    step: '03',
    title: 'Proposal',
    description:
      "We submit a detailed scope and fee proposal. No commitment until you're satisfied with the terms.",
  },
  {
    step: '04',
    title: 'Design',
    description:
      "Design begins. You'll be closely involved through concept, development, and documentation stages.",
  },
  {
    step: '05',
    title: 'Construction',
    description:
      'Our team breaks ground. Regular site meetings and progress reports keep you informed throughout.',
  },
  {
    step: '06',
    title: 'Handover',
    description:
      'We walk through the finished garden together and provide a care guide tailored to your planting scheme.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="section-pad bg-bone border-b border-sand">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow mb-8">Services</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl text-ink max-w-3xl leading-[1.05] mb-8">
              A complete
              <br />
              <em>landscape service</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-stone text-sm leading-relaxed max-w-lg">
              We offer the full spectrum of landscape services — from initial design through to
              construction, planting, and long-term maintenance. Every engagement is managed by our
              permanent company team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Services list ── */}
      <section className="bg-paper">
        <div className="site-container">
          <div className="divide-y divide-sand">
            {services.map((s) => (
              <div key={s.id} id={s.id} className="py-16 md:py-20 scroll-mt-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                  <Reveal className="md:col-span-4">
                    <Icon>{s.icon}</Icon>
                    <p className="eyebrow mb-4">{s.number}</p>
                    <h2 className="font-display text-3xl md:text-4xl text-ink mb-3">{s.title}</h2>
                    <p className="font-display text-lg italic text-stone">{s.tagline}</p>
                  </Reveal>

                  <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <Reveal delay={0.1} className="space-y-4">
                      {s.paragraphs.map((p, i) => (
                        <p key={i} className="text-stone text-sm leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </Reveal>

                    <Reveal delay={0.2}>
                      <p className="eyebrow mb-4 text-ink">Includes</p>
                      <ul className="space-y-2.5">
                        {s.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-slate">
                            <span className="mt-2 h-px w-4 flex-shrink-0 bg-sand" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-pad bg-bone border-t border-sand">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow mb-4">How We Work</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl text-ink mb-14">
              The process,
              <br />
              <em>step by step</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-sand">
            {process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08}>
                <div className="bg-bone p-8 md:p-10 h-full">
                  <p className="eyebrow text-stone mb-6">{step.step}</p>
                  <h3 className="font-display text-2xl text-ink mb-3">{step.title}</h3>
                  <p className="text-stone text-sm leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-14 text-center">
            <Link href="/contact" className="btn-primary">
              Enquire About Your Project
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
