"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Cake {
  id: number;
  name: string;
  price: number;
  image: string;
  badge?: string;
}

interface CartItem extends Cake {
  quantity: number;
}

// 4 TORTE U PONUDI
const cakes: Cake[] = [
  { id: 1, name: "Pistachio Cheesecake", price: 50.0, image: "/cake-pistachio.jpeg", badge: "Bestseller" },
  { id: 2, name: "Lotus Cheesecake", price: 45.0, image: "/cake-lotus.jpeg" },
  { id: 3, name: "Coconut Cheesecake", price: 45.0, image: "/cake-coconut.jpeg" },
  { id: 4, name: "Nougat Cheesecake", price: 45.0, image: "/cake-chocolate.jpeg" }
];

const steps = [
  {
    number: "01",
    title: "Torte & Geschmack wählen",
    description: "Vier Rezepte, jedes mit einer eigenen Auswahl an feinsten Aromen."
  },
  {
    number: "02",
    title: "Wunschtermin wählen",
    description: "Reserviere den Tag, an dem deine Torte frisch für dich gebacken wird."
  },
  {
    number: "03",
    title: "Abholung oder Lieferung",
    description: "Nur 5 € für die Lieferung in Düsseldorf – oder kostenlose Abholung vor Ort."
  }
];

const allReviews = [
  { name: "Laura M.", city: "Düsseldorf-Oberkassel", text: "Der Lotus Cheesecake war das absolute Highlight auf meiner Geburtstagsfeier! Unglaublich frisch und nicht zu süß." },
  { name: "Stefan & Elena", city: "Düsseldorf-Pempelfort", text: "Wunderschönes Design und ein himmlischer Geschmack. Werden definitiv für die nächste Feier wieder bestellen!" },
  { name: "Jasmin K.", city: "Düsseldorf-Stadtmitte", text: "Pünktlich geliefert, liebevoll dekoriert und geschmacklich eine 10/10. Sehr zu empfehlen!" },
  { name: "Maximilian B.", city: "Düsseldorf-MedienHafen", text: "Der Pistachio Cheesecake hat alle Erwartungen übertroffen. So samtig und fein abgeschmeckt – pure Handwerkskunst!" },
  { name: "Sarah A.", city: "Düsseldorf-Carlstadt", text: "Endlich eine Patisserie in Düsseldorf, die mit so viel Liebe zum Detail bäckt. Die Optik ist einfach Instagram-ready." },
  { name: "David & Anna", city: "Meerbusch", text: "Hatten den Nougat Cheesecake für unser Jubiläum bestellt. Alle Gäste waren restlos begeistert. Vielen Dank!" },
  { name: "Carolin H.", city: "Düsseldorf-Derendorf", text: "Der Coconut Cheesecake war ein Traum! Leicht, sommerlich und wunderschön verziert mit den kleinen Blüten." },
  { name: "Felix T.", city: "Düsseldorf-Benrath", text: "Der Bestellprozess war super unkompliziert und die Torte pünktlich abholbereit. Großes Lob an das gesamte Team!" },
  { name: "Juan O.", city: "Düsseldorf-Flingern", text: "Brunchito Cakes ist ab jetzt meine erste Anlaufstelle für jeden Anlass. Qualität, die man mit jedem Bissen schmeckt." }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [reviewPage, setReviewPage] = useState(0);

  // Formular podaci
  const [customerData, setCustomerData] = useState({
    date: "",
    firstName: "",
    lastName: "",
    address: "",
    phone: ""
  });

  // Računanje minimalnog datuma (sutrašnji dan)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setReviewPage((prev) => (prev + 1) % 3);
    }, 12000);
    return () => clearInterval(reviewInterval);
  }, []);

  const addToCart = (cake: Cake) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === cake.id);
      if (existing) {
        return prev.map((item) =>
          item.id === cake.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...cake, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + delta } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const totalAmount = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const currentReviews = allReviews.slice(reviewPage * 3, reviewPage * 3 + 3);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSuccess(true);
  };

  return (
    <div style={{ backgroundColor: "#F7F4EE", color: "#3B281B", minHeight: "100vh" }}>
      
      {/* PRELOADER */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ y: "-100%", transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              backgroundColor: "#F2ECE1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                border: "1.8px solid #7A5C43",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                boxShadow: "0 10px 30px rgba(122, 92, 67, 0.08)",
              }}
            >
              <motion.span
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{ fontSize: "21px", fontWeight: "600", letterSpacing: "0.5px", color: "#7A5C43", lineHeight: 1 }}
              >
                Brunchito
              </motion.span>
              <motion.span
                initial={{ y: 0, opacity: 1 }}
                style={{ fontSize: "19px", fontStyle: "italic", fontFamily: "serif", color: "#7A5C43", marginTop: "4px" }}
              >
                cakes
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{ color: "#7A5C43", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", marginTop: "24px", fontWeight: "600" }}
            >
              Artisan patisserie - Düsseldorf
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER */}
      <header style={{ position: "sticky", top: 0, zIndex: 40, backgroundColor: "rgba(247, 244, 238, 0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid #E5DFD3", padding: "14px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", cursor: "pointer" }}>
            <div style={{ 
              width: "56px", 
              height: "56px", 
              borderRadius: "50%", 
              border: "1.2px solid #7A5C43", 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              justifyContent: "center", 
              backgroundColor: "transparent",
              cursor: "pointer" 
            }}>
              <span style={{ fontSize: "8.5px", fontWeight: "600", letterSpacing: "0.3px", color: "#7A5C43", lineHeight: 1 }}>Brunchito</span>
              <span style={{ fontSize: "7.5px", fontStyle: "italic", fontFamily: "serif", color: "#7A5C43", marginTop: "1.5px" }}>cakes</span>
            </div>
          </a>

          <nav style={{ display: "flex", gap: "22px", alignItems: "center" }}>
            <a href="#ueber-uns" style={{ textDecoration: "none", color: "#5C4636", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>Über uns</a>
            <a href="#torten" style={{ textDecoration: "none", color: "#5C4636", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>Torten</a>
            <a href="#bestellung" style={{ textDecoration: "none", color: "#5C4636", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>Bestellung</a>
            <a href="#bewertungen" style={{ textDecoration: "none", color: "#5C4636", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>Bewertungen</a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCartOpen(true)}
              style={{ display: "flex", alignItems: "center", gap: "8px", backgroundColor: "#7A5C43", color: "white", border: "none", padding: "8px 16px", borderRadius: "20px", cursor: "pointer", fontSize: "14px", fontWeight: "600" }}
            >
              <span>Warenkorb</span>
              <span style={{ backgroundColor: "#3B281B", color: "white", borderRadius: "50%", padding: "2px 7px", fontSize: "11px", minWidth: "14px", textAlign: "center" }}>
                {totalItems}
              </span>
            </motion.button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={{ padding: "80px 24px 60px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: isLoading ? 2.4 : 0.1 }}
        >
          <div style={{ display: "inline-block", backgroundColor: "#EDE6DA", color: "#7A5C43", padding: "6px 16px", borderRadius: "20px", fontSize: "13px", fontWeight: "700", marginBottom: "20px", letterSpacing: "1px" }}>
            FRISCH UND MIT LIEBE GEBACKEN
          </div>
          <h1 style={{ fontSize: "clamp(34px, 5vw, 56px)", fontWeight: "500", fontFamily: "serif", color: "#2B2118", lineHeight: 1.15, margin: "0 0 20px" }}>
            Handgemachte Torten für unvergessliche Momente
          </h1>
          <p style={{ fontSize: "17px", color: "#6A584A", lineHeight: 1.6, maxWidth: "580px", margin: "0 auto 30px", fontWeight: "400" }}>
            Entdecken Sie unsere handgefertigten Premium-Torten in Düsseldorf. Einfach online auswählen, Wunschtermin für Abholung oder Lieferung angeben und bequem bezahlen.
          </p>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#torten"
            style={{ display: "inline-block", backgroundColor: "#7A5C43", color: "white", textDecoration: "none", padding: "14px 32px", borderRadius: "30px", fontSize: "16px", fontWeight: "600", cursor: "pointer", letterSpacing: "0.5px" }}
          >
            Unsere Torten entdecken
          </motion.a>
        </motion.div>
      </section>

      {/* ÜBER UNS */}
      <section id="ueber-uns" style={{ backgroundColor: "#EDE6DA", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "center" }}>
          <div>
            <span style={{ color: "#7A5C43", fontSize: "13px", fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase" }}>Brunchito cakes Düsseldorf</span>
            <h2 style={{ fontFamily: "serif", fontSize: "38px", color: "#2B2118", margin: "12px 0 20px", lineHeight: 1.15 }}>
              Dein Geschmack.<br />Dein Moment.
            </h2>
            <p style={{ color: "#6A584A", lineHeight: 1.7, fontSize: "16px", marginBottom: "16px" }}>
              Bei Brunchito cakes in Düsseldorf kreieren wir exklusive Torten in sorgfältiger Handarbeit. Wir setzen auf stilvolles Boho-Design, harmonische Aromen und frische Zubereitung für die besonderen Momente im Leben.
            </p>
            <p style={{ color: "#6A584A", lineHeight: 1.7, fontSize: "16px", marginBottom: "20px" }}>
              Haben Sie Fragen zu speziellen Wünschen oder Allergenen? Rufen Sie uns gerne direkt an oder schreiben Sie per WhatsApp.
            </p>
            
            <a
              href="tel:+491782083381"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", backgroundColor: "#7A5C43", color: "white", textDecoration: "none", padding: "10px 22px", borderRadius: "20px", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>+49 178 2083381</span>
            </a>
          </div>
          <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid #D9CFC1" }}>
            <img src="/cake-strawberry.jpeg" alt="Brunchito Erdbeer Torte Düsseldorf" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </section>

      {/* TORTEN */}
      <section id="torten" style={{ padding: "80px 24px 100px", maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontFamily: "serif", fontSize: "36px", color: "#2B2118", margin: "0 0 10px" }}>Unsere Auswahl</h2>
          <p style={{ color: "#7A5C43", fontSize: "16px" }}>Jede Torte reicht für ca. 8-10 Personen (Ø 20cm)</p>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "24px" 
        }}>
          {cakes.map((cake, index) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", overflow: "hidden", border: "1px solid #EAE4D9", display: "flex", flexDirection: "column", boxShadow: "0 4px 20px rgba(59, 40, 27, 0.04)" }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", backgroundColor: "#F0EAE1", overflow: "hidden" }}>
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={cake.image}
                  alt={cake.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                {cake.badge && (
                  <span style={{ position: "absolute", top: "12px", left: "12px", backgroundColor: "#7A5C43", color: "white", fontSize: "12px", fontWeight: "700", padding: "4px 10px", borderRadius: "12px", zIndex: 2 }}>
                    {cake.badge}
                  </span>
                )}
              </div>

              <div style={{ padding: "18px", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                <div>
                  <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#2B2118", margin: "0 0 6px" }}>{cake.name}</h3>
                  <p style={{ fontSize: "19px", fontWeight: "700", color: "#7A5C43", margin: "0 0 16px" }}>
                    {cake.price.toFixed(2)} €
                  </p>
                </div>

                <button
                  onClick={() => addToCart(cake)}
                  style={{ width: "100%", backgroundColor: "#F7F4EE", color: "#3B281B", border: "1.5px solid #7A5C43", padding: "10px", borderRadius: "10px", fontSize: "14px", fontWeight: "700", cursor: "pointer", transition: "all 0.2s" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#7A5C43";
                    e.currentTarget.style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#F7F4EE";
                    e.currentTarget.style.color = "#3B281B";
                  }}
                >
                  In den Warenkorb
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BESTELLUNG */}
      <section id="bestellung" style={{ backgroundColor: "#F2ECE1", padding: "90px 24px" }}>
        <div style={{ maxWidth: "1150px", margin: "0 auto", textAlign: "center" }}>
          
          <span style={{ color: "#7A5C43", fontSize: "13px", letterSpacing: "3.5px", textTransform: "uppercase", fontWeight: "700", display: "inline-block", marginBottom: "50px" }}>
            THREE STEPS TO YOUR CAKE
          </span>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                style={{
                  backgroundColor: "#FAF7F2",
                  borderRadius: "28px",
                  padding: "44px 32px",
                  textAlign: "left",
                  border: "1px solid #E5DFD3",
                  boxShadow: "0 6px 25px rgba(59, 40, 27, 0.03)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <span style={{ fontSize: "38px", fontWeight: "400", fontFamily: "serif", color: "#C09062", marginBottom: "20px", display: "block", lineHeight: 1 }}>
                  {step.number}
                </span>

                <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#2B2118", margin: "0 0 16px", lineHeight: 1.25 }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: "16px", color: "#6A584A", lineHeight: 1.6, margin: 0 }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* BEWERTUNGEN */}
      <section id="bewertungen" style={{ padding: "90px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "serif", fontSize: "36px", color: "#2B2118", margin: "0 0 10px" }}>Das sagen unsere Kunden</h2>
          <p style={{ color: "#7A5C43", fontSize: "16px" }}>Echte Rückmeldungen aus Düsseldorf & Umgebung</p>
        </div>

        <div style={{ minHeight: "220px", position: "relative" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={reviewPage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}
            >
              {currentReviews.map((rev, idx) => (
                <div
                  key={idx}
                  style={{ backgroundColor: "#FFFFFF", padding: "28px", borderRadius: "16px", border: "1px solid #EAE4D9", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 4px 15px rgba(59, 40, 27, 0.03)" }}
                >
                  <div>
                    <div style={{ color: "#D4A373", fontSize: "18px", marginBottom: "12px" }}>★★★★★</div>
                    <p style={{ color: "#5C4636", fontSize: "15px", lineHeight: 1.6, fontStyle: "italic", marginBottom: "18px" }}>"{rev.text}"</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "700", color: "#2B2118", margin: 0, fontSize: "15px" }}>{rev.name}</p>
                    <p style={{ color: "#9E8B7C", margin: 0, fontSize: "13px" }}>{rev.city}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "32px" }}>
          {[0, 1, 2].map((pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => setReviewPage(pageIndex)}
              style={{
                width: reviewPage === pageIndex ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: reviewPage === pageIndex ? "#7A5C43" : "#D9CFC1",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
              aria-label={`Seite ${pageIndex + 1}`}
            />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#2B2118", color: "#D9CFC1", padding: "60px 24px 30px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "30px", borderBottom: "1px solid #453528", paddingBottom: "40px" }}>
          
          {/* LIJEVA KOLONA */}
          <div style={{ flex: "1 1 240px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <div style={{ width: "46px", height: "46px", borderRadius: "50%", border: "1px solid #D9CFC1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "7px", fontWeight: "600", color: "#F7F4EE" }}>Brunchito</span>
                <span style={{ fontSize: "6.5px", fontStyle: "italic", fontFamily: "serif", color: "#F7F4EE", marginTop: "1px" }}>cakes</span>
              </div>
              <span style={{ fontSize: "16px", fontWeight: "600", color: "white" }}>brunchito cakes</span>
            </div>
            <p style={{ fontSize: "14px", color: "#A89A8C", maxWidth: "260px", margin: 0 }}>
              Premium-Torten in Düsseldorf
            </p>
          </div>
          
          {/* SREDNJA KOLONA: STANDORT & KONTAKT */}
          <div style={{ flex: "1 1 240px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <p style={{ color: "white", fontSize: "15px", fontWeight: "600", marginBottom: "10px" }}>
              Standort & Kontakt
            </p>
            <p style={{ fontSize: "14px", color: "#A89A8C", margin: "0 0 6px 0", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
              <span>📍</span>
              <span>Düsseldorf, Deutschland</span>
            </p>
            <p style={{ fontSize: "14px", color: "#A89A8C", margin: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
              <a href="tel:+491782083381" style={{ color: "#D9CFC1", textDecoration: "none", cursor: "pointer" }}>+49 178 2083381</a>
            </p>
          </div>

          {/* DESNA KOLONA: ZAHLUNGSMETHODEN */}
          <div style={{ flex: "1 1 240px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <p style={{ color: "white", fontSize: "15px", fontWeight: "600", marginBottom: "10px" }}>
              Zahlungsmethoden
            </p>
            <p style={{ fontSize: "14px", color: "#A89A8C", margin: "0 0 6px 0" }}>
              Kreditkarte (Visa, Mastercard)
            </p>
            <p style={{ fontSize: "14px", color: "#A89A8C", margin: 0 }}>
              PayPal
            </p>
          </div>
        </div>
        
        <p style={{ textAlign: "center", fontSize: "13px", color: "#786759", marginTop: "30px" }}>
          © 2026 Brunchito cakes Düsseldorf. Alle Rechte vorbehalten.
        </p>
      </footer>

      {/* SLIDE-OVER CART */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.45)", zIndex: 100, backdropFilter: "blur(4px)", cursor: "pointer" }}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "100%", maxWidth: "480px", backgroundColor: "#F7F4EE", zIndex: 101, display: "flex", flexDirection: "column", boxShadow: "-8px 0 30px rgba(0,0,0,0.15)" }}
            >
              <div style={{ padding: "20px 24px", borderBottom: "1px solid #E5DFD3", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ fontSize: "19px", fontWeight: "700", color: "#2B2118", margin: 0 }}>
                  Ihr Warenkorb ({totalItems} {totalItems === 1 ? "Torte" : "Torten"})
                </h3>
                <button onClick={() => setIsCartOpen(false)} style={{ background: "none", border: "none", fontSize: "20px", cursor: "pointer", color: "#7A5C43" }}>✕</button>
              </div>

              <div style={{ flexGrow: 1, overflowY: "auto", padding: "20px 24px", display: "flex", flexDirection: "column", gap: "20px" }}>
                
                {/* ARTIKLI */}
                {cart.length === 0 ? (
                  <p style={{ color: "#8C7B6D", textAlign: "center", marginTop: "40px", fontSize: "15px" }}>Ihr Warenkorb ist noch leer.</p>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {cart.map((item) => (
                      <div key={item.id} style={{ display: "flex", gap: "14px", backgroundColor: "#FFFFFF", padding: "14px", borderRadius: "12px", border: "1px solid #EAE4D9", alignItems: "center" }}>
                        <img src={item.image} alt={item.name} style={{ width: "60px", height: "60px", borderRadius: "8px", objectFit: "cover" }} />
                        <div style={{ flexGrow: 1 }}>
                          <h4 style={{ fontSize: "14px", fontWeight: "700", margin: "0 0 4px", color: "#2B2118" }}>{item.name}</h4>
                          <p style={{ fontSize: "14px", fontWeight: "700", color: "#7A5C43", margin: 0 }}>
                            {(item.price * item.quantity).toFixed(2)} €
                            {item.quantity > 1 && (
                              <span style={{ fontSize: "11px", fontWeight: "400", color: "#9E8B7C", marginLeft: "6px" }}>
                                ({item.quantity}x {item.price.toFixed(2)} €)
                              </span>
                            )}
                          </p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <button onClick={() => updateQuantity(item.id, -1)} style={{ width: "26px", height: "26px", borderRadius: "50%", border: "1px solid #C4B5A5", background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", color: "#5C4636" }}>-</button>
                          <span style={{ fontSize: "14px", fontWeight: "700", minWidth: "16px", textAlign: "center" }}>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} style={{ width: "26px", height: "26px", borderRadius: "50%", border: "1px solid #C4B5A5", background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", color: "#5C4636" }}>+</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* FORMULAR */}
                {cart.length > 0 && (
                  <form id="order-form" onSubmit={handleSubmitOrder} style={{ backgroundColor: "#FFFFFF", padding: "18px", borderRadius: "14px", border: "1px solid #EAE4D9", display: "flex", flexDirection: "column", gap: "14px" }}>
                    
                    <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#2B2118", margin: "0 0 2px" }}>
                      Bestelldaten & Lieferadresse
                    </h4>

                    {/* WUNSCHTERMIN SA MINIMUMOM OD SUTRA */}
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#5C4636", marginBottom: "5px" }}>
                        Wunschtermin (Abholung/Lieferung)*:
                      </label>
                      <input 
                        type="date" 
                        name="date"
                        min={minDate}
                        required
                        value={customerData.date}
                        onChange={handleInputChange}
                        style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1px solid #D9CFC1", fontSize: "13px", boxSizing: "border-box", cursor: "pointer" }} 
                      />
                      <span style={{ fontSize: "11px", color: "#8C7B6D", marginTop: "4px", display: "block" }}>
                        ℹ️ Bestellungen sind ab morgen möglich (Zubereitungs- & Ruhezeit).
                      </span>
                    </div>

                    {/* VORNAME & NACHNAME */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#5C4636", marginBottom: "5px" }}>
                          Vorname*:
                        </label>
                        <input 
                          type="text" 
                          name="firstName"
                          placeholder="z.B. Anna" 
                          required
                          value={customerData.firstName}
                          onChange={handleInputChange}
                          style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1px solid #D9CFC1", fontSize: "13px", boxSizing: "border-box" }} 
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#5C4636", marginBottom: "5px" }}>
                          Nachname*:
                        </label>
                        <input 
                          type="text" 
                          name="lastName"
                          placeholder="z.B. Müller" 
                          required
                          value={customerData.lastName}
                          onChange={handleInputChange}
                          style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1px solid #D9CFC1", fontSize: "13px", boxSizing: "border-box" }} 
                        />
                      </div>
                    </div>

                    {/* ADRESA */}
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#5C4636", marginBottom: "5px" }}>
                        Wohnadresse / Straße & Hausnummer*:
                      </label>
                      <input 
                        type="text" 
                        name="address"
                        placeholder="Königsallee 12, 40212 Düsseldorf" 
                        required
                        value={customerData.address}
                        onChange={handleInputChange}
                        style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1px solid #D9CFC1", fontSize: "13px", boxSizing: "border-box" }} 
                      />
                    </div>

                    {/* TELEFON */}
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#5C4636", marginBottom: "5px" }}>
                        Telefonnummer (für Rückfragen)*:
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="+49 170 1234567" 
                        required
                        value={customerData.phone}
                        onChange={handleInputChange}
                        style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1px solid #D9CFC1", fontSize: "13px", boxSizing: "border-box" }} 
                      />
                    </div>

                    {/* ZAHLUNGSART */}
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#5C4636", marginBottom: "6px" }}>
                        Zahlungsart wählen:
                      </label>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("card")}
                          style={{ padding: "9px", borderRadius: "8px", border: paymentMethod === "card" ? "2px solid #7A5C43" : "1px solid #D9CFC1", backgroundColor: paymentMethod === "card" ? "#F7F4EE" : "white", fontWeight: "700", fontSize: "12px", cursor: "pointer" }}
                        >
                          💳 Kreditkarte
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("paypal")}
                          style={{ padding: "9px", borderRadius: "8px", border: paymentMethod === "paypal" ? "2px solid #7A5C43" : "1px solid #D9CFC1", backgroundColor: paymentMethod === "paypal" ? "#F7F4EE" : "white", fontWeight: "600", fontSize: "12px", cursor: "pointer", color: "#003087" }}
                        >
                          🅿️ PayPal
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>

              {/* CHECKOUT DUGME */}
              {cart.length > 0 && (
                <div style={{ padding: "18px 24px", borderTop: "1px solid #E5DFD3", backgroundColor: "#FFFFFF" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                    <span style={{ fontSize: "14px", color: "#6A584A", fontWeight: "500" }}>Gesamtsumme ({totalItems} {totalItems === 1 ? "Artikel" : "Artikel"}):</span>
                    <span style={{ fontSize: "21px", fontWeight: "700", color: "#2B2118" }}>
                      {totalAmount.toFixed(2)} €
                    </span>
                  </div>

                  {orderSuccess ? (
                    <div style={{ backgroundColor: "#EDE6DA", color: "#5C4636", border: "1px solid #D9CFC1", padding: "12px", borderRadius: "10px", textAlign: "center", fontWeight: "700", fontSize: "14px" }}>
                      ✓ Vielen Dank, {customerData.firstName || "Kunde"}! Ihre Bestellung über {totalAmount.toFixed(2)} € wurde übermittelt.
                    </div>
                  ) : (
                    <button
                      type="submit"
                      form="order-form"
                      style={{ width: "100%", backgroundColor: paymentMethod === "paypal" ? "#0070BA" : "#7A5C43", color: "white", padding: "13px", borderRadius: "10px", border: "none", fontSize: "15px", fontWeight: "700", cursor: "pointer", letterSpacing: "0.5px" }}
                    >
                      {paymentMethod === "paypal" ? `Mit PayPal bezahlen (${totalAmount.toFixed(2)} €)` : `Jetzt verbindlich bestellen (${totalAmount.toFixed(2)} €)`}
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}