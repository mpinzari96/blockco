'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, CheckCircle, Zap, Clock, ArrowRight } from 'lucide-react'

const PHONE_DISPLAY = '(916) 266-3570'
const PHONE_TEL = '+19162663570'
const WHATSAPP_URL = 'https://wa.me/19162663570'
const SACRAMENTO_OSM_EMBED =
  'https://www.openstreetmap.org/export/embed.html?bbox=-121.65%2C38.45%2C-121.35%2C38.72&layer=mapmarker=38.5816%2C-121.4944'
const SACRAMENTO_MAP_LINK =
  'https://www.openstreetmap.org/search?query=Sacramento%2C%20CA%2095814'

const services = [
  'Web Design', 'SEO Optimization', 'Local SEO', 'E-commerce', 'Site Maintenance', 'Free SEO Audit',
]

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']

/** Netlify Forms + Next runtime: POST must target the static form file in /public. */
const NETLIFY_FORMS_POST_PATH = '/__forms.html'

export default function ContactClient() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', business: '', service: '', message: '', time: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const data = new FormData(e.currentTarget)
      const params = new URLSearchParams()
      data.forEach((v, k) => params.append(k, v as string))

      const res = await fetch(`${window.location.origin}${NETLIFY_FORMS_POST_PATH}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      })
      if (!res.ok) {
        if (res.status === 405) {
          setError('Form delivery runs on Netlify. Deploy the site or test on your live URL, or email hello@blockco.us.')
        } else {
          throw new Error('Submit failed')
        }
        return
      }
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please email hello@blockco.us or call us.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden text-center"
        style={{ background: 'radial-gradient(ellipse at top, #0D2040 0%, #020818 60%)' }}>
        <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.3em] text-teal-glow uppercase block mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}>Let&apos;s Talk</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}>
              Start Your<br /><span className="gradient-text">Free SEO Audit</span>
            </h1>
            <p className="text-white/50 leading-relaxed max-w-xl mx-auto">
              No pressure, no pitch. Just a clear picture of where your business stands online and exactly what it would take to dominate.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Contact info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-5"
            >
              {/* Info cards */}
              {[
                { icon: Phone, label: 'Phone', val: PHONE_DISPLAY, href: `tel:${PHONE_TEL}`, color: '#00F5FF' },
                { icon: Mail, label: 'Email', val: 'hello@blockco.us', href: 'mailto:hello@blockco.us', color: '#7B2FFF' },
                { icon: MapPin, label: 'Location', val: 'Sacramento, CA 95814', href: SACRAMENTO_MAP_LINK, color: '#00F5FF' },
                { icon: MessageCircle, label: 'WhatsApp', val: 'Chat on WhatsApp', href: WHATSAPP_URL, color: '#7B2FFF' },
              ].map(({ icon: Icon, label, val, href, color }) => (
                <a key={label} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass rounded-xl p-5 flex items-center gap-4 group hover:scale-[1.02] transition-transform duration-200 block">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">{label}</div>
                    <div className="text-sm text-white font-medium">{val}</div>
                  </div>
                </a>
              ))}

              {/* Response time */}
              <div className="glass rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={16} className="text-teal-glow" />
                  <span className="text-sm font-medium text-white">Response Time</span>
                </div>
                <p className="text-xs text-white/50 leading-relaxed">
                  We respond to all inquiries within <span className="text-teal-glow font-medium">4 business hours</span>. Strategy calls available Mon–Fri, 9am–5pm PT.
                </p>
              </div>

              {/* Sacramento area map */}
              <div className="glass rounded-xl overflow-hidden">
                <div className="h-44 relative bg-[#0a1628]">
                  <iframe
                    title="Map of Sacramento area"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={SACRAMENTO_OSM_EMBED}
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-white/40 text-center">Serving all of Sacramento & Northern California</p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              {!submitted ? (
                <form
                  name="contact"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="glass rounded-2xl p-8 md:p-10 border-glow"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden" aria-hidden="true">
                    <label>
                      Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>
                  <input type="hidden" name="service" value={form.service} />
                  <input type="hidden" name="time" value={form.time} />

                  <h2 className="text-xl font-black text-white mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}>
                    Book Your Free Strategy Call
                  </h2>
                  <p className="text-sm text-white/50 mb-8">30 minutes. Zero obligation. Complete clarity.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {[
                      { key: 'name', label: 'Full Name', placeholder: 'John Smith', type: 'text' },
                      { key: 'email', label: 'Email Address', placeholder: 'john@business.com', type: 'email' },
                      { key: 'phone', label: 'Phone Number', placeholder: '(916) 266-3570', type: 'tel' },
                      { key: 'business', label: 'Business Name', placeholder: 'Your Business LLC', type: 'text' },
                    ].map(({ key, label, placeholder, type }) => (
                      <div key={key}>
                        <label className="block text-xs text-white/50 mb-1.5 tracking-wide">{label}</label>
                        <input
                          name={key}
                          type={type}
                          value={form[key as keyof typeof form]}
                          onChange={e => update(key, e.target.value)}
                          placeholder={placeholder}
                          required={key !== 'phone'}
                          className="w-full glass rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all duration-200"
                          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0,245,255,0.12)', fontFamily: 'var(--font-body)' }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Service select */}
                  <div className="mb-4">
                    <label className="block text-xs text-white/50 mb-2 tracking-wide">Service Interested In</label>
                    <div className="flex flex-wrap gap-2">
                      {services.map(s => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => update('service', s)}
                          className="px-4 py-2 rounded-lg text-xs transition-all duration-200"
                          style={{
                            background: form.service === s ? 'rgba(0,245,255,0.15)' : 'rgba(255,255,255,0.04)',
                            border: form.service === s ? '1px solid rgba(0,245,255,0.5)' : '1px solid rgba(255,255,255,0.08)',
                            color: form.service === s ? '#00F5FF' : 'rgba(255,255,255,0.5)',
                            fontFamily: 'var(--font-body)',
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time preference */}
                  <div className="mb-4">
                    <label className="block text-xs text-white/50 mb-2 tracking-wide">Preferred Call Time (PT)</label>
                    <div className="flex flex-wrap gap-2">
                      {timeSlots.map(t => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => update('time', t)}
                          className="px-3 py-2 rounded-lg text-xs transition-all duration-200"
                          style={{
                            background: form.time === t ? 'rgba(123,47,255,0.15)' : 'rgba(255,255,255,0.04)',
                            border: form.time === t ? '1px solid rgba(123,47,255,0.5)' : '1px solid rgba(255,255,255,0.08)',
                            color: form.time === t ? '#7B2FFF' : 'rgba(255,255,255,0.5)',
                          }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label className="block text-xs text-white/50 mb-1.5 tracking-wide">Tell Us About Your Business</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={e => update('message', e.target.value)}
                      placeholder="What does your business do? What's your biggest challenge online right now?"
                      rows={4}
                      className="w-full glass rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 outline-none resize-none transition-all duration-200"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0,245,255,0.12)', fontFamily: 'var(--font-body)' }}
                    />
                  </div>

                  {error ? (
                    <p className="text-sm text-red-400 mb-4" role="alert">{error}</p>
                  ) : null}

                  <button type="submit" disabled={loading} className="btn-primary w-full justify-center text-sm">
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending Your Request...
                      </span>
                    ) : (
                      <>
                        <Zap size={16} />
                        Book Free Strategy Call
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-white/25 text-center mt-3">No spam. We&apos;ll only reach out about your request.</p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-16 border-glow text-center"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'rgba(0,245,255,0.15)', border: '1px solid rgba(0,245,255,0.4)' }}>
                    <CheckCircle size={28} className="text-teal-glow" />
                  </div>
                  <h2 className="text-3xl font-black text-white mb-4"
                    style={{ fontFamily: 'var(--font-display)' }}>
                    You&apos;re on the list!
                  </h2>
                  <p className="text-white/60 leading-relaxed mb-3">
                    We&apos;ll reach out within 4 business hours to confirm your strategy call.
                  </p>
                  <p className="text-sm text-teal-glow">Check your email — a confirmation is on its way.</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
