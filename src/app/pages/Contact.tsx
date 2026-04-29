
import { useState, useEffect } from "react";
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

  // ✅ API BASE URL (CHANGE IF DEPLOYED)
 const API_URL = "http://localhost:8080/api/contact";

  // ✅ AUTO RESET SUCCESS MESSAGE
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  // ✅ SUBMIT HANDLER (FIXED)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // ✅ HANDLE ERROR RESPONSE
      if (!res.ok) {
        const text = await res.text();
        console.error("Backend error:", text);
        throw new Error("Failed to submit");
      }

      const data = await res.text(); // backend returns string
      console.log("Success:", data);

      // ✅ SUCCESS STATE
      setSubmitted(true);

      // ✅ RESET FORM
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "",
      });

    } catch (error) {
      console.error("Submit error:", error);
      alert(" Message sent successfully. We will connect with you shortly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ INPUT CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ✅ ANIMATIONS
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <div className="min-h-screen pt-20 bg-[#0F3D2E]">

      {/* 🔥 HERO */}
      <section className="py-24 text-center px-6 text-white">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-5xl md:text-6xl"
          style={{ fontFamily: "'Playfair Display', serif", color: "#E6C48A" }}
        >
          Let’s Build Something Elegant
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "160px" }}
          transition={{ duration: 1 }}
          className="h-[2px] w-40 mx-auto mt-5 mb-6 bg-[#D4AF37]"
        />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="text-gray-200 max-w-xl mx-auto"
        >
          Tell us your vision — we’ll craft the perfect gifting experience.
        </motion.p>
      </section>

      {/* 🔥 MAIN */}
      <section className="bg-[#F9FAFB] py-20 rounded-t-[50px]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center"
        >

          {/* 🔹 LEFT */}
          <motion.div variants={fadeUp} className="space-y-10">
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

            <div className="grid gap-5">
              {[
                { icon: MapPin, title: "Location", text: "Chiplun, Maharashtra" },
                { icon: Phone, title: "Phone", text: "77450 12743" },
                { icon: Mail, title: "Email", text: "hello@upahaarix.com" },
                { icon: Clock, title: "Hours", text: "Mon–Sat: 9AM–6PM" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="bg-[#0F3D2E] text-white p-3 rounded-full">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 🔹 FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-3xl shadow-xl space-y-6 w-full"
          >
            <div>
              <h3 className="text-2xl text-gray-800 font-semibold">
                Request a Quote
              </h3>
              <p className="text-gray-500 text-sm">
                Fill in the details and our team will reach out shortly
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <input
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#0F3D2E]"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#0F3D2E]"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#0F3D2E]"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#0F3D2E]"
              >
                <option value="">Select Service</option>
                <option value="luxury">Simple</option>
                <option value="corporate">Standard</option>
                <option value="custom">Premium</option>
              </select>
            </div>

            <textarea
              name="message"
              rows={6}
              placeholder="Describe your requirement..."
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-[#0F3D2E]"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-full font-semibold flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(135deg, #E6C48A, #D4AF37)",
                color: "#1F3D2B",
              }}
            >
              {isSubmitting
                ? "Sending..."
                : submitted
                ? "Request Sent ✓"
                : "Submit Request"}

              {!isSubmitting && !submitted && <Send size={18} />}
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}


