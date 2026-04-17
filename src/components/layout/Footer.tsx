import Link from 'next/link'
import { MapPin, Mail, Phone, Instagram, Linkedin, Twitter } from 'lucide-react'
import BlockcoLogo from '@/components/ui/BlockcoLogo'

const quickLinks = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  'Web Design',
  'SEO Optimization',
  'AI-Powered Sites',
  'E-commerce',
  'Local SEO',
  'Site Maintenance',
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-glow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <BlockcoLogo size="md" showText={true} />
            <p className="mt-4 text-white/50 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Sacramento's premier web design & SEO agency. We build websites that block the competition and dominate search.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 glass rounded-md flex items-center justify-center text-white/40 hover:text-teal-glow hover:border-teal-glow/30 transition-all duration-200"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs tracking-[0.25em] text-teal-glow uppercase font-display mb-5"
              style={{ fontFamily: 'var(--font-display)' }}>
              Navigate
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs tracking-[0.25em] text-teal-glow uppercase font-display mb-5"
              style={{ fontFamily: 'var(--font-display)' }}>
              Services
            </h3>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-[0.25em] text-teal-glow uppercase font-display mb-5"
              style={{ fontFamily: 'var(--font-display)' }}>
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin size={15} className="text-teal-glow mt-0.5 shrink-0" />
                <span>Sacramento, CA 95814<br />Serving all of Northern CA</span>
              </li>
              <li>
                <a href="tel:+19165550199" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors">
                  <Phone size={15} className="text-teal-glow shrink-0" />
                  (916) 555-0199
                </a>
              </li>
              <li>
                <a href="mailto:hello@blockco.us" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors">
                  <Mail size={15} className="text-teal-glow shrink-0" />
                  hello@blockco.us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="hr-glow mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p style={{ fontFamily: 'var(--font-mono)' }}>
            © 2026 Blockco – Sacramento, CA · blockco.us
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white/60 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
