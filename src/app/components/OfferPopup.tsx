import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router";

const API_URL = "http://localhost:8080/offers";

export default function OfferPopup() {
  const [offer, setOffer] = useState(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const closed = sessionStorage.getItem("popupClosed");
    if (closed) return;

    axios.get(API_URL)
      .then((res) => {
        if (res.data.length > 0) {
          const data = res.data[0];
          setOffer(data);

          setTimeout(() => {
            setShow(true);
          }, data.delay || 1500);
        }
      })
      .catch(console.error);
  }, []);

  const closePopup = () => {
    setShow(false);
    sessionStorage.setItem("popupClosed", "true");
  };

  return (
    <AnimatePresence>
      {show && offer && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          {/* POPUP BOX */}
          <motion.div
            initial={{ scale: 0.6, y: 80, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-md w-full text-center border border-white/20"
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-4 text-lg text-gray-500 hover:text-red-500 transition"
            >
              ✕
            </button>

            {/* ICON */}
            <div className="text-5xl mb-3 animate-bounce">🎁</div>

            {/* TITLE */}
            <h2 className="text-2xl font-bold text-[#1F3D2B]">
              {offer.title}
            </h2>

            {/* LINE */}
            <div className="h-[3px] w-20 mx-auto my-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />

            {/* DESCRIPTION */}
            <p className="text-gray-600 mb-6">
              {offer.description}
            </p>

            {/* CTA BUTTON */}
            <button
              onClick={() => {
                closePopup();
                navigate("/collections"); // 🔥 REDIRECT
              }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#1F3D2B] font-semibold shadow-lg hover:scale-105 transition"
            >
              🛍️ Shop Now
            </button>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}