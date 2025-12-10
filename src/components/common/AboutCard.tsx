import Image from "next/image";

export type AboutCardProps = {
  src: string;
  title: string;
  text: string;
  className?: string;
};

export default function AboutCard({
  src,
  title,
  text,
  className = "",
}: AboutCardProps) {
  return (
    <div
      className={`border-2 border-[#37c659] rounded-xl p-6 min-h-[300px] flex flex-col ${className}`}
    >
      {/* Icon */}
      <Image src={src} alt={title} width={40} height={40} className="mb-4" />

      {/* Title */}
      <h4 className="text-lg font-bold text-black mb-3">{title}</h4>

      {/* Body Text */}
      <p className="text-gray-700 leading-relaxed text-base">{text}</p>
    </div>
  );
}
