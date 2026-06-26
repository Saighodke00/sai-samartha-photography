import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Award, Heart, Camera, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Sai Samarth Photography — 20+ Years of Excellence",
  description:
    "Learn about Sai Samarth Photography's 20-year journey capturing 600+ weddings and thousands of precious moments across Pune & Pimpri-Chinchwad.",
};

const milestones = [
  { year: "2005", event: "Sai Samarth Photography founded in Pune" },
  { year: "2010", event: "Expanded to corporate & political event coverage" },
  { year: "2015", event: "100th wedding milestone celebrated" },
  { year: "2018", event: "Launched premium album design service" },
  { year: "2021", event: "300th wedding — expanded to Pimpri-Chinchwad" },
  { year: "2025", event: "600+ weddings & 20 years of capturing memories" },
];

const values = [
  { icon: <Heart size={24} />, title: "Passion", desc: "Every shoot is approached with the same excitement as our very first. Photography is not just our profession — it's our calling." },
  { icon: <Award size={24} />, title: "Experience", desc: "20+ years means we've seen it all — and know exactly how to capture what matters in any lighting, any venue, any moment." },
  { icon: <Camera size={24} />, title: "Artistry", desc: "We don't just document events. We craft visual narratives that reflect the emotions, details, and energy of your special day." },
  { icon: <Users size={24} />, title: "Trust", desc: "Families and corporates return to us year after year because they know every frame will be handled with care and professionalism." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#0a0a0a", minHeight: "100vh", paddingTop: "100px" }}>
        {/* Hero */}
        <section
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "80px 32px 100px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="about-hero-grid"
        >
          <div>
            <p className="section-tag" style={{ marginBottom: "16px" }}>Our Story</p>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 700,
                color: "#FAFAFA",
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            >
              Two Decades of{" "}
              <em style={{ fontStyle: "italic", color: "#D4AF37" }}>Capturing</em>{" "}
              Life
            </h1>
            <div className="gold-line" style={{ marginBottom: "28px" }} />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "#A3A3A3",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              For over two decades, Sai Samarth Photography has been a trusted name in capturing life&apos;s most precious milestones across Pune and Pimpri-Chinchwad. With a proud legacy of documenting more than 600 weddings, we bring a wealth of experience, patience, and an artistic eye to every shoot.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "#737373",
                lineHeight: 1.8,
              }}
            >
              Whether it is the grand celebration of a wedding, the quiet joy of a maternity shoot, or the fast-paced environment of a corporate or political event, we know how to anticipate and preserve the moments that matter most. We believe our portfolio speaks for itself — take a look, and let our experience bring your vision to life.
            </p>
          </div>

          {/* Stats panel */}
          <div
            style={{
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "48px 40px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
            }}
          >
            {[
              { v: "20+", l: "Years Active" },
              { v: "600+", l: "Weddings" },
              { v: "2000+", l: "Families Served" },
              { v: "10+", l: "Event Types" },
            ].map((s) => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2.8rem",
                    fontWeight: 700,
                    color: "#D4AF37",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {s.v}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#737373",
                  }}
                >
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: "80px 32px", background: "#080808", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <p className="section-tag" style={{ marginBottom: "16px" }}>What Drives Us</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#FAFAFA", fontWeight: 700 }}>
                Our Core Values
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "24px" }} className="values-grid">
              {values.map((v, i) => (
                <div key={i} className="card-glow" style={{ background: "#111111", padding: "32px 24px" }}>
                  <div style={{ color: "#D4AF37", marginBottom: "16px" }}>{v.icon}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#FAFAFA", marginBottom: "12px" }}>{v.title}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#737373", lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: "100px 32px", background: "#0a0a0a" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p className="section-tag" style={{ marginBottom: "16px" }}>Our Journey</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#FAFAFA", fontWeight: 700 }}>
                Milestones
              </h2>
            </div>
            <div style={{ position: "relative", paddingLeft: "32px", borderLeft: "1px solid rgba(212,175,55,0.2)" }}>
              {milestones.map((m, i) => (
                <div key={i} style={{ marginBottom: "40px", position: "relative" }}>
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-40px",
                      top: "4px",
                      width: "12px",
                      height: "12px",
                      background: "#D4AF37",
                      borderRadius: "50%",
                      border: "2px solid #0a0a0a",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      color: "#D4AF37",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    {m.year}
                  </span>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#A3A3A3", lineHeight: 1.6 }}>
                    {m.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
      <style>{`
        @media (max-width: 900px) {
          .about-hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .values-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 560px) {
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
