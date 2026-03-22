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
