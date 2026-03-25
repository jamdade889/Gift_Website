import { motion } from "framer-motion";

const Premium = () => {

  const items = [
    {
      title: "Laptop Bag",
      desc: "Premium quality laptop bag designed for professionals who value style, durability, and functionality.",
      images: [
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7",
        "https://images.unsplash.com/photo-1547949003-9792a18a2601",
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
      ]
    },
    {
      title: "Power Bank",
      desc: "High-capacity power bank designed to keep smartphones and devices charged anytime, anywhere.",
      images: [
        "https://images.unsplash.com/photo-1583863788434-e58a36330cf0",
        "https://images.unsplash.com/photo-1580910051074-3eb694886505",
        "https://images.unsplash.com/photo-1609592806787-3d9a3b6c9c1a"
      ]
    },
    {
      title: "Bluetooth Speaker",
      desc: "Portable Bluetooth speaker delivering rich sound quality perfect for music, meetings, and travel.",
      images: [
        "https://images.unsplash.com/photo-1585386959984-a4155223168a",
        "https://images.unsplash.com/photo-1589003077984-894e133dabab",
        "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd"
      ]
    },
    {
      title: "Premium Wallet",
      desc: "Elegant leather wallet crafted for modern professionals who appreciate quality and sophistication.",
      images: [
        "https://images.unsplash.com/photo-1606503825008-909a67e63c3d",
        "https://images.unsplash.com/photo-1555529771-7888783a18d3",
        "https://images.unsplash.com/photo-1627123424574-724758594e93"
      ]
    }
  ];

  return (
    <div className="bg-gray-100 py-20 min-h-screen">

      {/* Header */}

      <div className="max-w-6xl mx-auto text-center mb-20 px-6">

        <h1 className="text-5xl font-bold text-emerald-900 mb-4">
          Premium Gifting Package
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our premium corporate gifting collection is designed for executives,
          VIP clients, and high-value corporate relationships. Each item
          represents luxury, prestige, and brand excellence.
        </p>

      </div>


      {/* Product Sections */}

      <div className="space-y-20">

        {items.map((item, index) => (

          <motion.section
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg py-14 px-10"
          >

            {/* Product Title */}

            <h2 className="text-4xl font-semibold text-center text-emerald-900 mb-3">
              {item.title}
            </h2>

            {/* Description */}

            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
              {item.desc}
            </p>

            {/* Image Grid */}

            <div className="grid md:grid-cols-3 gap-8">

              {item.images.map((img, i) => (

                <motion.img
                  key={i}
                  src={img}
                  alt={item.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-64 object-cover rounded-2xl shadow-md"
                />

              ))}

            </div>

          </motion.section>

        ))}

      </div>


      {/* Best For Section */}

      <div className="max-w-5xl mx-auto mt-24 bg-white shadow-xl rounded-3xl p-12 text-center">

        <h2 className="text-3xl font-bold text-emerald-900 mb-6">
          Best For
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          Executive corporate gifting, VIP clients, leadership teams,
          premium brand promotions, high-value partnerships, and
          luxury corporate events.
        </p>

      </div>

    </div>
  );
};

export default Premium;