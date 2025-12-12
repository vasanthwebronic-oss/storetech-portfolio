"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Partners() {
  const partners = [
    { src: "/assets/logo-24-sju-white-bg.png", alt: "24SJU alt" },
    { src: "/assets/slattens.jpg", alt: "Slattens" },
    { src: "/assets/24sju-se.png", alt: "24SJU" },
    { src: "/assets/kornhall.svg", alt: "Kornhalls" },
    { src: "/assets/Norlandia.png", alt: "Norlandia" },
    { src: "/assets/posten logo.png", alt: "Posten" },
    { src: "/assets/MatMedSmak logo.png", alt: "Mat Med Smak" },
  ];

  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPlaying(false);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setPlaying(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setPlaying(true);
          else setPlaying(false);
        });
      },
      { root: null, threshold: 0.05 }
    );

    if (sectionRef.current) obs.observe(sectionRef.current);

    return () => obs.disconnect();
  }, []);

  return (
    <section id="partners" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our Partners
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Trusted by industry leaders who rely on our autonomous retail ecosystem
        </p>

        <div className="mt-12">
          <div className="hidden lg:grid grid-cols-7 gap-x-8 gap-y-6 items-center place-items-center">
            {partners.map((p, idx) => (
              <a
                key={idx}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.alt}
                className="w-full py-2 flex items-center justify-center transition-transform duration-300 ease-out group"
                tabIndex={0}
              >
                <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center relative">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={120}
                    height={120}
                    className="object-contain transition-transform duration-300 ease-out group-hover:scale-105 group-focus:scale-105"
                    priority={idx < 4}
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute rounded-full w-32 h-32 opacity-0 group-hover:opacity-40 group-focus:opacity-40 transition-opacity duration-300"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 40%, rgba(55,198,89,0.12), rgba(55,198,89,0.02) 40%, transparent 60%)",
                    }}
                  />
                </div>
              </a>
            ))}
          </div>

          <div className="lg:hidden mt-2 overflow-hidden" aria-hidden={!playing}>
            <div
              ref={marqueeRef}
              className={`marquee-track-wrapper group`}
            >
              <div
                className={`marquee-track ${playing ? "playing" : "paused"} `}
              >
                {[...partners, ...partners].map((p, i) => (
                  <div
                    key={i}
                    className="flex-none w-28 h-28 flex items-center justify-center"
                  >
                    <div className="w-24 h-24 flex items-center justify-center">
                      <Image
                        src={p.src}
                        alt={p.alt}
                        width={96}
                        height={96}
                        className="object-contain"
                        priority={i < partners.length}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track-wrapper {
          position: relative;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          gap: 1rem;
          width: max-content;
          align-items: center;
          /* default paused; will play when .playing is present and 'playing' state true */
          animation-name: marqueeScroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-play-state: paused;
          will-change: transform;
        }

        .marquee-track.playing {
          /* animation-duration set inline for easy tuning */
          animation-play-state: running;
        }

        /* pause while hovering the wrapper (desktop mobile support for pointer) */
        .marquee-track-wrapper:hover .marquee-track,
        .marquee-track-wrapper:focus-within .marquee-track,
        .group:hover .marquee-track,
        .group:focus-within .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* accessibility: prefer-reduced-motion disables animation entirely */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
