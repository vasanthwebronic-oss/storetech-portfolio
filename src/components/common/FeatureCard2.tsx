import Image from "next/image";

export type FeatureCardProps = {
  src: string;
  title: string;
  desc?: string;
  alt?: string;
  className?: string;
};

export default function FeatureCard({
  src,
  title,
  desc,
  alt,
  className = "",
}: FeatureCardProps) {
  return (
    <article
      className={`bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition ${className}`}
    >
      <div className="mb-6 flex justify-start">
        <Image
          src={src}
          alt={alt ?? title}
          width={32}
          height={32}
          className="opacity-90"
        />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 text-start">
        {title}
      </h3>

      {desc && (
        <p className="text-gray-600 text-start text-base leading-relaxed">
          {desc}
        </p>
      )}
    </article>
  );
}
