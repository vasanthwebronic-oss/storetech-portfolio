"use client";
import Image from "next/image";
import React from "react";

type FeatureCardProps = {
  src: string;
  title: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function FeatureCard({
  src,
  title,
  alt = "",
  className = "",
  style,
}: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col items-center text-center py-6 rounded-lg bg-white/5 backdrop-blur-sm border border-[rgba(52,211,153,0.12)] transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-xl ${className}`}
      style={style}
    >
      <div className="mb-4 h-12 flex items-center justify-center">
        <Image src={src} alt={alt || title} width={40} height={40} />
      </div>
      <h3 className="text-white font-semibold text-lg">{title}</h3>
    </div>
  );
}
