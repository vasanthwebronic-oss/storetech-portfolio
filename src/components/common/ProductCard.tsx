"use client";
import Image from "next/image";
import React from "react";
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
  const style: React.CSSProperties = { animationDelay: `${animationDelay}s` };

  return (
    <article
      className={`bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transform origin-top-left will-change-transform ${visible ? "pc-visible" : "pc-hidden"}`}
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
            <ProductFeatureItem key={f.text} icon={f.icon} text={f.text} index={i} parentVisible={visible} />
          ))}
        </ul>
      </div>

      <style jsx>{`
        /* hidden / visible states for the card */
        .pc-hidden {
          opacity: 0;
          transform: translateY(18px) scale(0.995);
        }
        .pc-visible {
          animation: pcIn 560ms cubic-bezier(0.2, 0.9, 0.28, 1) forwards;
        }
        @keyframes pcIn {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.995);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Hover / focus for card */
        :global(article.pc-visible:hover),
        :global(article.pc-visible:focus) {
          transform: translateY(-10px) rotate(-0.6deg) scale(1.02);
          box-shadow: 0 28px 60px rgba(2, 6, 23, 0.12);
          transition: transform 320ms ease, box-shadow 320ms ease;
        }

        /* image inner wrapper handles hover scale/parallax */
        .img-inner {
          position: absolute;
          inset: 0;
          transform-origin: center;
          transition: transform 550ms cubic-bezier(0.2, 0.9, 0.28, 1);
        }
        :global(article.pc-visible:hover .img-inner),
        :global(article.pc-visible:focus .img-inner) {
          transform: scale(1.06) translateY(-6px);
        }

        /* subtle overlay to make text readable on some images */
        .img-inner::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02));
          pointer-events: none;
        }

        /* accessible: prefer-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .pc-visible,
          .pc-hidden,
          .img-inner {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </article>
  );
}
