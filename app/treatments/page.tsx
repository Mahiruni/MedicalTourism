import Link from 'next/link'
import { MedicalIcon, type MedicalIconName } from '@/components/MedicalIcon'

export const metadata = { title: 'Treatments', description: 'Explore common medical travel specialties coordinated through TenaBridge.' }
const items: {name:string;desc:string;icon:MedicalIconName;route:string}[] = [
  {name:'Cardiology',desc:'Diagnostics, intervention and surgery.',icon:'cardiology',route:'Inbound + outbound'},
  {name:'Oncology',desc:'Case review and multidisciplinary options.',icon:'oncology',route:'Mostly outbound'},
  {name:'Orthopedics',desc:'Joint, spine and rehabilitation.',icon:'orthopedics',route:'Inbound + outbound'},
  {name:'Fertility',desc:'Reproductive health coordination.',icon:'fertility',route:'Case-specific'},
  {name:'Eye care',desc:'Ophthalmology and surgical pathways.',icon:'eye',route:'Inbound + outbound'},
  {name:'Diagnostics',desc:'Imaging, laboratory and specialist review.',icon:'diagnostics',route:'Inbound + outbound'},
  {name:'Neurology',desc:'Neurology and neurosurgical review.',icon:'neurology',route:'Mostly outbound'},
  {name:'Dental',desc:'Restorative and surgical dental care.',icon:'dental',route:'Inbound option'},
]
export default function Treatments(){return <main id="main-content"><section className="pageHero shortHero"><div className="shell"><span className="eyebrow">Treatments</span><h1>Start with the specialty.</h1><p>Travel planning comes after the clinical need is understood.</p></div></section><section className="section"><div className="shell treatmentIconList">{items.map((item,i)=><Link href="/contact" key={item.name}><span className="treatmentListIcon"><MedicalIcon name={item.icon}/></span><div><span className="routeTag">{item.route}</span><h3>{item.name}</h3><p>{item.desc}</p></div><b>↗</b><small>{String(i+1).padStart(2,'0')}</small></Link>)}</div></section><section className="section paleSection"><div className="shell safetyGrid"><MedicalIcon name="shield"/><div><strong>Not sure which specialty fits?</strong><p>A coordinator can help frame the case, but diagnosis and treatment decisions remain with licensed clinicians.</p></div><Link href="/contact">Ask a coordinator →</Link></div></section></main>}
