---
name: orient-rubber-website
description: >
  Skill for building the Orient Rubber Products company website — a professional, classy, formal multi-page site
  for a rubber manufacturing company based in Chennai, India. Use this skill ANY time the user gives a prompt
  related to designing, building, modifying, fixing, styling, adding content to, or iterating on the Orient Rubber
  Products website. This includes prompts about pages, layout, components, sections, colors, fonts, images, logos,
  content, navigation, footer, header, hero sections, product pages, contact forms, deployment, or anything
  website-related. Even if the user says something casual like "make the header look better" or "fix the spacing"
  or "add a new section" — use this skill. When in doubt, use it.
---

# Orient Rubber Products — Website Skill

You are building a professional, classy, and formal website for **Orient Rubber Products**, a rubber manufacturing company established in 1998 in Chennai, India. Every decision — design, code, content, layout — must reflect the identity of a serious, experienced industrial manufacturer.

**Note:** Explain technical steps in plain language — the user is not a developer.

---

## Brand Assets

All brand materials are in the `brand_assets/` folder in the project root. **Read the relevant file before writing any code.**

| File / Folder | What it contains | When to read it |
|---|---|---|
| `brand_assets/logos/` | Company logo files (navy + white variants) | When placing the logo anywhere |
| `brand_assets/brand-guidelines.md` | Colors, fonts, buttons, icons, logo rules | Before any styling or component work |
| `brand_assets/content.md` | All page content — headings, body text, form fields | Before writing any page or section |
| `brand_assets/site-structure.md` | Strict page layouts, section order, header/footer specs | Before building any page structure |

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Font:** `Plus Jakarta Sans` via Google Fonts — weights **500, 600, 700 only**
- **Icons:** Lucide React (line style, 28–32px)
- **Images:** Next.js `<Image>` with `placehold.co` placeholders until real assets provided
- **Export:** `output: 'export'` in next.config for static hosting

```tsx
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-plus-jakarta',
})
```

**No weight 400. No other fonts. No Barlow, Montserrat, Inter, or defaults.**

---

## Quick Reference — Key Brand Rules

### Colors (full spec in `brand_assets/brand-guidelines.md`)

| Color | Hex | Usage |
|---|---|---|
| Dark Navy | `#1C2B4A` | Navbar (on scroll), footer, hero, primary buttons |
| Deep Charcoal | `#2A2A2A` | Headings, body text |
| Steel Blue | `#2E6EBF` | Links, section labels, hover |
| Gold Accent | `#C8922A` | Header CTA, hero CTA, dividers, card borders — **use sparingly** |
| Gold Dark | `#A97A22` | Gold button hover |
| White | `#FFFFFF` | Page backgrounds |
| Light Grey | `#F2F4F7` | Alternating section backgrounds |
| Mid Grey | `#6B7280` | Captions, meta text |

### Font Weights

| Weight | Usage |
|---|---|
| **700** | H1, H2, logo text, CTA button text |
| **600** | H3, H4, section labels, card titles |
| **500** | Body text, descriptions, nav links, form labels, captions — everything else |

### Header: Transparent → Navy on Scroll

- On hero: `background: transparent` — blends into dark hero
- On scroll (>50px): `background: #1C2B4A` + shadow, 300ms transition
- Nav: Home, About, Products, Capabilities, Quality
- CTA: "Get in Touch" — Gold Accent button, always visible
- Mobile: Hamburger menu, slide-in drawer

### Pages (strict order — see `brand_assets/site-structure.md`)

1. **Home:** Hero → About Snippet (1 para) → Why Choose Us → Industries (6) → Customer Strip (scrolling) → Footer
2. **About:** Banner → Our Story (2–3 para) → Certifications
3. **Products:** Banner → Intro → Product grid (8) → Materials table → CTA
4. **Capabilities:** Banner → Manufacturing Capabilities (7 cards) → Our Team
5. **Quality:** Banner → Quality overview → In-House Testing (8 tests)
6. **Contact:** Banner → Contact details + Form + Google Maps

---

## Content Tone

Read `brand_assets/content.md` for all page content. When expanding or rewriting:

