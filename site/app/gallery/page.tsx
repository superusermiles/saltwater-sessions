import type { Metadata } from 'next';

import GalleryClientPage from './GalleryClientPage';

export const metadata: Metadata = {
  title: 'Surf Photography Gallery in Mount Maunganui | Saltwater Sessions',
  description:
    'Browse the Saltwater Sessions surf photography gallery in Mount Maunganui, including ocean studies, aerial coastal prints, and lifestyle imagery.',
  alternates: {
    canonical: 'https://saltwater-sessions.vercel.app/gallery',
  },
  openGraph: {
    title: 'Surf Photography Gallery in Mount Maunganui | Saltwater Sessions',
    description:
      'Explore surf, ocean, lifestyle, and aerial photography from Mount Maunganui in the Saltwater Sessions gallery.',
    url: 'https://saltwater-sessions.vercel.app/gallery',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surf Photography Gallery in Mount Maunganui | Saltwater Sessions',
    description: 'Browse the Saltwater Sessions surf photography gallery from Mount Maunganui.',
  },
};

export default function GalleryPage() {
  return <GalleryClientPage />;
}
