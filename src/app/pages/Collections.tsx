import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const API_URL = "http://localhost:8080/api/products";
const IMAGE_BASE_URL = "http://localhost:8080/uploads/";

// 🔥 MAIN CATEGORIES
const categories = [
  "All",
  "Eco-Friendly Corporate Gifts",
  "Branded Corporate Gifts",
  "Office Utility Gifts",
  "Weeding Gift",
  "personal events",
  "Diwali Gifts",
  "Corporate Kits",
  "Welcome Kits",
  "Festival Hampers",
  "Custom Branding Gifts"

];

// 🔥 TYPES
const types = ["All", "simple", "standard", "premium"];


// 🔥 ANIMATION VARIANTS
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Collections = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  // ✅ FETCH PRODUCTS
  useEffect(() => {
    axios.get(API_URL)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("API ERROR:", err));
  }, []);

  // ✅ FILTER
  const filtered = products.filter((p: any) => {
    const categoryMatch =
      selectedCategory === "All" ||
      p.mainCategory?.toLowerCase().trim() ===
        selectedCategory.toLowerCase().trim();

    const typeMatch =
      selectedType === "All" ||
      p.category?.toLowerCase().trim() ===
        selectedType.toLowerCase().trim();

    return categoryMatch && typeMatch;
  });
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#0F3D2E]"
    >

      {/* 🔥 HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="py-28 text-center text-white px-6"
      >
        <h1 className="text-5xl text-[#E6C48A]">
          Our Premium Collections
        </h1>
        <div className="h-[2px] w-40 mx-auto mt-5 bg-[#D4AF37]" />
        <p className="text-gray-200 mt-4">
          Discover curated gifting experiences crafted with elegance
        </p>
      </motion.section>

      {/* 🔥 CATEGORY BAR */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="sticky top-0 z-50 bg-gradient-to-r from-[#E6C48A] to-[#D4AF37] text-[#1F3D2B] shadow-md"
      >
        <div className="flex justify-center gap-6 py-3 text-sm font-medium flex-wrap">

          {categories.slice(0, 5).map((cat, i) => (
            <span
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer transition ${
                selectedCategory === cat
                  ? "font-bold underline scale-110"
                  : "hover:scale-105"
              }`}
            >
              {cat}
            </span>
          ))}

          {/* DROPDOWN */}
          <div className="relative group">
            <span className="cursor-pointer">More ▾</span>

            <div className="absolute left-0 top-8 hidden group-hover:block bg-white text-gray-700 rounded-xl shadow-xl w-56">
              {categories.slice(5).map((item, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedCategory(item)}
                  className="px-4 py-2 hover:bg-[#F3E6C9] cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>


      {/* 🔥 TYPE FILTER */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="bg-[#F9FAFB] py-10"
      >

        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                selectedType === t
                  ? "bg-gradient-to-r from-[#E6C48A] to-[#D4AF37] text-[#1F3D2B] scale-105"
                  : "bg-white border text-gray-700 hover:scale-105"
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        

        

        {/* 🔥 PRODUCTS GRID */}
        {/* <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6"
        >

          {filtered.map((p: any) => (
            <motion.div
              key={p.id}
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition"
            >
              <div className="overflow-hidden">
                <img
                  src={`${IMAGE_BASE_URL}${p.image}`}
                  alt={p.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5 text-center">

                <span className="text-xs px-3 py-1 rounded-full bg-[#E6C48A] text-[#1F3D2B]">
                  {p.mainCategory}
                </span>

                <h3 className="text-lg font-semibold mt-3">
                  {p.name}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {p.description}
                </p>

                <p className="text-xs mt-2 text-gray-400 uppercase">
                  {p.category}
                </p>

              </div>
            </motion.div>
          ))}

        </motion.div> */}
        <motion.div
  variants={container}
  initial="hidden"
  animate="show"
  className="max-w-7xl mx-auto grid 
             grid-cols-1 
             sm:grid-cols-2 
             md:grid-cols-3 
             lg:grid-cols-4 
             xl:grid-cols-5 
             gap-6 px-6"
>

  {filtered.map((p: any) => (
    <motion.div
      key={p.id}
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={`${IMAGE_BASE_URL}${p.image}`}
          alt={p.name}
          className="w-full h-36 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-3">

        {/* CATEGORY */}
        <span className="text-[10px] px-2 py-1 rounded bg-[#E6C48A] text-[#1F3D2B]">
          {p.mainCategory}
        </span>

        {/* NAME */}
        <h3 className="text-sm font-semibold mt-2 truncate">
          {p.name}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
          {p.description}
        </p>

        {/* FOOTER */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-[10px] text-gray-400 uppercase">
            {p.category}
          </span>

          
        </div>

      </div>
    </motion.div>
  ))}

</motion.div>

        {/* EMPTY */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-10 text-gray-500"
          >
            No products found
          </motion.div>
        )}

      </motion.section>
    </motion.div>
  );
};

export default Collections;