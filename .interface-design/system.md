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
- **Headlines (h1, h2):** Cormorant Garamond. Bold (700). White on dark backgrounds.
- **Subheadings (h3):** Cormorant Garamond 700 or DM Sans 700.
- **Body text:** DM Sans 400 at 16px. `body-text` color on dark, `dark-text` on light.
- **Labels, tags, overlines:** DM Sans 600-700. Uppercase with `tracking-[3px]`. Size 11px.
- **Data, prices, numbers:** JetBrains Mono. Used in ticker, pricing tables, terminal preview, stats.
- **Never use Inter, Helvetica, or system fonts.** The three-font stack is the brand.
- **No font below 11px.** Smallest text: eyebrow labels at 11px.

### Strict Scale (8 steps only — no ad-hoc sizes)

| Token | Size | Line-Height | Tailwind | Font | Weight | Usage |
|-------|------|-------------|----------|------|--------|-------|
| `xs` | 11px | 1.4 | `text-[11px]` | DM Sans / Mono | 600-700 | Eyebrow labels, overlines |
| `sm` | 12px | 1.4 | `text-xs` | DM Sans | 400-500 | Captions, meta, tags |
| `base-sm` | 14px | 1.5 | `text-sm` | DM Sans | 400 | Secondary body, card body, nav links |
| `base` | 16px | 1.5 | `text-base` | DM Sans | 400 | Primary body text |
| `lg` | 20px | 1.5 | `text-xl` | DM Sans | 400 | Subheadings, section intro text |
| `h3` | 24px | 1.3 | `text-2xl` | Cormorant | 700 | Card titles, section subheads |
| `h2` | 40px | 1.3 | `text-[40px]` | Cormorant | 700 | Section headings |
| `h1` | 66px | 1.08 | `text-[66px]` | Cormorant | 700 | Hero headline (desktop only) |

**Mobile responsive patterns (mandatory):**
- H1: `text-5xl lg:text-[66px]` (48px → 66px)
- H2: `text-3xl lg:text-[40px]` (30px → 40px) — SAME across all sections
- H3: `text-xl lg:text-2xl` (20px → 24px)
- Intro/subhead: `text-lg lg:text-xl` (18px → 20px)
- Body: `text-base` (16px, same at all breakpoints)

**Banned sizes:** `text-[13px]`, `text-[14.5px]`, `text-[15px]`, `text-[26px]`, `text-[38px]`. No Tailwind `text-3xl` for H2 without responsive `lg:text-[40px]`. No `text-base` for intro text (use `text-lg lg:text-xl`).

## Spacing & Layout

### Section Padding (4 levels only)
| Level | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| Compact | 48px | `py-12` | Stats bars, dividers, tight sections |
| Standard | 80px | `py-20` | Most content sections |
| Feature | 96px | `py-24` | Hero-adjacent, emphasis, conversion sections |
| Hero | min-h-[85vh] | special | Hero only |

**Banned:** `py-14`, `py-16`, `py-[90px]`, `py-[100px]`, `py-[140px]`

### Container Widths (3 levels)
| Level | Width | Usage |
|-------|-------|-------|
| Narrow | `max-w-[640px]` | Text-only blocks, form containers |
| Standard | `max-w-[1100px]` | Most sections |
| Wide | `max-w-[1200px]` | Full-width content sections |

**Banned:** `max-w-[580px]`, `max-w-[840px]`, `max-w-[900px]`, `max-w-6xl`, `max-w-7xl`

### Card Padding (2 levels)
| Level | Value | Usage |
|-------|-------|-------|
| Standard | `p-6 lg:p-8` | All content cards |
| Compact | `p-5 lg:p-6` | Inline cards, badges, small containers |

**Banned:** Asymmetric padding (`pl-6 pr-5`), `p-8 lg:p-10`

### Grid Gaps (3 levels)
| Level | Value | Usage |
|-------|-------|-------|
| Tight | `gap-4` | Form elements, inline groups |
| Standard | `gap-6` | Card grids, feature lists |
| Loose | `gap-12 lg:gap-16` | Two-column content splits |

**Banned:** `gap-3`, `gap-8`, `gap-10`, `gap-20`

### Letter Spacing (3 levels)
| Level | Value | Usage |
|-------|-------|-------|
| Tracked | `tracking-[3px]` | Eyebrow labels (11px uppercase) |
| Wide | `tracking-wider` | Button text, nav links |
| Tight | `tracking-tight` | Stats numbers, display text |

**Banned:** `tracking-[1.5px]`, `tracking-[2px]`, `tracking-[4px]`, `tracking-widest`

### Horizontal Padding
- Mobile: `px-6` (24px)
- Desktop: `lg:px-10` (40px)

### Grid & Layout
- CSS Grid or Flexbox. No 12-column requirement.
- 2-column splits for Lane 1/Lane 2. 3-column for feature grids.
- **Responsive breakpoints:** Tailwind defaults (sm: 640, md: 768, lg: 1024, xl: 1280).

## Components & Patterns

### Cards
- Background: `bg-gradient-to-br from-white/5 to-white/[0.01]` (subtle glass on dark).
- Border: `border-white/[0.08]`. On hover: accent color at 40% opacity.
- Hover: `hover:-translate-y-[3px]` lift + shadow. Transition: `duration-200`.
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

### Dividers & Borders (3 opacity levels only)
| Level | Value | Usage |
|-------|-------|-------|
| Subtle | `white/[0.04]` | Dividers within cards |
| Default | `white/[0.08]` | Card borders, section dividers |
| Emphasis | `white/[0.12]` | Active states, form focus |

**Banned:** `white/[0.06]`, `white/[0.10]`, `white/[0.15]`

- Accent: 3px line in teal or gold for section emphasis.
- **No heavy borders.** Everything should feel refined and understated.

## Animation & Motion

### Transition Speeds (3 levels only)
| Speed | Duration | Easing | Usage |
|-------|----------|--------|-------|
| Fast | 150ms | `ease-out` | Hovers, color changes, opacity |
| Medium | 200ms | `ease-out` | Card lifts, state changes |
| Slow | 500ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Scroll reveals, page entrances |

**Banned:** 300ms, 350ms, 700ms durations

- **Hover lifts:** `translate-y` of -2px to -3px maximum. `duration-200`.
- **Page entry:** Subtle fade-in + slide-up for sections as they scroll into view. 500ms max.
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
