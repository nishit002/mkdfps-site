# MKD Field Public School — Website

Static prototype of the MKD Field Public School website (Shahdara, Delhi).
Playgroup, Nursery, and Classes 1–8.

**Live site:** https://nishit002.github.io/mkdfps-site/

## Stack

- React 18 + Babel Standalone (CDN, no build step)
- Vanilla CSS design system (`styles.css`)
- Single-page app with in-app router (Home / About / Programs / Facilities / Gallery / Parents / Contact)

## Pages & features

- Animated hero with floating "CCTV Secured" / "Play & Nursery" cards
- Marquee strip
- Why-parents-love-us highlights
- Featured Playgroup + Nursery program cards
- About, full Programs ladder (LKG–Class 8), Facilities & Safety
- Gallery with keyboard-navigable lightbox (← / → / Esc)
- Testimonial slider (auto-plays, pauses on hover)
- Validated admission enquiry form + 4-step admission flow
- Contact cards (address / phone / WhatsApp / email / hours) + map block

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Files

- `index.html` — entry; loads fonts, CSS, scripts; contains keyframes + responsive overrides
- `styles.css` — design system (colors, type, cards, buttons, blobs, reveal animations)
- `data.js` — all site content (brand, nav, copy, photo URLs)
- `components.jsx` — shared atoms (Reveal, Ph, Logo, Head, Badge, Wave)
- `home.jsx` — Hero / Marquee / Highlights / ProgramsTeaser / AdmissionBand
- `pages.jsx` — About / Programs / Facilities
- `pages2.jsx` — Gallery (+ lightbox) / Testimonials (+ slider)
- `contact.jsx` — Admission steps / validated form / contact cards / map
- `app.jsx` — Nav / Footer / Router

To update content (school name, address, phone, photos), edit `data.js`.
