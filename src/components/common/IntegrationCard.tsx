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
    animationDelay: `${animationDelay}s`,
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
        /* hidden: ready state (no motion) */
        .ic-hidden {
          opacity: 0;
          transform: translateY(18px) scale(0.996);
        }

        /* visible: entrance */
        .ic-visible {
          animation: icIn 520ms cubic-bezier(0.2, 0.9, 0.28, 1) forwards;
        }

        @keyframes icIn {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.996);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* hover / focus micro-interaction (only after visible) */
        .ic-visible:hover,
        .ic-visible:focus-within {
          transform: translateY(-8px) rotate(-0.6deg) scale(1.01);
          box-shadow: 0 20px 40px rgba(2, 6, 23, 0.14);
          transition: transform 300ms cubic-bezier(0.2, 0.9, 0.28, 1),
            box-shadow 300ms ease;
        }

        /* subtle sheen that moves across the card on hover */
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

        /* accessibility: respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .ic-visible,
          .ic-hidden {
            animation: none !important;
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
