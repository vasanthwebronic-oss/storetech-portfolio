"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname?.() ?? "";
  const router = useRouter();

  const links = [
    { href: "/#hero", label: "Home", id: "hero" },
    { href: "/#about", label: "About", id: "about" },
    { href: "/#features", label: "Features", id: "features" },
    { href: "/#products", label: "Products", id: "products" },
    { href: "/#industries", label: "Industries", id: "industries" },
    { href: "/#contact", label: "Contact", id: "contact" },
  ];

  
  const scrollToSection = (id: string) => {
    setOpen(false); 

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    router.push(`/#${id}`);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-3 items-center h-20">

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/#hero" aria-label="StoreTech Home" className="inline-flex items-center cursor-pointer">
              <div className="flex items-center justify-center rounded-md px-3 py-2">
                <div className="bg-black rounded-sm px-2 py-1">
                  <Image
                    src="/assets/images/storetech-logo-white.png"
                    alt="StoreTech Logo"
                    width={160}
                    height={36}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="flex justify-center">
            <ul className="hidden md:flex items-center gap-12">
              {links.map((l) => {
                const isActive = pathname.includes(l.id);
                return (
                  <li key={l.href}>
                    <button
                      onClick={() => scrollToSection(l.id)}
                      className={`text-[18px] font-bold cursor-pointer transition ${
                        isActive ? "text-[#37c659]" : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {l.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="ml-auto">
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:inline-block cursor-pointer bg-[#37c659] text-black px-6 py-2 rounded-lg font-semibold shadow-sm hover:bg-[#2fb84f] transition"
            >
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle Menu"
              className="md:hidden p-2 cursor-pointer"
            >
              {!open ? (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${open ? "block" : "hidden"} md:hidden border-t border-gray-800 bg-black/95`}>
        <div className="px-4 py-4 space-y-3">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollToSection(l.id)}
              className="w-full text-left text-gray-300 py-2 font-medium hover:text-white cursor-pointer"
            >
              {l.label}
            </button>
          ))}

          <button
            onClick={() => scrollToSection("contact")}
            className=" text-center mt-2 bg-[#37c659] text-black py-3 px-3 rounded-md font-semibold  cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
