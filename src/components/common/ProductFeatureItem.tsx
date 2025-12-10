import Image from "next/image";

export type ProductFeatureItemProps = {
  icon: string;
  text: string;
};

export default function ProductFeatureItem({
  icon,
  text,
}: ProductFeatureItemProps) {
  return (
    <li className="flex items-start gap-3">
      <div className="shrink-0 mt-1 w-6 h-6">
        <Image
          src={icon}
          alt={text}
          width={20}
          height={20}
          className="object-contain"
        />
      </div>
      <span className="text-sm text-gray-700">{text}</span>
    </li>
  );
}
