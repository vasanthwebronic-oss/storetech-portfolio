import Image from "next/image";

type VisionCardProps = {
  iconSrc: string;
  title: string;
  description: string;
  alt?: string;
  className?: string;
};

export default function VisionCard({
  iconSrc,
  title,
  description,
  alt,
  className = "",
}: VisionCardProps) {
  return (
    <article
      className={`p-6 bg-[#0f172a] rounded-xl border border-[#0f451b] min-h-[230px] ${className}`}
    >
      <div className="mb-3">
        <Image src={iconSrc} alt={alt ?? title} width={38} height={38} />
      </div>

      <h4 className="text-lg font-bold mb-2">{title}</h4>

      <p className="text-gray-300 text-md leading-relaxed">{description}</p>
    </article>
  );
}
