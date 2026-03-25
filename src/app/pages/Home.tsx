import { motion } from "framer-motion";
import { ArrowRight, Award, Shield, Sparkles, Clock } from "lucide-react";

import { CategorySection } from "../components/CategorySection";
import { ProductCard } from "../components/ProductCard";
import { categories, products } from "../data/products";
import { WhyChoose } from "../pages/WhyChoose";
import { Link } from "../components/LinkWrapper";
import { TrustedSection } from "../components/TrustedSection";
import { Hero } from "../pages/Hero";
import { OfferBanner } from "../components/OfferBanner";
import { OfferPopup } from "../components/OfferPopup";

export function Home() {

  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen">

{/* ================= HERO SECTION ================= */}
 

{ <Hero/> }

<OfferPopup/> 
{/* ================= WHY CHOOSE ================= */}

<WhyChoose />


{/* ================= OUR PACKAGES ================= */}

{/* import { Link } from "react-router-dom"; */}

<section className="py-24 bg-emerald-50">
  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE */}
    <div className="text-center mb-16">
      <h2
        className="text-4xl md:text-5xl font-bold mb-4"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "#0F3D2E"
        }}
      >
        OUR GIFTING RANGES
      </h2>

      <div className="h-[2px] w-24 bg-yellow-500 mx-auto mb-6"></div>

      <p className="text-gray-600 max-w-xl mx-auto">
        Choose from our carefully designed gifting ranges tailored for
        different occasions and budgets.
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* SIMPLE */}
      <Link
        to="/collections?category=simple"
        className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae"
          className="h-56 w-full object-cover"
        />

        <div className="p-8 text-center">
          <h3 className="text-2xl font-semibold text-emerald-900 mb-4">
            SIMPLE
          </h3>

          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• Budget-friendly</li>
            <li>• Basic packaging</li>
            <li>• Ready gifts</li>
          </ul>
        </div>
      </Link>

      {/* STANDARD */}
      <Link
        to="/collections?category=standard"
        className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden border-2 border-emerald-600"
      >
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
          className="h-56 w-full object-cover"
        />

        <div className="p-8 text-center">
          <h3 className="text-2xl font-semibold text-emerald-900 mb-4">
            STANDARD
          </h3>

          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• Better packaging</li>
            <li>• Custom message</li>
            <li>• Combo gifts</li>
          </ul>
        </div>
      </Link>

      {/* PREMIUM */}
      <Link
        to="/collections?category=premium"
        className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48"
          className="h-56 w-full object-cover"
        />

        <div className="p-8 text-center">
          <h3 className="text-2xl font-semibold text-emerald-900 mb-4">
            PREMIUM
          </h3>

          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• Luxury packaging</li>
            <li>• Full customization</li>
            <li>• Corporate & wedding hampers</li>
          </ul>
        </div>
      </Link>

    </div>
  </div>
</section>

<TrustedSection/>

{/* ================= CTA ================= */}

{/* <section className="py-24 bg-emerald-800 text-center text-white">

<h2 className="text-4xl font-bold mb-6">
Ready to Create Something Extraordinary?
</h2>

<p className="mb-10 text-lg">
Let us help you make your next gift unforgettable
</p>

<Link
to="/contact"
className="px-10 py-4 bg-white text-emerald-900 rounded-full font-semibold hover:scale-105"
>
Start Your Journey
</Link>

</section> */}



</div>
  );
}