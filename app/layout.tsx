import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brunchito Cakes Düsseldorf | Handgemachte Premium-Torten",
  description: "Exklusive, handgefertigte Torten in Düsseldorf. Frisch gebacken für besondere Anlässe. Einfach online bestellen.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://brunchito-cakes.vercel.app"),
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Brunchito Cakes Düsseldorf | Handgemachte Torten",
    description: "Exklusive, handgefertigte Torten in Düsseldorf. Frisch gebacken für besondere Anlässe.",
    url: "https://brunchito-cakes.vercel.app",
    siteName: "Brunchito Cakes",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Brunchito Cakes Düsseldorf",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brunchito Cakes Düsseldorf",
    description: "Handgemachte Premium-Torten in Düsseldorf.",
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
      <body>{children}</body>
    </html>
  );
}