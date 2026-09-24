import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      {/* Background glowing blob */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/20 rounded-full blur-[120px] -z-10"
      />

      <motion.div 
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <span className="glass px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-neutral-300 border border-white/10 uppercase">
            ✧ Premium Wedding Invites | ✧ Interactive Portfolios | ✧ Smart RSVP Dashboards
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6"
        >
          Beautifully Coded <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
            Digital Experiences.
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We engineer cinematic digital wedding invitations and high-performance interactive portfolios. No generic templates—just pure digital craftsmanship.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#work" className="w-full sm:w-auto bg-white text-neutral-950 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform">
            View Our Work
          </a>
          <a href="#contact" className="w-full sm:w-auto glass text-white px-8 py-4 rounded-full font-semibold hover:bg-neutral-800 transition-colors">
            Book a Consultation
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
