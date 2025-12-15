# Havun Website - Claude Instructions

> **Type:** Next.js 16 + React 19 + Tailwind CSS
> **Doel:** Bedrijfswebsite met portfolio
> **URL:** https://havun.nl

## Quick Reference

| Omgeving | Locatie |
|----------|---------|
| Lokaal | D:\GitHub\Havun |
| Server | /var/www/havun.nl |
| GitHub | https://github.com/havun22-hvu/Havun |

**Server:** 188.245.159.115 (root, SSH key)

## Lokaal Ontwikkelen

```bash
# Start development server
cd D:\GitHub\Havun
npm run dev
# Open http://localhost:3000

# Build voor productie
npm run build

# Test productie build lokaal
npm run start
```

## Git Workflow (BELANGRIJK)

### Na elke wijziging: commit + push
```bash
cd D:\GitHub\Havun
git add .
git commit -m "Beschrijving van wijziging"
git push
```

### Claude: zelfstandig committen
Als je code hebt gewijzigd, commit en push direct:
```bash
git add -A && git commit -m "Korte beschrijving" && git push
```

### Status checken
```bash
git status
git log --oneline -5
```

## Deploy naar Server

### Deploy na wijzigingen
```bash
ssh root@188.245.159.115 "cd /var/www/havun.nl && git pull && npm install && npm run build && pm2 restart havun-website"
```

### Claude: one-liner commit + deploy
Na code wijzigingen, voer dit uit:
```bash
git add -A && git commit -m "Update" && git push && ssh root@188.245.159.115 "cd /var/www/havun.nl && git pull && npm install && npm run build && pm2 restart havun-website"
```

### Server info
- PM2 process: `havun-website`
- Poort: 3003
- Nginx: /etc/nginx/sites-enabled/havun.nl

## Project Structuur

```
Havun/
├── src/
│   ├── app/           # Next.js App Router pages
│   │   ├── layout.tsx # Root layout
│   │   ├── page.tsx   # Homepage
│   │   └── */         # Subpagina's (portfolio, contact, etc)
│   └── components/    # React components
├── public/            # Static assets (images, logo's)
├── next.config.ts     # Next.js config
└── CLAUDE.md          # Dit bestand
```

## Pagina's Toevoegen

### Nieuwe pagina maken
```
src/app/portfolio/page.tsx    → /portfolio
src/app/contact/page.tsx      → /contact
src/app/over-ons/page.tsx     → /over-ons
```

### Template voor nieuwe pagina
```tsx
export default function PaginaNaam() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">Titel</h1>
      {/* Content hier */}
    </main>
  );
}
```

## Stijl Regels

- **Tailwind CSS** voor alle styling
- **TypeScript** voor type safety
- **Nederlandse** teksten op website
- **Engelse** code en comments
- Responsive design (mobile-first)

## Verboden zonder overleg

- Dependencies toevoegen (npm install X)
- next.config.ts wijzigen
- Server configuratie aanpassen
- .env bestanden wijzigen

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

### Lokaal andere port
```bash
npm run dev -- -p 3001
```
