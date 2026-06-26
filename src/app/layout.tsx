import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sai Samarth Photography | Pune & Pimpri-Chinchwad",
  description:
    "Sai Samarth Photography — 20+ years of experience capturing weddings, pre-weddings, corporate events, birthdays, maternity shoots and more across Pune & Pimpri-Chinchwad. 600+ weddings documented.",
  keywords: [
    "photography Pune",
    "wedding photographer Pune",
    "Pimpri-Chinchwad photographer",
    "pre-wedding shoot Pune",
    "event photographer Pune",
    "Sai Samarth Photography",
  ],
  openGraph: {
    title: "Sai Samarth Photography",
    description: "Let our work speak for itself. 20+ Years · 600+ Weddings · Pune.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
