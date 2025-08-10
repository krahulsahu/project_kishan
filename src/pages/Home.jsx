import React from "react";
import Hero from "../components/ui/Hero";
import ServicesSection from "../components/ui/ServicesSection";
import OurServices from "../components/ui/OurServices";
import Footers from "../components/ui/Footers";
import LiveDemo from "../components/ui/LiveDemo";
import PortfolioShowcase from "../components/ui/PortfolioShowcase";
import Testimonials from "../components/ui/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <OurServices />
      <ServicesSection />
      <LiveDemo />
      <PortfolioShowcase />
      <Testimonials />
      <Footers/>
    </div>
  );
};

export default Home;
