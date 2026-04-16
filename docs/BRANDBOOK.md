# מַכְתּוּבָה — Brandbook

> **מה שנכתב — כבר כתוב.**
> What is written — is already written.

Authoritative brand specification, derived from the first eight screens of the app (AnimatedSplash → Zodiac Reveal) and the production marketing site at `maktuba.app`. Everything downstream — app, web, social, print, store listings — derives from this document.

Version: v1 · 2026-04-16 · owner: KBR Global Ltd.

---

## 1 · Brand Essence

### One-liner
A thousand-year-old grandmother who sits in an eternal candle-lit room, reads the cup, the palm, the stars, and the soul — powered by AI trained on 46,000 books across 14 languages and 12 cultures.

### Core tension (the brand lives here)
**Mystical atmosphere × anti-mystical honesty.**
Candlelight, incense, hand-drawn gold ornaments — *but the first line Maktuba says to a new user is "אין כוחות־על. אין עין שלישית."* The mystique is aesthetic; the method is study.

### Three brand promises
1. **"לא באתי להחליף. באתי להמשיך."** — Honoring every reader who came before. The app does not replace grandmothers, tarot readers, kabbalists. It continues them.
2. **"קונים פעם אחת. משתמשים מתי שרוצים. אין תפוגה."** — Keys are forever. No daily drip, no stress mechanics.
3. **"מה שנכתוב בכוכבים"** — Every reading is framed as reading something already-there, not fabricating a prophecy.

### Voice in one paragraph
Hebrew-first. Feminine-leaning but gender-inclusive where the interaction is direct ("תביא/י", "קבלי/קבל"). Short declarative sentences. Poetic ornament in display text; plain honesty in disclaimers. Never shouts. Never uses emoji in body copy (emoji only in disclosure/legal screens to flag severity). When in doubt: write it like a grandmother who has stopped trying to impress anyone.

---

## 2 · Logo Mark

The Maktuba brandmark is a **flower of life / seven interlocking rings** sigil — gold on ink — drawn in an ornamental, kabbalistic-illuminated-manuscript style. Generated through brand-directed image synthesis (Flux), refined through 4 variants, committed on 2026-04-16.

### Canonical files

| Size | URL | Use |
|---|---|---|
| Master 1024 | `https://cdn.maktuba.app/brand/mark.webp` | App icon source, print, OG composites |
| 512 | `https://cdn.maktuba.app/brand/mark-512.webp` | Splash screens, curtain preloader, hero ornaments |
| 256 | `https://cdn.maktuba.app/brand/mark-256.webp` | Header, footer, inline within content |
| `favicon.svg` | `maktuba.app/favicon.svg` | Browser tab (embedded bitmap SVG) |
| `favicon.ico` | `maktuba.app/favicon.ico` | Legacy browser fallback (16/32/48/64) |
| `apple-touch-icon.png` | 180 × 180 | iOS home screen |
| `og-default.png` | 1200 × 630 | Social previews |

### Clear space & minimum size

- **Minimum render:** 16 px (favicon floor). Below this the sigil becomes illegible — use the wordmark alone.
- **Clear space:** no content within a radius equal to ¼ of the mark's width on every side.
- **With wordmark:** gap between mark and wordmark = ½ of the mark's height.

### Logo usage

```html
<!-- Web header -->
<a class="brand" href="/">
  <img src="https://cdn.maktuba.app/brand/mark-256.webp" alt="" width="32" height="32" />
  <span class="wordmark-latin">MAKTUBA</span>
</a>

<!-- Splash / hero moment -->
<img src="https://cdn.maktuba.app/brand/mark-512.webp" alt="מכתובה" width="160" height="160" />
```

### Logo "don'ts"

- ❌ **Never** recolor the sigil — it's gold on ink, only. No blue, no mono-white, no silver.
- ❌ **Never** place the mark on a white or bright background. If a surface must be light, use the wordmark alone, not the mark.
- ❌ **Never** crop, outline, invert, skew, or gradient-overlay the mark.
- ❌ **Never** stack text over the mark. Typography sits beside or beneath — never on top.
- ❌ **Never** animate the sigil itself (the sigil is static). The environment around it can breathe (halo, glow, fade).
- ❌ **Never** regenerate the mark with a new prompt. This is the committed artefact.

### Anti-AI-slop (for any visual work in this brand)

Before shipping a design surface, confirm NONE of these apply:

- [ ] Purple / lavender / neon / teal anywhere
- [ ] Generic Inter / Roboto / Arial body font
- [ ] Centered body prose
- [ ] Decorative "accent line" under every heading
- [ ] Full-width solid-color header or footer bars
- [ ] Generic card: icon + title + 2 lines of filler × 3
- [ ] Unicode emoji as UI chrome (⚡ ✨ 🔮) — we use custom SVG icons
- [ ] Spinner instead of skeleton for content loading
- [ ] Identical layout repeating across every section
- [ ] Star of David / hexagram used as ornament (the mark is already enough mystical signal)

---

## 3 · Naming & Wordmark

### The name

| Context | Form | Notes |
|---|---|---|
| Logo, hero title, splash wordmark | **מַכְתּוּבָה** | Full niqqud. Always. |
| In-body Hebrew prose | מכתובה | No niqqud in running sentences. |
| Latin | **Maktuba** | Title case. No acute accents, no macrons. |
| Latin display (tracked) | **M A K T U B A** | `letter-spacing: 0.28em` or `0.5em` for wordmark use. |
| Arabic | **مَكْتُوبَة** | Full tashkīl for logo; plain مكتوبة in body. |

**The niqqud is not optional on the logo.** Every character: מַ + כְ + תּ + וּ + בָ + ה. Never ship a logo render without these marks.

### Wordmark font — Hebrew
**Frank Ruhl Libre** (Black 900 for the logo, Bold 700 in headings).
Loaded everywhere via Google Fonts:

```html
<link
  rel="preconnect"
  href="https://fonts.gstatic.com"
  crossorigin
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;400;500;700;900&display=swap"
/>
```

```css
.wordmark-he {
  font-family: "Frank Ruhl Libre", "David", serif;
  font-weight: 900;
  letter-spacing: -0.01em;
  color: var(--gold);
  text-shadow: 0 0 60px rgba(212,165,116,0.35),
               0 0 120px rgba(212,165,116,0.12);
}
```

### Wordmark font — Latin
**Playfair Display** (website header) / **Cormorant Garamond** (app, elegant title screens). Playfair for bold confidence, Cormorant for intimate elegance. Never both on the same surface.

```css
.wordmark-latin {
  font-family: "Playfair Display", "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--gold);
}
```

