# quadratmeterberechnen.github.io (Hugo)

## Lokal starten
1. Hugo installieren (https://gohugo.io/installation/), Version 0.120 oder neuer.
2. Inter-Schrift besorgen: Datei `inter-latin-wght-normal.woff2` aus dem npm-Paket `@fontsource-variable/inter` (Ordner `files/`) nach `static/fonts/` kopieren.
3. `hugo server -D` und http://localhost:1313 öffnen.
4. Produktions-Build: `hugo --gc --minify`.

## Später (Phase 7)
Erst nach dem lokalen Test das Repo `quadratmeterberechnen.github.io` auf GitHub anlegen, pushen, unter Settings > Pages "GitHub Actions" wählen. Der Workflow liegt schon in `.github/workflows/hugo.yml`.
