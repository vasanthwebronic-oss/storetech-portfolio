import React from "react";

type IndustryCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

export default function IndustryCard({
  icon,
  title,
  description,
  className = "",
}: IndustryCardProps) {
  return (
    <article
      className={`relative rounded-lg p-8 bg-[#0e1620] group hover:border-[#40e463] border border-[#0f451b] shadow-sm hover:scale-105 transition-all duration-200 ease-in ${className}`}
    >
      <div className="absolute left-6 top-6 w-10 h-10 flex items-center  group-hover:text-[#5ae87b] justify-center rounded-md text-white">
        {icon}
      </div>

      <h3 className="mt-6  group-hover:text-[#5ae87b] text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-gray-300 leading-relaxed">{description}</p>
    </article>
  );
}
