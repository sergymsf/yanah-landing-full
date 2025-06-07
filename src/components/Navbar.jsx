import React from "react";
import logo from "../assets/yanah.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <img src={logo} alt="Yanah Logo" className="h-12" />
      <ul className="hidden md:flex space-x-6 text-green-800 font-semibold">
        <li><a href="#categories">Categories</a></li>
        <li><a href="#featured">Top Videos</a></li>
        <li><a href="#submit">Submit</a></li>
      </ul>
    </nav>
  );
}