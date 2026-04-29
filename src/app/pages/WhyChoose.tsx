import { motion } from "framer-motion";
import {
  Gift,
  PenTool,
  Sparkles,
  Truck,
  Building2,
  Globe
} from "lucide-react";

export function WhyChoose() {

  const features = [
    {
      icon: Gift,
      title: "Unique Gift Concepts",
      description:
        "Carefully curated ideas that stand out and create lasting impressions.",
    },
    {
      icon: PenTool,
      title: "Customization Available",
      description:
        "Personalized branding, messages, and packaging tailored to your needs.",
    },
    {
      icon: Sparkles,
      title: "Premium Look & Feel",
      description:
        "High-quality products with elegant and refined presentation.",
    },
    {
      icon: Truck,
      title: "Reliable & Timely Delivery",
      description:
        "Professional handling and dependable delivery you can trust.",
    },
    {
      icon: Building2,
      title: "Personal & Corporate Ready",
      description:
        "Perfectly suited for personal celebrations and corporate gifting requirements.",
    },
    {
      icon: Globe,
      title: "Pan-India Delivery",
      description:
        "Seamless delivery across India for both corporate and personal orders.",
    },
  ];

  // 🔥 Parent animation (stagger)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // 🔥 Card animation
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-24 overflow-hidden">

      {/* 🔥 PREMIUM BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9f7f2] via-white to-[#f9f7f2]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* 🔹 TITLE */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#0F3D2E",
            }}
          >
            Why Choose Upahaarix
          </motion.h2>

          {/* GOLD LINE */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8 }}
            className="h-[2px] mx-auto mb-6"
            style={{ backgroundColor: "#C9A227" }}
          />

          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Delivering premium gifting experiences designed for both
            personal celebrations and corporate excellence.
          </p>
        </div>

        {/* 🔹 GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >

          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
              }}
              className="
                group 
                relative 
                bg-white 
                border border-emerald-50
                p-8 
                rounded-2xl 
                transition-all duration-300
                overflow-hidden
              "
            >

              {/* 🔥 GOLD HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#C9A227]/10 to-transparent" />

              {/* ICON */}
              <div
                className="
                  w-16 h-16 
                  flex items-center justify-center 
                  rounded-full mb-6 
                  transition-all duration-300
                  group-hover:scale-110
                "
                style={{
                  backgroundColor: "#0F3D2E",
                  color: "#E6C48A",
                }}
              >
                <feature.icon className="w-7 h-7" />
              </div>

              {/* TITLE */}
              <h3
                className="text-xl font-semibold mb-3 transition"
                style={{ color: "#0F3D2E" }}
              >
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* 🔥 HOVER LINE */}
              <div className="mt-5 h-[2px] w-0 group-hover:w-12 transition-all duration-300 bg-[#C9A227]" />

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}