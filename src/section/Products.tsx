import Image from "next/image";


export default function Products() {
  const products = [
    {
      img: "/assets/images/product-erp-dashboard.png",
      title: "The Nerve Center",
      subtitle: "Unified ERP & Management Platform",
      features: [
        {
          icon: "/assets/icons/Real-Time IM.svg",
          text: "Real-Time Inventory Management",
        },
        {
          icon: "/assets/icons/CRM.svg",
          text: "Customer Relationship Management",
        },
        {
          icon: "/assets/icons/Device Management.svg",
          text: "Device Management",
        },
      ],
    },
    {
      img: "/assets/images/product-mobile-app.png",
      title: "The Personal Concierge",
      subtitle: "Store Tech Shopping Application",
      features: [
        {
          icon: "/assets/icons/Barcode-QR.svg",
          text: "Barcode/QR Code Scanning",
        },
        {
          icon: "/assets/icons/SecurePay.svg",
          text: "Secure Payment Integration",
        },
        {
          icon: "/assets/icons/Personalized Offer.svg",
          text: "Personalized Offers",
        },
      ],
    },
    {
      img: "/assets/images/product-door-access.png",
      title: "The Secure Gateway",
      subtitle: "Intelligent Door Controller & Access System",
      features: [
        {
          icon: "/assets/icons/Multi-Method.svg",
          text: "Multi-Method Authentication",
        },
        {
          icon: "/assets/icons/Integrated Adscreen.svg",
          text: "Integrated Advertising Screen",
        },
        { icon: "/assets/icons/Tamper-Proof.svg", text: "Tamper-Proof Design" },
      ],
    },
    {
      img: "/assets/images/product-self-checkout.png",
      title: "The Autonomous Checkout",
      subtitle: "Smart Self-Checkout Solutions",
      features: [
        {
          icon: "/assets/icons/Self-Checkout.svg",
          text: "Self-Checkout & Hybrid Options",
        },
        { icon: "/assets/icons/Hybrid.svg", text: "Weight Scale Integration" },
        {
          icon: "/assets/icons/Full-Service.svg",
          text: "Full-Service Configuration",
        },
      ],
    },
    {
      img: "/assets/images/product-esl.png",
      title: "The Dynamic Shelf",
      subtitle: "Electronic Price Tags (ESL)",
      features: [
        {
          icon: "/assets/icons/Remote Price.svg",
          text: "Remote Price Updates",
        },
        {
          icon: "/assets/icons/Dynamic Pricing.svg",
          text: "Dynamic & Promotional Pricing",
        },
        {
          icon: "/assets/icons/Environmental Product.svg",
          text: "Reduced Paper Waste",
        },
      ],
    },
    {
      img: "/assets/images/product-vending-machine.png",
      title: "The 24/7 Merchant",
      subtitle: "Integrated Vending Solutions",
      features: [
        { icon: "/assets/icons/App Based.svg", text: "App-Based Purchasing" },
        {
          icon: "/assets/icons/Real-Time Inventory.svg",
          text: "Real-Time Inventory Tracking",
        },
        {
          icon: "/assets/icons/Revenue Generation.svg",
          text: "24/7 Revenue Generation",
        },
      ],
    },
    {
      img: "/assets/images/product-smart-fridge.png",
      title: "The Fresh Market",
      subtitle: "Smart Fridge Technology",
      features: [
        {
          icon: "/assets/icons/Advanced Monitoring.svg",
          text: "Advanced Temperature Monitoring",
        },
        { icon: "/assets/icons/App Based.svg", text: "Grab-and-Go Purchasing" },
        {
          icon: "/assets/icons/Reduced Food Waste.svg",
          text: "Reduced Food Waste",
        },
      ],
    },
    {
      img: "/assets/images/product-digital-signage.png",
      title: "The Digital Signage Network",
      subtitle: "Android TV Promotion Manager",
      features: [
        {
          icon: "/assets/icons/Remote Content.svg",
          text: "Remote Content Management",
        },
        {
          icon: "/assets/icons/Multimedia Support.svg",
          text: "Multimedia Playlist Support",
        },
        { icon: "/assets/icons/ERP Integration.svg", text: "ERP Integration" },
      ],
    },
    {
      img: "/assets/images/product-building-automation.png",
      title: "The Building Intelligence",
      subtitle: "Smart Device Automation",
      features: [
        {
          icon: "/assets/icons/Real-Time IM.svg",
          text: "Centralized Control of Lights & HVAC",
        },
        {
          icon: "/assets/icons/Automate Rules.svg",
          text: "Custom Automation Rules",
        },
        {
          icon: "/assets/icons/Energy Monitor.svg",
          text: "Energy Consumption Monitoring",
        },
      ],
    },
    {
      img: "/assets/images/product-ai-security-feed.png",
      title: "The Vigilant Guardian",
      subtitle: "AI-Powered Motion Detection & Security",
      features: [
        {
          icon: "/assets/icons/AI-Powered HD.svg",
          text: "AI-Powered Human Detection",
        },
        {
          icon: "/assets/icons/Real-Time Alerts.svg",
          text: "Real-Time Mobile Alerts",
        },
        { icon: "/assets/icons/Cloud-Based.svg", text: "Cloud-Based Storage" },
      ],
    },
    {
      img: "/assets/images/product-monitoring-dashboard.png",
      title: "The Command Center",
      subtitle: "Support & Monitoring Application",
      features: [
        {
          icon: "/assets/icons/Store Monitor.svg",
          text: "24/7 Store Monitoring",
        },
        {
          icon: "/assets/icons/Remote Troubleshooting.svg",
          text: "Remote Troubleshooting",
        },
        {
          icon: "/assets/icons/Performance Analusis.svg",
          text: "Performance Analytics",
        },
      ],
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
            The Core Integrated Ecosystem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions that work together seamlessly
          </p>
        </div>

        {/* products grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.title}
              className="product-card bg-white rounded-xl border border-gray-200 shadow-sm 
  transition-all duration-300 ease-out 
  hover:-translate-y-2 hover:shadow-xl overflow-hidden p-8 "
            >
              {/* image / visual */}
              <div className="w-full h-[170px] bg-gray-100 overflow-hidden ">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={400}
                  height={800}
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>

              {/* content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                <p className="text-sm text-gray-500 mb-4 ">{p.subtitle}</p>

                <ul className="space-y-3">
                  {p.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-3">
                      <div className="shrink-0 mt-1 w-6 h-6">
                        <Image
                          src={f.icon}
                          alt={f.text}
                          width={20}
                          height={20}
                          className="object-contain "
                        />
                      </div>
                      <span className="text-sm text-gray-700">{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
