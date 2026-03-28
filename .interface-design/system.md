# KMI Design System
<!-- Persistent design decisions. Loaded every session. Updated as decisions are made. -->

## Brand Identity

**Aesthetic:** Industrial Fintech — the visual language of Bloomberg Terminal meets institutional research house. Not startup-playful. Not corporate-bland. Dense, precise, trustworthy.

**Reference points:** Bloomberg Terminal (data density, dark UI), ICIS/Argus/S&P Global Platts (institutional commodity intelligence), Linear (clean B2B SaaS), Ramp (financial precision).

**What we are NOT:** Bright SaaS gradients. Rounded-everything friendly UI. Marketing-heavy landing pages. Generic AI/tech startup aesthetic.

## Color Palette

### Primary
| Token | Hex | Usage |
|-------|-----|-------|
| `navy` | `#1B2A4A` | Primary background, section fills |
| `navy-deep` | `#111D35` | Deeper sections, contrast panels |
| `teal` | `#2E8B8B` | Lane 1 accent (commodity polymers), CTAs, interactive elements |
| `teal-light` | `#3AADAD` | Hover states, emphasis on teal elements |
| `gold` | `#D4A843` | Lane 2 accent (engineering polymers), premium indicators |
| `gold-light` | `#E8C97A` | Hover states, emphasis on gold elements |

### Neutrals
| Token | Hex | Usage |
|-------|-----|-------|
| `cream` | `#E8E4D9` | Logo-derived neutral. Nav links, footer hovers, hamburger lines |
| `light-gray` | `#F2F3F5` | DEPRECATED for section backgrounds. Use only for form input fields if needed |
| `mid-gray` | `#E5E7EB` | Borders on light backgrounds (rare) |
| `dark-text` | `#1A1A1A` | Text on light backgrounds (rare) |
| `body-text` | `#94A3B8` | Body copy on dark backgrounds |
| `muted` | `#64748B` | Secondary text, captions |
| `subtle` | `#475569` | Tertiary text, metadata |

### Data/Terminal
| Token | Hex | Usage |
|-------|-----|-------|
| `ticker-bg` | `#0A1628` | Ticker bar, terminal-style sections |
| `ticker-green` | `#22C55E` | Positive price movement, BUY signals |
| `ticker-red` | `#EF4444` | Negative price movement, risk alerts |