### Minimum sizes & clear space
- **Mobile splash wordmark:** 64pt Hebrew / 44pt Latin.
- **Nav wordmark:** 18px Hebrew / 18px Latin tracked.
- **Minimum legible:** 14px (only in metadata contexts — favicons, OG images).
- **Clear space:** Always ½ × cap-height on every side. Never tighter.

### Logo "don'ts"
- ❌ The old fire-over-white-square icon logo (deprecated 2026-04-16). Never reintroduce.
- ❌ Don't render the wordmark outlined or drop-shadowed in any color but gold.
- ❌ Don't place the wordmark on a white background. The brand is gold-on-ink only.
- ❌ Don't stretch, skew, or rotate.
- ❌ Don't substitute the niqqud with a system Unicode variant that renders differently per font.

---

## 3 · Color System

The palette is two colors — **gold** and **ink** — with a parchment text scale between them. Every other color is derivative.

### Canonical tokens

| Token | Hex / RGBA | Role |
|---|---|---|
| `--ink` | `#0a0612` | Root background. Everything sits on this. |
| `--ink-deep` | `#050309` | Button text on gold, extreme contrast. |
| `--void` | `#060410` | Deepest vignette stop, preloaders. |
| `--surface` | `rgba(255,255,255,0.04)` | Glass card level 1. |
| `--surface-strong` | `rgba(255,255,255,0.06)` | Glass on-press / emphasis. |
| `--gold` | `#d4a574` | **The brand gold.** Dividers, buttons, accents, numbers. |
| `--gold-hi` | `#f1d694` | Highlight gold — emphasis words, stat numbers. |
| `--gold-light` | `#f4e4a0` | Pale gold — titles, delicate accents. |
| `--gold-dark` | `#b8860b` | Dark pole in gold gradients. |
| `--gold-logo` | `#c9a96e` | Kicker / small-caps text. |
| `--gold-soft` | `rgba(212,175,55,0.08)` | Softest gold tint (backgrounds). |
| `--hairline` | `rgba(212,165,116,0.15)` | Default divider stroke. |
| `--hairline-strong` | `rgba(212,165,116,0.35)` | Checkbox border, accented divider. |
| `--gold-glow` | `rgba(212,165,116,0.5)` | Button + medallion shadow. |
| `--parchment` | `#ebe3d3` | Primary body text. |
| `--parchment-alt` | `#f0e6d3` | Alternate body (slightly warmer). |
| `--parchment-dim` | `rgba(240,230,211,0.7)` | Secondary text. |
| `--parchment-faint` | `rgba(240,230,211,0.42)` | Tertiary — hints, colophons. |
| `--parchment-ghost` | `rgba(240,230,211,0.25)` | Disclosures, micro-copy. |
| `--danger` | `#c45d4e` | Error text only. |
| `--success` | `#6b8f71` | Very rare; live indicators. |
| `--emergency-bg` | `#2a0a0a` | **Only on disclaimer / crisis screens.** Do not use elsewhere. |

### Ready-to-paste `:root`

```css
:root {
  /* surfaces */
  --ink: #0a0612;
  --ink-deep: #050309;
  --void: #060410;
  --surface: rgba(255,255,255,0.04);
  --surface-strong: rgba(255,255,255,0.06);

  /* gold scale */
  --gold: #d4a574;
  --gold-hi: #f1d694;
  --gold-light: #f4e4a0;
  --gold-dark: #b8860b;
  --gold-logo: #c9a96e;
  --gold-soft: rgba(212,175,55,0.08);
  --gold-glow: rgba(212,165,116,0.5);

  /* hairlines */
  --hairline: rgba(212,165,116,0.15);
  --hairline-strong: rgba(212,165,116,0.35);

  /* text */
  --parchment: #ebe3d3;
  --parchment-alt: #f0e6d3;
  --parchment-dim: rgba(240,230,211,0.7);
  --parchment-faint: rgba(240,230,211,0.42);
  --parchment-ghost: rgba(240,230,211,0.25);

  /* status */
  --danger: #c45d4e;
  --success: #6b8f71;
  --emergency-bg: #2a0a0a;
}
```

### Do / Don't

| Do | Don't |
|---|---|
| Put gold on ink. | Put gold on white. |
| Keep gold under 15 % of any composition by area. | Flood gold backgrounds — it stops being premium. |
| Use the parchment scale for all text. | Use pure white `#fff` for text. |
| Fall back to ink-deep for text on gold buttons. | Put gold text on gold. |

### Banned colors
Purple, lavender, amethyst, neon, teal, baby-blue, hot-pink. If a screen needs "mystery", deepen the ink and add grain — don't add hue.

---

## 4 · Typography

### Type stack

| Role | Family | Weights used | Where |
|---|---|---|---|
| **Hebrew display / body (voice)** | Frank Ruhl Libre | 300, 400, 500, 700, **900** | Splash wordmark, hero titles, body prose, testimonial quotes. |
| **Latin display / accent** | Cormorant Garamond | 300, 400, 500, 600 | Kickers, small caps, Latin titles in app. |
| **Latin display (web)** | Playfair Display | 700, 900 | Website "MAKTUBA" wordmark in nav. |
| **Italic serif (tagline)** | Cormorant Garamond *italic* | 400i, 500i | Taglines, pull quotes. |
| **Hebrew UI (legal labels only)** | Heebo | 400, 500, 700 | Checkbox labels, disclaimer running text. |
| **Hebrew body fallback** | Noto Serif Hebrew | 400, 500, 600 | Arabic script support, RN fallback. |
| **System / numeric** | Inter | 400, 500, 600 | Latin captions, kickers in app. |
| **Mono** | Menlo / ui-monospace | 400 | Code snippets, developer surfaces only. |

### Google Fonts loader (web)

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Frank+Ruhl+Libre:wght@300;400;500;700;900&family=Heebo:wght@300;400;500;700&family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

### Expo fonts (app)
Loaded in `app/_layout.tsx`: `FrankRuhlLibre_400/500/700/900`, `CormorantGaramond_300/400/500/600`, `Inter_300/400/500/600`, `Heebo_300/400/500/700`, `NotoSerifHebrew_400/500/600`. See the file for canonical `useFonts()` call.

### Scale

| Token | px / pt | Usage |
|---|---|---|
| `hero-mega` | 11rem (mobile ~5rem) | Hero "מַכְתּוּבָה" on landing hero. |
| `hero` | 72pt / 4.5rem | Stat numbers (46,000+), "אני קוראת". |
| `display` | 48pt / 3rem | Section `<h2>`, vow numerals. |
| `title` | 22pt / 1.4rem | Card titles, vow titles. |
| `heading` | 18pt / 1.15rem | Sub-section labels. |
| `subheading` | 16pt / 1rem | Intro paragraphs. |
| `body` | 15–17pt / 0.95–1.05rem | Default prose. |
| `caption` | 12–13pt | Hints, metadata. |
| `label` | 11pt | Kickers (always UPPERCASE, 0.45em tracked). |
| `micro` | 9–10pt | Colophons, disclosures. |

