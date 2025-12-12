"use client";

import Image from "next/image";



export default function SuccessStories() {
  return (
    <section id="success-stories" className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl  font-bold">Success Stories</h2>
        </div>

        
        <div className="relative grid grid-cols-1 md:grid-cols-2">

          <article className="bg-white border-r border-gray-200">
           
            <div className="relative h-52 bg-[#cfe3f6] group overflow-hidden">
             
              <div 
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "radial-gradient(circle at 20% 30%, rgba(209,213,219,0.16) 2px, transparent 2.5px), radial-gradient(circle at 60% 70%, rgba(209,213,219,0.12) 2px, transparent 2.5px)",
                  backgroundSize: "100px 100px",
                }}
              />

              <Pin className="group-hover:animate-bounce " top="52%" left="28%" size={28} />
              <Pin className="group-hover:animate-bounce " top="28%" left="43%" size={28} />
              <Pin className="group-hover:animate-bounce " top="40%" left="52%" size={28} />
              <Pin className="group-hover:animate-bounce " top="26%" left="63%" size={28} />
            </div>

            {/* BODY */}
            <div className="px-8 py-10">
              <h3 className="text-[#60a916ad] text-3xl font-extrabold">24SJU (Sweden)</h3>
              <h2 className="text-2xl md:text-3xl text-black font-bold mt-1">
                120+ Unmanned Convenience Stores
              </h2>

              <ul className="mt-5 list-disc pl-6 text-gray-700 space-y-2 text-md mb-5">
                <li>Deployed Smart Self-Checkout as primary checkout & payment system</li>
                <li>Combined with full StoreTech Ecosystem for 24/7 operation</li>
              </ul>

              {/* RESULTS */}
              <div className="mt-16 ">
                <div className="bg-black pb-14 text-white p-6 rounded-md w-full  shadow-md hover:-translate-y-0.5">
                  <h4 className="font-bold text-lg">Results:</h4>
                  <ul className="mt-3  text-white list-disc px-5 space-y-2 text-md">
                    <li>~65% lower technology cost vs traditional build</li>
                    <li>~40% revenue uplift from extended hours</li>
                    <li>99.8% transaction success rate</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>


          <article className=" text-white">
            <div className="h-52 bg-[#050505] flex group items-center justify-center border-b border-black">
              {/* <TanluxLogo size={140} color="#C5A059" className="tanlux-logo group-hover:scale-105 transition-all duration-500 ease-in" /> */}
             <Image src="/assets/images/tanluxlogo.png" alt="Tanlux Logo" height={160} width={160} className="group-hover:scale-105 transition-all duration-100 ease-in"/>
            </div>

            {/* BODY */}
            <div className="px-8 py-10">
              <h3 className="text-[#60a916ad] text-3xl font-bold">Tanlux</h3>
              <h2 className="text-2xl md:text-3xl text-black font-extrabold mt-1">
                10+ Tanning Salons
              </h2>

              <ul className="mt-5 list-disc pl-6  text-black space-y-2 text-md">
                <li>Smart Self-Checkout for product sales and session bookings</li>
                <li>Integrated with Door Access for room entry</li>
                <li>Smart Device Automation for Tan Bed Control</li>
              </ul>

              <div className="mt-8">
                <div className="bg-black text-white p-6 rounded-md shadow-md w-full hover:-translate-y-0.5">
                  <h4 className="font-bold text-lg">Results:</h4>
                  <ul className="mt-3 list-disc pl-5 space-y-2 text-md">
                    <li>~70% labor reduction</li>
                    <li>~50% revenue increase</li>
                    <li>~80% reduction in no-shows</li>
                    <li>Faster customer experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <div
            className="absolute left-1/2  top-45 z-30  -translate-x-1/2 hidden md:flex"
            
          >
            <div className="w-14 h-14 bg-[#37c659] rounded-full flex items-center justify-center border-4 border-white shadow-xl">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
          </div>
        </div>
      </div>

  
      <style>{`
        /* PINS */
        .map-pin {
          position: absolute;
          top-10
          transform: translate(-50%, -100%);
          z-index: 10;
          pointer-events: auto;
          transition: transform 0.25s ease, filter 0.25s ease;
          filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.2));
        }
        // .map-pin:hover {
        //   transform: translate(-50%, -110%) scale(1.18);
        //   filter: drop-shadow(0 8px 10px rgba(0, 0, 0, 0.28));
        // }

        /* TANLUX LOGO HOVER */
        .tanlux-logo {
          transition: transform 0.35s ease, filter 0.35s ease;
        }
        // .tanlux-logo:hover {
        //   transform: scale(1.08) rotate(-3deg);
        //   filter: drop-shadow(0 6px 10px rgba(197, 160, 89, 0.35));
        // }
      `}</style>
    </section>
  );
}


const Pin = ({
  top,
  left,
  size = 26,
  className,
}: {
  top: string;
  left: string;
  className?:string
  size?: number;
}) => (
  <svg
    className={`map-pin  ${className}`} 
    width={size}
    height={(size * 36) / 24}
    viewBox="0 0 24 24"
    style={{ top, left }}
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      fill="#37c659"
      stroke="#0b6b1b"
      strokeWidth="0.6"
    />
    <circle cx="12" cy="9" r="2.5" fill="#052108" stroke="#fff" strokeWidth="0.7" />
  </svg>
);


const TanluxLogo = ({
  size = 140,
  color = "#C5A059",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
   
    <circle cx="100" cy="100" r="34" stroke={color} strokeWidth="2" />

    <g stroke={color} strokeWidth="2" strokeLinecap="round">
      <line x1="100" y1="16" x2="100" y2="36" />
      <line x1="100" y1="164" x2="100" y2="184" />
      <line x1="16" y1="100" x2="36" y2="100" />
      <line x1="164" y1="100" x2="184" y2="100" />

      <line x1="46" y1="46" x2="60" y2="60" />
      <line x1="140" y1="140" x2="156" y2="156" />

      <line x1="46" y1="154" x2="60" y2="140" />
      <line x1="140" y1="60" x2="156" y2="46" />
    </g>

   
    <g transform="translate(100,100) rotate(-6)">
      <text
        x="0"
        y="6"
        textAnchor="middle"
        style={{
          fontFamily: "serif",
          fontWeight: 700,
          fontSize: 20,
          fill: color,
          letterSpacing: 0.5,
        }}
      >
        Tanlux
      </text>
    </g>
  </svg>
);
