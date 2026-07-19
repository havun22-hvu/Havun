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

> ⚠️ **pm2 draait als `www-data`, niet als root.** De enige boot-daemon is
> `pm2-www-data.service` met `PM2_HOME=/var/www/.pm2`. Draai je `pm2` als root, dan praat je
> tegen een lége `/root/.pm2`-daemon en maak je per ongeluk een tweede havun-website die om poort
> 3003 vecht (zie troubleshoot). **Altijd via `sudo -u www-data PM2_HOME=/var/www/.pm2`.**

```bash
ssh root@188.245.159.115 "cd /var/www/havun.nl && git pull && npm install && npm run build && sudo -u www-data PM2_HOME=/var/www/.pm2 pm2 restart havun-website"
```

## Server Info

- PM2 process: `havun-website` (app-id in de www-data daemon)
- **PM2-daemon:** `/var/www/.pm2` als user `www-data` (systemd `pm2-www-data.service`).
  Zelfde daemon draait ook `havuncore-backend` en `vpdupdate`.
- **pm2-commando's altijd prefixen:** `sudo -u www-data PM2_HOME=/var/www/.pm2 pm2 <cmd>`
- Poort: 3003
- Start-recept: `ecosystem.config.js` draait de next-binary direct
  (`./node_modules/next/dist/bin/next start -p 3003`) — pm2 tracked zo de listener-pid zelf,
  geen npm/sh-wrapper ertussen.
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
ssh root@188.245.159.115 "sudo -u www-data PM2_HOME=/var/www/.pm2 pm2 status && sudo -u www-data PM2_HOME=/var/www/.pm2 pm2 logs havun-website --lines 10 --nostream"
```

### "Site uit de lucht" — eerst DNS, dan pm2 (incident 19-07-2026)

Twee losse oorzaken die tegelijk speelden:

1. **DNS — apex A-record ontbrak.** `havun.nl` had alléén een AAAA (IPv6) record; het A-record
   (`@` → `188.245.159.115`) was verdwenen. KPN thuis heeft geen werkend IPv6 → site laadt niet,
   terwijl subdomeinen (`www`, `vpd`, …) wél werken (die hadden hun A wél). Check:
   `nslookup -type=A havun.nl 8.8.8.8`. Fix zit in het mijn.host DNS-paneel (host `@`, type A).
   De server was de hele tijd in orde. `curl --resolve havun.nl:443:188.245.159.115 https://havun.nl`
   → 200 bewijst dat.

2. **Dubbele pm2-daemon → EADDRINUSE-loop.** pm2 toonde `havun-website` als `errored` (pid 0),
   restart-teller liep op, error-log vol `EADDRINUSE :::3003` — tóch gaf de site 200. Oorzaak: er
   draaiden twee God-daemons. De echte (`/var/www/.pm2`, www-data) hield 3003 en werkte; een
   duplicaat in `/root/.pm2` (ontstaan door `pm2 restart` als **root** in het oude deploy-commando)
   probeerde 3003 óók te binden → eindeloos errored. Diagnose:
   `ps -eo pid,cmd | grep "God Daemon"` — hoort er **één** te zijn (`/var/www/.pm2`). Meer dan één →
   de root-daemon killen: `PM2_HOME=/root/.pm2 pm2 kill && rm -f /root/.pm2/dump.pm2`. Voortaan
   nooit meer pm2 als root draaien (zie Deploy-waarschuwing).

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
