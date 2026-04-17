'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    name: 'Capitol Roofing Co.',
    category: 'Web Design + Local SEO',
    result: '+340% organic traffic in 4 months',
    tag: 'Roofing',
    color: '#00F5FF',
    bg: 'from-teal-900/30 to-navy-900/80',
  },
  {
    name: 'Gold Rush Med Spa',
    category: 'E-commerce + SEO',
    result: '#1 ranking for "med spa Sacramento"',
    tag: 'Med Spa',
    color: '#7B2FFF',
    bg: 'from-purple-900/30 to-navy-900/80',
  },
  {
    name: 'Sierra Legal Group',
    category: 'Web Design + Content SEO',
    result: '280% more consultation bookings',
    tag: 'Law Firm',
    color: '#00F5FF',
    bg: 'from-teal-900/20 to-navy-900/80',
  },
  {
    name: 'Midtown Bites',
    category: 'Local SEO + Web Design',
    result: 'Page 1 for 12 local keywords',
    tag: 'Restaurant',
    color: '#7B2FFF',
    bg: 'from-purple-900/20 to-navy-900/80',
  },
  {
    name: 'Delta HVAC Services',
    category: 'Web Design + Google Ads',
    result: '60% more service call leads',
    tag: 'HVAC',
    color: '#00F5FF',
    bg: 'from-teal-900/25 to-navy-900/80',
  },
  {
    name: 'Sac Pet Boutique',
    category: 'E-commerce + Local SEO',
    result: '+190% online revenue Q1',
    tag: 'E-commerce',
    color: '#7B2FFF',
    bg: 'from-purple-900/25 to-navy-900/80',
  },
]

export default function PortfolioTeaser() {
  return (
    <section className="section-pad relative" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-xs tracking-[0.3em] text-teal-glow uppercase block mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}>
              Our Work
            </span>
            <h2 id="portfolio-heading"
              className="text-4xl md:text-5xl font-black text-white leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}>
              Sacramento Businesses<br />
              <span className="gradient-text">We&apos;ve Elevated</span>
            </h2>
          </div>
          <Link href="/portfolio" className="btn-secondary shrink-0">
            View All Work
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(({ name, category, result, tag, color, bg }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="group relative glass rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Card image placeholder — cosmic gradient */}
              <div className={`h-48 bg-gradient-to-br ${bg} relative overflow-hidden`}>
                {/* Decorative blocks inside */}
                <div className="absolute top-4 right-4 w-8 h-8 border rounded-sm opacity-30"
                  style={{ borderColor: color }} />
                <div className="absolute bottom-4 left-4 w-5 h-5 border rounded-sm opacity-20"
                  style={{ borderColor: color }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border rounded-lg opacity-10"
                  style={{ borderColor: color }} />

                {/* Category tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs px-3 py-1 rounded-full"
                    style={{
                      background: `${color}20`,
                      border: `1px solid ${color}40`,
                      color: color,
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.1em',
                    }}>
                    {tag}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: 'rgba(2,8,24,0.7)' }}>
                  <div className="flex items-center gap-2 text-sm text-white font-medium">
                    <ExternalLink size={16} style={{ color }} />
                    <span>View Case Study</span>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="font-bold text-white mb-1"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                  {name}
                </h3>
                <p className="text-xs text-white/40 mb-3">{category}</p>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                  <span className="text-xs font-medium" style={{ color }}>{result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
