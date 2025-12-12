"use client";
import React from "react";
import CTAButton from "@/components/common/CTAButton";
import FeatureCard from "@/components/common/FeatureCard";



export default function Hero() {
  const features = [
    { src: "./assets/icons/smart-automation.svg", title: "Smart Automation" },
    { src: "./assets/icons/ai-security.svg", title: "AI Security" },
    { src: "./assets/icons/24-7-operation.svg", title: "24/7 Operation" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-center justify-center bg-[linear-gradient(135deg,#0b1114_0%,#050607_50%,#071017_100%)] text-white py-10 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -z-10 w-[420px] h-[420px] rounded-full opacity-10 bg-[radial-gradient(circle_at_30%_30%,#37c659,transparent_40%)] blur-3xl top-8 left-8"
        style={{ animation: "floatSlow 10s ease-in-out infinite" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Headline */}
        <h1 className="leading-tight mb-6">
          <div
            className="reveal-line text-[2.75rem] sm:text-[3.75rem] md:text-[4.5rem] font-bold italic text-[#37c659] -tracking-tight"
            style={{ animationDelay: "0.05s" }}
            aria-hidden
          >
            The Future of Retail,
          </div>

          <div
            className="reveal-line mt-2 text-[3.25rem] sm:text-[4rem] md:text-[4.75rem] font-bold text-white"
            style={{ animationDelay: "0.18s" }}
          >
            Automated
          </div>
        </h1>

        {/* Subtext */}
        <p
          className="mx-auto max-w-4xl text-2xl text-gray-300 mb-8 reveal-sub"
          style={{ animationDelay: "0.34s" }}
        >
          Transform traditional retail into efficient, secure, and customer-centric spaces that
          generate revenue 24/7
        </p>

        {/* CTA container */}
        <div
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="w-full md:w-auto reveal-pop" style={{ animationDelay: "0.5s" }}>
            <CTAButton
              href="tel:+917200088500"
              ariaLabel="Schedule a demo"
              variant="primary"
              className="md:mr-3"
            >
              <span>Schedule a Demo</span>
            </CTAButton>
          </div>

          <div className="w-full md:w-auto reveal-pop" style={{ animationDelay: "0.64s" }}>
            <CTAButton
              href="https://opalescent-hyssop-f3f.notion.site/2613cb01fb4a8069a9bec4a5dfab07bd?v=2b93cb01fb4a805da119000c28dbb09a"
              ariaLabel="Download brochure"
              target="_blank"
              variant="outline"
            >
              <span>Download Brochure</span>
            </CTAButton>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, idx) => (
            <FeatureCard
              key={f.title}
              src={f.src}
              title={f.title}
              style={{ animationDelay: `${0.8 + idx * 0.12}s` }}
              className="reveal-card"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        /* reveal line: slide up + fade + slight skew */
        .reveal-line {
          opacity: 0;
          transform: translateY(18px) skewY(-2deg);
          animation: revealUp 620ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .reveal-sub {
          opacity: 0;
          transform: translateY(12px);
          animation: revealUp 620ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .reveal-pop {
          opacity: 0;
          transform: translateY(8px) scale(0.98);
          animation: popIn 520ms cubic-bezier(0.2, 0.9, 0.28, 1) forwards;
        }

        .reveal-card {
          opacity: 0;
          transform: translateY(18px) scale(0.995);
          animation: revealCard 620ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes revealUp {
          to {
            opacity: 1;
            transform: translateY(0) skewY(0deg);
          }
        }

        @keyframes popIn {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes revealCard {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* slow floating decorative animation */
        @keyframes floatSlow {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-10px) translateX(6px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }

        /* reduce motion preference support */
        @media (prefers-reduced-motion: reduce) {
          .reveal-line,
          .reveal-sub,
          .reveal-pop,
          .reveal-card {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .map-pin,
          .tanlux-logo {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
