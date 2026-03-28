export type NavLink = {
  href: string;
  label: string;
};

export type GalleryItem = {
  title: string;
  category: 'Surf' | 'Ocean' | 'Lifestyle' | 'Aerial';
  image: string;
  alt: string;
  sizes: string;
  price: string;
};

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/prints', label: 'Prints' },
  { href: '/workshops', label: 'Workshops' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const galleryItems: GalleryItem[] = [
  {
    title: 'Lines at First Light',
    category: 'Surf',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&h=1400&fit=crop',
    alt: 'Golden swell line under early morning light',
    sizes: 'A3 / A2 / A1',
    price: 'from NZD 180',
  },
  {
    title: 'Hold The Edge',
    category: 'Surf',
    image: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?w=1000&h=1300&fit=crop',
    alt: 'Surfer carving along the face of a breaking wave',
    sizes: 'A3 / A2 / A1',
    price: 'from NZD 180',
  },
  {
    title: 'Amber Break',
    category: 'Ocean',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1000&h=1500&fit=crop',
    alt: 'Ocean surface glowing with amber evening light',
    sizes: 'A4 / A3 / A2',
    price: 'from NZD 140',
  },
  {
    title: 'Salt On Film',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1000&h=1250&fit=crop',
    alt: 'Coastal lifestyle portrait with warm surf light',
    sizes: 'A4 / A3 / A2',
    price: 'from NZD 140',
  },
  {
    title: 'Sandbar Geometry',
    category: 'Aerial',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000&h=1200&fit=crop',
    alt: 'Aerial view of coastal sandbars and tidal forms',
    sizes: 'A3 / A2 / A1',
    price: 'from NZD 220',
  },
  {
    title: 'Inside The Section',
    category: 'Surf',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1000&h=1450&fit=crop',
    alt: 'Powerful wave section folding with spray',
    sizes: 'A3 / A2 / A1',
    price: 'from NZD 180',
  },
  {
    title: 'Glass Before Wind',
    category: 'Ocean',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1000&h=1300&fit=crop',
    alt: 'Smooth rolling sea before offshore wind picks up',
    sizes: 'A4 / A3 / A2',
    price: 'from NZD 140',
  },
  {
    title: 'Boardwalk Quiet',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1000&h=1350&fit=crop',
    alt: 'Quiet shoreline walk at dusk beside the water',
    sizes: 'A4 / A3 / A2',
    price: 'from NZD 140',
  },
  {
    title: 'Blue Contours',
    category: 'Aerial',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1000&h=1400&fit=crop',
    alt: 'Abstract aerial contours across deep blue water',
    sizes: 'A3 / A2 / A1',
    price: 'from NZD 220',
  },
  {
    title: 'Late Drop',
    category: 'Surf',
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1000&h=1500&fit=crop',
    alt: 'Surfer dropping into a steep wave with speed',
    sizes: 'A3 / A2 / A1',
    price: 'from NZD 180',
  },
  {
    title: 'Tidal Pattern',
    category: 'Ocean',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&h=1300&fit=crop',
    alt: 'Subtle coastal patterning across a textured sea surface',
    sizes: 'A4 / A3 / A2',
    price: 'from NZD 140',
  },
  {
    title: 'Post Session',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=1000&h=1250&fit=crop',
    alt: 'Relaxed post-session coastal moment with documentary mood',
    sizes: 'A4 / A3 / A2',
    price: 'from NZD 140',
  },
  {
    title: 'Coastline Study',
    category: 'Aerial',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1000&h=1450&fit=crop',
    alt: 'Elevated coastline study showing tide lines and shape',
    sizes: 'A3 / A2 / A1',
    price: 'from NZD 220',
  },
  {
    title: 'Shoulder High',
    category: 'Surf',
    image: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?w=1000&h=1100&fit=crop',
    alt: 'Shoulder-high wave and surfer in clean motion',
    sizes: 'A3 / A2 / A1',
    price: 'from NZD 180',
  },
  {
    title: 'Evening Texture',
    category: 'Ocean',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1000&h=1200&fit=crop',
    alt: 'Evening texture across rippled ocean water',
    sizes: 'A4 / A3 / A2',
    price: 'from NZD 140',
  },
  {
    title: 'Toward The Water',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&h=1400&fit=crop',
    alt: 'Figure moving toward the shoreline with soft light',
    sizes: 'A4 / A3 / A2',
    price: 'from NZD 140',
  },
];

export const footerGridItems = [
  {
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&h=600&fit=crop',
    alt: 'Photographer by surf with camera ready',
  },
  {
    image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=600&h=600&fit=crop',
    alt: 'Figure walking near shore at dusk',
  },
  {
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=600&fit=crop',
    alt: 'Aerial coastline forms with pale sandbars',
  },
  {
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=600&fit=crop',
    alt: 'Textured ocean surface in evening light',
  },
  {
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&h=600&fit=crop',
    alt: 'Rolling coastal waves under moody sky',
  },
  {
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&h=600&fit=crop',
    alt: 'Breaking wave with sunlit spray',
  },
];
