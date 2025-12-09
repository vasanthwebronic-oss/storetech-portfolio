import Image from "next/image";

export default function Support() {
  return (
    <section id="support">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Our Promise: <span>World-className Support & Implementation</span>
          </h2>
        </div>

        <div
          className="max-w-5xl mx-auto mb-16"
          style={{
            maxWidth: "64rem",
            margin: "0 auto 4rem",
          }}
        >
          <h3 className="text-3xl font-bold mb-8">
            24/7 Support and Monitoring
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Your business never sleeps, and neither does our support. Our
            dedicated team is available 24 hours a day, 7 days a week, to assist
            with any questions or issues that may arise.
          </p>
          <div className="support-card-grid">
            <div className="support-card-dark">
              <Image
                src="assets/icons/assistance.svg"
                alt="Assistance Icon"
                width={160}
                height={160}
              />
              <h4>Round-the-Clock Assistance</h4>
              <p>Phone, email, and chat support whenever you need it</p>
            </div>
            <div className="support-card-dark">
              <Image
                src="assets/icons/monitoring.svg"
                alt="Monitoring Icon"
                width={160}
                height={160}
              />
              <h4>Proactive Monitoring</h4>
              <p>Command Center app provides real-time alerts and monitoring</p>
            </div>
            <div className="support-card-dark">
              <Image
                src="assets/icons/support-team.svg"
                alt="Support Team Icon"
                width={160}
                height={160}
              />
              <h4>Dedicated Support Team</h4>
              <p>Expert technicians who understand your business</p>
            </div>
          </div>
        </div>
        <div
          className="max-w-5xl mx-auto"
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
          }}
        >
          <h3 className="text-3xl font-bold mb-8">
            Seamless Implementation & Scalability
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Our experienced professionals work with you every step of the way,
            from initial consultation to installation and training. Our modular
            approach allows you to start small and scale as you grow.
          </p>
          <div className="support-card-grid">
            <div className="support-card-light">
              <Image
                src="assets/icons/implementation.svg"
                alt="Implementation Icon"
                width={160}
                height={160}
              />
              <h4>Comprehensive Implementation</h4>
              <p>End-to-end support from design to deployment</p>
            </div>
            <div className="support-card-light">
              <Image
                src="assets/icons/scalability.svg"
                alt="Scalability Icon"
                width={160}
                height={160}
              />
              <h4>Cloud-Based Scalability</h4>
              <p>Easily add new stores, devices, and users as you grow</p>
            </div>
            <div className="support-card-light">
              <Image
                src="assets/icons/partnership.svg"
                alt="Partnership Icon"
                width={160}
                height={160}
              />
              <h4>Ongoing Partnership</h4>
              <p>Continuous training and education for your team</p>
            </div>
          </div>
          <div className="quote-box" style={{ marginTop: "3rem" }}>
            <p>
              Our goal is to be more than just a technology provider; we want to
              be a trusted partner who is invested in your success and who is
              always there to help you achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
