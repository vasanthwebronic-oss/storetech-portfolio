"use client";
import Image from "next/image";

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
  return (
    <div
      tabIndex={0}
      aria-label={title}
      style={{ transitionDelay: `${animationDelay}s` }}
      className={`
        border-2 border-[#37c659] rounded-xl p-6 min-h-[300px]
        flex flex-col outline-none
        transition-all duration-550
        motion-reduce:transition-none
        ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"}
        hover:-translate-y-2 hover:shadow-2xl
        focus:-translate-y-2 focus:shadow-2xl
        hover:border-[rgba(55,198,89,0.22)]
        focus:border-[rgba(55,198,89,0.22)]
        ${className}
      `}
    >
      {/* Icon */}
      <div className="mb-4">
        <div
          className="
            inline-flex items-center justify-center rounded-full p-2
            bg-white/5
            transition-transform duration-200 ease-out
            hover:-translate-y-1 hover:scale-110
            focus:-translate-y-1 focus:scale-110
          "
        >
          <Image src={src} alt={title} width={40} height={40} />
        </div>
      </div>

      {/* Title */}
      <h4 className="text-lg font-bold text-black mb-3">{title}</h4>

      {/* Body */}
      <p className="text-base text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}
