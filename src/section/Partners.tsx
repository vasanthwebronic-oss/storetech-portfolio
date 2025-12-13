"use client";
import Image from "next/image";

type Partner = {
  src: string;
  alt: string;
  href: string;
};

export default function Partners() {
  const partners: Partner[] = [
    {
      src: "./assets/24sju-se.png",
      alt: "24SJU",
      href: "https://24-sju.se/",
    },
    {
      src: "./assets/images/tanluxlogo.png",
      alt: "Tanlux",
      href: "https://tanlux.se/",
    },
    {
      src: "./assets/image.png",
      alt: "StoreTech",
      href: "https://store-tech.se/",
    },
  ];

  return (
    <section
      id="partners"
      className="
        relative py-28 overflow-hidden
        bg-linear-to-b from-gray-50 via-white to-gray-50
      "
    >
      <div
        aria-hidden
        className="
          absolute -top-32 left-1/2 -translate-x-1/2
          w-[700px] h-[700px]
          rounded-full
          bg-[radial-gradient(circle_at_center,rgba(55,198,89,0.14),transparent_60%)]
          blur-3xl
        "
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Trusted Partners
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Collaborating with innovative brands shaping the future of autonomous
          retail.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 place-items-center">
          {partners.map((partner, idx) => (
            <a
              key={idx}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={partner.alt}
              className="
                group relative
                w-48 h-48
                rounded-3xl
                bg-white/70 backdrop-blur
                border border-gray-200
                flex items-center justify-center
                transition-all duration-300 ease-out
                hover:-translate-y-3 hover:shadow-2xl
                focus:-translate-y-3 focus:shadow-2xl
              "
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <span
                aria-hidden
                className="
                  absolute inset-0 rounded-3xl
                  opacity-0 group-hover:opacity-100 group-focus:opacity-100
                  transition-opacity duration-300
                "
              >
                <span
                  className="
                    absolute -inset-0.5 rounded-3xl
                    bg-[conic-gradient(from_0deg,rgba(55,198,89,0.4),rgba(55,198,89,0.05),rgba(55,198,89,0.4))]
                    blur-md
                    animate-[spin_6s_linear_infinite]
                  "
                />
              </span>

              {/* Logo */}
              <Image
                src={partner.src}
                alt={partner.alt}
                width={120}
                height={120}
                className="
                  relative z-10
                  object-contain
                  grayscale
                  transition-all duration-300 ease-out
                  group-hover:grayscale-0
                  group-hover:scale-110
                  group-hover:-translate-y-1
                "
                priority={idx === 0}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
