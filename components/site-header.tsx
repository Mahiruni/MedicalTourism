'use client';
import Link from 'next/link';
import { useState } from 'react';
const links=[['Care in Ethiopia','/inbound'],['Care Abroad','/outbound'],['Treatments','/treatments'],['How it works','/journey'],['About','/about']];
export function SiteHeader(){const[open,setOpen]=useState(false);return <header className="siteHeader"><div className="shell navShell"><Link className="brand" href="/"><span className="brandMark" aria-hidden="true"><i/><i/></span><span>TenaBridge</span></Link><button className="menuButton" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">Menu</button><nav className={open?'nav open':'nav'}>{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}</nav><Link className="button buttonSmall desktopCta" href="/contact">Free consultation</Link></div></header>}
