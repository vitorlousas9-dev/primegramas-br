# Primegramas — Design System

Primegramas is a Brazilian synthetic-grass ("grama sintética") supplier and installer, founded 2010 in Brazil by a sales veteran of a synthetic-grass factory. 14 years in, it has a second unit in Portugal and franchise plans in Brazil. It sells to condominiums, schools, clubs, event companies, construction firms and sports-court owners (football fields, tennis, padel), turning unusable common areas — muddy in the rain, bare dirt, worn courts — into finished green space. Sales run through phone, WhatsApp and email, quotes ("propostas") are built in the Tiny ERP, and every deal requires a deposit before installation.

Voice: formal but warm ("tom profissional, mas acolhedor"), agile, never leaves a customer without a reply, and always closes on a positive note reaffirming the commitment to service. Brazilian Portuguese (pt-BR) — "grama", not "relva"; "você", not "tu".

The logo's own tagline reads **RELVAS SINTÉTICAS PARA JARDINS E DESPORTOS** — Portugal-market wording (that unit's storefront language) kept verbatim on the mark itself. Everything else in this system defaults to the Brazilian pt-BR of the sales wiki, since that's the documented half of the business; flip to "relva"/"desportos" phrasing for Portugal-facing work.

## Sources given

- Six logo files (mark-only, horizontal lockup, vertical lockup, white/reversed, white-on-green) — copied into `assets/`.
- A written brand brief: green `#91C038` and grey `#99999B` as anchors (extracted from the logo); interlocking rounded blade shapes with one sharp diagonal cut; bold condensed geometric all-caps wordmark; warm-but-professional voice; palette extended with earthy neutrals (soil browns, stone greys) as *supporting* colours.
- `Primegramas_Full_Context_Guide.docx` — a memory doc compiled 31/08/2026 from the company's Notion sales wiki: company history, full product/material catalog, pricing logic, the phone/WhatsApp/email lead process, proposal and follow-up scripts, OKRs, and known documentation gaps (competitor database and customer personas exist as empty templates in the wiki; commission/bonus structure isn't documented yet).
- Explicitly **out of scope**: the previous marketing materials (a blue deck, a black-and-white catalogue) — they don't match the logo.

