"use client";
import Link from "next/link";
import { Camera, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const categories = [
  { href: "/portfolio/wedding", label: "Wedding" },
  { href: "/portfolio/pre-wedding", label: "Pre-Wedding" },
  { href: "/portfolio/engagement", label: "Engagement" },
  { href: "/portfolio/birthday", label: "Birthday" },
  { href: "/portfolio/maternity", label: "Maternity" },
  { href: "/portfolio/baby-shoot", label: "Baby Shoot" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "72px",
        paddingBottom: "32px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: "48px",
            marginBottom: "64px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "20px" }}>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#FAFAFA",
                }}
              >
                Sai Samarth
              </span>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#D4AF37",
                  marginTop: "2px",
                }}
              >
                Photography
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                color: "#737373",
                lineHeight: 1.7,
                marginBottom: "24px",
                maxWidth: "300px",
              }}
            >
              Capturing moments that make the choice easy. Serving Pune &amp;
              Pimpri-Chinchwad for over 20 years.
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: "16px" }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#737373",
                  transition: "all 0.3s",
                  textDecoration: "none",
                }}
                className="social-icon"
                aria-label="Instagram"
              >
                <Camera size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#D4AF37",
                marginBottom: "24px",
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "#737373",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                    className="footer-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#D4AF37",
                marginBottom: "24px",
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
              {categories.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "#737373",
                      textDecoration: "none",
                    }}
                    className="footer-link"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#D4AF37",
                marginBottom: "24px",
              }}
            >
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <a
                href="tel:+919763307735"
                style={{ display: "flex", alignItems: "center", gap: "12px", color: "#737373", textDecoration: "none", fontSize: "0.875rem" }}
              >
                <Phone size={16} color="#D4AF37" /> +91 97633 07735
              </a>
              <a
                href="mailto:saisamrthphotography123@gmail.com"
                style={{ display: "flex", alignItems: "center", gap: "12px", color: "#737373", textDecoration: "none", fontSize: "0.875rem" }}
              >
                <Mail size={16} color="#D4AF37" /> saisamrthphotography123@gmail.com
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#737373", fontSize: "0.875rem" }}>
                <MapPin size={16} color="#D4AF37" style={{ flexShrink: 0, marginTop: "2px" }} />
                Pune &amp; Pimpri-Chinchwad, Maharashtra
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#525252" }}>
            © {new Date().getFullYear()} Sai Samarth Photography. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#525252" }}>
            Pune &amp; Pimpri-Chinchwad
          </p>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: #D4AF37 !important; }
        .social-icon:hover { border-color: #D4AF37 !important; color: #D4AF37 !important; }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
