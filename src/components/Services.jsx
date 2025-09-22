export default function Services() {
    const services = [
      {
        icon: "📈",
        title: "Strategic Planning",
        description:
          "Develop comprehensive business strategies to achieve your organizational goals.",
      },
      {
        icon: "👨‍💼",
        title: "Management Consulting",
        description:
          "Expert advice to improve business performance and operational efficiency.",
      },
      {
        icon: "⚙️",
        title: "Process Optimization",
        description:
          "Streamline your business processes for maximum efficiency and productivity.",
      },
      {
        icon: "📊",
        title: "Market Analysis",
        description:
          "In-depth market research and analysis to guide your decisions.",
      },
      {
        icon: "🤝",
        title: "Business Development",
        description:
          "Create and implement effective growth strategies for your business.",
      },
      {
        icon: "💡",
        title: "Innovation Consulting",
        description:
          "Transform your business through innovative approaches and solutions.",
      },
    ];
  
    return (
      <section id="services" className="py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our <span className="text-purple-500">Services</span>
          </h2>
          <p className="text-gray-400 mb-12">
            We offer a comprehensive range of consulting services to help your business thrive in today’s competitive market.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 surface text-white rounded-2xl shadow-md hover:shadow-lg transition border border-subtle"
              >
                <div className="text-4xl text-purple-700 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  