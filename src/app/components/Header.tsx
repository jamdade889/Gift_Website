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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const iconColor = menuOpen ? "#ffffff" : scrolled ? "#0F3D2E" : "#ffffff";
  const textColor = scrolled ? "#1F2937" : "#F5F5F5";

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2 z-50">
              <img
                src={logo}
                alt="Upahaarix Logo"
                className="h-10 w-auto object-contain"
              />
              <span
                className="text-xl sm:text-2xl font-semibold tracking-wide"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#E6C48A",
                }}
              >
                Upahaarix
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10">
              {nav.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative text-sm font-medium tracking-wide group"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    color: textColor,
                  }}
                >
                  {item.name}
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

            {/* HAMBURGER */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden z-50"
            >
              <div className="space-y-1">
                <span
                  className={`block w-6 h-[2px] transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                  style={{ background: iconColor }}
                />
                <span
                  className={`block w-6 h-[2px] transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                  style={{ background: iconColor }}
                />
                <span
                  className={`block w-6 h-[2px] transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                  style={{ background: iconColor }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* OFFER BANNER */}
        <OfferBanner />
      </header>

      {/* MOBILE MENU OUTSIDE HEADER */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[999] md:hidden transition-opacity duration-300 opacity-100 visible"
        >
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />

          {/* MENU PANEL */}
          <div
            className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-10 transform transition-transform duration-500 translate-y-0"
            style={{
              background: "linear-gradient(180deg, #ffffff 0%, #f8f5ef 100%)",
            }}
          >
            {nav.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold tracking-wide relative group"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: isActive(item.path) ? "#C9A227" : "#0F3D2E",
                }}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-[#C9A227] transition-all duration-300 ${
                    isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
