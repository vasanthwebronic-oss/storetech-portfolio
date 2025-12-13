"use client";
import Image from "next/image";
import React from "react";

type VisionCardProps = {
  iconSrc: string;
  title: string;
  description: string;
  alt?: string;
  className?: string;
  animationDelay?: number;
  visible?: boolean;
};

export default function VisionCard({
  iconSrc,
  title,
  description,
  alt,
  className = "",
  animationDelay = 0,
  visible = false,
}: VisionCardProps) {
  return (
    <article
      tabIndex={0}
      aria-label={title}
      style={{ transitionDelay: `${animationDelay}s` }}
      className={`
        p-6 bg-[#0f172a] rounded-xl border border-[#0f451b]
        max-h-[290px] h-[290px]
        transform will-change-transform focus:outline-none
        transition-all duration-520
        motion-reduce:transition-none
        ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-5 scale-[0.995] pointer-events-none"
        }
        hover:-translate-y-2 hover:scale-[1.02]
        hover:shadow-[0_18px_30px_rgba(2,6,23,0.38)]
        hover:border-[rgba(55,198,89,0.28)]
        focus:-translate-y-2 focus:scale-[1.02]
        focus:shadow-[0_18px_30px_rgba(2,6,23,0.38)]
        focus:border-[rgba(55,198,89,0.28)]
        ${className}
      `}
    >
      {/* Icon */}
      <div className="mb-3">
        <div
          className="
            inline-flex items-center justify-center rounded-full p-2 bg-white/5
            transition-transform duration-200 ease-out
            motion-reduce:transition-none
            hover:-translate-y-1 hover:scale-110
            focus:-translate-y-1 focus:scale-110
            hover:shadow-[0_8px_18px_rgba(7,16,10,0.28)]
            focus:shadow-[0_8px_18px_rgba(7,16,10,0.28)]
          "
        >
          <Image src={iconSrc} alt={alt ?? title} width={38} height={38} />
        </div>
      </div>

      {/* Title */}
      <h4 className="text-lg font-bold mb-2">{title}</h4>

      {/* Description */}
      <p className="text-gray-300 text-md leading-relaxed">
        {description}
      </p>
    </article>
  );
}
