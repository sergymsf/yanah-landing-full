import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedVideos from './components/FeaturedVideos';
import SubmitSection from './components/SubmitSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedVideos />
      <SubmitSection />
      <Footer />
    </>
  );
}