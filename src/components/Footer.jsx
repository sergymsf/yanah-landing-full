import React from "react";
import logo from "../assets/yanah.png";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-6 text-center">
      <img src={logo} alt="Yanah Logo" className="h-10 mx-auto mb-2" />
      <p>&copy; {new Date().getFullYear()} Yanah. All rights reserved.</p>
    </footer>
  );
}