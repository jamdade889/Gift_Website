import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Building2,
  Gift,
  PartyPopper,
  CalendarHeart,
  Megaphone
} from "lucide-react";

export function TrustedSection() {

  const [showAll, setShowAll] = useState(false);

  const useCases = [
    {
      icon: Building2,
      title: "Corporate Events",
      desc: "Celebrate employee milestones, team achievements, and corporate events with thoughtfully curated gifting solutions that strengthen relationships."
    },
    {
      icon: Gift,
      title: "Client Gifting",
      desc: "Make a lasting impression with premium client gifts designed for festive seasons, onboarding experiences, and long-term partnerships."
    },
    {
      icon: PartyPopper,
      title: "Personal Celebrations",
      desc: "From birthdays to weddings and anniversaries, elevate personal moments with elegant and meaningful gifting experiences."
    },
    {
      icon: CalendarHeart,
      title: "Festive Collections",
      desc: "Celebrate festivals like Diwali, Christmas, and New Year with luxurious hampers crafted to reflect joy, tradition, and sophistication."
    },
    {
      icon: Megaphone,
      title: "Brand Promotions",
      desc: "Enhance your brand identity with customized gifting kits tailored for marketing campaigns, events, and brand awareness initiatives."
    },
  ];

  const visibleItems = showAll ? useCases : useCases.slice(0, 3);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-28 overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f5ef] via-white to-[#f8f5ef]" />

      {/* 🔥 GOLD GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C9A227]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* 🔹 HEADING */}
        <div className="text-center mb-16">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#0F3D2E"
            }}
          >
            Crafted for Every Occasion <br />
            <span style={{ color: "#C9A227" }}>
              Trusted by Modern Businesses
            </span>
          </motion.h2>

          {/* GOLD LINE */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1 }}
            className="h-[2px] mx-auto mt-6"
            style={{ backgroundColor: "#C9A227" }}
          />

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            We deliver premium gifting experiences designed to build relationships,
            celebrate moments, and elevate brand value through thoughtful presentation.
          </p>
        </div>

        {/* 🔹 CONTENT LIST */}
        <motion.div
          layout   // 🔥 KEY: smooth expand/collapse
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >

          <AnimatePresence mode="popLayout">

            {visibleItems.map((itemData, index) => (

              <motion.div
                key={itemData.title} // 🔥 important fix
                layout
                variants={item}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                whileHover={{ x: 6 }}
                className="flex items-start gap-5 group"
              >

                {/* ICON */}
                <div className="
                  p-4 rounded-full
                  bg-white
                  border border-[#C9A227]/30
                  shadow-sm
                  group-hover:bg-[#0F3D2E]
                  transition duration-300
                ">
                  <itemData.icon className="w-6 h-6 text-[#0F3D2E] group-hover:text-[#E6C48A]" />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-lg font-semibold text-[#0F3D2E]">
                    {itemData.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    {itemData.desc}
                  </p>
                </div>

              </motion.div>

            ))}

          </AnimatePresence>

        </motion.div>

        {/* 🔥 VIEW MORE BUTTON */}
        <div className="text-center mt-12">

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 40px rgba(201,162,39,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(prev => !prev)} // ✅ FIXED toggle
            className="px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all"
            style={{
              backgroundColor: "#C9A227",
              color: "#0F3D2E"
            }}
          >
            {showAll ? "Show Less" : "View More"}
          </motion.button>

        </div>

      </div>
    </section>
  );
}