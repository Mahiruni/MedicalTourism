import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { CookieBanner } from '@/components/cookie-banner';

export const metadata: Metadata = { title: { default: 'TenaBridge | Medical Travel, Made Clear', template: '%s | TenaBridge' }, description: 'Modern medical travel coordination for care in Ethiopia and trusted treatment journeys abroad.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader/><main>{children}</main><SiteFooter/><CookieBanner/></body></html>;
}
