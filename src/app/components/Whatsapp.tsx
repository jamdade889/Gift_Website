import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp: React.FC = () => {
  const phoneNumber = "917745012743";
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
        bottom: "25px",
        right: "25px",

        //  PREMIUM THEME
        background: "linear-gradient(135deg, #0F3D2E, #145A44)",
        color: "#E6C48A",

        borderRadius: "50%",
        width: "65px",
        height: "65px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        fontSize: "30px",
        textDecoration: "none",

        boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
        zIndex: 1000,

        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget.style.transform = "scale(1.1)");
        (e.currentTarget.style.boxShadow =
          "0 10px 30px rgba(212,175,55,0.5)");
      }}
      onMouseLeave={(e) => {
        (e.currentTarget.style.transform = "scale(1)");
        (e.currentTarget.style.boxShadow =
          "0 8px 25px rgba(0,0,0,0.5)");
      }}
    >
      <FaWhatsapp />
    </a>
  );
};

export default Whatsapp;