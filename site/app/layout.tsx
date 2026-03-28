import type { Metadata } from 'next';
import { Nunito_Sans, Playfair_Display } from 'next/font/google';

import './globals.css';

const headingFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-heading',
});

const bodyFont = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saltwater-sessions.vercel.app'),
  title: 'Saltwater Sessions | Surf Photography and Fine Art Prints in Mount Maunganui',
  description:
    'Cinematic surf photography, fine art prints, and small-group workshops from Mount Maunganui, New Zealand.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Saltwater Sessions | Surf Photography and Fine Art Prints in Mount Maunganui',
    description:
      'Cinematic surf photography, fine art prints, and small-group workshops from Mount Maunganui, New Zealand.',
    url: 'https://saltwater-sessions.vercel.app',
    siteName: 'Saltwater Sessions',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&h=2200&fit=crop',
        width: 1800,
        height: 2200,
        alt: 'Golden light over ocean swell rolling toward shore',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
  alternates: {
    canonical: 'https://saltwater-sessions.vercel.app',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
