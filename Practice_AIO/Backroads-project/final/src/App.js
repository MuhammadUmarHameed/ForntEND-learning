import React from 'react';
import './index.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Tour from './component/Tour';
import Services from './component/Service';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <React.Fragment>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Tour />
        <Contact />
        <Footer />
      </React.Fragment>
    </>
  );
}

export default App;
