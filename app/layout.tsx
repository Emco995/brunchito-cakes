import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://brunchito.de';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Brunchito Cakes | Domaće torte Düsseldorf',
    template: '%s | Brunchito Cakes',
  },
  description:
    'Ručno rađene premium torte i poslastice po narudžbi u Düsseldorfu. Svježi sastojci, unikatne dekoracije i brza dostava.',
  alternates: {
    canonical: './',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Brunchito Cakes | Domaće torte Düsseldorf',
    description:
      'Ručno rađene premium torte i poslastice po narudžbi u Düsseldorfu.',
    url: siteUrl,
    siteName: 'Brunchito Cakes',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Brunchito Cakes Düsseldorf',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brunchito Cakes | Domaće torte Düsseldorf',
    description:
      'Ručno rađene premium torte i poslastice po narudžbi u Düsseldorfu.',
    images: ['/opengraph-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: 'Brunchito Cakes',
    image: `${siteUrl}/opengraph-image.png`,
    '@id': siteUrl,
    url: siteUrl,
    telephone: '+4917600000000', // Zamijeni svojim kontakt telefonom
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Düsseldorf',
      addressRegion: 'NRW',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.2277,
      longitude: 6.7735,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
  };

  return (
    <html lang="de">
      <body className={inter.className}>
        {/* Schema.org strukturirani podaci za Google (LocalBusiness / Bakery) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Semantički main wrapper oko stranice */}
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}