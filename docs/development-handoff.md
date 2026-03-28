# Saltwater Sessions — Development Handoff

## Tech Setup
- **Framework:** Next.js 14+ App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Performance requirements:** lazy-load gallery images, minimal client-side JS, CSS-based motion only where possible

### Google Fonts
Use Next.js font optimization or standard imports.

```ts
import { Playfair_Display, Nunito_Sans } from 'next/font/google'

export const headingFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-heading'
})

export const bodyFont = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body'
})
```

If using CSS import fallback:
- `https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&family=Playfair+Display:wght@700&display=swap`

### Tailwind Config Tokens
```ts
colors: {
  primary: '#0C2340',
  secondary: '#FBF7F0',
  accent: '#E8A838',
  text: '#1C1C1C',
  muted: '#6B8F9E',
  mist: '#D8E2E6'
},
fontFamily: {
  heading: ['var(--font-heading)', 'serif'],
  body: ['var(--font-body)', 'sans-serif']
},
borderRadius: {
  sm: '6px',
  md: '12px',
  lg: '20px',
  xl: '32px'
},
boxShadow: {
  soft: '0 10px 30px rgba(12,35,64,0.08)',
  medium: '0 18px 50px rgba(12,35,64,0.14)',
  hard: '0 24px 80px rgba(12,35,64,0.2)'
},
maxWidth: {
  'gallery': '1600px',
  'reading': '48rem'
}
```

### Recommended npm Packages
- `clsx`
- `tailwind-merge`
- `lucide-react`
- `react-intersection-observer` only if needed for progressive reveal hooks. Prefer pure CSS first.

## Component Breakdown

### 1. `SiteHeader`
- **Purpose:** top navigation with transparent overlay behavior on hero and solid navy state after scroll
- **Props:** `{ transparentOnTop?: boolean }`
- **Layout:** logo left, nav links right, CTA button optional, mobile menu trigger
- **Responsive:** desktop inline nav; mobile collapses to full-width dropdown or drawer

### 2. `SiteLogo`
- **Purpose:** render SVG logo in light/dark variants
- **Props:** `{ variant?: 'primary' | 'reversed' | 'mono', className?: string }`
- **Layout:** inline SVG
- **Responsive:** scales fluidly; enforce min width for legibility

### 3. `HeroCinematic`
- **Purpose:** full-bleed hero for home page
- **Props:** `{ image, eyebrow, title, body, primaryCta, secondaryCta, metaItems }`
- **Layout:** full viewport, gradient overlays, content aligned bottom-left
- **Responsive:** text width constrained on desktop; tighter stack on mobile

### 4. `SectionIntro`
- **Purpose:** reusable heading and intro block
- **Props:** `{ eyebrow?, title, body?, align?: 'left' | 'center' }`
- **Layout:** compact text stack
- **Responsive:** center alignment used for Gallery, Workshops, Contact headers

### 5. `MasonryPreview`
- **Purpose:** homepage featured gallery preview
- **Props:** `{ items: { title, category, image, alt }[] }`
- **Layout:** CSS columns or responsive grid with varied row spans
- **Responsive:** 3 columns desktop, 2 tablet, 1 mobile

### 6. `GalleryFilterBar`
- **Purpose:** filter gallery categories
- **Props:** `{ filters: string[], active: string, onChange: (filter) => void }`
- **Layout:** sticky pill row
- **Responsive:** horizontal scrolling on mobile

### 7. `GalleryMasonryGrid`
- **Purpose:** main gallery grid with 16+ items
- **Props:** `{ items: GalleryItem[], activeFilter: string }`
- **Layout:** dense masonry-style grid, hover overlay with title/category
- **Responsive:** 4 columns desktop, 2 tablet, 1 mobile

### 8. `LightboxOverlay`
- **Purpose:** view gallery item details
- **Props:** `{ item, open, onClose }`
- **Layout:** fullscreen scrim, large image, metadata panel with title, print sizes, price
- **Responsive:** metadata beside image on desktop, below on mobile

