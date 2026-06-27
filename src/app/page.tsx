"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import {
  Camera,
  Heart,
  Briefcase,
  Baby,
  ChevronDown,
  Star,
  ArrowRight,
  Award,
  Users,
  Calendar,
} from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────

const heroImages = [
  "/images/home/1.jpg",
  "/images/home/288A8106.jpg",
  "/images/home/288A8142.jpg",
  "/images/home/4.jpg",
  "/images/home/7C7A9918.jpg",
  "/images/home/DSC00094.jpg",
  "/images/home/DSC_4903.JPG",
  "/images/home/DSC_6550.JPG",
  "/images/home/DSC_7991.jpg",
  "/images/home/IMG-20240217-WA0055.jpg",
  "/images/home/IMG-20240219-WA0004.jpg",
  "/images/home/IMG-20240812-WA0069.jpg",
  "/images/home/IMG-20250531-WA0018.jpg",
  "/images/home/IMG-20251217-WA0032 (1).jpg",
  "/images/home/IMG_20240619_183229_519.jpg",
  "/images/home/PPF08141.JPG",
  "/images/home/_B2A1385.JPG",
  "/images/home/_DSC2687.JPG",
  "/images/home/_DSC7365.JPG",
];

const featuredWork = [
  { src: "/images/wedding/DSC00003.jpg", category: "Wedding", span: "tall" },
  { src: "/images/prewedding/1.jpg", category: "Pre-Wedding", span: "normal" },
  { src: "/images/engagement/01.jpg", category: "Engagement", span: "normal" },
  { src: "/images/wedding/DSC00007.jpg", category: "Wedding", span: "normal" },
  { src: "/images/birthday/DSC_7161.JPG", category: "Birthday", span: "tall" },
  { src: "/images/prewedding/2.jpg", category: "Pre-Wedding", span: "normal" },
  { src: "/images/wedding/DSC00014.jpg", category: "Wedding", span: "normal" },
  { src: "/images/baby-shoot/DSC_2022.jpg", category: "Baby Shoot", span: "normal" },
];

const services = [
  {
    icon: <Heart size={28} />,
    title: "Weddings & Events",
    desc: "Full-day wedding coverage, mehendi, sangeet, reception — every ritual beautifully documented.",
    items: ["Wedding", "Pre-Wedding", "Engagement"],
    href: "/portfolio/wedding",
  },
  {
    icon: <Baby size={28} />,
    title: "Family & Milestones",
    desc: "Precious moments with your loved ones — from first breaths to birthday milestones.",
    items: ["Maternity", "Baby Shoot", "Baby Shower", "Birthday", "Munji"],
    href: "/portfolio/birthday",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Corporate & Scale",
    desc: "Professional event coverage for corporate gatherings, political rallies, and school events.",
    items: ["Corporate / Political Events", "School Events"],
    href: "/portfolio",
  },
  {
    icon: <Camera size={28} />,
    title: "Premium Albums",
    desc: "Handcrafted, archival-quality photo albums — a heirloom that lasts generations.",
    items: ["Lay-flat Albums", "Canvas Prints", "Custom Design"],
    href: "/contact",
  },
];

const stats = [
  { icon: <Award size={32} />, value: "20+", label: "Years of Experience" },
  { icon: <Heart size={32} />, value: "600+", label: "Weddings Captured" },
  { icon: <Users size={32} />, value: "2000+", label: "Happy Families" },
  { icon: <Calendar size={32} />, value: "10+", label: "Event Categories" },
];

const testimonials = [
  {
    name: "Rohan & Priya Sharma",
    event: "Wedding — Pune",
    text: "Sai Samarth Photography exceeded every expectation. They captured our wedding with such warmth and artistry — every photo feels like a painting. Truly the best decision we made.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    event: "Maternity Shoot — Pimpri",
    text: "I was nervous about my maternity shoot but the team made me feel completely at ease. The photos are absolutely gorgeous — I treasure every single one.",
    rating: 5,
  },
  {
    name: "TechCorp India",
    event: "Corporate Event — Pune",
    text: "Professional, punctual, and incredibly talented. They covered our annual conference perfectly and delivered edited photos within 48 hours. Highly recommended!",
    rating: 5,
  },
];

