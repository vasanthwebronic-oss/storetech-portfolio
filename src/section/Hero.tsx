import Image from "next/image";


export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-center justify-center bg-linear-to-br from-[#0b1114] via-[#050607] to-[#071017] text-white py-20"
    >
      {/* overlays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60" />
        <div className="absolute -inset-x-48 top-0 h-48 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.02),transparent_10%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Headline */}
        <h1 className="leading-tight mb-6">
          <div
            className="text-[2.75rem] sm:text-[3.75rem] md:text-[4.5rem] font-extrabold italic text-[#37c659] -tracking-tight"
            aria-hidden
          >
            The Future of Retail,
          </div>

          <div className="mt-2 text-[3.25rem] sm:text-[4rem] md:text-[4.75rem] font-extrabold text-white">
            Automated
          </div>
        </h1>

        {/* Subtext */}
        <p className="mx-auto max-w-4xl text-2xl sm:text-lg text-gray-300 mb-8">
          Transform traditional retail into efficient, secure, and
          customer-centric spaces that generate revenue 24/7
        </p>

        {/* CTA container */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          {/* Primary CTA - consistent height, bold */}
          <a
            href="tel:+917200088500"
            aria-label="Schedule a demo"
            className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-[#37c659] text-black font-semibold shadow-sm hover:bg-[#2fb84f] active:translate-y-1px transition transform focus:outline-none focus:ring-4 focus:ring-[#37c659]/25"
            role="button"
          >
            Schedule a Demo
          </a>

          {/* Secondary CTA - outline, same height */}
          <a
            href="https://opalescent-hyssop-f3f.notion.site/2613cb01fb4a8069a9bec4a5dfab07bd?v=2b93cb01fb4a805da119000c28dbb09a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download brochure"
            className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-transparent border-2 border-white/80 text-white font-semibold hover:bg-white hover:text-black active:translate-y-1px transition transform focus:outline-none focus:ring-4 focus:ring-white/20"
            role="button"
          >
            Download Brochure
          </a>
        </div>

        {/* Feature cards */}
        <div className="mt-6 grid grid-cols-1  sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              src: "/assets/icons/smart-automation.svg",
              title: "Smart Automation",
            },
            { src: "/assets/icons/ai-security.svg", title: "AI Security" },
            {
              src: "/assets/icons/24-7-operation.svg",
              title: "24/7 Operation",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center text-center px-6 py-6 rounded-lg bg-white/5 backdrop-blur-sm border border-[rgba(52,211,153,0.12)] transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 w-16 h-16  flex items-center justify-center">
                <Image src={f.src} alt={f.title} width={40} height={40} />
              </div>
              <h3 className="text-white font-semibold text-lg">{f.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
