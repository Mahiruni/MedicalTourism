'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const nav = [
  ['Ethiopia care', '/inbound'],
  ['Care abroad', '/outbound'],
  ['Treatments', '/treatments'],
  ['Journey', '/journey'],
  ['Providers', '/providers'],
  ['About', '/about'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="siteHeader">
      <a className="skipLink" href="#main-content">Skip to content</a>
      <div className="shell navShell">
        <Link href="/" className="brand" aria-label="TenaBridge home">
          <span className="brandMark" aria-hidden="true">+</span>
          <span>TenaBridge</span>
        </Link>
        <nav className={open ? 'mainNav open' : 'mainNav'} aria-label="Main navigation">
          {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
        <div className="navActions">
          <Link className="button buttonDark" href="/contact">Free consult</Link>
          <button className="menuButton" onClick={() => setOpen(v => !v)} aria-label="Toggle menu" aria-expanded={open}>☰</button>
        </div>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="shell footerGrid">
        <div><div className="brand footerBrand"><span className="brandMark">+</span><span>TenaBridge</span></div><p>Medical-travel coordination between Ethiopia and trusted international care pathways.</p></div>
        <div><strong>Care</strong><Link href="/inbound">Ethiopia</Link><Link href="/outbound">Abroad</Link><Link href="/treatments">Treatments</Link><Link href="/providers">Providers</Link></div>
        <div><strong>Trust</strong><Link href="/journey">Patient journey</Link><Link href="/privacy">Privacy</Link><Link href="/medical-disclaimer">Medical disclaimer</Link><Link href="/contact">Contact</Link></div>
      </div>
      <div className="shell footerBottom">
        <span>© {new Date().getFullYear()} TenaBridge · Medical coordination, not diagnosis.</span>
        <span>Developed by <a className="hisabCredit" href="https://hisabtechnologies.com" target="_blank" rel="noopener noreferrer">HisabTech ↗</a></span>
      </div>
    </footer>
  )
}

export function QuickContact() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const href = whatsapp ? `https://wa.me/${whatsapp.replace(/\D/g, '')}` : '/contact'
  return <a className="quickContact" href={href} target={whatsapp ? '_blank' : undefined} rel={whatsapp ? 'noopener noreferrer' : undefined} aria-label={whatsapp ? 'Chat on WhatsApp' : 'Contact TenaBridge'}><span aria-hidden="true">{whatsapp ? '✆' : '+'}</span><b>{whatsapp ? 'WhatsApp' : 'Consult'}</b></a>
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const hasChoice = document.cookie.split('; ').some(c => c.startsWith('tenabridge_cookie_consent='))
    if (!hasChoice) setVisible(true)
  }, [])

  function save(value: 'accepted' | 'essential') {
    document.cookie = `tenabridge_cookie_consent=${value}; Max-Age=31536000; Path=/; SameSite=Lax`
    setVisible(false)
  }

  if (!visible) return null
  return (
    <div className="cookieBar" role="dialog" aria-label="Cookie preferences" aria-live="polite">
      <div><strong>Cookie preferences</strong><p>We use a small preference cookie to remember your choice. No advertising trackers are enabled.</p></div>
      <div className="cookieActions"><Link href="/privacy" className="textLink">Privacy</Link><button className="button buttonGhost cookieGhost" onClick={() => save('essential')}>Essential only</button><button className="button buttonBlue" onClick={() => save('accepted')}>Accept</button></div>
    </div>
  )
}
