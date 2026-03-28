# Saltwater Sessions — Design Spec

## Color Palette
```css
--primary: #0C2340;     /* deep ocean navy / navigation, dark sections, logo base */
--secondary: #FBF7F0;   /* sand white / light section backgrounds, cards, text on dark */
--accent: #E8A838;      /* golden hour amber / CTAs, hover highlights, pricing emphasis */
--text: #1C1C1C;        /* near-black / primary body copy on light backgrounds */
--muted: #6B8F9E;       /* sea glass / metadata, borders, secondary accents */
--mist: #D8E2E6;        /* sea mist / subtle dividers, soft gradients, filter chips */
```

Palette direction: deep and cinematic. The navy anchors the site with gallery-like restraint. Sand white keeps pages breathable. Amber appears selectively so calls to action feel like late sun catching spray.

## Typography
- **Heading font:** Playfair Display 700
- **Body font:** Nunito Sans 400/600

### Font Scale
- **h1:** 3rem / 48px mobile, 5.5rem / 88px desktop, line-height 0.95
- **h2:** 2.25rem / 36px mobile, 4rem / 64px desktop, line-height 1
- **h3:** 1.5rem / 24px mobile, 2rem / 32px desktop, line-height 1.1
- **h4:** 1.125rem / 18px mobile, 1.375rem / 22px desktop, line-height 1.2
- **body:** 1rem / 16px mobile, 1.125rem / 18px desktop, line-height 1.7
- **small:** 0.875rem / 14px
- **caption:** 0.75rem / 12px, letter-spacing 0.08em, uppercase

Typography direction: editorial. Playfair gives the work a gallery voice. Nunito Sans keeps functional content readable and contemporary.

## Spacing & Tokens
- **Border radius**
  - `--radius-sm: 6px`
  - `--radius-md: 12px`
  - `--radius-lg: 20px`
  - `--radius-xl: 32px`
  - `--radius-pill: 999px`
- **Shadow system**
  - `--shadow-soft: 0 10px 30px rgba(12, 35, 64, 0.08)`
  - `--shadow-medium: 0 18px 50px rgba(12, 35, 64, 0.14)`
  - `--shadow-hard: 0 24px 80px rgba(12, 35, 64, 0.2)`
- **Section rhythm**
  - Mobile: `py-16`
  - Tablet: `md:py-24`
  - Desktop feature sections: `lg:py-32`
- **Content width**
  - Standard container: `max-w-7xl`
  - Reading width: `max-w-3xl`
  - Gallery width: `max-w-[1600px]`

## Layout Architecture
- **Hero style:** full-bleed cinematic image with transparent navigation overlay. Copy sits bottom-left inside a dark gradient wash. Small metadata row above headline. The hero should feel like an exhibition poster.
- **Navigation:** transparent over hero, then transitions to solid navy with a faint blur on scroll. Logo left. Links centered or right on desktop. Compact slide-down panel or drawer on mobile.
- **Section rhythm:** deliberate alternation between dark navy sections and sand-white sections. Home and About use editorial pacing. Gallery is mostly full-width and minimal. Workshops use soft sea-glass-to-sand gradients within cards.
- **Footer:** dark contrasting band with three columns plus an Instagram-style 3x2 placeholder grid. Newsletter nested inside footer instead of separated into its own huge block.
- **Overall density:** spacious, gallery-led, image-heavy. Plenty of negative space around text. Utility content stays tight and structured.

## Page-by-Page Layout

### 1. Home
**Section order**
1. Hero
2. Featured gallery preview
3. Workshops CTA band
4. Client quote
5. Newsletter signup
6. Footer

**Section layouts**
- **Hero:** full viewport height. Background image with top and bottom gradient overlays. Bottom-left stack: eyebrow, h1, intro paragraph, two CTAs. Bottom-right or lower edge: subtle stat strip with "Mount Maunganui, NZ / Prints / Workshops".
  - Image: `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&h=2200&fit=crop`
  - Alt: "Golden light over ocean swell rolling toward shore"
