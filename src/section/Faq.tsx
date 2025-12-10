"use client";

import FaqItem from "@/components/common/FaqItem";
import { useEffect, useRef, useState } from "react";

type FaqEntry = {
  q: string;
  a: string;
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const setContentRef = (el: HTMLDivElement | null, i: number) => {
    contentRefs.current[i] = el;
  };

  useEffect(() => {
    if (!contentRefs.current || contentRefs.current.length === 0) return;

    const rafId = requestAnimationFrame(() => {
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

    return () => cancelAnimationFrame(rafId);
  }, [openIndex]);

  const toggleIndex = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const FAQ_ITEMS: FaqEntry[] = [
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
            <FaqItem
              key={i}
              index={i}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === i}
              onToggle={toggleIndex}
              setContentRef={setContentRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
