import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Brunchito Cakes Düsseldorf",
  description: "Datenschutzerklärung gemäß DSGVO für Bestellungen, PayPal, Stripe und Webanalytik bei Brunchito Cakes.",
};

export default function DatenschutzPage() {
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
          Datenschutzerklärung
        </h1>

        <div style={{ backgroundColor: "#FFFFFF", padding: "30px", borderRadius: "18px", border: "1px solid #EAE4D9", boxShadow: "0 4px 20px rgba(59, 40, 27, 0.03)", lineHeight: "1.7", fontSize: "15px", color: "#5C4636", display: "flex", flexDirection: "column", gap: "20px" }}>
          
          <section>
            <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#2B2118", marginBottom: "8px" }}>
              1. Datenschutz auf einen Blick
            </h2>
            <p style={{ margin: 0 }}>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung behandelt.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#2B2118", marginBottom: "8px" }}>
              2. Verantwortliche Stelle
            </h2>
            <p style={{ margin: 0 }}>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
              <strong>Brunchito cakes</strong><br />
              Düsseldorf, Deutschland<br />
              E-Mail: brunchito@outlook.com<br />
              Telefon: +49 178 2083381
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#2B2118", marginBottom: "8px" }}>
              3. Datenerfassung bei Bestellungen
            </h2>
            <p style={{ margin: 0 }}>
              Wenn Sie eine Bestellung aufgeben, erfassen wir die von Ihnen eingegebenen Daten (Vor- und Nachname, Lieferadresse, Telefonnummer sowie den gewünschten Liefer- bzw. Abholtermin). Diese Daten dienen ausschließlich der Abwicklung, Vorbereitung und Auslieferung Ihrer Tortenbestellung (Art. 6 Abs. 1 lit. b DSGVO).
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#2B2118", marginBottom: "8px" }}>
              4. Zahlungsdienstleister (Stripe & PayPal)
            </h2>
            <p style={{ margin: "0 0 10px 0" }}>
              Für die sichere Zahlungsabwicklung binden wir externe Zahlungsdienstleister ein:
            </p>
            <ul style={{ margin: "0 0 10px 20px", padding: 0 }}>
              <li><strong>Stripe:</strong> Stripe Payments Europe, Ltd., 1 Grand Canal Street Lower, Dublin 2, Irland. Zahlungsdaten werden direkt an Stripe übermittelt.</li>
              <li><strong>PayPal:</strong> PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxemburg.</li>
            </ul>
            <p style={{ margin: 0 }}>
              Die Weitergabe erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Durchführung des Zahlungsvertrags.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#2B2118", marginBottom: "8px" }}>
              5. Webanalyse (Google Analytics 4)
            </h2>
            <p style={{ margin: 0 }}>
              Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics 4 (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Google Analytics verwendet Cookies und Technologien zur Analyse der Website-Nutzung. Wir verwenden Google Analytics mit aktivierter IP-Anonymisierung.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#2B2118", marginBottom: "8px" }}>
              6. Ihre Rechte
            </h2>
            <p style={{ margin: 0 }}>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
            </p>
          </section>

        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#2B2118", color: "#A89A8C", padding: "24px 20px", textAlign: "center", fontSize: "13px" }}>
        © 2026 Brunchito cakes Düsseldorf. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}