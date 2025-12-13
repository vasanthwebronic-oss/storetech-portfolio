"use client";
import Image from "next/image";
import React from "react";

export type FeatureCardProps = {
  src: string;
  title: string;
  desc?: string;
  alt?: string;
  className?: string;
  visible?: boolean;
  animationDelay?: number;
};

export default function FeatureCard({
  src,
  title,
  desc,
  alt,
  className = "",
  visible = false,
  animationDelay = 0,
}: FeatureCardProps) {
  return (
    <article
  tabIndex={0}
  aria-label={title}
  style={{ transitionDelay: `${animationDelay}s` }}
  className={`
    bg-white p-8 rounded-xl border border-gray-200 shadow-sm
    min-h-[280px] md:min-h-[300px]

    transform origin-top-left will-change-transform
    transition-[opacity,transform,box-shadow]
    duration-420 ease-out
    motion-reduce:transition-none

    ${
      visible
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 translate-y-[18px] scale-[0.995] pointer-events-none"
    }

    
    hover:delay-0 focus:delay-0
    hover:duration-150 focus:duration-150
    hover:-translate-y-2.5 hover:scale-[1.02]
    hover:shadow-[0_22px_40px_rgba(2,6,23,0.12)]
    focus:-translate-y-2.5 focus:scale-[1.02]
    focus:shadow-[0_22px_40px_rgba(2,6,23,0.12)]

    ${className}
  `}
>

      {/* Icon */}
      <div className="mb-6 flex items-center">
        <div
          className="
            inline-flex items-center justify-center rounded-full p-2 bg-gray-50
            transition-transform duration-150 ease-out
            hover:-translate-y-1 hover:scale-110
            focus:-translate-y-1 focus:scale-110
            hover:shadow-[0_10px_24px_rgba(2,6,23,0.09)]
            focus:shadow-[0_10px_24px_rgba(2,6,23,0.09)]
          "
        >
          <Image src={src} alt={alt ?? title} width={36} height={36} />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 text-start">
        {title}
      </h3>

      {/* Description */}
      {desc && (
        <p className="text-gray-600 text-base leading-relaxed text-start">
          {desc}
        </p>
      )}
    </article>
  );
}
