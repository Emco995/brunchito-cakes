import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://brunchito-cakes.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Brunchito Cakes Düsseldorf | Handgemachte Premium-Torten",
  description:
    "Exklusive, handgefertigte Torten in Düsseldorf. Frisch gebacken für besondere Anlässe. Einfach online bestellen.",
  openGraph: {
    title: "Brunchito Cakes Düsseldorf | Handgemachte Premium-Torten",
    description:
      "Exklusive, handgefertigte Torten in Düsseldorf. Frisch gebacken für besondere Anlässe. Einfach online bestellen.",
    url: siteUrl,
    siteName: "Brunchito Cakes",
    locale: "de_DE",
    type: "website",
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