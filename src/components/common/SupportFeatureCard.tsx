import Image from "next/image";

type SupportFeatureCardProps = {
  iconSrc: string;
  title: string;
  description: string;
  className?: string;
  heightClass?: string;
};

export default function SupportFeatureCard({
  iconSrc,
  title,
  description,
  className = "",
  heightClass = "h-64",
}: SupportFeatureCardProps) {
  return (
    <article
      className={`relative bg-black text-white rounded-xl px-8 py-7 ${heightClass} flex flex-col ${className}`}
    >
      <div className="mb-6">
        <div className="w-12 h-12">
          <Image src={iconSrc} alt={title} width={48} height={48} priority />
        </div>
      </div>

      <h4 className="text-[1.3rem] font-semibold leading-snug mb-4">{title}</h4>

      <p className="text-md text-gray-300 grow">{description}</p>
    </article>
  );
}
