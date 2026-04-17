'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, TrendingUp, ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

type Category = 'All' | 'Web Design' | 'SEO' | 'E-commerce'

const projects = [
  { id: 1, name: 'Capitol Roofing Co.', category: 'Web Design', location: 'Sacramento, CA', result: '+340% organic traffic', detail: 'Full website rebuild with local SEO. Now ranks #1 for 8 roofing keywords in Sacramento.', color: '#00F5FF', tag: 'Roofing' },
  { id: 2, name: 'Gold Rush Med Spa', category: 'SEO', location: 'Midtown Sacramento', result: '#1 for "med spa Sacramento"', detail: 'Targeted keyword strategy, schema markup, and Google Business optimization brought them to the top.', color: '#7B2FFF', tag: 'Med Spa' },
  { id: 3, name: 'Sierra Legal Group', category: 'Web Design', location: 'Downtown Sacramento', result: '280% more consultations', detail: 'Conversion-focused redesign with attorney schema, trust signals, and clear CTAs.', color: '#00F5FF', tag: 'Legal' },
  { id: 4, name: 'Sac Pet Boutique', category: 'E-commerce', location: 'East Sacramento', result: '+190% online revenue', detail: 'Shopify-integrated custom design with local SEO to capture "pet store near me" searches.', color: '#7B2FFF', tag: 'Retail' },
  { id: 5, name: 'Delta HVAC Services', category: 'SEO', location: 'Elk Grove, CA', result: '60% more service calls', detail: 'Google Business profile overhaul plus on-page SEO now dominates map pack for HVAC in South Sac.', color: '#00F5FF', tag: 'HVAC' },
  { id: 6, name: 'Midtown Bites', category: 'Web Design', location: 'Midtown Sacramento', result: 'Page 1 for 12 keywords', detail: 'Restaurant site with online ordering integration, menu schema, and hyper-local content strategy.', color: '#7B2FFF', tag: 'Restaurant' },
  { id: 7, name: 'Granite Bay Dental', category: 'SEO', location: 'Granite Bay, CA', result: '4x Google review volume', detail: 'Review generation strategy plus local citation building and dental schema implementation.', color: '#00F5FF', tag: 'Dental' },
  { id: 8, name: 'Folsom Fit Studio', category: 'E-commerce', location: 'Folsom, CA', result: 'Online memberships up 210%', detail: 'Membership portal with class booking, e-commerce, and local fitness keyword targeting.', color: '#7B2FFF', tag: 'Fitness' },
  { id: 9, name: 'NorCal Plumbing Pros', category: 'Web Design', location: 'Roseville, CA', result: '150% more quote requests', detail: 'Emergency service-focused design with click-to-call, trust badges, and speed optimization.', color: '#00F5FF', tag: 'Plumbing' },
]

const categories: Category[] = ['All', 'Web Design', 'SEO', 'E-commerce']

export default function PortfolioClient() {
  const [active, setActive] = useState<Category>('All')
  const [selected, setSelected] = useState<typeof projects[0] | null>(null)

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-pad text-center relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at top, #0D2040 0%, #020818 60%)' }}>
        <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.3em] text-teal-glow uppercase block mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}>Our Work</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}>
              Real Results for<br /><span className="gradient-text">Real Businesses</span>
            </h1>
            <p className="text-white/50 leading-relaxed">
              Every project below is a real Sacramento business that trusted Blockco with their online presence. Here&apos;s what happened.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-5 py-2 rounded-lg text-sm transition-all duration-200"
                style={{
                  background: active === cat ? 'linear-gradient(135deg, #00F5FF, #00C8D4)' : 'rgba(255,255,255,0.04)',
                  color: active === cat ? '#020818' : 'rgba(255,255,255,0.5)',
                  border: active === cat ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  fontWeight: active === cat ? 700 : 500,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filtered.map(project => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelected(project)}
                  className="glass rounded-xl overflow-hidden cursor-pointer group"
                >
                  {/* Image placeholder */}
                  <div className="h-52 relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${project.color}15, rgba(2,8,24,0.9))` }}>
                    <div className="absolute top-4 right-4 w-10 h-10 border rounded-lg opacity-20"
                      style={{ borderColor: project.color }} />
                    <div className="absolute bottom-4 left-4 w-6 h-6 border rounded-sm opacity-15"
                      style={{ borderColor: project.color }} />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs px-3 py-1 rounded-full"
                        style={{ background: `${project.color}20`, border: `1px solid ${project.color}40`, color: project.color, fontFamily: 'var(--font-mono)', fontSize: '0.65rem' }}>
                        {project.tag}
                      </span>
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      style={{ background: 'rgba(2,8,24,0.7)' }}>
                      <div className="flex items-center gap-2 text-sm text-white">
                        <ExternalLink size={16} style={{ color: project.color }} />
                        View Case Study
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                      <TrendingUp size={14} style={{ color: project.color }} />
                      <span className="text-xs font-bold" style={{ color: project.color, fontFamily: 'var(--font-display)' }}>
                        {project.result}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white mb-1"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', letterSpacing: '0.05em' }}>
                      {project.name}
                    </h3>
                    <p className="text-xs text-white/40">{project.location}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Case study modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: 'rgba(2,8,24,0.85)', backdropFilter: 'blur(12px)' }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              className="glass rounded-2xl p-10 max-w-lg w-full border-glow relative"
            >
              <button onClick={() => setSelected(null)}
                className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors">
                <X size={20} />
              </button>
              <span className="text-xs px-3 py-1 rounded-full mb-6 inline-block"
                style={{ background: `${selected.color}20`, border: `1px solid ${selected.color}40`, color: selected.color, fontFamily: 'var(--font-mono)', fontSize: '0.65rem' }}>
                {selected.category}
              </span>
              <h2 className="text-2xl font-black text-white mb-1"
                style={{ fontFamily: 'var(--font-display)' }}>{selected.name}</h2>
              <p className="text-sm text-white/40 mb-6">{selected.location}</p>
              <div className="glass rounded-xl p-5 mb-6 flex items-center gap-3">
                <TrendingUp size={20} style={{ color: selected.color }} />
                <span className="font-bold" style={{ color: selected.color, fontFamily: 'var(--font-display)', fontSize: '0.9rem' }}>
                  {selected.result}
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-8">{selected.detail}</p>
              <Link href="/contact" className="btn-primary w-full justify-center">
                Get Similar Results
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
