# Content skeleton - dubaipipes.com redesign

Clean copy extracted verbatim (lightly de-duplicated and typo-fixed only where
the source is obviously broken) from the 10 SingleFile captures. **No
fabricated stats.** Every number, standard, and license number below is present
in the source HTML.

Image roles are assigned by **dimensions + DOM context** from
`scripts/url-map.json`, never by visual inspection. Paths are relative to
`public/`.

## Global / shared facts

- Company: **Dubai Pipes Factory Co.** (DPFC)
- Product: Glass Reinforced Plastic (GRP) Pipes, Joints, Fittings, Manhole
  Liners, Cover Slabs, and Tanks.
- Processes: Continuous Filament Winding (Flowtite Technology AS know-how) and
  Reciprocal (Dual) Helical Winding.
- Specs: diameter ≤ **2400 mm**; pressure ≤ **32 bar** (ratings: gravity, 6,
  9, 10, 12, 16, 20, 25, 32 bar); stiffness **2500 / 5000 / 10000 N/m²**;
  standard length ≤ **12 m**.
- Standards: **AWWA, BS EN, ASTM**.
- Location: Jebel Ali Industrial Area, inside Dubai Investments Park, Dubai,
  UAE. ~100 km from Abu Dhabi. Plant area **150,000 m²**.
- Tel **+971 4 8851333** · Fax +971 4 8851116 · email **info@dubaipipes.com** ·
  P.O. Box 32902, Dubai.
- Know-how: **Flowtite Technology AS** - DPFC is the only company in the UAE
  authorized to produce Flowtite® pipes. Flowtite® pipes produced in 40+
  countries; thousands of km installed in the Middle East/Gulf over the last
  quarter-century.

### Site-wide images (from home capture)
- Hero facility photo (large, wide): `assets/images/home/ccfb5d9d36.jpg` (2000×935)
- Secondary banner: `assets/images/home/e9462a85d5.jpg` (871×284 - the source "Header Image")
- Logo (source GIF, 250×64): `assets/images/home/78feaf54e5.gif` - *redesign uses a text wordmark instead for crispness; logo file kept for reference.*
- Map screenshot (243×175) and download-map button (233×66): *not used - replaced by an interactive Leaflet map and a styled button.*

---

## 1. Home (`/`)

**H1:** Engineered GRP pipe systems for the Gulf's water and sewerage networks
**Sub:** Dubai Pipes Factory Co. produces Glass Reinforced Plastic pipes,
fittings, manhole liners and tanks up to 2400 mm diameter and 32 bar pressure -
backed by BSI Kitemark licenses and Flowtite® technology.
**Hero CTAs:** Request a Quote · View Product Range

**Stat band (all verifiable):**
- ≤ 2400 mm diameter
- ≤ 32 bar pressure rating
- ≤ 12 m standard length
- 150,000 m² plant area

**Intro (source copy):** Dubai Pipes plant is for the production and supply of
GRP Pipes, Joints, Fittings, Manhole Liners, Cover Slabs, and Tanks. GRP pipes
are produced by the Continuous winding process (Flowtite Technology AS know-how
and machinery) or by the Dual Helical winding process. Pipes are produced with
diameter up to 2400 mm, pressure rating up to 32 bar, stiffness 2500/5000/10000
N/m², and standard length up to 12 m, in accordance with AWWA, BS EN and ASTM.

**Capability cards (3):** Production & Supply · Quality & Testing · Site Services
(link to /services/).

**Certifications strip (logos):** BSI Kitemark · ISO 9001 · ISO 14001 · WRAS ·
AWWA · ASTM (badge images from the certifications page sidebar, see §3).

**Map teaser:** small "Locate Us" → links to /contact-us/.

---

## 2. Contact & Location (`/contact-us/`)

**H1:** Contact & Location
**Lead:** Dubai Pipes Factory Co. is located in the Emirate of Dubai, in Jebel
Ali Industrial Area, close to Dubai City, just near Jebel Ali Free Zone, and
around 100 km from Abu Dhabi. The plant is built over an area of 150,000 m².

