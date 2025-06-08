import React from "react";

export default function SubmitSection() {
  return (
    <section id="submit" className="py-16 px-6 bg-white dark:bg-gray-900 text-center transition-colors">
      <h2 className="text-3xl font-bold text-green-900 dark:text-green-100 mb-4">
        Got a Video to Share?
      </h2>
      <p className="text-green-700 dark:text-green-300 mb-6">
        Join the community and submit your favorite clips.
      </p>
      <a  href="https://www.instagram.com/direct/t/17846561988495787/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 transition">
        Submit a Video
      </a>

    </section>
  );
}
