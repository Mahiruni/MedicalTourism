import Link from 'next/link'
import { MedicalIcon, type MedicalIconName } from '@/components/MedicalIcon'
export const metadata = { title: 'Patient Journey', description: 'A clear five-step medical travel journey from intake to follow-up.' }
const steps:{n:string;title:string;copy:string;icon:MedicalIconName}[]=[
  {n:'01',title:'Share the case',copy:'Basic need, reports and goals.',icon:'diagnostics'},
  {n:'02',title:'Clinical review',copy:'Provider fit and open questions.',icon:'doctor'},
  {n:'03',title:'Plan the trip',copy:'Dates, visa, stay and transport.',icon:'passport'},
  {n:'04',title:'Receive care',copy:'On-ground coordination.',icon:'hospital'},
  {n:'05',title:'Follow up',copy:'Discharge, recovery and handover.',icon:'recovery'},
]
export default function Journey(){return <main id="main-content"><section className="pageHero shortHero"><div className="shell"><span className="eyebrow">Patient journey</span><h1>Five steps. One connected case.</h1><p>Each handoff should be documented before the next begins.</p></div></section><section className="section"><div className="shell journeyTimeline">{steps.map(s=><article key={s.n}><span className="journeyNumber">{s.n}</span><span className="journeyIcon"><MedicalIcon name={s.icon}/></span><div><h2>{s.title}</h2><p>{s.copy}</p></div></article>)}</div></section><section className="section paleSection"><div className="shell ctaCard"><div><span className="eyebrow">Step one</span><h2>Begin with a short consultation.</h2></div><Link className="button buttonBlue" href="/contact">Start →</Link></div></section></main>}
