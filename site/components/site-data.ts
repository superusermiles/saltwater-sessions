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
    alt: 'Mount Maunganui surf photography print with a golden swell line at first light',
    sizes: 'A3 / A2 / A1',
    price: 'from NZD 180',
  },
  {
    title: 'Hold The Edge',
    category: 'Surf',
    image: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?w=1000&h=1300&fit=crop',
    alt: 'Surf photography of a surfer carving along a breaking Mount Maunganui wave',
    sizes: 'A3 / A2 / A1',
    price: 'from NZD 180',
  },
  {
    title: 'Amber Break',
    category: 'Ocean',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1000&h=1500&fit=crop',
    alt: 'Ocean photography print with amber evening light over textured coastal water',
    sizes: 'A4 / A3 / A2',
    price: 'from NZD 140',
  },
  {
    title: 'Salt On Film',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1000&h=1250&fit=crop',
    alt: 'Mount Maunganui coastal lifestyle photography portrait with warm surf light',
    sizes: 'A4 / A3 / A2',
    price: 'from NZD 140',
  },
  {
    title: 'Sandbar Geometry',
    category: 'Aerial',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000&h=1200&fit=crop',
    alt: 'Aerial coastal photography print showing sandbars and tidal forms near the Mount',
    sizes: 'A3 / A2 / A1',
    price: 'from NZD 220',
  },
  {
    title: 'Inside The Section',
    category: 'Surf',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1000&h=1450&fit=crop',
    alt: 'Mount Maunganui surf photography print of a powerful wave section folding with spray',
    sizes: 'A3 / A2 / A1',
    price: 'from NZD 180',
  },
  {
    title: 'Glass Before Wind',
    category: 'Ocean',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1000&h=1300&fit=crop',
    alt: 'Ocean photography print with smooth rolling sea before offshore wind arrives',
    sizes: 'A4 / A3 / A2',
    price: 'from NZD 140',
  },
  {
    title: 'Boardwalk Quiet',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1000&h=1350&fit=crop',
    alt: 'Coastal lifestyle photography of a quiet shoreline walk at dusk in Mount Maunganui',
    sizes: 'A4 / A3 / A2',
    price: 'from NZD 140',
  },
  {
    title: 'Blue Contours',
    category: 'Aerial',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1000&h=1400&fit=crop',
    alt: 'Aerial ocean photography showing abstract blue contours across coastal water',
    sizes: 'A3 / A2 / A1',
    price: 'from NZD 220',
  },
  {
    title: 'Late Drop',
    category: 'Surf',
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1000&h=1500&fit=crop',
    alt: 'Surf photography print of a surfer dropping into a steep Mount Maunganui wave',
    sizes: 'A3 / A2 / A1',
    price: 'from NZD 180',
  },
  {
    title: 'Tidal Pattern',
    category: 'Ocean',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&h=1300&fit=crop',
    alt: 'Ocean photography print showing subtle tidal patterns across textured sea water',
    sizes: 'A4 / A3 / A2',
    price: 'from NZD 140',
  },
  {
    title: 'Post Session',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=1000&h=1250&fit=crop',
    alt: 'Lifestyle surf photography capturing a relaxed post-session coastal moment',
    sizes: 'A4 / A3 / A2',
    price: 'from NZD 140',
  },
  {
    title: 'Coastline Study',
    category: 'Aerial',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1000&h=1450&fit=crop',
    alt: 'Aerial coastal photography print showing tide lines and shoreline shape in New Zealand',
    sizes: 'A3 / A2 / A1',
    price: 'from NZD 220',
  },
  {
    title: 'Shoulder High',
    category: 'Surf',
    image: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?w=1000&h=1100&fit=crop',
    alt: 'Surf photography print with a shoulder-high wave and surfer in clean motion',
    sizes: 'A3 / A2 / A1',
    price: 'from NZD 180',
  },
  {
    title: 'Evening Texture',
    category: 'Ocean',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1000&h=1200&fit=crop',
    alt: 'Ocean photography print with evening texture across rippled coastal water',
    sizes: 'A4 / A3 / A2',
    price: 'from NZD 140',
  },
  {
    title: 'Toward The Water',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&h=1400&fit=crop',
    alt: 'Coastal lifestyle photography of a figure moving toward the shoreline in soft light',
    sizes: 'A4 / A3 / A2',
    price: 'from NZD 140',
  },
];

export const footerGridItems = [
  {
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&h=600&fit=crop',
    alt: 'Mount Maunganui surf photographer by the water with camera ready',
  },
  {
    image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=600&h=600&fit=crop',
    alt: 'Quiet shoreline walk near Mount Maunganui at dusk',
  },
  {
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=600&fit=crop',
    alt: 'Aerial coastal photography with pale sandbars and shoreline shape',
  },
  {
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=600&fit=crop',
    alt: 'Textured ocean surface in evening light for a coastal fine art print',
  },
  {
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&h=600&fit=crop',
    alt: 'Rolling coastal waves under moody sky in Mount Maunganui',
  },
  {
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&h=600&fit=crop',
    alt: 'Breaking wave with sunlit spray captured as surf photography art',
  },
];
