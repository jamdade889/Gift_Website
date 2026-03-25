// import { useState } from "react";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
// import type { ContactFormData } from "../types";

// export function Contact() {
//   const [formData, setFormData] = useState<ContactFormData>({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     service: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

 
//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setIsSubmitting(true);


//   try {
//     const response = await fetch("http://localhost:8080/api/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to send message");
//     }

//     const data = await response.text();
//     console.log(data);

//     setSubmitted(true);

//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       message: "",
//       service: "",
//     });

//   } catch (error) {
//     console.error("Error:", error);
//     alert("Something went wrong!");
//   } finally {
//     setIsSubmitting(false);
//   }
// };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   return (
//     <div className="min-h-screen pt-20">

//       {/* HERO */}
//       <section className="py-24 bg-gradient-to-r from-emerald-800 to-emerald-600 text-white text-center relative overflow-hidden">

//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:40px_40px]" />

//         <div className="relative z-10 max-w-7xl mx-auto px-6">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-5xl md:text-6xl font-serif mb-6"
//           >
//             Get in Touch
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-lg text-emerald-100 max-w-2xl mx-auto"
//           >
//             Let's create something extraordinary together
//           </motion.p>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

//           {/* CONTACT INFO */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div>
//               <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
//                 Let's Start a <br />
//                 <span className="text-emerald-600">Conversation</span>
//               </h2>

//               <p className="text-gray-600 text-lg leading-relaxed">
//                 Whether you have a question about our services or need a custom quote,
//                 our team is here to help.
//               </p>
//             </div>

//             {/* Cards */}
//             <div className="space-y-6">

//               <div className="flex gap-4 p-6 bg-emerald-50 rounded-lg hover:shadow-lg transition">
//                 <div className="w-12 h-12 flex items-center justify-center bg-emerald-600 text-white rounded-full">
//                   <MapPin className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-800">Visit Our Studio</h3>
//                   <p className="text-gray-600">
//                     123 Luxury Lane <br />
//                     Premium District
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4 p-6 bg-emerald-50 rounded-lg hover:shadow-lg transition">
//                 <div className="w-12 h-12 flex items-center justify-center bg-emerald-600 text-white rounded-full">
//                   <Phone className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-800">Call Us</h3>
//                   <p className="text-gray-600">
//                     77450 12743 <br />
//                     Mon-Fri 9AM-6PM
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4 p-6 bg-emerald-50 rounded-lg hover:shadow-lg transition">
//                 <div className="w-12 h-12 flex items-center justify-center bg-emerald-600 text-white rounded-full">
//                   <Mail className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-800">Email Us</h3>
//                   <p className="text-gray-600">
//                     hello@upahaarix.com <br />
//                     Response within 24 hours
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4 p-6 bg-emerald-50 rounded-lg hover:shadow-lg transition">
//                 <div className="w-12 h-12 flex items-center justify-center bg-emerald-600 text-white rounded-full">
//                   <Clock className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-800">Business Hours</h3>
//                   <p className="text-gray-600">
//                     Mon-Fri: 9AM-6PM <br />
//                     Sat: 10AM-4PM
//                   </p>
//                 </div>
//               </div>

//             </div>
//           </motion.div>

//           {/* FORM */}
//           <motion.form
//             onSubmit={handleSubmit}
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >

//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border border-emerald-400 px-4 py-3 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border border-emerald-400 px-4 py-3 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
//             />``

//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full border border-emerald-400 px-4 py-3 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
//             />

//             <select
//               name="service"
//               value={formData.service}
//               onChange={handleChange}
//               className="w-full border border-emerald-400 px-4 py-3 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
//             >
//               <option value="">Select a service</option>
//               <option value="luxury">Luxury Collection</option>
//               <option value="elegant">Elegant Boxes</option>
//               <option value="silk">Silk & Satin</option>
//               <option value="premium">Premium Papers</option>
//             </select>

