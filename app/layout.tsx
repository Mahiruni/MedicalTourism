import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Manrope } from 'next/font/google'
import './globals.css'
import { CookieConsent, Footer, Header, QuickContact } from '@/components/SiteChrome'

const manrope = Manrope({ subsets: ['latin'], display: 'swap' })
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: 'TenaBridge | Medical travel, made clear', template: '%s | TenaBridge' },
  description: 'Medical travel coordination for patients coming to Ethiopia and patients travelling abroad for care.',
  keywords: ['medical tourism Ethiopia', 'medical travel Ethiopia', 'treatment abroad Ethiopia', 'healthcare travel Ethiopia'],
  applicationName: 'TenaBridge',
  category: 'healthcare',
  alternates: siteUrl ? { canonical: '/' } : undefined,
  openGraph: {
    title: 'TenaBridge | Medical travel, made clear',
    description: 'Medical travel coordination between Ethiopia and global care pathways.',
    type: 'website',
    siteName: 'TenaBridge',
  },
  twitter: { card: 'summary', title: 'TenaBridge', description: 'Medical travel, made clear.' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body className={manrope.className}><Header />{children}<Footer /><QuickContact /><CookieConsent /></body></html>
}
