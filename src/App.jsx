import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSplit from './components/ServicesSplit';
import TechEdge from './components/TechEdge';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-neutral-950 min-h-screen selection:bg-accent-cyan selection:text-neutral-950 font-sans text-neutral-100">
      <Navbar />
      <main>
        <Hero />
        <ServicesSplit />
        <TechEdge />
        <Showcase />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
