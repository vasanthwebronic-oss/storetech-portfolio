"use client";
import Image from "next/image";
import React from "react";

export type ProductFeatureItemProps = {
  icon: string;
  text: string;
};

export default function ProductFeatureItem({
  icon,
  text,
  index = 0,
  parentVisible = false,
}: ProductFeatureItemProps & { index?: number; parentVisible?: boolean }) {
  const delayMs = index * 80;
  const style: React.CSSProperties = {
    transitionDelay: parentVisible ? `${delayMs}ms` : "0ms",
  };

  return (
    <li className="flex items-start gap-3 feature-item" style={style}>
      <div className="shrink-0 mt-1 w-6 h-6">
        <Image src={icon} alt={text} width={20} height={20} className="object-contain" />
      </div>
      <span className="text-sm text-gray-700">{text}</span>

      <style jsx>{`
        .feature-item {
          opacity: 0;
          transform: translateX(-10px) scale(0.995);
        }

        

        :global(article.pc-visible) .feature-item {
          opacity: 1;
          transform: translateX(0) scale(1);
          transition:
            opacity 420ms cubic-bezier(0.2, 0.9, 0.28, 1),
            transform 420ms cubic-bezier(0.2, 0.9, 0.28, 1);
        }

        .feature-item:hover img {
          transform: translateY(-3px) scale(1.08);
          transition: transform 180ms ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .feature-item {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </li>
  );
}
