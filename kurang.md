# kurang.md – what is still missing before launch

Everything below needs you (or a tool with network access). Everything else in the project is written.

## Must do before going live
- [ ] **Impressum address.** Open `content/impressum.md` and replace the three `[... – bitte ergänzen]` lines with your real postal address. A German Impressum needs a postal address where you can be reached (a P.O. box is not enough). If you don't want to publish a private address, use a business address or a registered address service.
- [x] **Inter font file.** Copy `inter-latin-wght-normal.woff2` from the npm package `@fontsource-variable/inter` (folder `files/`) into `static/fonts/`.
- [ ] **Legal check.** Have a lawyer or a generator (e.g. the IT-Recht Kanzlei or eRecht24) review Impressum, Datenschutz and Nutzungsbedingungen. I wrote them to match this site (no cookies, no tracking, GitHub Pages hosting), but they are not legal advice.
- [ ] **Local build.** Install Hugo (0.120+), run `hugo server -D`, and fix any template error. Then run `hugo --gc --minify`.
- [ ] **Verify the Wohnfläche paragraph** on the homepage against the current WoFlV.

## Phase 7: deploy (repo is created only now)
1. Create the GitHub repo named exactly `quadratmeterberechnen.github.io` (needs a GitHub account/organization named `quadratmeterberechnen`).
2. `git init`, commit, add the remote, push to `main`.
3. Settings > Pages > Source: GitHub Actions. The workflow is already in `.github/workflows/hugo.yml`.
4. Check https://quadratmeterberechnen.github.io/ and `/sitemap.xml`.

## After launch
- [ ] Google Search Console and Bing Webmaster Tools: add the site, submit `sitemap.xml`, request indexing for the homepage and glossary pages.
- [ ] Run PageSpeed Insights, Rich Results Test and validator.schema.org on the homepage and one glossary page.

## Optional improvements
- [ ] Author photo: put a 160×160 WebP in `static/img/` and set `image` in `data/author.yaml`.
- [ ] `sameAs` links (LinkedIn etc.) in `data/author.yaml`, only if they are real.
- [ ] Longer content: homepage is about 1,140 words (target 1,200–1,600), glossary pages 425–500 words (target 500–800).
- [ ] Inline SVG diagrams for the shape formulas (rectangle, triangle, circle, trapez) with alt text.
- [ ] FAQPage JSON-LD for the homepage FAQ (Google rarely shows FAQ rich results now).
- [ ] More glossary terms later: Wohnfläche, Grundfläche, Umfang, Hektar.
