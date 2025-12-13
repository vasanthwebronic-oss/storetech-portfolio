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
  animationDelay?: number; 
};

export default function ProductCard({
  img,
  title,
  subtitle,
  features,
  visible = false,
  animationDelay = 0,
}: ProductCardProps) {
  
  const [revealDelay, setRevealDelay] = useState<string>("0s");

  useEffect(() => {
    const revealDurationMs = 520;

    if (visible) {
      const delayStr = `${animationDelay}s`;
      setRevealDelay(delayStr);

      const timeout = window.setTimeout(() => {
        setRevealDelay("0s");
      }, Math.round(animationDelay * 1000) + revealDurationMs + 20); 

      return () => clearTimeout(timeout);
    } else {
      setRevealDelay("0s");
    }
  }, [visible, animationDelay]);

  const style: React.CSSProperties = {
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
        .pc-hidden {
          opacity: 0;
          transform: translateY(18px) scale(0.995);
          pointer-events: none;
        }

        .pc-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition:
            opacity 520ms ease-out var(--reveal-delay),
            transform 520ms cubic-bezier(0.2, 0.9, 0.28, 1) var(--reveal-delay);
        }

        :global(article.pc-visible:hover),
        :global(article.pc-visible:focus) {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 28px 60px rgba(2, 6, 23, 0.12);
          transition:
            transform 160ms ease 0s,
            box-shadow 160ms ease 0s;
        }

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
