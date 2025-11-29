import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";      
import Testimonials from "./components/Testimonials";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-root">
      <Header />

      <main>
        <Hero />

        {/* core intro */}
        <About />

        {/* skills & featured work */}
        <Skills />
        <Projects />      {/* only the two main projects from your screenshot */}

        {/* social proof and background */}
        <Testimonials />

        {/* academic background & credentials */}
        <Education />
        <Certifications />

        {/* content to lengthen the page further */}
        <FAQ />
        

        {/* contact at the end */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
