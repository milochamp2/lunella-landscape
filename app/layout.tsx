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
    default: 'Lunella Landscapes — Melbourne Landscape Company',
    template: '%s | Lunella Landscapes',
  },
  description:
    'Lunella Landscapes is a Melbourne-based landscape company specialising in stone paving, decking, retaining walls, garden installation, concrete driveways, and fencing across Melbourne and South East Victoria.',
  metadataBase: new URL('https://lunellalandscape.com.au'),
  keywords: [
    'landscape company Melbourne',
    'landscaping Melbourne',
    'Melbourne landscaper',
    'stone paving Melbourne',
    'decking Melbourne',
    'retaining walls Melbourne',
    'garden installation Melbourne',
    'concrete driveways Melbourne',
    'fencing Melbourne',
    'outdoor living Melbourne',
    'landscape design Melbourne',
    'South East Melbourne landscaping',
    'Lunella Landscapes',
  ],
  authors: [{ name: 'Lunella Landscapes' }],
  creator: 'Lunella Landscapes',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://lunellalandscape.com.au',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Lunella Landscapes',
    title: 'Lunella Landscapes — Melbourne Landscape Company',
    description:
      'Stone paving, decking, retaining walls, garden installation and more — considered outdoor environments across Melbourne and South East Victoria.',
    url: 'https://lunellalandscape.com.au',
    images: [
      {
        url: '/projects/heathmont/h7.png',
        width: 1200,
        height: 630,
        alt: 'Lunella Landscapes — Heathmont pool and stone paving project',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lunella Landscapes — Melbourne Landscape Company',
    description:
      'Stone paving, decking, retaining walls, garden installation and more — considered outdoor environments across Melbourne and South East Victoria.',
    images: ['/projects/heathmont/h7.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Lunella Landscapes',
  description:
    'Melbourne-based landscape company specialising in stone paving, decking, retaining walls, garden installation, concrete driveways, and fencing.',
  url: 'https://lunellalandscape.com.au',
  logo: 'https://lunellalandscape.com.au/lunella2ndlogo.png',
  image: 'https://lunellalandscape.com.au/projects/heathmont/h7.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Melbourne',
    addressRegion: 'VIC',
    addressCountry: 'AU',
  },
  areaServed: {
    '@type': 'State',
    name: 'Victoria',
  },
  priceRange: '$$',
  sameAs: [
    'https://www.instagram.com/lunella_landscapes/',
    'https://www.facebook.com/profile.php?id=61576254899627',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${montserrat.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main className="pt-20 md:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
