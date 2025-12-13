"use client";
import { useEffect, useRef, useState } from "react";
import ContactCard from "@/components/common/ContactCard";

export default function Contact() {
  const cards = [
    {
      href: "tel:7200088500",
      imgSrc: "./assets/icons/calendar.svg",
      title: "Schedule a Demo",
      text: "See our ecosystem in action with a personalized demonstration",
    },
    {
      href: "tel:7200088500",
      imgSrc: "./assets/icons/phone-footer.svg",
      title: "Get in Touch",
      text: "Speak with our experts about your specific needs",
    },
    {
      href: "tel:7200088500",
      imgSrc: "./assets/icons/rocket.svg",
      title: "Start Your Journey",
      text: "Begin your transformation with a modular approach",
    },
  ];

  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(
    new Array(cards.length).fill(false)
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const secObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          secObserver.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    sectionRef.current && secObserver.observe(sectionRef.current);

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(
            (entry.target as HTMLElement).dataset.idx
          );
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
      { rootMargin: "0px 0px -8% 0px", threshold: 0.18 }
    );

    cardRefs.current.forEach((el) => el && cardObserver.observe(el));

    return () => {
      secObserver.disconnect();
      cardObserver.disconnect();
    };
  }, [cards.length]);

  return (
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2
            className={`
              text-3xl sm:text-5xl font-bold mb-4 transition-all duration-700
              motion-reduce:transition-none
              ${sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"}
            `}
          >
            Ready to Transform{" "}
            <span className="text-green-400">Your Business?</span>
          </h2>

          <p
            className={`
              text-[1.30rem] text-gray-700 leading-relaxed max-w-3xl mx-auto
              transition-all duration-700 delay-100
              motion-reduce:transition-none
              ${sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"}
            `}
          >
            The future of physical commerce is not a distant dream; it is a
            reality being built today. StoreTech is at the forefront of this
            transformation.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((c, idx) => (
            <div
              key={c.title}
              data-idx={idx}
              ref={(el) => {cardRefs.current[idx] = el}}
            >
              <ContactCard
                {...c}
                visible={cardsVisible[idx]}
                animationDelay={0.08 * idx}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
