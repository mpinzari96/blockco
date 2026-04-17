'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Target, Zap, Heart, ArrowRight, CheckCircle } from 'lucide-react'

const values = [
  { icon: MapPin, title: 'Sacramento First', desc: 'We live here, work here, and are invested in this community. Your success is our reputation.' },
  { icon: Target, title: 'Results Over Vanity', desc: 'We don\'t chase pretty dashboards. We chase rankings, leads, and revenue for your business.' },
  { icon: Zap, title: 'Speed & Precision', desc: 'AI-powered workflows mean we move fast without sacrificing quality. Time is money.' },
  { icon: Heart, title: 'Long-Term Partnership', desc: 'We grow with you. Most clients are with us 2+ years because we keep delivering.' },
]

const whyUs = [
  'We specialize in Sacramento local SEO — we know the market',
  'One flat monthly rate — no surprise invoices',
  'You own everything — domain, site, content',
  'AI-optimized from day one — ready for ChatGPT and Google AI',
  'Real humans, real accountability — meet us in person',
  'No bloated agency overhead — you get senior talent directly',
]

export default function AboutClient() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-pad relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at top left, #0D2040 0%, #020818 60%)' }}>
        <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }}>
              <span className="text-xs tracking-[0.3em] text-teal-glow uppercase block mb-4"
                style={{ fontFamily: 'var(--font-mono)' }}>Our Story</span>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}>
                Built in Sacramento.<br /><span className="gradient-text">Built for Sacramento.</span>
              </h1>
              <p className="text-white/60 leading-relaxed mb-4">
                Blockco started from a simple observation: Sacramento&apos;s small businesses were getting left behind online. Traditional agencies were either too expensive, too slow, or too disconnected from local market realities.
              </p>
              <p className="text-white/60 leading-relaxed mb-6">
                We built Blockco to solve that. An agency that combines the craft of elite web design with the science of modern SEO — all built specifically for the Sacramento market, at a price that makes sense for real businesses.
              </p>
              <p className="text-white/60 leading-relaxed">
                Today we power the online presence of 50+ Sacramento businesses — from HVAC contractors in Elk Grove to med spas in Midtown to law firms downtown. One common thread: they all wanted to dominate their market online. That&apos;s exactly what we do.
              </p>
            </motion.div>

            {/* Visual block */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16,1,0.3,1] }}
              className="relative"
            >
              <div className="glass rounded-2xl p-10 border-glow relative overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 border border-teal-glow/20 rounded-lg opacity-50" />
                <div className="absolute bottom-4 left-4 w-10 h-10 border border-purple-glow/20 rounded-md opacity-40" />
                <div className="space-y-6">
                  {[
                    { label: 'Founded', val: '2023', color: '#00F5FF' },
                    { label: 'Based in', val: 'Sacramento, CA', color: '#7B2FFF' },
                    { label: 'Clients served', val: '50+', color: '#00F5FF' },
                    { label: 'Avg growth/client', val: '98% in 90 days', color: '#7B2FFF' },
                    { label: 'Specialty', val: 'Local SEO + Web Design', color: '#00F5FF' },
                  ].map(({ label, val, color }) => (
                    <div key={label} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <span className="text-sm text-white/40">{label}</span>
                      <span className="text-sm font-bold" style={{ color, fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }} className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] text-teal-glow uppercase block mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}>What We Stand For</span>
            <h2 className="text-4xl md:text-5xl font-black text-white"
              style={{ fontFamily: 'var(--font-display)' }}>
              Our <span className="gradient-text">Values</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-xl p-7 text-center hover:scale-[1.02] transition-transform duration-300">
                <div className="w-12 h-12 rounded-full mx-auto mb-5 flex items-center justify-center"
                  style={{ background: 'rgba(0,245,255,0.1)', border: '1px solid rgba(0,245,255,0.2)' }}>
                  <Icon size={20} className="text-teal-glow" />
                </div>
                <h3 className="font-bold text-white mb-3"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', letterSpacing: '0.08em' }}>{title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sacramento trusts us */}
      <section className="section-pad border-t border-white/5"
        style={{ background: 'radial-gradient(ellipse at right, rgba(123,47,255,0.04), transparent 60%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <span className="text-xs tracking-[0.3em] text-teal-glow uppercase block mb-4"
                style={{ fontFamily: 'var(--font-mono)' }}>Why We Win</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}>
                Why Sacramento<br /><span className="gradient-text">Trusts Blockco</span>
              </h2>
              <ul className="space-y-4">
                {whyUs.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-teal-glow mt-0.5 shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/contact" className="btn-primary">
                  Work With Us
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Mission statement */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="glass rounded-2xl p-10 border-glow relative overflow-hidden">
                <div className="absolute inset-0 opacity-30"
                  style={{ background: 'radial-gradient(circle at top right, rgba(0,245,255,0.08), transparent)' }} />
                <span className="text-xs tracking-[0.3em] text-teal-glow uppercase block mb-6"
                  style={{ fontFamily: 'var(--font-mono)' }}>Our Mission</span>
                <blockquote className="text-2xl font-black text-white leading-tight mb-6"
                  style={{ fontFamily: 'var(--font-display)' }}>
                  &ldquo;Make every Sacramento small business impossible to ignore online.&rdquo;
                </blockquote>
                <p className="text-white/50 text-sm leading-relaxed">
                  We believe local businesses are the backbone of Sacramento. When a roofer in North Natomas or a dentist in East Sac can compete online against national chains, everyone wins. That&apos;s the mission we show up for every day.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
