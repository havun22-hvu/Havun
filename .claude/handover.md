# Handover - Laatste Sessie

## Sessie: 2026-03-22

### Wat is gedaan:
- JudoScoreBoard toegevoegd aan portfolio (direct onder JudoToernooi)
- Herdenkingsportaal icon bijgewerkt (nieuw hplogo.png)
- "Onder constructie" status verwijderd van Studieplanner (is nu live)
- JudoScoreBoard beschrijving versimpeld ("Standalone" dubbeling verwijderd)
- Feature "Live display sync via WebSocket" vervangen door "Live scorebord op TV/scherm" (begrijpelijker)
- URL judoscoreboard.havun.nl toegevoegd (voor hover effect + toekomstige landingspagina)
- JudoScoreBoard status "Onder constructie" toegevoegd (app is bijna klaar)

### Openstaande items:
- [ ] JudoScoreBoard landingspagina maken op judoscoreboard.havun.nl (met screenshots)
- [ ] JudoScoreBoard "Onder constructie" verwijderen wanneer app af is
- [ ] QR code voor Studieplanner APK download toevoegen (wacht tot app af is)
- [ ] Screenshots van Studieplanner app toevoegen op landingspagina
- [ ] Studieplanner.havun.nl landingspagina nog verder uitwerken

### Belangrijke context voor volgende keer:
- Portfolio heeft nu 6 projecten: Herdenkingsportaal, JudoToernooi, JudoScoreBoard, Studieplanner, VPD Update, SafeHavun
- JudoScoreBoard icon komt uit JudoScoreBoard repo (assets/jsicon.png)
- JudoScoreBoard is bijna klaar — bij launch: status verwijderen + landingspagina opzetten
- Bij image updates op de server: ALTIJD `.next/cache/images` wissen, anders serveert Next.js de oude gecachete versie
- Studieplanner landingspagina staat op `/var/www/studieplanner/coming-soon.html`

### Bekende issues/bugs:
- Geen
