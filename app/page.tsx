import Link from 'next/link'
import { CareOrbitGraphic, NetworkGraphic, PathGraphic, VerificationGraphic } from '@/components/Graphics'
import { MedicalIcon, type MedicalIconName } from '@/components/MedicalIcon'

const treatments: {name:string; icon:MedicalIconName; note:string}[] = [
  {name:'Cardiology',icon:'cardiology',note:'Heart & vascular'},
  {name:'Oncology',icon:'oncology',note:'Cancer care'},
  {name:'Orthopedics',icon:'orthopedics',note:'Joint & spine'},
  {name:'Fertility',icon:'fertility',note:'Reproductive care'},
  {name:'Eye care',icon:'eye',note:'Ophthalmology'},
  {name:'Diagnostics',icon:'diagnostics',note:'Imaging & labs'},
]

const destinations = [
  ['🇪🇹','Ethiopia','Inbound care'],['🇮🇳','India','Advanced care'],['🇹🇷','Türkiye','Regional hub'],['🇹🇭','Thailand','International care'],['🇩🇪','Germany','Complex care']
]

export default function Home() {
  return <main id="main-content">
    <section className="heroSection"><div className="shell heroGrid"><div className="heroCopy"><span className="eyebrow">Medical travel · Ethiopia ↔ world</span><h1>Cross-border care, made simpler.</h1><p>One team for provider coordination, travel and practical support.</p><div className="heroActions"><Link className="button buttonBlue" href="/inbound">Care in Ethiopia</Link><Link className="button buttonSoft" href="/outbound">Care abroad</Link></div><div className="microTrust"><span>Case-led</span><i/><span>Verification-first</span><i/><span>Privacy-aware</span></div></div><CareOrbitGraphic /></div></section>

    <section className="trustRibbon"><div className="shell trustRibbonGrid"><span><MedicalIcon name="shield"/>Verify before travel</span><span><MedicalIcon name="hospital"/>Provider-led quotes</span><span><MedicalIcon name="language"/>Multilingual support</span><span><MedicalIcon name="recovery"/>Follow-up planning</span></div></section>

    <section className="section compactSection"><div className="shell splitHeader"><div><span className="eyebrow">Two directions</span><h2>Choose your path.</h2></div><p>Same standard. Different journey.</p></div><div className="shell routeGrid"><article className="routeCard routeLight"><div><span className="cardLabel">Inbound</span><h3>Ethiopia for care.</h3><p>Clinical match, arrival and recovery.</p><Link href="/inbound">Explore →</Link></div><PathGraphic mode="inbound" /></article><article className="routeCard routeDark"><div><span className="cardLabel">Outbound</span><h3>Care beyond borders.</h3><p>Review, hospital matching and travel.</p><Link href="/outbound">Explore →</Link></div><PathGraphic mode="outbound" /></article></div></section>

    <section className="section"><div className="shell"><div className="splitHeader"><div><span className="eyebrow">Specialties</span><h2>Start with the medical need.</h2></div><Link className="textLink" href="/treatments">All treatments →</Link></div><div className="medicalIconGrid">{treatments.map(t=><Link href="/contact" className="medicalIconCard" key={t.name}><span className="medicalIconWrap"><MedicalIcon name={t.icon}/></span><div><strong>{t.name}</strong><small>{t.note}</small></div><b>↗</b></Link>)}</div></div></section>

    <section className="section destinationSection"><div className="shell"><div className="splitHeader"><div><span className="eyebrow">Destinations</span><h2>Country options at a glance.</h2></div><Link className="textLink" href="/outbound">Compare destinations →</Link></div><div className="flagGrid">{destinations.map(([flag,country,note])=><div className="flagCard" key={country}><span className="flagEmoji" aria-hidden="true">{flag}</span><div><strong>{country}</strong><small>{note}</small></div></div>)}</div></div></section>

    <section className="section verificationSection"><div className="shell verificationGrid"><VerificationGraphic/><div><span className="eyebrow">Trust before travel</span><h2>Verify the provider, not the marketing.</h2><p>Licensing, specialty fit, hospital affiliation and quote scope should be checked before a patient commits.</p><div className="compactChecks"><span>✓ Credentials</span><span>✓ Clinical fit</span><span>✓ Quote scope</span><span>✓ Follow-up plan</span></div><Link className="button buttonDark" href="/providers">How we verify →</Link></div></div></section>

    <section className="section networkSection"><div className="shell networkGrid"><NetworkGraphic /><div><span className="eyebrow lightEyebrow">Patient journey</span><h2>Five steps. One case.</h2><p>Intake, review, plan, treatment and follow-up stay connected.</p><Link className="button buttonWhite" href="/journey">See the journey →</Link></div></div></section>

    <section className="section"><div className="shell valueGrid"><div className="valueIntro"><span className="eyebrow">Cost clarity</span><h2>No guessed medical prices.</h2><p>Provider estimates should follow medical review.</p></div><div className="miniCards"><div><b>01</b><strong>Medical estimate</strong><span>Provider-issued after review.</span></div><div><b>02</b><strong>Quote scope</strong><span>Inclusions and exclusions clear.</span></div><div><b>03</b><strong>Travel budget</strong><span>Stay, transport and visa separated.</span></div><div><b>04</b><strong>Follow-up</strong><span>Recovery needs planned early.</span></div></div></div></section>

    <section className="section safetyStrip"><div className="shell safetyGrid"><MedicalIcon name="shield"/><div><strong>Medical safety note</strong><p>TenaBridge coordinates travel and care pathways. It does not diagnose, prescribe or replace a licensed clinician.</p></div><Link href="/medical-disclaimer">Read disclaimer →</Link></div></section>

    <section className="section finalCta"><div className="shell ctaCard"><div><span className="eyebrow">Start small</span><h2>Tell us where you are and what care you need.</h2></div><Link className="button buttonBlue" href="/contact">Free consultation →</Link></div></section>
  </main>
}
