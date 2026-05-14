import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Lunella Landscape — Melbourne Landscape Company',
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
    <html lang="en-AU" className={`${montserrat.variable} ${poppins.variable}`}>
      <body>
        <Header />
        <main className="pt-20 md:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
