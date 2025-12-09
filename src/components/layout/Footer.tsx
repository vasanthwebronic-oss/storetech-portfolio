import Image from "next/image";

export default function Footer() {
  return (
    <div className="container">
      <div className="footer-grid">
        <div>
          <a href="#hero" className="nav-logo mb-4" aria-label="StoreTech Home">
            <div className="logo-icon-bg">
              <Image
                src="/assets/images/storetech-logo-white.png"
                alt="StoreTech Logo"
                className="logo-icon"
                width={160}
                height={50}
              />
            </div>
          </a>
          <p style={{ color: "var(--color-gray-400)" }}>
            The Future of Retail, Automated
          </p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <button data-section="hero" className="nav-link">
            Home
          </button>
          <button data-section="about" className="nav-link">
            About
          </button>
          <button data-section="features" className="nav-link">
            Features
          </button>
          <button data-section="products" className="nav-link">
            Products
          </button>
          <button data-section="industries" className="nav-link">
            Industries
          </button>
          <button data-section="contact" className="nav-link">
            Contact
          </button>
        </div>
        <div className="footer-contact">
          <h4>Contact Information</h4>
          <div className="footer-contact-item">
            <Image
              src="/assets/icons/mail.svg"
              alt="Mail Icon"
              width={160}
              height={160}
            />
            <a href="mailto:suryanarayanan@store-tech.se">
              suryanarayanan@store-tech.se
            </a>
          </div>
          <div className="footer-contact-item">
            <Image
              src="/assets/icons/phone-footer.svg"
              alt="Phone Icon"
              width={160}
              height={160}
            />
            <a href="tel:+917200088500">+91 72000 88500</a>
          </div>
          <div className="footer-contact-item">
            <Image
              src="/assets/icons/globe.svg"
              alt="Website Icon"
              width={160}
              height={160}
            />
            <a
              href="https://www.store-tech.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.store-tech.se
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 StoreTech. All rights reserved.</p>
      </div>
    </div>
  );
}
