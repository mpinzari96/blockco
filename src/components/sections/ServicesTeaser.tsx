'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Globe, TrendingUp, Bot, ShoppingCart, MapPin, Wrench, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Design',
    desc: 'Stunning, conversion-optimized websites built for speed and impact. Your digital storefront reimagined.',
    color: '#00F5FF',
  },
  {
    icon: TrendingUp,
    title: 'SEO Domination',
    desc: 'Rank #1 for your Sacramento market. We own the algorithm so you own your category.',
    color: '#7B2FFF',
  },
  {
    icon: Bot,
    title: 'AI-Powered Sites',
    desc: 'Built for Google AI search, ChatGPT, and the next generation of how customers find businesses.',
    color: '#00F5FF',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    desc: 'Online stores that convert browsers into buyers. Seamless checkout, beautiful UX.',
    color: '#7B2FFF',
  },
  {
    icon: MapPin,
    title: 'Local SEO',
    desc: 'Dominate "near me" searches. Own your Google Business Profile and local map pack.',
    color: '#00F5FF',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    desc: 'Never worry about your site again. Updates, security, backups — all handled monthly.',
    color: '#7B2FFF',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function ServicesTeaser() {
  return (
    <section className="section-pad relative overflow-hidden" aria-labelledby="services-heading">
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,47,255,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-teal-glow uppercase block mb-4"
            style={{ fontFamily: 'var(--font-mono)' }}>
            What We Build
          </span>
          <h2 id="services-heading"
            className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}>
            Everything You Need to<br />
            <span className="gradient-text">Dominate Online</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            One agency, one monthly package — web design, SEO, and ongoing growth for Sacramento businesses ready to win.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map(({ icon: Icon, title, desc, color }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative glass rounded-xl p-7 cursor-pointer border border-transparent transition-all duration-300"
              style={{ '--card-color': color } as React.CSSProperties}
            >
              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${color}15, transparent)`,
                  border: `1px solid ${color}30`,
                }} />

              {/* Icon */}
              <div className="relative z-10 w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all duration-300"
                style={{
                  background: `${color}15`,
                  border: `1px solid ${color}30`,
                  boxShadow: `0 0 20px ${color}10`,
                }}>
                <Icon size={22} style={{ color }} />
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-lg font-bold text-white mb-3"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', letterSpacing: '0.05em' }}>
                {title}
              </h3>
              <p className="relative z-10 text-sm text-white/50 leading-relaxed">{desc}</p>

              {/* Arrow */}
              <div className="relative z-10 mt-5 flex items-center gap-2 text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color, fontFamily: 'var(--font-mono)' }}>
                <span>Learn more</span>
                <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-secondary">
            View All Services & Pricing
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
