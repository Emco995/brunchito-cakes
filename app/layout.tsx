import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brunchito cakes Düsseldorf | Artisan Patisserie",
  description: "Exklusive handgemachte Torten für unvergessliche Momente in Düsseldorf.",
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