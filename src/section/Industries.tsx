import IndustryCard from "@/components/common/IndustryCard";

export default function Industries() {
  const cards = [
    {
      title: "Retail & Grocery",
      desc: "Transform traditional stores into smart, automated spaces",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      ),
    },
    {
      title: "Hospitality",
      desc: "Provide seamless guest experiences with automated services",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9"></path>
          <path d="M15 2v20"></path>
          <path d="M21 10h-6"></path>
          <path d="M21 6h-6"></path>
          <path d="M21 14h-6"></path>
          <path d="M21 18h-6"></path>
        </svg>
      ),
    },
    {
      title: "Corporate",
      desc: "Smart micro-markets and office automation solutions",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Residential",
      desc: "Building automation and smart home integration",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <path d="M3 9h18"></path>
          <path d="M9 21V9"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="industries" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Industries &amp; Use Cases
          </h2>
          <p className="mt-4 text-2xl text-gray-300 max-w-2xl mx-auto">
            Versatile solutions across multiple sectors
          </p>
        </div>

        {/* Cards row */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((c) => (
            <IndustryCard
              key={c.title}
              icon={c.icon}
              title={c.title}
              description={c.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