- Sound like an experienced manufacturing professional — not a marketing agency
- Use proper industrial terms naturally (Shore A hardness, compression set, cure-time parameters)
- Keep sentences tight and declarative
- **Never use:** "synergy," "leverage," "cutting-edge," "world-class," "state-of-the-art"
- Add technical substance where content is thin

---

## Design Principles

1. **White space is authority.** Generous padding (py-20 to py-24).
2. **Grid discipline.** Clean alignment throughout.
3. **Subtle animations only.** Gentle fade-in on scroll. Nothing flashy.
4. **Alternating backgrounds.** White → Light Grey → White between sections.
5. **Gold accent sparingly.** CTAs, divider lines, card top borders. Not everywhere.
6. **Professional imagery.** Placeholders should suggest factory, products, presses.
7. **No CTA strip.** "Get in Touch" lives in header button + footer only.

---

## Component Patterns

### Section Container
```jsx
<section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
  <div className="max-w-7xl mx-auto">{/* content */}</div>
</section>
```

### Section Heading
```jsx
<div className="mb-12 text-center">
  <p className="text-sm text-[#2E6EBF] tracking-widest uppercase font-semibold mb-2">Label</p>
  <h2 className="text-3xl md:text-4xl font-bold text-[#2A2A2A] mb-4">Title</h2>
  <div className="w-16 h-1 bg-[#C8922A] mx-auto mb-6" />
  <p className="text-[#6B7280] text-lg max-w-3xl mx-auto leading-relaxed font-medium">Subtitle</p>
</div>
```

### Card with Gold Top Border
```jsx
<div className="bg-white rounded-lg shadow-sm border border-[#F2F4F7]
                border-t-[3px] border-t-[#C8922A] hover:shadow-md transition-shadow">
  <div className="p-6">
    <h3 className="font-semibold text-xl text-[#2A2A2A] mb-2">Title</h3>
    <p className="text-[#6B7280] leading-relaxed font-medium">Description</p>
  </div>
</div>
```

### Transparent → Navy Header
```jsx
const [scrolled, setScrolled] = useState(false)
useEffect(() => {
  const handler = () => setScrolled(window.scrollY > 50)
  window.addEventListener('scroll', handler)
  return () => window.removeEventListener('scroll', handler)
}, [])

<header className={`fixed top-0 w-full z-50 transition-all duration-300
  ${scrolled ? 'bg-[#1C2B4A] shadow-lg' : 'bg-transparent'}`}>
```

---

## SEO — Auto-Include on Every Page

- **Title:** `Orient Rubber Products | [Page] — Custom Rubber Manufacturer Chennai`
- **Meta description:** Unique per page, 150–160 chars
- **Heading hierarchy:** One h1 per page, proper h2→h3 nesting
- **Image alt text:** Descriptive with product/process names
- **Semantic HTML:** `<main>`, `<section>`, `<nav>`, `<footer>`
- **Structured data:** LocalBusiness schema (JSON-LD)
- **Sitemap:** Auto-generated sitemap.xml

---

## File Structure

```
orient-rubber-website/
├── brand_assets/
│   ├── logos/               ← Logo files (navy + white variants)
│   ├── brand-guidelines.md
│   ├── content.md
│   └── site-structure.md
├── public/
│   ├── images/              ← Product & facility photos (added later)
│   └── logos/               ← Copy logo files here for the website to use
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx         ← Home
│   │   ├── about/page.tsx
│   │   ├── products/page.tsx
│   │   ├── capabilities/page.tsx
│   │   ├── quality/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ProductCard.tsx
│   │   ├── CapabilityCard.tsx
│   │   ├── CustomerStrip.tsx
│   │   ├── ContactForm.tsx
│   │   └── GoogleMap.tsx
│   └── lib/
│       └── constants.ts
├── CLAUDE.md
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## Checklist Before Every Response

1. ✅ Plus Jakarta Sans only? (500/600/700 — no 400)
2. ✅ Correct brand colors from palette?
3. ✅ Header: transparent on hero → navy on scroll?
4. ✅ Gold accent sparingly?
5. ✅ Content tone: experienced manufacturing professional?
6. ✅ Strict page layout from site-structure.md?
7. ✅ Alternating backgrounds (white / light grey)?
8. ✅ Generous section padding?
9. ✅ Classy and formal — not startup-ish?
10. ✅ SEO basics included?
11. ✅ Using real logo from brand_assets/logos/?
