import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl sm:text-5xl font-bold mb-4">
              Ready to Transform <span className="text-green-400">Your Business?</span>
            </h2>

            <p className="section-subtitle text-[1.30rem] max-w-3xl text-gray-700  mx-auto leading-relaxed">
              The future of physical commerce is not a distant dream; it is a reality being
              built today. StoreTech is at the forefront of this transformation, providing
              the tools and expertise needed to create a new generation of smart, efficient,
              and profitable physical spaces.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">

            {/* Card 1 */}
            <div className="bg-gray-100 rounded-xl p-6 text-center  ">
              <a href="tel:7200088500" className="flex flex-col items-center text-black no-underline">
                <Image
                  src="/assets/icons/calendar.svg"
                  alt="Calendar Icon"
                  width={50}
                  height={50}
                  className="mb-4"
                />
                <h3 className="font-bold text-lg mb-2">Schedule a Demo</h3>
                <p className="text-gray-800 text-md">
                  See our ecosystem in action with a personalized demonstration
                </p>
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 rounded-xl p-6 text-center  ">
              <a href="tel:7200088500" className="flex flex-col items-center text-black no-underline">
                <Image
                  src="/assets/icons/phone-footer.svg"
                  alt="Phone Icon"
                  width={50}
                  height={50}
                  className="mb-4"
                />
                <h3 className="font-bold text-lg mb-2">Get in Touch</h3>
                <p className="text-gray-800 text-md">
                  Speak with our experts about your specific needs
                </p>
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 rounded-xl p-6 text-center  ">
              <a href="tel:7200088500" className="flex flex-col items-center text-black no-underline">
                <Image
                  src="/assets/icons/rocket.svg"
                  alt="Rocket Icon"
                  width={50}
                  height={50}
                  className="mb-4"
                />
                <h3 className="font-bold text-lg mb-2">Start Your Journey</h3>
                <p className="text-gray-800 text-md">
                  Begin your transformation with a modular approach
                </p>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
