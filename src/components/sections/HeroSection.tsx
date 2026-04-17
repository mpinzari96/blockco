'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, ChevronDown } from 'lucide-react'
import ParticleBackground from '@/components/ui/ParticleBackground'
import BlockcoLogo from '@/components/ui/BlockcoLogo'

const FloatingBlock = ({ style, delay = 0, size = 40 }: { style: React.CSSProperties; delay?: number; size?: number }) => (
  <motion.div
    className="absolute border border-teal-glow/20 rounded-sm"
    style={{
      width: size,
      height: size,
      background: 'linear-gradient(135deg, rgba(0,245,255,0.05), rgba(123,47,255,0.05))',
      ...style,
    }}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -3, 0],
      opacity: [0.3, 0.7, 0.3],
    }}
    transition={{
      duration: 6 + Math.random() * 4,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
)

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 30% 20%, #0D2040 0%, #020818 55%, #050D1F 100%)' }}
      aria-label="Hero section"
    >
      {/* Grid lines */}
      <div className="absolute inset-0 grid-lines opacity-40" />

      {/* Particles */}
      <ParticleBackground />

      {/* Large glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.06) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,47,255,0.08) 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,245,255,0.03) 0%, transparent 70%)' }} />

      {/* Floating blocks */}
      <FloatingBlock style={{ top: '15%', left: '8%' }} delay={0} size={48} />
      <FloatingBlock style={{ top: '25%', right: '10%' }} delay={1.5} size={32} />
      <FloatingBlock style={{ bottom: '20%', left: '12%' }} delay={0.8} size={24} />
      <FloatingBlock style={{ bottom: '30%', right: '8%' }} delay={2.2} size={56} />
      <FloatingBlock style={{ top: '60%', left: '5%' }} delay={1.2} size={20} />
      <FloatingBlock style={{ top: '10%', right: '20%' }} delay={0.4} size={16} />
      <FloatingBlock style={{ bottom: '10%', right: '25%' }} delay={1.8} size={36} />

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 border border-teal-glow/20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-glow animate-pulse" />
          <span className="text-xs tracking-[0.3em] text-teal-glow uppercase"
            style={{ fontFamily: 'var(--font-mono)' }}>
            Sacramento&apos;s #1 Web Design & SEO Agency
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="block text-white">Websites That</span>
          <span className="block gradient-text glow-teal-text mt-2">Block the</span>
          <span className="block text-white mt-2">Competition</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed"
          style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
        >
          Premium Web Design & SEO in Sacramento, CA
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="text-base text-white/40 max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          We build lightning-fast, AI-optimized websites that dominate Google and AI search — turning local Sacramento businesses into category leaders.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link href="/contact" className="btn-primary text-sm">
            <Zap size={16} />
            Start Your Project
            <ArrowRight size={16} />
          </Link>
          <Link href="/contact#audit" className="btn-secondary text-sm">
            Free SEO Audit
          </Link>
        </motion.div>

        {/* Hero stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { val: '98%', label: 'Client Growth' },
            { val: '< 1s', label: 'Load Time' },
            { val: '50+', label: 'Sites Launched' },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-black text-teal-glow"
                style={{ fontFamily: 'var(--font-display)', textShadow: '0 0 20px rgba(0,245,255,0.5)' }}>
                {val}
              </div>
              <div className="text-xs text-white/40 mt-1 tracking-wider">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.3em] text-white/30 uppercase"
          style={{ fontFamily: 'var(--font-mono)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-teal-glow/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
