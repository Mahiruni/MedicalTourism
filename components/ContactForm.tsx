'use client'

import { FormEvent, useState } from 'react'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }
  if (sent) return <div className="successCard"><span>✓</span><h3>Request received.</h3><p>A coordinator can use this intake once it is connected to your secure CRM.</p></div>
  return (
    <form className="consultForm" onSubmit={submit}>
      <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required placeholder="Your name" /></div>
      <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></div>
      <div className="field"><label htmlFor="route">Care route</label><select id="route" name="route"><option>Care in Ethiopia</option><option>Care abroad</option><option>Second opinion</option></select></div>
      <div className="field"><label htmlFor="treatment">Specialty</label><select id="treatment" name="treatment"><option>Cardiology</option><option>Oncology</option><option>Orthopedics</option><option>Fertility</option><option>Eye care</option><option>Diagnostics</option><option>Neurology</option><option>Dental</option><option>Other</option></select></div>
      <div className="field full"><label htmlFor="country">Preferred destination <span className="optional">optional</span></label><select id="country" name="country"><option>Recommend based on my case</option><option>🇪🇹 Ethiopia</option><option>🇮🇳 India</option><option>🇹🇷 Türkiye</option><option>🇹🇭 Thailand</option><option>🇩🇪 Germany</option></select></div>
      <div className="field full"><label htmlFor="message">Brief note</label><textarea id="message" name="message" rows={4} placeholder="Diagnosis or treatment goal in a few words. Do not upload medical records here." /></div>
      <div className="field full consentRow"><label className="checkLabel"><input type="checkbox" required /> <span>I agree to the <a href="/privacy">Privacy Policy</a> and understand this is not emergency care.</span></label></div>
      <div className="field full"><button className="button buttonBlue" type="submit">Send request →</button><small>If this is urgent or life-threatening, use local emergency services or contact a licensed clinician directly.</small></div>
    </form>
  )
}
