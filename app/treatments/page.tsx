import { PageHero } from '@/components/page-hero';
export const metadata={title:'Treatments'};
const items=['Cardiology','Oncology','Orthopedics & spine','Neurology','Fertility & women’s health','Dental care','Eye care','Diagnostics'];
export default function Treatments(){return <><PageHero eyebrow="Treatments" title="Start with the clinical need." text="Destination comes after the case. We help organize the information needed for provider review."/><section className="section"><div className="shell treatmentList">{items.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><h2>{x}</h2><p>Case-specific review and coordination.</p></div>)}</div></section></>}