### Ready-to-paste type presets

```css
h1, .display-1 {
  font-family: "Frank Ruhl Libre", serif;
  font-weight: 900;
  font-size: clamp(5rem, 16vw, 11rem);
  line-height: 0.85;
  letter-spacing: -0.02em;
  color: var(--gold);
  text-shadow: 0 0 60px rgba(212,165,116,0.3),
               0 0 120px rgba(212,165,116,0.1);
}

h2 {
  font-family: "Frank Ruhl Libre", serif;
  font-weight: 700;
  font-size: clamp(3rem, 8vw, 5.5rem);
  line-height: 0.95;
  letter-spacing: -0.02em;
  color: var(--gold);
}

.tagline {
  font-family: "Cormorant Garamond", serif;
  font-style: italic;
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.8rem);
  color: var(--gold-light);
  letter-spacing: 0.04em;
}

.body {
  font-family: "Frank Ruhl Libre", serif;
  font-weight: 400;
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--parchment);
}

.kicker {
  font-family: "Cormorant Garamond", "Inter", sans-serif;
  font-weight: 300;
  font-size: 0.72rem;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  color: var(--gold-logo);
}
```

### RTL rules
- Every Hebrew block: `direction: rtl; text-align: right;` (or `center` for hero).
- Mixed Hebrew+Latin: wrap Latin in `<span dir="ltr">` to prevent number-string reversal.
- Input placeholders for Latin-format dates (`DD / MM / YYYY`): `direction: ltr` explicitly.
- Buttons with icon+text in Hebrew: `flex-direction: row-reverse` so the arrow sits on the *leading* (left) edge.

### Hebrew typographic details that matter
- Use curly Hebrew quotes: `׳ ׳` and `״ ״`. Never `" "` for Hebrew.
- Em-dashes: `—` (U+2014). Never `-- -`.
- Don't italicize Hebrew body copy — Hebrew has no italic tradition, it just slants and looks cheap.
- Hebrew line-height wants to breathe: 1.7–1.8 for prose, 1.3 for display.
- `allowFontScaling={false}` in RN on all wordmarks / hero display — never let OS accessibility scaling deform the logo.

---

## 5 · Spacing & Radius

### Spacing — 4pt scale

| Token | px |
|---|---|
| `xs` | 4 |
| `sm` | 8 |
| `md` | 12 |
| `base` | 16 |
| `lg` | 20 |
| `xl` | 24 |
| `2xl` | 32 |
| `3xl` | 40 |
| `4xl` | 56 |

Horizontal content padding on pages: **24–32 px mobile / 32–64 px desktop** via `clamp(1.5rem, 5vw, 4rem)`.

### Radius

| Token | px | Usage |
|---|---|---|
| `xs` | 6 | Minimal corners. |
| `sm` | 10 | Subtle curves (checkbox is 3–4). |
| `md` | 12 | Cards. |
| `lg` | 14 | UI elements. |
| `xl` | 18 | Large cards. |
| `2xl` | 24 | Emphasis blocks. |
| `pill` | 9999 | Buttons. Always. |
| `circle` | 50% | Avatars, medallion. |

**Inputs have no radius** — they are underline-only (see §9).

---

## 6 · Shadows & Glow

The brand has exactly one glow recipe: **gold light on a distant ink surface.**

```css
.gold-glow {
  box-shadow: 0 0 30px rgba(212, 165, 116, 0.15);
}
.gold-glow-strong {
  box-shadow: 0 8px 50px rgba(212, 165, 116, 0.30);
}
.text-gold-glow {
  text-shadow: 0 0 40px rgba(212, 165, 116, 0.15);
}
```

For RN (app):
```js
const goldGlow = {
  shadowColor: '#d4a574',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.4,
  shadowRadius: 14,
  elevation: 8,
};
```

Text over a portrait backdrop always needs the ink shadow for legibility:
```css
.on-portrait {
  text-shadow: 0 2px 12px rgba(0,0,0,0.85);
}
```

---

## 7 · Gradients

Five named gradients. Never invent a sixth without pairing.

```css
/* primary button */
background: linear-gradient(135deg, #d4a574, #c49560);

/* hero ink wash */
background:
  linear-gradient(to top, var(--void) 0%, transparent 50%),
  linear-gradient(to right, var(--void) 0%, rgba(6,4,16,0.4) 50%, transparent 100%),
  radial-gradient(ellipse at 30% 80%, rgba(212,165,116,0.08), transparent 60%);

/* stats band */
background: linear-gradient(180deg, #0a0618, #10091e, #0a0618);

/* pricing halo */
background: radial-gradient(circle, rgba(212,165,116,0.15), transparent 70%);

/* rich gold (wordmark fills, medallion glyphs) */
background: linear-gradient(
  to bottom-right,
  #b8860b 0%, #d4a574 40%, #f4e4a0 70%, #b8860b 100%
);
```

---

## 8 · Motion

### Timing tokens (ms)

| Token | Value | Use |
|---|---|---|
| `instant` | 120 | Checkbox tap, toggle. |
| `fast` | 240 | Hover, press feedback. |
| `base` | 400 | Standard transition. |
| `slow` | 700 | Fade-up of hero elements. |
| `breath` | 2 400 | Pulsing glow cycle. |
| `shimmer` | 2 500 | Gold rule shimmer. |
| `ripple` | 10 000 | Portrait scrying loop. |

### Easings

```css
--easing-enter: cubic-bezier(0.22, 1, 0.36, 1);  /* title / hero entrance */
--easing-out:   cubic-bezier(0.4, 0, 0.2, 1);     /* progress bars */
--easing-spring: cubic-bezier(0.4, 1.4, 0.6, 1);  /* checkbox elastic */
```

### Signature animations

#### 8.1 Curtain preloader (first visit only)
Ritual reveal before entering the hero. Lives on the homepage, gated behind `sessionStorage['maktuba:curtain']` so it plays exactly once per session.

