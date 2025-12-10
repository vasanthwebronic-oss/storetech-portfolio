"use client";
import { useState, useRef, useEffect } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  
  const contentRefs = useRef([]);

  const setRef = (el: HTMLDivElement | null, i: number) => {
    contentRefs.current[i] = el;
  };

  useEffect(() => {
    if (!contentRefs.current || contentRefs.current.length === 0) return;

    const raf = requestAnimationFrame(() => {
      for (let i = 0; i < contentRefs.current.length; i++) {
        const el = contentRefs.current[i];
        if (!el) continue;

        if (openIndex === i) {
          el.style.maxHeight = el.scrollHeight + "px";
        } else {
          el.style.maxHeight = "0px";
        }
      }
    });

    return () => cancelAnimationFrame(raf);
  }, [openIndex]);

  const toggleIndex = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const FAQ_ITEMS = [
    {
      q: "What makes StoreTech different from other retail solutions?",
      a: "StoreTech provides a comprehensive, modular ecosystem that seamlessly integrates hardware and software. Our AI-powered approach enables true automation, allowing businesses to operate 24/7 without on-site staff while maintaining security and personalized customer experiences.",
    },
    {
      q: "How long does implementation take?",
      a: "Implementation timelines vary based on your specific needs and scale. Typically, a basic setup can be completed in 2-4 weeks, with larger deployments taking 1-3 months.",
    },
    {
      q: "Is the system scalable for growing businesses?",
      a: "Absolutely. Our cloud-based infrastructure and modular ecosystem are designed to grow with your business. You can easily add new stores, devices, and users as needed.",
    },
    {
      q: "What kind of support do you provide?",
      a: "We provide comprehensive 24/7 support through phone, email, and chat. Our team proactively monitors your systems through the Command Center app.",
    },
    {
      q: "How secure is the StoreTech ecosystem?",
      a: "Security is our top priority. We use AI-powered monitoring, encrypted data transmission, GDPR-compliant cloud storage, and tamper-proof hardware.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm">
              {/* Button */}
              <button
                type="button"
                aria-expanded={openIndex === i}
                onClick={() => toggleIndex(i)}
                className="w-full p-5 flex justify-between items-center text-left"
              >
                <span className="font-semibold text-lg text-gray-900">{item.q}</span>

                <svg
                  className={`w-6 h-6 text-gray-700 transition-transform ${
                    openIndex === i ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <polyline
                    points="6 9 12 15 18 9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Answer */}
              <div
                ref={(el) => setRef(el, i)}
                className="overflow-hidden transition-[max-height] duration-300"
                style={{ maxHeight: "0px" }}
              >
                <p className="px-5 pb-6 text-gray-700 leading-7">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
