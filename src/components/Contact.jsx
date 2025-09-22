"use client";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });
    try {
      const res = await fetch("http://localhost:4000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Failed to send message");
      }

      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Something went wrong" });
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Contact <span className="text-purple-600">Us</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Ready to transform your business? Get in touch with our team of experts today.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        <div className="surface shadow-xl rounded-2xl p-8 border border-subtle">
          <h2 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border border-subtle rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-white placeholder:text-gray-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border border-subtle rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-white placeholder:text-gray-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border border-subtle rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-white placeholder:text-gray-500"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-transparent border border-subtle rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-white placeholder:text-gray-500"
            />
            <textarea
              rows="4"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border border-subtle rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-white placeholder:text-gray-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition font-medium shadow-md"
            >
              {status.type === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status.type === "success" && (
              <p className="text-green-400 text-sm">{status.message}</p>
            )}
            {status.type === "error" && (
              <p className="text-red-400 text-sm">{status.message}</p>
            )}
          </form>
        </div>
        <div className="flex flex-col justify-center surface shadow-xl rounded-2xl p-8 border border-subtle">
          <h2 className="text-2xl font-semibold mb-6 text-white">Contact Information</h2>

          <div className="space-y-6 text-gray-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg" style={{background:"var(--color-accent-weak)"}}>
                <MapPin className="text-purple-500 w-6 h-6" />
              </div>
              <p>
                <strong>Our Office</strong> <br />
                123 H.M Boys Pg <br />
                Makarba, 380051 <br />
                India
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg" style={{background:"var(--color-accent-weak)"}}>
                <Phone className="text-purple-500 w-6 h-6" />
              </div>
              <p>+91 XXXXXXXXX</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg" style={{background:"var(--color-accent-weak)"}}>
                <Mail className="text-purple-500 w-6 h-6" />
              </div>
              <p>info@BrightPath.com</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Business Hours</h2>
          <ul className="text-gray-300 space-y-1">
            <li>Monday - Friday: 9:00 AM – 6:00 PM</li>
            <li>Saturday: 10:00 AM – 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
