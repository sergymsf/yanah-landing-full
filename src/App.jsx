import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedVideos from './components/FeaturedVideos';
import SubmitSection from './components/SubmitSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="transition-colors duration-500 bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <Hero />
      <FeaturedVideos />
      <Categories />
      <SubmitSection />
      <Footer />
    </div>
  );
}
