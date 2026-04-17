import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Blockco | Free SEO Audit Sacramento Web Design Agency',
  description: 'Get your free SEO audit or book a 30-min strategy call with Blockco — Sacramento\'s #1 web design and SEO agency. No pressure, just clarity.',
  alternates: { canonical: 'https://blockco.us/contact' },
}

export default function Page() {
  return <ContactClient />
}