```css
#curtain { position: fixed; inset: 0; z-index: 10000; background: var(--ink);
           display: flex; align-items: center; justify-content: center; }
#curtain .wordmark { opacity: 0; animation: curtain-word 3s .5s ease forwards; }
#curtain.lift .eyes { transform: scale(1.3); filter: brightness(0.3) saturate(0); }
#curtain.gone { opacity: 0; visibility: hidden; transition: opacity .8s; }

@keyframes curtain-word {
  0%   { opacity: 0; transform: scale(.9); filter: blur(10px); }
  50%  { opacity: 1; transform: scale(1);  filter: blur(0); }
  100% { opacity: 1; }
}
```
Timing: hold 2.8 s → lift → 5.2 s total → gone.

#### 8.2 Scrying ripple (app portraits)
Three-layer portrait stack. Base portrait + two ghost layers drift on sine waves with 10 s period, opposite phase, `opacity: 0.4/0.6`. Gives the surface a "water-being-read" feel without photographic realism.

#### 8.3 Fade-up reveal (content on scroll)
```css
.reveal { opacity: 0; transform: translateY(40px);
          transition: opacity 1s var(--easing-enter),
                      transform 1s var(--easing-enter);
          transition-delay: var(--delay, 0s); }
.reveal.visible { opacity: 1; transform: none; }
```
Wire up with IntersectionObserver at `threshold: 0.12`, `rootMargin: '0 0 -60px 0'`.

#### 8.4 Halo breathing (zodiac medallion)
Three concentric gold hairline rings at **prime-offset tempos** — 2 300 ms / 3 100 ms / 4 100 ms — so they never re-sync. Scales 1.0 → 1.025–1.04. Feels alive, never mechanical.

#### 8.5 Staggered cascade (Berit / Covenant)
Title → kicker → body → vow 1 → vow 2 → vow 3 → divider → CTA. Each element: `fadeUp 680ms var(--easing-enter)`, stagger **120–180 ms** between.

### Motion "don'ts"
- ❌ No bounce overshoots on navigation.
- ❌ No parallax on mobile (performance + accessibility).
- ❌ No full-page fades between internal pages. Instant route change.
- ❌ No rotating/spinning loaders. If you must, use a gold hairline bar (see curtain).

---

## 9 · Components (CSS recipes)

### 9.1 Primary button

```css
.btn-primary {
  display: inline-flex; align-items: center; gap: 0.6rem;
  padding: 1rem 2.2rem;
  background: linear-gradient(135deg, var(--gold), #c49560);
  color: var(--ink-deep);
  font-weight: 600; font-size: 0.85rem;
  letter-spacing: 0.15em; text-transform: uppercase;
  text-decoration: none;
  border: 0; border-radius: 9999px;
  box-shadow: 0 0 30px var(--gold-soft);
  transition: transform .3s, box-shadow .3s;
  position: relative; overflow: hidden;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 50px rgba(212,165,116,0.3);
}
/* shine sweep */
.btn-primary::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
  transform: translateX(-100%);
  transition: transform .5s;
}
.btn-primary:hover::after { transform: translateX(100%); }
.btn-primary:disabled {
  background: var(--hairline);
  color: var(--parchment-faint);
  box-shadow: none;
  cursor: not-allowed;
}
```

### 9.2 Secondary button

```css
.btn-secondary {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 1rem 2rem;
  border: 1px solid var(--hairline-strong);
  color: var(--gold);
  font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase;
  background: transparent;
  border-radius: 9999px;
  text-decoration: none;
  transition: border-color .3s, background .3s, transform .3s;
}
.btn-secondary:hover {
  border-color: var(--gold);
  background: rgba(212,165,116,0.08);
  transform: translateY(-2px);
}
```

### 9.3 Ghost / text button
Just `color: var(--gold); text-decoration: none; letter-spacing: 0.15em; text-transform: uppercase;` with a subtle underline on hover.

### 9.4 Input (underline-only — it is the brand's input)

```css
.field {
  display: flex; flex-direction: column; gap: 6px;
  margin-bottom: 28px;
}
.field label {
  font-family: "Cormorant Garamond", serif;
  font-style: italic;
  font-size: 15px;
  letter-spacing: 0.6px;
  color: var(--gold);
}
.field input {
  font-family: "Frank Ruhl Libre", serif;
  font-size: 20px;
  color: var(--parchment);
  background: transparent;
  border: 0;
  border-bottom: 1px solid var(--hairline-strong);
  padding: 8px 0;
  outline: none;
  text-align: right;        /* Hebrew */
}
.field input::placeholder { color: var(--parchment-ghost); }
.field input:focus { border-bottom-color: var(--gold); }
```

### 9.5 Testimonial / review card (website)

```css
.review {
  position: relative;
  border: 1px solid var(--hairline);
  background: var(--surface);
  padding: 2.5rem 2rem;
  transition: border-color .3s, transform .3s;
}
.review:hover { border-color: var(--hairline-strong); transform: translateY(-4px); }
.review::before {
  content: '"';
  position: absolute; inset-inline-end: 1.5rem; top: 1rem;
  font-family: "Cormorant Garamond", serif;
  font-size: 6rem; line-height: 1;
  color: rgba(212,165,116,0.08);
}
.review-header { display: flex; gap: 0.8rem; align-items: center; margin-bottom: 1.5rem; }
.review-avatar {
  width: 44px; height: 44px; border-radius: 50%; flex-shrink: 0;
  background: linear-gradient(135deg, var(--gold-dark), var(--gold));
  color: var(--ink-deep); font-weight: 700; font-size: 0.75rem;
  display: flex; align-items: center; justify-content: center;
}
.review-stars { color: var(--gold); letter-spacing: 0.1em; }
.review blockquote { font-size: 1.05rem; line-height: 1.65; color: var(--parchment-dim); }
.review-footer {
  display: flex; justify-content: space-between;
  padding-top: 1rem; margin-top: 1.5rem;
  border-top: 1px solid var(--hairline);
  font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase;
}
```

### 9.6 Gold hairline divider

```css
.divider {
  height: 1px;
  max-width: 800px; margin: 3rem auto;
  background: linear-gradient(to right, transparent, var(--hairline-strong) 50%, transparent);
  position: relative;
}
.divider::after {
  content: ''; position: absolute; top: 50%; left: 50%;
  width: 20px; height: 20px;
  transform: translate(-50%,-50%) rotate(45deg);
  border: 1px solid var(--hairline-strong);
  background: var(--ink);
}
```

### 9.7 Section label / kicker

```css
.section-label {
  display: inline-block;
  font-family: "Cormorant Garamond", serif;
  font-weight: 300;
  font-size: 0.72rem;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  color: var(--gold-logo);
  padding-inline-start: 2.5rem;
  position: relative;
  margin-bottom: 1.5rem;
}
.section-label::before {
  content: '';
  position: absolute; top: 50%; inset-inline-start: 0;
  width: 1.8rem; height: 1px;
  background: var(--gold-logo);
}
```

