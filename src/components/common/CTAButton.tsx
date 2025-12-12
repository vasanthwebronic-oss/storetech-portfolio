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
    "w-full py-3 box-content md:w-fit md:px-8 rounded-lg flex justify-center items-center border-2 text-lg font-semibold transition-all duration-300 transform ";
  const variants: Record<string, string> = {
    primary:
      "bg-[#37c659] text-black border-[#37c659] hover:bg-black hover:text-white hover:border-white shadow-sm",
    outline:
      "bg-transparent text-white border-white hover:bg-white hover:text-black shadow-sm",
  };

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      role="button"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
