import Image from "next/image";

const partners = [
  { name: "Tanlux", logo: "./assets/images/tanluxlogo.png" },
  { name: "Slattens", logo: "./assets/slattens.jpg" },
  { name: "24 SJU", logo: "./assets/24sju-se.png" },
  { name: "Mat Med Smak", logo: "./assets/MatMedSmak logo.png" },
  { name: "Norlandia", logo: "./assets/Norlandia.png" },
  { name: "Kornhalls", logo: "./assets/kornhall.svg" },
  { name: "Posten", logo: "./assets/posten logo.png" },
];

export default function Partners() {
  return (
    <section className="relative  py-20">
     
      <div className="absolute inset-0 " />

      <div className="relative container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-5xl font-bold text-[#0ea304]">Our Partners</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Trusted by industry leaders who rely on our autonomous retail
            ecosystem
          </p>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              style={{ animationDelay: `${index * 120}ms` }}
              className="
  group flex items-center justify-center
"
            >
              <div
                className="p-4 rounded-xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-white/5 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.35)]"

              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={80}
                  unoptimized
                  className="object-contain grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
