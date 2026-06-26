"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

type Category = {
  key: string;
  label: string;
  images: { src: string; alt: string }[];
};

const categories: Category[] = [
  {
    key: "all",
    label: "All",
    images: [],
  },
  {
    key: "wedding",
    label: "Wedding",
    images: [
      { src: "/images/wedding/DSC00003.jpg", alt: "Wedding ceremony" },
      { src: "/images/wedding/DSC00007.jpg", alt: "Wedding celebration" },
      { src: "/images/wedding/DSC00014.jpg", alt: "Wedding portrait" },
      { src: "/images/wedding/DSC00052.jpg", alt: "Wedding moments" },
      { src: "/images/wedding/DSC00057.jpg", alt: "Wedding decor" },
      { src: "/images/wedding/DSC00061.jpg", alt: "Wedding couple" },
      { src: "/images/wedding/DSC00068.jpg", alt: "Wedding ceremony details" },
      { src: "/images/wedding/DSC00069.jpg", alt: "Wedding venue" },
      { src: "/images/wedding/DSC00071.jpg", alt: "Wedding reception" },
      { src: "/images/wedding/DSC00079.jpg", alt: "Wedding candid" },
      { src: "/images/wedding/DSC00088.jpg", alt: "Wedding rituals" },
      { src: "/images/wedding/DSC00094.jpg", alt: "Wedding portrait 2" },
      { src: "/images/wedding/DSC_2149.JPG", alt: "Wedding blessing" },
      { src: "/images/wedding/DSC_2653.JPG", alt: "Wedding vows" },
      { src: "/images/wedding/DSC_2668.JPG", alt: "Wedding dance" },
      { src: "/images/wedding/_DSC2687.JPG", alt: "Wedding candid 2" },
      { src: "/images/wedding/_DSC7365.JPG", alt: "Wedding couple portrait" },
    ],
  },
  {
    key: "prewedding",
    label: "Pre-Wedding",
    images: [
      { src: "/images/prewedding/1.jpg", alt: "Pre-wedding shoot 1" },
      { src: "/images/prewedding/2.jpg", alt: "Pre-wedding shoot 2" },
      { src: "/images/prewedding/3.jpg", alt: "Pre-wedding shoot 3" },
      { src: "/images/prewedding/4.jpg", alt: "Pre-wedding shoot 4" },
      { src: "/images/prewedding/5.jpg", alt: "Pre-wedding shoot 5" },
      { src: "/images/prewedding/6.jpg", alt: "Pre-wedding shoot 6" },
      { src: "/images/prewedding/7.jpg", alt: "Pre-wedding shoot 7" },
      { src: "/images/prewedding/8.jpg", alt: "Pre-wedding shoot 8" },
      { src: "/images/prewedding/9.jpg", alt: "Pre-wedding shoot 9" },
      { src: "/images/prewedding/10.jpg", alt: "Pre-wedding shoot 10" },
      { src: "/images/prewedding/288A8106.jpg", alt: "Pre-wedding candid" },
      { src: "/images/prewedding/288A8142.jpg", alt: "Pre-wedding romance" },
      { src: "/images/prewedding/288A8154.jpg", alt: "Pre-wedding couple" },
      { src: "/images/prewedding/DSC_7991.jpg", alt: "Pre-wedding golden hour" },
    ],
  },
  {
    key: "engagement",
    label: "Engagement",
    images: [
      { src: "/images/engagement/DSC_1174.JPG", alt: "Engagement ceremony" },
      { src: "/images/engagement/DSC_1269.JPG", alt: "Engagement couple" },
      { src: "/images/engagement/DSC_2021.JPG", alt: "Engagement portrait" },
      { src: "/images/engagement/DSC_2053.JPG", alt: "Engagement moments" },
      { src: "/images/engagement/DSC_3115.JPG", alt: "Engagement celebration" },
      { src: "/images/engagement/DSC_3245.JPG", alt: "Engagement ring" },
      { src: "/images/engagement/DSC_3280.JPG", alt: "Engagement candid" },
      { src: "/images/engagement/DSC_5091.JPG", alt: "Engagement venue" },
      { src: "/images/engagement/DSC_5113.JPG", alt: "Engagement joy" },
      { src: "/images/engagement/DSC_8101.JPG", alt: "Engagement decor" },
      { src: "/images/engagement/DSC_8209.JPG", alt: "Engagement family" },
      { src: "/images/engagement/_B2A1156.JPG", alt: "Engagement portrait 2" },
    ],
  },
  {
    key: "birthday",
    label: "Birthday",
    images: [
      { src: "/images/birthday/DSC_7144.JPG", alt: "Birthday celebration" },
      { src: "/images/birthday/DSC_7148.JPG", alt: "Birthday party" },
      { src: "/images/birthday/DSC_7158.JPG", alt: "Birthday moments" },
      { src: "/images/birthday/DSC_7189.JPG", alt: "Birthday joy" },
      { src: "/images/birthday/DSC_7190.JPG", alt: "Birthday smiles" },
      { src: "/images/birthday/DSC_7207.JPG", alt: "Birthday event" },
      { src: "/images/birthday/_DSC0115.JPG", alt: "Birthday fun" },
      { src: "/images/birthday/_DSC0122.JPG", alt: "Birthday candid" },
      { src: "/images/birthday/_DSC0137.JPG", alt: "Birthday cake" },
      { src: "/images/birthday/_DSC0144.JPG", alt: "Birthday portrait" },
      { src: "/images/birthday/_DSC8314.JPG", alt: "Birthday decor" },
      { src: "/images/birthday/_DSC8737.JPG", alt: "Birthday family" },
    ],
  },
  {
    key: "baby-shoot",
    label: "Baby Shoot",
    images: [
      { src: "/images/baby-shoot/DSC_0070.jpg", alt: "Baby portrait" },
      { src: "/images/baby-shoot/DSC_0078.jpg", alt: "Baby shoot" },
      { src: "/images/baby-shoot/DSC_0124.jpg", alt: "Newborn photography" },
      { src: "/images/baby-shoot/DSC_0137.jpg", alt: "Baby milestone" },
      { src: "/images/baby-shoot/DSC_2026.jpg", alt: "Baby photography" },
      { src: "/images/baby-shoot/DSC_2067.jpg", alt: "Baby moments" },
      { src: "/images/baby-shoot/DSC_2091.jpg", alt: "Baby smile" },
      { src: "/images/baby-shoot/DSC_2234.jpg", alt: "Baby portrait 2" },
      { src: "/images/baby-shoot/DSC_3883.JPG", alt: "Baby joy" },
      { src: "/images/baby-shoot/DSC_3895.JPG", alt: "Baby family" },
      { src: "/images/baby-shoot/DSC_6538.JPG", alt: "Baby candid" },
      { src: "/images/baby-shoot/DSC_9476.jpg", alt: "Baby love" },
    ],
  },
  {
    key: "baby-shower",
    label: "Baby Shower",
    images: [
      { src: "/images/baby-shower/DSC_2945.JPG", alt: "Baby shower celebration" },
      { src: "/images/baby-shower/DSC_2951.JPG", alt: "Baby shower moments" },
      { src: "/images/baby-shower/DSC_2975.JPG", alt: "Baby shower decor" },
      { src: "/images/baby-shower/DSC_2994.JPG", alt: "Baby shower portrait" },
      { src: "/images/baby-shower/DSC_3035.JPG", alt: "Baby shower joy" },
      { src: "/images/baby-shower/DSC_3057.JPG", alt: "Baby shower candid" },
      { src: "/images/baby-shower/DSC_3071.JPG", alt: "Baby shower family" },
      { src: "/images/baby-shower/DSC_3469.JPG", alt: "Baby shower smiles" },
      { src: "/images/baby-shower/DSC_3766.JPG", alt: "Baby shower venue" },
      { src: "/images/baby-shower/_DSC8987.JPG", alt: "Baby shower gifts" },
      { src: "/images/baby-shower/_DSC9002.JPG", alt: "Baby shower fun" },
      { src: "/images/baby-shower/_DSC9291.JPG", alt: "Baby shower love" },
    ],
  },
  {
    key: "maternity",
    label: "Maternity Shoot",
    images: [
      { src: "/images/maternity/DSC_3331 copy.jpg", alt: "Maternity portrait" },
      { src: "/images/maternity/DSC_3335.jpg", alt: "Maternity shoot" },
      { src: "/images/maternity/DSC_3358.jpg", alt: "Maternity glow" },
      { src: "/images/maternity/DSC_3366.jpg", alt: "Maternity candid" },
      { src: "/images/maternity/DSC_3371 copy.jpg", alt: "Maternity family" },
      { src: "/images/maternity/DSC_3406.jpg", alt: "Maternity moments" },
      { src: "/images/maternity/DSC_7920.jpg", alt: "Maternity joy" },
      { src: "/images/maternity/DSC_7938.jpg", alt: "Maternity love" },
      { src: "/images/maternity/DSC_7991.jpg", alt: "Maternity sunset" },
      { src: "/images/maternity/PPF08093.JPG", alt: "Maternity portrait 2" },
      { src: "/images/maternity/PPF08141.JPG", alt: "Maternity couple" },
      { src: "/images/maternity/PPF08167.JPG", alt: "Maternity outdoors" },
    ],
  },
  {
    key: "munji",
    label: "Munji",
    images: [],
  },
  {
    key: "school",
    label: "School Events",
    images: [
      { src: "/images/school/DSC_0747.JPG", alt: "School event" },
      { src: "/images/school/DSC_0906.JPG", alt: "School celebration" },
      { src: "/images/school/DSC_0926.JPG", alt: "School kids" },
      { src: "/images/school/DSC_0949.JPG", alt: "School performance" },
      { src: "/images/school/DSC_1134.JPG", alt: "School program" },
      { src: "/images/school/DSC_1233.JPG", alt: "School gathering" },
      { src: "/images/school/DSC_1471.JPG", alt: "School ceremony" },
      { src: "/images/school/DSC_5710.JPG", alt: "School annual day" },
      { src: "/images/school/DSC_5758.JPG", alt: "School parade" },
      { src: "/images/school/DSC_5761.JPG", alt: "School cultural event" },
      { src: "/images/school/DSC_6013.JPG", alt: "School candid" },
      { src: "/images/school/DSC_6330.JPG", alt: "School portrait" },
    ],
  },
  {
    key: "corporate",
    label: "Corporate",
    images: [
      { src: "/images/corporate/DSC_3086.JPG", alt: "Corporate event" },
      { src: "/images/corporate/DSC_3296.JPG", alt: "Corporate gathering" },
      { src: "/images/corporate/DSC_3556.JPG", alt: "Corporate conference" },
      { src: "/images/corporate/DSC_3613.JPG", alt: "Corporate portrait" },
      { src: "/images/corporate/DSC_3703.JPG", alt: "Corporate seminar" },
      { src: "/images/corporate/DSC_3781.JPG", alt: "Corporate celebration" },
      { src: "/images/corporate/DSC_3831.JPG", alt: "Corporate award" },
      { src: "/images/corporate/DSC_5327.JPG", alt: "Corporate team" },
      { src: "/images/corporate/DSC_6420.JPG", alt: "Corporate rally" },
      { src: "/images/corporate/DSC_6841.JPG", alt: "Corporate function" },
      { src: "/images/corporate/_DSC9576.JPG", alt: "Corporate candid" },
      { src: "/images/corporate/_DSC9653.JPG", alt: "Corporate event 2" },
    ],
  },
  {
    key: "vastushanti",
    label: "Vastushanti",
    images: [],
  },
  {
    key: "album",
    label: "Album",
    images: [
      { src: "/images/album/01.jpg", alt: "Album page 1" },
      { src: "/images/album/02.jpg", alt: "Album page 2" },
      { src: "/images/album/03.jpg", alt: "Album page 3" },
      { src: "/images/album/04.jpg", alt: "Album page 4" },
      { src: "/images/album/05.jpg", alt: "Album page 5" },
      { src: "/images/album/06.jpg", alt: "Album page 6" },
      { src: "/images/album/07.jpg", alt: "Album page 7" },
      { src: "/images/album/08.jpg", alt: "Album page 8" },
      { src: "/images/album/09.jpg", alt: "Album page 9" },
      { src: "/images/album/10.jpg", alt: "Album page 10" },
      { src: "/images/album/11.jpg", alt: "Album page 11" },
      { src: "/images/album/12.jpg", alt: "Album page 12" },
    ],
  },
];