No codebase, Figma file, website URL, photography or font binaries were supplied. Where something is proposed rather than sourced, it says so.

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | The one file consumers link. `@import` list only. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css` |
| `assets/` | Logo lockups (PNG): `logo-horizontal`, `logo-vertical`, `logo-vertical-white`, `logo-vertical-on-green`, `logo-vertical-white-bg`, `logo-mark` |
| `components/core/` | Button, IconButton, Icon, Card, Badge, Tag |
| `components/forms/` | Input, Textarea, Select, Checkbox, Radio, Switch |
| `components/navigation/` | Tabs |
| `components/patterns/` | ContactCard |
| `components/feedback/` | Dialog, Toast, Tooltip |
| `ui_kits/website/` | Marketing site — 4 click-through pages (`README.md` inside) |
| `ui_kits/quote-desk/` | Internal quote desk — 3 views (`README.md` inside) |
| `guidelines/` | 18 foundation specimen cards (colours, type, spacing, brand) |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent-Skills wrapper |

Every component directory holds `<Name>.jsx`, `<Name>.d.ts` and `<Name>.prompt.md`, plus one `@dsCard` HTML per directory.

### Component list
Button, IconButton, Icon, Card, Badge, Tag (core) · Input, Textarea, Select, Checkbox, Radio, Switch (forms) · Tabs (navigation) · Dialog, Toast, Tooltip (feedback) · ContactCard (patterns).

### Intentional additions
- **Icon** — no icon set was supplied. `Icon` is a thin wrapper that renders a Lucide glyph as a CSS mask so it inherits `currentColor`. It exists so nobody hand-draws SVG glyphs.
- **ContactCard** — a composite the brand needs on every surface that asks for a quote: pitch and contact tiles on the left, the request form on a sunken panel at the right, with crosshair marks at the four corners as a measurement cue. It composes the form primitives rather than restyling them.

---

## Products (from the sales wiki)

**Linha Decorativa/Recreativa** — polypropylene base, 2 latex layers, virgin polyethylene yarn (the wiki's stated differentiator vs. recycled-material Chinese imports). For playgrounds, events, yards/balconies, gyms, gardens, storefronts, mini-courts, pools, pet areas, courts, tennis, golf, padel. Models: 10mm Fibrilada, 12mm Fibrilada, 20mm Fibrilada, 20mm Monofilada, 20mm Soft Garden/Soft Euro, 30mm Soft Garden, 30mm Delta Bicolor, 12mm Color (yellow/red/blue/black/white/purple/pink). Durability 3–10 years, warranty 1–3 years depending on model and traffic.

**Linha Esportiva/Campos** — polypropylene base with 2–3 latex layers, virgin polyethylene yarn, 40–60mm pile for football fields, fast drainage, UV treatment, sand/rubber infill. Models: 20mm Esportiva, 30mm Delta, 40mm Esportiva, 50mm Esportiva.

**Materials & accessories:** contact glue (2.5/2.8kg cans, 1 can per 20m²) for concrete subfloors; bi-component P.U. glue (5/15kg buckets) for sport turf and gravel-bed subfloors; E.V.A. shock pad (1.40m roll, 6mm standard, up to 10mm) under playground turf; crushed-stone subfloor as a cheaper alternative to concrete; felt tape (30cm × 100m) and green-painted iron staples (packs of 6) for gravel-bed installs.

**Pricing logic:** market-rate, checked monthly against competitors; cost of production plus average margin, adjusted by customer segment. Always a deposit before installation (city-school exception: paid on install day via Pix/debit). Individuals pay by card (up to 6x interest-free, 12x with interest) or Pix; companies get installment billing by area tier. Proposals are valid 7 days.

## Sales process (from the sales wiki)

Leads arrive by **phone** (receptionist screens and transfers commercial questions; prices are never quoted by phone unless the customer insists), **WhatsApp** (a chatbot routes to the right salesperson, who runs a PJ or PF script collecting purpose, new-install-vs-replacement, area, floor condition, install need, contact details, photos), and **email** (same warm-formal line, offers to send the proposal and institutional material). Outbound prospecting targets schools, builders, event companies and property managers.

Proposals are built in the **Tiny ERP**: one recommended model per proposal (alternatives go in notes), labor line matching the area if installing, glue quantity auto-calculated, freight by region, "1 + N installments" with the first at 40%. **Follow-up**: first contact 3–5 days after sending, then every 15 days; condominiums are the explicit exception (their approval can take months through assembly/board/lawyers) and get 20–30 day check-ins instead. Status flow: **Rascunho → Pendente → Aguardando → Aprovado / Não aprovado**.

**Known gaps in the wiki itself** (flagged there, not filled in): customer personas (guide questions exist, no answers yet), commission and quarterly-bonus structure, and the competitor database (fields exist, no competitors logged at time of writing).

---

## Content fundamentals

**Language.** Brazilian Portuguese (pt-BR) by default — "grama sintética" not "relva"; "orçamento"/"proposta" (the ERP calls the formal document a *proposta*), "condomínio", "metragem", "instalação". Currency is `R$`; areas are `m²` with a comma decimal (`40m²`, `R$ 1.250,00`). Use "relva"/"desportos" instead only for Portugal-unit-facing work — the logo's own tagline is in that register.

**Person.** First-person plural for Primegramas, formal *você* register for the customer — never *tu*, no honorifics beyond "Prezado(a) [Nome]" in written proposals and follow-ups.

**Tone.** Straight from the wiki's own service guideline: *"Sempre ágil — nunca deixar o cliente sem resposta. Tom profissional, mas acolhedor, com interesse genuíno nas necessidades do cliente."* Concrete over adjective-heavy — name the material property (UV protection, virgin polyethylene yarn, drainage) rather than say "alta qualidade" alone.

**The positive close.** Every outbound message — proposal, follow-up, quote-desk reply — ends by restating the commitment to excellent service, not with a generic sign-off. Real examples from the wiki's own scripts:
- Follow-up script (verbatim): *"Agradecemos a confiança e aguardamos seu retorno."*
- Service guideline: *"Finalizar com mensagens positivas, reafirmando o compromisso com excelência no atendimento."*
- Positioning move required in every reply: *"Posicionar os produtos como resposta aos problemas e desejos do cliente (economia, estética, sustentabilidade)."*

**Headlines.** Short, declarative, all-caps in the display face; three lines maximum. Lead with the problem it removes: mud in the rain, dead grass, a court that can't be used. Avoid wordplay and the "not X, but Y" construction.

**Body copy.** Two or three sentences. Sequence over promise: atendimento → proposta (7 dias de validade) → aprovação → instalação (5–7 dias úteis) → pós-venda.

**Labels and eyebrows.** Uppercase, wide tracking, two to four words: `GRAMA SINTÉTICA`, `LINHA ESPORTIVA`, `COMO FUNCIONA`, `PROJETOS ENTREGUES`. Form labels are uppercase 11px with 0.08em tracking.

**Buttons.** Uppercase, verb-first, no full stop: "Solicitar proposta", "Falar no WhatsApp", "Agendar visita técnica", "Ver catálogo". Never "Submit", "Click here", "Saiba mais".

**Numbers as proof.** Yarn height (`40mm`), durability (`3 a 10 anos`), warranty (`1 a 3 anos`), delivery (`5 a 7 dias úteis`), glue coverage (`1 lata / 20m²`). Set them in the mono face when they're references or measurements, display face when they're the point of a card.

**Emoji.** Never — not on the site, not in the tool, not in outbound WhatsApp messages. The one non-brand colour is WhatsApp green on a channel button; it carries the channel signal, not an emoji.

**Unicode.** `·` as a separator between short facts. `m²`, `R$`, `º` where correct. No arrows in text (use an icon), no decorative dingbats.

---

## Visual foundations

**Colour.** Green `#91C038` and grey `#99999B` dominate; every other colour supports them. Green is for action, confirmation and brand surfaces — one green primary button per view. The stone ramp carries all text, borders and surfaces. Soil browns (`--soil-*`) are the earthy secondary: alt cards, tags, base-prep content, avatar fills — never a whole section background, never a headline colour. Semantic status colours are muted (`--success #5F9E27` sits close to brand green on purpose). WhatsApp green `#25D366` is the only sanctioned non-palette colour, and only on a real WhatsApp affordance.

