import Image from "next/image";

export default function Benefits() {
  return (
    <section id="benefits" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 sm:px-10 lg:px-80">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Benefits & Outcomes
          </h2>
          <p className="text-lg text-gray-600">
            Transform your business with measurable results
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          className="
          max-w-5xl 
          mx-auto 
          grid grid-cols-1 sm:grid-cols-2 
          gap-y-12 gap-x-20 
          justify-center
        "
        >
          {/* 1 */}
          <div className="flex items-start gap-4">
            <Image
              src="./assets/icons/AI-Powered HD.svg"
              alt="AI Powered"
              width={28}
              height={28}
            />
            <p className="text-gray-800 text-xl leading-relaxed">
              Reduced operational costs through automation
            </p>
          </div>

          {/* 2 */}
          <div className="flex items-start gap-4">
            <Image
              src="./assets/icons/Revenue Generation.svg"
              alt="Revenue Generation"
              width={28}
              height={28}
            />
            <p className="text-gray-800 text-lg leading-relaxed">
              Increased revenue with 24/7 accessibility
            </p>
          </div>

          {/* 3 */}
          <div className="flex items-start gap-4">
            <Image
              src="./assets/icons/Full-Service.svg"
              alt="Full Service"
              width={28}
              height={28}
            />
            <p className="text-gray-800 text-lg leading-relaxed">
              Enhanced customer experience and personalization
            </p>
          </div>

          {/* 4 */}
          <div className="flex items-start gap-4">
            <Image
              src="./assets/icons/Real-Time IM.svg"
              alt="Real Time Inventory"
              width={28}
              height={28}
            />
            <p className="text-gray-800 text-lg leading-relaxed">
              Real-time inventory management and tracking
            </p>
          </div>

          {/* 5 */}
          <div className="flex items-start gap-4">
            <Image
              src="./assets/icons/ai-powered.svg"
              alt="AI Monitoring"
              width={28}
              height={28}
            />
            <p className="text-gray-800 text-lg leading-relaxed">
              Improved security with AI-powered monitoring
            </p>
          </div>

          {/* 6 */}
          <div className="flex items-start gap-4">
            <Image
              src="./assets/icons/scalability.svg"
              alt="Scalability"
              width={28}
              height={28}
            />
            <p className="text-gray-800 text-lg leading-relaxed">
              Scalable solutions that grow with your business
            </p>
          </div>

          {/* 7 */}
          <div className="flex items-start gap-4">
            <Image
              src="./assets/icons/ai-ml.svg"
              alt="AI ML"
              width={28}
              height={28}
            />
            <p className="text-gray-800 text-lg leading-relaxed">
              Data-driven insights for better decision making
            </p>
          </div>

          {/* 8 */}
          <div className="flex items-start gap-4">
            <Image
              src="./assets/icons/Environmental Product.svg"
              alt="Environmental Sustainability"
              width={28}
              height={28}
            />
            <p className="text-gray-800 text-lg leading-relaxed">
              Environmental sustainability with reduced waste
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