- **Featured gallery preview:** sand background. Intro on left, 6-image masonry preview on right at desktop. On mobile it becomes a single-column staggered stack.
  - Images:
    - `https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=900&h=1200&fit=crop`
    - `https://images.unsplash.com/photo-1468413253725-0d5181091126?w=900&h=1400&fit=crop`
    - `https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=900&h=1100&fit=crop`
    - `https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&h=1300&fit=crop`
    - `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&h=1000&fit=crop`
    - `https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=900&h=1250&fit=crop`
- **Workshops CTA band:** dark navy with one atmospheric image cropped to the right edge. Split layout desktop, stacked mobile.
  - Image: `https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1200&h=900&fit=crop`
  - Alt: "Photographer walking shoreline with camera gear at dusk"
- **Client quote:** light sandy block with oversized Playfair quote and tiny caption.
- **Newsletter signup:** narrow centered panel with sand background, navy border, amber button.

**Mobile behavior**
- Hero copy shrinks to preserve image impact.
- Masonry preview collapses into 1 column with varied aspect ratios.
- CTA band stacks text first, image second.

### 2. Gallery
**Section order**
1. Intro header
2. Sticky category filters
3. Full masonry gallery grid
4. Lightbox overlay interaction
5. Prints CTA strip
6. Footer

**Section layouts**
- **Intro header:** dark navy, minimal chrome, centered heading and short intro.
- **Filters:** pill buttons in sea-glass and sand tones. Sticky beneath nav on desktop, scrollable row on mobile.
- **Gallery grid:** 4 columns desktop, 2 tablet, 1 mobile. Uneven row spans. Tight gutters. Images lazy-load. Hover reveals title and category. Click opens overlay with title, print sizes, and price.
- **Lightbox overlay:** near-black scrim. Large centered image. Metadata card floats lower right on desktop, below image on mobile.
- **Prints CTA strip:** sand background with short copy and amber button.

**Gallery images**
1. Surf — "Lines at First Light" — `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&h=1400&fit=crop`
2. Surf — "Hold The Edge" — `https://images.unsplash.com/photo-1468413253725-0d5181091126?w=1000&h=1300&fit=crop`
3. Ocean — "Amber Break" — `https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1000&h=1500&fit=crop`
4. Lifestyle — "Salt On Film" — `https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1000&h=1250&fit=crop`
5. Aerial — "Sandbar Geometry" — `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000&h=1200&fit=crop`
6. Surf — "Inside The Section" — `https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1000&h=1450&fit=crop`
7. Ocean — "Glass Before Wind" — `https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1000&h=1300&fit=crop`
8. Lifestyle — "Boardwalk Quiet" — `https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1000&h=1350&fit=crop`
9. Aerial — "Blue Contours" — `https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1000&h=1400&fit=crop`
10. Surf — "Late Drop" — `https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1000&h=1500&fit=crop`
11. Ocean — "Tidal Pattern" — `https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&h=1300&fit=crop`
12. Lifestyle — "Post Session" — `https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=1000&h=1250&fit=crop`
13. Aerial — "Coastline Study" — `https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1000&h=1450&fit=crop`
14. Surf — "Shoulder High" — `https://images.unsplash.com/photo-1468413253725-0d5181091126?w=1000&h=1100&fit=crop`
15. Ocean — "Evening Texture" — `https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1000&h=1200&fit=crop`
16. Lifestyle — "Toward The Water" — `https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&h=1400&fit=crop`

**Mobile behavior**
- Filters become horizontal scroll chips.
- Lightbox metadata drops beneath image.
- Masonry simplifies to one column with gentle reveal animation.

### 3. Prints
**Section order**
1. Intro hero
2. Print process steps
3. Paper types and framing
4. Pricing tiers
5. Care instructions
6. Order CTA
7. Footer

**Layouts**
- **Intro hero:** split layout with text left and framed print lifestyle image right.
  - Image: `https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1400&h=1000&fit=crop`
  - Alt: "Framed coastal print displayed in a calm interior"
- **Print process:** three horizontal steps with numbered markers.
- **Paper types/framing:** two cards on sand background.
- **Pricing tiers:** three-column cards with Premium visually emphasized using amber border.
- **Care instructions:** narrow readable text block.
- **Order CTA:** dark navy section with concise action copy.

**Mobile behavior**
- Split hero stacks image below text.
- Pricing cards become vertical stack.

