import Link from 'next/link'
import { Logo } from './logo'

const studio = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  { href: '/services#design', label: 'Landscape Design' },
  { href: '/services#installation', label: 'Garden Installation' },
  { href: '/services#stonework', label: 'Stonework & Paving' },
  { href: '/services#planting', label: 'Planting Schemes' },
  { href: '/services#concrete', label: 'Concrete — Pathways & Driveways' },
]

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="site-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-14">
          <div className="md:col-span-2">
            <Logo size={36} dark className="mb-5" />
            <p className="text-stone text-sm leading-relaxed max-w-xs mt-4">
              A Melbourne-based landscape company creating considered outdoor environments for
              discerning clients across Victoria.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/lunella_landscapes/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lunella Landscapes on Instagram"
                className="text-stone hover:text-paper transition-colors duration-200"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576254899627"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lunella Landscapes on Facebook"
                className="text-stone hover:text-paper transition-colors duration-200"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-stone mb-6">Company</p>
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

        <div className="border-t border-slate pt-8">
          <p className="text-xs text-stone">
            &copy; {new Date().getFullYear()} Lunella Landscape Pty Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
