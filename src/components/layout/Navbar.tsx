"use client";

import Image from "next/image";
import Link from "next/link";
import {  useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname?.() ?? "";

  const links = [
    { href: "/#hero", label: "Home", id: "hero" },
    { href: "/#about", label: "About", id: "about" },
    { href: "/#features", label: "Features", id: "features" },
    { href: "/#products", label: "Products", id: "products" },
    { href: "/#industries", label: "Industries", id: "industries" },
    { href: "/#contact", label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-3 items-center h-20"> 
          
          <div className="flex items-center">
            <Link href="/#hero" aria-label="StoreTech Home" className="inline-flex items-center">
              <div className="flex items-center justify-center rounded-md  px-3 py-2"> 
              
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

         
          <nav className="flex justify-center">
            <ul className="hidden md:flex items-center gap-12"> 
              {links.map((l) => {
                const isActive = pathname.includes(l.id);
                return (
                  <li key={l.href}>
                    <Link href={l.href}>
                      <button
                        data-section={l.id}
                        className={`text-[18px] font-extrabold transition ${
                          isActive ? "text-[#37c659]" : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {l.label}
                      </button>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          
          <div className="flex justify-end items-center gap-4">
            <Link
              href="/#contact"
              className="hidden md:inline-block bg-[#37c659] text-black px-6 py-2 rounded-lg font-semibold shadow-sm hover:bg-[#2fb84f] transition"
            >
              Get Started
            </Link>

           
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="md:hidden p-2"
            >
              {!open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

    
      <div className={`${open ? "block" : "hidden"} md:hidden border-t border-gray-800 bg-black/95`}>
        <div className="px-4 py-4 space-y-3">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              <button
                onClick={() => setOpen(false)}
                data-section={l.id}
                className="w-full text-left text-gray-300 py-2 font-medium hover:text-white"
              >
                {l.label}
              </button>
            </Link>
          ))}

          <Link href="/#contact" onClick={() => setOpen(false)}>
            <span className="block text-center mt-2 bg-[#37c659] text-black py-3 px-3 rounded-md font-semibold">
              Get Started
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
