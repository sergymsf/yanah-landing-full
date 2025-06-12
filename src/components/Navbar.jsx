import React, { useState, useEffect } from "react";
import logo from "../assets/yanah.png";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="flex items-center justify-between p-4 bg-green-800 dark:bg-gray-900 shadow-md transition-colors duration-500">
      <img src={logo} alt="Yanah Logo" className="h-12" />

      <ul className="hidden md:flex space-x-6 font-semibold text-[#f6eee0]">
        <li><a href="#categories">Categories</a></li>
        <li><a href="#featured">Top Videos</a></li>
        <li><a href="#submit">Submit</a></li>
      </ul>

      {/* Theme Toggle Icon */}
      <button
        onClick={() => setDark(!dark)}
        className="ml-4 p-2 rounded-full text-[#f6eee0] hover:bg-green-900 dark:hover:bg-gray-800 transition-colors duration-300"
        aria-label="Toggle dark mode"
      >
        {dark ? <Sun size={22} /> : <Moon size={22} />}
      </button>
    </nav>
  );
}
