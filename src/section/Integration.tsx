export default function Integration() {
  const items = [
    {
      title: "The Unmanned Urban Grocery",
      body:
        "A small, 24/7 unmanned grocery store becomes a lifeline for busy urbanites. Customers use the Shopping App to gain entry through the Door Controller, browse products including fresh items from Smart Fridges, and checkout seamlessly while AI Security monitors the space.",
      products: ["Door Controller", "Shopping App", "Smart Fridges", "AI Security"],
    },
    {
      title: "The Automated Stadium",
      body:
        "A major sports stadium manages high-volume traffic with Smart Self-Checkout and Vending Machines strategically placed throughout. Digital Signage displays live updates and promotions, while the ERP Platform manages real-time inventory and sales data.",
      products: ["Smart Self-Checkout", "Vending Machines", "Digital Signage", "ERP Platform"],
    },
    {
      title: "The Smart Office Building",
      body:
        "A modern office building features a smart micro-market with Smart Fridges and Vending Machines for 24/7 employee access. Building Automation optimizes energy use while Door Controllers provide secure access to the area.",
      products: ["Smart Fridges", "Vending Machines", "Building Automation", "Door Controllers"],
    },
  ];

  return (
    <section id="integration" className="py-20 bg-[#37c659] text-black">
      <div className="max-w-6xl mx-auto px-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Synergy in Action: The Power of Integration
          </h2>
          <p className="mt-4 text-lg text-[#071b47]/70 max-w-3xl mx-auto">
            Real-world examples of how our ecosystem components work together
          </p>
        </div>

        {/* Cards grid */}
        <div className="flex flex-col gap-2">
          {items.map((it, idx) => (
            <article
              key={idx}
              className="relative rounded-lg overflow-hidden "
            >
              
              <div className=" p-2 rounded-lg">
                <div className="bg-[#050505] rounded-md border border-[#0f2a18]/40 overflow-hidden">
                  <div className="px-7 py-5">
                    {/* Title */}
                    <h3 className="text-2xl md:text-2xl font-bold text-[#37c659]">{it.title}</h3>

                    {/* Body */}
                    <p className="mt-4 text-gray-300 leading-relaxed text-base md:text-lg max-w-3xl">
                      {it.body}
                    </p>

                    
                    <div className="border-t border-gray-700/60 my-6" />

                    
                    <div className="flex flex-wrap gap-3">
                      {it.products.map((p, i) => (
                        <span
                          key={i}
                          className="inline-block text-sm text-[#959595] bg-[#062016]/10  "
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
