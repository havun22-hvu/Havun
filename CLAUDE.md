# Havun Website - Claude Instructions

```
╔══════════════════════════════════════════════════════════════════╗
║  ⛔ STOP! LEES DIT VOORDAT JE IETS DOET                          ║
║                                                                   ║
║  GEEN CODE SCHRIJVEN VOORDAT JE ANTWOORD GEEFT OP:               ║
║                                                                   ║
║  1. "Wat staat er in de docs over dit onderwerp?"                ║
║  2. "Waar staat dat?" (geef bestandsnaam + regelnummer)          ║
║  3. "Is er iets inconsistent of ontbrekend?"                     ║
║                                                                   ║
║  PAS DAARNA mag je code voorstellen.                             ║
║  Gebruiker moet EERST akkoord geven.                             ║
║                                                                   ║
║  ⚠️  Bij twijfel: /kb of vraag aan gebruiker                     ║
╚══════════════════════════════════════════════════════════════════╝
```

> **Type:** Next.js 16 + React 19 + Tailwind CSS
> **Doel:** Bedrijfswebsite met portfolio
> **URL:** https://havun.nl

## Rules (ALWAYS follow)

### LEES-DENK-DOE-DOCUMENTEER (Kritiek!)

> **Volledige uitleg:** `HavunCore/docs/kb/runbooks/claude-werkwijze.md`

**Bij ELKE taak:**
1. **LEES** - Hiërarchisch: CLAUDE.md → relevante code/docs voor de taak
2. **DENK** - Analyseer, begrijp, stel vragen bij twijfel
3. **DOE** - Pas dan uitvoeren, rustig, geen haast
4. **DOCUMENTEER** - Sla nieuwe kennis op in de juiste plek

**Kernregels:**
- Kwaliteit boven snelheid - liever 1x goed dan 3x fout
- Bij twijfel: VRAAG en WACHT op antwoord
- Nooit aannemen, altijd verifiëren
- Als gebruiker iets herhaalt: direct opslaan in docs

### Forbidden without permission
- Dependencies toevoegen (npm install X)
- next.config.ts wijzigen
- Server configuratie aanpassen
- .env bestanden wijzigen

### Communication
- Antwoord max 20-30 regels
- Bullet points, direct to the point

## Quick Reference

| Omgeving | Pad |
|----------|-----|
| Local | D:\GitHub\Havun |
| Server | /var/www/havun.nl |

**Server:** 188.245.159.115 (root, SSH key)
**GitHub:** https://github.com/havun22-hvu/Havun

## Dit Project

- **Framework:** Next.js 16 + React 19
- **Styling:** Tailwind CSS
- **PM2 process:** havun-website (poort 3003)

### Lokaal starten
```bash
cd D:\GitHub\Havun && npm run dev
```

### Deploy
```bash
git add -A && git commit -m "Update" && git push && ssh root@188.245.159.115 "cd /var/www/havun.nl && git pull && npm install && npm run build && pm2 restart havun-website"
```

## Stijl Regels

- **Tailwind CSS** voor alle styling
- **Nederlandse** teksten op website
- **Engelse** code en comments
- Responsive design (mobile-first)

## Knowledge Base

Voor uitgebreide info:
- **Context:** `.claude/context.md` (structuur, deploy, troubleshoot)
- **HavunCore KB:** `D:\GitHub\HavunCore\docs\kb\`
