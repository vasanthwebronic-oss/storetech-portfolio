"use client";
import { useEffect, useRef, useState } from "react";

export default function Workflow() {
  const steps = [
    { id: 1, title: "Consultation", desc: "We analyze your needs and design a tailored solution" },
    { id: 2, title: "Integration", desc: "Seamless installation of hardware and software systems" },
    { id: 3, title: "Automation", desc: "Systems connect and create intelligent, automated experiences" },
    { id: 4, title: "Optimization", desc: "Continuous monitoring and improvement for peak performance" },
  ];

  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(
    new Array(steps.length).fill(false)
  );

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setVisible(new Array(steps.length).fill(true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-idx"));
          if (entry.isIntersecting) {
            setVisible((v) => {
              if (v[idx]) return v;
              const next = [...v];
              next[idx] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 }
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <section id="workflow" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg">
            Our proven implementation process ensures seamless integration and rapid time-to-value
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              ref={(el) => {stepRefs.current[idx] = el}}
              data-idx={idx}
              className="group flex items-start gap-8"
            >
              <div className="flex flex-col items-center w-24">
                <div
                  className={`
                    w-16 h-16 rounded-full
                    flex items-center justify-center
                    font-bold text-lg
                    bg-linear-to-b from-green-400 to-green-600
                    text-black
                    shadow-lg
                    transition-all duration-300
                    ${
                      visible[idx]
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90"
                    }
                    group-hover:-translate-y-1 group-hover:scale-110
                  `}
                >
                  {step.id}
                </div>

                {idx !== steps.length - 1 && (
                  <div
                    className={`
                      w-0.5 mt-4
                      bg-linear-to-b from-green-500 to-green-300
                      transition-all duration-500 origin-top
                      ${
                        visible[idx + 1]
                          ? "scale-y-100 opacity-100"
                          : "scale-y-0 opacity-0"
                      }
                    `}
                    style={{ minHeight: "56px" }}
                  />
                )}
              </div>

              {/* Content */}
              <div
                className={`
                  transition-all duration-500
                  ${
                    visible[idx]
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-6"
                  }
                `}
              >
                <h3 className="text-2xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
