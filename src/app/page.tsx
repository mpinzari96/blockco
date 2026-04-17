import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import ServicesTeaser from '@/components/sections/ServicesTeaser'
import StatsSection from '@/components/sections/StatsSection'
import PortfolioTeaser from '@/components/sections/PortfolioTeaser'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import HomeCTA from '@/components/sections/HomeCTA'

export const metadata: Metadata = {
  title: 'Blockco | Premium Web Design & SEO Agency Sacramento CA',
  description: 'Sacramento\'s #1 web design and SEO agency. We build lightning-fast, AI-optimized websites that dominate Google and AI search. 98% average client growth. Get your free SEO audit today.',
  alternates: { canonical: 'https://blockco.us' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does web design cost in Sacramento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blockco offers monthly packages starting at $597/month that include website design, development, SEO optimization, and ongoing maintenance — a fraction of traditional agency costs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to rank on Google in Sacramento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most of our Sacramento clients see measurable SEO improvements within 60-90 days, with significant ranking gains by month 6. Local SEO results can come even faster.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you only serve Sacramento businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are based in Sacramento and specialize in serving Northern California businesses, but we work with clients across the US.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <TrustBar />
      <ServicesTeaser />
      <StatsSection />
      <PortfolioTeaser />
      <TestimonialsSection />
      <HomeCTA />
    </>
  )
}
