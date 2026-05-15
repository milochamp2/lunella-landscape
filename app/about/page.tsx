import type { Metadata } from 'next'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Lunella Landscapes is a Melbourne landscape company established in 2025, bringing over 20 years of industry experience to ecologically sensitive and materially restrained outdoor environments across Victoria.',
}

const values = [
  {
    title: 'Ecological Sensitivity',
    description:
      'Every site is read for its existing ecology — soil, drainage, aspect, and native flora — before we propose a single plant or stone.',
  },
  {
    title: 'Material Honesty',
    description:
      'We use materials that belong to the landscape: local bluestone, untreated timber, hand-selected gravels that read as natural within years of installation.',
  },
  {
    title: 'Craft Over Spectacle',
    description:
      'We are not interested in trend-led design. Our gardens are resolved slowly, with care given to proportion, texture, and the passage of light through the day.',
  },
  {
    title: 'Long-Term Relationship',
    description:
      'Many of our clients have worked with us for over a decade. We consider maintenance and seasonal evolution as integral to the design, not an afterthought.',
  },
]

const team = [
  {
    name: 'Eleanor Walsh',
    role: 'Founding Director & Lead Designer',
    bio: 'Eleanor trained at the University of Melbourne and the Royal Botanic Gardens, London. Her work is informed by a decade studying gardens in Japan, the UK, and South Africa.',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'James Okafor',
    role: 'Head of Construction',
    bio: 'James brings 18 years of stonemason and landscape construction experience. His eye for detail and material quality sets the physical standard for every project.',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Priya Sharma',
    role: 'Senior Horticulturalist',
    bio: 'Priya specialises in indigenous planting and complex mixed borders. She manages our maintenance program and leads all establishment planting on new projects.',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
  },
]

const recognition = [
  { label: 'AILA Award', year: '2023', note: 'Residential Design' },
  { label: 'AILA Award', year: '2022', note: 'Public Space' },
  { label: 'Houses Magazine', year: '2023', note: 'Garden of the Year' },
  { label: 'Vogue Living', year: '2024', note: 'Featured Studio' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="section-pad bg-bone border-b border-sand">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow mb-8">About the Company</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl text-ink max-w-3xl leading-[1.05] mb-8">
              Beauty under
              <br />
              moonlight.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-stone text-sm leading-relaxed max-w-lg">
              Established in 2025, Lunella Landscapes brings over 20 years of industry experience to every project — creating modern, ecologically grounded outdoor environments across Melbourne and Victoria.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Hero image ── */}
      <section className="bg-paper">
        <div className="site-container py-16">
          <Reveal>
            <div className="image-frame aspect-[2/1] w-full">
              <Image
                src="/projects/heathmont/h4.jpg"
                alt="Stone paving and pool — Heathmont project"
                fill
                className="object-cover object-center"
                sizes="90vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Name meaning ── */}
      <section className="section-pad bg-ink">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <p className="eyebrow text-stone mb-8">The Name</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-paper mb-6 leading-tight">
                Beauty under moonlight.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-paper/50 text-sm tracking-widest uppercase mb-12">
                Luna &nbsp;·&nbsp; Moon &nbsp;&nbsp;+&nbsp;&nbsp; Ella &nbsp;·&nbsp; Beauty
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-stone text-base leading-relaxed mb-5 max-w-2xl mx-auto">
                Lunella is a name born from two simple words — <em className="text-paper/80 not-italic">Luna</em>, the moon, and <em className="text-paper/80 not-italic">Ella</em>, beauty. Together they speak to something we believe deeply: that a truly great garden does not belong to daylight alone.
              </p>
            </Reveal>
            <Reveal delay={0.38}>
              <p className="text-stone text-base leading-relaxed max-w-2xl mx-auto">
                The best outdoor spaces shift and soften as the sun goes down — shadows lengthen across stone, silver-leafed plants catch the moonlight, and the garden takes on a quieter, more intimate life. That quality of beauty, the kind that reveals itself slowly and at unexpected hours, is what we are always working towards.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="section-pad bg-bone border-t border-b border-sand">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <Reveal>
              <p className="eyebrow mb-6">Our Approach</p>
              <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.1]">
                Land as a medium,
                <br />
                <em>time as a collaborator</em>
              </h2>
            </Reveal>
            <div className="space-y-5">
              <Reveal delay={0.1}>
                <p className="text-stone text-sm leading-relaxed">
                  We approach each commission as a site-specific investigation. Before any design
                  work begins, we spend time on the land — reading its topography, its seasonal
                  rhythms, the quality of its light at different hours.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="text-stone text-sm leading-relaxed">
                  This slow observation informs everything: which materials will belong here, which
                  plants will thrive without excessive intervention, how the garden will move and
                  change across decades.
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <p className="text-stone text-sm leading-relaxed">
                  We are interested in gardens that improve with age — where the patina of weathered
                  stone, the spread of established planting, and the character of mature trees become
                  the garden&apos;s greatest assets.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-pad bg-paper">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow mb-14">What We Believe</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-sand">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.09}>
                <div className="bg-paper p-8 md:p-10 h-full">
                  <h3 className="font-display text-2xl text-ink mb-4">{v.title}</h3>
                  <p className="text-stone text-sm leading-relaxed">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section-pad bg-bone border-t border-sand">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow mb-14">The Team</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <div className="border-t border-sand pt-8">
                  <p className="eyebrow mb-2">{member.role}</p>
                  <h3 className="font-display text-2xl text-ink mb-3">{member.name}</h3>
                  <p className="text-stone text-sm leading-relaxed">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recognition ── */}
      <section className="bg-paper border-t border-sand py-14">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow text-center mb-10">Recognition</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-sand">
            {recognition.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-paper p-6 md:p-8 text-center">
                  <p className="font-display text-xl text-ink mb-1">{item.label}</p>
                  <p className="eyebrow mb-1">{item.year}</p>
                  <p className="text-stone text-xs">{item.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Work with us on your next project"
        cta={{ label: 'Start a Conversation', href: '/contact' }}
      />
    </>
  )
}
