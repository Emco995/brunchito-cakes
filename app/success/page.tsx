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
    <div className="min-h-screen bg-[#FDFBF9] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-sm border border-[#F0EAE4] text-center">
        {/* Check Icon */}
        <div className="w-16 h-16 bg-[#EBE5DF] rounded-full flex items-center justify-center mx-auto mb-6 text-[#5C4D43]">
          <Check className="w-8 h-8" />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-[#2D2421] mb-2 font-serif">
          Bestellung erfolgreich!
        </h1>
        
        <p className="text-[#7A6B63] text-sm mb-6">
          Vielen Dank, <strong className="text-[#2D2421]">{name}</strong>! Ihre Zahlung über{" "}
          <strong className="text-[#2D2421]">{amount} €</strong> wurde erfolgreich erfasst.
        </p>

        {/* Order Details Card */}
        <div className="bg-[#FAF7F4] rounded-2xl p-5 text-left text-sm text-[#5C4D43] space-y-3 mb-8 border border-[#F0EAE4]">
          <div className="flex items-start gap-2">
            <span>📅</span>
            <div>
              <span className="font-semibold text-[#2D2421]">Wunschtermin:</span>{" "}
              {date}
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span>📍</span>
            <div>
              <span className="font-semibold text-[#2D2421]">Lieferadresse:</span>{" "}
              {address}
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span>💳</span>
            <div>
              <span className="font-semibold text-[#2D2421]">Zahlungsart:</span>{" "}
              {method}
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Link
          href="/"
          className="inline-block w-full py-3.5 px-6 rounded-full bg-[#5C4D43] text-white font-medium hover:bg-[#4A3D35] transition-colors"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FDFBF9] flex items-center justify-center">Laden...</div>}>
      <SuccessContent />
    </Suspense>
  );
}