import { motion } from "framer-motion";
import heroImg from "../../assets/image.jpeg";


export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
  
      {/* 🔥 BACKGROUND IMAGE */}
      <motion.img
        src={heroImg}
        alt="Upahaarix Gift Set"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🔥 OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,61,46,0.9) 0%, rgba(15,61,46,0.7) 40%, rgba(15,61,46,0.3) 75%, rgba(15,61,46,0.1) 100%)",
        }}
      />

      {/* 🔥 CONTENT */}
      <div className="
        relative z-10 
        w-full h-full 
        flex 
        flex-col 
        justify-center items-center   /* ✅ Mobile center */
        sm:items-start sm:justify-center  /* ✅ Desktop left */
        px-6 sm:px-10 lg:px-16
        text-center sm:text-left
      ">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md sm:max-w-xl md:max-w-2xl"
        >

          {/* 🔹 HEADING */}
          <h1
            className="text-2xl leading-snug sm:text-4xl md:text-5xl lg:text-6xl font-semibold"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#E6C48A",
              textShadow: "0px 3px 8px rgba(0,0,0,0.4)",
            }}
          >
            Elevating Corporate <br className="hidden sm:block" />
            Gifting Experiences
          </h1>

          {/* 🔹 GOLD LINE */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="
              h-[2px] mt-4 mb-5 
              mx-auto sm:mx-0   /* ✅ Center mobile, left desktop */
              max-w-[180px] sm:max-w-[260px]
            "
            style={{ backgroundColor: "#D4AF37" }}
          />

          {/* 🔹 SUBTEXT */}
          <p
            className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 font-light"
            style={{
              color: "#F5F5F5",
              textShadow: "0px 2px 6px rgba(0,0,0,0.35)",
            }}
          >
            Premium Gifts for Lasting Impressions
          </p>

          {/* 🔹 BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              w-full sm:w-auto
              px-6 sm:px-8 
              py-3 sm:py-3.5 
              rounded-full 
              font-semibold 
              uppercase 
              tracking-wider 
              text-xs sm:text-sm 
              shadow-xl 
              transition-all
            "
            style={{
              backgroundColor: "#E6C48A",
              color: "#1F3D2B",
              boxShadow: "0 12px 30px rgba(230,196,138,0.35)",
            }}
          >
            Request a Quote
          </motion.button>

        </motion.div>
      </div>

      {/* 🔥 BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-20 sm:h-28 bg-gradient-to-t from-[#0F3D2E] to-transparent opacity-70" />

    </section>
  );
}