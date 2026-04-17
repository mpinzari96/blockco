import type { Metadata } from 'next'
import ServicesPage from './ServicesClient'

export const metadata: Metadata = {
  title: 'Web Design & SEO Services Sacramento | Blockco',
  description: 'Explore Blockco\'s web design, SEO, local SEO, e-commerce, and AI-optimized website services in Sacramento, CA. Transparent pricing starting at $597/month.',
  alternates: { canonical: 'https://blockco.us/services' },
  openGraph: {
    title: 'Sacramento Web Design & SEO Services | Blockco',
    description: 'Premium web design and SEO packages for Sacramento businesses. All-inclusive monthly plans.',
    url: 'https://blockco.us/services',
  },
}

export default function Page() {
  return <ServicesPage />
}
