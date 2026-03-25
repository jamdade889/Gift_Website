import { Link } from "react-router";
import { motion } from "framer-motion";

const Simple = () => {

  const items = [
    {
      title: "Diary",
      desc: "A premium quality diary designed for professionals to organize schedules, ideas, and important notes.",
      images: [
        "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
        "https://images.unsplash.com/photo-1455390582262-044cdead277a",
        "https://images.unsplash.com/photo-1506784365847-bbad939e9335"
      ]
    },
    {
      title: "Pen",
      desc: "Elegant executive pen perfect for daily writing, meetings, and corporate branding.",
      images: [
        "https://images.unsplash.com/photo-1583484963886-cfe2bff2945f",
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07",
        "https://images.unsplash.com/photo-1562564055-71e051d33c19"
      ]
    },
    {
      title: "Key Chain",
      desc: "Stylish and durable keychain that adds a premium branded touch to everyday essentials.",
      images: [
       "https://images.pexels.com/photos/9428789/pexels-photo-9428789.jpeg",
    "https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg",
    "https://images.pexels.com/photos/9428793/pexels-photo-9428793.jpeg"
      ]
    },
    {
      title: "Thank You / Welcome Card",
      desc: "A personalized greeting card to warmly welcome employees or thank valued clients.",
      images: [
        "https://images.unsplash.com/photo-1513883049090-d0b7439799bf",
        "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0",
        "https://images.unsplash.com/photo-1557682250-33bd709cbe85"
      ]
    }
  ];

  return (
    <div className="bg-gray-100 py-20 min-h-screen">

      {/* Header */}

      <div className="max-w-6xl mx-auto text-center mb-20 px-6">

        <h1 className="text-5xl font-bold text-emerald-900 mb-4">
          Simple Gifting Package
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A thoughtfully curated starter corporate gifting package designed
          for large-scale distribution. Ideal for onboarding kits,
          conferences, corporate events, and employee appreciation programs.
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

            {/* Title */}

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
                  src={`${img}?auto=format&fit=crop&w=900&q=80`}
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

      {/* Perfect For */}

      <div className="max-w-5xl mx-auto mt-24 bg-white shadow-xl rounded-3xl p-12 text-center">

        <h2 className="text-3xl font-bold text-emerald-900 mb-6">
          Perfect For
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          Corporate onboarding kits, promotional campaigns, large scale
          events, conferences, employee welcome packages, and brand
          awareness gifting.
        </p>

      </div>

      {/* Back Button */}

      <div className="text-center mt-12">

        <Link
          to="/collections"
          className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-emerald-700 transition"
        >
          ← Back to Collections
        </Link>

      </div>

    </div>
  );
};

export default Simple;
