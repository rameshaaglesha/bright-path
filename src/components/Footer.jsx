"use client";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-950 to-black text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-10">
        
        <div>
          <h2 className="text-2xl font-bold text-purple-400">BrightPath Consulting</h2>
          <p className="text-sm mt-2 text-gray-400">
            Your Path. Our Guidance
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-purple-400">Home</a></li>
            <li><a href="#about" className="hover:text-purple-400">About Us</a></li>
            <li><a href="#services" className="hover:text-purple-400">Services</a></li>
            <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li>123 H.M Boys Pg</li>
            <li>Phone: +91 XXXXXXXXX</li>
            <li>Email: info@BrightPath.com</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex flex-wrap gap-4 ml-17">
            <Linkedin className="w-6 h-6 cursor-pointer hover:text-purple-400 transition" />
            <Twitter className="w-6 h-6 cursor-pointer hover:text-purple-400 transition" />
            <Facebook className="w-6 h-6 cursor-pointer hover:text-purple-400 transition" />
            <Instagram className="w-6 h-6 cursor-pointer hover:text-purple-400 transition" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-400">
        <p>© 2025 BrightPath Consulting. All rights reserved.</p>
        <p>
          Powered By:{""}
          <a
            href="#"
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            Rameshh
          </a>
        </p>
      </div>
    </footer>
  );
}
