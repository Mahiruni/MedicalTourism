# TenaBridge — Next.js Medical Tourism Website

Modern Next.js App Router website for an Ethiopian inbound + outbound medical tourism company.

## Stack
- Next.js 16.2.11
- React 19
- TypeScript
- App Router
- Custom CSS + inline SVG graphics

## Implemented must-haves
1. Clear inbound vs outbound medical-travel paths
2. Medical specialty cards with expressive SVG icons
3. Destination cards with country flags
4. Provider verification / Hospitals & Doctors route
5. Five-step patient journey route
6. Transparent cost and quote-scope messaging
7. Concise consultation form + optional WhatsApp quick contact
8. Cookie consent + Privacy Policy
9. Accessibility focus states + Medical Disclaimer / emergency messaging
10. SEO metadata, robots, web manifest + HisabTech developer attribution

## Routes
- `/` — homepage
- `/inbound` — care in Ethiopia
- `/outbound` — care abroad + destination flags
- `/treatments` — specialties + medical icons
- `/journey` — five-step patient journey
- `/providers` — hospital/doctor verification approach
- `/about` — company positioning + HisabTech credit
- `/contact` — concise consultation form
- `/privacy` — privacy/cookie policy
- `/medical-disclaimer` — medical and emergency disclaimer

## Environment variables
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
NEXT_PUBLIC_WHATSAPP_NUMBER=251XXXXXXXXX
```
`NEXT_PUBLIC_WHATSAPP_NUMBER` is optional. If omitted, the floating quick-contact button links to `/contact` instead.

## Run
```bash
npm install
npm run dev
```

## Production notes
- Connect the consultation form to a secure CRM or healthcare-appropriate intake backend.
- Do not collect clinical records through the public contact form.
- Replace placeholder legal/entity details before launch.
- Only publish hospitals, clinicians, certifications, patient outcomes or medical prices after verification and consent.
- Add optional analytics only after updating cookie controls and privacy disclosures as required.

## Development credit
Developed by **HisabTech** — https://hisabtechnologies.com
