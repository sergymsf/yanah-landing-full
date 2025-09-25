import React from "react";
import logo from "../assets/yanah.png";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-6 text-center dark:bg-gray-900 transition-colors">
      <img src={logo} alt="Yanah Logo" className="h-10 mx-auto mb-2" />
      <p className="text-sm text-white/80">&copy; {new Date().getFullYear()} Yanah. All rights reserved.</p>
    </footer>
  );
}
