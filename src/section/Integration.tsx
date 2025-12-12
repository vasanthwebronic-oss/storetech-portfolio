"use client";
import React, { useEffect, useRef, useState } from "react";
import IntegrationCard from "@/components/common/IntegrationCard";

export default function Integration() {
  const items = [
    {
      title: "The Unmanned Urban Grocery",
      body:
        "A small, 24/7 unmanned grocery store becomes a lifeline for busy urbanites. Customers use the Shopping App to gain entry through the Door Controller, browse products including fresh items from Smart Fridges, and checkout seamlessly while AI Security monitors the space.",
      products: ["Door Controller", "Shopping App", "Smart Fridges", "AI Security"],
    },
    {
      title: "The Automated Stadium",
      body:
        "A major sports stadium manages high-volume traffic with Smart Self-Checkout and Vending Machines strategically placed throughout. Digital Signage displays live updates and promotions, while the ERP Platform manages real-time inventory and sales data.",
      products: ["Smart Self-Checkout", "Vending Machines", "Digital Signage", "ERP Platform"],
    },
    {
      title: "The Smart Office Building",
      body:
        "A modern office building features a smart micro-market with Smart Fridges and Vending Machines for 24/7 employee access. Building Automation optimizes energy use while Door Controllers provide secure access to the area.",
      products: ["Smart Fridges", "Vending Machines", "Building Automation", "Door Controllers"],
    },
  ];

  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [visible, setVisible] = useState<boolean[]>(
    () => new Array(items.length).fill(false)
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduce =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduce) {
      setVisible(new Array(items.length).fill(true));
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setVisible(new Array(items.length).fill(true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.idx);
          if (entry.isIntersecting) {
            setVisible((prev) => {
              if (prev[idx]) return prev;
              const copy = [...prev];
              copy[idx] = true;
              return copy;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -12% 0px", threshold: 0.18 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items.length]);

  return (
    <section id="integration" className="py-20 bg-[#37c659] text-black">
      <div className="max-w-6xl mx-auto px-3 md:px-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Synergy in Action: The Power of Integration
          </h2>
          <p className="mt-4 text-lg text-[#071b47]/70 max-w-3xl mx-auto">
            Real-world examples of how our ecosystem components work together
          </p>
        </div>

        {/* Cards grid */}
        <div className="flex flex-col gap-6">
          {items.map((it, idx) => (
            <div
              key={it.title}
              data-idx={idx}
              ref={(el) => {cardRefs.current[idx] = el}}
            >
              <IntegrationCard
                title={it.title}
                body={it.body}
                products={it.products}
                visible={visible[idx]}
                animationDelay={idx * 0.12}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
