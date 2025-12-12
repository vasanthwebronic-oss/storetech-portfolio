"use client";
import Image from "next/image";
import React from "react";

export type AboutCardProps = {
  src: string;
  title: string;
  text: string;
  className?: string;
  animationDelay?: number; 
  visible?: boolean;
};

export default function AboutCard({
  src,
  title,
  text,
  className = "",
  animationDelay = 0,
  visible = false,
}: AboutCardProps) {
  const style: React.CSSProperties = {
    animationDelay: `${animationDelay}s`,
  };

  return (
    <div
      className={`border-2 border-[#37c659] rounded-xl p-6 min-h-[300px] flex flex-col transition-shadow will-change-transform ${
        visible ? "ac-visible" : "ac-hidden"
      } ${className}`}
      style={style}
      tabIndex={0}
      aria-label={title}
    >
      {/* Icon */}
      <div className="mb-4">
        <div className="icon-wrap inline-flex items-center justify-center rounded-full p-2 bg-white/5">
          <Image src={src} alt={title} width={40} height={40} />
        </div>
      </div>

      {/* Title */}
      <h4 className="text-lg font-bold text-black mb-3">{title}</h4>

      {/* Body Text */}
      <p className="text-gray-700 leading-relaxed text-base">{text}</p>

      <style jsx>{`
        /* hidden by default (no movement) */
        .ac-hidden {
          opacity: 0;
          transform: translateY(18px) scale(0.995);
        }

        /* visible: entrance animation (delay controlled via inline style) */
        .ac-visible {
          animation: acIn 520ms cubic-bezier(0.2, 0.9, 0.28, 1) forwards;
        }

        @keyframes acIn {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.995);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* hover / focus interaction */
        .ac-visible:hover,
        .ac-visible:focus {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(2, 6, 23, 0.12);
          border-color: rgba(55, 198, 89, 0.22);
        }

        /* icon pop */
        .icon-wrap {
          transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 220ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }
        .ac-visible:hover .icon-wrap,
        .ac-visible:focus .icon-wrap {
          transform: translateY(-4px) scale(1.08);
          box-shadow: 0 8px 18px rgba(7, 16, 10, 0.12);
        }

        /* keep icon idle animation subtle when visible */
        .ac-visible .icon-wrap {
          animation: iconFloat 6s ease-in-out infinite;
        }
        @keyframes iconFloat {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-2px) scale(1.01);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        /* reduce motion */
        @media (prefers-reduced-motion: reduce) {
          .ac-visible,
          .ac-hidden {
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
          .icon-wrap {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
