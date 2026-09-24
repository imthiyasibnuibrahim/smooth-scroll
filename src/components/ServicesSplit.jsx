import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesSplit() {
  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        
        {/* Weddings Column */}
        <motion.div 
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="glass p-10 rounded-3xl relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold to-yellow-200 opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Premium Wedding <span className="text-accent-gold">Invites</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed font-sans">
            Ditch the paper. We build multi-day event timelines, integrated Google Maps routing, and AI-generated video welcomes. Make your first impression unforgettable.
          </p>
        </motion.div>

        {/* Portfolios Column */}
        <motion.div 
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="glass p-10 rounded-3xl relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan to-blue-400 opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Interactive Portfolios
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed font-sans">
            Stand out to clients and recruiters. Lightning-fast, React-powered personal websites built for impact and performance. Your work deserves a cinematic stage.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
