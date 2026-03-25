import {
  Building2,
  Gift,
  PartyPopper,
  CalendarHeart,
  Megaphone,
  Landmark,
  Laptop,
  ShoppingBag,
  Package,
  HeartPulse,
  GraduationCap
} from "lucide-react";

export function TrustedSection() {

  const useCases = [
    {
      icon: Building2,
      title: "Corporate Events",
      desc: "Employee appreciation, milestones, team celebrations"
    },
    {
      icon: Gift,
      title: "Client Gifting",
      desc: "Festivals, onboarding, partnership gifts"
    },
    {
      icon: PartyPopper,
      title: "Personal Celebrations",
      desc: "Birthdays, weddings, anniversaries"
    },
    {
      icon: CalendarHeart,
      title: "Festive & Seasonal Gifts",
      desc: "Diwali, Christmas, New Year, corporate festivals"
    },
    {
      icon: Megaphone,
      title: "Promotional & Branding Gifts",
      desc: "Customized products for brand awareness"
    }
  ];

  const industries = [
    { icon: Landmark, name: "Finance" },
    { icon: Laptop, name: "IT" },
    { icon: ShoppingBag, name: "Retail" },
    { icon: Package, name: "FMCG" },
    { icon: HeartPulse, name: "Healthcare" },
    { icon: GraduationCap, name: "Education" }
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              color: "#0F3D2E",
              fontFamily: "Playfair Display, serif"
            }}
          >
            Trusted by Leading Brands and  Perfect for Every Occasion
          </h2>

          <div className="h-[2px] w-28 bg-yellow-500 mx-auto"></div>

        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {useCases.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5"
              >

                <div className="bg-emerald-50 border border-yellow-500/30 p-4 rounded-full">
                  <item.icon className="w-6 h-6 text-emerald-700" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-emerald-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

            {industries.map((industry, index) => (
              <div
                key={index}
                className="border border-yellow-500/30 rounded-xl p-6 text-center bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >

                <div className="flex justify-center mb-3 text-emerald-700">
                  <industry.icon className="w-7 h-7" />
                </div>

                <p className="text-sm font-semibold text-emerald-900">
                  {industry.name}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}