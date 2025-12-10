import IntegrationTag from "./IntegrationTag";

type IntegrationCardProps = {
  title: string;
  body: string;
  products?: string[];
  className?: string;
};

export default function IntegrationCard({
  title,
  body,
  products = [],
  className = "",
}: IntegrationCardProps) {
  return (
    <article className={`relative rounded-lg overflow-hidden ${className}`}>
      <div className="p-2 rounded-lg">
        <div className="bg-[#050505] rounded-md border border-[#0f2a18]/40 overflow-hidden">
          <div className="px-7 py-5">
            <h3 className="text-2xl md:text-2xl font-bold text-[#37c659]">
              {title}
            </h3>

            <p className="mt-4 text-gray-300 leading-relaxed text-base md:text-lg max-w-3xl">
              {body}
            </p>

            <div className="border-t border-gray-700/60 my-6" />

            <div className="flex flex-wrap gap-3">
              {products.map((p) => (
                <IntegrationTag key={p}>{p}</IntegrationTag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
