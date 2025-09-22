export default function Approach() {
    const steps = [
      {
        icon: "🔍",
        title: "Discover",
        description:
          "We start by understanding your business, goals, and challenges.",
      },
      {
        icon: "⚙️",
        title: "Analyze",
        description:
          "Our experts analyze the data and develop tailored strategies.",
      },
      {
        icon: "🚀",
        title: "Implement",
        description:
          "We work with you to implement the solutions effectively.",
      },
      {
        icon: "📊",
        title: "Measure",
        description:
          "We continuously monitor and optimize for the best results.",
      },
    ];
  
    return (
      <section id="approach" className="py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Our <span className="text-purple-500">Approach</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 surface rounded-2xl shadow-md hover:shadow-lg transition border border-subtle"
              >
                <div className="text-5xl text-purple-500 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  