export default function HowItWorks() {
    const steps = [
      {
        icon: "🔍",
        number: "01",
        title: "Discovery",
        description:
          "We begin by understanding your business, challenges, and goals through in-depth consultation.",
      },
      {
        icon: "💡",
        number: "02",
        title: "Strategy Development",
        description:
          "Our experts develop a customized strategy tailored to your specific needs and objectives.",
      },
      {
        icon: "⚙️",
        number: "03",
        title: "Implementation",
        description:
          "We work closely with your team to implement solutions and drive results.",
      },
      {
        icon: "🚀",
        number: "04",
        title: "Growth & Monitoring",
        description:
          "Continuous monitoring and adjustment of strategies to ensure long-term success.",
      },
    ];
  
    return (
      <section id="how-it-works" className="py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            How It <span className="text-purple-500">Works</span>
          </h2>
          <p className="text-gray-400 mb-12">
            Our proven four-step process ensures successful transformation and growth for your business.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="./HowItWorks.png"
                alt="How it works process"
                className="rounded-2xl shadow-md"
              />
            </div>
  
            <div className="grid grid-cols-1 gap-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative p-6 surface rounded-2xl shadow hover:shadow-lg transition text-left border border-subtle"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl text-purple-500">{step.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                  <span className="absolute top-4 right-6 text-4xl font-bold" style={{color:"rgba(124,58,237,0.15)"}}>
                    {step.number}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  