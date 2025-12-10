import SupportFeatureCard from "@/components/common/SupportFeatureCard";
import SupportInfoCard from "@/components/common/SupportInfoCard";

export default function Support() {
  return (
    <section id="support" className="pt-24 pb-28">
      <div className="container mx-auto px-4">
        <div className="w-full text-center mb-12">
          <h2 className="font-bold text-black/95 px-3 text-[2.5rem] lg:text-[3rem]">
            Our Promise:
            <span className="text-[#37c659]"> World-Class Support &amp;</span>
            <span className="text-[#37c659]"> Implementation</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              24/7 Support and Monitoring
            </h3>
            <p className="text-base md:text-md text-gray-700">
              Your business never sleeps, and neither does our support. Our
              dedicated team is available 24 hours a day, 7 days a week, to
              assist with any questions or issues that may arise.
            </p>
          </div>

          {/* Dark feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SupportFeatureCard
              iconSrc="/assets/icons/assistance.svg"
              title="Round-the-Clock Assistance"
              description="Phone, email, and chat support whenever you need it"
            />
            <SupportFeatureCard
              iconSrc="/assets/icons/monitoring.svg"
              title="Proactive Monitoring"
              description="Command Center app provides real-time alerts and monitoring"
            />
            <SupportFeatureCard
              iconSrc="/assets/icons/support-team.svg"
              title="Dedicated Support Team"
              description="Expert technicians who understand your business"
            />
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold mb-4">
              Seamless Implementation &amp; Scalability
            </h3>
            <p className="text-lg text-gray-700">
              Our experienced professionals work with you every step of the way,
              from initial consultation to installation and training. Our
              modular approach allows you to start small and scale as you grow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <SupportInfoCard
                iconSrc="/assets/icons/implementation.svg"
                title="Comprehensive Implementation"
                description="End-to-end support from design to deployment"
              />

              <SupportInfoCard
                iconSrc="/assets/icons/scalability.svg"
                title="Cloud-Based Scalability"
                description="Easily add new stores, devices, and users as you grow"
              />

              <SupportInfoCard
                iconSrc="/assets/icons/partnership.svg"
                title="Ongoing Partnership"
                description="Continuous training and education for your team"
              />
            </div>

            <div className="mt-10">
              <div className="mt-10 bg-black text-white px-8 py-10 rounded-xl italic">
                <p className="lg:text-xl text-2xl">
                  Our goal is to be more than just a technology provider; we
                  want to be a trusted partner who is invested in your success
                  and who is always there to help you achieve your goals.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
