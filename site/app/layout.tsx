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

const siteUrl = 'https://saltwater-sessions.vercel.app';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Saltwater Sessions',
  description:
    'Saltwater Sessions is a Mount Maunganui surf photography studio offering fine art prints, coastal photography, and small-group workshops.',
  url: siteUrl,
  telephone: '+64 7 555 0184',
  email: 'hello@saltwatersessions.co.nz',
  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&h=2200&fit=crop',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '23 Pacific Avenue',
    addressLocality: 'Mount Maunganui',
    addressRegion: 'Bay of Plenty',
    postalCode: '3116',
    addressCountry: 'NZ',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '10:00',
      closes: '16:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '10:00',
      closes: '14:00',
    },
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Mount Maunganui',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Bay of Plenty',
    },
    {
      '@type': 'Country',
      name: 'New Zealand',
    },
  ],
  sameAs: ['https://instagram.com', 'https://pinterest.com', 'https://vimeo.com'],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Surf Photography Mount Maunganui | Saltwater Sessions',
  description:
    'Surf photography in Mount Maunganui with fine art prints, coastal image releases, and photography workshops by Saltwater Sessions.',
  keywords: [
    'surf photography Mount Maunganui',
    'Mount Maunganui surf photographer',
    'fine art prints Mount Maunganui',
    'coastal photography New Zealand',
    'surf photography prints NZ',
    'photography workshops Mount Maunganui',
    'Bay of Plenty surf photography',
    'ocean photography prints',
  ],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Surf Photography Mount Maunganui | Saltwater Sessions',
    description:
      'Discover surf photography, fine art coastal prints, and photography workshops from Mount Maunganui, New Zealand.',
    url: siteUrl,
    siteName: 'Saltwater Sessions',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&h=2200&fit=crop',
        width: 1800,
        height: 2200,
        alt: 'Mount Maunganui surf photography with golden light over an ocean swell',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surf Photography Mount Maunganui | Saltwater Sessions',
    description:
      'Cinematic surf photography, fine art prints, and workshops from Mount Maunganui.',
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&h=2200&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
