'use client'
import { motion } from 'framer-motion'
import { Shield, Star, TrendingUp, Clock, MapPin } from 'lucide-react'

const trustItems = [
  { icon: MapPin, text: '100% Sacramento Local' },
  { icon: Star, text: '5-Star Rated Agency' },
  { icon: TrendingUp, text: '98% Avg Client Growth in 90 Days' },
  { icon: Shield, text: 'Trusted by 50+ Local Businesses' },
  { icon: Clock, text: 'Results in 60 Days or Less' },
  { icon: MapPin, text: '100% Sacramento Local' },
  { icon: Star, text: '5-Star Rated Agency' },
  { icon: TrendingUp, text: '98% Avg Client Growth in 90 Days' },
  { icon: Shield, text: 'Trusted by 50+ Local Businesses' },
  { icon: Clock, text: 'Results in 60 Days or Less' },
]

export default function TrustBar() {
  return (
    <section className="relative py-5 border-y border-teal-glow/10 overflow-hidden"
      style={{ background: 'rgba(0,245,255,0.02)' }}>
      <div className="flex" style={{ animation: 'marquee 30s linear infinite' }}>
        {trustItems.map(({ icon: Icon, text }, i) => (
          <div
            key={i}
            className="flex items-center gap-3 whitespace-nowrap px-10 text-white/50 text-sm shrink-0"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <Icon size={14} className="text-teal-glow shrink-0" />
            <span>{text}</span>
            <span className="text-teal-glow/30 ml-6">◆</span>
          </div>
        ))}
      </div>

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #020818, transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-24 pointer-events-none"
        style={{ background: 'linear-gradient(-90deg, #020818, transparent)' }} />
    </section>
  )
}
