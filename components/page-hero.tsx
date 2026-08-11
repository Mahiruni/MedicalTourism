import Link from 'next/link';
type Props={eyebrow:string;title:string;text:string;};
export function PageHero({eyebrow,title,text}:Props){return <section className="pageHero"><div className="shell pageHeroGrid"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p><Link className="button" href="/contact">Start a consultation</Link></div><div className="miniGraphic"><div className="plusGraphic"><span>+</span></div></div></div></section>}
