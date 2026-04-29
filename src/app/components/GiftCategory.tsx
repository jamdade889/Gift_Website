import { motion } from "framer-motion";
import { Link } from "react-router";

// ✅ IMPORT IMAGES
import gift1 from "../../assets/gift1.png";
import gift2 from "../../assets/gift2.png";
import gift3 from "../../assets/gift3.png";

export default function GiftCategory() {

  const cards = [
    {
      title: "SIMPLE",
      img: gift1,
      features: ["Budget-friendly", "Basic packaging", "Ready gifts"],
      link: "/collections?category=simple",
    },
    {
      title: "STANDARD",
      img: gift2,
      features: ["Better packaging", "Custom message", "Combo gifts"],
      link: "/collections?category=standard",
      highlight: true,
    },
    {
      title: "PREMIUM",
      img: gift3,
      features: [
        "Luxury packaging",
        "Full customization",
        "Corporate & wedding hampers",
      ],
      link: "/collections?category=premium",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9f7f2] via-white to-[#f9f7f2]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* 🔹 TITLE */}
        <div className="text-center mb-16">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#0F3D2E",
            }}
          >
            Our Gifting Ranges
          </motion.h2>

          {/* GOLD LINE */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1 }}
            className="h-[2px] mx-auto mb-6"
            style={{ backgroundColor: "#C9A227" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-xl mx-auto"
          >
            Choose from our carefully designed gifting ranges tailored for
            different occasions and budgets.
          </motion.p>
        </div>

        {/* 🔹 GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {cards.map((card, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                to={card.link}
                className={`
                  group relative block bg-white rounded-2xl overflow-hidden
                  transition-all duration-500
                  ${card.highlight
                    ? "border-2 border-[#C9A227] shadow-xl scale-105"
                    : "border border-gray-100 shadow-md hover:shadow-2xl"
                  }
                `}
              >

                {/* 🔥 IMAGE */}
                <div className="overflow-hidden">
                  <motion.img
                    src={card.img}
                    alt={card.title}
                    className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* 🔹 CONTENT */}
                <div className="p-8 text-center">

                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ color: "#0F3D2E" }}
                  >
                    {card.title}
                  </h3>

                  <ul className="text-gray-600 space-y-2 text-sm mb-6">
                    {card.features.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>

                  {/* BUTTON */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-6 py-2 rounded-full text-xs font-semibold tracking-wider uppercase"
                    style={{
                      backgroundColor: "#C9A227",
                      color: "#1F3D2B",
                      boxShadow: "0 10px 25px rgba(201,162,39,0.35)",
                    }}
                  >
                    Explore
                  </motion.div>

                </div>

                {/* 🔥 HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#C9A227]/10 to-transparent" />

              </Link>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}