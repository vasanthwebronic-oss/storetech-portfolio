import CTAButton from "@/components/common/CTAButton";
import FeatureCard from "@/components/common/FeatureCard";

export default function Hero() {
  const features = [
    { src: "./assets/icons/smart-automation.svg", title: "Smart Automation" },
    { src: "./assets/icons/ai-security.svg", title: "AI Security" },
    { src: "./assets/icons/24-7-operation.svg", title: "24/7 Operation" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-center justify-center bg-linear-to-br from-[#0b1114] via-[#050607] to-[#071017] text-white py-10"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Headline */}
        <h1 className="leading-tight mb-6">
          <div
            className="text-[2.75rem] sm:text-[3.75rem] md:text-[4.5rem] font-bold italic text-[#37c659] -tracking-tight"
            aria-hidden
          >
            The Future of Retail,
          </div>

          <div className="mt-2 text-[3.25rem] sm:text-[4rem] md:text-[4.75rem] font-bold text-white">
            Automated
          </div>
        </h1>

        {/* Subtext */}
        <p className="mx-auto max-w-4xl text-2xl text-gray-300 mb-8">
          Transform traditional retail into efficient, secure, and
          customer-centric spaces that generate revenue 24/7
        </p>

        {/* CTA container */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
          <CTAButton
            href="tel:+917200088500"
            ariaLabel="Schedule a demo"
            variant="primary"
            className=""
          >
            <span className="">Schedule a Demo</span>
          </CTAButton>

          <CTAButton
            href="https://opalescent-hyssop-f3f.notion.site/2613cb01fb4a8069a9bec4a5dfab07bd?v=2b93cb01fb4a805da119000c28dbb09a"
            ariaLabel="Download brochure"
            target="_blank"
            variant="outline"
            className=""
          >
            <span >Download Brochure</span>
          </CTAButton>
        </div>

        {/* Feature cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f) => (
            <FeatureCard key={f.title} src={f.src} title={f.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