### 9. `WorkshopCard`
- **Purpose:** upcoming workshop display
- **Props:** `{ title, date, skillLevel, location, price, spotsRemaining, summary, href? }`
- **Layout:** gradient card with metadata rows and CTA
- **Responsive:** full-width stack on mobile, equal-height cards on desktop

### 10. `PricingTierCard`
- **Purpose:** print pricing tiers
- **Props:** `{ name, price, details, featured?: boolean }`
- **Layout:** stacked heading, price, bullet list, CTA
- **Responsive:** columns desktop, stack mobile

### 11. `PrintProcessSteps`
- **Purpose:** explain print workflow
- **Props:** `{ steps: { number, title, body }[] }`
- **Layout:** horizontal timeline or 3-column card row
- **Responsive:** vertical stack mobile

### 12. `EquipmentList`
- **Purpose:** founder gear section
- **Props:** `{ groups: { heading, items[] }[] }`
- **Layout:** two-column spec layout with subtle dividers
- **Responsive:** single column mobile

### 13. `PressMentionList`
- **Purpose:** placeholder press mentions on About
- **Props:** `{ mentions: { outlet, note }[] }`
- **Layout:** minimalist rows or cards
- **Responsive:** stack naturally

### 14. `ContactInfoPanel`
- **Purpose:** address, phone, email, socials
- **Props:** `{ address, phone, email, socials }`
- **Layout:** text block with icon rows
- **Responsive:** sits above form on mobile

### 15. `ContactForm`
- **Purpose:** lead form
- **Props:** none or optional submit handler
- **Fields:** name, email, phone, enquiry type, message
- **Responsive:** full-width inputs, stacked

### 16. `InstagramPlaceholderGrid`
- **Purpose:** footer visual texture
- **Props:** `{ items: { image, alt }[] }`
- **Layout:** 3x2 small grid
- **Responsive:** stays 3 columns; shrinks tiles on mobile

### 17. `NewsletterSignup`
- **Purpose:** email capture on home and footer
- **Props:** `{ compact?: boolean }`
- **Layout:** heading, short copy, input, button
- **Responsive:** stacked on mobile, inline on desktop when space allows

### 18. `SiteFooter`
- **Purpose:** footer with links, newsletter, hours, Instagram placeholder
- **Props:** none
- **Layout:** multi-column dark band
- **Responsive:** stack sections with spacing on mobile

## Page Routes

### `/`
- **Title:** Saltwater Sessions | Surf Photography and Fine Art Prints in Mount Maunganui
- **Meta description:** Cinematic surf photography, fine art prints, and small-group workshops from Mount Maunganui, New Zealand.
- **Sections:** Hero, Featured Gallery Preview, Workshops CTA, Client Quote, Newsletter Signup, Footer

### `/gallery`
- **Title:** Gallery | Saltwater Sessions
- **Meta description:** Explore surf, ocean, lifestyle, and aerial photography from Saltwater Sessions in an immersive gallery format.
- **Sections:** Intro Header, Filter Bar, Masonry Grid, Lightbox Overlay, Prints CTA, Footer

### `/prints`
- **Title:** Prints | Saltwater Sessions
- **Meta description:** Museum-grade coastal prints with archival papers, framing options, and collector-ready presentation.
- **Sections:** Intro Hero, Print Process, Paper Types, Framing Options, Pricing Tiers, Care Instructions, Order CTA, Footer

### `/workshops`
- **Title:** Workshops | Saltwater Sessions
- **Meta description:** Join surf photography workshops in Mount Maunganui focused on light, water movement, and field technique.
- **Sections:** Intro Header, Upcoming Workshops Grid, What You’ll Learn, Field Notes, Booking CTA, Footer

### `/about`
- **Title:** About | Saltwater Sessions
- **Meta description:** Meet the founder of Saltwater Sessions and learn the philosophy behind this ocean-focused photography studio.
- **Sections:** Intro Hero, Founder Story, Philosophy, Equipment List, Press Mentions, Team Photo, Footer

