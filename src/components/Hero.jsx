import React from "react";

export default function Hero() {
  return (
    <section className="text-center py-20 bg-green-50">
      <h1 className="text-4xl md:text-6xl font-bold text-green-900">Welcome to Yanah</h1>
      <p className="mt-4 text-lg text-green-700">A place to discover videos people love to share</p>
      <a href="#categories" className="mt-6 inline-block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800">Explore Videos</a>
    </section>
  );
}