### 9.8 Gold checkbox (consent / vow)

```css
.gold-check {
  width: 24px; height: 24px; border: 1.2px solid var(--gold); border-radius: 3px;
  display: inline-flex; align-items: center; justify-content: center;
  background: transparent;
  transition: background .28s cubic-bezier(0.4,1.4,0.6,1);
  cursor: pointer;
}
.gold-check[aria-checked="true"] { background: var(--gold); }
.gold-check svg { opacity: 0; transition: opacity .2s .1s; }
.gold-check[aria-checked="true"] svg { opacity: 1; }
```
SVG tick: `<path d="M2 6 L5 9 L10 3" fill="none" stroke="#050309" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`

### 9.9 Image frame (portrait cards)

```css
.image-frame { position: relative; padding: 12px; background: var(--surface);
               box-shadow: 0 30px 80px rgba(0,0,0,0.5); }
.image-frame img { display: block; width: 100%; filter: saturate(0.85) contrast(1.05);
                   transition: filter .6s; }
.image-frame:hover img { filter: none; }
.image-frame .corner {
  position: absolute; width: 30px; height: 30px; border: 1px solid var(--hairline-strong);
}
.image-frame .corner.tl { top: -6px; inset-inline-start: -6px;
                          border-inline-end: 0; border-block-end: 0; }
.image-frame .corner.br { bottom: -6px; inset-inline-end: -6px;
                          border-inline-start: 0; border-block-start: 0; }
```

---

## 10 · Icons (CANONICAL)

The website icon set (`src/components/Icon.astro`) is the **final, approved** icon system for every surface — app, web, print. Thin 1.25 stroke, round line-caps, no fill, 24 × 24 viewBox.

### Base SVG template

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
     width="24" height="24"
     fill="none" stroke="currentColor" stroke-width="1.25"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <!-- paths here -->
</svg>
```

### All 21 icons (path data)

> Paste the inner paths into the template above, or use the Astro component `<Icon name="…" />`.

| Name | Meaning | Inner paths |
|---|---|---|
| `key` | Keys currency | `<circle cx="7.5" cy="12" r="3.5"/><path d="M11 12 H22"/><path d="M17 12 V16"/><path d="M20 12 V15"/><circle cx="7.5" cy="12" r="0.9" fill="currentColor"/>` |
| `coffee` | Coffee reading | `<path d="M5 8 H17 V16 C17 18 15 20 12 20 H11 C8 20 5 18 5 16 V8 Z"/><path d="M17 10 H19.5 C20.3 10 21 10.7 21 11.5 V13.5 C21 14.3 20.3 15 19.5 15 H17"/><path d="M9 3 C9 4 8 4.5 8 5.5 C8 6.5 9 7 9 8"/><path d="M13 3 C13 4 12 4.5 12 5.5 C12 6.5 13 7 13 8"/>` |
| `palm` | Palm reading | `<path d="M12 21 C8 21 5 18 5 14 V9 C5 8 6 7 7 7 C8 7 8.5 8 8.5 9 V11"/><path d="M8.5 11 V5 C8.5 4 9.3 3.2 10.2 3.2 C11 3.2 11.8 4 11.8 5 V11"/><path d="M11.8 11 V4.5 C11.8 3.5 12.6 2.8 13.4 2.8 C14.3 2.8 15 3.5 15 4.5 V12"/><path d="M15 12 V6.5 C15 5.5 15.8 5 16.5 5 C17.3 5 18 5.5 18 6.5 V14 C18 18 15.5 21 12 21"/>` |
| `tarot` | Tarot reading | `<path d="M7 3 C7 2 7.5 2 8 2 H16 C16.5 2 17 2.5 17 3 V20 C17 21 16.5 22 15 22 H9 C7.5 22 7 21 7 20 V3 Z"/><path d="M12 6 L13.3 9.3 L16.5 9.7 L14 12 L14.8 15.3 L12 13.5 L9.2 15.3 L10 12 L7.5 9.7 L10.7 9.3 Z"/>` |
| `eye` | Clarity / sight | `<path d="M2 12 C5 6 8 4 12 4 C16 4 19 6 22 12 C19 18 16 20 12 20 C8 20 5 18 2 12 Z"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="0.8" fill="currentColor"/>` |
| `candle` | Ritual / room | `<path d="M12 3 C13 5 14.5 6 14.5 8 C14.5 9.5 13.4 10.5 12 10.5 C10.6 10.5 9.5 9.5 9.5 8 C9.5 6 11 5 12 3 Z"/><rect x="9" y="11" width="6" height="9" rx="0.5"/><path d="M8 20 H16"/><path d="M10 14 L14 14" stroke-opacity="0.4"/>` |
| `moon` | Dreams / night | `<path d="M18 14 C18 17.8 14.8 21 11 21 C7.2 21 4 17.8 4 14 C4 10.2 7 7 10.5 7 C10.5 10 13 12.5 16 12.5 C16.8 12.5 17.5 12.4 18 12.2 C18 12.8 18 13.4 18 14 Z"/><circle cx="19" cy="6" r="0.8" fill="currentColor"/><circle cx="15" cy="4" r="0.6" fill="currentColor"/><circle cx="21" cy="10" r="0.5" fill="currentColor"/>` |
| `six-star` | Star-of-David structure | `<path d="M12 2 L18 12 L12 22 L6 12 Z"/><path d="M2 12 L22 12"/><path d="M12 2 L12 22" stroke-opacity="0.3"/>` |
| `hexagram` | Hexagram overlay | `<path d="M12 2 L21 18 H3 Z"/><path d="M12 22 L3 6 H21 Z"/>` |
| `crystal` | Crystals reading | `<path d="M12 2 L18 9 L14 21 L10 21 L6 9 Z"/><path d="M6 9 H18"/><path d="M10 21 L12 9 L14 21"/>` |
| `book` | Academy / Tehillim | `<path d="M4 4 C4 3 5 2.5 6 2.5 H11 V19 H6 C5 19 4 18.5 4 17.5 Z"/><path d="M20 4 C20 3 19 2.5 18 2.5 H13 V19 H18 C19 19 20 18.5 20 17.5 Z"/><path d="M3 19 H21 V21 C21 21.5 20.5 22 20 22 H4 C3.5 22 3 21.5 3 21 Z"/>` |
| `scroll` | Old texts | `<path d="M5 4 H17 C18.5 4 20 5 20 7 C20 8.5 18.7 9.5 17.5 9.5"/><path d="M17 4 V18 C17 19.5 16 21 14 21"/><path d="M14 21 H7 C5.5 21 4 19.5 4 18 V8 C4 6.5 5.5 5 7 5"/><path d="M8 10 H13 M8 13 H13 M8 16 H12" stroke-opacity="0.5"/>` |
| `hand` | Hand / blessing | `<path d="M7 11 V6.5 C7 5.5 7.8 4.8 8.7 4.8 C9.6 4.8 10.3 5.5 10.3 6.5 V11"/><path d="M10.3 11 V4 C10.3 3 11.1 2.3 12 2.3 C12.9 2.3 13.7 3 13.7 4 V11"/><path d="M13.7 11 V5 C13.7 4 14.5 3.5 15.3 3.5 C16.2 3.5 17 4 17 5 V13"/><path d="M17 13 V9 C17 8 17.8 7.5 18.5 7.5 C19.3 7.5 20 8 20 9 V16 C20 19 17 22 13 22 H12 C8 22 5 19 5 15 V11 C5 10 5.8 9.3 6.7 9.3 C7.5 9.3 8 10 8 11 V14"/>` |
| `heart` | Love / compatibility | `<path d="M12 21 C8 18 3 14 3 9 C3 6 5 4 7.5 4 C9.5 4 11 5 12 6.5 C13 5 14.5 4 16.5 4 C19 4 21 6 21 9 C21 14 16 18 12 21 Z"/>` |
| `wheel` | Wheel of Fortune | `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3 V9 M12 15 V21 M3 12 H9 M15 12 H21"/><path d="M5.6 5.6 L9.2 9.2 M14.8 14.8 L18.4 18.4 M18.4 5.6 L14.8 9.2 M5.6 18.4 L9.2 14.8" stroke-opacity="0.5"/>` |
| `number` | Numerology | `<circle cx="12" cy="12" r="9"/><path d="M10 8 L12 7 L12 16" stroke-width="1.5"/><path d="M10 16 H14"/>` |
| `letter-beth` | Kabbalah / Hebrew letters | `<path d="M5 5 H17 C18 5 19 6 19 7 V16 C19 17 18 18 17 18 H5"/><path d="M5 5 V20 M5 20 H19" stroke-opacity="0.3"/>` |
| `chat` | Conversation with Maktuba | `<path d="M4 6 C4 4.5 5 4 6 4 H18 C19.5 4 20 5 20 6 V15 C20 16.5 19 17 18 17 H9 L5 20.5 V17 C4.5 17 4 16.5 4 15 Z"/><path d="M8 9 H16 M8 12 H13" stroke-opacity="0.5"/>` |
| `infinity` | Forever / no expiry | `<path d="M7 12 C7 9 9 8 10.5 9 C12 10 13 14 14.5 15 C16 16 18 15 18 12 C18 9 16 8 14.5 9 C13 10 12 14 10.5 15 C9 16 7 15 7 12 Z"/>` |
| `arrow-up` | Elevate / raise | `<path d="M12 20 V4 M5 11 L12 4 L19 11"/>` |
| `arrow-down` | Descend / open | `<path d="M12 4 V20 M5 13 L12 20 L19 13"/>` |
| `spark` | Blessing / small gift | `<path d="M12 2 V8 M12 16 V22 M2 12 H8 M16 12 H22"/><path d="M5 5 L8.5 8.5 M15.5 15.5 L19 19 M5 19 L8.5 15.5 M15.5 8.5 L19 5" stroke-opacity="0.5"/>` |

