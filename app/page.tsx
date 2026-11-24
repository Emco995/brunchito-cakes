"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Cake {
  id: number;
  name: string;
  image: string;
  badge?: string;
  imageOffset?: string;
}

const cakes: Cake[] = [
  { id: 1, name: "Pistachio Cheesecake", image: "/cake-pistachio.jpeg", badge: "Bestseller" },
  { id: 2, name: "Lotus Cheesecake", image: "/cake-lotus.jpeg" },
  { id: 3, name: "Coconut Cheesecake", image: "/cake-coconut.jpeg", imageOffset: "translateY(14px)" },
  { id: 4, name: "Nougat Cheesecake", image: "/cake-nougat-new.jpeg" },
  { id: 5, name: "Matcha Cheesecake", image: "/cake-matcha.jpg" }
];

const steps = [
  {
    number: "01",
    title: "Torte & Geschmack wählen",
    description: "Fünf Rezepte, jedes mit einer eigenen Auswahl an feinsten Aromen."
  },
  {
    number: "02",
    title: "Wunschtermin abstimmen",
    description: "Teilen Sie uns Ihren Wunschtermin mit, damit Ihre Torte frisch zubereitet wird."
  },
  {
    number: "03",
    title: "Persönlicher Kontakt",
    description: "Kontaktieren Sie uns direkt per Telefon oder WhatsApp für weitere Details."
  }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div style={{ backgroundColor: "#F7F4EE", color: "#3B281B", minHeight: "100vh" }}>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .section-scroll {
          scroll-margin-top: 75px;
        }
        .desktop-nav {
          display: flex;
          gap: 24px;
          align-items: center;
        }
        .mobile-hamburger {
          display: none;
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-hamburger {
            display: flex;
          }
          .section-scroll {
            scroll-margin-top: 65px;
          }
        }
      `}</style>
      
      {/* PRELOADER */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
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
      <header style={{ position: "sticky", top: 0, zIndex: 40, backgroundColor: "rgba(247, 244, 238, 0.98)", borderBottom: "1px solid #E5DFD3", padding: "12px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ textDecoration: "none", display: "flex", alignItems: "center", cursor: "pointer" }}>
            <div style={{ 
              width: "50px", 
              height: "50px", 
              borderRadius: "50%", 
              border: "1.2px solid #7A5C43", 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              justifyContent: "center", 
              backgroundColor: "transparent",
              cursor: "pointer" 
            }}>
              <span style={{ fontSize: "8px", fontWeight: "600", letterSpacing: "0.3px", color: "#7A5C43", lineHeight: 1 }}>Brunchito</span>
              <span style={{ fontSize: "7px", fontStyle: "italic", fontFamily: "serif", color: "#7A5C43", marginTop: "1.5px" }}>cakes</span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="desktop-nav">
            <a href="#ueber-uns" onClick={(e) => scrollToSection(e, "ueber-uns")} style={{ textDecoration: "none", color: "#5C4636", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>Über uns</a>
            <a href="#torten" onClick={(e) => scrollToSection(e, "torten")} style={{ textDecoration: "none", color: "#5C4636", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>Torten</a>
            <a href="#ablauf" onClick={(e) => scrollToSection(e, "ablauf")} style={{ textDecoration: "none", color: "#5C4636", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>Ablauf</a>
          </nav>

          {/* MOBILE HAMBURGER */}
          <div className="mobile-hamburger" style={{ alignItems: "center" }}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", display: "flex", flexDirection: "column", gap: "5px", justifyContent: "center" }}
              aria-label="Menü"
            >
              <span style={{ width: "22px", height: "2px", backgroundColor: "#7A5C43", borderRadius: "2px", transition: "transform 0.2s ease", transform: isMobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}></span>
              <span style={{ width: "22px", height: "2px", backgroundColor: "#7A5C43", borderRadius: "2px", transition: "opacity 0.2s ease", opacity: isMobileMenuOpen ? 0 : 1 }}></span>
              <span style={{ width: "22px", height: "2px", backgroundColor: "#7A5C43", borderRadius: "2px", transition: "transform 0.2s ease", transform: isMobileMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }}></span>
            </button>
          </div>

        </div>

        {/* OVERLAY MOBILNI MENI */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{ 
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                backgroundColor: "rgba(247, 244, 238, 0.98)",
                borderBottom: "1px solid #E5DFD3",
                boxShadow: "0 10px 25px rgba(59, 40, 27, 0.08)",
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                textAlign: "center", 
                gap: "14px", 
                padding: "20px 0",
                zIndex: 50
              }}
            >
              <a href="#ueber-uns" onClick={(e) => scrollToSection(e, "ueber-uns")} style={{ textDecoration: "none", color: "#5C4636", fontSize: "16px", fontWeight: "600", padding: "6px 0", width: "100%" }}>Über uns</a>
              <a href="#torten" onClick={(e) => scrollToSection(e, "torten")} style={{ textDecoration: "none", color: "#5C4636", fontSize: "16px", fontWeight: "600", padding: "6px 0", width: "100%" }}>Torten</a>
              <a href="#ablauf" onClick={(e) => scrollToSection(e, "ablauf")} style={{ textDecoration: "none", color: "#5C4636", fontSize: "16px", fontWeight: "600", padding: "6px 0", width: "100%" }}>Ablauf</a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section style={{ padding: "60px 20px 40px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <div>
          <div style={{ display: "inline-block", backgroundColor: "#EDE6DA", color: "#7A5C43", padding: "6px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: "700", marginBottom: "16px", letterSpacing: "1px" }}>
            FRISCH UND MIT LIEBE GEBACKEN
          </div>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 54px)", fontWeight: "500", fontFamily: "serif", color: "#2B2118", lineHeight: 1.2, margin: "0 0 18px" }}>
            Handgemachte Torten für unvergessliche Momente
          </h1>
          <p style={{ fontSize: "16px", color: "#6A584A", lineHeight: 1.6, maxWidth: "580px", margin: "0 auto 26px", fontWeight: "400" }}>
            Entdecken Sie unsere handgefertigten Premium-Kreationen in Düsseldorf. Mit viel Liebe zum Detail, feinsten Zutaten und stilvollem Design.
          </p>
          <a
            href="#torten"
            onClick={(e) => scrollToSection(e, "torten")}
            style={{ display: "inline-block", backgroundColor: "#7A5C43", color: "white", textDecoration: "none", padding: "12px 28px", borderRadius: "30px", fontSize: "15px", fontWeight: "600", cursor: "pointer", letterSpacing: "0.5px" }}
          >
            Unsere Torten entdecken
          </a>
        </div>
      </section>

      {/* ÜBER UNS */}
      <section id="ueber-uns" className="section-scroll" style={{ backgroundColor: "#EDE6DA", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "36px", alignItems: "center" }}>
          <div>
            <span style={{ color: "#7A5C43", fontSize: "12px", fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase" }}>Brunchito cakes Düsseldorf</span>
            <h2 style={{ fontFamily: "serif", fontSize: "32px", color: "#2B2118", margin: "10px 0 16px", lineHeight: 1.2 }}>
              Dein Geschmack.<br />Dein Moment.
            </h2>
            <p style={{ color: "#6A584A", lineHeight: 1.6, fontSize: "15px", marginBottom: "14px" }}>
              Bei Brunchito cakes in Düsseldorf kreieren wir exklusive Torten in sorgfältiger Handarbeit. Wir setzen auf stilvolles Boho-Design, harmonische Aromen und frische Zubereitung für die besonderen Momente im Leben.
            </p>
            <p style={{ color: "#6A584A", lineHeight: 1.6, fontSize: "15px", marginBottom: "18px" }}>
              Haben Sie Fragen zu unseren Kreationen oder speziellen Wünschen? Kontaktieren Sie uns gerne direkt telefonisch oder per WhatsApp.
            </p>
            
            <a
              href="tel:+491782083381"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", backgroundColor: "#7A5C43", color: "white", textDecoration: "none", padding: "10px 20px", borderRadius: "20px", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>+49 178 2083381</span>
            </a>
          </div>
          <div style={{ borderRadius: "18px", overflow: "hidden", border: "1px solid #D9CFC1" }}>
            <img src="/cake-strawberry.jpeg" alt="Brunchito Erdbeer Torte Düsseldorf" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </section>

      {/* TORTEN */}
      <section id="torten" className="section-scroll" style={{ padding: "70px 20px 80px", maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "serif", fontSize: "32px", color: "#2B2118", margin: "0 0 8px" }}>Unsere Auswahl</h2>
          <p style={{ color: "#7A5C43", fontSize: "15px" }}>Jede Torte reicht für ca. 8-10 Personen (Ø 20cm)</p>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
          gap: "20px" 
        }}>
          {cakes.map((cake, index) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", overflow: "hidden", border: "1px solid #EAE4D9", display: "flex", flexDirection: "column", boxShadow: "0 4px 20px rgba(59, 40, 27, 0.04)" }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", backgroundColor: "#F0EAE1", overflow: "hidden" }}>
                <img
                  src={cake.image}
                  alt={cake.name}
                  loading="lazy"
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover", 
                    objectPosition: "center 78%",
                    transform: cake.imageOffset ? `scale(1.1) ${cake.imageOffset}` : "scale(1.1)", 
                    transition: "transform 0.3s ease" 
                  }}
                />
                {cake.badge && (
                  <span style={{ position: "absolute", top: "12px", left: "12px", backgroundColor: "#7A5C43", color: "white", fontSize: "11px", fontWeight: "700", padding: "4px 9px", borderRadius: "12px", zIndex: 2 }}>
                    {cake.badge}
                  </span>
                )}
              </div>

              <div style={{ padding: "18px 16px", textAlign: "center" }}>
                <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#2B2118", margin: "0 0 6px" }}>{cake.name}</h3>
                <p style={{ fontSize: "12px", color: "#8C7B6D", margin: 0 }}>
                  Handgefertigt · Ø 20 cm
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABLAUF */}
      <section id="ablauf" className="section-scroll" style={{ backgroundColor: "#F2ECE1", padding: "70px 20px" }}>
        <div style={{ maxWidth: "1150px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ color: "#7A5C43", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "700", display: "inline-block", marginBottom: "40px" }}>
            THREE STEPS TO YOUR CAKE
          </span>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                style={{
                  backgroundColor: "#FAF7F2",
                  borderRadius: "24px",
                  padding: "36px 26px",
                  textAlign: "left",
                  border: "1px solid #E5DFD3",
                  boxShadow: "0 6px 25px rgba(59, 40, 27, 0.03)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <span style={{ fontSize: "34px", fontWeight: "400", fontFamily: "serif", color: "#C09062", marginBottom: "16px", display: "block", lineHeight: 1 }}>
                  {step.number}
                </span>
                <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#2B2118", margin: "0 0 12px", lineHeight: 1.25 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "15px", color: "#6A584A", lineHeight: 1.6, margin: 0 }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#2B2118", color: "#D9CFC1", padding: "50px 20px 30px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "flex-start", gap: "30px", borderBottom: "1px solid #453528", paddingBottom: "36px" }}>
          
          {/* LIJEVA KOLONA */}
          <div style={{ flex: "1 1 240px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #D9CFC1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "7px", fontWeight: "600", color: "#F7F4EE" }}>Brunchito</span>
                <span style={{ fontSize: "6.5px", fontStyle: "italic", fontFamily: "serif", color: "#F7F4EE", marginTop: "1px" }}>cakes</span>
              </div>
              <span style={{ fontSize: "16px", fontWeight: "600", color: "white" }}>brunchito cakes</span>
            </div>
            <p style={{ fontSize: "14px", color: "#A89A8C", maxWidth: "260px", margin: 0 }}>
              Premium-Torten in Düsseldorf
            </p>
          </div>
          
          {/* DESNA KOLONA */}
          <div style={{ flex: "1 1 240px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <p style={{ color: "white", fontSize: "15px", fontWeight: "600", marginBottom: "10px" }}>
              Standort & Kontakt
            </p>
            <p style={{ fontSize: "14px", color: "#A89A8C", margin: "0 0 6px 0", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
              <span>📍</span>
              <span>Düsseldorf, Deutschland</span>
            </p>
            <p style={{ fontSize: "14px", color: "#A89A8C", margin: "0 0 6px 0", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
              <a href="tel:+491782083381" style={{ color: "#D9CFC1", textDecoration: "none", cursor: "pointer" }}>+49 178 2083381</a>
            </p>
            <p style={{ fontSize: "14px", color: "#A89A8C", margin: "0 0 16px 0", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D9CFC1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <a href="mailto:brunchito@outlook.com" style={{ color: "#D9CFC1", textDecoration: "none", cursor: "pointer" }}>brunchito@outlook.com</a>
            </p>

            <p style={{ color: "white", fontSize: "13px", fontWeight: "600", margin: "0 0 6px 0" }}>
              Folgen Sie uns auf Instagram
            </p>
            <a
              href="https://instagram.com/brunchito.de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#D9CFC1",
                textDecoration: "none",
                fontSize: "14px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                padding: "6px 12px",
                borderRadius: "16px",
                border: "1px solid rgba(217, 207, 193, 0.2)",
                transition: "all 0.2s ease",
                cursor: "pointer"
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@brunchito.de</span>
            </a>
          </div>
        </div>
        
        {/* AUTORSKA PRAVA */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "26px" }}>
          <p style={{ textAlign: "center", fontSize: "12px", color: "#786759", margin: 0 }}>
            © 2026 Brunchito cakes Düsseldorf. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>

    </div>
  );
}