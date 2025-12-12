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
      className={`relative bg-black group text-white hover:bg-[#d0efd3]  hover:border  hover:border-[#049413] hover:scale-101 transition-all duration-200 ease-in rounded-xl px-8 py-7 ${heightClass} flex flex-col ${className}`}
    >
      <div className="mb-6">
        <IconWithPing iconSrc={iconSrc} title={title} ></IconWithPing>
       
      </div>

      <h4 className="text-[1.3rem] font-semibold leading-snug group-hover:text-[#023006] mb-4">{title}</h4>

      <p className="text-md text-gray-300 group-hover:text-[#049413] grow">{description}</p>
    </article>
  );
}


export  function IconWithPing({ iconSrc, title }: { iconSrc: string; title: string }) {
  return (
    <div
      className="w-12 h-12 relative group  inline-block"
      tabIndex={0}
      aria-label={title}
      title={title}
    >
      {/* image */}
      <Image
        src={iconSrc}
        alt={title}
        width={48}
        height={48}
        priority
        className="rounded-md transition-transform duration-200 ease-out group-hover:scale-105 group-focus:scale-105"
      />

      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-green-300 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:animate-ping pointer-events-none"
      />

      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-green-300/20 opacity-0 group-hover:opacity-100 group-focus:opacity-100 animate-pulse pointer-events-none"
      />
    </div>
  );
}