### Icon usage rules
- Stroke always **1.25** in `viewBox="0 0 24 24"`. Scale the `width/height`, never change the stroke.
- `stroke="currentColor"` — never hard-code the stroke color; control via parent `color`.
- Icons in buttons get **16–20 px**, in cards **24 px**, in hero-like orbits **48–64 px**.
- Pair gold stroke (`color: var(--gold)`) with ink surface. Never reverse.
- Never combine two icons into a single glyph — they read as one if they must (`six-star` already has a built-in cross).

---

## 11 · Zodiac Glyphs (12 hand-drawn signs)

Canonical astrology ligatures, drawn from scratch — never Unicode (♈ etc.) and never emoji (♌). The glyph is the **dominant visual identifier** on the Zodiac Reveal screen. 64 × 64 viewBox, multi-stop gold gradient stroke, no fill, round caps.

### Gold gradient definition (reuse this `<defs>`)

```xml
<defs>
  <linearGradient id="gold-glyph" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0"   stop-color="#b8860b"/>
    <stop offset="0.4" stop-color="#d4a574"/>
    <stop offset="0.7" stop-color="#f4e4a0"/>
    <stop offset="1"   stop-color="#b8860b"/>
  </linearGradient>
</defs>
```

Stroke used by every glyph: `stroke="url(#gold-glyph)" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"`. Circles in Taurus/Cancer/Leo use width 3–3.5.

### 11.1 · Aries — ♈ · טלה
```xml
<path d="M32 16 L32 52 M32 16 C 32 8 24 8 18 14 C 14 18 16 22 20 20 M32 16 C 32 8 40 8 46 14 C 50 18 48 22 44 20"/>
```

### 11.2 · Taurus — ♉ · שור
```xml
<circle cx="32" cy="42" r="12"/>
<path d="M14 22 C 14 22 22 32 32 32 C 42 32 50 22 50 22"/>
```

### 11.3 · Gemini — ♊ · תאומים
```xml
<path d="M16 14 L48 14 M16 50 L48 50 M22 14 L22 50 M42 14 L42 50"/>
```

### 11.4 · Cancer — ♋ · סרטן
```xml
<path d="M14 22 C 14 14 22 12 32 12 C 42 12 50 14 50 22"/>
<path d="M50 42 C 50 50 42 52 32 52 C 22 52 14 50 14 42"/>
<circle cx="20" cy="22" r="5" stroke-width="3"/>
<circle cx="44" cy="42" r="5" stroke-width="3"/>
```

### 11.5 · Leo — ♌ · אריה
```xml
<circle cx="22" cy="28" r="10"/>
<path d="M32 28 C 36 22 44 22 48 26 C 52 30 50 38 46 42 C 42 46 36 46 34 42 C 32 38 36 36 38 38" stroke-width="3.5"/>
```

### 11.6 · Virgo — ♍ · בתולה
```xml
<path d="M14 14 L14 50 M14 14 L24 50 L24 14 L34 50 L34 14 L44 50" stroke-width="3.5"/>
<path d="M44 50 C 50 46 50 38 46 36" stroke-width="3.5"/>
```

### 11.7 · Libra — ♎ · מאזניים
```xml
<path d="M10 50 L54 50 M16 38 L48 38"/>
<path d="M16 38 C 16 26 22 18 32 18 C 42 18 48 26 48 38"/>
```

