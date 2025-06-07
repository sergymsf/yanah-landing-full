import React from "react";

export default function SubmitSection() {
  return (
    <section id="submit" className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-green-900 mb-4">Got a Video to Share?</h2>
      <p className="text-green-700 mb-6">Join the community and submit your favorite clips.</p>
      <button className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800">Submit a Video</button>
    </section>
  );
}