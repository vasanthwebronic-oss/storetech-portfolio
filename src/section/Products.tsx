import ProductCard from "@/components/common/ProductCard";

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
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
            The Core Integrated Ecosystem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl">
            Comprehensive solutions that work together seamlessly
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard
              key={p.title}
              img={p.img}
              title={p.title}
              subtitle={p.subtitle}
              features={p.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
