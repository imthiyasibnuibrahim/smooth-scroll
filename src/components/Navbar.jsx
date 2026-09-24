import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 100 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { name: 'Services', href: '#services' },
    { name: 'Tech Edge', href: '#tech' },
    { name: 'Work', href: '#work' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter text-white">
          Smooth<span className="text-accent-cyan">Scroll</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-sm text-neutral-300 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#contact" className="bg-white text-neutral-950 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors">
            Start a Project
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-6 right-6 glass rounded-2xl p-6 flex flex-col gap-4"
        >
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-neutral-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="bg-white text-neutral-950 px-5 py-3 rounded-xl text-center font-semibold mt-2"
          >
            Start a Project
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
