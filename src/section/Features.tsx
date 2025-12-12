"use client";
import React, { useEffect, useRef, useState } from "react";
import FeatureCard from "@/components/common/FeatureCard2";

type FeatureItem = {
  src: string;
  title: string;
  desc?: string;
};

export default function Features() {
  const features: FeatureItem[] = [
    {
      src: "/assets/icons/smart-automation.svg",
      title: "Smart Automation",
      desc: "IoT, AI, and mobile technologies transform retail environments",
    },
    {
      src: "/assets/icons/ai-security.svg",
      title: "AI Security",
      desc: "Advanced AI-powered security monitors your space 24/7",
    },
    {
      src: "/assets/icons/24-7-operation.svg",
      title: "24/7 Operation",
      desc: "Generate revenue around the clock without on-site staff",
    },
    {
      src: "/assets/icons/cloud-computing.svg",
      title: "Cloud Computing",
      desc: "Scalable infrastructure with secure, always-available services",
    },
    {
      src: "/assets/icons/ai-ml.svg",
      title: "AI & Machine Learning",
      desc: "Predictive algorithms optimize operations and personalize experiences",
    },
    {
      src: "/assets/icons/modular-ecosystem.svg",
      title: "Modular Ecosystem",
      desc: "Start small and scale seamlessly as your business grows",
    },
  ];

  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [visible, setVisible] = useState<boolean[]>(
    () => new Array(features.length).fill(false)
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      setVisible(new Array(features.length).fill(true));
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
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.14 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [features.length]);

  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-7">
            Key Features &amp; Capabilities
          </h2>
          <p className="text-gray-600 text-xl sm:text-xl max-w-2xl mx-auto">
            A comprehensive suite of intelligent solutions designed for modern
            retail operations
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div
              key={f.title}
              data-idx={idx}
              ref={(el) => {cardRefs.current[idx] = el}}
            >
              <FeatureCard
                src={f.src}
                title={f.title}
                desc={f.desc}
                visible={visible[idx]}
                animationDelay={0.08 * idx}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
