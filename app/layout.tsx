import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://brunchito-cakes.vercel.app";

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
  authors: [{ name: "Brunchito Cakes" }],
  creator: "Brunchito Cakes",
  publisher: "Brunchito Cakes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/cake-strawberry.jpeg", // Kasnije možeš zameniti namenskim /favicon.ico ili /logo.png
    apple: "/cake-strawberry.jpeg",
  },
  openGraph: {
    title: "Brunchito Cakes Düsseldorf | Handgemachte Premium-Torten",
    description:
      "Handgefertigte Artisan-Torten in Düsseldorf. Frisch mit Liebe gebacken – einfach online Wunschtermin wählen und genießen.",
    url: siteUrl,
    siteName: "Brunchito Cakes",
    images: [
      {
        url: "/cake-strawberry.jpeg",
        width: 1200,
        height: 630,
        alt: "Brunchito Cakes Düsseldorf Premium Torten",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brunchito Cakes Düsseldorf | Premium-Torten",
    description: "Handgemachte Premium-Torten & Cheesecakes in Düsseldorf.",
    images: ["/cake-strawberry.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Google Schema.org struktuirani podaci za lokalni biznis (Bakery / Café)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Brunchito Cakes",
  image: `${siteUrl}/cake-strawberry.jpeg`,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}