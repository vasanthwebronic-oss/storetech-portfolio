import FeatureCard from "@/components/common/FeatureCard2";

type FeatureItem = {
  src: string;
  title: string;
  desc?: string;
};

export default function Features() {
  const features: FeatureItem[] = [
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
  ];

  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-7">
            Key Features &amp; Capabilities
          </h2>
          <p className="text-gray-600 text-xl sm:text-xl max-w-2xl mx-auto">
            A comprehensive suite of intelligent solutions designed for modern
            retail operations
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard
              key={f.title}
              src={f.src}
              title={f.title}
              desc={f.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
