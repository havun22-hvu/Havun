# Handover - Laatste Sessie

## Sessie: 2026-03-16

### Wat is gedaan:
- Studieplanner URL verwijderd uit portfolio, daarna weer toegevoegd (intro site is er)
- "Eerste klant: WestFries Open (Judoschool Cees Veen)" verwijderd uit JudoToernooi beschrijving
- HavunAdmin volledig verwijderd uit portfolio (privé project)
- Studieplanner.havun.nl coming-soon pagina vervangen door placeholder landingspagina (icon + QR placeholder + screenshot placeholders)
- Portfolio icons bijgewerkt: studieplanner.svg → studieplanner.png, judotoernooi.jpg → judotoernooi.png
- Havun logo rond gemaakt via CSS (rounded-full) in Header en Footer

### Openstaande items:
- [ ] QR code voor Studieplanner APK download toevoegen (wacht tot app af is)
- [ ] Screenshots van Studieplanner app toevoegen op landingspagina
- [ ] Studieplanner.havun.nl landingspagina nog verder uitwerken

### Belangrijke context voor volgende keer:
- Studieplanner landingspagina staat op `/var/www/studieplanner/coming-soon.html` (nginx serveert dit voor alle paden behalve /api/)
- Bij image updates op de server: ALTIJD `.next/cache/images` wissen, anders serveert Next.js de oude gecachete versie
- Portfolio heeft nu 5 projecten: Herdenkingsportaal, JudoToernooi, Studieplanner, VPD Update, SafeHavun (HavunAdmin verwijderd)

### Bekende issues/bugs:
- Geen
