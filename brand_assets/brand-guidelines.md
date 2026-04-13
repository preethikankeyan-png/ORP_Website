# Orient Rubber Products — Brand Guidelines

---

## Company Logo

- Circular stylized swoosh/wave mark (see logo files in `logos/` folder)
- Company name: **ORIENT RUBBER PRODUCTS** (all caps, Plus Jakarta Sans 700)
- Tagline: *Rubber Excellence Engineered for You* (Plus Jakarta Sans 500, Steel Blue)

### Logo Files

| File | Usage |
|---|---|
| `orient_logo_navy.png` | Use on white / light backgrounds |
| `orient_logo_white.png` | Use on Dark Navy / Steel Blue / dark backgrounds |

### Logo Variations

| Background | Logo Color |
|---|---|
| White / Light Grey | Dark Navy version |
| Dark Navy / Dark backgrounds | White version |
| Steel Blue backgrounds | White version |

### Logo Sizing & Clearspace

- **Minimum height:** 48px in header, 64px+ in hero/footer
- **Reduced clearspace:** 15% of logo width on all four sides
- No text, imagery, or graphic elements in the clearspace zone

---

## Color Palette

### Primary

| Color | Hex | Tailwind | Usage |
|---|---|---|---|
| Dark Navy | `#1C2B4A` | `bg-[#1C2B4A]` | Navbar (scrolled), footer, hero bg, primary button fill |
| Deep Charcoal | `#2A2A2A` | `text-[#2A2A2A]` | Headings, primary body text |
| Steel Blue | `#2E6EBF` | `text-[#2E6EBF]` | Links, section labels, hover highlights |

### Accent

| Color | Hex | Tailwind | Usage |
|---|---|---|---|
| Gold Accent | `#C8922A` | `bg-[#C8922A]` | Header CTA, hero CTA, card top borders, section dividers, certification badges |
| Gold Dark | `#A97A22` | `hover:bg-[#A97A22]` | Gold button hover state |

### Neutrals

| Color | Hex | Tailwind | Usage |
|---|---|---|---|
| White | `#FFFFFF` | `bg-white` | Primary page background |
| Light Grey | `#F2F4F7` | `bg-[#F2F4F7]` | Alternating section backgrounds |
| Mid Grey | `#6B7280` | `text-[#6B7280]` | Captions, meta text |
| Border Grey | `#E5E7EB` | `border-[#E5E7EB]` | Card borders, dividers |
| Dark Footer | `#0F1B2E` | `bg-[#0F1B2E]` | Footer background (darker than main navy) |

---

## Typography — Plus Jakarta Sans

### Font Weights Used

| Weight | Name | Usage |
|---|---|---|
| **700** | Bold | Main headings (H1, H2), logo text, primary CTA button text |
| **600** | SemiBold | Subheadings (H3, H4), section labels, card titles |
| **500** | Medium | **Everything else** — body text, descriptions, nav links, form labels, captions, paragraphs |

**Only these three weights. No 400. No other fonts.**

```tsx
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-plus-jakarta',
})
```

### Type Sizes

| Element | Weight | Size (desktop) | Color | Letter Spacing |
|---|---|---|---|---|
| H1 (hero) | 700 | 48–56px | White (dark bg) / Charcoal (light bg) | 0.5px |
| H2 (section) | 700 | 36–40px | Deep Charcoal | 0.5px |
| H3 (card/sub) | 600 | 24–28px | Deep Charcoal | normal |
| H4 | 600 | 20px | Deep Charcoal | normal |
| Section label | 600 | 13–14px | Steel Blue | 1.5px, uppercase |
| Nav links | 500 | 15px | White (header) | normal |
| Body text | 500 | 16–18px | Deep Charcoal | normal |
| Captions | 500 | 14px | Mid Grey | normal |
| Button text | 700 | 14px | White / Navy | 0.5px |

### Line Heights

- Body text: 1.7
- Headings: 1.15–1.25
- UI elements: 1.5

---

## Button Styles

### Primary — Dark Navy Fill

```
Background: #1C2B4A → hover: #C8922A
Text: #FFFFFF
Font: Plus Jakarta Sans 700, 14px
Border-radius: 6px
Padding: 13px 32px
Transition: background-color 0.3s ease
```

### Header CTA — Gold Accent

```
Background: #C8922A → hover: #A97A22
Text: #1C2B4A
Font: Plus Jakarta Sans 700, 14px
Border-radius: 6px
Padding: 10px 24px
```

### Secondary — Text Link

```
Background: transparent
Text: #2E6EBF → hover: #C8922A
Font: Plus Jakarta Sans 600
Border-bottom: 2px solid #2E6EBF → hover: #C8922A
```

---

## Iconography

- **Library:** Lucide React
- **Size:** 28–32px
- **Color:** Dark Navy (#1C2B4A) on light backgrounds, White on dark backgrounds
- **Style:** Clean line icons

### Icon Mappings

| Concept | Lucide Icon |
|---|---|
| On-Time Delivery | `Clock` |
| Quality Check | `CheckCircle` |
| Transparent Service | `Eye` |
| Certified / Verified | `BadgeCheck` |
| Manufacturing | `Cog` (single gear) |
| Phone | `Phone` |
| Email | `Mail` |
| Location | `MapPin` |
| Automotive | `Car` |
| Medical | `HeartPulse` |
| Kitchen / Home | `UtensilsCrossed` |
| Industrial | `Wrench` |
| Electrical | `Zap` |
| Pumps & Valves | `Droplets` |
| Plumbing | `Pipette` |
