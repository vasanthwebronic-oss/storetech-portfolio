"use client";
import Image from "next/image";

type Benefit = {
  icon: string;
  alt: string;
  text: string;
};

export default function Benefits() {
  const benefits: Benefit[] = [
    {
      icon: "./assets/icons/AI-Powered HD.svg",
      alt: "AI Powered",
      text: "Reduced operational costs through automation",
    },
    {
      icon: "./assets/icons/Revenue Generation.svg",
      alt: "Revenue Generation",
      text: "Increased revenue with 24/7 accessibility",
    },
    {
      icon: "./assets/icons/Full-Service.svg",
      alt: "Full Service",
      text: "Enhanced customer experience and personalization",
    },
    {
      icon: "./assets/icons/Real-Time IM.svg",
      alt: "Real-Time Inventory",
      text: "Real-time inventory management and tracking",
    },
    {
      icon: "./assets/icons/ai-powered.svg",
      alt: "AI Monitoring",
      text: "Improved security with AI-powered monitoring",
    },
    {
      icon: "./assets/icons/scalability.svg",
      alt: "Scalability",
      text: "Scalable solutions that grow with your business",
    },
    {
      icon: "./assets/icons/ai-ml.svg",
      alt: "AI & ML",
      text: "Data-driven insights for better decision making",
    },
    {
      icon: "./assets/icons/Environmental Product.svg",
      alt: "Sustainability",
      text: "Environmental sustainability with reduced waste",
    },
  ];

  return (
    <section
      id="benefits"
      className="
        relative py-24 overflow-hidden
        bg-linear-to-b from-gray-50 via-white to-gray-50
      "
    >
      <div
        aria-hidden
        className="
          absolute -top-32 left-1/2 -translate-x-1/2
          w-[600px] h-[600px]
          rounded-full
          bg-[radial-gradient(circle_at_center,rgba(55,198,89,0.12),transparent_60%)]
          blur-3xl
        "
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Benefits & Outcomes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your business with measurable, long-term results
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="
                group flex items-start gap-5
                p-6 rounded-2xl
                bg-white/70 backdrop-blur
                border border-gray-200
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-xl
                focus-within:-translate-y-1 focus-within:shadow-xl
              "
            >
              {/* Icon */}
              <div
                className="
                  shrink-0
                  w-12 h-12 rounded-xl
                  bg-green-50
                  flex items-center justify-center
                  transition-transform duration-300 ease-out
                  group-hover:-translate-y-1 group-hover:scale-110
                "
              >
                <Image
                  src={benefit.icon}
                  alt={benefit.alt}
                  width={26}
                  height={26}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <p className="text-gray-800 text-lg leading-relaxed">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
