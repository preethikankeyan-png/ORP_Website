# Orient Rubber Products — Site Structure Reference

This document defines the **strict layout** for every page. Follow this exactly.

---

## Global: Header (Sticky, Transparent → Navy)

### Desktop Layout
```
[ Logo (48px+, white) ]   Home  About  Products  Capabilities  Quality   [ Get in Touch (gold btn) ]
```

### Behavior
- **Position:** Fixed top, z-50
- **On hero (scroll < 50px):** `background: transparent` — nav blends into the dark hero
- **On scroll (scroll > 50px):** `background: #1C2B4A` + `box-shadow: 0 2px 12px rgba(0,0,0,0.15)` — smooth 300ms transition
- **Nav links:** Plus Jakarta Sans 500, white at 80% opacity. Hover: full white. Active page: white with 2px bottom border
- **Get in Touch:** Gold Accent bg (#C8922A), Dark Navy text, Plus Jakarta Sans 700. Hover: #A97A22
- **Logo:** White variant, 48px minimum height, reduced clearspace

### Mobile
- Hamburger icon (right side), white
- Slide-in drawer from right, Dark Navy background
- Full nav links stacked vertically
- "Get in Touch" as full-width gold button at bottom of drawer

### Inner Pages (About, Products, etc.)
- These pages start with a dark navy page banner, so header can start solid navy
- Same scroll behavior applies — it just starts solid

### Implementation
```tsx
const [scrolled, setScrolled] = useState(false)
useEffect(() => {
  const handler = () => setScrolled(window.scrollY > 50)
  window.addEventListener('scroll', handler)
  return () => window.removeEventListener('scroll', handler)
}, [])

<header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
  scrolled ? 'bg-[#1C2B4A] shadow-lg' : 'bg-transparent'
}`}>
```

---

## Global: Footer

### Background
`#0F1B2E` (slightly darker than main Dark Navy)

