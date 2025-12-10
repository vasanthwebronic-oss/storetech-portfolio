import Image from "next/image";

type SupportInfoCardProps = {
  iconSrc: string;
  title: string;
  description: string;
  className?: string;
  borderColor?: string;
};

export default function SupportInfoCard({
  iconSrc,
  title,
  description,
  className = "",
  borderColor = "border-[#42ba5c]",
}: SupportInfoCardProps) {
  return (
    <article
      className={`border-2 ${borderColor} p-8 rounded-md bg-white text-black flex flex-col ${className}`}
    >
      <div className="mb-6 w-12 h-12">
        <Image src={iconSrc} alt={title} width={48} height={48} priority />
      </div>

      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p className="text-[1.10rem]">{description}</p>
    </article>
  );
}