### 4. Workshops
**Section order**
1. Intro header
2. Upcoming workshops grid
3. What you’ll learn
4. Field notes image + copy
5. Booking CTA
6. Footer

**Layouts**
- **Intro header:** sand background, centered intro.
- **Upcoming workshops grid:** 2x2 desktop, single column mobile. Cards have subtle navy-to-sea-glass gradients, rounded corners, soft shadows. Each card includes date, skill level, location, price, spots remaining, and CTA.
  - Supporting image: `https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&h=900&fit=crop`
  - Alt: "Photographer preparing camera near surf at sunrise"
- **What you’ll learn:** icon-free editorial list in two columns.
- **Field notes block:** dark section with wide ocean image and short teaching philosophy.
  - Image: `https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1600&h=900&fit=crop`
  - Alt: "Long rolling waves under moody coastal light"
- **Booking CTA:** compact centered banner.

**Mobile behavior**
- Cards remain tappable with clear spacing.
- Expandable details appear inline beneath summary row.

### 5. About
**Section order**
1. Intro hero
2. Founder story
3. Philosophy on ocean photography
4. Equipment list
5. Press mentions
6. Team photo
7. Footer

**Layouts**
- **Intro hero:** editorial two-column layout with portrait on one side and manifesto-style headline on the other.
  - Founder image: `https://images.unsplash.com/photo-1504593811423-6dd665756598?w=1200&h=1400&fit=crop`
  - Alt: "Photographer holding camera by the coast"
- **Founder story:** readable single-column prose with pullout facts.
- **Philosophy:** dark section with layered quote and ocean texture background.
  - Background image: `https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1600&h=900&fit=crop`
  - Alt: "Evening light across textured ocean surface"
- **Equipment list:** clean two-column specs panel.
- **Press mentions:** logo placeholder row and short descriptions.
- **Team photo:** full-width sand section.
  - Image: `https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1400&h=900&fit=crop`
  - Alt: "Small creative team standing together outdoors"

**Mobile behavior**
- Hero becomes text-first stack.
- Equipment list becomes one column.

### 6. Contact
**Section order**
1. Intro header
2. Contact details + form
3. Map placeholder + social links
4. Studio hours strip
5. Footer

**Layouts**
- **Intro header:** dark navy with concise heading.
- **Details + form:** two-column desktop. Left holds address, phone, email, socials. Right holds form card.
- **Map placeholder:** wide muted panel with embedded map placeholder styling.
- **Studio hours strip:** simple three-column info row.

**Details**
- Address: **23 Pacific Avenue, Mount Maunganui 3116**
- Phone: **+64 7 555 0184**
- Email: **hello@saltwatersessions.co.nz**

**Mobile behavior**
- Form stacks below contact details.
- Map becomes fixed-height card.

## Logo Design
- **Concept:** abstract wave curl forming the blades of a camera aperture inside a circular lens mark, paired with an elegant wordmark.
- **Color variants:**
  - Primary: navy mark and wordmark on sand white
  - Reversed: sand white on navy background
  - Monochrome: all near-black or all white
- **Usage:**
  - Minimum icon size: 32px
  - Minimum full logo width: 140px
  - Clear space: at least height of the inner aperture shape on all sides

### Inline SVG
```svg
<svg width="220" height="48" viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Saltwater Sessions logo">
  <g fill="#0C2340">
    <circle cx="24" cy="24" r="20" stroke="#0C2340" stroke-width="2" fill="none"/>
    <path d="M24 10c-5.8 0-10.6 4.8-10.6 10.6 0 1.9.5 3.7 1.4 5.2 1.1-3.6 4.4-6.1 8.2-6.1 4.8 0 8.7 3.9 8.7 8.7 0 2.8-1.3 5.3-3.4 6.9 4.9-1.8 8.3-6.4 8.3-11.8C36.6 16.1 31.8 10 24 10Z"/>
    <path d="M23.8 18.6c-3.7 0-6.7 3-6.7 6.7 0 3.7 3 6.7 6.7 6.7 1.4 0 2.8-.4 4-1.3-1.7-.3-3.1-1.9-3.1-3.7 0-2.1 1.7-3.7 3.7-3.7.5 0 1 .1 1.5.3-.8-2.9-3.4-5-6.1-5Z"/>
    <circle cx="24" cy="24" r="3.2"/>
  </g>
  <g fill="#0C2340">
    <text x="56" y="22" font-family="'Playfair Display', serif" font-size="18" font-weight="700" letter-spacing="0.02em">Saltwater</text>
    <text x="56" y="38" font-family="'Nunito Sans', sans-serif" font-size="13" font-weight="600" letter-spacing="0.22em">SESSIONS</text>
  </g>
</svg>
```

