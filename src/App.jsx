import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

import Home from "./pages/Home";
import About from "./pages/About";
import TextToSpeechPage from "./pages/TextToSpeechPage";
import Contact from "./pages/Contact";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import BottemFooter from "./components/ui/BottemFooter";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonial" element={<TextToSpeechPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <BottemFooter />
    </div>
  );
}

export default App;
