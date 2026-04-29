import { motion } from "framer-motion";
import { ArrowRight, Award, Shield, Sparkles, Clock } from "lucide-react";
//import { categories, products } from "../data/products";
import { WhyChoose } from "../pages/WhyChoose";
import { TrustedSection } from "../components/TrustedSection";
import { Hero } from "../pages/Hero";
import GiftCategory from "../components/GiftCategory";
import OfferPopup from "../components/OfferPopup";

export function Home() {

  return (
    <div className="min-h-screen">

{ <Hero/> }
 <OfferPopup />
<WhyChoose />
<GiftCategory/>
<TrustedSection/>
</div>
  );
}