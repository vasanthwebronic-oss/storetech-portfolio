import VisionCard from "@/components/common/VisionCard";

export default function Vision() {
  const cards = [
    {
      iconSrc: "./assets/icons/intelligent-integration.svg",
      title: "Intelligent Integration",
      description:
        "Every device connected in an intelligent network, creating a virtuous cycle of data and automation.",
    },
    {
      iconSrc: "./assets/icons/cloud-computing.svg",
      title: "Cloud Computing",
      description:
        "Scalable, flexible infrastructure that powers the ecosystem with secure, always-available services.",
    },
    {
      iconSrc: "./assets/icons/ai-ml.svg",
      title: "AI & Machine Learning",
      description:
        "Advanced algorithms that predict behavior, optimize operations, and personalize experiences.",
    },
  ];

  return (
    <section id="vision" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-14">
          Our Vision:{" "}
          <span className="text-[#37c659]">Redefining the Physical Space</span>
        </h2>

        <h3 className="text-xl sm:text-2xl font-bold mb-3">
          The Philosophy of Seamless Automation
        </h3>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 max-w-5xl">
          Our vision is anchored in the philosophy of "Seamless Automation" –
          creating environments where technology is so deeply integrated that it
          becomes invisible to the end-user, working quietly in the background
          to enhance every interaction.
        </p>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-10 max-w-5xl">
          This means designing systems that are intuitive, reliable, and always
          available, ensuring a consistent and convenient experience 24 hours a
          day, 365 days a year.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <VisionCard
              key={c.title}
              iconSrc={c.iconSrc}
              title={c.title}
              description={c.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
