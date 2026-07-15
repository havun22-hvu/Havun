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

### SSL-/certificaatfouten bij Henk — ALTIJD eerst de client uitsluiten

Terugkerend patroon (mei/juni 2026, meermaals): Henk ziet `ERR_CERT_AUTHORITY_INVALID` of
"Privacyfout" op havun-domeinen. **Elke keer bleek de server in orde en zat de onderschepping bij
de client.** Thuis: Avast Web/Mail Shield vervangt het cert. Op zijn werk-PC: een netwerkproxy met
SSL-inspectie. `havun.nl` heeft HSTS, dus niet doorklikbaar.

Diagnose-volgorde:
1. `certbot certificates` op de server + `openssl s_client` op localhost → check de **issuer**.
   Issuer = Let's Encrypt → server is goed. Issuer = "Avast"/bedrijfsnaam → client-MITM.
2. Beslissende test voor Henk: wifi uit → 4G. Werkt het dan, dan is het netwerk/antivirus.

> **Let op je eigen machine:** `curl` gaat hier door Avast heen → `000` of
> `CRYPT_E_NO_REVOCATION_CHECK`. Gebruik `curl --ssl-no-revoke`, en draai cert-checks **op de
> server** (ssh + openssl/certbot), nooit lokaal — anders zie je Avast in plaats van het echte cert.

## Landingspagina's op de server (NIET in git)

Deze staan los van deze repo; wijzigen gaat via scp/ssh, niet via een deploy:

| Domein | Pad | Bijzonderheden |
|---|---|---|
| `judoscoreboard.havun.nl` | `/var/www/judoscoreboard/index.html` | Statische HTML, geen Next.js. NL/EN via localStorage-sleutel `jsb-lang` + `data-i18n`. Screenshots `01-07.png`; map moet 755 zijn (was 744 → nginx kon er niet in). Nginx: `/etc/nginx/sites-enabled/judoscoreboard.havun.nl` |
| `safehavun.havun.nl` | `/var/www/safehavun/production/public/landing.html` | Laravel-app + statische landing. Nginx: `location = /` serveert landing.html, de rest gaat naar Laravel (`/login`, `/app`). Screenshots in `public/screenshots/` |
| `studieplanner.havun.nl` | `/var/www/studieplanner/coming-soon.html` | Nog uit te werken |

Lightbox/carousel op beide: `goTo(idx)` synct carousel + lightbox, keyboard ← → Esc.

## Waarom vpd.havun.nl ertoe doet (achtergrond bij het export-verzoek)

Henk gebruikt `vpd.havun.nl` op zijn werk als **bron**: hij leest daar de gewijzigde
groothandels-/VPD-prijzen en typt ze over in VIVA (veterinair praktijkprogramma op het
werknetwerk). Bron (extern, geblokkeerd door de werkproxy) en doel (intern) zijn tegelijk nodig —
de hele PC op hotspot zetten werkt dus slecht. Dat is de reden achter het openstaande
export-/printknop-idee. De vpd-code zit **niet** in deze repo.
