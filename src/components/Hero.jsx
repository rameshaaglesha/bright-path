import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center text-white bg-[#0a0a0a]">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/90" />
      </div>

      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full px-8 py-4 flex items-center justify-between backdrop-blur-md bg-[#1a1a1a]/90 z-20">
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Pathfinder Consultancy"
            className="h-10"
          />
          <span className="text-sm text-gray-300 font-semibold">Your Path. Our Guidance</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-100 font-medium text-lg">
          <a href="#home" className="hover:text-purple-500 transition-all duration-300 border-b-2 border-transparent hover:border-purple-500">Home</a>
          <a href="#about" className="hover:text-purple-500 transition-all duration-300 border-b-2 border-transparent hover:border-purple-500">About</a>
          <a href="#services" className="hover:text-purple-500 transition-all duration-300 border-b-2 border-transparent hover:border-purple-500">Services</a>
          <a href="#contact" className="hover:text-purple-500 transition-all duration-300 border-b-2 border-transparent hover:border-purple-500">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-100">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-16 right-0 w-full bg-[#1a1a1a]/95 backdrop-blur-md flex flex-col items-center py-6 md:hidden space-y-4 text-lg font-medium z-20">
          <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-purple-500 transition">Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-purple-500 transition">About</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-purple-500 transition">Services</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-purple-500 transition">Contact</a>
        </nav>
      )}

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Transform Your Business With{" "}
          <span className="text-purple-500">Strategic Solutions</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          We help businesses achieve exceptional growth through innovative
          strategies and expert consultation.
        </p>
        <div className="mt-6">
          <a
            href="#services"
            className="px-6 py-3 bg-white hover:bg-cyan-100 rounded-lg shadow-lg text-white font-medium transition"
          >
            Get Started →
          </a>
        </div>
      </div>
    </section>
  );
}
