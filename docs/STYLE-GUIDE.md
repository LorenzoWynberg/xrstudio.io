# XR Studio Style Guide

## Brand Positioning

**"Production & Experience Engine"** — We execute complex live experiences with precision, control, and international standards.

References: Freeman, NEP Group, TAIT Towers

---

## Color System

### Primary Palette (Monochromatic Green)

```
Background:      #000000 (Pure Black)
Surface:         #0a0a0a (Card backgrounds)
Surface Elevated:#111111 (Hover states)
Border:          #1a1a1a (Subtle dividers)
Border Active:   #00ff88 (Focus/hover)

Text Primary:    #ffffff
Text Secondary:  #888888
Text Muted:      #555555

Accent:          #00ff88 (XR Green)
Accent Dim:      #00cc6a (Hover state)
Accent Glow:     rgba(0,255,136,0.4)
```

### Usage Rules

- NO blue, purple, or other accent colors
- Green (#00ff88) is used sparingly for:
  - CTAs and buttons
  - Active states
  - Key data points (stats)
  - Section labels/eyebrows
  - Borders on hover
- Most UI should be grayscale
- Green should feel like a "signal" — not decoration

---

## Typography

### Font Stack

- **Headlines**: SF Pro Display / Geist Sans (Apple-like)
- **Body**: Geist Sans
- **Mono/Labels**: Geist Mono (for section tags, numbers)

### Type Scale

```
Hero:        clamp(4rem, 12vw, 10rem)   — Massive, impactful
H1:          clamp(3rem, 8vw, 6rem)     — Page titles
H2:          clamp(2rem, 5vw, 4rem)     — Section headers
H3:          1.5rem - 2rem              — Card titles
Body Large:  1.25rem                    — Intro paragraphs
Body:        1rem                       — Default
Small:       0.875rem                   — Captions, meta
Micro:       0.75rem                    — Labels, tags
```

### Typography Rules

- Headlines: **Bold (700-800), tight tracking (-0.02em to -0.04em)**
- Body: Regular (400), relaxed line-height (1.6-1.8)
- Section labels: **UPPERCASE, wide tracking (0.2em), mono font, green**
- Numbers/Stats: **Extra bold, large, green with glow**
- Keep headlines short and punchy (3-6 words)

### Headline Style Examples

```
BAD:  "Our Comprehensive Event Production Services"
GOOD: "Execute with precision."

BAD:  "What Our Clients Are Saying About Us"
GOOD: "Client Stories"

BAD:  "Learn More About Our Process"
GOOD: "How We Work"
```

---

## Layout System

### Grid Philosophy: **Asymmetric Editorial**

- Break the grid intentionally
- Overlap elements where it creates tension
- Use negative space as a design element
- Full-bleed images that break container width
- Text blocks that offset from images

### Container Widths

```
Max Content:     1400px
Standard:        1200px
Narrow (text):   800px
Wide (images):   100vw (full bleed)
```

### Spacing Scale

```
--space-xs:   0.5rem   (8px)
--space-sm:   1rem     (16px)
--space-md:   2rem     (32px)
--space-lg:   4rem     (64px)
--space-xl:   8rem     (128px)
--space-2xl:  12rem    (192px)
```

### Section Rhythm

- Generous vertical spacing between sections (8-12rem)
- Sections alternate between contained and full-bleed
- Every section should have clear visual separation

---

## Imagery

### Photo Treatment

- **High contrast, desaturated** — not full color, not full B&W
- Slight green tint in shadows (optional)
- Dark vignette on edges
- Images should feel cinematic, not stock photo

### Image Layouts: Collage/Grid Style

```
┌─────────────────┬──────────┐
│                 │          │
│    LARGE        │  SMALL   │
│    IMAGE        │──────────│
│                 │  SMALL   │
└─────────────────┴──────────┘

┌──────────┬─────────────────┐
│          │                 │
│  TEXT    │    FULL         │
│  BLOCK   │    IMAGE        │
│          │                 │
└──────────┴─────────────────┘

┌────┬────┬────┬────┐
│    │    │    │    │
│ 1  │ 2  │ 3  │ 4  │  (Gallery strip)
│    │    │    │    │
└────┴────┴────┴────┘
```

### Image Hover Effects

- Subtle zoom (1.05x scale)
- Green border appears
- Caption/overlay slides up
- Keep it smooth, not jarring

---

## Motion & Animation

### Principles

1. **Purposeful**: Every animation should guide attention
2. **Smooth**: Use ease-out for entrances, ease-in for exits
3. **Quick**: 200-400ms for micro-interactions, 600-800ms for reveals
4. **Staggered**: Children elements animate in sequence

### Scroll Animations

- Elements fade up as they enter viewport
- Stagger delay: 100ms between siblings
- Use IntersectionObserver, trigger at 10-20% visibility
- Don't animate everything — key elements only

### Hover States

- Buttons: Slight lift (-2px Y), glow appears
- Cards: Border color change, subtle lift
- Images: Zoom, green border
- Links: Underline animates in

### Hero Background

- **Animated particle/grid system** — techy, subtle
- OR **Slow-moving gradient mesh**
- Should feel alive but not distracting
- Green tones only, very subtle opacity (0.1-0.3)

### What NOT to do

- No bouncy/elastic animations
- No rotation effects
- No 3D transforms
- No loading spinners (use skeleton states)
- No parallax that causes jank

---

## Components

### Buttons

```
Primary:    Green bg, black text, glow shadow
            Hover: White bg, black text

Secondary:  Transparent, white text, gray border
            Hover: Green border, green text

Ghost:      No border, gray text
            Hover: Green text, underline
```

### Cards

```
Background: #0a0a0a (not pure black)
Border:     1px solid #1a1a1a
Hover:      Border turns green, lift 4-8px, glow shadow
Content:    Generous padding (2rem)
```

### Section Headers

```
┌────────────────────────────────┐
│ ▊ (green accent bar)           │
│ SECTION LABEL                  │  ← Green, mono, uppercase
│ Main Headline                  │  ← White, bold, large
│ Optional subtext here          │  ← Gray, smaller
└────────────────────────────────┘
```

### Stats/Numbers

```
┌────────────────┐
│     50+        │  ← Green, extra bold, glow
│ Events Done    │  ← Gray, small, uppercase
└────────────────┘
```

### Navigation

```
Logo | ─────────────────── | Nav Links | CTA Button

- Transparent at top
- Blur backdrop + dark bg on scroll
- Green accent on active link
- CTA is primary green button
```

---

## Hero Section Spec

### Layout (Split Asymmetric)

```
┌─────────────────────────────────────────────────────┐
│  ┌─────────────────┐                                │
│  │ ANIMATED        │  ┌──────────────────────────┐  │
│  │ TECH BG         │  │                          │  │
│  │ (particles/     │  │  XR                      │  │
│  │  grid/mesh)     │  │  STUDIO                  │  │
│  │                 │  │                          │  │
│  │                 │  │  Tagline text here       │  │
│  │                 │  │                          │  │
│  │                 │  │  [CTA]  [Secondary]      │  │
│  │                 │  │                          │  │
│  └─────────────────┘  └──────────────────────────┘  │
│                                                     │
│     ┌────┬────┬────┬────┐                          │
│     │img │img │img │img │  ← Floating image strip  │
│     └────┴────┴────┴────┘                          │
└─────────────────────────────────────────────────────┘
```

### Animated Background Options

1. **Particle Network**: Connected dots forming constellation
2. **Grid Warp**: Perspective grid that subtly distorts
3. **Gradient Mesh**: Organic blobs slowly morphing
4. **Circuit Lines**: Tech-inspired flowing lines

### Hero Content

- Main text: "XR STUDIO" (giant, gradient optional)
- Tagline: Short, impactful (max 10 words)
- 2 CTAs: Primary (green) + Secondary (outline)
- Floating image collage below or to the side

---

## Page Templates

### Homepage Flow

1. Hero (full viewport)
2. Stats strip (contained)
3. Client logos (marquee)
4. Services grid (asymmetric cards)
5. Featured work (large image + 2 smaller)
6. Process steps (horizontal timeline)
7. Testimonials (cards)
8. Ecosystem section (centered text)
9. CTA band (full width)
10. Footer

### Case Study Page

1. Hero image (full bleed)
2. Project info (split: text left, meta right)
3. Challenge/approach (text block)
4. Image gallery (collage grid)
5. Outcomes/results (stats)
6. Next project link

### Service Page

1. Hero (title + intro)
2. What's included (icon grid)
3. Process for this service
4. Related case studies
5. CTA

---

## Do's and Don'ts

### DO

- Use generous whitespace
- Let images breathe
- Keep copy concise
- Use green sparingly as accent
- Create clear visual hierarchy
- Test on mobile

### DON'T

- Add decorative elements without purpose
- Use multiple accent colors
- Make everything animated
- Use generic stock photos
- Write long paragraphs
- Forget hover states

---

## File Naming

- Components: `kebab-case.tsx`
- Images: `project-name-descriptor.webp`
- CSS classes: `kebab-case`

## Implementation Priority

1. [ ] Hero with animated background
2. [ ] Typography scale implementation
3. [ ] Asymmetric layouts on homepage
4. [ ] Image collage components
5. [ ] Refined animation timing
6. [ ] Case study page template
