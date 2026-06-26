"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";

const eventTypes = [
  "Wedding",
  "Pre-Wedding",
  "Engagement",
  "Maternity",
  "Baby Shoot",
  "Baby Shower",
  "Birthday",
  "Munji (Thread Ceremony)",
  "School Event",
  "Corporate / Political Event",
  "Other",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission (real form will POST to /api/contact)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#111111",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#FAFAFA",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9rem",
    padding: "14px 16px",
    outline: "none",
    transition: "border-color 0.3s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.72rem",
    fontWeight: 500,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#737373",
    display: "block",
    marginBottom: "8px",
  };

  return (
    <>
      <Navbar />
      <main style={{ background: "#0a0a0a", minHeight: "100vh", paddingTop: "100px" }}>
        {/* Header */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 32px 72px", textAlign: "center" }}>
          <p className="section-tag" style={{ marginBottom: "16px" }}>Get In Touch</p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "#FAFAFA",
              marginBottom: "16px",
            }}
          >
            Book Your Session
          </h1>
          <div className="gold-line" style={{ margin: "0 auto 20px" }} />
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#737373", maxWidth: "480px", margin: "0 auto" }}>
            Tell us about your event and we&apos;ll get back to you within 24 hours. Or simply reach us on WhatsApp for an instant response.
          </p>
        </div>

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 32px 120px",
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left — Contact Info */}
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.6rem",
                fontWeight: 600,
                color: "#FAFAFA",
                marginBottom: "32px",
              }}
            >
              Contact Details
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "48px" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "rgba(212,175,55,0.1)",
                    border: "1px solid rgba(212,175,55,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={18} color="#D4AF37" />
                </div>
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "#737373", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px" }}>Phone / WhatsApp</p>
                  <a href="tel:+919763307735" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#FAFAFA", textDecoration: "none" }}>+91 97633 07735</a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "rgba(212,175,55,0.1)",
                    border: "1px solid rgba(212,175,55,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={18} color="#D4AF37" />
                </div>
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "#737373", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px" }}>Email</p>
                  <a href="mailto:saisamrthphotography123@gmail.com" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#FAFAFA", textDecoration: "none", wordBreak: "break-all" }}>saisamrthphotography123@gmail.com</a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "rgba(212,175,55,0.1)",
                    border: "1px solid rgba(212,175,55,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={18} color="#D4AF37" />
                </div>
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "#737373", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px" }}>Location</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#FAFAFA" }}>Pune &amp; Pimpri-Chinchwad,<br />Maharashtra, India</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick CTA */}
            <a
              href="https://wa.me/919763307735?text=Hello%20Sai%20Samarth%20Photography%2C%20I%20would%20like%20to%20inquire%20about%20a%20photoshoot."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "#25D366",
                color: "#fff",
                textDecoration: "none",
                padding: "16px 24px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 500,
                transition: "all 0.3s",
              }}
              className="wa-cta"
            >
              <MessageCircle size={20} fill="white" />
              Chat on WhatsApp — Instant Response
            </a>

            {/* Business Hours */}
            <div style={{ marginTop: "40px", padding: "24px", background: "#111111", border: "1px solid rgba(255,255,255,0.06)" }}>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#D4AF37", marginBottom: "16px" }}>
                Available Hours
              </h3>
              {[
                ["Mon – Sat", "9:00 AM – 8:00 PM"],
                ["Sunday", "By Appointment"],
                ["Events", "Any Day, Any Time"],
              ].map(([day, time]) => (
                <div key={day} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#737373" }}>{day}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#FAFAFA" }}>{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div
                style={{
                  background: "#111111",
                  border: "1px solid rgba(212,175,55,0.2)",
                  padding: "64px 40px",
                  textAlign: "center",
                }}
              >
                <CheckCircle size={56} color="#D4AF37" style={{ marginBottom: "24px" }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "#FAFAFA", marginBottom: "16px" }}>
                  Inquiry Received!
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", color: "#737373", lineHeight: 1.7, marginBottom: "32px" }}>
                  Thank you, <strong style={{ color: "#FAFAFA" }}>{form.name}</strong>! We&apos;ve received your inquiry and will get back to you within 24 hours. For a faster response, feel free to WhatsApp us directly.
                </p>
                <a
                  href="https://wa.me/919763307735"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#D4AF37",
                    color: "#0a0a0a",
                    textDecoration: "none",
                    padding: "14px 32px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.06)", padding: "48px 40px" }}
                className="contact-form"
              >
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "#FAFAFA", marginBottom: "32px" }}>
                  Send an Inquiry
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }} className="form-row">
                  <div>
                    <label htmlFor="name" style={labelStyle}>Full Name *</label>
                    <input id="name" name="name" type="text" required placeholder="Your name" value={form.name} onChange={handleChange} style={inputStyle} className="form-input" />
                  </div>
                  <div>
                    <label htmlFor="phone" style={labelStyle}>Phone / WhatsApp *</label>
                    <input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} style={inputStyle} className="form-input" />
                  </div>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label htmlFor="email" style={labelStyle}>Email Address</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} style={inputStyle} className="form-input" />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }} className="form-row">
                  <div>
                    <label htmlFor="eventType" style={labelStyle}>Event Type *</label>
                    <select id="eventType" name="eventType" required value={form.eventType} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }} className="form-input">
                      <option value="" disabled>Select event type</option>
                      {eventTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="eventDate" style={labelStyle}>Event Date</label>
                    <input id="eventDate" name="eventDate" type="date" value={form.eventDate} onChange={handleChange} style={inputStyle} className="form-input" />
                  </div>
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <label htmlFor="message" style={labelStyle}>Additional Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your event, venue, or any special requirements..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "vertical" }}
                    className="form-input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    background: loading ? "#9a7f2a" : "#D4AF37",
                    color: "#0a0a0a",
                    border: "none",
                    padding: "18px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    cursor: loading ? "not-allowed" : "pointer",
                    transition: "all 0.3s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  {loading ? "Sending..." : <><Send size={16} /> Send Inquiry</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
      <style>{`
        .contact-grid { }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
        .form-row { }
        @media (max-width: 560px) { .form-row { grid-template-columns: 1fr !important; } }
        .form-input:focus { border-color: rgba(212,175,55,0.5) !important; }
        .wa-cta:hover { background: #1da551 !important; transform: translateY(-2px); }
        .contact-form { }
        @media (max-width: 560px) { .contact-form { padding: 32px 20px !important; } }
      `}</style>
    </>
  );
}
