/**
 * Netlify scans built HTML for forms at deploy time. This server-rendered form
 * registers the "contact" form even though the visible UI is a client component.
 */
export default function NetlifyContactFormProbe() {
  return (
    <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
      <input type="hidden" name="form-name" value="contact" />
      <input name="name" />
      <input name="email" />
      <input name="phone" />
      <input name="business" />
      <input name="service" />
      <input name="message" />
      <input name="time" />
      <input name="bot-field" />
    </form>
  )
}
