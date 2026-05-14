import type { Metadata } from 'next'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Meet the Crew',
  description: 'The team behind Lunella Landscapes — passionate landscape professionals across Victoria.',
}

const placeholderCount = 6

export default function CrewPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="section-pad bg-bone border-b border-sand">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow mb-4">Our People</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-tight max-w-2xl">
              Meet the Crew
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-stone text-sm leading-relaxed max-w-md mt-6">
              The people who bring Lunella Landscapes to life — designers, horticulturalists,
              stonemasons, and project managers united by a love of the land.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Team grid ── */}
      <section className="section-pad bg-paper">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {Array.from({ length: placeholderCount }).map((_, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="flex flex-col items-center text-center gap-5">
                  {/* Avatar placeholder */}
                  <div className="w-44 h-44 rounded-full bg-bone border border-sand flex items-center justify-center">
                    <svg
                      viewBox="0 0 80 80"
                      fill="none"
                      className="w-16 h-16 text-sand"
                      aria-hidden
                    >
                      <circle cx="40" cy="30" r="14" stroke="currentColor" strokeWidth="1.5" />
                      <path
                        d="M14 68 C14 54 25 44 40 44 C55 44 66 54 66 68"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Name + role placeholders */}
                  <div className="space-y-2 w-full">
                    <div className="h-5 bg-bone rounded w-3/5 mx-auto" />
                    <div className="h-3 bg-bone rounded w-2/5 mx-auto" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-20 text-center">
            <p className="text-stone text-sm italic">
              Crew profiles coming soon.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
