import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About Blockco | Sacramento Web Design & SEO Agency',
  description: 'Blockco is a Sacramento-based web design and SEO agency helping local businesses dominate online. Learn our story, mission, and why Sacramento businesses trust us.',
  alternates: { canonical: 'https://blockco.us/about' },
}

export default function Page() {
  return <AboutClient />
}
