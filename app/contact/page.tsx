import type { Metadata } from 'next'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Get a Quote',
  description:
    'Request a quote or get in touch with Lunella Landscape studio in Melbourne. We respond within 2 business days.',
}

export default function ContactPage() {
  return (
    <>
      {/* ── Hero banner ── */}
      <section className="bg-ink py-20 md:py-28 border-b border-slate">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow text-stone mb-6">Get in Touch</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-paper leading-tight max-w-3xl">
              Need a quote?
              <br />
              <span className="text-stone/60">Contact us.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-stone text-sm leading-relaxed max-w-md mt-6">
              Tell us about your project and we will get back to you within 2 business days with
              an initial response and next steps.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Form + info ── */}
      <section className="section-pad bg-paper">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">

            {/* ── Left: studio info ── */}
            <div className="md:col-span-4">
              <Reveal>
                <div className="space-y-7">
                  <div>
                    <p className="eyebrow mb-1.5">Email</p>
                    <a
                      href="mailto:hello@lunellalandscape.com.au"
                      className="text-sm text-ink hover:text-stone transition-colors duration-200"
                    >
                      hello@lunellalandscape.com.au
                    </a>
                  </div>
                  <div>
                    <p className="eyebrow mb-1.5">Phone</p>
                    <a
                      href="tel:+61390000000"
                      className="text-sm text-ink hover:text-stone transition-colors duration-200"
                    >
                      +61 3 9000 0000
                    </a>
                  </div>
                  <div>
                    <p className="eyebrow mb-1.5">Company</p>
                    <address className="not-italic text-sm text-stone leading-relaxed">
                      Level 1, 42 Smith Street
                      <br />
                      Collingwood VIC 3066
                      <br />
                      Australia
                    </address>
                  </div>
                  <div>
                    <p className="eyebrow mb-1.5">Hours</p>
                    <p className="text-sm text-stone">Monday – Friday, 9 am – 5:30 pm AEST</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2} className="mt-12 pt-10 border-t border-sand">
                <p className="eyebrow mb-4">Services</p>
                <ul className="space-y-2">
                  {[
                    'Landscape Design',
                    'Garden Installation',
                    'Stonework & Paving',
                    'Planting Schemes',
                    'Irrigation & Lighting',
                    'Decking & Pergolas',
                  ].map((s) => (
                    <li key={s} className="text-sm text-stone flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-sand inline-block" />
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* ── Right: form ── */}
            <div className="md:col-span-8">
              <Reveal delay={0.1}>
                <div className="bg-bone border border-sand p-8 md:p-12">
                  <p className="font-display text-2xl font-bold text-ink mb-8">
                    Tell us about your project
                  </p>
                  <ContactForm />
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