**Contact block:**
- Dubai Pipes Factory Co.
- Tel: +971 4 8851333  (`tel:+97148851333`)
- Fax: +971 4 8851116
- Email: info@dubaipipes.com (`mailto:info@dubaipipes.com`)
- Website: dubaipipes.com
- P.O. Box: 32902, Dubai
- Jebel Ali Industrial Area, inside Dubai Investments Park, Dubai, UAE

**Interactive Leaflet map** - marker on Dubai Investments Park / Jebel Ali
Industrial Area with an info card. (Replaces the static map screenshot.)

**Quote form** - name, company, project type, message, phone; `action=""`,
marked integration point. (New; not in source.)

**Downloads:** Location map PDF (`/assets/docs/dubai-pipes-location-map.pdf`).
**Image:** `assets/images/contact-us/09a0694682.jpg` (450×338, the source map
photo) - used as a lightbox visual alongside the interactive map.

---

## 3. Certifications & Approvals (`/certifications-approvals/`)

**H1:** Certifications & Approvals

**Certifications (source copy):** DPFC is quality-committed and ISO 9001:2008
accredited. A documented Quality Management System Manual confirms compliance
with the ISO standard; the manual is available upon request. Conformity with
international standards was established by independent party BSI, and a
satisfactory assessment of the manufacturing control process confirmed that
such conformity is consistently achieved. Accordingly the following Kitemark
licenses are obtained:

- ASTM D 3262 - Kitemark License KM 505457
- ASTM D 3517 - Kitemark License KM 505456
- ASTM D 3754 - Kitemark License KM 505455
- BS 5480 - Kitemark License KM 505454
- BS EN 1796 - Kitemark License KM 549259
- BS EN 14364 - Kitemark License KM 505454

DPFC products are approved by the Water Regulations Advisory Scheme (WRAS).
DPFC is committed to the environmental management system framework and
requirements of the ISO 14001:2004 standard.

**Approvals (source copy):** Products produced by Dubai Pipes factory are
approved and in use across many of the Middle East countries, GCC countries,
and specifically in Dubai, Abu Dhabi and the other Northern Emirates of the
UAE. Approvals have been received from most of the local and international
contractors, project consultants and governmental authorities. A large amount
of pipe produced by Dubai Pipes is currently in use, mainly for sewerage,
irrigation and storm-water networks.

**Badge images (sidebar logos, 150-wide):**
`assets/images/certifications-approvals/9a7af5f8c8.jpg` (150×93),
`e1857f2cd7.jpg` (150×186), `51a9831822.jpg` (150×48), `eaf1db14dd.jpg` (150×100).
**Approval gallery:** `1341f5d08c.jpg`, `ccc1b521ae.jpg` (220×165).

**Project record:** "Click to download project record" → converted to an
"available on request" CTA to the contact form (source .xls not in captures).

---

## 4. GRP Pipe Installation (`/grp-pipe-installation/`)

**H1:** GRP Pipe Installation

**Lead (source copy):** Pipes can be installed above ground using a
self-restrained joint such as hand lay-up lamination, or underground using the
regular double-bell coupling as the standard joint. Underground installation
can be by the traditional open-trench method, or by micro-tunneling or jacking.

**Pipe Joint (source copy):** Standard GRP pipe jointing systems include:
Double Bell Reka Coupling, Hand Lay Up, Flange, Flexible Steel Coupling, and
Mechanical Steel Coupling. The double-bell Reka coupling is the ideal joint
normally offered for non-restrained systems, mainly used for underground
applications. Lamination or flange is the typical joint for restrained systems,
used for above-ground applications and pumping-station areas.

**Gallery images (165×124):** `5c52125f9a`, `28523128f2`, `1b04a520f9`,
`b7dd504114`. **Joint detail images:** `ca1b860396` (165×117), `79be4f3743`
(165×98). (All under `assets/images/grp-pipe-installation/`.)

