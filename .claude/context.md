# Context - Havun Website

> Bedrijfswebsite met portfolio  
> **Index bijgewerkt:** scan codebase (structuur geverifieerd)

## Tech Stack

- **Framework:** Next.js 16 + React 19
- **Styling:** Tailwind CSS
- **TypeScript:** Ja
- **PM2 process:** havun-website (poort 3003)

## Project Structuur (geverifieerd)

```
Havun/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout (Header, Footer, metadata, Geist fonts)
│   │   ├── page.tsx            # Homepage (/)
│   │   ├── globals.css         # Tailwind + CSS vars
│   │   ├── favicon.ico         # Favicon
│   │   ├── contact/page.tsx    # /contact
│   │   ├── portfolio/page.tsx  # /portfolio
│   │   └── services/page.tsx   # /services
│   └── components/
│       ├── Header.tsx          # Sticky nav (logo, nav links, mobile menu)
│       └── Footer.tsx          # Footer (logo, links, KVK/BTW)
├── public/
│   ├── logo.png, logo-512.png  # Havun logo
│   ├── globe.svg, next.svg, vercel.svg, file.svg, window.svg
│   └── portfolio/              # Portfolio afbeeldingen
│       ├── herdenkingsportaal.jpg, hplogo.png, judoscoreboard.png
│       ├── judotoernooi.png, safehavun.png, studieplanner.png, vpdupdate.png
├── .claude/
│   ├── context.md              # Deze file (structuur, deploy, troubleshoot)
│   ├── smallwork.md
│   └── commands/               # end.md, kb.md, start.md, update.md
├── next.config.ts
├── next-env.d.ts               # Next.js TypeScript declarations (auto)
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
├── package.json                # name: havun-site, next 16, react 19, tailwind 4
├── package-lock.json
└── README.md
```

*Niet in repo-index: tmpclaude-* (tijdelijk), node_modules, .next, .git.*

## Routes (actueel)

| Route       | Bestand                      |
|------------|------------------------------|
| /          | src/app/page.tsx             |
| /services  | src/app/services/page.tsx    |
| /portfolio | src/app/portfolio/page.tsx   |
| /contact   | src/app/contact/page.tsx     |

Navigatie: Header + Footer gebruiken dezelfde 4 links (Home, Diensten, Portfolio, Contact).

## Pagina toevoegen (template)

```
src/app/[slug]/page.tsx  → /[slug]
```

### Template
```tsx
export default function PaginaNaam() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">Titel</h1>
    </main>
  );
}
```

## Lokaal Ontwikkelen

```bash
cd D:\GitHub\Havun
npm run dev -- -p 3001   # http://localhost:3001
npm run build            # Build voor productie
npm run start        # Test productie build
```

## Deploy

```bash
ssh root@188.245.159.115 "cd /var/www/havun.nl && git pull && npm install && npm run build && pm2 restart havun-website"
```

## Server Info

- PM2 process: `havun-website`
- Poort: 3003
- Nginx: /etc/nginx/sites-enabled/havun.nl

## Troubleshooting

### Build errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Image cache wissen (na icon/afbeelding update)
```bash
ssh root@188.245.159.115 "cd /var/www/havun.nl && rm -rf .next/cache/images && pm2 restart havun-website"
```

### Server checken
```bash
ssh root@188.245.159.115 "pm2 status && pm2 logs havun-website --lines 10 --nostream"
```

## Laatste Sessie: 2026-06-10/11

### Wat is gedaan:
- SSL-blokkade op Henks werk-PC gediagnosticeerd: havun.nl + vpd.havun.nl geven
  ERR_CERT_AUTHORITY_INVALID op kantoor. Server-certs geverifieerd via SSH/openssl:
  beide geldige Let's Encrypt-certs (havun.nl tot 24-7, vpd.havun.nl tot 30-7-2026).
  Oorzaak = werknetwerk-proxy met SSL-inspectie (zelfde categorie als Avast thuis),
  NIET de server. havun.nl heeft HSTS → niet doorklikbaar.
