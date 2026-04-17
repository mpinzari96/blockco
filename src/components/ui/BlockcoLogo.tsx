'use client'
import { motion } from 'framer-motion'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export default function BlockcoLogo({ size = 'md', showText = true }: LogoProps) {
  const sizes = { sm: 32, md: 40, lg: 56 }
  const px = sizes[size]
  const textSizes = { sm: 'text-sm', md: 'text-base', lg: 'text-2xl' }

  return (
    <motion.div
      className="flex items-center gap-3 select-none cursor-pointer"
      whileHover="hover"
    >
      {/* SVG Cube Logo */}
      <motion.svg
        width={px}
        height={px}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={{ hover: { scale: 1.08 } }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <defs>
          <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F5FF" />
            <stop offset="100%" stopColor="#00C8D4" />
          </linearGradient>
          <linearGradient id="tealDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C8D4" />
            <stop offset="100%" stopColor="#008A94" />
          </linearGradient>
          <linearGradient id="tealSide" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A8B8" />
            <stop offset="100%" stopColor="#006875" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-strong">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background glow */}
        <motion.ellipse
          cx="28" cy="32" rx="20" ry="12"
          fill="rgba(0,245,255,0.08)"
          variants={{ hover: { rx: 24, ry: 16, fill: 'rgba(0,245,255,0.15)' } }}
          transition={{ duration: 0.3 }}
        />

        {/* Bottom-right block (dark) */}
        <motion.g
          filter="url(#glow)"
          variants={{ hover: { x: 2, y: 2 } }}
          transition={{ duration: 0.3 }}
        >
          {/* Top face */}
          <polygon points="28,18 42,11 42,26 28,33" fill="url(#tealGrad)" opacity="0.9" />
          {/* Left face */}
          <polygon points="14,26 28,18 28,33 14,41" fill="url(#tealSide)" />
          {/* Right face */}
          <polygon points="28,33 42,26 42,41 28,48" fill="url(#tealDark)" />
        </motion.g>

        {/* Top-left small block */}
        <motion.g
          filter="url(#glow)"
          variants={{ hover: { x: -1.5, y: -2 } }}
          transition={{ duration: 0.3 }}
        >
          <polygon points="14,11 24,6 24,17 14,22" fill="url(#tealGrad)" opacity="0.7" />
          <polygon points="4,17 14,11 14,22 4,27" fill="url(#tealSide)" opacity="0.6" />
          <polygon points="14,22 24,17 24,28 14,33" fill="url(#tealDark)" opacity="0.6" />
        </motion.g>

        {/* Glowing edges */}
        <motion.polyline
          points="28,18 42,11 42,26 28,33 14,26 14,41 28,48 42,41 42,26"
          fill="none"
          stroke="#00F5FF"
          strokeWidth="0.5"
          opacity="0.4"
          filter="url(#glow-strong)"
        />

        {/* B letter formed by vertical bar highlight */}
        <motion.rect
          x="15.5" y="10" width="2.5" height="31"
          fill="#00F5FF"
          opacity="0.6"
          filter="url(#glow)"
          variants={{ hover: { opacity: 0.9 } }}
        />

        {/* Floating particles */}
        <motion.circle
          cx="44" cy="8" r="1.5"
          fill="#00F5FF"
          animate={{ y: [0, -4, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="8" cy="44" r="1"
          fill="#7B2FFF"
          animate={{ y: [0, -3, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.circle
          cx="48" cy="36" r="1"
          fill="#00C8D4"
          animate={{ y: [0, -5, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </motion.svg>

      {showText && (
        <motion.div className="flex flex-col">
          <motion.span
            className={`font-display font-black tracking-widest ${textSizes[size]} leading-none`}
            style={{
              fontFamily: 'var(--font-display)',
              background: 'linear-gradient(135deg, #00F5FF 0%, #ffffff 60%, #00C8D4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.15em',
            }}
            variants={{
              hover: { textShadow: '0 0 30px rgba(0,245,255,0.8)' }
            }}
          >
            BLOCKCO
          </motion.span>
          {size === 'lg' && (
            <span className="text-xs tracking-[0.3em] text-teal-glow/60 uppercase font-mono mt-0.5"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem' }}>
              Sacramento, CA
            </span>
          )}
        </motion.div>
      )}
    </motion.div>
  )
}
