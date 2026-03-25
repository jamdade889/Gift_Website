import { motion } from "framer-motion";
import { Gift, Users, Briefcase, Sparkles } from "lucide-react";

export function About() {
  const stats = [
    { value: "1000+", label: "Gifts Delivered" },
    { value: "200+", label: "Clients Served" },
    { value: "50+", label: "Gift Collections" },
    { value: "5+", label: "Years Experience" },
  ];

  const values = [
    {
      icon: Gift,
      title: "Curated Excellence",
      desc: "Each gift is thoughtfully selected to reflect quality and meaning.",
    },
    {
      icon: Briefcase,
      title: "Corporate Expertise",
      desc: "Tailored gifting solutions for brands, teams and clients.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      desc: "We collaborate closely to deliver personalized experiences.",
    },
    {
      icon: Sparkles,
      title: "Luxury Presentation",
      desc: "Elegant packaging that enhances every gifting moment.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-[#0F3D2E]">

      {/* 🔥 HERO STYLE HEADER */}
      <section className="py-28 text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#E6C48A",
          }}
        >
          The Art of Gifting
        </motion.h1>

        {/* GOLD LINE */}
        <div className="h-[2px] w-40 mx-auto mt-5 mb-6 bg-[#D4AF37]" />

        <p className="max-w-xl mx-auto text-gray-200 text-sm sm:text-lg">
          Creating meaningful experiences through thoughtfully curated gifts.
        </p>
      </section>

      {/* 🔥 STORY SECTION */}
      <section className="bg-[#F9FAFB] py-24 rounded-t-[50px]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2
              className="text-4xl md:text-5xl text-gray-800 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Crafting Experiences that{" "}
              <span className="text-[#0F3D2E] relative">
                Matter
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#D4AF37]" />
              </span>
            </h2>

            <p className="text-gray-600 text-lg">
              At <b>UPAHAARIX</b>, we believe gifting is more than a tradition —
              it is an expression of appreciation, connection and brand value.
            </p>

            <p className="text-gray-600 text-lg">
              From corporate milestones to personal celebrations, we design
              curated collections that leave lasting impressions.
            </p>

            <p className="text-gray-600 text-lg">
              Our approach blends premium quality, elegant design and attention
              to detail — ensuring every gift tells a story.
            </p>
          </motion.div>

          {/* RIGHT VISUAL CARD */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-3xl shadow-xl"
          >
            <h3
              className="text-2xl mb-4 text-gray-800"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Choose UPAHAARIX?
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>✔ Premium quality curated products</li>
              <li>✔ Elegant & luxury packaging</li>
              <li>✔ Custom corporate solutions</li>
              <li>✔ Timely delivery & support</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* 🔥 STATS */}
      <section className="py-20 bg-[#0F3D2E] text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="text-4xl font-bold text-[#E6C48A]">
                {stat.value}
              </div>
              <p className="text-sm tracking-wide mt-2 text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 🔥 VALUES */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl text-gray-800"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Values
            </h2>

            <div className="h-[2px] w-24 mx-auto mt-4 bg-[#D4AF37]" />

            <p className="text-gray-600 mt-4">
              The foundation of everything we create
            </p>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="w-14 h-14 mb-5 flex items-center justify-center bg-[#0F3D2E] text-white rounded-full">
                  <v.icon size={22} />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {v.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}