import Image from "next/image";

export default function Partners() {
  const partners = [
    { src: "./assets/logo-24-sju-white-bg.png", alt: "24SJU alt" },
    { src: "./assets/slattens.jpg", alt: "Slattens" },
    { src: "./assets/24sju-se.png", alt: "24SJU" },
    { src: "./assets/kornhall.svg", alt: "Kornhalls" },
    { src: "./assets/Norlandia.png", alt: "Norlandia" },
    { src: "./assets/posten logo.png", alt: "Posten" },
    { src: "./assets/MatMedSmak logo.png", alt: "Mat Med Smak" },
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our Partners
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Trusted by industry leaders who rely on our autonomous retail
          ecosystem
        </p>

        {/* Logos grid */}
        <div className="mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-x-8 gap-y-6 items-center place-items-center">
            {partners.map((p, idx) => (
              <a
                key={idx}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-2"
                aria-label={p.alt}
              >
                <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={100}
                    height={100}
                    className="object-contain transition-transform duration-200 ease-in-out hover:scale-105 opacity-90 hover:opacity-100"
                    priority={idx < 4}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
