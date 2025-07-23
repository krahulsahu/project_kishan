import React from "react";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import OurServices from "../components/OurServices";
import Footers from "../components/Footers";

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <OurServices />
      <ServicesSection />
      <Footers/>
    </div>
  );
};

export default Home;
