'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/crew', label: 'The Crew' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setIsOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 bg-ink transition-all duration-300',
          scrolled ? 'shadow-lg shadow-ink/30' : 'border-b border-white/10',
        )}
      >
        <div className="site-container flex items-center justify-between h-20 md:h-28">
          <Link href="/" aria-label="Lunella Landscapes — Home">
            <Image
              src="/lunellalogo.png"
              alt="Lunella Landscapes"
              width={200}
              height={80}
              className="h-14 md:h-24 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-xs font-sans font-semibold tracking-widest uppercase transition-colors duration-200',
                  pathname === link.href
                    ? 'text-paper'
                    : 'text-paper/60 hover:text-paper',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          >
            <span className={cn('block h-px w-6 bg-paper transition-all duration-300 origin-center', isOpen && 'translate-y-[7px] rotate-45')} />
            <span className={cn('block h-px w-6 bg-paper transition-all duration-300', isOpen && 'opacity-0')} />
            <span className={cn('block h-px w-6 bg-paper transition-all duration-300 origin-center', isOpen && '-translate-y-[7px] -rotate-45')} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-ink flex flex-col items-center justify-center gap-10 md:hidden"
          >
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 }} className="mb-4">
              <Image
                src="/lunellalogo.png"
                alt="Lunella Landscapes"
                width={200}
                height={80}
                className="h-24 w-auto object-contain"
              />
            </motion.div>

            {navLinks.map((link, i) => (
              <motion.div key={link.href} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + i * 0.07 }}>
                <Link href={link.href} className="font-display text-4xl font-bold text-paper">
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Link href="/contact" className="btn-primary mt-4">Get in Touch</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
