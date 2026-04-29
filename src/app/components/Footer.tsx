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

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-white overflow-hidden">

      {/* 🔥 PREMIUM BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(#0F3D2E 40%)",
        }}
      />

      {/* ✨ SUBTLE GLOW ANIMATION */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-[#D4AF37]/10 blur-3xl rounded-full top-[-100px] left-[-100px]"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* 🔥 GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >

          {/* 🔹 BRAND */}
          <motion.div variants={fadeUp} className="space-y-6">
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
                  key={i}
                  href="#"
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    boxShadow: "0 10px 20px rgba(212,175,55,0.4)",
                  }}
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-[#D4AF37] transition"
                >
                  <Icon className="h-5 w-5 text-white hover:text-black transition" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 🔹 NAVIGATION */}
          <motion.div variants={fadeUp} className="space-y-6">
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
                    className="group text-gray-300 text-sm relative inline-block"
                  >
                    {item}

                    {/* 🔥 UNDERLINE ANIMATION */}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 🔹 SERVICES */}
          <motion.div variants={fadeUp} className="space-y-6">
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
                <motion.li
                  key={i}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="hover:text-white cursor-pointer"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 🔹 CONTACT */}
          <motion.div variants={fadeUp} className="space-y-6">
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

              <motion.li
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-3"
              >
                <MapPin className="h-5 w-5 text-[#E6C48A]" />
                <span>Chiplun, Maharashtra, India</span>
              </motion.li>

              <motion.li
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3"
              >
                <Phone className="h-5 w-5 text-[#E6C48A]" />
                <span>+91 77450 12743</span>
              </motion.li>

              <motion.li
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3"
              >
                <Mail className="h-5 w-5 text-[#E6C48A]" />
                <span>hello@upahaarix.com</span>
              </motion.li>

            </ul>
          </motion.div>
        </motion.div>

        {/* 🔥 BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-6 border-t border-white/10 text-center"
        >
          <p className="text-sm text-gray-400">
            © {currentYear} Upahaarix. All rights reserved.
          </p>

          <p className="text-xs text-gray-500 mt-2 tracking-wide">
            Crafted with elegance • Premium Gifting Solutions
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;