### Rules
- **No pure black (#000000).** Darkest color is `navy-deep` (#111D35).
- **No light section backgrounds.** The site is fully dark. Use depth variation (navy, navy-deep, `#0F1D2F`) for visual rhythm. `light-gray` is deprecated for section backgrounds.
- **White text (#FFFFFF or near-white) only on dark backgrounds.**
- **Body text on dark backgrounds is always `body-text` (#94A3B8).** Never gray-on-teal or gray-on-gold.
- **CTA hierarchy:** Gold (`#D4A843`) = primary conversion CTAs (subscribe, sign up). Teal (`#2E8B8B`) = functional/secondary actions (form focus, inline links, Lane 1 accent).
- **Teal = Lane 1 (commodity). Gold = Lane 2 (engineering) AND primary CTA.** Gold serves double duty as both Lane 2 accent and the site's primary action color.
- **Selection color:** `rgba(46, 139, 139, 0.27)` with white text.

## Typography

### Font Stack
| Role | Font | Variable | Weights |
|------|------|----------|---------|
| Serif / Headlines | Cormorant Garamond | `--font-cormorant` | 400, 600, 700 |
| Sans / Body | DM Sans | `--font-dm-sans` | 400, 500, 600, 700 |
| Mono / Data | JetBrains Mono | `--font-jetbrains` | 400, 500, 600 |

### Usage Rules
- **Headlines (h1, h2):** Cormorant Garamond. Bold (700) or semi-bold (600). White on dark backgrounds.
- **Subheadings (h3, h4):** Cormorant Garamond 600 or DM Sans 600.
- **Body text:** DM Sans 400. `body-text` color on dark, `dark-text` on light.
- **Labels, tags, overlines:** DM Sans 500-700. Uppercase with `tracking-[2px]` to `tracking-[3px]`. Size 10-12px.
- **Data, prices, numbers:** JetBrains Mono. Used in ticker, pricing tables, terminal preview, stats.
- **Never use Inter, Helvetica, or system fonts.** The three-font stack is the brand.
- **No font below 10px.** Smallest text: overline labels at 10px.

### Scale
| Element | Size | Font | Weight |
|---------|------|------|--------|
| Hero headline | 48-56px | Cormorant Garamond | 700 |
| Section headline | 32-40px | Cormorant Garamond | 700 |
| Card title | 24-28px | Cormorant Garamond | 700 |
| Subtitle | 13-16px | DM Sans or Cormorant | 500-600 |
| Body | 14-16px | DM Sans | 400 |
| Small / caption | 12-13px | DM Sans | 400-500 |
| Overline label | 10-12px | DM Sans | 600-700, uppercase, tracked |
| Data / numbers | 14-24px | JetBrains Mono | 400-600 |

## Spacing & Layout

- **Container max-width:** `max-w-6xl` (1152px) for content, `max-w-7xl` (1280px) for wider sections.
- **Section padding:** `py-20` to `py-24` vertical. `px-6` horizontal on mobile, `px-8` on desktop.
- **Card padding:** `p-8` standard. `p-6` for compact cards.
- **Grid:** CSS Grid or Flexbox. 2-column splits for Lane 1/Lane 2. 3-column for feature grids.
- **Responsive breakpoints:** Tailwind defaults (sm: 640, md: 768, lg: 1024, xl: 1280).

## Components & Patterns

### Cards
- Background: `bg-gradient-to-br from-white/5 to-white/[0.01]` (subtle glass on dark).
- Border: `border-white/[0.08]`. On hover: accent color at 40% opacity.
- Hover: `hover:-translate-y-[3px]` lift + shadow. Transition: `duration-350`.
- **Never nest cards inside cards.** One level of card depth maximum.

### Buttons / CTAs
- Primary: Solid teal background, white text, DM Sans 600.
- Secondary: Outline with teal/gold border, transparent background.
- Hover: Slight brightness increase + subtle shadow.
- **No pill-shaped buttons** (full rounding). Use `rounded-lg` (8px) maximum.

### Ticker Bar
- Full-width, `ticker-bg` background.
- JetBrains Mono for all data.
- Green/red for price direction. Continuous scroll animation.
- Position: top of page, above nav.

### Navigation
- `navy-deep/95` backdrop-blur, becoming `navy-deep/98` on scroll with `border-gold/10`.
- DM Sans 500 for nav links. Cream text at 70% opacity, gold-light on hover.
- Logo: `kantor-logo-transparent.png` at h-16 (64px). Nav height h-24 (96px).
- CTA: Solid gold background, navy-deep text. No gradient.
- Section depth rhythm (no light/dark alternation): ticker-bg → navy-deep → navy gradient → navy → navy-deep, etc.

### Dividers & Borders
- Subtle: `border-white/[0.06]` to `border-white/[0.10]` on dark backgrounds.
- Accent: 2px line in teal or gold for section emphasis.
- **No heavy borders.** Everything should feel refined and understated.

## Animation & Motion

- **Transitions:** 200-350ms for interactive elements. `ease-out` default.
- **Hover lifts:** `translate-y` of -2px to -3px maximum.
- **Page entry:** Subtle fade-in + slide-up for sections as they scroll into view. Keep it minimal.
- **Ticker:** Continuous horizontal scroll via CSS `translateX` animation.
- **No bouncing, pulsing, or attention-seeking animations.** The aesthetic is measured and institutional.

## Anti-Patterns (Never Do These)

1. **No purple gradients or neon colors.** We are not a Web3 project.
2. **No cards-in-cards.** One level of card nesting only.
3. **No gray text on colored backgrounds.** Use proper contrast ratios.
4. **No Inter or system font fallbacks in visible UI.**
5. **No rounded-full buttons.** Max border-radius is `rounded-lg`.
6. **No stock photography.** Use data visualizations, abstract geometric patterns, or nothing.
7. **No emoji in UI.** Institutional tone extends to visual elements.
8. **No centered paragraph text.** Body copy is always left-aligned. Only headlines and short labels can center.
9. **No decorative gradients without purpose.** Every gradient should create depth or hierarchy.
10. **No light mode.** The site is dark-first. Dark backgrounds with light text throughout.

## Page Structure

| Page | Status | Key Components |
|------|--------|----------------|
| `/` (Home) | Built | TrustTicker, Nav, Hero (Lane 1/2 split cards), ValueProps, StatsBar, TerminalPreview, TrustSection, Footer |
| `/terminal` (The Polymer Compass) | Built | Subscription page for MT intelligence product |
| `/syndicate` | Not built | Pod System / demand aggregation explanation |
| `/materials` | Not built | Product catalog / grade information |
| `/about` | Not built | Company, team, thesis |
| `/contact` | Not built | Contact form + office locations |
