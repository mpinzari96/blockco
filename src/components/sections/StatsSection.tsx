'use client'
import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const stats = [
  { value: 50, suffix: '+', label: 'Sacramento Sites Launched', desc: 'From restaurants to law firms to contractors' },
  { value: 98, suffix: '%', label: 'Avg Growth in 90 Days', desc: 'Traffic, leads, and revenue — all measured' },
  { value: 1, suffix: 's', prefix: '<', label: 'Average Page Load Speed', desc: 'Lightning fast, zero compromise' },
  { value: 100, suffix: '%', label: 'Local & Accountable', desc: 'Real humans in Sacramento, CA' },
]

export default function StatsSection() {
  return (
    <section className="section-pad relative overflow-hidden border-y border-white/5"
      style={{ background: 'radial-gradient(ellipse at center, rgba(0,245,255,0.03) 0%, transparent 60%)' }}
      aria-labelledby="stats-heading">
      {/* Grid lines */}
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-teal-glow uppercase block mb-4"
            style={{ fontFamily: 'var(--font-mono)' }}>
            By The Numbers
          </span>
          <h2 id="stats-heading"
            className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: 'var(--font-display)' }}>
            Results That <span className="gradient-text">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ value, suffix, prefix, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative glass rounded-xl p-8 text-center border-glow group hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Glow behind number */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle at center, rgba(0,245,255,0.06) 0%, transparent 70%)' }} />

              <div className="relative z-10">
                <div
                  className="text-5xl md:text-6xl font-black mb-3 tabular-nums"
                  style={{
                    fontFamily: 'var(--font-display)',
                    background: 'linear-gradient(135deg, #00F5FF, #ffffff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: 'none',
                    filter: 'drop-shadow(0 0 20px rgba(0,245,255,0.4))',
                  }}
                >
                  <AnimatedCounter end={value} suffix={suffix} prefix={prefix} />
                </div>
                <h3 className="text-sm font-bold text-white mb-2 tracking-wide"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.08em' }}>
                  {label}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