### `/contact`
- **Title:** Contact | Saltwater Sessions
- **Meta description:** Contact Saltwater Sessions in Mount Maunganui for print orders, workshops, commissions, and studio enquiries.
- **Sections:** Intro Header, Contact Details and Form, Map Placeholder, Studio Hours, Footer

## Content

### Global Navigation
- Home
- Gallery
- Prints
- Workshops
- About
- Contact
- CTA button: `Book a Workshop`

### Home Page Copy
**Hero eyebrow:** `Mount Maunganui, New Zealand`

**Hero title:** `Surf culture, framed like fine art.`

**Hero body:** `Saltwater Sessions documents swell, stillness, and golden-hour texture from the shoreline to the sky. Limited-edition prints, gallery releases, and hands-on workshops for people who see the ocean as more than backdrop.`

**Hero primary CTA:** `View the Gallery`
**Hero secondary CTA:** `Explore Prints`

**Hero meta items:**
- `Limited-edition prints`
- `Surf + ocean photography`
- `Workshops at the Mount`

**Featured gallery intro eyebrow:** `Featured frames`
**Featured gallery intro title:** `A study in motion, light, and salt.`
**Featured gallery intro body:** `A rotating selection from recent surf, ocean, lifestyle, and aerial sessions. Shot with a documentary eye. Finished for the wall.`
**Featured gallery CTA:** `See all works`

**Workshops CTA eyebrow:** `Learn in the field`
**Workshops CTA title:** `Read the water. Chase the light. Shoot with intent.`
**Workshops CTA body:** `Small-group sessions for photographers who want stronger timing, cleaner composition, and more confidence working in fast coastal conditions.`
**Workshops CTA button:** `View workshops`

**Client quote:** `“The images feel like the Mount at its best — calm, powerful, and full of light. We bought one print and came back for three more.”`
**Client quote attribution:** `— Hannah R., Mount Maunganui`

**Newsletter heading:** `Golden hour, delivered occasionally.`
**Newsletter body:** `New print drops, workshop dates, and select releases. No spam. Just the good light.`
**Newsletter input label:** `Email address`
**Newsletter button:** `Join the list`

### Gallery Page Copy
**Header eyebrow:** `Archive`
**Header title:** `The gallery is the heart of the work.`
**Header body:** `Browse surf, ocean, lifestyle, and aerial studies. Tap into the detail. Open each frame for print sizes and pricing.`

**Filter labels:**
- `All`
- `Surf`
- `Ocean`
- `Lifestyle`
- `Aerial`

**Gallery items with print info:**
1. `Lines at First Light` — category `Surf` — sizes `A3 / A2 / A1` — price `from NZD 180`
2. `Hold The Edge` — `Surf` — sizes `A3 / A2 / A1` — `from NZD 180`
3. `Amber Break` — `Ocean` — sizes `A4 / A3 / A2` — `from NZD 140`
4. `Salt On Film` — `Lifestyle` — sizes `A4 / A3 / A2` — `from NZD 140`
5. `Sandbar Geometry` — `Aerial` — sizes `A3 / A2 / A1` — `from NZD 220`
6. `Inside The Section` — `Surf` — sizes `A3 / A2 / A1` — `from NZD 180`
7. `Glass Before Wind` — `Ocean` — sizes `A4 / A3 / A2` — `from NZD 140`
8. `Boardwalk Quiet` — `Lifestyle` — sizes `A4 / A3 / A2` — `from NZD 140`
9. `Blue Contours` — `Aerial` — sizes `A3 / A2 / A1` — `from NZD 220`
10. `Late Drop` — `Surf` — sizes `A3 / A2 / A1` — `from NZD 180`
11. `Tidal Pattern` — `Ocean` — sizes `A4 / A3 / A2` — `from NZD 140`
12. `Post Session` — `Lifestyle` — sizes `A4 / A3 / A2` — `from NZD 140`
13. `Coastline Study` — `Aerial` — sizes `A3 / A2 / A1` — `from NZD 220`
14. `Shoulder High` — `Surf` — sizes `A3 / A2 / A1` — `from NZD 180`
15. `Evening Texture` — `Ocean` — sizes `A4 / A3 / A2` — `from NZD 140`
16. `Toward The Water` — `Lifestyle` — sizes `A4 / A3 / A2` — `from NZD 140`

