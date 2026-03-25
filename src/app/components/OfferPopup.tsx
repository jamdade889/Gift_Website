import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Offer {
  id?: string;
  title: string;
  description: string;
}

export function OfferPopup() {
  const [offer, setOffer] = useState<Offer | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user closed popup before
    const hide = localStorage.getItem("hideOffer");
    if (hide) return;

    fetch("http://localhost:8080/offers")
      .then(res => res.json())
      .then((data) => {
        if (data.length > 0) {
          setOffer(data[0]); // show first offer
          setTimeout(() => setShow(true), 1500); // delay popup
        }
      });
  }, []);

  const closePopup = () => {
    setShow(false);
  };

  const dontShowAgain = () => {
    localStorage.setItem("hideOffer", "true");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && offer && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* MODAL BOX */}
          <motion.div
            initial={{ scale: 0.7, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.7, y: 50 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center relative"
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* ICON */}
            <div className="text-4xl mb-4">🎁</div>

            {/* TITLE */}
            <h2
              className="text-2xl font-bold mb-3"
              style={{ color: "#0F3D2E" }}
            >
              {offer.title}
            </h2>

            {/* GOLD LINE */}
            <div
              className="h-[2px] w-16 mx-auto mb-4"
              style={{ backgroundColor: "#D4AF37" }}
            />

            {/* DESCRIPTION */}
            <p className="text-gray-600 mb-6">
              {offer.description}
            </p>

            {/* CTA BUTTON */}
            <button
              className="px-6 py-3 rounded-full font-semibold uppercase text-sm tracking-wide transition"
              style={{
                backgroundColor: "#D4AF37",
                color: "#0F3D2E",
                boxShadow: "0 10px 25px rgba(212,175,55,0.4)",
              }}
            >
              Shop Now
            </button>

            {/* DON'T SHOW */}
            <p
              onClick={dontShowAgain}
              className="mt-4 text-xs text-gray-400 cursor-pointer hover:text-gray-600"
            >
              Don’t show again
            </p>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}