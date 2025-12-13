"use client";
import  { useEffect, useRef, useState } from "react";
import ProductCard from "@/components/common/ProductCard"; 

export default function Products() {
  const products = [
    {
      img: "./assets/images/product-erp-dashboard.png",
      title: "The Nerve Center",
      subtitle: "Unified ERP & Management Platform",
      features: [
        { icon: "./assets/icons/Real-Time IM.svg", text: "Real-Time Inventory Management" },
        { icon: "./assets/icons/CRM.svg", text: "Customer Relationship Management" },
        { icon: "./assets/icons/Device Management.svg", text: "Device Management" },
      ],
    },
    {
      img: "./assets/images/product-mobile-app.png",
      title: "The Personal Concierge",
      subtitle: "Store Tech Shopping Application",
      features: [
        { icon: "./assets/icons/Barcode-QR.svg", text: "Barcode/QR Code Scanning" },
        { icon: "./assets/icons/SecurePay.svg", text: "Secure Payment Integration" },
        { icon: "./assets/icons/Personalized Offer.svg", text: "Personalized Offers" },
      ],
    },
    {
      img: "./assets/images/product-door-access.png",
      title: "The Secure Gateway",
      subtitle: "Intelligent Door Controller & Access System",
      features: [
        { icon: "./assets/icons/Multi-Method.svg", text: "Multi-Method Authentication" },
        { icon: "./assets/icons/Integrated Adscreen.svg", text: "Integrated Advertising Screen" },
        { icon: "./assets/icons/Tamper-Proof.svg", text: "Tamper-Proof Design" },
      ],
    },
    {
      img: "./assets/images/product-self-checkout.png",
      title: "The Autonomous Checkout",
      subtitle: "Smart Self-Checkout Solutions",
      features: [
        { icon: "./assets/icons/Self-Checkout.svg", text: "Self-Checkout & Hybrid Options" },
        { icon: "./assets/icons/Hybrid.svg", text: "Weight Scale Integration" },
        { icon: "./assets/icons/Full-Service.svg", text: "Full-Service Configuration" },
      ],
    },
    {
      img: "./assets/images/product-esl.png",
      title: "The Dynamic Shelf",
      subtitle: "Electronic Price Tags (ESL)",
      features: [
        { icon: "./assets/icons/Remote Price.svg", text: "Remote Price Updates" },
        { icon: "./assets/icons/Dynamic Pricing.svg", text: "Dynamic & Promotional Pricing" },
        { icon: "./assets/icons/Environmental Product.svg", text: "Reduced Paper Waste" },
      ],
    },
    {
      img: "./assets/images/product-vending-machine.png",
      title: "The 24/7 Merchant",
      subtitle: "Integrated Vending Solutions",
      features: [
        { icon: "./assets/icons/App Based.svg", text: "App-Based Purchasing" },
        { icon: "./assets/icons/Real-Time Inventory.svg", text: "Real-Time Inventory Tracking" },
        { icon: "./assets/icons/Revenue Generation.svg", text: "24/7 Revenue Generation" },
      ],
    },
  ];

  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [visible, setVisible] = useState<boolean[]>(
    () => new Array(products.length).fill(false)
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      setVisible(new Array(products.length).fill(true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.idx);
          if (entry.isIntersecting) {
            setVisible((prev) => {
              if (prev[idx]) return prev;
              const copy = [...prev];
              copy[idx] = true;
              return copy;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -12% 0px", threshold: 0.16 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [products.length]);

  return (
    <section id="products" className="py-20 px-1 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">The Core Integrated Ecosystem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl">
            Comprehensive solutions that work together seamlessly
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {products.map((p, idx) => (
            <div key={p.title} data-idx={idx} ref={(el) => {cardRefs.current[idx] = el}}>
              <ProductCard
                img={p.img}
                title={p.title}
                subtitle={p.subtitle}
                features={p.features}
                visible={visible[idx]}
                animationDelay={0.08 * idx}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