**Prints CTA heading:** `Seen something that belongs on your wall?`
**Prints CTA body:** `Every gallery image is available as a fine art print with archival materials and framing options.`
**Prints CTA button:** `Explore print options`

### Prints Page Copy
**Hero eyebrow:** `Fine art prints`
**Hero title:** `Made to hold light long after the session ends.`
**Hero body:** `Each print is produced using archival inks, exhibition-grade papers, and careful colour balancing to preserve the depth, softness, and movement of the original frame.`

**Process steps:**
1. `Select the frame` — `Choose from the gallery archive or request a recommendation based on your space.`
2. `Choose finish and size` — `Pick paper stock, framing style, and the scale that suits the room.`
3. `Printed and packed locally` — `Every order is quality checked, wrapped carefully, and prepared for safe delivery.`

**Paper types title:** `Paper stocks`
- `Matte Cotton Rag` — `Soft texture, rich blacks, gallery-style finish.`
- `Smooth Fine Art` — `Clean detail and crisp tonal range for brighter coastal scenes.`
- `Lustre Photo Paper` — `A durable option with a subtle sheen and punchier contrast.`

**Framing title:** `Framing options`
- `Raw Oak` — `Warm, understated, and ideal for sandy interiors.`
- `White Ash` — `Clean coastal finish for bright spaces.`
- `Black Gallery Frame` — `Sharper contrast for moodier work and darker walls.`

**Pricing heading:** `Print tiers`
- `Standard` — `From NZD 140` — `Unframed print, archival paper, protective sleeve.`
- `Premium` — `From NZD 290` — `Framed print, choice of three frame finishes, ready to hang.`
- `Collector` — `From NZD 640` — `Large-format framed print, signed certificate, limited release.`

**Care heading:** `Care instructions`
**Care body:** `Display away from direct harsh sunlight where possible. Dust frames with a soft dry cloth. Keep prints in stable indoor humidity and avoid hanging near salt-heavy exterior doors or steamy bathrooms.`

**Order CTA heading:** `Ready to order a print?`
**Order CTA body:** `Send through the image title, preferred size, and finish. We’ll confirm availability, lead time, and delivery options.`
**Order CTA button:** `Start your order`

### Workshops Page Copy
**Header eyebrow:** `In the field`
**Header title:** `Small groups. Stronger images. Better timing.`
**Header body:** `Saltwater Sessions workshops are designed for photographers who want to work closer to the water with more confidence, better judgement, and cleaner visual storytelling.`

**Workshop cards:**
1. `First Light Foundations`
   - Date: `12 April 2026`
   - Skill level: `Beginner to intermediate`
   - Location: `Main Beach, Mount Maunganui`
   - Price: `NZD 180`
   - Spots remaining: `5 spots left`
   - Summary: `An early-morning session covering exposure, shoreline positioning, and reading incoming sets.`
   - CTA: `View details`
2. `Golden Hour Water Texture`
   - Date: `26 April 2026`
   - Skill level: `Intermediate`
   - Location: `Pilot Bay`
   - Price: `NZD 220`
   - Spots remaining: `3 spots left`
   - Summary: `Learn how to work with reflective water, changing colour temperature, and layered compositions near sunset.`
   - CTA: `View details`
3. `Surf Action From Shore`
   - Date: `10 May 2026`
   - Skill level: `Intermediate to advanced`
   - Location: `Moturiki edge, Mount Maunganui`
   - Price: `NZD 260`
   - Spots remaining: `4 spots left`
   - Summary: `Track fast-moving subjects, anticipate manoeuvres, and shoot cleaner sequences without over-spraying frames.`
   - CTA: `View details`
4. `Aerial Coastline Study`
   - Date: `24 May 2026`
   - Skill level: `Advanced`
   - Location: `Mount shoreline and harbour edge`
   - Price: `NZD 320`
   - Spots remaining: `2 spots left`
   - Summary: `A composition-led session focused on pattern, tide shape, and abstract coastal storytelling from elevated angles.`
   - CTA: `View details`