At most two background colours per composition: white/sunken plus one of green, inverse stone, or soil.

**Type.** Display: **Figtree** — a warm humanist sans, **sentence case, never all-caps**, `-0.02em` tracking, leading 1.06–1.2. The signature headline treatment mixes **Light 300 and Bold 700 inside one line** ("Desfrute da sua **área verde** sem complicações") — the same two-weight device the wordmark uses on the storefront, where PRIME is bold and GRAMAS is light. Body: **Montserrat** 400/500/600/700 at 16px base, 1.5 leading, 1.65 for longer paragraphs. Mono: **JetBrains Mono** for references, metragem and hex values.

Uppercase is now reserved for *small labels only* — eyebrows (Montserrat 700, 11–12px, 0.16em tracking), form labels, and Badge status pills. Buttons, tabs and all headlines are sentence case.

**Condensed is a sport-only exception.** `--font-condensed` (Saira Condensed) stays available for football-field and court contexts where the harder, athletic tone is right. Never use it for gardens, condominiums, schools or leisure areas — the condensed bold read too sporty for the audience that makes up most of the business.

*Display, body and condensed faces are all Google Fonts substitutions — see Fonts below.*

**Layout.** 1200px content max, gutters `clamp(20px, 5vw, 64px)`, 96px vertical section rhythm (64px tight). Grids are 3-up or 4-up with 20px gaps. The site header is sticky and translucent (88% white + 10px blur) — the only fixed element besides the WhatsApp button (fixed bottom-right, always visible, because WhatsApp is the primary sales channel). The internal tool is a fixed 236px dark sidebar plus a 70px top bar.

**Spacing.** 4px base scale: 4 8 12 16 20 24 32 40 48 64 80 96 128. Card padding 24px (40px for the hero form card), stack gap 12px inside a card, 32px between content blocks.

**Corner radii.** Soft by default — 8/12/18/28px, pill for all controls. The angular accent is the **blade corner**: `--radius-blade` keeps three rounded corners and cuts the fourth to 2px, echoing the diagonal where the logo's two blades meet. Use it on at most one element per section — a feature card, the closing CTA block, one button.

**Borders.** Hairline 1px, `--border-subtle` (`#E2E2E3`) for card edges and table rows, `--border-default` for form fields, green for active fields and tab underlines. No double borders, no coloured left-border accents.

