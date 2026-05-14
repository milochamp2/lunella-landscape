import Link from 'next/link'
import { Reveal } from './reveal'

interface CtaBannerProps {
  heading?: string
  subtext?: string
  cta?: { label: string; href: string }
}

export function CtaBanner({
  heading = 'Ready to transform your outdoor space?',
  subtext =
    'We take on a limited number of projects each season to ensure every garden receives the attention it deserves.',
  cta = { label: 'Begin Your Project', href: '/contact' },
}: CtaBannerProps) {
  return (
    <section className="bg-bone border-t border-sand">
      <div className="site-container section-pad text-center">
        <Reveal>
          <p className="eyebrow mb-6">Start Here</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink mb-6 max-w-2xl mx-auto">
            {heading}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-stone max-w-sm mx-auto mb-10 text-sm leading-relaxed">{subtext}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <Link href={cta.href} className="btn-primary">
            {cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