---

## 5. GRP Pipes Benefits (`/grp-pipes-benefits/`)

**H1:** GRP Pipes Benefits
**Lead:** The advantages of GRP pipes are:

**Benefits list (source copy, verbatim):**
1. **Light weight** - GRP is only ¼ the weight of ductile iron pipe and around
   1/10 the weight of concrete pipe.
2. **Corrosion resistance** - long, effective service life; no cathodic
   protection needed; hydraulic characteristics essentially unchanged over time.
3. **Extremely smooth bore** - low friction loss means less pumping energy;
   less slime build-up lowers cleaning cost.
4. **Low maintenance cost** - easy to maintain, does not rust, easily cleaned,
   minimal or no protection from the environment required.
5. **Electric properties** - non-conductive; conductive pipes can be produced
   to dissipate static-electricity buildup when transporting certain fluids.
6. **Long pipe sections** - standard length up to 12 m means fewer joints,
   reducing installation time and cost.
7. **Dimensional stability** - maintains the critical tolerances required for
   demanding structural and piping applications.
8. **Material properties** - meets the most stringent requirements for
   chemical resistance and mechanical strength.
9. **Double-bell coupling joints** - manufactured using the same process and
   material; easy to joint, tight, eliminates infiltration/exfiltration, allows
   flexible alignment for minor changes in line direction.
10. **Easy alteration** - pipes can be cut and jointed to form any fitting
    (elbows at any angle, tees with different branches, reducers…); edges can
    be modified to suit other piping materials or accessories.

**Applications (source copy):** GRP pipes can be used for: water transmission
and distribution (potable and raw); sanitary sewerage collection (gravity flow
and force main); storm water; effluent water; seawater intake and outfalls;
circulating cooling water, make-up and blowdown lines for power plants;
industrial application; irrigation; odor-control piping; oil-field injection
piping; chemical process lines; fire-fighting lines; ducting; slip lining for
pipe rehabilitation; insulated pipes for district-cooling lines (core pipe and
jacket).

**Gallery images (9 × 165×124):** `2c90b36e5a`, `3f4c897a5b`, `71d320744a`,
`e7d8c3b214`, `91a6375468`, `46acae9e0d`, `925bbe0799`, `26395abc58`,
`7ae9db0cc0`. (Under `assets/images/grp-pipes-benefits/`.)

---

## 6. GRP Pipes General Information (`/grp-pipes-general-information/`)

**H1:** GRP Pipes - General Information, Raw Material & Production Process
**Feature image (large):** `assets/images/grp-pipes-general-information/cf27bbc67e.jpg` (750×563)

**On-page nav:** Glass Reinforced Pipes · Production Process · Product Range ·
Fittings · Manhole Liners

### Glass Reinforced Pipes
**Definition (source):** GRP pipes are made from glass-fiber reinforcements
embedded in cured thermosetting resin; they may contain granular aggregate.
Material selection and composition depend on the required properties and
designed performance. Introduced in 1948, GRP invaded the market through
corrosion resistance and was selected as an alternative to steel and stainless
steel. The range expanded to high-pressure applications and diameters up to
4000 mm. GRP combines durability, strength, and corrosion resistance with
great design flexibility - properties, fittings profiles and shapes can be
customized.

**Materials (source):** GRP pipes consist of glass-fiber reinforcement
(mechanical strength depends on amount, type and arrangement of glass) and
thermosetting resin. Common glass types: **E** (good electrical resistance),
**ECR / Advantex** (good acid resistance), **C** (good chemical resistance).
Fiberglass forms: continuous roving (bundled, untwisted strand - excellent
mechanical properties); reinforcing mat (chopped strands with binder -
multidirectional reinforcement); surface veil (lightweight, high-resin layers
for environmental resistance and smooth surface). Only thermosetting resins
are used, cured by heat and/or chemical additives: polyester (isophthalic -
large-diameter water/sewage), vinyl ester (increased corrosion resistance -
aggressive fluids such as acids), epoxy (small-diameter - water,
hydrocarbons, diluted acids). Additional components: silica sand, organic
peroxide catalysts, hardeners, accelerators.

