---
title: Havun — Handover
type: claude
scope: havun
last_updated: 2026-07-19
---

# Havun — Handover

**Status:** portfolio-site draait (Next.js 16 + React 19, pm2 `havun-website` op poort 3003, daemon
`/var/www/.pm2` als www-data). Branch `master`, gelijk met `origin/master`. Geen bekende bugs.
⚠️ `havun.nl` is op IPv4 pas bereikbaar zodra het apex A-record live staat (zie eerste punt).

## Open — wacht op Henk

| Wat | Details |
|---|---|
| **havun.nl A-record opslaan** | Apex A-record (`@` → `188.245.159.115`) is in mijn.host ingevuld maar nog **niet opgeslagen** — autoritatieve NS gaf 19-07 nog geen A. Henk moet op "Opslaan" klikken. Verifiëren: `nslookup -type=A havun.nl ns1.mijn.host` moet het IP teruggeven. Zonder A blijft havun.nl onbereikbaar op netwerken zonder werkend IPv6 (o.a. KPN thuis); subdomeinen werken wel. |
| **vpd.havun.nl op het werk: workaround of bouwen?** | De werkproxy blokkeert vpd.havun.nl, terwijl Henk het daar als bron gebruikt (achtergrond in `context.md`). Keuze: (a) vpd op telefoon/4G naast de werk-PC, of (b) een export-/printknop op vpd.havun.nl bouwen — thuis prijzen wijzigen → PDF/lijst → op werk afvinken zonder vpd te openen. Nog niet gekozen. Let op: de vpd-code zit **niet** in deze repo (aparte locatie nog te vinden). |
| **Engelse screenshots JudoScoreBoard** | De app-UI is Nederlands; Henk moet de app in EN openen en screenshots maken voor `judoscoreboard.havun.nl`. |
| **`/card` visueel verbeteren** | Henk vond het "niet mooi". UI-oordeel, dus zijn call. |

## Open — te doen

- **Auth → magic link (passwordless).** Richting bepaald 19-07 n.a.v. een Google-lekmelding op
  "havun.nl" (bleek wachtwoord-hergebruik; havun.nl zelf heeft geen login). Speelt in de
  **HavunCore-apps** (safehavun, havunclub, havuncore), niet in deze repo. Per-app uitwerken met
  een eigen plan — nog geen scope/planning.

- **SafeHavun-status op de portfolio.** `src/app/portfolio/page.tsx` zet SafeHavun op
  `status: 'Onder constructie'`. Weghalen zodra de app in de Play Store staat — dan ook de
  Play Store-link activeren (3 plekken op de landingspagina: nav-cta, hero-btn, cta-bottom) en het
  app-icon toevoegen. Play Store package-naam is nog onbekend (placeholder `nl.havun.safehavun`).
  Let op: die landingspagina staat **op de server, niet in git** — zie tabel in `context.md`.
- **`/card` PNG-download testen op mobiel** — SVG `foreignObject` werkt mogelijk niet in Safari.
- **studieplanner.havun.nl verder uitwerken**: landingspagina, QR-code voor de APK-download en
  screenshots. Staat nu op `coming-soon.html`. Wacht tot de app af is.

## Vaste context voor dit project

Volledig in `.claude/context.md` (structuur, routes, deploy, troubleshooting). De punten die het
vaakst een fout besparen:

- **SSL-fouten bij Henk zijn altijd client-side** — Avast thuis, SSL-inspecterende proxy op het
  werk. De server is elke keer in orde geweest. Check de **issuer** op de server (`certbot
  certificates`, `openssl s_client`), nooit lokaal — lokale `curl` gaat door Avast heen.
- **De landingspagina's staan los op de server en niet in git**
  (judoscoreboard, safehavun, studieplanner) — wijzigen via scp/ssh, niet via deploy.
- **Na een image-update** moet `.next/cache/images` op de server gewist worden, anders blijft de
  oude afbeelding hangen.
- **Deploy:** `ssh root@188.245.159.115 "cd /var/www/havun.nl && git pull && npm install && npm run build && sudo -u www-data PM2_HOME=/var/www/.pm2 pm2 restart havun-website"` — pm2 **altijd** als www-data, nooit als root (anders duplicaat-daemon).
