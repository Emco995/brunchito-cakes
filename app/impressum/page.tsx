import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Brunchito Cakes Düsseldorf",
  description: "Rechtliche Angaben und Impressum gemäß § 5 DDG für Brunchito Cakes in Düsseldorf.",
};

export default function ImpressumPage() {
  return (
    <div style={{ backgroundColor: "#F7F4EE", color: "#3B281B", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* HEADER */}
      <header style={{ backgroundColor: "rgba(247, 244, 238, 0.98)", borderBottom: "1px solid #E5DFD3", padding: "16px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <div style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "1.2px solid #7A5C43",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
            }}>
              <span style={{ fontSize: "8px", fontWeight: "600", letterSpacing: "0.3px", color: "#7A5C43", lineHeight: 1 }}>Brunchito</span>
              <span style={{ fontSize: "7px", fontStyle: "italic", fontFamily: "serif", color: "#7A5C43", marginTop: "1.5px" }}>cakes</span>
            </div>
          </Link>

          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "#7A5C43",
              fontSize: "14px",
              fontWeight: "600",
              border: "1.5px solid #7A5C43",
              padding: "8px 18px",
              borderRadius: "20px",
              transition: "all 0.2s ease"
            }}
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </header>

      {/* CONTENT */}
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "50px 20px 80px", flexGrow: 1 }}>
        <h1 style={{ fontFamily: "serif", fontSize: "36px", color: "#2B2118", marginBottom: "24px" }}>
          Impressum
        </h1>

        <section style={{ backgroundColor: "#FFFFFF", padding: "30px", borderRadius: "18px", border: "1px solid #EAE4D9", boxShadow: "0 4px 20px rgba(59, 40, 27, 0.03)", lineHeight: "1.7", fontSize: "15px", color: "#5C4636" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#2B2118", marginBottom: "8px" }}>
            Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG):
          </h2>
          <p style={{ margin: "0 0 20px 0" }}>
            <strong>Brunchito cakes</strong><br />
            [Dino Hodzic des Inhabers]<br />
            [Brunnenstraße 13]<br />
            [40223 Düsseldorf]<br />
            Deutschland
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#2B2118", marginBottom: "8px" }}>
            Kontakt:
          </h2>
          <p style={{ margin: "0 0 20px 0" }}>
            Telefon: +49 178 2083381<br />
            E-Mail: brunchito@outlook.com<br />
            Website: www.brunchito.de
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#2B2118", marginBottom: "8px" }}>
            Umsatzsteuer:
          </h2>
          <p style={{ margin: "0 0 20px 0" }}>
            Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#2B2118", marginBottom: "8px" }}>
            Verbraucherstreitbeilegung / Universalschlichtungsstelle:
          </h2>
          <p style={{ margin: "0 0 20px 0" }}>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: "#7A5C43", textDecoration: "underline" }}>
              https://ec.europa.eu/consumers/odr/
            </a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#2B2118", marginBottom: "8px" }}>
            Haftung für Inhalte:
          </h2>
          <p style={{ margin: 0 }}>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#2B2118", color: "#A89A8C", padding: "24px 20px", textAlign: "center", fontSize: "13px" }}>
        © 2026 Brunchito cakes Düsseldorf. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}