//             <textarea
//               name="message"
//               rows={5}
//               placeholder="Your message..."
//               required
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full border border-emerald-400 px-4 py-3 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
//             />

//             <button
//               type="submit"
//               disabled={isSubmitting || submitted}
//               className="w-full bg-emerald-600 text-white py-4 rounded-full font-semibold hover:bg-emerald-700 transition flex items-center justify-center gap-2"
//             >
//               {isSubmitting ? "Sending..." : submitted ? "Message Sent ✓" : "Send Message"}
//               {!isSubmitting && !submitted && <Send className="w-5 h-5" />}
//             </button>

//           </motion.form>
//         </div>
//       </section>
//     </div>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import type { ContactFormData } from "../types";

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "",
      });
    } catch {
      alert("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pt-20 bg-[#0F3D2E]">

      {/* 🔥 HERO HEADER */}
      <section className="py-24 text-center px-6 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl"
          style={{ fontFamily: "'Playfair Display', serif", color: "#E6C48A" }}
        >
          Let’s Build Something Elegant
        </motion.h1>

        <div className="h-[2px] w-40 mx-auto mt-5 mb-6 bg-[#D4AF37]" />

        <p className="text-gray-200 max-w-xl mx-auto">
          Tell us your vision — we’ll craft the perfect gifting experience.
        </p>
      </section>

      {/* 🔥 MAIN SECTION */}
      <section className="bg-[#F9FAFB] py-20 rounded-t-[50px]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* 🔹 LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >

            {/* HEADING */}
            <div>
              <h2
                className="text-4xl md:text-5xl leading-tight text-gray-800"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Crafting Moments that{" "}
                <span className="text-[#0F3D2E] relative">
                  Matter
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#D4AF37]" />
                </span>
              </h2>

              <p className="text-gray-600 mt-5 max-w-md">
                We design premium corporate gifts that leave lasting impressions.
              </p>
            </div>

            {/* INFO CARDS */}
            <div className="grid gap-5">
              {[
                { icon: MapPin, title: "Location", text: "Chiplun, Maharashtra" },
                { icon: Phone, title: "Phone", text: "77450 12743" },
                { icon: Mail, title: "Email", text: "hello@upahaarix.com" },
                { icon: Clock, title: "Hours", text: "Mon–Sat: 9AM–6PM" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="bg-[#0F3D2E] text-white p-3 rounded-full">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 🔹 FORM SIDE */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-3xl shadow-xl space-y-6"
          >

            {/* ✨ HEADER */}
            <div>
              <h3
                className="text-2xl text-gray-800"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Request a Quote
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Fill in the details and our team will reach out shortly
              </p>
            </div>

            {/* INPUTS */}
            <div className="grid sm:grid-cols-2 gap-5">

              <input
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-[#0F3D2E] transition"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-[#0F3D2E]"
              />

            </div>

            <div className="grid sm:grid-cols-2 gap-5">

              <input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-xl"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-xl"
              >
                <option value="">Select Service</option>
                <option value="luxury">Luxury Gifts</option>
                <option value="corporate">Corporate Gifts</option>
                <option value="custom">Custom Hampers</option>
              </select>

            </div>

            <textarea
              name="message"
              rows={4}
              placeholder="Describe your requirement..."
              required
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-xl"
            />

            {/* 🔥 PREMIUM BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting || submitted}
              className="w-full py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all"
              style={{
                background: "linear-gradient(135deg, #E6C48A, #D4AF37)",
                color: "#1F3D2B",
                boxShadow: "0 12px 30px rgba(212,175,55,0.35)",
              }}
            >
              {isSubmitting
                ? "Sending..."
                : submitted
                ? "Request Sent ✓"
                : "Submit Request"}
              {!isSubmitting && !submitted && <Send size={18} />}
            </button>

          </motion.form>
        </div>
      </section>
    </div>
  );
}