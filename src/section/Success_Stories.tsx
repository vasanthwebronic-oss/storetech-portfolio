"use client";
import Image from "next/image";

export default function SuccessStories() {
  return (
    <section
      id="success-stories"
      className="relative py-24 bg-linear-to-b from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world deployments delivering measurable business impact
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
          <article className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
            <div className="relative h-56 bg-[#cfe3f6] overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(209,213,219,0.2)_2px,transparent_3px)] bg-size-[90px_90px]"
              />

              <Pin top="52%" left="28%" />
              <Pin top="30%" left="45%" />
              <Pin top="42%" left="55%" />
              <Pin top="28%" left="65%" />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-green-600 text-3xl font-extrabold">
                24SJU (Sweden)
              </h3>
              <h4 className="text-2xl font-bold mt-1">
                120+ Unmanned Convenience Stores
              </h4>

              <ul className="mt-5 list-disc pl-6 space-y-2 text-gray-700 lg:mb-16">
                <li>Smart Self-Checkout as primary payment system</li>
                <li>Full StoreTech ecosystem for 24/7 operations</li>
              </ul>

              <div className="mt-8 bg-black text-white rounded-xl p-6">
                <h5 className="font-bold text-lg mb-2">Results</h5>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>~65% lower technology cost</li>
                  <li>~40% revenue uplift</li>
                  <li>99.8% transaction success rate</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
            {/* Logo */}
            <div className="h-56 bg-black flex items-center justify-center">
              <Image
                src="./assets/images/tanluxlogo.png"
                alt="Tanlux"
                width={150}
                height={150}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-green-600 text-3xl font-extrabold">
                Tanlux
              </h3>
              <h4 className="text-2xl font-bold mt-1">
                10+ Automated Tanning Salons
              </h4>

              <ul className="mt-5 list-disc pl-6 space-y-2 text-gray-700 ">
                <li>Self-Checkout for products & bookings</li>
                <li>Door access + smart device automation</li>
                <li>Fully unattended operation</li>
              </ul>

              <div className="mt-8 bg-black text-white rounded-xl p-6">
                <h5 className="font-bold text-lg mb-2">Results</h5>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>~70% labor reduction</li>
                  <li>~50% revenue increase</li>
                  <li>~80% fewer no-shows</li>
                </ul>
              </div>
            </div>
          </article>

          <div className="absolute hidden md:flex left-1/2 top-60 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Pin = ({
  top,
  left,
}: {
  top: string;
  left: string;
}) => (
  <svg
    className="
      absolute
      -translate-x-1/2 -translate-y-full
      animate-pulse
      drop-shadow-md
    "
    style={{ top, left }}
    width="26"
    height="38"
    viewBox="0 0 24 36"
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      fill="#37c659"
      stroke="#0b6b1b"
      strokeWidth="0.6"
    />
    <circle cx="12" cy="9" r="2.5" fill="#052108" />
  </svg>
);
