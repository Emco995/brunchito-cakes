import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brunchito-cakes.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Brunchito Cakes Düsseldorf | Handgemachte Premium-Torten",
  description: "Exklusive, handgefertigte Torten in Düsseldorf. Frisch gebacken für besondere Anlässe. Einfach online bestellen.",
  icons: {
    icon: [
      { url: "/logo.jpg" },
      { url: "/logo.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/logo.jpg", sizes: "192x192", type: "image/jpeg" },
    ],
    apple: [
      { url: "/logo.jpg" },
    ],
    shortcut: "/logo.jpg",
  },
  openGraph: {
    title: "Brunchito Cakes Düsseldorf | Handgemachte Premium-Torten",
    description: "Exklusive, handgefertigte Torten in Düsseldorf. Frisch gebacken für besondere Anlässe. Einfach online bestellen.",
    url: siteUrl,
    siteName: "Brunchito Cakes",
    images: [
      {
        url: "/logo.jpg",
        width: 1024,
        height: 1024,
        alt: "Brunchito Cakes Logo",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Brunchito Cakes Düsseldorf",
    description: "Exklusive, handgefertigte Torten in Düsseldorf.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/logo.jpg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}