### Layout — Three Columns
```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  COLUMN 1              COLUMN 2              COLUMN 3                │
│                                                                      │
│  [ Logo (white) ]      LEARN MORE            CONTACT                 │
│  Orient Rubber          ─── (gold line)       ─── (gold line)        │
│  Products                                                            │
│                        Home                   orientrubber@email.com  │
│  Rubber Excellence     About                  +91 98405 68327        │
│  Engineered for You    Products               +91 98400 42122        │
│                        Capabilities                                   │
│                        Quality                Plot No. 39, SIDCO      │
│                        Contact                Industrial Estate       │
│                                               (Phase II),             │
│                                               Thirumudivakkam,        │
│                                               Chennai – 600 132       │
│                                                                      │
│  ──────────────── thin gold divider (#C8922A, 1px) ─────────────── │
│  © 2025 Orient Rubber Products. All rights reserved.                 │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Details
- Column headings ("LEARN MORE", "CONTACT"): Plus Jakarta Sans 600, white, uppercase, with a short gold underline (40px wide, 2px, #C8922A)
- Links: White at 70% opacity, hover → Gold Accent
- Address text: White at 60% opacity, Plus Jakarta Sans 400, 14px
- Copyright: Mid Grey (#6B7280), 13px, centered below divider
- Optional: Small Google Maps embed or static map thumbnail linking to Google Maps

---

## Page 1 — HOME (Landing Page)

Sections in this exact order:

### Section 1: Hero
- **Background:** Dark Navy (#1C2B4A), full width, 85–90vh height
- **Layout:** Two columns desktop (text 55% left, image 45% right). Centered stack on mobile.
- **Content:**
  - Small label: "SINCE 1998 · CHENNAI, INDIA" — Plus Jakarta Sans 600, Gold Accent, 13px, letter-spacing 1.5px
  - Headline: Plus Jakarta Sans 700, white, 48–56px
  - Subheadline: Plus Jakarta Sans 400, white at 60% opacity, 18–20px, max-width 600px
  - CTA: "Request a Quote" — Gold Accent bg, Dark Navy text
  - Secondary: "Explore Our Products →" — white text link with underline
- **Right side:** Placeholder for hero image (factory/products)
- **Optional:** Subtle dot/grid pattern overlay on navy for texture

### Section 2: About Snippet
- **Background:** White
- **Layout:** Two columns — text (60%) left, image (40%) right
- **Content:**
  - Label: "ABOUT US" — Steel Blue, uppercase, letter-spaced + gold underline
  - Heading: "Precision Manufacturing, Proven Reliability"
  - 2–3 paragraphs (expanded from content.md)
  - "Learn More About Us →" — Steel Blue text link → /about

### Section 3: Why Choose Us
- **Background:** Light Grey (#F2F4F7)
- **Layout:** Centered heading + 3-column card grid
- **Cards (3):**
  1. Consistent Quality — CheckCircle icon
  2. Operational Efficiency — Clock/Gauge icon
  3. Transparent Service — Eye/FileCheck icon
- **Card style:** White bg, subtle shadow, gold top border (3px), icon (Dark Navy), heading, description

### Section 4: Industries We Serve
- **Background:** White
- **Layout:** Centered heading + grid (4 top + 3 bottom centered, or responsive auto-fit)
- **Industries (7):**
  1. Automotive
  2. Kitchen Appliances & Home Products
  3. Medical Equipment
  4. Industrial & Custom Applications
  5. Electrical & Electronics
  6. Pumps & Valves
- **Card style:** Icon + industry name. Clean, minimal. No descriptions needed.
- **Below grid:** "We are open to working with any industry requiring custom molded rubber components."

### Section 5: Customer Logo Strip
- **Background:** Light Grey or White
- **Layout:**
  - Small heading: "Trusted By" — centered, uppercase, letter-spaced
  - Auto-scrolling horizontal strip (infinite CSS animation loop)
  - Customers: Butterfly, Stanson AMBG, Sri Ganeshraam Surgicals, Prime Progression, Castle Homes, Taylors
- **Style:** Greyscale logos/text by default, color on hover. Use text placeholders until real logos provided.

### Section 6: Footer
(See Global Footer above)

*(No CTA strip section — the "Get in Touch" call-to-action is handled by the header button and footer only.)*

---

## Page 2 — ABOUT

### Page Banner
- Dark Navy bg, ~35–40vh
- Title: "About Us" — Plus Jakarta Sans 700, white, 40px
- Breadcrumb: Home → About (white at 60% opacity)

### Section: Our Story
- **Background:** White
- **Layout:** Text (60%) left, image (40%) right
- **Content:** Expanded company story from content.md — founding, location, what we do, who we serve

### Section: Certifications
- **Background:** Light Grey
- **Layout:** Two centered cards
  - ISO 9001:2008 — Quality Management System
  - BIS Certified — Pressure Cooker Gaskets
- **Card style:** Shield/Award icon, gold accent border, certification name + description

*(No "Our Facility" section on the About page. Manufacturing/facility details are covered on the Capabilities page.)*

---

## Page 3 — PRODUCTS

### Page Banner
- Dark Navy, "Our Products" title + breadcrumb

### Section: Product Introduction
- **Background:** White
- **Content:** Expanded intro about custom molded components, compounds, process

### Section: Product Grid
- **Background:** Light Grey
- **Grid:** 3 columns desktop, 2 tablet, 1 mobile
- **Products:**
  1. O-Rings
  2. Grommets
  3. Gaskets — Pressure Cooker (BIS Certified)
  4. Gaskets — Automotive
  5. Seals
  6. Gloves
  7. Bellows
  8. Saddle Rings

### Section: Materials We Work With
- **Background:** White
- **Table layout:**

| Material | Typical Applications |
|---|---|
| Silicone | High-temperature, food-grade, medical components |
| Carbon Black Compounds | Cooker gaskets, industrial components |
| EPDM | Weather sealing, heat resistance, outdoor applications |
| Nitrile (NBR) | Oil-resistant seals and gaskets, automotive |
| Natural Rubber (NR) | General industrial components, vibration isolators |

### Section: CTA
- "Can't find what you need?" + "Send Your Requirement →" button

---

## Page 4 — CAPABILITIES

### Page Banner
- Dark Navy, "Our Capabilities" title + breadcrumb

### Section: Manufacturing Capabilities
- **Background:** White
- **Layout:** Photo cards grid (same style as facility section on About page)
- **Content:** Same 7 manufacturing stages with expanded descriptions

### Section: Our Team
- **Background:** Light Grey
- **Content:** Expanded description of the 25–30 production operators + 7 admin/supervisory staff. Emphasize training, discipline, upskilling.

---

## Page 5 — QUALITY

### Page Banner
- Dark Navy, "Quality Assurance" title + breadcrumb

### Section: Quality Overview
- **Background:** White
- **Content:** Expanded overview of quality philosophy, certifications, process controls

### Section: In-House Testing Capabilities
- **Background:** Light Grey
- **Layout:** Grid or list of testing capabilities:
  1. Hardness Testing — Shore A measurement
  2. Tensile Strength & Elongation at Break
  3. Compression Strength Testing
  4. Heat Aging & Oil Aging Tests
  5. Volume Swell Testing
  6. Ash Content Testing
  7. Specific Gravity Testing
- **Below list:** Summary about in-house validation without third-party lab dependency

---

## Page 6 — CONTACT

### Page Banner
- Dark Navy, "Get in Touch" title + breadcrumb
- Subtitle: "Have a requirement or drawing? Reach out and we'll get back to you promptly."

### Section: Contact Details + Form
- **Background:** White
- **Layout:** Two columns — details left, form right
- **Left column:**
  - Company name + full address
  - Phone numbers (with icons)
  - Email (with icon)
- **Right column — Form fields:**
  - Name (required)
  - Company Name
  - Phone Number (required)
  - Email (required)
  - Product / Requirement
  - Rubber Compound Preference (dropdown: Silicone / Carbon / EPDM / Nitrile / Natural Rubber / Not Sure)
  - Message / Additional Details (textarea)
  - "Send Enquiry" button (primary style)

### Section: Google Maps
- **Background:** Light Grey or full-width
- **Embed:** Google Maps for Plot No. 39, SIDCO Industrial Estate Phase II, Thirumudivakkam, Chennai – 600 132

---
---

## IMAGE PLACEHOLDERS — Where Images Go

Use `placehold.co` placeholders for ALL images. The user will provide real photos later — name files clearly so swapping is simple.

### Home Page

| # | Section | Image Description | Placeholder Size | File Name |
|---|---|---|---|---|
| 1 | Hero | Full factory setup with machines (wide, landscape) | `1200x600` | `hero-factory.jpg` |

### Products Page (8 product images)

| # | Product | Placeholder Size | File Name |
|---|---|---|---|
| 1 | O-Rings | `400x300` | `product-orings.jpg` |
| 2 | Grommets | `400x300` | `product-grommets.jpg` |
| 3 | Gaskets — Pressure Cooker | `400x300` | `product-gaskets-cooker.jpg` |
| 4 | Gaskets — Automotive | `400x300` | `product-gaskets-auto.jpg` |
| 5 | Seals | `400x300` | `product-seals.jpg` |
| 6 | Gloves | `400x300` | `product-gloves.jpg` |
| 7 | Bellows | `400x300` | `product-bellows.jpg` |
| 8 | Saddle Rings | `400x300` | `product-saddle-rings.jpg` |

### Capabilities Page (7 capability images)

| # | Capability | Placeholder Size | File Name |
|---|---|---|---|
| 1 | Raw Material Weighing | `400x300` | `cap-weighing.jpg` |
| 2 | Kneader | `400x300` | `cap-kneader.jpg` |
| 3 | Mixing Mill | `400x300` | `cap-mixing-mill.jpg` |
| 4 | Compression Molding Presses | `400x300` | `cap-molding.jpg` |
| 5 | Post-Curing Ovens | `400x300` | `cap-post-curing.jpg` |
| 6 | In-Process Inspection | `400x300` | `cap-inspection.jpg` |
| 7 | Trimming & Final Inspection | `400x300` | `cap-trimming.jpg` |

### Quality Page (2–3 testing images)

| # | Image Description | Placeholder Size | File Name |
|---|---|---|---|
| 1 | Testing lab / equipment | `600x400` | `quality-lab-1.jpg` |
| 2 | Testing in progress / instruments | `600x400` | `quality-lab-2.jpg` |
| 3 | Close-up of testing process (optional) | `600x400` | `quality-lab-3.jpg` |

### Capabilities Page — Team (2 images)

| # | Image Description | Placeholder Size | File Name |
|---|---|---|---|
| 1 | Production operators / shop floor team | `600x400` | `team-production.jpg` |
| 2 | Supervisory / admin team | `600x400` | `team-admin.jpg` |

---

### Instructions for Claude Code:
- Use `https://placehold.co/WIDTHxHEIGHT/F2F4F7/6B7280?text=Image+Description` as placeholders (grey bg, grey text)
- Set proper `alt` text on every image for SEO (e.g., "O-ring rubber component manufactured by Orient Rubber Products Chennai")
- Place all images in `public/images/` folder
- When the user provides a real photo, swap the placeholder — do not change layout or sizing
- Total images to expect: 1 (hero) + 8 (products) + 7 (capabilities) + 3 (quality) + 2 (team) = **21 images**
