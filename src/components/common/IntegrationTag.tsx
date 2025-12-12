"use client";
import React from "react";

type IntegrationTagProps = {
  children: React.ReactNode;
  className?: string;
  animationDelay?: number; // seconds
  parentVisible?: boolean;
};

export default function IntegrationTag({
  children,
  className = "",
  animationDelay = 0,
  parentVisible = false,
}: IntegrationTagProps) {
  const style: React.CSSProperties = {
    animationDelay: `${animationDelay}s`,
  };

  return (
    <span
      className={`inline-block text-sm text-[#959595] bg-[#062016]/10 px-3 py-1 rounded-md transform will-change-transform ${parentVisible ? "it-visible" : "it-hidden"} ${className}`}
      role="status"
      aria-label={typeof children === "string" ? children : undefined}
      style={style}
    >
      {children}

      <style jsx>{`
        .it-hidden {
          opacity: 0;
          transform: translateY(8px) scale(0.98);
        }
        .it-visible {
          animation: itIn 420ms cubic-bezier(0.2, 0.9, 0.28, 1) forwards;
        }
        @keyframes itIn {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .it-visible:hover,
        .it-visible:focus {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 8px 20px rgba(2,6,23,0.06);
          transition: transform 260ms cubic-bezier(0.22,1,0.36,1), box-shadow 260ms ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .it-visible,
          .it-hidden {
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </span>
  );
}
