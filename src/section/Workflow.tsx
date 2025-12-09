export default function Workflow() {
  const steps = [
    {
      id: 1,
      title: "Consultation",
      desc: "We analyze your needs and design a tailored solution",
    },
    {
      id: 2,
      title: "Integration",
      desc: "Seamless installation of hardware and software systems",
    },
    {
      id: 3,
      title: "Automation",
      desc: "Systems connect and create intelligent, automated experiences",
    },
    {
      id: 4,
      title: "Optimization",
      desc: "Continuous monitoring and improvement for peak performance",
    },
  ];

  return (
    <section id="workflow" className="py-20 bg-white text-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-center ">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg text-center">
            Our proven implementation process ensures seamless integration and
            rapid time-to-value
          </p>
        </div>

        {/* timeline */}
        <div className="relative">
          <div className="space-y-6">
            {steps.map((s, idx) => (
              <div key={s.id} className="flex items-start gap-3">
                <div className="flex flex-col items-center w-28 md:w-24">
                  {/* circle */}
                  <div
                    className="w-16 h-16 rounded-full bg-[#37c659] flex items-center justify-center text-black font-semibold text-2xl"
                    aria-hidden
                  >
                    {s.id}
                  </div>

                  {idx !== steps.length - 1 && (
                    <div className="w-1 h-10  bg-[#37c659]/90 mt-3" />
                  )}
                </div>

                {/* right column: content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