### Production Process (source)
GRP pipes are produced by DPFC by either Continuous Filament Winding or
Reciprocal Helical Winding - both are filament-winding processes: impregnating
glass reinforcement with resin, then applying wet fibers onto a mandrel in a
prescribed pattern.

- **Continuous Filament Winder:** a continuous steel band supported by beams
  forms a cylindrical mandrel; the beams rotate, friction pulls the band
  around, and roller bearings let the band move longitudinally so the mandrel
  advances in a spiral path. Raw materials (glass fiber, resin, aggregate,
  veil) are metered on in precise amounts under PLC/PC control; after cure a
  synchronized saw cuts the pipe to length. Most efficient process - production
  continues without holding/resuming per pipe or layer, stopping only at order
  completion.
- **Reciprocal Helical Winding:** glass roving passes through a resin bath;
  bath and directing comb sit on a carriage driven back and forth at
  controlled linear speed; pre-impregnated fiber is wound onto a rotating
  steel mandrel. Synchronizing carriage speed and mandrel RPM sets the winding
  angle (a function of the requested pipe property), both computer-controlled.
  Winding progresses in stages - multiple carriage passes form one layer;
  thickness is built from multiple layers.

**Pipe layers (source):** inner liner (resin-rich, chemical resistance, smooth
inner surface, up to 2.5 mm); structural layer (the majority of pipe thickness,
provides mechanical strength); outer liner (resin-rich, environmental
protection).

### Product Range (source)
Diameter ≤ 2400 mm. Pressure ratings: gravity, 6, 9, 10, 12, 16, 20, 25, 32
bar. Stiffness: 2500, 5000, 10000 N/m². Standard length ≤ 12 m. Any other
customized product can be designed and manufactured.

### Fittings (source)
All types of GRP fittings are produced - made from pipe sections cut, modified,
assembled to shape and jointed by hand lay-up lamination (lamination material
is nearly identical to pipe production; lamination properties normally exceed
pipe properties). Fitting types: elbows (any bending angle), tees (equal and
unequal branch), Y (different branch angle/diameter), reducers (concentric and
eccentric), nozzles. End types: spigot (for GRP Reka coupler), modified spigot
(to match other GRP/non-GRP piping), flanged (drilled to match any flange),
plain (for lamination jointing).

### Manhole Liners (source)
Made in whatever shape required: a thin pipe produced at the winder forms the
manhole shaft; the cover slab with the required opening is sprayed on a
pre-formed mold using glass fiber and resin identical to pipe production. The
cover slab can be jointed to the shaft in-plant or on-site by lamination or by
bell-mouth coupling.

**Specs table** (driven by `assets/js/products-data.js`, see CMS section): the
pressure ratings + stiffness + diameter + length, editable in one file.

**Gallery images (selected):** `e6544093bb`, `ad3a70d327`, `00466df074`,
`45bb0d8676`, `5ca5b50ea2`, `db9c281042`, `c9e8f6f926`, `a08ed651dd` and
others under `assets/images/grp-pipes-general-information/`.

---

## 7. Know-How Supplier (`/know-how-supplier/`)

**H1:** Know-How Supplier
**Body (source copy):** Large-diameter GRP pipes produced by Dubai Pipes
Factory Co. are per the know-how and technology supplied by **Flowtite
Technology AS**. Flowtite® pipes are in use all over the world and are produced
in more than 40 countries. Over the last quarter-century, thousands of
kilometers of Flowtite® pipes have been installed in the Middle East and the
Gulf area with an exceptional performance record. **Dubai Pipes Factory Co. is
the only company in the UAE authorized to produce Flowtite® pipes.**

**External link:** Flowtite website (source URL:
`http://www2.flowtite.com/...`). Kept as an external link.
**Images:** `ef5038d80d.jpg`, `230fe81219.jpg` (165×124/123, under
`assets/images/know-how-supplier/`).

