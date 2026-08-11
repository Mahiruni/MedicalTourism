import Link from 'next/link'
import { PathGraphic } from '@/components/Graphics'
import { MedicalIcon } from '@/components/MedicalIcon'

export const metadata = { title: 'Care in Ethiopia', description: 'Medical travel coordination for international patients seeking suitable care in Ethiopia.' }
export default function Inbound() { return <main id="main-content">
  <section className="pageHero"><div className="shell pageHeroGrid"><div><span className="eyebrow">Inbound care · 🇪🇹 Ethiopia</span><h1>Arrive with the plan already clear.</h1><p>Provider coordination, arrival and recovery logistics around your treatment.</p><Link className="button buttonBlue" href="/contact">Plan my visit</Link></div><div className="graphicPanel"><PathGraphic mode="inbound" /></div></div></section>
  <section className="section"><div className="shell threeGrid"><div className="simpleCard iconSimpleCard"><MedicalIcon name="doctor"/><h3>Clinical match</h3><p>Need before destination.</p></div><div className="simpleCard iconSimpleCard"><MedicalIcon name="plane"/><h3>Arrival plan</h3><p>Pickup, stay and timing.</p></div><div className="simpleCard iconSimpleCard"><MedicalIcon name="recovery"/><h3>Recovery</h3><p>Follow-up before home.</p></div></div></section>
  <section className="section paleSection"><div className="shell twoCol"><div><span className="eyebrow">Why Ethiopia</span><h2>Regional care with local support.</h2></div><div className="shortList"><p><b>Regional access</b><span>Useful for East Africa and nearby markets.</span></p><p><b>Value-aware planning</b><span>Compare care and logistics separately.</span></p><p><b>Hospitality support</b><span>Language, companion and practical help.</span></p></div></div></section>
  <section className="section"><div className="shell ctaCard"><div><span className="eyebrow">Come to Ethiopia</span><h2>Start with your medical need.</h2></div><Link className="button buttonBlue" href="/contact">Free consultation →</Link></div></section>
</main> }
