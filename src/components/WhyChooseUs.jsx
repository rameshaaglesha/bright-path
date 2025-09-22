export default function WhyChooseUs() {
    const reasons = [
      {
        icon: "🏆",
        title: "Proven Track Record",
        description:
          "2+ years of success in business consulting with measurable results.",
      },
      {
        icon: "👨‍💼",
        title: "Expert Team",
        description:
          "Seasoned consultants with diverse industry experience and expertise.",
      },
      {
        icon: "📊",
        title: "Data-Driven Approach",
        description:
          "Strategic decisions backed by thorough research and analytics.",
      },
      {
        icon: "⏱️",
        title: "Timely Delivery",
        description:
          "Committed to delivering results within agreed timeframes.",
      },
      {
        icon: "🤝",
        title: "Tailored Solutions",
        description:
          "Customized strategies that align with your unique business needs.",
      },
      {
        icon: "🌍",
        title: "Global Perspective",
        description:
          "International experience with local market understanding.",
      },
    ];
  
    return (
      <section id="why-choose-us" className="py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose <span className="text-purple-500">Us</span>
          </h2>
          <p className="text-gray-400 mb-12">
            Partner with us to experience the difference that strategic expertise and dedicated support can make.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-6 surface text-white rounded-2xl shadow-md hover:shadow-lg transition border border-subtle"
              >
                <div className="text-4xl text-purple-700 mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  