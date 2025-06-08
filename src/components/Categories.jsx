import React from "react";

const categories = ["Funny", "Emotional", "Educational", "Inspiring", "Music", "Sports"];

export default function Categories() {
  return (
    <section id="categories" className="py-16 px-6 bg-white dark:bg-gray-900 transition-colors">
      <h2 className="text-3xl font-bold text-center text-green-900 dark:text-green-100 mb-8">
        Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {categories.map(cat => (
          <div
            key={cat}
            className="bg-green-100 dark:bg-green-700 text-center p-6 rounded-lg shadow hover:scale-105 transition text-green-800 dark:text-green-100"
          >
            <p className="text-lg font-semibold">{cat}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