**What you’ll learn heading:** `What you’ll learn`
- `How to read swell direction, light quality, and shoreline movement before you even lift the camera`
- `How to expose for whitewater, dark water, and reflective sunset surfaces`
- `How to compose surf imagery that feels intentional rather than reactive`
- `How to protect gear and move safely in salt-heavy, shifting conditions`
- `How to edit for cohesion without flattening the mood of the scene`

**Field notes heading:** `A workshop should feel like a working session, not a lecture.`
**Field notes body:** `Expect practical guidance, direct feedback, and a lot of time watching water before shooting. We focus on patience, timing, and the small adjustments that separate a good frame from a lasting one.`

**Booking CTA heading:** `Want a place in the next session?`
**Booking CTA button:** `Book your workshop`

### About Page Copy
**Hero eyebrow:** `About the studio`
**Hero title:** `Built on long sessions, quiet observation, and respect for the sea.`
**Hero body:** `Saltwater Sessions began as a way to document the Mount honestly — not just the action, but the atmosphere around it. The work sits between surf culture, local memory, and fine-art image making.`

**Founder story heading:** `Founder story`
**Founder story body:** `Founded by ocean photographer Maia Kells, Saltwater Sessions grew out of dawn patrol habits, years of coastal wandering, and an obsession with how fast light changes on water. Maia’s approach is less about chasing spectacle and more about waiting for the frame where motion, texture, and mood settle into something lasting. What started as personal field notes became commissioned shoots, print releases, and a studio known for calm, artful coastal imagery.`

**Philosophy heading:** `Philosophy`
**Philosophy body:** `The ocean doesn’t repeat itself. That’s the point. Saltwater Sessions photographs each break, tide, and weather shift as a one-off condition. The goal is to make images that still feel alive on a wall months later — not just proof that someone surfed there.`

**Equipment heading:** `Equipment list`
- `Sony A1 body`
- `Sony A7R V backup body`
- `70–200mm f/2.8`
- `100–400mm GM`
- `24–70mm f/2.8`
- `Polarising and ND filters`
- `DJI Air series drone`
- `Aquatech water housing`

**Press mentions heading:** `Press and features`
- `Placeholder — Wavelength-style editorial feature`
- `Placeholder — Local coastal design journal`
- `Placeholder — Bay of Plenty creative profile`

**Team section heading:** `Small crew. Sharp eye. Ocean-first.`
**Team section body:** `Production stays intentionally lean. Depending on the shoot, Saltwater Sessions works with a retoucher, framing partner, and local assistant photographers who know the coastline well.`

### Contact Page Copy
**Header eyebrow:** `Get in touch`
**Header title:** `Print orders, workshop questions, and commissions start here.`
**Header body:** `Reach out for availability, custom print advice, or upcoming session details. We’ll get back to you with clear next steps.`

**Contact details**
- Address label: `Studio`
- Address: `23 Pacific Avenue, Mount Maunganui 3116`
- Phone label: `Phone`
- Phone: `+64 7 555 0184`
- Email label: `Email`
- Email: `hello@saltwatersessions.co.nz`
- Social label: `Follow`
- Social links: `Instagram`, `Pinterest`, `Vimeo`

**Form labels**
- `Full name`
- `Email address`
- `Phone number`
- `Enquiry type`
- `Message`
- Enquiry options: `Print order`, `Workshop booking`, `Commission`, `General enquiry`
- Submit button: `Send enquiry`

**Map placeholder label:** `Studio location map`

**Studio hours**
- `Mon–Thu: 10am–4pm`
- `Fri: 10am–2pm`
- `Sat: Workshop days only`
- `Sun: Closed`

### Footer Copy
**Newsletter heading:** `Stay close to the next release.`
**Newsletter body:** `Occasional updates on print drops, workshop dates, and new coastal studies.`
**Newsletter button:** `Subscribe`

**Footer links heading:** `Browse`
- `Home`
- `Gallery`
- `Prints`
- `Workshops`
- `About`
- `Contact`

