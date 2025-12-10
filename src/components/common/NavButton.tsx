"use client";

type NavButtonProps = {
  label: string;
  id: string;
  isActive?: boolean;
  onClick?: (id: string) => void;
  className?: string;
};

export default function NavButton({
  label,
  id,
  isActive = false,
  onClick,
  className = "",
}: NavButtonProps) {
  const base = "text-[18px] font-bold cursor-pointer transition";
  const activeClasses = isActive
    ? "text-[#37c659]"
    : "text-gray-300 hover:text-white";

  return (
    <button
      type="button"
      onClick={() => onClick?.(id)}
      className={`${base} ${activeClasses} ${className}`}
    >
      {label}
    </button>
  );
}
