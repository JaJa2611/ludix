# LUDIX Website

Die Website von LUDIX – alle deine PC-Spiele von Steam, Epic Games und Xbox an einem Ort.

Online: https://jaja2611.github.io/ludix/

## Aufbau

| Datei | Aufgabe |
|---|---|
| `index.html` | Startseite (deutsche Texte stehen direkt hier) |
| `i18n.js` | Weitere Sprachen – neue Sprache = Eintrag in `LUDIX_LANGS` + Wörterbuch |
| `main.js` | Download-Link und Version (`DOWNLOAD`), Sprachwahl, Animationen |
| `styles.css` | Design |
| `impressum.html`, `datenschutz.html` | Rechtliches |

## Neue LUDIX-Version veröffentlichen

1. Installer als neues GitHub-Release hochladen (Tag `vX.Y.Z`).
2. In `main.js` bei `DOWNLOAD` Version, Größe und Link anpassen.
3. Änderung committen und pushen – GitHub Pages aktualisiert die Seite nach ca. einer Minute.
