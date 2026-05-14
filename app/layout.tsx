import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Lunella Landscape — Melbourne Landscape Studio',
    template: '%s | Lunella Landscape',
  },
  description:
    'Lunella Landscape is a Melbourne-based studio creating considered outdoor environments — from intimate city gardens to expansive rural estates across Victoria.',
  metadataBase: new URL('https://lunellalandscape.com.au'),
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Lunella Landscape',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