### 11.8 · Scorpio — ♏ · עקרב
```xml
<path d="M10 14 L10 50 M10 14 L20 50 L20 14 L30 50 L30 14 L40 50" stroke-width="3.5"/>
<path d="M40 50 L48 42 L52 46 L54 38" stroke-width="3.5"/>
```

### 11.9 · Sagittarius — ♐ · קשת
```xml
<path d="M12 52 L52 12"/>
<path d="M40 12 L52 12 L52 24"/>
<path d="M22 30 L34 42" stroke-width="3"/>
```

### 11.10 · Capricorn — ♑ · גדי
```xml
<path d="M12 18 C 12 18 16 36 26 36 C 32 36 32 28 36 28 C 40 28 42 36 42 42" stroke-width="3.5"/>
<path d="M42 42 C 42 50 50 50 50 42 C 50 38 46 36 42 36 C 50 36 54 32 54 28" stroke-width="3.5"/>
```

### 11.11 · Aquarius — ♒ · דלי
```xml
<path d="M10 24 L18 18 L26 24 L34 18 L42 24 L50 18 L54 22" stroke-width="3.5"/>
<path d="M10 40 L18 34 L26 40 L34 34 L42 40 L50 34 L54 38" stroke-width="3.5"/>
```

### 11.12 · Pisces — ♓ · דגים
```xml
<path d="M14 14 C 24 22 24 42 14 50" stroke-width="3.5"/>
<path d="M50 14 C 40 22 40 42 50 50" stroke-width="3.5"/>
<path d="M16 32 L48 32" stroke-width="3"/>
```

### Reveal medallion (zodiac context)

```css
.medallion {
  width: min(62vw, 280px); aspect-ratio: 1;
  border-radius: 50%;
  border: 1.2px solid var(--gold);
  background: rgba(10,6,18,0.7);
  display: grid; place-items: center;
  position: relative;
  box-shadow: 0 0 60px rgba(212,165,116,0.35);
}
.medallion::before,
.medallion::after {
  content: ''; position: absolute; inset: -6%;
  border-radius: 50%; border: 1px solid var(--hairline);
  animation: halo 3.1s ease-in-out infinite alternate;
}
.medallion::after { inset: -18%; animation-duration: 4.1s; }
@keyframes halo { from { transform: scale(1); } to { transform: scale(1.025); } }
```

Prime-offset tempos (2.3 / 3.1 / 4.1 s) prevent the rings from ever re-syncing — that's the "breath". Don't normalize them.

### Hebrew sign names (canonical)

| Sign | Hebrew | English | Latin |
|---|---|---|---|
| Aries | טלה | Aries | Aries |
| Taurus | שור | Taurus | Taurus |
| Gemini | תאומים | Gemini | Gemini |
| Cancer | סרטן | Cancer | Cancer |
| Leo | אריה | Leo | Leo |
| Virgo | בתולה | Virgo | Virgo |
| Libra | מאזניים | Libra | Libra |
| Scorpio | עקרב | Scorpio | Scorpio |
| Sagittarius | קשת | Sagittarius | Sagittarius |
| Capricorn | גדי | Capricorn | Capricorn |
| Aquarius | דלי | Aquarius | Aquarius |
| Pisces | דגים | Pisces | Pisces |

Reveal headline pattern (Hebrew): `את בת מזל {sign}` / `אתה בן מזל {sign}`.

---

## 12 · Imagery

Maktuba has an asset library of ~250 illustrations (`maktuba_visual_library/`) shot and curated as a single continuous world: one grandmother, one eternal room, one lit candle. Every image must feel like it could cut into the same film as every other.

### Asset library at a glance

| Folder | Count | Purpose |
|---|---|---|
| `01_app_ui` | 15 | App-state screens (splash, home, paywall, empty, error…) |
| `02_coffee_reading` | 12 | Cup moments (receiving, studying, flipping, pouring foam) |
| `03_tarot_scenes` | 10 | Table shuffles, reveals |
| `04_tarot_major_arcana` | 17 | Maktuba in the atmosphere of each Major Arcana card |
| `05_tarot_maktuba_with_cards` | 23 | Maktuba holding each custom card (Major Arcana set) |
| `06_tarot_custom_cards_original` | 23 | The deck itself, card fronts + back |
| `07_palm_reading` | 6 | Hands, lines, close-ups |
| `08_zodiac` | 12 | One portrait per sign |
| `09_emotions` | 10 | Laugh, warning, knowing smile, tears |
| `10_rituals` | 10 | Candles, incense, table dressings |
| `11_social_media` | 15 | IG/TikTok templates — gold frame, ornament |
| `12_tehillim` | 4 | Book, scroll, hand on book |
| `13_dreams` | 4 | Silhouettes, moon, shadow |
| `14_seasons_holidays` | 8 | Seasonal atmospheres |
| `15_marketing` | 4 | Paid-ad hero frames |
| `16_tarot_shots_50` | 50 | Detailed tarot spreads |
| `17_original_25_portraits` | 27 | Hero portraits + references |

### Image treatment

Every photograph passes through the same wash before shipping:

```css
.brand-image {
  filter: saturate(0.85) contrast(1.05);
  transition: filter .6s;
}
.brand-image:hover { filter: saturate(1) contrast(1); }

.brand-image--portrait-bg {
  /* how portraits appear behind hero text */
  filter: brightness(0.55) contrast(1.15) saturate(0.85);
}
```

Vignette on hero sections:
```css
.hero-bg::after {
  content: ''; position: absolute; inset: 0;
  background:
    linear-gradient(to top,   var(--void) 0%, transparent 50%),
    linear-gradient(to right, var(--void) 0%, rgba(6,4,16,0.4) 50%, transparent 100%),
    radial-gradient(ellipse at 30% 80%, rgba(212,165,116,0.08), transparent 60%);
  pointer-events: none;
}
```

### Grain overlay (brand-wide)

```css
body::after {
  content: ''; position: fixed; inset: 0; z-index: 9999;
  pointer-events: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/></svg>");
}
```

### Imagery "don'ts"
- ❌ Stock photography of any kind.
- ❌ AI-generated "mystical woman" images outside the Maktuba character set.
- ❌ Images with people looking at the camera wearing contemporary logos.
- ❌ Oversaturated versions — the world is candle-lit, not Instagram-gold.
- ❌ White or bright backgrounds behind Maktuba.

### CloudFront CDN (web)
```
https://d2xsxph8kpxj0f.cloudfront.net/310519663492248962/ToDf6mmxTX6kSgXA8csfFX/
```
All website images are `.webp`. Always `loading="lazy"` except the hero image, which is `loading="eager" fetchpriority="high"`.

---

