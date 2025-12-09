import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-7">
            Key Features & Capabilities
          </h2>
          <p className="text-gray-600 text-xl sm:text-xl max-w-2xl mx-auto">
            A comprehensive suite of intelligent solutions designed for modern
            retail operations
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card */}
          {[
            {
              src: "/assets/icons/smart-automation.svg",
              title: "Smart Automation",
              desc: "IoT, AI, and mobile technologies transform retail environments",
            },
            {
              src: "/assets/icons/ai-security.svg",
              title: "AI Security",
              desc: "Advanced AI-powered security monitors your space 24/7",
            },
            {
              src: "/assets/icons/24-7-operation.svg",
              title: "24/7 Operation",
              desc: "Generate revenue around the clock without on-site staff",
            },
            {
              src: "/assets/icons/cloud-computing.svg",
              title: "Cloud Computing",
              desc: "Scalable infrastructure with secure, always-available services",
            },
            {
              src: "/assets/icons/ai-ml.svg",
              title: "AI & Machine Learning",
              desc: "Predictive algorithms optimize operations and personalize experiences",
            },
            {
              src: "/assets/icons/modular-ecosystem.svg",
              title: "Modular Ecosystem",
              desc: "Start small and scale seamlessly as your business grows",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-start">
                <Image
                  src={f.src}
                  alt={f.title}
                  width={32}
                  height={32}
                  className="opacity-90"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-start">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-start text-base leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
