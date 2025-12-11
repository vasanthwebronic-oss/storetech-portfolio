import AboutCard from "@/components/common/AboutCard";

export default function About() {
  const cards = [
    {
      src: "./assets/icons/modular-ecosystem.svg",
      title: "Modular Ecosystem",
      text: "Start small and scale seamlessly as your business grows",
    },
    {
      src: "./assets/icons/cross-industry.svg",
      title: "Cross-Industry",
      text: "Solutions extend beyond retail to hospitality, corporate, and residential sectors",
    },
    {
      src: "./assets/icons/ai-powered.svg",
      title: "AI-Powered",
      text: "Machine learning and IoT create predictive, automated experiences",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white text-black">
      <div className="max-w-5xl mx-auto px-8">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-start mb-6">
          The Autonomous Retail Ecosystem
        </h2>

        {/* Paragraphs */}
        <p className="text-gray-700 text-lg mb-4">
          StoreTech provides a comprehensive, modular ecosystem of smart retail
          solutions designed to automate and optimize physical commerce.
        </p>

        <p className="text-gray-700 text-lg mb-6">
          By integrating IoT, AI, and mobile technologies, we transform
          traditional retail environments into efficient, secure, and
          customer-centric spaces that generate revenue 24/7.
        </p>

        {/* Quote Box */}
        <div className="bg-black text-white px-6 py-10 rounded-lg mb-10">
          <p className="italic text-lg leading-relaxed">
            “Success is no longer measured solely by sales per square foot, but
            by the ability to provide 24/7 accessibility, personalized
            engagement, and operational efficiency.”
          </p>
        </div>

        {/* Subheading */}
        <h3 className="text-2xl font-bold mb-6">
          The Dawn of Frictionless Commerce
        </h3>

        {/* Paragraphs */}
        <p className="text-gray-700 text-lg mb-4">
          The global retail landscape is undergoing a seismic transformation,
          driven by technological advancements and evolving consumer
          expectations. The traditional model of physical commerce,
          characterized by fixed operating hours and manual processes, is
          rapidly giving way to a new paradigm defined by automation,
          intelligent systems, and seamless customer experiences.
        </p>

        <p className="text-gray-700 text-lg mb-10">
          In this new era, StoreTech emerges not as a mere vendor of technology,
          but as a visionary architect of the future for physical commerce. Our
          comprehensive, modular ecosystem serves as the central nervous system
          of modern retail operations, seamlessly integrating hardware and
          software to create unified, intelligent environments.
        </p>

        {/* About Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {cards.map((item) => (
            <AboutCard
              key={item.title}
              src={item.src}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
