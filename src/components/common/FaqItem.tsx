"use client";

type FaqItemProps = {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (index: number) => void;
  setContentRef?: (el: HTMLDivElement | null, i: number) => void;
};

export default function FaqItem({
  index,
  question,
  answer,
  isOpen,
  onToggle,
  setContentRef,
}: FaqItemProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => onToggle(index)}
        className="w-full p-5 flex justify-between items-center text-left"
      >
        <span className="font-semibold text-lg text-gray-900">{question}</span>

        <svg
          className={`w-6 h-6 text-gray-700 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <polyline
            points="6 9 12 15 18 9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        ref={(el) => setContentRef?.(el, index)}
        className="overflow-hidden transition-[max-height] duration-300"
        style={{ maxHeight: "0px" }}
      >
        <p className="px-5 pb-6 text-gray-700 leading-7">{answer}</p>
      </div>
    </div>
  );
}
