"use client";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
  {
    name: "Vivek Malviya",
    role: "CEO & Founder",
    desc: "15+ years of consulting experience with Fortune 500 companies",
    img: "/vivek.jpg",
  },
  {
    name: "YASHRAJSINH ZALA",
    role: "Strategy Director",
    desc: "Expert in business transformation and growth strategies",
    img: "/yash.jpg",
  },
  {
    name: "Raj Radadiya",
    role: "Operations Manager",
    desc: "Specialist in process optimization and efficiency improvement",
    img: "/raj.jpg",
  },
  {
    name: "Parth Raval",
    role: "Financial Consultant",
    desc: "Expert in financial strategy and investment planning",
    alt: "----------dark parth",
    img: "/parth.jpg",
  },
];

export default function Team() {
  return (
    <section id="team" className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold mb-2 text-center">
        Meet Our <span className="text-purple-500">Team</span>
      </h1>
      <p className="text-gray-400 mb-12 text-center max-w-3xl mx-auto">
        Our team of experienced professionals is dedicated to delivering exceptional results for our clients.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center border border-gray-800 hover:shadow-xl transition"
          >
            <img
              src={member.img}
              alt={member.alt}
              className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-purple-500"
            />
            <h2 className="font-bold text-lg">{member.name}</h2>
            <p className="text-purple-400 font-medium">{member.role}</p>
            <p className="text-sm text-gray-400 text-center mt-2">{member.desc}</p>

            <div className="flex gap-4 mt-4 text-gray-400">
              <Linkedin className="w-5 h-5 hover:text-purple-400 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-purple-400 cursor-pointer" />
              <Mail className="w-5 h-5 hover:text-purple-400 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
