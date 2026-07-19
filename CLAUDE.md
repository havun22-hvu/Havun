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

## ⛔ Kritieke Gedragsregels (herhaling = overtreding)

| Situatie | Wat Claude doet |
|----------|----------------|
| **Overleg/discussie** | Luisteren, analyseren, samenvatten + plan maken — NOOIT halverwege code schrijven. Code pas na expliciet "ga maar". |
| **Technische beslissing** | Zelf beslissen, kort melden wat er gedaan is — NOOIT vragen aan Henk. |
| **MD bijwerken** (handover/context/KB) | Gewoon doen — NOOIT "mag ik dit documenteren?" vragen. NOOIT bevestiging vragen voor edits aan context.md, handover.md of andere MD files. |

## Rolverdeling & Werkwijze (Havun-standaard)

Henk = architect + tester. Claude = implementer: code, docs, geautomatiseerde tests, commits,
deploys. Vragen mag **alleen** in de planningsfase; na "ga maar" volledig autonoom — nooit
"Mag ik X?" / "Zal ik Y doen?". Na elk agendapunt: tests → `/simplify` → MD's + handover
bijwerken → commit+push → volgende. Doc-issues bij `/start` direct oplossen, nooit ophopen.
Praktische browser-tests doet Henk zelf, op zijn moment.

## Rules (ALWAYS follow)

### LEES-DENK-DOE-DOCUMENTEER

Bij elke taak: eerst lezen (CLAUDE.md → relevante code/docs), dan denken, dan pas doen, en
achteraf documenteren. Kwaliteit boven snelheid; nooit aannemen, altijd verifiëren; herhaalt
Henk iets → direct vastleggen in de docs.
Volledige uitleg: `HavunCore/docs/kb/runbooks/claude-werkwijze.md`.

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

Next.js 16 + React 19, Tailwind CSS. PM2-process `havun-website` op poort 3003.
Lokaal starten: `npm run dev`.

```bash
# Deploy — pm2 draait als www-data (PM2_HOME=/var/www/.pm2), NOOIT als root
git add -A && git commit -m "Update" && git push && ssh root@188.245.159.115 "cd /var/www/havun.nl && git pull && npm install && npm run build && sudo -u www-data PM2_HOME=/var/www/.pm2 pm2 restart havun-website"
```

## Stijl Regels

Tailwind voor alle styling · Nederlandse teksten op de site, Engelse code en comments ·
responsive, mobile-first.

## Knowledge Base

Uitgebreid: `.claude/context.md` (structuur, deploy, troubleshoot) · HavunCore KB in
`D:\GitHub\HavunCore\docs\kb\`.

## AI Werkwijze — Gemini + Claude

`/arch [opdracht]` genereert een Gemini-blauwdruk (groot contextvenster) in `.claude/blueprint.md`;
`/start` detecteert die, `/mpc ga maar` voert hem uit.
Volledige pipeline: `docs/kb/runbooks/gemini-claude-workflow.md`.

## ⛔ Docs-first — code zonder MD is geen code

**Ga je implementeren? Werk EERST de MD bij (docs en/of plan), dan pas code. Andersom nooit.**

- **Groot** (feature, architectuur, >5 bestanden) → volledige `/mpc`: docs → plan → wacht op "ga maar" → code
- **Middel** (~2-5 bestanden) → plan-MD + de feature-doc die het raakt, dan bouwen
- **Klein** (bugfix) → de doc die het gedrag beschrijft + het punt in de handover, dan fixen
- **Triviaal** (typo, formatting) → enige uitzondering, geen MD nodig

Wijkt de implementatie af van het plan? **Eerst de MD bijwerken, dan verder.** Nooit stilzwijgend.
De omvang bepaalt hoevéél MD, niet óf. MD's bijwerken mag altijd zonder overleg.

Volledig: `HavunCore/docs/kb/standards/docs-first.md`

## MD-docs schrijven — hou ze leesbaar voor Claude

Een te lang doc wordt niet gelezen: het verdringt andere docs uit de context, en de KB indexeert
alleen het **begin** van een bestand (~2000-8000 tekens) — alles daarna is onvindbaar via `docs:search`.

- **Max:** KB-doc/runbook 200 regels · CLAUDE.md 120 · plan/blueprint 300 · handover 15-30 regels per sessie
- **Hiërarchie:** conclusie + status bovenaan, tabel in het midden, onderbouwing onderaan
- **Te groot?** Splitsen in index + deeldocs. Niet persen tot telegramstijl — onleesbaar is niet kort
- **Handover:** er is er **één** en die werk je **bij** — nooit een sessieblok toevoegen.
  Afgeronde taken eruit, nieuwe erbij. Levende status, geen logboek (git bewaart de historie)

Volledig: `HavunCore/docs/kb/standards/md-doc-grootte.md`
