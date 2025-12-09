import Image from "next/image";


export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">
            Success Stories
          </h2>
          <p className="text-gray-600"></p>
        </div>

        {/* Cards row */}
        <div className="relative cards-row flex flex-col md:flex-row gap-8">
          {/* Center floating icon */}
          <div
            className="center-icon-wrapper hidden md:flex items-center justify-center"
            title="View Details"
            style={{
              position: "absolute",
              left: "50%",
              top: "140px",
              transform: "translate(-50%, -50%)",
              zIndex: 20,
            }}
          >
            <div
              className="center-icon w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: "#37c659",
                color: "#fff",
                border: "5px solid #fff",
                boxShadow: "0 8px 12px rgba(0,0,0,0.15)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
          </div>

          {/* Case card 1  */}
          <article className="case-card light-theme bg-white  overflow-hidden shadow-lg flex-1 transition-transform  lg:w-[900]">
            <div className="card-header-image h-48 relative overflow-hidden bg-blue-200 ">
              <div className="map-bg w-full h-full absolute  inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(209,213,219,.2)_2px,transparent_2.5px),radial-gradient(circle_at_60%_70%,rgba(209,213,219,.2)_2px,transparent_2.5px)] bg-size-[100px_100px]" />

              <svg
                className="map-pin absolute"
                viewBox="0 0 24 24"
                style={{ top: "30%", left: "40%", width: 28, height: 28 }}
                aria-hidden
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                  fill="#111827"
                  opacity="0.15"
                />
                <circle cx="12" cy="9" r="2.5" fill="#37c659" />
              </svg>

              <svg
                className="map-pin absolute"
                viewBox="0 0 24 24"
                style={{ top: "45%", left: "55%", width: 28, height: 28 }}
                aria-hidden
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                  fill="#111827"
                  opacity="0.15"
                />
                <circle cx="12" cy="9" r="2.5" fill="#37c659" />
              </svg>

              <svg
                className="map-pin absolute"
                viewBox="0 0 24 24"
                style={{ top: "25%", left: "60%", width: 28, height: 28 }}
                aria-hidden
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                  fill="#111827"
                  opacity="0.15"
                />
                <circle cx="12" cy="9" r="2.5" fill="#37c659" />
              </svg>

              <svg
                className="map-pin absolute"
                viewBox="0 0 24 24"
                style={{ top: "60%", left: "30%", width: 28, height: 28 }}
                aria-hidden
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                  fill="#111827"
                  opacity="0.15"
                />
                <circle cx="12" cy="9" r="2.5" fill="#37c659" />
              </svg>
            </div>

            {/* body */}
            <div className="card-body p-6 flex flex-col gap-6">
              <h2 className="client-title text-2xl font-extrabold leading-tight">
                <span className="green-text text-[#37c659]">
                  24SJU (Sweden)
                </span>{" "}
                120+ Unmanned Convenience Stores
              </h2>

              <ul className="feature-list list-disc pl-5 space-y-2 text-gray-700 text-sm">
                <li>
                  Deployed Smart Self-Checkout as primary checkout & payment
                  system
                </li>
                <li>
                  Combined with full StoreTech Ecosystem for 24/7 operation
                </li>
              </ul>

              <div className="results-box dark-box bg-gray-900 text-white p-7 ">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Results:
                </h3>
                <ul className="mt-3 list-disc pl-5 text-gray-200 space-y-1 text-sm">
                  <li>~65% lower technology cost vs traditional build</li>
                  <li>~40% revenue uplift from extended hours</li>
                  <li>99.8% transaction success rate</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Case card 2  */}
          <article className="case-card dark-theme bg-[#050505]  overflow-hidden shadow-lg flex-1 transition-transform ">
            <div className="card-header-image logo-area h-48 flex items-center justify-center">
              <svg
                className="sun-logo w-40 h-auto"
                viewBox="0 0 200 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Tanlux Logo"
                role="img"
              >
                <g
                  stroke="#C5A059"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M100 20 L100 10" />
                  <path d="M100 90 L100 80" />
                  <path d="M60 50 L50 50" />
                  <path d="M150 50 L140 50" />
                  <path d="M75 25 L68 18" />
                  <path d="M125 25 L132 18" />
                  <path d="M75 75 L68 82" />
                  <path d="M125 75 L132 82" />
                </g>
                <circle
                  cx="100"
                  cy="50"
                  r="30"
                  stroke="#C5A059"
                  strokeWidth="2"
                />
                <text
                  x="100"
                  y="58"
                  fontFamily="serif"
                  fontWeight="700"
                  fontSize="20"
                  fill="#C5A059"
                  textAnchor="middle"
                >
                  Tanlux
                </text>
              </svg>
            </div>

            <div className="card-body p-6 flex flex-col gap-6">
              <h2 className="client-title text-2xl font-extrabold leading-tight text-white">
                <span className="green-text text-[#37c659]">Tanlux</span>
                <br />
                10+ Tanning Salons
              </h2>

              <ul className="feature-list list-disc pl-5 space-y-2 text-gray-300 text-sm">
                <li>
                  Smart Self-Checkout for product sales and session bookings
                </li>
                <li>Integrated with Door Access for room entry</li>
                <li>Smart Device Automation for Tan Bed Control</li>
              </ul>

              <div className="results-box light-box bg-white p-6  ">
                <h3 className="text-lg font-bold flex items-center gap-2 text-gray-900">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      stroke="#111827"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Results:
                </h3>
                <ul className="mt-3 list-disc pl-5 text-gray-800 space-y-1 text-sm">
                  <li>~70% labor reduction</li>
                  <li>~50% revenue increase</li>
                  <li>~80% reduction in no-shows</li>
                  <li>Faster customer experience</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
