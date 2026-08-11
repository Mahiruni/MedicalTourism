import type { SVGProps } from 'react'

export type MedicalIconName =
  | 'cardiology'
  | 'oncology'
  | 'orthopedics'
  | 'fertility'
  | 'eye'
  | 'diagnostics'
  | 'neurology'
  | 'dental'
  | 'hospital'
  | 'shield'
  | 'plane'
  | 'passport'
  | 'language'
  | 'recovery'
  | 'doctor'

export function MedicalIcon({ name, ...props }: { name: MedicalIconName } & SVGProps<SVGSVGElement>) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    ...props,
  }

  switch (name) {
    case 'cardiology':
      return <svg {...common}><path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 1 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z"/><path d="M6.5 12h2l1.2-2.5 2.2 5 1.5-3H17"/></svg>
    case 'oncology':
      return <svg {...common}><path d="M12 3c-1.7 2.1-2.7 4.2-2.7 6.2 0 1.7.7 3.1 2.1 4.2"/><path d="M12 3c1.7 2.1 2.7 4.2 2.7 6.2 0 1.7-.7 3.1-2.1 4.2"/><path d="M8.1 7.2c-1.9.6-3.3 2-3.7 3.7-.5 2.2.9 4.5 3.5 5.7"/><path d="M15.9 7.2c1.9.6 3.3 2 3.7 3.7.5 2.2-.9 4.5-3.5 5.7"/><path d="M8 16.6 6.8 21M16 16.6l1.2 4.4"/></svg>
    case 'orthopedics':
      return <svg {...common}><path d="M8.3 5.1a2.7 2.7 0 1 0-3.8 3.8l1.6 1.6 7.4 7.4 1.6 1.6a2.7 2.7 0 1 0 3.8-3.8l-1.6-1.6-7.4-7.4-1.6-1.6Z"/><path d="m8.7 9.3 6 6"/></svg>
    case 'fertility':
      return <svg {...common}><circle cx="12" cy="8" r="4"/><path d="M12 12v9M8.5 17h7"/><path d="M9.5 4.6 7.8 3M14.5 4.6 16.2 3"/></svg>
    case 'eye':
      return <svg {...common}><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/></svg>
    case 'diagnostics':
      return <svg {...common}><path d="M5 3h8v4H5zM7 7v10a4 4 0 0 0 8 0V9"/><path d="M15 9h4v5a3 3 0 0 1-3 3h-1"/><circle cx="10.5" cy="17" r="1.5"/></svg>
    case 'neurology':
      return <svg {...common}><path d="M9.5 4.2A3.6 3.6 0 0 0 5 7.7c0 .6.2 1.2.5 1.7A3.6 3.6 0 0 0 6.7 16c.2 2.2 2 4 4.3 4V4.6a3 3 0 0 0-1.5-.4Z"/><path d="M14.5 4.2A3.6 3.6 0 0 1 19 7.7c0 .6-.2 1.2-.5 1.7a3.6 3.6 0 0 1-1.2 6.6c-.2 2.2-2 4-4.3 4V4.6a3 3 0 0 1 1.5-.4Z"/><path d="M8 10h3M13 13h3M8 16h3"/></svg>
    case 'dental':
      return <svg {...common}><path d="M8.2 3.5c1.3 0 2.1.6 3.8.6s2.5-.6 3.8-.6c2.8 0 4.7 2.4 4.2 5.6-.5 3-1.9 4.4-2.5 7.9-.4 2.4-1.1 4-2.3 4-1.7 0-1.4-5.7-3.2-5.7S10.5 21 8.8 21c-1.2 0-1.9-1.6-2.3-4-.6-3.5-2-4.9-2.5-7.9-.5-3.2 1.4-5.6 4.2-5.6Z"/></svg>
    case 'hospital':
      return <svg {...common}><path d="M4 21V5h10v16M14 9h6v12M8 8h2M8 12h2M8 16h2M17 13h1M17 17h1"/><path d="M7 5V3h4v2M7 21v-3h4v3"/></svg>
    case 'shield':
      return <svg {...common}><path d="M12 22s8-3.7 8-10V5l-8-3-8 3v7c0 6.3 8 10 8 10Z"/><path d="m8.8 12 2.1 2.1 4.5-4.5"/></svg>
    case 'plane':
      return <svg {...common}><path d="m2 16 20-8-8 8-2 6-2-5-8-1Z"/><path d="m10 17 4-1"/></svg>
    case 'passport':
      return <svg {...common}><rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M9.2 10h5.6M12 7v6M8 16h8"/></svg>
    case 'language':
      return <svg {...common}><path d="M4 5h10M9 3v2c0 4-2.2 7.3-5 9"/><path d="M6 9c1.2 2 3.1 3.8 5 5M14 12h6M17 10v2c0 3.5-1.5 6.7-4 9M17 12c.7 3.2 2 6.1 4 9"/></svg>
    case 'recovery':
      return <svg {...common}><path d="M4 17c4-7 8-9 16-10-1 8-5 12-12 12"/><path d="M4 21c3-5 7-8 12-10"/></svg>
    case 'doctor':
      return <svg {...common}><circle cx="12" cy="7" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7M12 17v4M10 19h4"/></svg>
  }
}
