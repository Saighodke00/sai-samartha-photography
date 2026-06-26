"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919763307735?text=Hello%20Sai%20Samarth%20Photography%2C%20I%20would%20like%20to%20inquire%20about%20a%20photoshoot."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" color="white" />
    </a>
  );
}
