import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const API_URL = "http://localhost:8080/api/products";
const IMAGE_BASE_URL = "http://localhost:8080/uploads/";

const Collections = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filter, setFilter] = useState("All");

  // ✅ FETCH PRODUCTS
  useEffect(() => {
    axios.get(API_URL + "/").then((res) => {
      setProducts(res.data);
    });
  }, []);

  // ✅ FILTER
  const filtered =
    filter === "All"
      ? products
      : products.filter(
          (p: any) =>
            p.category?.toLowerCase() === filter.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-[#0F3D2E]">

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
          Our Premium Collections
        </motion.h1>

        {/* GOLD LINE */}
        <div className="h-[2px] w-40 mx-auto mt-5 mb-6 bg-[#D4AF37]" />

        <p className="text-gray-200 max-w-xl mx-auto">
          Discover curated gifting experiences crafted with elegance
        </p>
      </section>

      {/* 🔥 MAIN CONTENT */}
      <section className="bg-[#F9FAFB] rounded-t-[50px] py-20">

        {/* FILTER BUTTONS */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap px-6">
          {["All", "simple", "standard", "premium"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "text-[#1F3D2B]"
                  : "text-gray-700 bg-white border"
              }`}
              style={
                filter === cat
                  ? {
                      background:
                        "linear-gradient(135deg, #E6C48A, #D4AF37)",
                      boxShadow:
                        "0 6px 20px rgba(212,175,55,0.3)",
                    }
                  : {}
              }
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* PRODUCTS GRID */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">

          {filtered.map((p: any, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={
                    p.image
                      ? `${IMAGE_BASE_URL}${p.image}`
                      : "https://via.placeholder.com/300"
                  }
                  alt={p.name}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 text-center">

                {/* CATEGORY BADGE */}
                <span className="text-xs px-3 py-1 rounded-full bg-[#E6C48A] text-[#1F3D2B] font-medium">
                  {p.category || "General"}
                </span>

                {/* NAME */}
                <h3 className="text-lg font-semibold mt-3 text-gray-800">
                  {p.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {p.description}
                </p>

                {/* BUTTON */}
                {/* <button
                  className="mt-4 px-5 py-2 rounded-full text-sm font-semibold transition-all"
                  style={{
                    background:
                      "linear-gradient(135deg, #E6C48A, #D4AF37)",
                    color: "#1F3D2B",
                  }}
                >
                  View Details
                </button> */}

              </div>
            </motion.div>
          ))}

        </div>

        {/* EMPTY STATE */}
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No products found.
          </p>
        )}
      </section>
    </div>
  );
};

export default Collections;