**Shadows.** Four soft, low-contrast steps (xs/sm/md/lg) built from near-black at 6–18% — nothing dramatic. Cards sit at `--shadow-sm` and lift to `--shadow-md` with a 2px rise on hover. `--shadow-brand` is a green glow reserved for primary buttons. There is no inner-shadow system; inset is only used as the optional `--shadow-inset-top` highlight.

**Imagery.** Photography is the intended background medium — real installed projects, shot in daylight, warm and natural, saturated greens, no filters, no grain, no black-and-white. Full-bleed for the hero, contained 3:2 tiles for works and products. **None was supplied**, so every image position in the UI kits is an `<image-slot>` placeholder labelled with what belongs there; drop real photos in the preview to fill them.

**Protection.** Text over photography always sits on a scrim, never on raw image: `--protection-gradient` (bottom-up near-black 78% → transparent) for tiles, and a left-to-right variant on the hero. No frosted capsules over photos — the site's only blur is the sticky header and the dialog scrim.

**Transparency and blur.** Sparingly and only for chrome: the sticky header, the dialog scrim (62% stone-950 + 3px blur), the active sidebar item (green at 20%). Never on content cards.

**Animation.** One easing curve does almost everything: `--ease-standard` `cubic-bezier(.32,.72,0,1)` — a quick out, long settle. Durations 140/220/380ms. Fades and short translations only; no bounce, no spring, no scroll-jacking, no entrance animations on page load.

**Hover.** Buttons darken one step (green-500 → green-600); secondary buttons take the sunken fill and a stronger border; ghost takes the green-50 tint; cards lift 2px and gain a shadow step; nav links go from muted to strong. Never opacity-only hovers.

**Press.** `scale(0.985)` plus the next darker green (`green-700`), 90ms. No colour flash, no ripple.

**Focus.** 3px ring in a lightened brand green (`--focus-ring`), never removed, never replaced by a colour change alone.

---

## Iconography

**Lucide**, loaded from CDN (`unpkg.com/lucide-static@0.544.0`) and rendered through the `Icon` component as a CSS mask so it inherits `currentColor`. 2px stroke, rounded caps, 16/18/20/24px. **This is a substitution** — no icon set was supplied; Lucide was chosen because its rounded stroke terminals match the logo's rounded blade shoulders.

Working vocabulary: `ruler` (measurement), `message-circle` (WhatsApp), `phone`, `mail`, `shield-check` (guarantee), `clock` (response time), `layers` (base prep), `sprout`, `trophy`, `graduation-cap`, `home`, `map-pin`, `calendar-check`, `send`, `arrow-right`, `search`, `plus`, `bell`.

Rules: icons never carry meaning alone — always a label, or a `Tooltip` on an `IconButton`. Icons are green (`--green-600`) when they mark a benefit, muted stone when they are UI furniture, white on green or dark surfaces. No filled icon styles, no two-tone icons, no emoji, no unicode glyphs standing in for icons (the only exceptions are the `▾` select caret and the `×` dismiss affordance, both inside components).

Do not hand-draw SVG glyphs. Pick a Lucide slug.

---

## Fonts — substitution flagged

No font binaries were provided.

- The wordmark is **custom-drawn lettering** with the leaf cut into the P and G. Storefront signage shows it as a **wide geometric sans with PRIME bold and GRAMAS light** — not condensed. Never attempt to re-set the wordmark in type; use `assets/logo-*.png`. Montserrat at 700/300 is the closest approximation if a text-only lockup is unavoidable.
- Headlines use **Figtree** (300/400/600/700/800) — chosen for warmth, since the business is mostly gardens, condominiums, schools and leisure areas rather than sport.
- The tagline face is a geometric grotesque; **Montserrat** matches it closely and carries all body copy.
- **Saira Condensed** remains loaded as `--font-condensed`, scoped to sport/field contexts only.
- `@font-face` rules in `tokens/fonts.css` currently point at Google's CDN. Swap the `src` URLs for self-hosted binaries when the real files exist.

**Ask:** if Primegramas owns the wordmark's source font (or the outlines), send it — a text-only lockup should be re-pointed at it. An SVG or EPS of the logo would also replace the PNGs, which limit crisp scaling.
