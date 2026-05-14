import Link from 'next/link'
import { Logo } from './logo'

const studio = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  { href: '/services#design', label: 'Landscape Design' },
  { href: '/services#installation', label: 'Garden Installation' },
  { href: '/services#stonework', label: 'Stonework & Paving' },
  { href: '/services#planting', label: 'Planting Schemes' },
  { href: '/services#maintenance', label: 'Maintenance' },
]

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="site-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-14">
          <div className="md:col-span-2">
            <Logo size={64} variant="dark-bg" className="mb-5" />
            <p className="text-stone text-sm leading-relaxed max-w-xs">
              A Melbourne-based landscape studio creating considered outdoor environments for
              discerning clients across Victoria.
            </p>
          </div>

          <div>
            <p className="eyebrow text-stone mb-6">Studio</p>
            <ul className="space-y-3">
              {studio.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-paper/70 hover:text-paper transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-stone mb-6">Services</p>
            <ul className="space-y-3">
              {services.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-paper/70 hover:text-paper transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-stone">
            &copy; {new Date().getFullYear()} Lunella Landscape Pty Ltd. All rights reserved.
          </p>
          <address className="not-italic text-xs text-stone">
            hello@lunellalandscape.com.au &middot; +61&nbsp;3&nbsp;9000&nbsp;0000 &middot; Melbourne,
            VIC
          </address>
        </div>
      </div>
    </footer>
  )
}
