import React from "react";
import Hero from "../components/ui/Hero";
import ServicesSection from "../components/ui/ServicesSection";
import OurServices from "../components/ui/OurServices";
import Footers from "../components/ui/Footers";

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
