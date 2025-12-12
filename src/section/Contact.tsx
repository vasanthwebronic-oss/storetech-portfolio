"use client";
import  { useEffect, useRef, useState } from "react";
import ContactCard from "@/components/common/ContactCard";

export default function Contact() {
  const cards = [
    {
      href: "tel:7200088500",
      imgSrc: "/assets/icons/calendar.svg",
      title: "Schedule a Demo",
      text: "See our ecosystem in action with a personalized demonstration",
    },
    {
      href: "tel:7200088500",
      imgSrc: "/assets/icons/phone-footer.svg",
      title: "Get in Touch",
      text: "Speak with our experts about your specific needs",
    },
    {
      href: "tel:7200088500",
      imgSrc: "/assets/icons/rocket.svg",
      title: "Start Your Journey",
      text: "Begin your transformation with a modular approach",
    },
  ];

  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState<boolean[]>(
    () => new Array(cards.length).fill(false)
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
    <section id="contact" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`section-title text-3xl sm:text-5xl font-bold mb-4 transition-all transform ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: sectionVisible ? "0s" : "0s" }}
            >
              Ready to Transform <span className="text-green-400">Your Business?</span>
            </h2>

            <p
              className={`section-subtitle text-[1.30rem] max-w-3xl text-gray-700 mx-auto leading-relaxed transition-all transform ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "0.08s" }}
            >
              The future of physical commerce is not a distant dream; it is a reality being built
              today. StoreTech is at the forefront of this transformation, providing the tools and
              expertise needed to create a new generation of smart, efficient, and profitable
              physical spaces.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {cards.map((c, idx) => (
              <div
                key={c.title}
                data-idx={idx}
                ref={(el) => (cardRefs.current[idx] = el)}
              >
                <ContactCard
                  href={c.href}
                  imgSrc={c.imgSrc}
                  title={c.title}
                  text={c.text}
                  visible={cardsVisible[idx]}
                  animationDelay={0.08 * idx}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .section-title,
          .section-subtitle {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
