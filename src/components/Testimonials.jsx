export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "BrightPath transformed our business operations completely. Their strategic insights and implementation support helped us achieve remarkable growth.",
      name: "Yashrajsinh Zala",
      role: "CEO,MAHINDRA.LTD",
    },
    {
      quote:
        "Working with BrightPath was a game-changer for our company. Their expertise and dedication to our success exceeded our expectations.",
      name: "Raj Radadiya",
      role: "Director, TATA.LTD",
    },
    {
      quote:
        "The team at BrightPath provided invaluable guidance during our critical growth phase. Their insights were instrumental to our success.",
      name: "Vivek Malviya",
      role: "Founder, volkswagen.LTD",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-black text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          Client <span className="text-purple-600">Testimonials</span>
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mt-2"></div>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Don’t just take our word for it – hear what our clients have to say 
          about their experience working with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20">
        {testimonials.map((t, index) => (
          <div key={index} className="surface rounded-lg shadow-md p-6 text-left border border-subtle">
            <span className="text-purple-500 text-3xl">&quot;</span>
            <p className="text-gray-300 italic mb-4">“{t.quote}”</p>
            <div className="mt-4">
              <p className="font-bold text-white">{t.name}</p>
              <p className="text-sm text-gray-400">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
