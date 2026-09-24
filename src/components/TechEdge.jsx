import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Zap, Globe } from 'lucide-react';

export default function TechEdge() {
  const features = [
    {
      icon: <LayoutDashboard size={32} className="text-accent-cyan" />,
      title: "Smart RSVP Dashboards",
      description: "Live tracking for your guest list. Collect dietary preferences and automate WhatsApp updates instantly."
    },
    {
      icon: <Zap size={32} className="text-accent-gold" />,
      title: "Built for Scale",
      description: "Engineered with modern web architectures (React/Vite) for perfect Lighthouse performance scores."
    },
    {
      icon: <Globe size={32} className="text-neutral-300" />,
      title: "Custom Domains",
      description: "Your name, your brand. We handle the .com or .in setup, SSL certificates, and lightning-fast hosting."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="tech" className="py-24 px-6 bg-neutral-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Smarter Tools Under the Hood.</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">We don't just build pretty pages. We engineer robust digital solutions that work flawlessly.</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={item} className="glass p-8 rounded-3xl border border-neutral-800 hover:border-neutral-700 transition-colors">
              <div className="bg-neutral-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
