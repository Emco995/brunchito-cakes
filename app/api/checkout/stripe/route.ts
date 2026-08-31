import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-06-20" as any,
});

export async function POST(req: Request) {
  try {
    const { items, customerData } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Warenkorb ist leer." }, { status: 400 });
    }

    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.name,
          images: item.image ? [`${process.env.NEXT_PUBLIC_SITE_URL || "https://brunchito-cakes.vercel.app"}${item.image}`] : [],
        },
        unit_amount: Math.round(Number(item.price) * 100),
      },
      quantity: item.quantity,
    }));

    // Dodajemo dostavu 5 €
    lineItems.push({
      price_data: {
        currency: "eur",
        product_data: {
          name: "Lieferung in Düsseldorf (oder Abholung)",
        },
        unit_amount: 500,
      },
      quantity: 1,
    });

    // Računamo ukupan iznos za prikaz na success stranici
    const totalAmount = (
      items.reduce((acc: number, item: any) => acc + Number(item.price) * item.quantity, 0) + 5
    ).toFixed(2);

    const fullName = customerData.firstName
      ? `${customerData.firstName} ${customerData.lastName || ""}`.trim()
      : "Kunde";

    const successParams = new URLSearchParams({
      name: fullName,
      amount: totalAmount,
      date: customerData.date || "Wird abgestimmt",
      address: customerData.address || "Vor Ort Abholung",
      method: "Kreditkarte",
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      customer_email: customerData.email || undefined,
      metadata: {
        customerName: fullName,
        deliveryDate: customerData.date || "",
        address: customerData.address || "",
        phone: customerData.phone || "",
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://brunchito-cakes.vercel.app"}/success?${successParams.toString()}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://brunchito-cakes.vercel.app"}/#torten`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}