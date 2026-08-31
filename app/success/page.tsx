"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "Kunde";
  const amount = searchParams.get("amount") || "0.00";
  const date = searchParams.get("date") || "Wird abgestimmt";
  const address = searchParams.get("address") || "Vor Ort Abholung";
  const method = searchParams.get("method") || "Online Zahlung";

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "rgba(250, 248, 245, 0.95)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }}>
      <div style={{
        maxWidth: "480px",
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: "24px",
        padding: "36px 28px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        border: "1px solid rgba(0,0,0,0.05)",
        textAlign: "center"
      }}>
        {/* Zelena ikonica za potvrdu */}
        <div style={{
          width: "60px",
          height: "60px",
          backgroundColor: "#EBF3EC",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 20px auto",
          color: "#4A7C59"
        }}>
          <Check style={{ width: "32px", height: "32px", strokeWidth: 2.5 }} />
        </div>

        {/* Naslov */}
        <h1 style={{
          fontSize: "26px",
          fontWeight: "700",
          color: "#2C221E",
          margin: "0 0 10px 0"
        }}>
          Bestellung erfolgreich!
        </h1>

        <p style={{
          fontSize: "15px",
          color: "#6B5E57",
          lineHeight: "1.5",
          margin: "0 0 24px 0"
        }}>
          Vielen Dank, <strong style={{ color: "#2C221E" }}>{name}</strong>! Ihre Zahlung über{" "}
          <strong style={{ color: "#2C221E" }}>{amount} €</strong> wurde erfolgreich erfasst.
        </p>

        {/* Detalji narudžbe u sivo-krem kartici */}
        <div style={{
          backgroundColor: "#F8F6F2",
          borderRadius: "16px",
          padding: "18px 20px",
          textAlign: "left",
          fontSize: "14px",
          color: "#4A3E39",
          marginBottom: "28px",
          border: "1px solid rgba(0,0,0,0.03)"
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
            <span>📅</span>
            <div>
              <span style={{ fontWeight: "600", color: "#2C221E" }}>Wunschtermin:</span> {date}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
            <span>📍</span>
            <div>
              <span style={{ fontWeight: "600", color: "#2C221E" }}>Lieferadresse:</span> {address}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <span>💳</span>
            <div>
              <span style={{ fontWeight: "600", color: "#2C221E" }}>Zahlungsart:</span> {method}
            </div>
          </div>
        </div>

        {/* Dugme za povratak na početnu */}
        <Link
          href="/"
          style={{
            display: "inline-block",
            width: "100%",
            boxSizing: "border-box",
            padding: "14px 24px",
            borderRadius: "30px",
            backgroundColor: "#5C4A42",
            color: "#FFFFFF",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "15px",
            transition: "all 0.2s ease"
          }}
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>Laden...</div>}>
      <SuccessContent />
    </Suspense>
  );
}