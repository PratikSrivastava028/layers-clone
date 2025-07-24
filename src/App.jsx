// src/App.jsx
import React from 'react';
import Hero from './components/Hero';
import './index.scss'; // if you have global styles
import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";
import About from "./components/About";
import './styles/main.scss'; // main styles
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Products from "./components/Products"; 
import './styles/main.scss'; // main styles
import './components/Navbar.scss'; // Navbar styles
import './components/Hero.scss'; // Hero styles
import './components/About.scss'; // About styles
import './components/ProductSection.scss'; // ProductSection styles
import './components/Gallery.scss'; // Gallery styles
import './components/Contact.scss'; // Contact styles
import './styles/main.scss'; // main styles
import './components/Products.scss'; // Products styles
import './components/Footer.scss'; // Footer styles
import Footer from "./components/Footer"; // Footer component



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ProductSection />
      <Products />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;