import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import logo from "../../assets/image1.png";
import { OfferBanner } from "../components/OfferBanner";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const nav = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // ✅ Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* 🔹 LOGO */}
          <Link to="/" className="flex items-center gap-0 z-30">
            <img
              src={logo}
              alt="Upahaarix Logo"
              className="h-13 w-auto object-contain"
            />
            <span
              className="text-xl sm:text-2xl tracking-wide font-semibold"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: scrolled ? "#E6C48A" : "#E6C48A",
              }}
            >
              Upahaarix
            </span>
          </Link>

          {/* 🔹 DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10">
            {nav.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-sm font-medium tracking-wide group"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: scrolled ? "#1F2937" : "#F5F5F5",
                }}
              >
                {item.name}

                {/* underline animation */}
                <span
                  className={`absolute left-0 -bottom-2 h-[2px] transition-all duration-300 ${
                    isActive(item.path)
                      ? "w-full bg-[#D4AF37]"
                      : "w-0 bg-[#D4AF37] group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* 🔹 MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden z-50"
          >
            <div className="space-y-1">
              <span
                className={`block w-6 h-[2px] transition ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
                style={{ background: scrolled ? "#0F3D2E" : "#fff" }}
              />
              <span
                className={`block w-6 h-[2px] transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
                style={{ background: scrolled ? "#0F3D2E" : "#fff" }}
              />
              <span
                className={`block w-6 h-[2px] transition ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
                style={{ background: scrolled ? "#0F3D2E" : "#fff" }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* 🔥 MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 left-0 w-full h-full bg-[#0F3D2E] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {nav.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold tracking-wide"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isActive(item.path) ? "#D4AF37" : "#F5F5F5",
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* 🔥 OFFER BANNER */}
      <OfferBanner />
    </header>
  );
}