import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Categories from './Categories';
import FeaturedVideos from './FeaturedVideos';
import VideoUploadForm from './VideoUploadForm';
import SubmitSection from './SubmitSection';
import Footer from './Footer';

export default function App() {
  return (
    <div className="transition-colors duration-500 bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <Hero />
      <FeaturedVideos />
      <Categories />
      {/* <VideoUploadForm /> */}
      <SubmitSection />
      <Footer />
    </div>
  );
}