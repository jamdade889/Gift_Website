import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-white overflow-hidden">

      {/* 🔥 PREMIUM BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(#0F3D2E 40%)",
        }}
      />

      {/* ✨ GOLD PARTICLE EFFECT */}
     

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* 🔹 BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3
              className="text-3xl tracking-wide"
              style={{
                color: "#E6C48A",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Upahaarix
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              Elevating corporate gifting through luxury packaging,
              thoughtful design, and unforgettable presentation.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <motion.a
                  whileHover={{ scale: 1.2, y: -2 }}
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-[#D4AF37] transition"
                >
                  <Icon className="h-5 w-5 text-white hover:text-black transition" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 🔹 NAVIGATION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h4
              className="text-lg tracking-wide"
              style={{
                color: "#D4AF37",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Explore
            </h4>

            <ul className="space-y-3">
              {["Home", "Collections", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="group text-gray-300 text-sm flex items-center gap-2 transition"
                  >
                    <span className="w-1 h-1 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition" />
                    <span className="group-hover:text-white transition group-hover:translate-x-1">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 🔹 SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h4
              className="text-lg tracking-wide"
              style={{
                color: "#D4AF37",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Services
            </h4>

            <ul className="space-y-3 text-gray-300 text-sm">
              {[
                "Luxury Gift Boxes",
                "Corporate Hampers",
                "Event Packaging",
                "Custom Branding",
              ].map((service, i) => (
                <li
                  key={i}
                  className="hover:text-white transition hover:translate-x-1"
                >
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 🔹 CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h4
              className="text-lg tracking-wide"
              style={{
                color: "#D4AF37",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Contact
            </h4>

            <ul className="space-y-4 text-gray-300 text-sm">

              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#E6C48A]" />
                <span>Chiplun, Maharashtra, India</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#E6C48A]" />
                <span>+91 77450 12743</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#E6C48A]" />
                <span>hello@upahaarix.com</span>
              </li>

            </ul>
          </motion.div>
        </div>

        {/* 🔥 BOTTOM */}
        <div className="mt-16 pt-6 border-t border-white/10 text-center">

          <p className="text-sm text-gray-400">
            © {currentYear} Upahaarix. All rights reserved.
          </p>

          <p className="text-xs text-gray-500 mt-2 tracking-wide">
            Crafted with elegance • Premium Gifting Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;