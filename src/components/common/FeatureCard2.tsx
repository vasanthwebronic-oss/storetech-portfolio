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
  const style: React.CSSProperties = {
    animationDelay: `${animationDelay}s`,
  };

  return (
    <article
      className={`bg-white p-8 rounded-xl shadow-sm border border-gray-200 transform origin-top-left will-change-transform ${visible ? "fc-visible" : "fc-hidden"} ${className}`}
      style={style}
      tabIndex={0}
      aria-label={title}
    >
      <div className="mb-6 flex justify-start items-center">
        <div className="icon-wrap inline-flex items-center justify-center rounded-full p-2 bg-gray-50">
          <Image src={src} alt={alt ?? title} width={36} height={36} />
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 text-start">{title}</h3>

      {desc && (
        <p className="text-gray-600 text-start text-base leading-relaxed">{desc}</p>
      )}

      <style jsx>{`
        /* hidden state: no movement, no opacity */
        .fc-hidden {
          opacity: 0;
          transform: translateY(18px) scale(0.995);
        }

        /* visible: entrance animation (stagger controlled via inline style) */
        .fc-visible {
          animation: fcIn 520ms cubic-bezier(0.2, 0.9, 0.28, 1) forwards;
        }

        @keyframes fcIn {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.995);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Hover / focus lift + gentle tilt + shadow */
        .fc-visible:hover,
        .fc-visible:focus {
          transform: translateY(-10px) rotate(-0.6deg) scale(1.02);
          box-shadow: 0 22px 40px rgba(2, 6, 23, 0.12);
        }

        /* Icon pop animation on reveal + hover */
        .icon-wrap {
          transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 260ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        .fc-visible .icon-wrap {
          animation: iconPop 640ms cubic-bezier(0.2, 0.9, 0.28, 1) forwards;
        }

        .fc-visible:hover .icon-wrap,
        .fc-visible:focus .icon-wrap {
          transform: translateY(-4px) scale(1.12);
          box-shadow: 0 10px 24px rgba(2, 6, 23, 0.09);
        }

        @keyframes iconPop {
          0% {
            transform: translateY(6px) scale(0.92);
            opacity: 0;
          }
          60% {
            transform: translateY(-2px) scale(1.06);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        /* accessible: respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .fc-visible,
          .fc-hidden {
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
            box-shadow: none !important;
          }
          .icon-wrap {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </article>
  );
}
