"use client";
import Image from "next/image";
import React from "react";

export type ContactCardProps = {
  href: string;
  imgSrc: string;
  title: string;
  text: string;
  alt?: string;
  className?: string;
  visible?: boolean; 
  animationDelay?: number; 
};

export default function ContactCard({
  href,
  imgSrc,
  title,
  text,
  alt,
  className = "",
  visible = false,
  animationDelay = 0,
}: ContactCardProps) {
  const style: React.CSSProperties = { animationDelay: `${animationDelay}s` };

  return (
    <div
      className={`bg-gray-100 rounded-xl p-6 text-center transform will-change-transform ${
        visible ? "cc-visible" : "cc-hidden"
      } ${className}`}
      style={style}
      tabIndex={0}
      aria-label={title}
    >
      <a
        href={href}
        className="flex flex-col items-center text-black no-underline focus:outline-none"
      >
        <div className="mb-4 relative group">
          <div className="inline-block rounded-lg bg-white/20 p-2">
            <Image src={imgSrc} alt={alt ?? title} width={50} height={50} />
          </div>

          <span
            aria-hidden
            className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
            style={{
              boxShadow: "0 8px 30px rgba(16, 185, 129, 0.12)",
            }}
          />
        </div>

        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-800 text-md">{text}</p>
      </a>

      <style jsx>{`
        /* hidden state */
        .cc-hidden {
          opacity: 0;
          transform: translateY(18px) scale(0.995);
        }

        /* visible: entrance animation */
        .cc-visible {
          animation: ccIn 520ms cubic-bezier(0.2, 0.9, 0.28, 1) forwards;
        }

        @keyframes ccIn {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.995);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* hover/focus lift + shadow */
        .cc-visible:hover,
        .cc-visible:focus-within {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(2, 6, 23, 0.08);
        }

        /* image/icon pop on hover/focus */
        .cc-visible .group:hover img,
        .cc-visible .group:focus-within img {
          transform: translateY(-4px) scale(1.08);
          transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* accessibility: reduce motion */
        @media (prefers-reduced-motion: reduce) {
          .cc-visible,
          .cc-hidden {
            animation: none !important;
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
