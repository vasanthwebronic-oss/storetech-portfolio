"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductFeatureItem, { ProductFeatureItemProps } from "./ProductFeatureItem";

export type ProductCardProps = {
  img: string;
  title: string;
  subtitle: string;
  features: ProductFeatureItemProps[];
  visible?: boolean;
  animationDelay?: number; // seconds
};

export default function ProductCard({
  img,
  title,
  subtitle,
  features,
  visible = false,
  animationDelay = 0,
}: ProductCardProps) {
  // We'll manage a runtime CSS variable that is the reveal delay.
  // This variable will be removed (set to "0s") after the reveal finishes
  // so hover transitions are never affected by the reveal delay.
  const [revealDelay, setRevealDelay] = useState<string>("0s");

  useEffect(() => {
    // reveal duration must match the CSS transition duration below (520ms)
    const revealDurationMs = 520;

    if (visible) {
      // set the delay for reveal (e.g. "0.16s")
      const delayStr = `${animationDelay}s`;
      setRevealDelay(delayStr);

      // clear the delay after revealDuration + animationDelay
      const timeout = window.setTimeout(() => {
        setRevealDelay("0s");
      }, Math.round(animationDelay * 1000) + revealDurationMs + 20); // +20ms safety

      return () => clearTimeout(timeout);
    } else {
      // if hidden, ensure no stale delay
      setRevealDelay("0s");
    }
  }, [visible, animationDelay]);

  // Apply the CSS variable via inline style
  const style: React.CSSProperties = {
    // TS needs the cast to allow custom property
    ["--reveal-delay" as any]: revealDelay,
  };

  return (
    <article
      className={`bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transform origin-top-left will-change-transform ${
        visible ? "pc-visible" : "pc-hidden"
      }`}
      style={style}
      tabIndex={0}
      aria-label={title}
    >
      <div className="w-full h-[220px] md:h-60 lg:h-[200px] bg-gray-100 overflow-hidden relative">
        <div className="img-inner">
          <Image src={img} alt={title} fill className="object-cover" priority={false} />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-500 italic mb-4">{subtitle}</p>

        <ul className="space-y-3">
          {features.map((f, i) => (
            <ProductFeatureItem
              key={f.text}
              icon={f.icon}
              text={f.text}
              index={i}
              parentVisible={visible}
            />
          ))}
        </ul>
      </div>

      <style jsx>{`
        /* hidden / visible states for the card using transitions (no keyframes) */
        .pc-hidden {
          opacity: 0;
          transform: translateY(18px) scale(0.995);
          pointer-events: none;
        }

        /* reveal uses the CSS variable --reveal-delay (so hover remains unaffected) */
        .pc-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition:
            opacity 520ms ease-out var(--reveal-delay),
            transform 520ms cubic-bezier(0.2, 0.9, 0.28, 1) var(--reveal-delay);
        }

        /* Hover / focus for card - explicitly zero delay so it's always snappy */
        :global(article.pc-visible:hover),
        :global(article.pc-visible:focus) {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 28px 60px rgba(2, 6, 23, 0.12);
          transition:
            transform 160ms ease 0s,
            box-shadow 160ms ease 0s;
        }

        /* image inner wrapper handles hover scale/parallax */
        .img-inner {
          position: absolute;
          inset: 0;
          transform-origin: center;
          transition: transform 420ms cubic-bezier(0.2, 0.9, 0.28, 1);
        }
        :global(article.pc-visible:hover .img-inner),
        :global(article.pc-visible:focus .img-inner) {
          transform: scale(1.06) translateY(-6px);
        }

        .img-inner::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(0, 0, 0, 0.02));
          pointer-events: none;
        }

        /* accessible: prefer-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .pc-visible,
          .pc-hidden,
          .img-inner {
            transition: none !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </article>
  );
}