## Favicon Design
- **Concept:** simplified circular wave-aperture mark only
- **Colors:** navy mark on transparent background

### SVG
```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Saltwater Sessions favicon">
  <circle cx="16" cy="16" r="13" stroke="#0C2340" stroke-width="2"/>
  <path d="M16 7.5c-3.9 0-7.1 3.2-7.1 7.1 0 1.3.3 2.5.9 3.5.8-2.4 2.9-4.1 5.5-4.1 3.2 0 5.8 2.6 5.8 5.8 0 1.9-.9 3.5-2.3 4.6 3.3-1.2 5.6-4.3 5.6-7.9 0-4.9-3.2-9-8.4-9Z" fill="#0C2340"/>
  <circle cx="16" cy="16" r="2.2" fill="#0C2340"/>
</svg>
```

## Image Plan
All images should keep a cohesive coastal tone: soft contrast, natural grain, blue-gold balance, and documentary realism.

### Home
- Hero: `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&h=2200&fit=crop` — golden ocean swell — dramatic, cinematic.
- Gallery preview 1: `https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=900&h=1200&fit=crop` — surfer lifestyle portrait — human, warm.
- Gallery preview 2: `https://images.unsplash.com/photo-1468413253725-0d5181091126?w=900&h=1400&fit=crop` — surfer in motion — dynamic spray.
- Gallery preview 3: `https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=900&h=1100&fit=crop` — textured sea surface — contemplative.
- Gallery preview 4: `https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&h=1300&fit=crop` — wave action — energetic.
- Gallery preview 5: `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&h=1000&fit=crop` — coastal aerial — graphic composition.
- Gallery preview 6: `https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=900&h=1250&fit=crop` — shoreline figure — quiet mood.
- Workshop CTA: `https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1200&h=900&fit=crop` — photographer at shoreline — practical and atmospheric.

### Gallery
Use the 16 gallery images listed in the Gallery page section above. All should be lazy-loaded and rendered with aspect-ratio-aware containers.

### Prints
- Hero interior print: `https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1400&h=1000&fit=crop` — framed art in calm room.
- Paper detail support: `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&h=900&fit=crop` — close-up desk texture for craftsmanship mood.
- Framing mood: `https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1000&h=1200&fit=crop` — styled interior crop.

### Workshops
- Header support: `https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&h=900&fit=crop` — photographer near coast.
- Field notes image: `https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1600&h=900&fit=crop` — rolling waves and moody sky.
- Card hover detail image option: `https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=900&h=700&fit=crop` — surfer detail.

### About
- Founder portrait: `https://images.unsplash.com/photo-1504593811423-6dd665756598?w=1200&h=1400&fit=crop`
- Philosophy background: `https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1600&h=900&fit=crop`
- Team photo: `https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1400&h=900&fit=crop`

### Contact
- Optional studio texture banner: `https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&h=700&fit=crop` — coastal texture, subdued.
- Social card background: `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000&h=700&fit=crop` — aerial coast.

## Interaction & Motion
- **Buttons:** amber buttons darken slightly on hover and lift by `translateY(-1px)`. Secondary buttons use navy outlines that fill on hover.
- **Cards:** subtle shadow increase and 1.02 scale on image only. Workshop cards get a faint animated gradient shift using CSS background-position.
- **Links:** underline grows from left to right using `::after` transform.
- **Scroll-triggered animation:** CSS-only reveal utility using opacity + translateY with `@media (prefers-reduced-motion: no-preference)`. Delay classes for staggered masonry entries.
- **Page transitions:** soft fade/slide for route-level content wrappers. Keep duration under 300ms.
- **Loading states:** blurred sand-toned skeleton blocks for gallery images and workshop cards.
- **Micro-interactions:** filter chips snap active state with amber dot, lightbox closes with fade, newsletter field highlights with sea-glass ring.
