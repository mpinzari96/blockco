import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Sacramento Web Design & SEO Tips | Blockco',
  description: 'Expert insights on web design, SEO, and digital marketing for Sacramento businesses. Learn how to rank #1, attract more clients, and dominate your local market.',
  alternates: { canonical: 'https://blockco.us/blog' },
}

const posts = [
  {
    slug: 'rank-1-sacramento-2026',
    title: 'How to Rank #1 in Sacramento in 2026: The Complete Local SEO Guide',
    excerpt: 'Sacramento\'s local search landscape has changed dramatically. Here\'s exactly what it takes to rank #1 for your most valuable keywords in 2026 — from Google Business optimization to AI-search readiness.',
    date: 'March 10, 2026',
    readTime: '8 min read',
    tag: 'Local SEO',
    color: '#00F5FF',
    keywords: ['local SEO Sacramento', 'rank #1 Sacramento', 'Sacramento SEO strategy'],
  },
  {
    slug: 'future-of-ai-search-websites',
    title: 'The Future of AI Search & What It Means for Your Sacramento Business Website',
    excerpt: 'ChatGPT, Google AI Overviews, and Perplexity are changing how customers find local businesses. Here\'s how to make sure your Sacramento business shows up in the new era of AI-powered search.',
    date: 'February 28, 2026',
    readTime: '6 min read',
    tag: 'AI & SEO',
    color: '#7B2FFF',
    keywords: ['AI search Sacramento', 'Google AI Overviews', 'AI-optimized website'],
  },
  {
    slug: 'web-design-mistakes-sacramento-businesses',
    title: '7 Web Design Mistakes Sacramento Small Businesses Make (And How to Fix Them)',
    excerpt: 'After auditing hundreds of Sacramento business websites, these are the most common mistakes costing local businesses leads every single day — and exactly how to fix each one.',
    date: 'February 14, 2026',
    readTime: '7 min read',
    tag: 'Web Design',
    color: '#00F5FF',
    keywords: ['web design Sacramento', 'small business website Sacramento', 'Sacramento web designer'],
  },
]

export default function BlogPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden text-center"
        style={{ background: 'radial-gradient(ellipse at top, #0D2040 0%, #020818 60%)' }}>
        <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <span className="text-xs tracking-[0.3em] text-teal-glow uppercase block mb-4"
            style={{ fontFamily: 'var(--font-mono)' }}>Insights & Strategy</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6"
            style={{ fontFamily: 'var(--font-display)' }}>
            The Blockco <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-white/50 leading-relaxed">
            Real strategies for Sacramento businesses ready to dominate online. No fluff — just tactics that move the needle.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-6">
            {posts.map((post, i) => (
              <article
                key={post.slug}
                className="glass rounded-2xl p-8 md:p-10 group hover:scale-[1.01] transition-transform duration-300 cursor-pointer"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Left accent */}
                    <div className="hidden md:flex flex-col items-center gap-2 pt-1">
                      <div className="w-0.5 h-8 rounded-full" style={{ background: post.color }} />
                      <div className="w-2 h-2 rounded-full" style={{ background: post.color, boxShadow: `0 0 10px ${post.color}` }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs px-3 py-1 rounded-full"
                          style={{ background: `${post.color}20`, border: `1px solid ${post.color}40`, color: post.color, fontFamily: 'var(--font-mono)', fontSize: '0.65rem' }}>
                          {post.tag}
                        </span>
                        <div className="flex items-center gap-4 text-xs text-white/30">
                          <span className="flex items-center gap-1.5"><Calendar size={11} />{post.date}</span>
                          <span className="flex items-center gap-1.5"><Clock size={11} />{post.readTime}</span>
                        </div>
                      </div>
                      <h2 className="text-xl md:text-2xl font-black text-white mb-3 group-hover:text-teal-glow transition-colors duration-200 leading-tight"
                        style={{ fontFamily: 'var(--font-display)' }}>
                        {post.title}
                      </h2>
                      <p className="text-white/50 leading-relaxed text-sm mb-5">{post.excerpt}</p>
                      <div className="flex items-center gap-2 text-sm"
                        style={{ color: post.color, fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                        <span>Read Article</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 glass rounded-2xl p-10 text-center border-glow">
            <h3 className="text-2xl font-black text-white mb-3"
              style={{ fontFamily: 'var(--font-display)' }}>
              Get Sacramento SEO Tips in Your Inbox
            </h3>
            <p className="text-white/50 text-sm mb-6">Monthly insights for local businesses. No spam, unsubscribe anytime.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 glass rounded-lg px-5 py-3.5 text-sm text-white placeholder-white/30 outline-none"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(0,245,255,0.15)', fontFamily: 'var(--font-body)' }}
              />
              <button type="submit" className="btn-primary whitespace-nowrap text-xs">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
