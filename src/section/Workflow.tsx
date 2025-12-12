"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Workflow() {
  const steps = [
    {
      id: 1,
      title: "Consultation",
      desc: "We analyze your needs and design a tailored solution",
    },
    {
      id: 2,
      title: "Integration",
      desc: "Seamless installation of hardware and software systems",
    },
    {
      id: 3,
      title: "Automation",
      desc: "Systems connect and create intelligent, automated experiences",
    },
    {
      id: 4,
      title: "Optimization",
      desc: "Continuous monitoring and improvement for peak performance",
    },
  ];

  const stepRefs = useRef<Array<HTMLElement | null>>([]);
  const [visible, setVisible] = useState<boolean[]>(
    () => new Array(steps.length).fill(false)
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) {
      setVisible(new Array(steps.length).fill(true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.idx);
          if (entry.isIntersecting) {
            setVisible((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18,
      }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <section id="workflow" className="py-20 bg-white text-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-center ">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg text-center">
            Our proven implementation process ensures seamless integration and
            rapid time-to-value
          </p>
        </div>

        <div className="relative mt-8">
          <div className="space-y-8">
            {steps.map((s, idx) => {
              const isVisible = visible[idx];
              const delay = `${idx * 120}ms`; 
              return (
                <div
                  key={s.id}
                  className="flex items-start gap-6 md:gap-8"
                  data-idx={idx}
                  ref={(el) => {stepRefs.current[idx] = el}}
                >
                  <div className="flex flex-col items-center w-28 md:w-24 relative">
                    <div
                      className={`number-bubble ${
                        isVisible ? "nb-visible" : "nb-hidden"
                      }`}
                      style={{ transitionDelay: isVisible ? delay : undefined }}
                      aria-hidden
                    >
                      {s.id}
                    </div>

                    {idx !== steps.length - 1 && (
                      <div className="connector-wrap" aria-hidden>
                        <div
                          className={`connector-seg ${
                            visible[idx + 1] ? "cs-grown" : "cs-shrunk"
                          }`}
                          style={{
                            transitionDelay: visible[idx + 1] ? `${(idx + 1) * 120 + 60}ms` : undefined,
                          }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3
                      className={`step-title text-2xl font-bold mb-2 ${
                        isVisible ? "st-visible" : "st-hidden"
                      }`}
                      style={{ transitionDelay: isVisible ? delay : undefined }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={`step-desc text-gray-600 text-lg ${
                        isVisible ? "sd-visible" : "sd-hidden"
                      }`}
                      style={{ transitionDelay: isVisible ? `${parseInt(delay) + 60}ms` : undefined }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Number bubble */
        .number-bubble {
          width: 64px;
          height: 64px;
          min-width: 64px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #37c659 0%, #2aa047 100%);
          color: #071019;
          font-weight: 700;
          font-size: 1.25rem;
          box-shadow: 0 6px 18px rgba(55, 198, 89, 0.18);
          transform-origin: center;
          transition: transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 360ms ease, opacity 360ms ease;
          opacity: 0;
          transform: scale(0.86);
        }

        /* visible state: pop + glow */
        .nb-visible {
          opacity: 1;
          transform: scale(1);
          box-shadow: 0 18px 40px rgba(55, 198, 89, 0.22),
            0 6px 12px rgba(2, 6, 23, 0.06);
        }

        .nb-hidden {
          opacity: 0;
        }

        .number-bubble:hover,
        .number-bubble:focus {
          transform: scale(1.08) translateY(-3px);
          box-shadow: 0 26px 50px rgba(55, 198, 89, 0.28);
        }

        /* Connector wrapper sizes the segment */
        .connector-wrap {
          width: 2px;
          flex: none;
          margin-top: 12px;
          margin-bottom: 6px;
        }

        /* connector segment — grows vertically */
        .connector-seg {
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(55,198,89,0.95), rgba(55,198,89,0.6));
          transform-origin: top;
          transform: scaleY(0);
          transition: transform 520ms cubic-bezier(0.2, 0.9, 0.28, 1),
            opacity 420ms ease;
          opacity: 0.0;
          display: block;
          min-height: 56px; /* visual length between dots */
        }

        .cs-grown {
          transform: scaleY(1);
          opacity: 1;
        }

        .cs-shrunk {
          transform: scaleY(0);
          opacity: 0;
        }

        /* Titles and descriptions slide & fade */
        .st-hidden {
          opacity: 0;
          transform: translateX(18px);
          transition: transform 520ms cubic-bezier(0.2, 0.9, 0.28, 1),
            opacity 420ms ease;
        }
        .st-visible {
          opacity: 1;
          transform: translateX(0);
        }

        .sd-hidden {
          opacity: 0;
          transform: translateX(18px);
          transition: transform 560ms cubic-bezier(0.2, 0.9, 0.28, 1),
            opacity 480ms ease;
        }
        .sd-visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* responsiveness: adjust sizes on small screens */
        @media (max-width: 768px) {
          .number-bubble {
            width: 56px;
            height: 56px;
            min-width: 56px;
            font-size: 1.125rem;
          }
          .connector-seg {
            min-height: 48px;
          }
        }

        /* Accessibility: respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .number-bubble,
          .connector-seg,
          .st-hidden,
          .sd-hidden,
          .nb-visible,
          .cs-grown,
          .st-visible,
          .sd-visible {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