- Geheugen-reference bijgewerkt met de werk-variant (werkproxy naast Avast).

### Use-case die hierachter zit (belangrijk voor evt. oplossing):
- Henk gebruikt vpd.havun.nl op zijn werk als BRON: hij leest daar de veranderde
  groothandels/VPD-prijzen en typt ze stuk-voor-stuk over in VIVA (veterinair
  praktijkprogramma op het werknetwerk). vpd.havun.nl (bron, extern, geblokkeerd) en
  VIVA (doel, intern) zijn TEGELIJK nodig → hele PC op hotspot zetten werkt slecht.

### Openstaande items:
- [ ] Henk koos nog niet: directe workaround (vpd.havun.nl op telefoon/4G naast de
      werk-PC) vs. structureel een export/printknop op vpd.havun.nl bouwen (thuis
      gewijzigde prijzen → PDF/lijst → op werk afvinken zonder vpd te openen).
- [ ] vpd-code staat NIET in deze repo (havun.nl) — locatie/aparte repo nog te vinden
      voordat een export-functie te bouwen is.
- [ ] SafeHavun Play Store-link activeren + app-icon (uit vorige sessie)
- [ ] `/card` visueel verbeteren + PNG-download op mobile testen (uit vorige sessie)

### Belangrijke context voor volgende keer:
- Cert-fouten bij Henk = ALTIJD eerst client-side onderschepping uitsluiten (Avast thuis,
  werkproxy op kantoor) vóór serverdebug. Check certs ALTIJD op de server, nooit lokaal.

## Laatste Sessie: 2026-05-30/31

