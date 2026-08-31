"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

function SuccessContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Kunde";
  const total = searchParams.get("total") || "0.00";
  const date = searchParams.get("date") || "";
  const address = searchParams.get("address") || "";
  const method = searchParams.get("method") || "Online Zahlung";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{
        backgroundColor: "#FFFFFF",
        maxWidth: "520px",
        width: "100%",
        padding: "40px 30px",
        borderRadius: "24px",
        border: "1px solid #E5DFD3",
        boxShadow: "0 10px 30px rgba(59, 40, 27, 0.05)",
        textAlign: "center"
      }}
    >
      <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "#EDE6DA", color: "#7A5C43", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: "28px", fontWeight: "700" }}>
        ✓
      </div>
      <h1 style={{ fontFamily: "serif", fontSize: "26px", color: "#2B2118", margin: "0 0 10px" }}>
        Bestellung erfolgreich!
      </h1>
      <p style={{ color: "#6A584A", fontSize: "15px", margin: "0 0 24px" }}>
        Vielen Dank, <strong>{name}</strong>! Ihre Zahlung über <strong>{total} €</strong> wurde erfolgreich erfasst.
      </p>

      {/* DETALJI O PORUDŽBINI */}
      <div style={{ backgroundColor: "#F7F4EE", borderRadius: "14px", padding: "16px 20px", textAlign: "left", fontSize: "14px", color: "#5C4636", marginBottom: "26px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <div>📅 <strong>Wunschtermin:</strong> {date || "Wird abgestimmt"}</div>
        <div>📍 <strong>Lieferadresse:</strong> {address || "Vor Ort Abholung"}</div>
        <div>💳 <strong>Zahlungsart:</strong> {method}</div>
      </div>

      <Link
        href="/"
        style={{
          display: "inline-block",
          backgroundColor: "#7A5C43",
          color: "white",
          textDecoration: "none",
          padding: "12px 28px",
          borderRadius: "20px",
          fontSize: "14px",
          fontWeight: "600"
        }}
      >
        Zurück zur Startseite
      </Link>
    </motion.div>
  );
}

export default function SuccessPage() {
  return (
    <div style={{ backgroundColor: "#F7F4EE", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <Suspense fallback={<p style={{ color: "#7A5C43" }}>Laden...</p>}>
        <SuccessContent />
      </Suspense>
    </div>
  );
}