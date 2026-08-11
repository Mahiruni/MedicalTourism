import Link from 'next/link'
import { PathGraphic } from '@/components/Graphics'
import { MedicalIcon } from '@/components/MedicalIcon'

export const metadata = { title: 'Care Abroad', description: 'Medical travel coordination from Ethiopia to India, Türkiye, Thailand, Germany and other suitable destinations.' }

const countries = [
  {flag:'🇮🇳',code:'IN',name:'India',note:'Broad tertiary-care depth',best:'Cardiac · oncology · orthopedics'},
  {flag:'🇹🇷',code:'TR',name:'Türkiye',note:'Strong regional access',best:'Surgery · oncology · diagnostics'},
  {flag:'🇹🇭',code:'TH',name:'Thailand',note:'International patient programs',best:'Complex care · rehab · checkups'},
  {flag:'🇩🇪',code:'DE',name:'Germany',note:'Advanced specialist care',best:'Diagnostics · complex surgery'},
]

export default function Outbound() { return <main id="main-content">
  <section className="pageHero"><div className="shell pageHeroGrid"><div><span className="eyebrow coralEyebrow">Outbound care</span><h1>Go abroad with fewer unknowns.</h1><p>Clinical review first. Destination second.</p><Link className="button buttonBlue" href="/contact">Review my case</Link></div><div className="graphicPanel warmPanel"><PathGraphic mode="outbound" /></div></div></section>
  <section className="section"><div className="shell"><div className="splitHeader"><div><span className="eyebrow">Destinations</span><h2>Common care hubs.</h2></div><p>Final choice depends on your exact case.</p></div><div className="destinationGrid detailedDestinations">{countries.map(c=><article key={c.code}><div className="countryFlagRow"><span className="flagEmoji">{c.flag}</span><span className="countryCode">{c.code}</span></div><h3>{c.name}</h3><p>{c.note}</p><small>{c.best}</small></article>)}</div></div></section>
  <section className="section paleSection"><div className="shell twoCol"><div><span className="eyebrow">How we choose</span><h2>Fit before fame.</h2></div><div className="shortList"><p><b><MedicalIcon name="doctor"/> Clinical capability</b><span>Can the team manage this exact need?</span></p><p><b><MedicalIcon name="hospital"/> Provider quality</b><span>Credentials, facility and experience.</span></p><p><b><MedicalIcon name="plane"/> Total journey</b><span>Care, travel, recovery and follow-up.</span></p></div></div></section>
  <section className="section"><div className="shell ctaCard"><div><span className="eyebrow">Need a comparison?</span><h2>We can frame the right questions.</h2></div><Link className="button buttonBlue" href="/contact">Start case review →</Link></div></section>
</main> }
