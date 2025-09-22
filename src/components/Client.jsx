export default function Clients() {
  const clients = [
    "logo.png",
    "logo.png",
    "logo.png",
    "logo.png",
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          Our <span className="text-purple-600">Clients</span>
        </h2>
        <div className="w-20 h-1 bg-purple-600 mx-auto mt-2"></div>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          We're proud to work with leading companies across various industries, 
          helping them achieve their business goals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-20">
        {clients.map((logo, index) => (
          <div key={index} className="surface rounded-lg shadow-md p-6 flex justify-center items-center border border-subtle">
            <img src={logo} alt={`Client ${index + 1}`} className="h-12" />
          </div>
        ))}
      </div>
    </section>
  );
}
