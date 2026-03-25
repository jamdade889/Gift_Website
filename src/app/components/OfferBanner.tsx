import { useEffect, useState } from "react";
interface Offer {
  id?: string;
  title: string;
  description: string;
}

export function OfferBanner() {
  const [offers, setOffers] = useState<Offer[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/offers")
      .then((res) => res.json())
      .then(setOffers);
  }, []);

  if (offers.length === 0) return null;

  return (
    <>
      <div className="relative w-full overflow-hidden">

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 backdrop-blur-md"
          style={{
            background:
              "linear-gradient(90deg, rgba(15,61,46,0.85), rgba(20,90,67,0.75))",
          }}
        />

        {/* GOLD LINE */}
        <div className="absolute top-0 w-full h-[1px] bg-[#D4AF37]/40" />

        {/* 🔥 MARQUEE */}
        <div className="relative z-10 overflow-hidden">
          <div className="marquee">

            <div className="marquee-content">
              {[...offers, ...offers].map((offer, index) => (
                <span key={index} className="offer-text">
                  <span className="dot" />
                  {offer.title} — {offer.description}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* 🔥 CSS */}
      <style>{`
        .marquee {
          width: 100%;
          overflow: hidden;
        }

        .marquee-content {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .offer-text {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0 40px;
          font-size: 13px;
          color: #E6C48A;
          white-space: nowrap;
          letter-spacing: 0.5px;
        }

        .dot {
          width: 6px;
          height: 6px;
          background: #D4AF37;
          border-radius: 50%;
          display: inline-block;
        }
      `}</style>
    </>
  );
}