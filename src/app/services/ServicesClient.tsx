'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import {
  Globe, TrendingUp, Bot, ShoppingCart, MapPin, Wrench,
  CheckCircle, ChevronDown, ArrowRight, Zap
} from 'lucide-react'

const tiers = [
  {
    name: 'Launch',
    price: 597,
    desc: 'Perfect for small businesses ready to get online and start growing.',
    color: '#00F5FF',
    features: [
      'Custom 5-page website design',
      'Mobile-first responsive build',
      'On-page SEO optimization',
      'Google Business Profile setup',
      'Monthly SEO report',
      'Basic speed optimization',
      'SSL & security included',
      'Contact form & integrations',
    ],
    cta: 'Start with Launch',
    popular: false,
  },
  {
    name: 'Dominate',
    price: 997,
    desc: 'For businesses serious about ranking #1 and generating consistent leads.',
    color: '#7B2FFF',
    features: [
      'Everything in Launch',
      'Up to 10-page custom website',
      'Advanced SEO — 20+ keywords',
      'AI search optimization',
      'Local SEO & map pack targeting',
      '2 blog posts/month',
      'Monthly strategy call',
      'Competitor tracking',
      'Conversion rate optimization',
      'Priority support',
    ],
    cta: 'Start Dominating',
    popular: true,
  },
  {
    name: 'Empire',
    price: 1997,
    desc: 'For established businesses ready to own their entire market online.',
    color: '#00F5FF',
    features: [
      'Everything in Dominate',
      'Unlimited pages',
      'E-commerce functionality',
      '4 blog posts/month',
      'Full local SEO suite',
      'Google Ads management',
      'Social media integration',
      'Custom reporting dashboard',
      'Weekly check-ins',
      'Dedicated account manager',
    ],
    cta: 'Build Your Empire',
    popular: false,
  },
]

const processSteps = [
  { num: '01', title: 'Discovery Call', desc: 'We learn your business, goals, and target customers. 30 minutes that shape everything.' },
  { num: '02', title: 'Strategy & Design', desc: 'Custom sitemap, wireframes, and design concepts — built for your market and goals.' },
  { num: '03', title: 'Build & Optimize', desc: 'We build your site with SEO baked in from day one. Speed, structure, and schema markup.' },
  { num: '04', title: 'Launch & Monitor', desc: 'Go live with confidence. We monitor rankings, traffic, and conversions monthly.' },
  { num: '05', title: 'Grow & Report', desc: 'Monthly reports with real numbers. We continuously optimize to compound your results.' },
]

const faqs = [
  {
    q: 'How long until I see SEO results in Sacramento?',
    a: 'Most Sacramento clients see measurable improvements in 60–90 days, with significant ranking gains by month 4–6. Local SEO (Google Maps, "near me" searches) can show results in 30–45 days.',
  },
  {
    q: 'Is there a contract or can I cancel anytime?',
    a: 'No long-term contracts. Our packages are month-to-month. We keep clients through results, not lock-in clauses. We do ask for 30 days notice to cancel.',
  },
  {
    q: 'Do I own my website?',
    a: 'Yes — 100%. Your domain, your hosting account, your code. If you ever leave (though we\'ll do everything to make sure you don\'t want to), you take the full site with you.',
  },
  {
    q: 'What makes Blockco different from other Sacramento web agencies?',
    a: 'Most agencies either do design OR SEO. We do both, with AI-search optimization built in from day one. We\'re also fully local — you can meet us in person, and we know the Sacramento market inside and out.',
  },
  {
    q: 'What businesses do you work with?',
    a: 'Primarily local Sacramento small businesses: contractors, medical/dental, legal, restaurants, retail, real estate, service businesses. We specialize in businesses where local Google rankings directly drive revenue.',
  },
  {
    q: 'Can I upgrade or downgrade my plan?',
    a: 'Absolutely. Many clients start on Launch and move to Dominate once they see the results. You can change plans at the start of any billing cycle.',
  },
]

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-pad relative overflow-hidden text-center"
        style={{ background: 'radial-gradient(ellipse at top, #0D2040 0%, #020818 60%)' }}>
        <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.3em] text-teal-glow uppercase block mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}>Services & Pricing</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}>
              Transparent Pricing.<br /><span className="gradient-text">Extraordinary Results.</span>
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              Every plan includes web design, SEO, and ongoing maintenance. No hidden fees, no upsells. Just results for Sacramento businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="section-pad">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map(({ name, price, desc, color, features, cta, popular }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className={`relative glass rounded-2xl p-8 flex flex-col ${popular ? 'border-glow scale-[1.02]' : ''}`}
              >
                {popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-wider"
                    style={{ background: 'linear-gradient(135deg, #7B2FFF, #5B1FCC)', fontFamily: 'var(--font-display)', color: '#fff', fontSize: '0.65rem', letterSpacing: '0.15em' }}>
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <h2 className="text-xs tracking-[0.2em] uppercase mb-2"
                    style={{ color, fontFamily: 'var(--font-mono)' }}>{name}</h2>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-5xl font-black text-white"
                      style={{ fontFamily: 'var(--font-display)' }}>${price}</span>
                    <span className="text-white/40 text-sm">/mo</span>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                      <CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={popular ? 'btn-primary justify-center' : 'btn-secondary justify-center'}>
                  {cta}
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad border-t border-white/5"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,245,255,0.03), transparent 60%)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }} className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] text-teal-glow uppercase block mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}>How It Works</span>
            <h2 className="text-4xl md:text-5xl font-black text-white"
              style={{ fontFamily: 'var(--font-display)' }}>
              Our <span className="gradient-text">Process</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map(({ num, title, desc }, i) => (
              <motion.div key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center relative">
                <div className="w-14 h-14 glass rounded-full flex items-center justify-center mx-auto mb-4 border border-teal-glow/20">
                  <span className="text-sm font-black text-teal-glow"
                    style={{ fontFamily: 'var(--font-display)' }}>{num}</span>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-px"
                    style={{ background: 'linear-gradient(90deg, rgba(0,245,255,0.3), rgba(0,245,255,0.05))' }} />
                )}
                <h3 className="text-sm font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', letterSpacing: '0.08em' }}>{title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }} className="text-center mb-14">
            <span className="text-xs tracking-[0.3em] text-teal-glow uppercase block mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}>FAQ</span>
            <h2 className="text-4xl font-black text-white"
              style={{ fontFamily: 'var(--font-display)' }}>
              Common <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glass rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-white text-sm">{q}</span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={18} className="text-teal-glow shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-sm text-white/50 leading-relaxed border-t border-white/5 pt-4">{a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }} className="text-center mt-12">
            <Link href="/contact" className="btn-primary">
              <Zap size={16} />
              Get Your Free SEO Audit
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
