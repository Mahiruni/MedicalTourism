# TenaBridge Medical Tourism Website

A premium, static, multi-page medical tourism website designed for an Ethiopian company serving **inbound** and **outbound** patients.

## Pages
- `index.html` — dual-path homepage
- `inbound.html` — international patients coming to Ethiopia
- `outbound.html` — Ethiopian/regional patients travelling abroad
- `treatments.html` — specialties
- `journey.html` — interactive patient journey
- `hospitals.html` — verification-first hospitals/doctors system
- `stories.html` — responsible testimonial framework
- `about.html` — mission/team placeholders
- `contact.html` — multi-step consultation form
- `resources.html` — SEO/resource hub

## Production configuration
1. In `app.js`, set `CONFIG.whatsappNumber` to the verified company WhatsApp number using international digits only.
2. Replace `consultationEmail` with the real business email.
3. Connect the consultation form to a secure backend/CRM. Do **not** send sensitive medical records through ordinary email.
4. Replace all demo/placeholder doctor, hospital, partnership, certification and testimonial content only with verified, consented information.
5. Replace remote prototype photography with licensed production assets. The current images are layout/prototype references.
6. Add a privacy policy, cookie policy, patient consent terms, data-retention policy and jurisdiction-specific medical-tourism disclosures before production.

## Local preview
Any static web server works, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment
This project is static and deploys directly to Vercel, Netlify, Cloudflare Pages or GitHub Pages without a build step.