// Build "all" from rest — pick first 4 from each category that has images
categories[0].images = categories.slice(1).flatMap((c) =>
  c.images.slice(0, 3)
);

export default function PortfolioPage() {
  const [activeKey, setActiveKey] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const activeCat = categories.find((c) => c.key === activeKey)!;
  const images = activeCat.images;

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, [activeKey]);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null ? Math.max(0, i - 1) : null));
  const nextImage = () => setLightboxIndex((i) => (i !== null ? Math.min(images.length - 1, i + 1) : null));

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex]);

  return (
    <>
      <Navbar />
      <main style={{ background: "#0a0a0a", minHeight: "100vh", paddingTop: "100px" }}>
        {/* Page header */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "60px 32px 48px",
            textAlign: "center",
          }}
        >
          <p className="section-tag" style={{ marginBottom: "16px" }}>Our Gallery</p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "#FAFAFA",
              marginBottom: "16px",
            }}
          >
            Portfolio
          </h1>
          <div className="gold-line" style={{ margin: "0 auto 20px" }} />
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#737373",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Browse our work by category. Every frame tells a story.
          </p>
        </div>

        {/* Category Filter */}
        <div
          style={{
            position: "sticky",
            top: "72px",
            zIndex: 100,
            background: "rgba(10,10,10,0.95)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "0 32px",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              display: "flex",
              gap: "8px",
              overflowX: "auto",
              padding: "16px 0",
              scrollbarWidth: "none",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveKey(cat.key)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: activeKey === cat.key ? "#0a0a0a" : "#737373",
                  background: activeKey === cat.key ? "#D4AF37" : "transparent",
                  border: activeKey === cat.key ? "1px solid #D4AF37" : "1px solid rgba(255,255,255,0.12)",
                  padding: "8px 20px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 32px" }}
        >
          {images.length > 0 ? (
            <div ref={gridRef} className="masonry-grid">
              {images.map((img, i) => (
                <div
                  key={`${activeKey}-${i}`}
                  className="masonry-item img-zoom"
                  onClick={() => openLightbox(i)}
                  style={{
                    cursor: "pointer",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 0.5s ease ${i * 0.04}s, transform 0.5s ease ${i * 0.04}s`,
                  }}
                >
                  <div style={{ position: "relative", aspectRatio: i % 3 === 0 ? "3/4" : "4/3" }}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={75}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(212,175,55,0.04)",
                        opacity: 0,
                        transition: "opacity 0.3s",
                      }}
                      className="img-overlay"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "80px 0",
                color: "#525252",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "16px" }}>📷</div>
              <p style={{ fontSize: "1rem" }}>Photos coming soon for this category.</p>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            style={{
              position: "absolute",
              top: "24px",
              right: "32px",
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#FAFAFA",
              cursor: "pointer",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            disabled={lightboxIndex === 0}
            style={{
              position: "absolute",
              left: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: lightboxIndex === 0 ? "#333" : "#FAFAFA",
              cursor: lightboxIndex === 0 ? "default" : "pointer",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
            aria-label="Previous image"
          >
            <ArrowLeft size={20} />
          </button>

          <div
            style={{ position: "relative", width: "85vw", height: "85vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              style={{ objectFit: "contain" }}
              quality={90}
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            disabled={lightboxIndex === images.length - 1}
            style={{
              position: "absolute",
              right: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: lightboxIndex === images.length - 1 ? "#333" : "#FAFAFA",
              cursor: lightboxIndex === images.length - 1 ? "default" : "pointer",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
            aria-label="Next image"
          >
            <ArrowRight size={20} />
          </button>

          <p
            style={{
              position: "absolute",
              bottom: "24px",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              color: "#737373",
            }}
          >
            {lightboxIndex + 1} / {images.length}
          </p>
        </div>
      )}

      <Footer />
      <WhatsAppFloat />
      <style>{`
        .masonry-item:hover .img-overlay { opacity: 1 !important; }
      `}</style>
    </>
  );
}
