import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./audio_ai/pages/Home";
import About from "./audio_ai/pages/About";
import Testimonial from "./audio_ai/pages/Testimonial";
import Contact from "./audio_ai/pages/Contact";
import LoginPage from "./audio_ai/components/LoginPage";
import SignupPage from "./audio_ai/components/SignupPage";
import NotFound from "./audio_ai/pages/NotFound";
import Navigation from "./audio_ai/components/Navigation";

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
