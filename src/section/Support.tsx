import Image from "next/image";

export default function Support() {
  return (
    <section id="support" className="pt-24 pb-28">
      <div className="container mx-auto px-4">
      
        <div className="w-full text-center mb-12">
          <h2 className="font-bold  text-black/95
                  px-3  text-[2.5rem]    lg:text-[3rem] lg:px-50 ">
            Our Promise:
            <span className=" text-[#37c659]"> World-Class Support &amp;</span>
            <span className=" text-[#37c659]"> Implementation</span>
          </h2>
        </div>

        
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h3 className="text-xl  font-bold text-gray-900 mb-4">
              24/7 Support and Monitoring
            </h3>
            <p className="text-base md:text-md text-gray-700 ">
              Your business never sleeps, and neither does our support. Our
              dedicated team is available 24 hours a day, 7 days a week, to assist
              with any questions or issues that may arise.
            </p>
          </div>

          {/* Cards row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="relative bg-black text-white rounded-xl px-8 py-7 h-64 flex flex-col">
              
              <div className="mb-6">
                <div className="w-12 h-12">
                  <Image
                    src="/assets/icons/assistance.svg"
                    alt="Assistance Icon"
                    width={48}
                    height={48}
                    priority
                  />
                </div>
              </div>

              {/* Title */}
              <h4 className="text-[1.3rem] font-semibold leading-snug mb-4">
                Round-the-Clock <span className="block">Assistance</span>
              </h4>

              {/* Description */}
              <p className="text-md text-gray-300 grow">
                Phone, email, and chat support whenever you need it
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative bg-black text-white rounded-xl px-8 py-7 h-64 flex flex-col">
              <div className="mb-6">
                <div className="w-12 h-12">
                  <Image
                    src="/assets/icons/monitoring.svg"
                    alt="Monitoring Icon"
                    width={48}
                    height={48}
                    priority
                  />
                </div>
              </div>

              <h4 className="text-[1.3rem] font-semibold leading-snug mb-4">
                Proactive Monitoring
              </h4>

              <p className="text-md text-gray-300 grow">
                Command Center app provides real-time alerts and monitoring
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative bg-black text-white rounded-xl px-8 py-7 h-64 flex flex-col">
              <div className="mb-6">
                <div className="w-12 h-12">
                  <Image
                    src="/assets/icons/support-team.svg"
                    alt="Support Team Icon"
                    width={48}
                    height={48}
                    priority
                  />
                </div>
              </div>

              <h4 className="text-[1.3rem] font-semibold leading-snug mb-4">
                Dedicated Support Team
              </h4>

              <p className="text-md text-gray-300 flex-grow">
                Expert technicians who understand your business
              </p>
            </div>
          </div>

          
          <div className="mt-16">
            <h3 className="text-xl  font-bold mb-4">Seamless Implementation &amp; Scalability</h3>
            <p className="text-lg text-gray-700 ">
              Our experienced professionals work with you every step of the way, from initial
              consultation to installation and training. Our modular approach allows you
              to start small and scale as you grow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="border-2 border-[#42ba5c] p-8 rounded-md bg-white text-black h-68 flex flex-col">
                <div className="mb-6 w-12 h-12">
                  <Image
                    src="/assets/icons/implementation.svg"
                    alt="Implementation Icon"
                    width={48}
                    height={48}
                    priority
                  />
                </div>
                <h4 className="text-xl font-bold mb-3">Comprehensive Implementation</h4>
                <p className="text-[1.10rem]">End-to-end support from design to deployment</p>
              </div>

              <div className="border-2 border-[#42ba5c] p-8 rounded-md bg-white text-black h-68 flex flex-col">
                <div className="mb-6 w-12 h-12">
                  <Image
                    src="/assets/icons/scalability.svg"
                    alt="Scalability Icon"
                    width={48}
                    height={48}
                    priority
                  />
                </div>
                <h4 className="text-xl font-bold mb-3">Cloud-Based Scalability</h4>
                <p className="text-[1.10rem]">Easily add new stores, devices, and users as you grow</p>
              </div>

              <div className="border-2 border-[#42ba5c] p-8 rounded-md bg-white text-black h-68 flex flex-col">
                <div className="mb-6 w-12 h-12">
                  <Image
                    src="/assets/icons/partnership.svg"
                    alt="Partnership Icon"
                    width={48}
                    height={48}
                    priority
                  />
                </div>
                <h4 className="text-xl font-bold mb-3">Ongoing Partnership</h4>
                <p className="text-[1.10rem]">Continuous training and education for your team</p>
              </div>
            </div>

            <div className="mt-10 bg-black  text-white px-8 py-10 rounded-xl italic ">
              <p className="lg:text-xl text-2xl ">
                Our goal is to be more than just a technology provider; we want to be a trusted
                partner who is invested in your success and who is always there to help you
                achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
