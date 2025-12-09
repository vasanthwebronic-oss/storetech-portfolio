import Image from "next/image";

export default function Vision() {
  return (
    <section id="vision" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14">
          Our Vision:{" "}
          <span className="text-[#37c659]">Redefining the Physical Space</span>
        </h2>

        <h3 className="text-xl sm:text-2xl font-bold mb-3">
          The Philosophy of Seamless Automation
        </h3>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 max-w-5xl">
          Our vision is anchored in the philosophy of "Seamless Automation" –
          creating environments where technology is so deeply integrated that it
          becomes invisible to the end-user, working quietly in the background
          to enhance every interaction.
        </p>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-10 max-w-5xl">
          This means designing systems that are intuitive, reliable, and always
          available, ensuring a consistent and convenient experience 24 hours a
          day, 365 days a year.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-[#0f172a] rounded-xl border border-[#37c659] min-h-[230px]">
            <Image
              src="/assets/icons/intelligent-integration.svg"
              alt="Intelligent Integration Icon"
              width={38}
              height={38}
              className="mb-3"
            />
            <h4 className="text-lg font-bold mb-2">Intelligent Integration</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Every device connected in an intelligent network, creating a
              virtuous cycle of data and automation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-[#0f172a] rounded-xl border border-[#37c659] min-h-[230px]">
            <Image
              src="/assets/icons/cloud-computing.svg"
              alt="Cloud Computing Icon"
              width={38}
              height={38}
              className="mb-3"
            />
            <h4 className="text-lg font-bold mb-2">Cloud Computing</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Scalable, flexible infrastructure that powers the ecosystem with
              secure, always-available services.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-[#0f172a] rounded-xl border border-[#37c659] min-h-[230px]">
            <Image
              src="/assets/icons/ai-ml.svg"
              alt="AI Machine Learning Icon"
              width={38}
              height={38}
              className="mb-3"
            />
            <h4 className="text-lg font-bold mb-2">AI & Machine Learning</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Advanced algorithms that predict behavior, optimize operations,
              and personalize experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
