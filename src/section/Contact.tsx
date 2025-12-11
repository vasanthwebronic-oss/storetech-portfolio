import ContactCard from "@/components/common/ContactCard";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl sm:text-5xl font-bold mb-4">
              Ready to Transform{" "}
              <span className="text-green-400">Your Business?</span>
            </h2>

            <p className="section-subtitle text-[1.30rem] max-w-3xl text-gray-700 mx-auto leading-relaxed">
              The future of physical commerce is not a distant dream; it is a
              reality being built today. StoreTech is at the forefront of this
              transformation, providing the tools and expertise needed to create
              a new generation of smart, efficient, and profitable physical
              spaces.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <ContactCard
              href="tel:7200088500"
              imgSrc="./assets/icons/calendar.svg"
              title="Schedule a Demo"
              text="See our ecosystem in action with a personalized demonstration"
            />

            <ContactCard
              href="tel:7200088500"
              imgSrc="./assets/icons/phone-footer.svg"
              title="Get in Touch"
              text="Speak with our experts about your specific needs"
            />

            <ContactCard
              href="tel:7200088500"
              imgSrc="./assets/icons/rocket.svg"
              title="Start Your Journey"
              text="Begin your transformation with a modular approach"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