## 13 · Voice & Tone

### Brand voice (on a spectrum)

| Axis | Lean | Not |
|---|---|---|
| Sincere ↔ Ironic | **Sincere** | Ironic (never winks at the mystical) |
| Warm ↔ Cool | **Warm** | Cold / clinical |
| Direct ↔ Ornate | **Direct in substance, ornate in cadence** | Verbose or salesy |
| Mystical ↔ Grounded | **Mystical atmosphere, grounded statement** | Woo-woo |
| Formal ↔ Intimate | **Intimate** | Corporate |
| Authoritative ↔ Questioning | **Quietly authoritative** | Hyperbolic |

### Core phrases (use verbatim)
- **"מה שנכתב — כבר כתוב."** — the tagline. Always with the em-dash.
- **"לא באתי להחליף. באתי להמשיך."** — the honor clause (Covenant screen).
- **"אין כוחות־על. אין עין שלישית."** — the honesty opener.
- **"אני לא רק למדתי את הכל. אני גם זוכרת את הכל."** — the scale promise.
- **"אני קוראת. כי הכל כתוב."** — the method.
- **"כי זה כבר נכתב"** — do not use. (Older variant. Use the em-dash form.)

### Hebrew writing conventions
- Short lines in hero copy — never wrap a title across more than 2 lines at desktop.
- Commas are OK, exclamation marks are not. Never `!!`.
- Keep numbers Arabic (`46,000`) — they render cleaner than Hebrew gematria in display sizes.
- Gender-inclusive imperative: `תביא/י`, `קבל/י`, `גלה/גלי`. Feminine default for invocations, because Maktuba speaks *to* the reader and the character is feminine (so "את" is natural); inclusive form only when the CTA is imperative to the user.
- Hebrew numerals with Hebrew words: "שלוש שבועות" (three vows), not "3 שבועות".

### English writing conventions
- Small-caps treatment for brand drops: `T H E   C O V E N A N T   ·   V O L   I I`.
- Title Case for section titles.
- Never ALL CAPS for prose — only for label-style UI (tiny kickers).

### Disclaimers & AI disclosure
Always present these, in this order:
1. AI-based tool for entertainment/self-reflection.
2. Not a replacement for: medical, mental-health, legal, financial advice.
3. Crisis hotline numbers per locale.

These appear on: first-run disclaimer screen, persistent legal footer, Covenant screen, any long-form chat surface.

Template in Hebrew:
> מכתובה היא כלי בידורי המבוסס על בינה מלאכותית (AI). אין כוחות על-טבעיים. אין נבואה. אין קסם.

---

## 14 · Layout Principles

### Grid & breakpoints

| Breakpoint | Width | Content max-width |
|---|---|---|
| mobile | ≤ 640 px | 100 vw – 3 rem |
| tablet | 641 – 1024 px | 640 px |
| desktop | 1025 – 1440 px | 1100 px (content) / 1200 px (layouts) |
| wide | 1441 px + | 1200 px (never wider for prose) |

### Standard section rhythm
```
section {
  padding-block: clamp(4rem, 9vw, 8rem);
  padding-inline: clamp(1.5rem, 5vw, 4rem);
}
```

Every brand surface obeys **centered composition with generous negative space.** Two-thirds of any hero screen is atmosphere; one-third is content. Never allow content to exceed the golden area without reason.

---

## 15 · Accessibility

- **Color contrast:** parchment-on-ink clears WCAG AA Large; parchment-dim-on-ink clears AA Normal. Never drop prose below `--parchment-dim`.
- **Text size:** Minimum body 15 px. Minimum metadata 11 px. Disclaimers honor OS text-scaling on native (`allowFontScaling` true) except for wordmarks & hero titles.
- **Motion:** Respect `prefers-reduced-motion`. Replace scrying ripple + halo breathing with a static state.
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation: none !important; transition: none !important; }
    .reveal { opacity: 1; transform: none; }
  }
  ```
- **RTL:** Use logical properties everywhere (`inset-inline-start`, `padding-block`, `margin-inline-end`). Never `left`/`right` in new code.
- **Focus:** Always visible. `:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; }`.
- **Forms:** Every input has an associated `<label>`. Gold hairline focus on underline inputs.

---

## 16 · Legal Footer (required on every page)

```html
<footer>
  <nav>
    <a href="/privacy">מדיניות פרטיות</a>
    <a href="/terms">תנאי שימוש</a>
    <a href="/support">תמיכה</a>
    <a href="/data-deletion">מחיקת מידע</a>
    <a href="mailto:privacy@maktuba.app">privacy@maktuba.app</a>
  </nav>
  <p class="disclaimer">
    מכתובה מופעלת על ידי בינה מלאכותית. לבידור והתבוננות עצמית בלבד.
    אינה מספקת ייעוץ רפואי, פסיכולוגי, משפטי או פיננסי.
  </p>
  <p class="corp">© 2026 KBR Global Ltd. · רשומה בגיברלטר</p>
</footer>
```

---

## 17 · What is Maktuba NOT

Spell this out so we never drift:

- Not a horoscope feed.
- Not a chatbot wearing a costume.
- Not Co-Star, not Sanctuary, not Pattern. We don't do daily push-notifications of "the moon is in your house today."
- Not a crystal store.
- Not a purple-branded Gen-Z mystical app. The brand is gold-and-ink, and the reader is a grandmother, not an algorithm.
- Not a replacement for human practitioners — we honor them explicitly (Covenant screen).
- Not AI-hyped. We disclose AI plainly, frame the product as study (46K books, 3K years of wisdom), not magic.

---

## 18 · Decision Log (keep appending)

| Date | Decision | Source |
|---|---|---|
| 2026-04-16 | Old fire-over-white logo retired across app + web. | Header cleanup commit 62544ef (maktuba-website). |
| 2026-04-16 | Curtain preloader shows once per session, never on internal pages. | `sessionStorage['maktuba:curtain']`. |
| 2026-04-16 | Website nav anchors directly to `/#readings` and `/#pricing`. No intermediate redirect pages. | Commit 18db5ab. |
| 2026-04-16 | Icon set from `src/components/Icon.astro` (website) promoted to canonical across app + web. | This brandbook. |
| 2026-04-16 | Tagline locked as **"מה שנכתב — כבר כתוב"**, with em-dash, no exclamation. | Copy rewrite spec. |
| 2026-04-16 | Testimonials display no city — name + initials + reading type + date only. | Commit 8c27e09. |

---

*Every ambiguity found in the wild — a gold that's off, a font that isn't loaded, a divider thicker than 1 px, a purple accent anywhere — resolves back to this document. If it isn't here, it isn't Maktuba.*
