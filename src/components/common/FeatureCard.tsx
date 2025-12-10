import Image from "next/image";

type FeatureCardProps = {
  src: string;
  title: string;
  alt?: string;
  className?: string;
};

export default function FeatureCard({
  src,
  title,
  alt = "",
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col items-center text-center py-6 rounded-lg bg-white/5 backdrop-blur-sm border border-[rgba(52,211,153,0.12)] transition-transform ${className}`}
    >
      <div className="mb-4 h-12 flex items-center justify-center">
        <Image src={src} alt={alt || title} width={40} height={40} />
      </div>
      <h3 className="text-white font-semibold text-lg">{title}</h3>
    </div>
  );
}
