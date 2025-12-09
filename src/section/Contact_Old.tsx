import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Ready to Transform <span>Your Business?</span>
            </h2>
            <p className="section-subtitle">
              The future of physical commerce is not a distant dream; it is a
              reality that is being built today. StoreTech is at the forefront
              of this transformation, providing the tools and expertise needed
              to create a new generation of smart, efficient, and profitable
              physical spaces.
            </p>
          </div>

        <div className="contact-cards">
  <div className="contact-card">
    <a href="tel:7200088500" className="newlinks">
      <Image
        src="assets/icons/calendar.svg"
        alt="Calendar Icon"
        width={160}
        height={160}
      />
      <h3>Schedule a Demo</h3>
      <p>See our ecosystem in action with a personalized demonstration</p>
    </a>
  </div>

  <div className="contact-card">
    <a href="tel:7200088500" className="newlinks">
      <Image
        src="assets/icons/phone-footer.svg"
        alt="Phone Icon"
        width={160}
        height={160}
      />
      <h3>Get in Touch</h3>
      <p>Speak with our experts about your specific needs</p>
    </a>
  </div>

  <div className="contact-card">
    <a href="tel:7200088500" className="newlinks">
      <Image
        src="assets/icons/rocket.svg"
        alt="Rocket Icon"
        width={160}
        height={160}
      />
      <h3>Start Your Journey</h3>
      <p>Begin your transformation with a modular approach</p>
    </a>
  </div>
</div>


          {/* <!--                     <div className="contact-form-wrapper">
                        <h3 className="text-2xl font-bold mb-6 text-center">Contact Us</h3>
                        <form id="contact-form" className="contact-form">
                            <div className="form-grid">
                                <div className="form-group">
                                    <label for="name">Name *</label>
                                    <input id="name" type="text" name="name" required aria-required="true">
                                </div>
                                <div className="form-group">
                                    <label for="email">Email *</label>
                                    <input id="email" type="email" name="email" required aria-required="true">
                                </div>
                            </div>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label for="phone">Phone</label>
                                    <input id="phone" type="tel" name="phone">
                                </div>
                                <div className="form-group">
                                    <label for="company">Company</label>
                                    <input id="company" type="text" name="company">
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="message">Message *</label>
                                <textarea id="message" name="message" required aria-required="true" rows="4"></textarea>
                            </div>
                            <div className="form-consent">
                                <input id="consent" type="checkbox" name="consent" required aria-required="true">
                                <label for="consent">I agree to the privacy policy and consent to be contacted by StoreTech *</label>
                            </div>
                            <button type="submit" className="form-submit-btn">Send Message</button>
                        </form>
                    </div> --> */}
        </div>
      </div>
    </section>
  );
}
