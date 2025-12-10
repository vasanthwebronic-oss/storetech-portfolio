import Image from "next/image";
import ProductFeatureItem, {
  ProductFeatureItemProps,
} from "./ProductFeatureItem";

export type ProductCardProps = {
  img: string;
  title: string;
  subtitle: string;
  features: ProductFeatureItemProps[];
};

export default function ProductCard({
  img,
  title,
  subtitle,
  features,
}: ProductCardProps) {
  return (
    <article
      className="bg-white rounded-xl border border-gray-200 shadow-sm 
      transition-all duration-300 ease-out 
      hover:-translate-y-2 hover:shadow-xl overflow-hidden p-8"
    >
      {/* Image */}
      <div className="w-full h-[170px] bg-gray-100 overflow-hidden">
        <Image
          src={img}
          alt={title}
          width={400}
          height={800}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{subtitle}</p>

        <ul className="space-y-3">
          {features.map((f) => (
            <ProductFeatureItem key={f.text} icon={f.icon} text={f.text} />
          ))}
        </ul>
      </div>
    </article>
  );
}
