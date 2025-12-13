"use client";
import React from "react";

type IntegrationTagProps = {
  children: React.ReactNode;
  className?: string;
  animationDelay?: number; 
  parentVisible?: boolean;
};

export default function IntegrationTag({
  children,
  className = "",
  animationDelay = 0,
  parentVisible = false,
}: IntegrationTagProps) {
  const style: React.CSSProperties = {
    ["--reveal-delay" as any]: parentVisible ? `${animationDelay}s` : "0s",
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
          pointer-events: none;
        }

        .it-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition:
            opacity 420ms ease var(--reveal-delay),
            transform 420ms cubic-bezier(0.2, 0.9, 0.28, 1) var(--reveal-delay);
        }

       

        @media (prefers-reduced-motion: reduce) {
          .it-visible,
          .it-hidden {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </span>
  );
}
