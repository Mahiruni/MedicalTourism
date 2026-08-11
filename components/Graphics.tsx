export function CareOrbitGraphic() {
  return (
    <div className="heroGraphic" aria-hidden="true">
      <svg viewBox="0 0 620 520" role="presentation">
        <defs>
          <linearGradient id="pulse" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#4f6cff"/><stop offset="1" stopColor="#8ee8e4"/></linearGradient>
          <linearGradient id="warm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ff8f7d"/><stop offset="1" stopColor="#ffd7c8"/></linearGradient>
        </defs>
        <circle cx="310" cy="260" r="200" fill="#f6f8ff" />
        <circle cx="310" cy="260" r="152" fill="none" stroke="#dce3ff" strokeWidth="1.5" strokeDasharray="7 9" />
        <circle cx="310" cy="260" r="100" fill="none" stroke="#cbd5ff" strokeWidth="1.5" />
        <path d="M145 338C211 246 297 222 459 158" fill="none" stroke="url(#pulse)" strokeWidth="8" strokeLinecap="round" />
        <path d="M175 175C258 211 343 329 470 355" fill="none" stroke="url(#warm)" strokeWidth="5" strokeLinecap="round" strokeDasharray="4 12" />
        <g fill="#fff" stroke="#4f6cff" strokeWidth="3"><circle cx="150" cy="335" r="21"/><circle cx="458" cy="159" r="21"/><circle cx="310" cy="260" r="35"/></g>
        <g fill="#ff8f7d"><circle cx="175" cy="175" r="13"/><circle cx="470" cy="355" r="13"/></g>
        <rect x="273" y="223" width="74" height="74" rx="24" fill="#0d1730" />
        <path d="M310 240v40M290 260h40" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
        <g fill="#0d1730" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700"><text x="109" y="377">Ethiopia</text><text x="438" y="202">Global care</text></g>
      </svg>
      <div className="graphicBadge graphicBadgeTop">Clinical review</div>
      <div className="graphicBadge graphicBadgeBottom">Travel + care</div>
    </div>
  )
}

export function PathGraphic({ mode }: { mode: 'inbound' | 'outbound' }) {
  const outbound = mode === 'outbound'
  return <div className={`pathGraphic ${outbound ? 'outboundGraphic' : ''}`} aria-hidden="true">
    <div className="pathPoint"><span>01</span><strong>{outbound ? 'Review' : 'Plan'}</strong></div><div className="pathLine"><i /></div>
    <div className="pathPoint featured"><span>02</span><strong>{outbound ? 'Match' : 'Arrive'}</strong></div><div className="pathLine"><i /></div>
    <div className="pathPoint"><span>03</span><strong>{outbound ? 'Travel' : 'Recover'}</strong></div>
  </div>
}

export function NetworkGraphic() {
  return <svg className="networkGraphic" viewBox="0 0 580 360" aria-hidden="true">
    <rect x="0" y="0" width="580" height="360" rx="36" fill="#0d1730" />
    <g stroke="#2b3d68" strokeWidth="1.5"><path d="M80 90L235 182L465 92"/><path d="M235 182L445 280"/><path d="M235 182L90 278"/><path d="M465 92L445 280"/></g>
    <g fill="#4f6cff"><circle cx="80" cy="90" r="18"/><circle cx="465" cy="92" r="18"/></g><g fill="#ff8f7d"><circle cx="90" cy="278" r="14"/><circle cx="445" cy="280" r="14"/></g>
    <circle cx="235" cy="182" r="42" fill="#fff"/><path d="M235 162v40M215 182h40" stroke="#0d1730" strokeWidth="8" strokeLinecap="round" />
    <g fill="#fff" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700"><text x="53" y="124">Patient</text><text x="436" y="126">Hospital</text><text x="56" y="313">Travel</text><text x="417" y="315">Follow-up</text></g>
  </svg>
}

export function VerificationGraphic() {
  return <svg className="verificationGraphic" viewBox="0 0 520 340" aria-hidden="true">
    <rect width="520" height="340" rx="30" fill="#f1f4ff"/>
    <circle cx="260" cy="170" r="92" fill="#fff" stroke="#dce3ff" strokeWidth="2"/>
    <path d="M260 105 316 126v48c0 45-56 68-56 68s-56-23-56-68v-48l56-21Z" fill="#4f6cff"/>
    <path d="m232 170 18 18 39-43" fill="none" stroke="#fff" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round"/>
    <g fill="#0d1730" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700"><text x="55" y="72">License</text><text x="415" y="78">Specialty</text><text x="55" y="283">Hospital</text><text x="405" y="284">Quote scope</text></g>
    <g fill="#ff8f7d"><circle cx="72" cy="94" r="7"/><circle cx="440" cy="100" r="7"/><circle cx="73" cy="255" r="7"/><circle cx="440" cy="255" r="7"/></g>
    <g stroke="#bdc9f5" strokeWidth="1.5"><path d="M78 96 197 142"/><path d="M433 102 323 142"/><path d="M80 251 198 199"/><path d="M433 252 322 200"/></g>
  </svg>
}
