'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Marcus T.',
    business: 'Capitol Roofing Co. — Sacramento',
    text: 'Blockco completely transformed our online presence. Within 3 months we were ranking #1 for "roofing contractor Sacramento" and our phone hasn\'t stopped ringing. Best investment we\'ve made for the business.',
    rating: 5,
    initials: 'MT',
    color: '#00F5FF',
  },
  {
    name: 'Sandra L.',
    business: 'Gold Rush Med Spa — Midtown Sacramento',
    text: 'We went from page 4 to page 1 on Google in under 90 days. The website they built for us looks like it belongs to a $10M company. Our booking rate is up 280% and clients constantly compliment the site.',
    rating: 5,
    initials: 'SL',
    color: '#7B2FFF',
  },
  {
    name: 'David R.',
    business: 'Sierra Legal Group — Sacramento CA',
    text: 'I was skeptical about the $597/month price point — I thought it was too good. Six months later I\'m getting 3x the consultation requests and ranking for every keyword that matters. Blockco is the real deal.',
    rating: 5,
    initials: 'DR',
    color: '#00F5FF',
  },
  {
    name: 'Priya N.',
    business: 'Delta HVAC Services — Elk Grove',
    text: 'Our old website was embarrassing. Blockco rebuilt it from scratch, set up our Google Business profile, and now we show up on the map pack for every neighborhood in Sacramento. Game changer.',
    rating: 5,
    initials: 'PN',
    color: '#7B2FFF',
  },
  {
    name: 'James K.',
    business: 'Midtown Bites Restaurant — Sacramento',
    text: 'As a restaurant owner I was drowning trying to manage my own website and social media. Blockco handles everything. Now I actually show up when people search "best burgers Sacramento" — and they come in!',
    rating: 5,
    initials: 'JK',
    color: '#00F5FF',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent(c => (c + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const navigate = (dir: number) => {
    setDirection(dir)
    setCurrent(c => (c + dir + testimonials.length) % testimonials.length)
  }

  const t = testimonials[current]

  return (
    <section className="section-pad relative overflow-hidden border-y border-white/5"
      style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(123,47,255,0.05) 0%, transparent 60%)' }}
      aria-labelledby="testimonials-heading">

      {/* BG decoration */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(123,47,255,0.15), transparent)' }} />
      <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.12), transparent)' }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
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
            Client Stories
          </span>
          <h2 id="testimonials-heading"
            className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: 'var(--font-display)' }}>
            Sacramento Businesses <span className="gradient-text">Love Us</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-10 md:p-14 relative border-glow"
            >
              {/* Quote icon */}
              <Quote
                size={48}
                className="absolute top-8 right-8 opacity-10"
                style={{ color: t.color }}
              />

              {/* Stars */}
              <div className="flex gap-1.5 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-current" style={{ color: t.color }} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 italic"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{
                    background: `${t.color}20`,
                    border: `1px solid ${t.color}40`,
                    color: t.color,
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-white text-sm"
                    style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
                    {t.name}
                  </div>
                  <div className="text-xs text-white/40 mt-0.5">{t.business}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    background: i === current ? '#00F5FF' : 'rgba(255,255,255,0.2)',
                    boxShadow: i === current ? '0 0 12px rgba(0,245,255,0.6)' : 'none',
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate(-1)}
                className="w-10 h-10 glass rounded-lg flex items-center justify-center text-white/60 hover:text-teal-glow hover:border-teal-glow/30 transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => navigate(1)}
                className="w-10 h-10 glass rounded-lg flex items-center justify-center text-white/60 hover:text-teal-glow hover:border-teal-glow/30 transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