// ─── Hooks ─────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Section Components ────────────────────────────────────────────────────

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % heroImages.length);
        setFading(false);
      }, 600);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "640px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: fading ? 0 : 1,
          transition: "opacity 0.6s ease",
        }}
      >
        <Image
          src={heroImages[current]}
          alt="Sai Samarth Photography — Hero"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          quality={85}
        />
      </div>

      {/* Overlay gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.2) 100%)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to top, #0a0a0a, transparent)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <div style={{ maxWidth: "680px" }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#D4AF37",
              marginBottom: "20px",
              animation: "fadeUp 0.8s ease 0.2s both",
            }}
          >
            Pune & Pimpri-Chinchwad · Est. 2005
          </p>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              color: "#FAFAFA",
              marginBottom: "24px",
              animation: "fadeUp 0.8s ease 0.35s both",
            }}
          >
            Capturing <em style={{ fontStyle: "italic", color: "#D4AF37" }}>Moments</em>,{" "}
            <br />Creating Legacy.
          </h1>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.05rem",
              fontWeight: 300,
              color: "#A3A3A3",
              lineHeight: 1.7,
              marginBottom: "40px",
              maxWidth: "480px",
              animation: "fadeUp 0.8s ease 0.5s both",
            }}
          >
            Let our work speak for itself — 20 years of artistry, 600+ weddings,
            and a thousand stories told through the lens.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              animation: "fadeUp 0.8s ease 0.65s both",
            }}
          >
            <Link
              href="/portfolio"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#0a0a0a",
                textDecoration: "none",
                background: "#D4AF37",
                padding: "16px 40px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s",
              }}
              className="hero-btn-primary"
            >
              View Portfolio <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/919763307735?text=Hello%20Sai%20Samarth%20Photography%2C%20I%20would%20like%20to%20inquire%20about%20a%20photoshoot."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#FAFAFA",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "16px 40px",
                transition: "all 0.3s",
              }}
              className="hero-btn-ghost"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          animation: "bounce 2s ease infinite",
        }}
      >
        <ChevronDown size={20} color="#D4AF37" />
      </div>

      {/* Slide dots */}
      <div
        style={{
          position: "absolute",
          right: "32px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? "24px" : "6px",
              height: "6px",
              background: i === current ? "#D4AF37" : "rgba(255,255,255,0.3)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.4s",
              padding: 0,
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        .hero-btn-primary:hover { background: #E8C84A !important; transform: translateY(-2px); }
        .hero-btn-ghost:hover { border-color: #D4AF37 !important; color: #D4AF37 !important; }
      `}</style>
    </section>
  );
}

function StatsSection() {
  const { ref, inView } = useInView();
  return (
    <section
      style={{ background: "#0d0d0d", padding: "72px 32px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "32px",
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div style={{ color: "#D4AF37", marginBottom: "12px", display: "flex", justifyContent: "center" }}>
                {stat.icon}
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2.8rem",
                  fontWeight: 700,
                  color: "#FAFAFA",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#737373",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .stats-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .stats-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}

function FeaturedWork() {
  const { ref, inView } = useInView();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section style={{ padding: "120px 32px", background: "#0a0a0a" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-tag" style={{ marginBottom: "16px" }}>Our Work</p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 700,
              color: "#FAFAFA",
              marginBottom: "16px",
            }}
          >
            Featured Portfolio
          </h2>
          <div className="gold-line" style={{ margin: "0 auto 24px" }} />
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#737373", maxWidth: "480px", margin: "0 auto" }}>
            A glimpse of the moments we&apos;ve been trusted to capture across weddings, celebrations, and milestones.
          </p>
        </div>

        {/* Masonry */}
        <div ref={ref} className="masonry-grid">
          {featuredWork.map((item, i) => (
            <div
              key={i}
              className="masonry-item img-zoom"
              onClick={() => setLightbox(item.src)}
              style={{
                cursor: "pointer",
                position: "relative",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${i * 0.08}s, transform 0.7s ease ${i * 0.08}s`,
              }}
            >
              <div style={{ position: "relative", aspectRatio: item.span === "tall" ? "3/4" : "4/3" }}>
                <Image
                  src={item.src}
                  alt={`Sai Samarth Photography — ${item.category}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={80}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)",
                    opacity: 0,
                    transition: "opacity 0.4s",
                  }}
                  className="img-overlay"
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    opacity: 0,
                    transition: "opacity 0.4s",
                  }}
                  className="img-label"
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#D4AF37",
                      background: "rgba(10,10,10,0.6)",
                      padding: "4px 12px",
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <Link
            href="/portfolio"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FAFAFA",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "14px 40px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.3s",
            }}
            className="view-all-btn"
          >
            View Full Portfolio <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)} role="dialog" aria-modal="true" aria-label="Image lightbox">
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute",
              top: "24px",
              right: "32px",
              background: "none",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#FAFAFA",
              fontSize: "1.5rem",
              cursor: "pointer",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <div style={{ position: "relative", width: "90vw", height: "85vh" }}>
            <Image
              src={lightbox}
              alt="Full size preview"
              fill
              style={{ objectFit: "contain" }}
              quality={90}
            />
          </div>
        </div>
      )}

      <style>{`
        .masonry-item:hover .img-overlay { opacity: 1 !important; }
        .masonry-item:hover .img-label { opacity: 1 !important; }
        .view-all-btn:hover { border-color: #D4AF37 !important; color: #D4AF37 !important; }
      `}</style>
    </section>
  );
}

function ServicesSection() {
  const { ref, inView } = useInView();
  return (
    <section style={{ padding: "120px 32px", background: "#080808" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-tag" style={{ marginBottom: "16px" }}>What We Do</p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 700,
              color: "#FAFAFA",
              marginBottom: "16px",
            }}
          >
            Our Services
          </h2>
          <div className="gold-line" style={{ margin: "0 auto" }} />
        </div>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
          className="services-grid"
        >
          {services.map((svc, i) => (
            <Link
              key={i}
              href={svc.href}
              style={{ textDecoration: "none" }}
            >
              <div
                className="card-glow"
                style={{
                  background: "#111111",
                  padding: "36px 28px",
                  height: "100%",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                }}
              >
                <div style={{ color: "#D4AF37", marginBottom: "20px" }}>{svc.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#FAFAFA",
                    marginBottom: "12px",
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "#737373",
                    lineHeight: 1.7,
                    marginBottom: "24px",
                    flex: 1,
                  }}
                >
                  {svc.desc}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {svc.items.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.78rem",
                        color: "#525252",
                        paddingLeft: "12px",
                        borderLeft: "2px solid rgba(212,175,55,0.3)",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function TestimonialsSection() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ padding: "120px 32px", background: "#0a0a0a" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
        <p className="section-tag" style={{ marginBottom: "16px" }}>Client Love</p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 700,
            color: "#FAFAFA",
            marginBottom: "16px",
          }}
        >
          What Our Clients Say
        </h2>
        <div className="gold-line" style={{ margin: "0 auto 64px" }} />

        <div ref={ref}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                display: i === active ? "block" : "none",
                opacity: inView ? 1 : 0,
                transition: "opacity 0.6s ease",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "32px" }}>
                {[...Array(t.rating)].map((_, s) => (
                  <Star key={s} size={18} fill="#D4AF37" color="#D4AF37" />
                ))}
              </div>
              <blockquote
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#D4D4D4",
                  lineHeight: 1.7,
                  marginBottom: "40px",
                }}
              >
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#FAFAFA", fontSize: "0.95rem" }}>{t.name}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#D4AF37", marginTop: "4px" }}>{t.event}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "48px" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? "32px" : "8px",
                height: "8px",
                background: i === active ? "#D4AF37" : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s",
                padding: 0,
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      style={{
        padding: "120px 32px",
        background: "linear-gradient(135deg, #0d0a00 0%, #0a0a0a 50%, #0a0800 100%)",
        borderTop: "1px solid rgba(212,175,55,0.1)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <p className="section-tag" style={{ marginBottom: "16px" }}>Ready to Begin?</p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
            fontWeight: 700,
            color: "#FAFAFA",
            marginBottom: "20px",
            lineHeight: 1.1,
          }}
        >
          Let&apos;s Capture Your{" "}
          <em style={{ fontStyle: "italic", color: "#D4AF37" }}>Story</em>
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1rem",
            color: "#737373",
            lineHeight: 1.7,
            marginBottom: "48px",
          }}
        >
          From intimate maternity shoots to grand weddings — we bring the same passion, precision, and artistry to every frame.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="https://wa.me/919763307735?text=Hello%20Sai%20Samarth%20Photography%2C%20I%20would%20like%20to%20book%20a%20photoshoot."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#0a0a0a",
              textDecoration: "none",
              background: "#D4AF37",
              padding: "18px 48px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.3s",
            }}
            className="cta-wa"
          >
            Book via WhatsApp <ArrowRight size={16} />
          </a>
          <Link
            href="/contact"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FAFAFA",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "18px 48px",
              transition: "all 0.3s",
            }}
            className="cta-form"
          >
            Send Inquiry
          </Link>
        </div>
      </div>
      <style>{`
        .cta-wa:hover { background: #E8C84A !important; transform: translateY(-3px); }
        .cta-form:hover { border-color: #D4AF37 !important; color: #D4AF37 !important; }
      `}</style>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturedWork />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
