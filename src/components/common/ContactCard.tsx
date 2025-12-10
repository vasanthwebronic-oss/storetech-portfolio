import Image from "next/image";

export type ContactCardProps = {
  href: string;
  imgSrc: string;
  title: string;
  text: string;
  alt?: string;
  className?: string;
};

export default function ContactCard({
  href,
  imgSrc,
  title,
  text,
  alt,
  className = "",
}: ContactCardProps) {
  return (
    <div className={`bg-gray-100 rounded-xl p-6 text-center ${className}`}>
      <a
        href={href}
        className="flex flex-col items-center text-black no-underline"
      >
        <div className="mb-4">
          <Image src={imgSrc} alt={alt ?? title} width={50} height={50} />
        </div>

        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-800 text-md">{text}</p>
      </a>
    </div>
  );
}
