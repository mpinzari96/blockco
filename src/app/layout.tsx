import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://blockco.us'),
  title: {
    default: 'Blockco | Premium Web Design & SEO Agency Sacramento CA',
    template: '%s | Blockco Sacramento',
  },
  description: 'Blockco is Sacramento\'s premier web design and SEO agency. We build lightning-fast, AI-optimized websites that dominate Google search. Get your free SEO audit today.',
  keywords: ['web design Sacramento', 'SEO agency Sacramento', 'website development Sacramento CA', 'Sacramento web designer', 'AI-optimized websites Sacramento', 'local SEO Sacramento', 'Blockco'],
  authors: [{ name: 'Blockco', url: 'https://blockco.us' }],
  creator: 'Blockco',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blockco.us',
    siteName: 'Blockco',
    title: 'Blockco | Premium Web Design & SEO Agency Sacramento',
    description: 'Sacramento\'s elite web design & SEO agency. Websites that block the competition.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Blockco - Sacramento Web Design & SEO' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blockco | Web Design & SEO Sacramento',
    description: 'Premium web design & SEO in Sacramento, CA. Websites that dominate.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://blockco.us' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://blockco.us/#business',
      name: 'Blockco',
      description: 'Premium web design and SEO agency in Sacramento, California',
      url: 'https://blockco.us',
      telephone: '+1-916-555-0199',
      email: 'hello@blockco.us',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sacramento',
        addressLocality: 'Sacramento',
        addressRegion: 'CA',
        postalCode: '95814',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 38.5816, longitude: -121.4944 },
      areaServed: { '@type': 'City', name: 'Sacramento' },
      serviceType: ['Web Design', 'SEO', 'Digital Marketing', 'E-commerce Development'],
      priceRange: '$$$',
      openingHours: 'Mo-Fr 09:00-17:00',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#020818" />
      </head>
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
