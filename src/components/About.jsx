export default function About() {
  return (
    <section id="about" className="py-16 bg-black text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About <span className="text-purple-600">Us</span>
          </h2>
          <div className="mt-2 w-24 h-1 bg-purple-600 mx-auto rounded"></div>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            With over 3 years of experience, we've helped many businesses achieve 
            their full potential through strategic consulting and innovative solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/about-img.jpg"
              alt="Strategic Growth"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Empowering Your Business Success
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              We are dedicated to helping businesses thrive in today's competitive
              landscape. Our team of experts brings together years of experience and
              innovative thinking to deliver exceptional results for our clients.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you're looking to scale your operations, optimize processes, or 
              enter new markets, we provide the strategic guidance and practical 
              solutions you need to succeed.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="surface shadow-md rounded-xl p-8 text-center hover:shadow-lg transition">
            <div className="text-purple-600 text-4xl mb-4">📈</div>
            <h4 className="text-xl font-bold mb-2">Strategic Growth</h4>
            <p className="text-gray-400">
              We develop customized strategies to drive sustainable business growth
              and maximize your market potential.
            </p>
          </div>
          <div className="surface shadow-md rounded-xl p-8 text-center hover:shadow-lg transition">
            <div className="text-purple-600 text-4xl mb-4">💡</div>
            <h4 className="text-xl font-bold mb-2">Innovative Solutions</h4>
            <p className="text-gray-400">
              Our innovative approach combines industry best practices with cutting-edge
              solutions for optimal results.
            </p>
          </div>
          <div className="surface shadow-md rounded-xl p-8 text-center hover:shadow-lg transition">
            <div className="text-purple-600 text-4xl mb-4">🤝</div>
            <h4 className="text-xl font-bold mb-2">Trusted Partnership</h4>
            <p className="text-gray-400">
              We build long-lasting partnerships with our clients, ensuring continuous
              support and success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
