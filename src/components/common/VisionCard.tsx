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
  const style: React.CSSProperties = {
    animationDelay: `${animationDelay}s`,
  };

  return (
    <article
      className={`p-6 bg-[#0f172a] rounded-xl border border-[#0f451b] min-h-[230px] transform transition-transform will-change-transform focus:outline-none ${className} ${
        visible ? "vc-visible" : "vc-hidden"
      }`}
      tabIndex={0}
      aria-label={title}
      style={style}
    >
      <div className="mb-3">
        <div className="icon-wrap inline-flex items-center justify-center rounded-full p-2 bg-white/5">
          <Image src={iconSrc} alt={alt ?? title} width={38} height={38} />
        </div>
      </div>

      <h4 className="text-lg font-bold mb-2">{title}</h4>

      <p className="text-gray-300 text-md leading-relaxed">{description}</p>

      <style jsx>{`
        /* default hidden state (no animation) */
        .vc-hidden {
          opacity: 0;
          transform: translateY(22px) scale(0.995);
        }

        /* when parent marks visible, run entrance animation with configured delay */
        .vc-visible {
          animation: vcIn 520ms cubic-bezier(0.2, 0.9, 0.28, 1) forwards;
        }

        @keyframes vcIn {
          from {
            opacity: 0;
            transform: translateY(22px) scale(0.995);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Hover / focus interactions (only after visible) */
        .vc-visible:hover,
        .vc-visible:focus {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 18px 30px rgba(2, 6, 23, 0.48);
          border-color: rgba(55, 198, 89, 0.28);
        }

        /* Icon pop on hover/focus */
        .vc-visible:hover .icon-wrap,
        .vc-visible:focus .icon-wrap {
          transform: translateY(-4px) scale(1.08);
          box-shadow: 0 8px 18px rgba(7, 16, 10, 0.28);
        }

        .icon-wrap {
          transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 220ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        /* subtle floating for icons until hover — disabled while hovered */
        .vc-hidden .icon-wrap {
          /* no float while not visible */
          animation: none;
        }
        .vc-visible .icon-wrap {
          animation: iconFloat 6s ease-in-out infinite;
        }
        @keyframes iconFloat {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-3px) scale(1.01);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        /* accessibility: respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .vc-visible {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
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