**Footer hours heading:** `Studio hours`
- `Mon–Thu: 10am–4pm`
- `Fri: 10am–2pm`
- `Sat: Workshop days only`

**Footer contact line:** `23 Pacific Avenue, Mount Maunganui 3116 · hello@saltwatersessions.co.nz · +64 7 555 0184`
**Footer copyright:** `© 2026 Saltwater Sessions. All rights reserved.`

## Image References

### Home
- Hero — `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&h=2200&fit=crop` — `Golden light over ocean swell rolling toward shore`
- Preview 1 — `https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=900&h=1200&fit=crop` — `Surfer lifestyle portrait in warm coastal light`
- Preview 2 — `https://images.unsplash.com/photo-1468413253725-0d5181091126?w=900&h=1400&fit=crop` — `Surfer moving through breaking wave`
- Preview 3 — `https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=900&h=1100&fit=crop` — `Textured ocean surface at sunset`
- Preview 4 — `https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&h=1300&fit=crop` — `Wave action with sunlit spray`
- Preview 5 — `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&h=1000&fit=crop` — `Aerial coastal patterns and sandbars`
- Preview 6 — `https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=900&h=1250&fit=crop` — `Figure walking near shoreline at dusk`
- Workshops CTA — `https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1200&h=900&fit=crop` — `Photographer with gear near the water`

### Gallery
Use the 16 gallery image URLs exactly as listed in the design spec. Keep associated titles, categories, print sizes, and starting prices in data.

### Prints
- Hero — `https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1400&h=1000&fit=crop` — `Framed coastal print displayed in a calm interior`
- Paper detail — `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&h=900&fit=crop` — `Desk and print material detail`
- Framing support — `https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1000&h=1200&fit=crop` — `Interior crop featuring framed art`

### Workshops
- Intro support — `https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&h=900&fit=crop` — `Photographer preparing camera by surf`
- Field notes — `https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1600&h=900&fit=crop` — `Rolling waves under moody light`
- Optional card detail — `https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=900&h=700&fit=crop` — `Surfer detail during manoeuvre`

### About
- Founder portrait — `https://images.unsplash.com/photo-1504593811423-6dd665756598?w=1200&h=1400&fit=crop` — `Photographer holding camera near coast`
- Philosophy background — `https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1600&h=900&fit=crop` — `Evening light over textured sea`
- Team photo — `https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1400&h=900&fit=crop` — `Small creative team outdoors`

### Contact
- Optional banner — `https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&h=700&fit=crop` — `Subtle coastal texture banner`
- Social card texture — `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000&h=700&fit=crop` — `Aerial coastline composition`

## Logo & Favicon SVG

### Logo SVG
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

### Favicon SVG
```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Saltwater Sessions favicon">
  <circle cx="16" cy="16" r="13" stroke="#0C2340" stroke-width="2"/>
  <path d="M16 7.5c-3.9 0-7.1 3.2-7.1 7.1 0 1.3.3 2.5.9 3.5.8-2.4 2.9-4.1 5.5-4.1 3.2 0 5.8 2.6 5.8 5.8 0 1.9-.9 3.5-2.3 4.6 3.3-1.2 5.6-4.3 5.6-7.9 0-4.9-3.2-9-8.4-9Z" fill="#0C2340"/>
  <circle cx="16" cy="16" r="2.2" fill="#0C2340"/>
</svg>
```

## Responsive Notes
- **Mobile (<768px):** prioritize stacked layouts, reduced copy measure, 1-column masonry, horizontally scrollable filter chips, collapsed nav, form fields full width.
- **Tablet (768px–1023px):** 2-column gallery and mixed split layouts where possible; workshop grid can remain 2 columns if spacing holds.
- **Desktop (1024px+):** use full-width cinematic hero, 4-column gallery masonry, side-by-side content blocks, sticky filter bar, richer negative space.
- **Large desktop (1440px+):** expand gallery width to max 1600px, increase hero copy scale, keep readable text widths capped.
- Prevent overflow on gallery overlays and footer grid. Test transparent-to-solid header contrast across hero image breakpoints.
