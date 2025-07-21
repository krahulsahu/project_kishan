import React from 'react'
import Hero from '../components/Hero';
import ToolsSection from '../components/ToolsSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <ToolsSection />
      <ServicesSection />
      <Footer/>
    </div>
  );
}

export default Home
