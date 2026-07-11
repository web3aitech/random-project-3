# Audit - dubaipipes.com (source site)

> Written before any CSS. Methodology matches the Renue Systems rebuild: assess
> the existing site's palette, content, SEO, and conversion posture, then design
> a distinct replacement. No image inspection was performed - conclusions here
> come from the SingleFile HTML captures and the extracted-asset manifest
> (`scripts/url-map.json`, which records dimensions/bytes but not pixels).

## Source site at a glance

- 10-page hand-rolled XHTML 1.0 Transitional site, table-based layout, fixed
  871 px width, circa 2011–12 (footer: "© 2011-12. All Rights Reserved.").
- Body font Verdana 10 px / 11 px; headings Arial. Base font-size 10 px is
  unreadable on modern displays and on mobile.
- Entire navigation is image-based (`faq1`–`faq9` `<img>` buttons with empty
  `alt`). No text nav, no semantic `<nav>`, no `<ul>` site menu.
- Repeated "Header Image" banner (871×284) and a "Locate Us" Google-Maps
  screenshot on most pages - the map is a static image, not interactive.

## Palette (read from the logo + CSS, not pixels)

- Body background `#ffffff`; text `#000000`; footer-link text `#1f0e0a`
  (near-black warm brown).
- The logo (250×64 GIF, `home/78feaf54e5.gif`) is the brand-lock source. Per the
  plan the burnt-orange `#C95C1A` is taken from the logo; the redesign palette
  is chosen fresh and is **distinct from the Renue Systems palette**:
  `--navy #0D1B2A`, `--primary #C95C1A`, `--accent #E07B3F`, `--gold #B8860B`.
- The source has no real color system - colors are inline per-element. The
  redesign introduces a `:root` token set.

## Content gaps

- **No CTAs.** No "Request a quote", no `tel:` links (the phone number is plain
  text `+971 4 8851333`), no `mailto:` (email is plain text
  `info@dubaipipes.com`). A visitor cannot act from any page.
- **No value proposition above the fold.** Home leads with "Welcome to Dubai
  Pipes Factory Co." and a dense paragraph. No headline selling capability, no
  key specs surfaced as scannable stats.
- **Buried specs.** Diameter (≤2400 mm), pressure (≤32 bar), stiffness
  (2500/5000/10000 N/m²), length (≤12 m), and standards (AWWA, BS EN, ASTM)
  are all real, all verifiable from the source - but scattered inside
  paragraphs. The redesign surfaces them as a stat band on the home page.
- **Thin pages.** Services, Download, and Know-How Supplier are near-empty.
  Services lists five engineering services with no expansion. Download is a
  single catalog-image link. These stay accurate to source copy; we do not
  fabricate services or stats.
- **Dead/binary document links.** Source links to `Catalog 2011.pdf`,
  `Location maprev1.pdf`, `ITP All.xls`, and `Updated DPFC Project Record
  160211.xls`. These binaries were **not** embedded by SingleFile, so they are
  not in the captures. The redesign ships a placeholder catalog/location-map
  PDF (generated, clearly marked) and converts the .xls "download" prompts into
  "available on request" CTAs to the contact form rather than shipping dead
  links.

## SEO diagnosis

- `<title>` is identical on every page: `Dubai Pipes Factory Company ` (with a
  trailing space). No page-specific titles.
- **No meta descriptions**, no Open Graph tags, no canonical beyond SingleFile's
  own, no structured data.
- Headings are misused: `<h1>Welcome…</h1>` and `<h1>Locate Us</h1>` are
  side-by-side on the home page (two H1s); content section titles use
  `<strong>` instead of heading elements, so there is no document outline.
- Image `alt` is empty on essentially every image (logo, nav, gallery, map).
  No `width`/`height` attributes are not the issue (they are present) - the
  missing alt text is.
- Tables-for-layout means no semantic landmarks (`<header>`, `<nav>`, `<main>`,
  `<footer>`), which hurts accessibility and SEO parsing alike.

## Conversion diagnosis

- Zero conversion paths. A buyer landing on any page has no next action
  offered. The redesign adds three CTA surfaces per page: header quote button,
  in-hero CTA, and a pre-footer CTA band - all wired to the primary goal
  ("Request a Quote" → contact form, or `tel:+97148851333`).
- Phone/email are not actionable. Fix: every phone → `tel:+97148851333`, every
  email → `mailto:info@dubaipipes.com`.
- No form exists at all. The redesign adds a full quote-request form scaffold
  (name, company, project type, message, phone) with `action=""` and a marked
  integration point - no backend yet, by design.
- Trust signals (BSI Kitemark licenses, ISO 9001/14001, WRAS, Flowtite
  authorization) exist as copy but are not visually prominent. The redesign
  surfaces them as a certifications strip and a dedicated, well-structured
  certifications page.

## Asset localization summary (Phase 3, already complete)

- `scripts/localize-assets.mjs` extracted every base64 data URI from all 10
  SingleFile captures, skipped 1×N spacer shims by size, deduped by content
  hash, and wrote real files under `public/assets/images/<slug>/`.
- Manifest: `scripts/url-map.json` (per-page image list with dimensions/bytes).
- Role assignment for the redesign is done by **dimensions + DOM context**
  (e.g. the 871×284 "Header Image" banner is the site hero candidate; the
  four 150-wide images in the certifications sidebar are the badge logos;
  165×124 thumbnails are gallery images) - not by visual inspection.
- `scripts/rewrite-refs.mjs` from the original plan is **not needed**: we are
  authoring clean HTML from scratch that references the localized assets
  directly, not transforming the old captures.

## Verdict

The source is a competent 2011 product catalog with genuine engineering
substance (real specs, real BSI licenses, a real Flowtite authorization) but
zero conversion design, zero SEO, and no mobile support. The redesign keeps
every verifiable fact, restructures it for scanning and action, and wraps it in
a fresh industrial-authority design system.
