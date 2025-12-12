"use client";
import { useEffect, useRef, useState } from "react";
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

  const sectionRef = useRef<HTMLElement | null>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [cardsVisible, setCardsVisible] = useState<boolean[]>(() =>
    new Array(cards.length).fill(false)
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const secObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
            secObserver.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.12 }
    );
    if (sectionRef.current) secObserver.observe(sectionRef.current);

    if (!("IntersectionObserver" in window)) {
      setCardsVisible(new Array(cards.length).fill(true));
      return;
    }

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.idx);
          if (entry.isIntersecting) {
            setCardsVisible((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.18 }
    );

    cardRefs.current.forEach((el) => {
      if (el) cardObserver.observe(el);
    });

    return () => {
      secObserver.disconnect();
      cardObserver.disconnect();
    };
  }, [cards.length]);

  return (
    <section id="about" className="py-20 bg-white text-black" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-8">
        {/* Title */}
        <h2
          className={`text-4xl sm:text-5xl font-bold text-start mb-6 transition-all duration-600 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: sectionVisible ? "0s" : "0s" }}
        >
          The Autonomous Retail Ecosystem
        </h2>

        {/* Paragraphs */}
        <p
          className={`text-gray-700 text-lg mb-4 transition-all duration-600 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.08s" }}
        >
          StoreTech provides a comprehensive, modular ecosystem of smart retail
          solutions designed to automate and optimize physical commerce.
        </p>

        <p
          className={`text-gray-700 text-lg mb-6 transition-all duration-600 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.14s" }}
        >
          By integrating IoT, AI, and mobile technologies, we transform
          traditional retail environments into efficient, secure, and
          customer-centric spaces that generate revenue 24/7.
        </p>

        {/* Quote Box */}
        <div
          className={`bg-black text-white px-6 py-10 rounded-lg mb-10 transition-transform duration-600 ${
            sectionVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-6 scale-98"
          }`}
          style={{ transitionDelay: "0.22s" }}
        >
          <p className="italic text-lg leading-relaxed">
            “Success is no longer measured solely by sales per square foot, but
            by the ability to provide 24/7 accessibility, personalized
            engagement, and operational efficiency.”
          </p>
        </div>

        {/* Subheading */}
        <h3
          className={`text-2xl font-bold mb-6 transition-all duration-600 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.28s" }}
        >
          The Dawn of Frictionless Commerce
        </h3>

        {/* More paragraphs */}
        <p
          className={`text-gray-700 text-lg mb-4 transition-all duration-600 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.34s" }}
        >
          The global retail landscape is undergoing a seismic transformation,
          driven by technological advancements and evolving consumer
          expectations. The traditional model of physical commerce,
          characterized by fixed operating hours and manual processes, is
          rapidly giving way to a new paradigm defined by automation,
          intelligent systems, and seamless customer experiences.
        </p>

        <p
          className={`text-gray-700 text-lg mb-10 transition-all duration-600 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.40s" }}
        >
          In this new era, StoreTech emerges not as a mere vendor of technology,
          but as a visionary architect of the future for physical commerce. Our
          comprehensive, modular ecosystem serves as the central nervous system
          of modern retail operations, seamlessly integrating hardware and
          software to create unified, intelligent environments.
        </p>

        {/* About Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {cards.map((item, idx) => (
            <div
              key={item.title}
              data-idx={idx}
              ref={(el) => {cardRefs.current[idx] = el}}
            >
              <AboutCard
                src={item.src}
                title={item.title}
                text={item.text}
                animationDelay={0.08 * idx}
                visible={cardsVisible[idx]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
