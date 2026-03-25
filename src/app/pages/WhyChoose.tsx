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

  return (

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

{/* SECTION TITLE */}

<div className="text-center mb-20">

<motion.h2
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="text-4xl md:text-5xl font-bold mb-4"
style={{
fontFamily: "'Playfair Display', serif",
color: "#0F3D2E"
}}
>
WHY CHOOSE UPPHAARIX
</motion.h2>

<p className="text-gray-600 text-lg max-w-2xl mx-auto">
Delivering premium gifting experiences designed for both
personal celebrations and corporate excellence.
</p>

</div>


{/* FEATURE GRID */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

{features.map((feature, index) => (

<motion.div
key={index}
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1 }}
className="bg-white border border-emerald-100 p-8 rounded-xl shadow-sm hover:shadow-xl transition duration-300"
>

{/* ICON */}

<div
className="w-16 h-16 flex items-center justify-center rounded-full mb-6"
style={{
backgroundColor: "#0F3D2E",
color: "white"
}}
>

<feature.icon className="w-7 h-7"/>

</div>

{/* TITLE */}

<h3
className="text-xl font-semibold mb-3"
style={{
color: "#0F3D2E"
}}
>
{feature.title}
</h3>

{/* DESCRIPTION */}

<p className="text-gray-600 text-sm leading-relaxed">
{feature.description}
</p>

</motion.div>

))}

</div>

</div>

</section>

  );
}