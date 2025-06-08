import React from "react";

export default function FeaturedVideos() {
  return (
    <section id="featured" className="py-16 px-6 bg-green-50 dark:bg-gray-800 transition-colors">
      <h2 className="text-3xl font-bold text-center text-green-900 dark:text-green-100 mb-8">
        Top Videos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[1, 2, 3].map(i => (
          <div
            key={i}
            className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg shadow flex items-center justify-center text-green-600 dark:text-green-200"
          >
            <p>Video {i}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
