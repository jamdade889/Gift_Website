import { motion } from "framer-motion";

const Standard = () => {

  const products = [
    {
      title: "Coffee Mug",
      desc: "Premium ceramic coffee mug perfect for office desks and daily coffee breaks.",
      images: [
        "https://images.unsplash.com/photo-1511920170033-f8396924c348",
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        "https://images.unsplash.com/photo-1577937927133-66ef06acdf18"
      ]
    },

    {
      title: "Wireless Mouse",
      desc: "Smooth and efficient wireless mouse designed for professional productivity.",
      images: [
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
        "https://images.unsplash.com/photo-1613141411244-0e4ac259d217"
      ]
    },

    {
      title: "Desk Organizer",
      desc: "Keep workspaces tidy with a stylish and functional desk organizer.",
      images: [
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
        "https://images.unsplash.com/photo-1587614203976-365c74645e83"
      ]
    },

    {
      title: "Water Bottle",
      desc: "Durable and eco-friendly water bottle ideal for everyday office use.",
      images: [
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
        "https://images.unsplash.com/photo-1526406915894-7bcd65f60845",
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883"
      ]
    }
  ];

  return (
    <div className="bg-gray-100 py-20">

      {/* PAGE TITLE */}

      <div className="text-center mb-20 px-6">
        <h1 className="text-5xl font-bold text-emerald-900 mb-4">
          Standard Gifting Package
        </h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          A balanced corporate gifting package combining practicality
          with brand value. Perfect for employees, conferences,
          and corporate appreciation.
        </p>
      </div>


      {/* PRODUCT SECTIONS */}

      <div className="space-y-20">

        {products.map((product, index) => (

          <motion.section
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg py-14 px-10"
          >

            {/* Title */}

            <h2 className="text-4xl font-semibold text-center text-emerald-900 mb-3">
              {product.title}
            </h2>

            {/* Description */}

            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
              {product.desc}
            </p>

            {/* Images */}

            <div className="grid md:grid-cols-3 gap-8">

              {product.images.map((img, i) => (

                <motion.img
                  key={i}
                  src={img}
                  alt={product.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-64 object-cover rounded-2xl shadow-md"
                />

              ))}

            </div>

          </motion.section>

        ))}

      </div>

    </div>
  );
};

export default Standard;