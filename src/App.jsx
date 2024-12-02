import React from "react";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import About from "./components/About";
import Features from "./components/features";
import FeatureSection from "./components/featuresection";
import FAQSection from "./components/Faqsection";
import GallerySection from "./components/Gallery";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Features />
      <FeatureSection />
      <FAQSection />
      <GallerySection />
      <Footer />
    </div>
  );
}

export default App;
