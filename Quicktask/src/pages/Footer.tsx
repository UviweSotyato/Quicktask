// src/components/Footer.tsx
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-[#141414] border-t border-gray-800 text-gray-400 py-8 px-6 relative overflow-hidden">
      {/* Glowing accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow one opacity-20"></div>
        <div className="glow two opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-gray-200">Quicktask</h2>
          <p className="text-sm mt-1">Empowering your productivity, one task at a time.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-100 transition">Home</a>
          <a href="#" className="hover:text-gray-100 transition">Features</a>
          <a href="#" className="hover:text-gray-100 transition">About</a>
          <a href="#" className="hover:text-gray-100 transition">Contact</a>
        </div>

        <div className="text-center md:text-right text-sm">
          &copy; {year} Quicktask. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
