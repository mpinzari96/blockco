'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { Zap, ArrowRight, CheckCircle } from 'lucide-react'

export default function HomeCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="section-pad relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Dramatic background */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,245,255,0.07) 0%, rgba(123,47,255,0.05) 40%, transparent 70%)' }} />
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 blur-3xl rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.08), transparent)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 blur-3xl rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,47,255,0.08), transparent)' }} />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 border border-teal-glow/20">
            <Zap size={12} className="text-teal-glow" />
            <span className="text-xs tracking-[0.3em] text-teal-glow uppercase"
              style={{ fontFamily: 'var(--font-mono)' }}>
              Limited Spots Available
            </span>
          </div>

          <h2 id="cta-heading"
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}>
            Ready to Block<br />
            <span className="gradient-text">Your Competition?</span>
          </h2>

          <p className="text-lg text-white/50 mb-4 leading-relaxed max-w-2xl mx-auto">
            Join 50+ Sacramento businesses dominating their local market online. Start with a free, no-obligation SEO audit — we&apos;ll show you exactly what&apos;s holding your business back.
          </p>

          {/* Value props */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mb-12">
            {['Free 30-min strategy call', 'No contracts — cancel anytime', 'Results in 60 days or money back'].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/50">
                <CheckCircle size={14} className="text-teal-glow shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Mini form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 glass rounded-lg px-5 py-4 text-sm text-white placeholder-white/30 outline-none focus:border-teal-glow/50 transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(0,245,255,0.15)',
                  fontFamily: 'var(--font-body)',
                }}
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-primary whitespace-nowrap"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    <Zap size={15} />
                    Get Free Audit
                  </>
                )}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 glass rounded-lg px-8 py-5 max-w-lg mx-auto mb-6 border border-teal-glow/30"
            >
              <CheckCircle size={20} className="text-teal-glow" />
              <span className="text-teal-glow font-medium">
                Awesome! We&apos;ll reach out within 24 hours.
              </span>
            </motion.div>
          )}

          <p className="text-xs text-white/25 mb-10">
            No spam. No pressure. Just clarity on your website&apos;s growth potential.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link href="/contact" className="btn-secondary text-sm">
              Book a Strategy Call
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* Pricing nudge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 glass rounded-2xl p-8 border border-teal-glow/10"
        >
          <p className="text-xs tracking-[0.3em] text-teal-glow uppercase mb-4"
            style={{ fontFamily: 'var(--font-mono)' }}>
            Simple Pricing
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
            <div className="text-center">
              <div className="text-5xl font-black text-white"
                style={{ fontFamily: 'var(--font-display)', filter: 'drop-shadow(0 0 20px rgba(0,245,255,0.4))' }}>
                $597
              </div>
              <div className="text-sm text-white/40 mt-1">/month</div>
            </div>
            <div className="w-px h-16 bg-white/10 hidden md:block" />
            <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-left">
              {[
                'Custom Website Design',
                'Monthly SEO Optimization',
                'AI Search Optimization',
                'Local SEO & Google Business',
                'Speed & Performance',
                'Monthly Reporting',
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/60">
                  <CheckCircle size={12} className="text-teal-glow shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
