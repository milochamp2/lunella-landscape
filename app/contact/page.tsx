import type { Metadata } from 'next'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Enquire about a new landscape project or get in touch with Lunella Landscape studio in Melbourne.',
}

export default function ContactPage() {
  return (
    <section className="section-pad bg-paper">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">

          {/* ── Left: intro + studio info ── */}
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow mb-8">Contact</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl md:text-5xl text-ink mb-8 leading-[1.1]">
                Start a
                <br />
                <em>conversation</em>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-stone text-sm leading-relaxed mb-12">
                We would love to hear about your project. Fill in the form and we will be in touch
                within 2 business days.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-7 border-t border-sand pt-10">
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
                  <p className="eyebrow mb-1.5">Studio</p>
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
          </div>

          {/* ── Right: form ── */}
          <div className="md:col-span-8">
            <Reveal delay={0.15}>
              <ContactForm />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
