# Havun — Handover

> **Één handover, bijwerken — nooit een sessieblok toevoegen.** Levende status, geen logboek.
> Afgerond = weg (git bewaart het). Max ~120 regels. Regel:
> `HavunCore/docs/kb/standards/md-doc-grootte.md`.

**Status:** portfolio-site draait (Next.js, pm2 `havun-website` op poort 3003). Geen bekende bugs.

## Open — wacht op Henk

| Wat | Details |
|---|---|
| **vpd.havun.nl op het werk: workaround of bouwen?** | De werkproxy blokkeert vpd.havun.nl, terwijl Henk het daar als bron gebruikt (zie `context.md`). Keuze: (a) vpd op telefoon/4G naast de werk-PC, of (b) een export-/printknop op vpd.havun.nl bouwen — thuis prijzen wijzigen → PDF/lijst → op werk afvinken zonder vpd te openen. Nog niet gekozen. Let op: de vpd-code zit **niet** in deze repo (aparte locatie nog te vinden). |
| **Engelse screenshots JudoScoreBoard** | De app-UI is Nederlands; Henk moet de app in EN openen en screenshots maken voor `judoscoreboard.havun.nl`. |
| **`/card` visueel verbeteren** | Henk vond het "niet mooi". UI-oordeel, dus zijn call. |

## Open — te doen

- **SafeHavun-status op de portfolio.** `src/app/portfolio/page.tsx:93` zet SafeHavun op
  "Onder constructie". Weghalen zodra de app in de Play Store staat — dan ook de Play Store-link
  activeren (3 plekken op de landingspagina: nav-cta, hero-btn, cta-bottom) en het app-icon
  toevoegen. Play Store package-naam is nog onbekend (placeholder `nl.havun.safehavun`).
- **`/card` PNG-download testen op mobiel** — SVG `foreignObject` werkt mogelijk niet in Safari.
- **studieplanner.havun.nl verder uitwerken**: landingspagina, QR-code voor de APK-download en
  screenshots. Wacht tot de app af is.

## Vaste context

Staat in `.claude/context.md` — met name: SSL-fouten bij Henk zijn **altijd** client-side
(Avast thuis, werkproxy op kantoor), de landingspagina's staan los op de server (niet in git),
en na een image-update moet `.next/cache/images` gewist worden.
