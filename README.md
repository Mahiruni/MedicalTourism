# TenaBridge Medical Tourism — Next.js

A modern Next.js App Router website for an Ethiopian medical tourism company supporting both **inbound care in Ethiopia** and **outbound treatment abroad**.

## Stack

- Next.js 16
- React 19
- TypeScript
- App Router
- Custom responsive CSS
- Lightweight inline SVG graphics

## Routes

- `/` — homepage
- `/inbound` — care in Ethiopia
- `/outbound` — treatment abroad
- `/treatments` — treatment pathways
- `/journey` — patient journey
- `/about` — company positioning
- `/contact` — consultation form
- `/privacy` — privacy and cookie policy

## Design direction

The previous emerald/gold static site has been replaced with a cleaner visual system using midnight navy, periwinkle blue, coral and cool white. Typography, paragraph length and navigation copy have all been reduced for a more modern, premium feel.

## Cookies

The site shows a consent banner on first visit. The visitor can choose **Essential only** or **Accept**. The preference is stored locally and in the `tenabridge_consent` cookie for up to one year.

No optional analytics script is currently installed.

## Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm start
```

## Before production launch

- Connect the consultation form to a secure CRM or patient-intake backend.
- Do not collect sensitive medical files through the public form.
- Replace placeholder legal/privacy contact details with the verified company information.
- Publish hospital partnerships, doctors, outcomes, certifications and prices only after verification.
- Review the Privacy page against the company’s real vendors, retention practices and applicable laws.