### Wat is gedaan:
- Security: Next.js 16.0.10 → 16.2.6 (22+ CVE's opgelost), gedeployed
- judoscoreboard.havun.nl: volledige landingspagina gebouwd en live (statische HTML)
  - NL/EN taalswitch als dropdown met SVG-vlaggen (zelfde stijl als JudoToernooi)
  - Screenshot lightbox: klik op screenshot → popup met pijltjesnavigatie + keyboard (← → Esc)
  - Screenshots: /var/www/judoscoreboard/screenshots/ (01–07 .png)
  - Icon: /var/www/judoscoreboard/jsicon.png
  - Pagina: /var/www/judoscoreboard/index.html (standalone statische HTML, geen Next.js)
  - Screenshots map had fout permissie (744 → 755 gezet, nginx kon er niet in)
- judotournament.org: kleine JudoScoreBoard callout-balk toegevoegd na features grid
- havun.nl portfolio: CSS was weg door port 3003 conflict → fuser -k opgelost
- Portfolio assets opgeruimd: judotoernooi.jpg en studieplanner.svg verwijderd

### Openstaande items:
- [ ] Engelse screenshots JudoScoreBoard (app-UI is Nederlands) — Henk moet app in EN openen en screenshots maken als dit gewenst is

### Belangrijke context voor volgende keer:
- judoscoreboard.havun.nl = statische HTML in /var/www/judoscoreboard/ (NIET in git)
  - Wijzigingen direct via scp of Python op server
  - Taalswitch: JS-based, localStorage ('jsb-lang'), data-i18n attributen
  - Lightbox: alle .phone-frame img en .landscape-item img zijn klikbaar
- Nginx config: /etc/nginx/sites-enabled/judoscoreboard.havun.nl
- SSL cert geldig tot 25 juni 2026 (auto-renew)
- JudoScoreBoard screenshots lokaal: `d:/GitHub/JudoScoreBoard/screenshots/` (01–07 .png)
- App-icon lokaal: `d:/GitHub/JudoScoreBoard/assets/jsicon.png`
- Resterende npm vulnerabilities (2 moderate): PostCSS XSS in Next.js interne bundle — niet oplosbaar zonder downgrade naar Next.js v9
- PM2 restart loop fix: `fuser -k 3003/tcp` als port in use error optreedt
- PM2 draait via `ecosystem.config.js` in `/var/www/havun.nl/` met `PORT=3003`
- `npm run build` is verplicht bij elke deploy — zonder build laadt CSS niet (stale chunk hashes)

## Laatste Sessie: 2026-05-31

### Wat is gedaan:
- Digitaal visitekaartje toegevoegd op `/card` (havun.nl/card)
  - vCard download (Voeg toe aan contacten — werkt op iOS + Android)
  - QR-code naar havun.nl
  - PNG download via canvas
  - Link in footer toegevoegd
- Studieplanner.havun.nl layout fix: Tailwind CDN vervangen door Vite-bundle, unsafe-inline weg uit CSP
- SecurityHeadersTest uitgebreid met unsafe-inline check + nonce coverage
- PM2 ecosystem.config.js aangemaakt voor stabiele PORT=3003 configuratie
- CSS no-opmaak bug op mobile havun.nl opgelost: stale .next build → `npm run build` opnieuw uitgevoerd

### Openstaande items:
- [ ] /card pagina PNG download testen op mobile (SVG foreignObject methode werkt mogelijk niet overal)
- [ ] /card visueel verbeteren (Henk vond het "niet mooi") — nieuwe sessie nodig

### Belangrijke context voor volgende keer:
- `/card` pagina staat in `src/app/card/page.tsx`
- vCard downloadt als `havun.vcf`, contactgegevens zijn hardcoded in de component
- PNG download gebruikt SVG foreignObject → canvas, werkt niet in alle browsers (Safari beperkt)
- Betere optie voor PNG: `html2canvas` library installeren (vereist `npm install html2canvas`)

## Laatste Sessie: 2026-06-08/09

### Wat is gedaan:
- SafeHavun landingspagina gebouwd en live op safehavun.havun.nl
  - Hero, stats-balk, 5 feature-cards, screenshot-carousel, how-it-works, score-demo widget, CTA, footer
  - Screenshots geüpload: voorspelling/whales/sentiment/technisch/macro.jpg
  - Nginx config aangepast: `/` serveert landing.html, Laravel blijft bereikbaar via /login etc.
  - Play Store knoppen tijdelijk uitgeschakeld ("Binnenkort op Google Play") — app nog niet in store
  - Carousel met pijltjes ← →, dots-navigatie, klik-voor-lightbox, keyboard-support (←→ Esc)
- Pagina staat op: /var/www/safehavun/production/public/landing.html
- Lokale kopie: C:\Users\henkv\AppData\Local\Temp\safehavun_index.html

### Openstaande items:
- [ ] SafeHavun Play Store link activeren zodra app live is (3 plekken: nav-cta, hero-btn, cta-bottom)
- [ ] App-icon (safehavun) toevoegen aan landingspagina als die beschikbaar is
- [ ] `/card` pagina visueel verbeteren (uit vorige sessie)
- [ ] `/card` PNG-download testen op mobile

### Belangrijke context voor volgende keer:
- safehavun.havun.nl = Laravel-app + statische landingspagina
  - Landingspagina: /var/www/safehavun/production/public/landing.html (NIET in git)
  - Laravel-app draait op dezelfde server, bereikbaar via /login, /app etc.
  - Nginx: location = / serveert landing.html, rest gaat naar Laravel via index.php
- Play Store package-naam nog onbekend (placeholder: nl.havun.safehavun)
- Screenshots: /var/www/safehavun/production/public/screenshots/ (5 jpg's)
- Lightbox JS: goTo(idx) synct carousel + lightbox; keyboard ← → Esc werkt in beide

---

## Laatste Sessie: 2026-06-06

### Wat is gedaan:
- CTA-sectie verwijderd van judoscoreboard.havun.nl (`/var/www/judoscoreboard/index.html`)
  - `.cta-section` CSS regels verwijderd
  - `<section class="cta-section">` HTML-block verwijderd
  - NL + EN i18n-sleutels (`cta-title`, `cta-desc`, `cta-btn`) verwijderd
  - Reden: JudoScoreBoard is een gratis Play Store app, commerciële CTA niet passend

### Openstaande items:
- [ ] `/card` pagina visueel verbeteren (Henk vond het "niet mooi")
- [ ] `/card` PNG-download testen op mobile (SVG foreignObject werkt mogelijk niet in Safari)

### Belangrijke context voor volgende keer:
- judoscoreboard.havun.nl = statische HTML op server, GEEN git
- Wijzigingen via Python-script op server (direct via SSH)

---

## Laatste Sessie: 2026-06-05

### Wat is gedaan:
- SSL-diagnose: Henk kreeg "Privacyfout"/HSTS op havun.nl + vpd.havun.nl (telefoon),
  later ERR_CERT_AUTHORITY_INVALID op studieplanner.havun.nl.
- **Server-certs zijn 100% in orde** (3 onafhankelijke checks):
  - havun.nl, vpd.havun.nl, studieplanner.havun.nl: geldige Let's Encrypt-certs,
    complete chain (leaf → E8 → ISRG Root X1), alle VALID (havun/studieplanner tot 24-7,
    vpd tot 30-7-2026).
  - A- én AAAA-record wijzen voor alle subdomeinen naar dezelfde server
    (188.245.159.115 / 2a01:4f8:1c1a:457f::1) — geen split/verkeerde host.
  - SSL Labs grade **A+** voor studieplanner.havun.nl.
- **Oorzaak = client-side onderschepping**, NIET de server. Vanaf Henks/dev-machine
  vervangt Avast ("Avast Web/Mail Shield Root") het echte cert → exact ERR_CERT_AUTHORITY_INVALID.

### Belangrijke context voor volgende keer (SSL-fouten bij Henk):
- Bij cert-/privacyfouten op havun-domeinen EERST client uitsluiten vóór serverdebug:
  1. `certbot certificates` op server + `openssl s_client` op localhost → check issuer.
  2. Als issuer = Let's Encrypt = server OK. Als issuer = "Avast/AVG/bedrijfsnaam" lokaal
     = antivirus/netwerk-MITM (Henks machine heeft Avast SSL-scanning aan).
  3. Beslissende test voor Henk: wifi uit → 4G/5G → werkt = 100% netwerk/antivirus.
- LET OP eigen machine: Avast onderschept HTTPS lokaal — cert-checks ALTIJD op de server
  draaien (ssh + openssl/certbot), niet lokaal, anders zie je Avast i.p.v. het echte cert.

## Laatste Sessie: 2026-06-04

### Wat is gedaan:
- Onderzoek: Henk ziet zijn privéadres (Jacques Bloemhof 57, 1628 VN Hoorn) verschijnen
  bij mobiel bezoek aan de site. Hele repo doorzocht (Footer, layout, contact, /card,
  portfolio, JSON-LD/structured data) → **adres staat NERGENS in de website-code**.
  Enige locatiegegevens: `/card` heeft `city: 'Nederland'` (geen straat) + KVK in footer.
- Geverifieerd: geen `viewport`-export en geen webmanifest (Next.js default viewport actief).

### Openstaande items:
- [ ] Henk maakt screenshot op zijn telefoon van WAAR het adres verschijnt. Conclusie hangt
      daarvan af: zit het in een pagina-element (uit code halen) of is het een Google
      Bedrijfsprofiel/KVK-weergave náást de site (buiten onze code → via Google/KVK regelen).
      Meest waarschijnlijk: Google koppelt KVK-adres automatisch aan het bedrijf.
- [ ] `/card` PNG-download testen op mobile + visueel verbeteren (uit vorige sessie)

### Belangrijke context voor volgende keer:
- Adres-kwestie kan NIET in onze repo zitten op basis van grep — als Henk het toch op de
  site-pagina zelf ziet, eerst stale build op server uitsluiten (`npm run build`), anders
  is het zeker een externe bron (Google/KVK/browser-autofill).
