import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 lg:px-25">
        <div className="grid gap-8 md:grid-cols-3 justify-between">

        
          <div className="space-y-4">
            <Link href="/#hero" aria-label="StoreTech Home" className="inline-flex items-center gap-3 nav-logo">
              <div className="logo-icon-bg rounded-sm flex items-center justify-center bg-black">
                <Image
                  src="/assets/images/storetech-logo-white.png"
                  alt="StoreTech Logo"
                  width={160}
                  height={50}
                  className="logo-icon"
                />
              </div>
            </Link>
            <p className="text-gray-400">The Future of Retail, Automated</p>
          </div>

        
          <div className="footer-links">
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <div className="grid gap-1">

              <Link href="/#hero" className="text-gray-400 hover:text-white transition">
                Home
              </Link>

              <Link href="/#about" className="text-gray-400 hover:text-white transition">
                About
              </Link>

              <Link href="/#features" className="text-gray-400 hover:text-white transition">
                Features
              </Link>

              <Link href="/#products" className="text-gray-400 hover:text-white transition">
                Products
              </Link>

              <Link href="/#industries" className="text-gray-400 hover:text-white transition">
                Industries
              </Link>

              <Link href="/#contact" className="text-gray-400 hover:text-white transition">
                Contact
              </Link>

            </div>
          </div>

        
          <div>
            <h4 className="text-white font-bold mb-4">Contact Information</h4>

            <div className="flex items-center gap-3 mb-3">
              <Image src="/assets/icons/mail.svg" alt="Mail Icon" width={24} height={24} />
              <a
                className="text-gray-400 hover:text-white"
                href="mailto:suryanarayanan@store-tech.se"
              >
                suryanarayanan@store-tech.se
              </a>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <Image src="/assets/icons/phone-footer.svg" alt="Phone Icon" width={24} height={24} />
              <a
                className="text-gray-400 hover:text-white"
                href="tel:+917200088500"
              >
                +91 72000 88500
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Image src="/assets/icons/globe.svg" alt="Website Icon" width={24} height={24} />
              <a
                className="text-gray-400 hover:text-white"
                href="https://www.store-tech.se"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.store-tech.se
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2025 StoreTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
