import React from "react";

type IntegrationTagProps = {
  children: React.ReactNode;
  className?: string;
};

export default function IntegrationTag({
  children,
  className = "",
}: IntegrationTagProps) {
  return (
    <span
      className={`inline-block text-sm text-[#959595] bg-[#062016]/10 px-3 py-1 rounded-md ${className}`}
      role="status"
      aria-label={typeof children === "string" ? children : undefined}
    >
      {children}
    </span>
  );
}