---

## 8. Product Testing (`/product-testing/`)

**H1:** Product Testing
**Lead (source):** The quality procedure described here ensures fulfillment of
product testing and inspection as prescribed in the QMS implemented at DPFC.
Quality of raw material and manufactured products is controlled by: adherence
to international standards and customer requirements; testing and inspection
per documented internal work instructions; systematic collection of information
at various stages from receipt of raw material to finished products.

**Inspection & Test Plan (source):** The ITP implemented by Dubai Pipes starts
with incoming-raw-material inspection, passes through process control and
monitoring, and continues to finished-product testing. Testing can be
destructive or non-destructive, dimensional and visual, conducted at
predetermined frequency. A standard ITP is available and meets the requirement
for most international testing standards; it may be modified based on customer
requirements. (Source "download ITP.xls" link → "available on request" CTA.)

**Qualification tests (source):** In addition to regular online product and
raw-material testing, these long-term tests are carried out internally to
qualify incoming raw material and predict long-term pipe performance:
- Strain Corrosion - ASTM D 3681 (chemical resistance of fiberglass pipe in
  deflection condition)
- Hydrostatic Design Basis - ASTM D 2992 (obtaining hydrostatic/pressure design
  basis for fiberglass pipe and fittings)
- Ring Bending - ASTM D 5365 (long-term ring bending strain of fiberglass pipe)

**Material specifications (source):** GRP pipes and fittings manufactured by
DPFC are in accordance with:
- ASTM D3262 - Fiberglass Sewer Pipe
- ASTM D3517 - Fiberglass Pressure Pipe
- ASTM D3754 - Fiberglass Sewer and Industrial Pressure Pipe
- BS 5480 (superseded by) BS EN 14364 - GRP pipes, joints and fittings for
  water supply and sewerage
- BS EN 1796 - GRP pipes, joints and fittings for drainage and sewerage
- AWWA C950 - Fiberglass Pressure Pipe

**Standard-doc images (150-wide):** `3846a47bca` (150×133), `b410affe13`
(150×150), `0b7e6b13b5` (150×150). **Test gallery:** `2dc4c522e3`, `0649f5787c`,
`d9cd42f1ce`, `ed65794cc9`, `3a7673cfbe`, `f329900c87`, `066e342169`,
`bd5f920a92`. (Under `assets/images/product-testing/`.)

---

## 9. Download Catalog (`/download-catalog/`)

**H1:** Download Catalog
**Body:** Download the Dubai Pipes Factory Co. product catalog (PDF).
**CTA:** Download Catalog (PDF) → `/assets/docs/dubai-pipes-catalog.pdf`
**Catalog visual:** `assets/images/download-catalog/2b8f8cefb4.png` (266×86,
source catalog-cover button).
**Side block:** Locate Us teaser + location-map PDF link
(`/assets/docs/dubai-pipes-location-map.pdf`).

---

## 10. Services (`/services/`)

**H1:** Services
**Lead (source):** In addition to the production and supply of GRP pipes and
fittings, Dubai Pipes Factory services extend to:
- Pipe design verification - AWWA M45 (underground installation) and Caesar II
  (above-ground installation)
- Pre-recommendation on type of piping material and properties
- Site installation - coupling joint or lamination joint
- Site inspection and supervision on installation
- Verification of pipe deflection after installation

(Services page has no unique images in the source - only the shared
header/logo/map. The redesign adds icon-led service cards.)

---

## 11. Blog (`/blog/`) - CMS scaffold (new)

Styled "Coming soon" grid of placeholder cards driven by
`assets/js/blog-data.js`. No fabricated posts; cards are clearly marked as
placeholders. Comments in the data file mark the CMS integration point
(Decap CMS / Sanity / Contentful).

## 12. Projects / Case Studies (`/projects/`) - CMS scaffold (new)

Same pattern: placeholder cards driven by `assets/js/projects-data.js`, clearly
marked "Coming soon". Comments mark the integration point.
