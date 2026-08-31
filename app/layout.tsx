import type { Metadata } from "next";
import "./globals.css";

// Koristi tvoj tačan Vercel domen ili promenljivu
const siteUrl = "https://brunchito-cakes.vercel.app";
const ogImageUrl = `${siteUrl}/cake-strawberry.jpeg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Brunchito Cakes Düsseldorf | Handgemachte Premium-Torten & Cheesecake",
  description:
    "Exklusive, handgefertigte Premium-Torten & Cheesecakes in Düsseldorf. Frisch gebacken für Geburtstage, Jubiläen & besondere Momente. Jetzt online bestellen!",
  keywords: [
    "Torten Düsseldorf",
    "Cheesecake Düsseldorf",
    "Kuchen bestellen Düsseldorf",
    "Pistachio Cheesecake",
    "Lotus Cheesecake",
    "Patisserie Düsseldorf",
    "Brunchito Cakes",
  ],
  icons: {
    icon: "/cake-strawberry.jpeg",
    apple: "/cake-strawberry.jpeg",
  },
  openGraph: {
    title: "Brunchito Cakes Düsseldorf | Handgemachte Premium-Torten",
    description:
      "Handgefertigte Artisan-Torten in Düsseldorf. Frisch mit Liebe gebacken – einfach online Wunschtermin wählen und genießen.",
    url: siteUrl,
    siteName: "Brunchito Cakes Düsseldorf",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Brunchito Cakes Düsseldorf",
        type: "image/jpeg",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brunchito Cakes Düsseldorf | Premium-Torten",
    description: "Handgemachte Premium-Torten & Cheesecakes in Düsseldorf.",
    images: [ogImageUrl],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Brunchito Cakes",
  image: ogImageUrl,
  description: "Handgemachte Premium-Torten & Cheesecakes in Düsseldorf.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Düsseldorf",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.2277,
    longitude: 6.7735,
  },
  telephone: "+491782083381",
  priceRange: "€€",
  servesCuisine: "Patisserie, Cakes, Cheesecake",
  url: siteUrl,
  sameAs: [
    "https://instagram.com/brunchito.de",
  ],
  hasMenu: `${siteUrl}#torten`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}