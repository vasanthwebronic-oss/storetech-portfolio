"use client";
import Image from "next/image";

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
  return (
    <div
      tabIndex={0}
      aria-label={title}
      style={{ transitionDelay: `${animationDelay}s` }}
      className={`
        bg-gray-100 rounded-2xl 
        max-h-[250px] px-3 py-4
        flex flex-col justify-between text-center
        transition-all duration-520
        motion-reduce:transition-none
        will-change-transform
        ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"}
        hover:-translate-y-2 hover:shadow-2xl
        focus-within:-translate-y-2 focus-within:shadow-2xl
        ${className}
      `}
    >
      <a
        href={href}
        className="flex flex-col items-center h-full text-black focus:outline-none"
      >
        {/* Icon */}
        <div className="mb-6 relative group">
          <div
            className="
              inline-flex rounded-xl p-4 bg-white/30
              transition-transform duration-300 ease-out
              group-hover:-translate-y-1 group-hover:scale-110
              group-focus-within:-translate-y-1 group-focus-within:scale-110
            "
          >
            <Image
              src={imgSrc}
              alt={alt ?? title}
              width={52}
              height={52}
            />
          </div>

          <span
            aria-hidden
            className="
              absolute inset-0 rounded-xl pointer-events-none
              opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
              transition-opacity duration-300
            "
            style={{
              boxShadow: "0 10px 36px rgba(16, 185, 129, 0.14)",
            }}
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col grow justify-start">
          <h3 className="font-bold text-xl mb-3">{title}</h3>
          <p className="text-gray-800 text-base leading-relaxed">
            {text}
          </p>
        </div>

       
      </a>
    </div>
  );
}
