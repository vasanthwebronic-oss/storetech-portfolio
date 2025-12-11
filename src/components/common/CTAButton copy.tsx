"use client";

import React from "react";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  target?: "_self" | "_blank";
  variant?: "primary" | "outline";
  ariaLabel?: string;
  className?: string;
};

export default function CTAButton({
  href,
  children,
  target = "_self",
  variant = "primary",
  ariaLabel,
  className = "",
}: CTAButtonProps) {
  const base =
    " items-center justify-center flex w-[300px]  lg:w-[220px] py-4 px-6  rounded-lg font-semibold shadow-sm transition transform focus:outline-none";
  const variants: Record<string, string> = {
    primary:
      "bg-[#37c659] text-black text-lg    hover:bg-black hover:text-white focus:ring-4 focus:ring-[#37c659]/25",
    outline:
      "bg-transparent border-2 text-lg border-white/80 text-white hover:bg-white hover:text-black focus:ring-4 focus:ring-white/20",
  };

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      role="button"
      className={` ${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
