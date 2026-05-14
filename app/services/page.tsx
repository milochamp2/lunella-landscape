import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'From landscape design to stonework and ongoing maintenance — Lunella Landscape offers a complete landscape service across Melbourne and Victoria.',
}

const services = [
  {
    id: 'design',
    number: '01',
    title: 'Landscape Design',
    tagline: 'Spatial thinking that resolves the relationship between structure, plant, and light.',
    paragraphs: [
      'Our design process begins with a thorough site analysis — examining aspect, drainage, existing vegetation, and the architectural language of the building. From this we develop a coherent spatial concept before drawing a single line.',
      'We produce full design documentation including site plan, sections, elevations, planting plans, material schedules, and detailed specifications — resolved to a standard that allows precise construction and a faithful result.',
    ],
    includes: [
      'Feasibility consultation',
      'Site analysis & survey',
      'Concept design',
      'Design development',
      'Documentation & specification',
      'Contractor tendering support',
    ],
  },
  {
    id: 'installation',
    number: '02',
    title: 'Garden Installation',
    tagline: 'Expert construction and planting by our in-house team, end to end.',
    paragraphs: [
      'We self-perform all construction and planting with our permanent team — no subcontracting to unknown parties. This gives us direct control over quality at every stage, from bulk earthworks through to establishment planting and aftercare.',
      'Our project manager coordinates the full build sequence, maintains a rigorous site programme, and keeps you informed at every milestone.',
    ],
    includes: [
      'Earthworks & drainage',
      'Irrigation design & installation',
      'Soil preparation & amendment',
      'Structural planting',
      'Lawn establishment',
      'Establishment care & watering',
    ],
  },
  {
    id: 'stonework',
    number: '03',
    title: 'Stonework & Paving',
    tagline: 'Paths, walls, and terraces that define space with quiet authority.',
    paragraphs: [
      'Stone is at the heart of our practice. We work with Victorian bluestone, granite, sandstone, and other regional materials, selecting each piece for character and fitness of purpose.',
      'Our stonemasons are trained in traditional dry-stone walling, sawn-stone paving, and mortared construction. We refuse to use materials that will not weather honestly or require excessive maintenance.',
    ],
    includes: [
      'Dry-stone walls',
      'Sawn-stone paving',
      'Steps & terracing',
      'Gravel paths & courtyards',
      'Fire surround & feature walls',
      'Restoration of existing stonework',
    ],
  },
  {
    id: 'planting',
    number: '04',
    title: 'Planting Schemes',
    tagline: 'Considered plant communities that thrive with minimal intervention.',
    paragraphs: [
      'Our planting philosophy draws on ecological principles — we design communities of plants that support each other, respond to site conditions, and evolve over time into something richer than the sum of their parts.',
      'We work with indigenous Victorian species, Australian natives, and carefully selected exotic perennials and grasses. We do not use invasive species or plants that require unsustainable levels of water.',
    ],
    includes: [
      'Planting concept & palette',
      'Full planting documentation',
      'Nursery sourcing & quality control',
      'Mixed border design',
      'Meadow & gravel garden design',
      'Revegetation planting',
    ],
  },
  {
    id: 'maintenance',
    number: '05',
    title: 'Maintenance Programs',
    tagline: 'Seasonal care that keeps your garden at its intended best.',
    paragraphs: [
      'A garden requires intelligent, ongoing attention to fulfil its design intent. Our maintenance program is not a contract gardening service — it is a continuation of the design process, carried out by people who understand what the garden is trying to become.',
      'We offer tailored maintenance agreements from fortnightly visits to seasonal checks, managed by our senior horticulturalist.',
    ],
    includes: [
      'Fortnightly or monthly visits',
      'Seasonal pruning & cutting back',
      'Fertilisation & soil care',
      'Weed management',
      'Irrigation monitoring',
      'Annual design review',
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
              permanent studio team.
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
                  <p className="eyebrow text-sand mb-6">{step.step}</p>
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
