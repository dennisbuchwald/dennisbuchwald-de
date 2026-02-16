# Anleitung: dennisbuchwald.de

## Projekt-Überblick

Persönliche Portfolio-Website, gebaut mit **Next.js 13**, **React 18** und **Styled-components**. Deployed auf **Vercel**.

- **Live-URL:** https://www.dennisbuchwald.de
- **GitHub-Repo:** https://github.com/dennisbuchwald/dennisbuchwald-de

---

## Lokale Entwicklung

### Voraussetzungen

- Node.js (empfohlen: v18+)
- npm

### Projekt starten

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten (http://localhost:3000)
npm run dev
```

### Weitere Befehle

```bash
# Produktions-Build erstellen
npm run build

# Produktions-Build lokal starten
npm start

# Linting
npm run lint

# Sitemap generieren
npm run sitemap
```

---

## Deployment-Workflow (Git + Vercel)

Das Projekt ist mit Vercel verbunden. **Jeder Push auf den `main`-Branch löst automatisch ein neues Deployment aus.**

### Schritt-für-Schritt: Änderungen deployen

#### 1. Neuen Branch erstellen

Arbeite nie direkt auf `main`. Erstelle immer einen Feature-Branch:

```bash
# Sicherstellen, dass main aktuell ist
git checkout main
git pull origin main

# Neuen Branch erstellen und wechseln
git checkout -b mein-feature
```

Naming-Beispiele: `redesign-header`, `add-project`, `fix-contact-form`

#### 2. Änderungen machen

Code bearbeiten, neue Dateien hinzufügen, etc.

#### 3. Änderungen committen

```bash
# Alle Änderungen anzeigen
git status

# Dateien zum Commit hinzufügen
git add datei1.js datei2.js
# Oder alle geänderten Dateien:
git add .

# Commit erstellen
git commit -m "Kurze Beschreibung der Änderung"
```

#### 4. Branch auf GitHub pushen

```bash
# Beim ersten Push eines neuen Branches:
git push -u origin mein-feature

# Bei weiteren Pushes auf denselben Branch:
git push
```

> Vercel erstellt automatisch ein **Preview-Deployment** für jeden Branch-Push. Den Link findest du in deinem Vercel-Dashboard oder im Pull Request auf GitHub.

#### 5. Pull Request erstellen

- Gehe auf GitHub: https://github.com/dennisbuchwald/dennisbuchwald-de
- GitHub zeigt dir automatisch einen Banner "Compare & pull request" an
- Klick darauf, schreib eine kurze Beschreibung, und erstelle den PR
- Oder per Terminal:

```bash
# Pull Request direkt aus dem Terminal erstellen (braucht GitHub CLI)
gh pr create --title "Beschreibung" --body "Details"
```

#### 6. Pull Request mergen

- Auf GitHub den PR reviewen
- "Merge pull request" klicken
- Vercel deployt automatisch die neue Version auf https://www.dennisbuchwald.de

#### 7. Lokal aufräumen

```bash
# Zurück zu main wechseln
git checkout main

# Neuesten Stand holen (inkl. deines Merges)
git pull origin main

# Alten Feature-Branch löschen (optional)
git branch -d mein-feature
```

---

## Schnell-Referenz: Wichtige Git-Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `git status` | Zeigt geänderte Dateien |
| `git diff` | Zeigt die konkreten Änderungen |
| `git add .` | Alle Änderungen stagen |
| `git commit -m "..."` | Commit erstellen |
| `git push` | Änderungen auf GitHub pushen |
| `git pull origin main` | Neuesten Stand von main holen |
| `git checkout -b name` | Neuen Branch erstellen |
| `git checkout main` | Zu main wechseln |
| `git log --oneline` | Commit-Historie anzeigen |
| `git stash` | Änderungen temporär zwischenspeichern |
| `git stash pop` | Zwischengespeicherte Änderungen wiederherstellen |

---

## Projektstruktur

```
dennisbuchwald-de/
├── src/
│   ├── pages/              # Seiten (Next.js Pages Router)
│   │   ├── _app.js         # App-Wrapper (Theme, GlobalStyles)
│   │   ├── _document.js    # SSR für Styled-components
│   │   ├── index.js        # Hauptseite mit allen Sektionen
│   │   ├── impressum.js    # Impressum
│   │   ├── datenschutzerklaerung.js  # Datenschutz
│   │   └── api/hello.js    # Beispiel-API-Route
│   └── styles/
│       └── globals.css     # Globale CSS-Variablen
├── components/
│   ├── Header.js           # Navigation (sticky, responsive)
│   ├── Header2.js          # Vereinfachter Header (Impressum etc.)
│   ├── MenuItem.js         # Navigations-Button-Komponente
│   └── Footer.js           # Footer mit Links
├── public/                 # Statische Assets (Bilder, Fonts, Icons)
├── next.config.js          # Next.js Konfiguration
├── next-sitemap.config.js  # Sitemap-Konfiguration
└── package.json            # Dependencies & Scripts
```

---

## Umgebungsvariablen

Folgende Variablen werden für das Kontaktformular (EmailJS) benötigt und sind in Vercel konfiguriert:

```
NEXT_PUBLIC_SERVICE_ID     # EmailJS Service-ID
NEXT_PUBLIC_TEMPLATE_ID    # EmailJS Template-ID
NEXT_PUBLIC_USER_ID        # EmailJS User-ID
```

Für lokale Entwicklung: Erstelle eine `.env.local`-Datei im Projektverzeichnis mit diesen Werten.

---

## Tech-Stack

| Technologie | Version | Zweck |
|------------|---------|-------|
| Next.js | 13.3.1 | React-Framework |
| React | 18.2.0 | UI-Library |
| Styled-components | 5.3.10 | CSS-in-JS Styling |
| EmailJS | 3.2.0 | Kontaktformular |
| react-ga | 3.3.1 | Google Analytics |
| react-icons | 4.8.0 | Icon-Library |
| typewriter-effect | 2.19.0 | Tipp-Animation |
| Vercel | - | Hosting & Deployment |
