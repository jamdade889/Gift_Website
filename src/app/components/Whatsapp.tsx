import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp: React.FC = () => {
  const phoneNumber = "919699785417"; // Replace with your number
  const message =
    "Hello Upahaarix! I want to know about your gift wrapping services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#111111", // Dark background
        color: "#25D366", // WhatsApp green icon
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "28px",
        textDecoration: "none",
        boxShadow: "0 6px 15px rgba(0,0,0,0.4)",
        zIndex: 1000,
      }}
    >
      <FaWhatsapp />
    </a>
  );
};

export default Whatsapp;