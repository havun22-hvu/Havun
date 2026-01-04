# Context - Havun Website

> Bedrijfswebsite met portfolio

## Tech Stack

- **Framework:** Next.js 16 + React 19
- **Styling:** Tailwind CSS
- **TypeScript:** Ja
- **PM2 process:** havun-website (poort 3003)

## Project Structuur

```
Havun/
├── src/
│   ├── app/           # Next.js App Router pages
│   │   ├── layout.tsx # Root layout
│   │   ├── page.tsx   # Homepage
│   │   └── */         # Subpagina's
│   └── components/    # React components
├── public/            # Static assets
└── next.config.ts     # Next.js config
```

## Pagina's Toevoegen

```
src/app/portfolio/page.tsx    → /portfolio
src/app/contact/page.tsx      → /contact
src/app/over-ons/page.tsx     → /over-ons
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

### Server checken
```bash
ssh root@188.245.159.115 "pm2 status && pm2 logs havun-website --lines 10 --nostream"
```
