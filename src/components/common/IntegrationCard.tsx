"use client";
import React from "react";
import IntegrationTag from "./IntegrationTag";

type IntegrationCardProps = {
  title: string;
  body: string;
  products?: string[];
  className?: string;
  visible?: boolean;
  animationDelay?: number; // seconds
};

export default function IntegrationCard({
  title,
  body,
  products = [],
  className = "",
  visible = false,
  animationDelay = 0,
}: IntegrationCardProps) {
  const style: React.CSSProperties = {
    ["--reveal-delay" as any]: visible ? `${animationDelay}s` : "0s",
  };

  return (
    <article
      className={`relative rounded-lg overflow-hidden transform will-change-transform ${visible ? "ic-visible" : "ic-hidden"} ${className}`}
      style={style}
      tabIndex={0}
      aria-label={title}
    >
      <div className="p-2 rounded-lg">
        <div className="bg-[#050505] rounded-md border border-[#0f2a18]/40 overflow-hidden">
          <div className="px-7 py-6">
            <h3 className="text-2xl md:text-2xl font-bold text-[#37c659]">
              {title}
            </h3>

            <p className="mt-4 text-gray-300 leading-relaxed text-base md:text-lg max-w-3xl">
              {body}
            </p>

            <div className="border-t border-gray-700/60 my-6" />

            <div className="flex flex-wrap gap-3">
              {products.map((p, i) => (
                <IntegrationTag key={p} animationDelay={0.06 * i} parentVisible={visible}>
                  {p}
                </IntegrationTag>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ic-hidden {
          opacity: 0;
          transform: translateY(18px) scale(0.996);
          pointer-events: none;
        }

        .ic-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition:
            opacity 520ms ease-out var(--reveal-delay),
            transform 520ms cubic-bezier(0.2, 0.9, 0.28, 1) var(--reveal-delay);
        }

        .ic-visible:hover,
        .ic-visible:focus-within {
          transform: translateY(-8px)  scale(1.01);
          
          /* ensure hover has zero delay so it is always snappy */
          transition:
            transform 220ms cubic-bezier(0.2, 0.9, 0.28, 1) 0s,
            box-shadow 220ms ease 0s;
        }

        .ic-visible:hover::after,
        .ic-visible:focus-within::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          pointer-events: none;
          mix-blend-mode: overlay;
          animation: sheen 900ms linear;
        }
        @keyframes sheen {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ic-visible,
          .ic-hidden {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
          .ic-visible:hover,
          .ic-visible:focus-within {
            transform: none !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </article>
  );
}
