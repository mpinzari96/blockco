import type { Metadata } from 'next'
import PortfolioClient from './PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfolio | Sacramento Web Design & SEO Case Studies | Blockco',
  description: 'See how Blockco has helped 50+ Sacramento businesses dominate online. Real results, real case studies — web design, SEO, e-commerce.',
  alternates: { canonical: 'https://blockco.us/portfolio' },
}

export default function Page() {
  return <PortfolioClient />
}
