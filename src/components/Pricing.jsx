import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('weddings');

  const pricingData = {
    weddings: [
      {
        name: "The Essential Scroll",
        oldPrice: "₹3,999",
        price: "₹3,499",
        features: ["Single-page mobile-first", "Event timings", "Venue maps", "Photo gallery"],
        popular: false
      },
      {
        name: "The Signature Story",
        oldPrice: "₹8,999",
        price: "₹7,499",
        features: ["How We Met timeline", "Automated RSVP tracking", "Custom domain (.in)", "Background music"],
        popular: true
      },
      {
        name: "The Cinematic Scroll",
        oldPrice: "₹18,999",
        price: "₹14,999",
        features: ["AI-generated video", "Advanced scroll animations", "Password protection", "Live countdown"],
        popular: false
      }
    ],
    portfolios: [
      {
        name: "The Template Series",
        price: "₹3,000",
        suffix: " setup",
        features: ["Deployed in 24 hours", "Blazing fast performance", "Perfect for students", "Standard SEO"],
        popular: false
      },
      {
        name: "The Custom Build",
        price: "Custom Quote",
        features: ["Tailored UI/UX design", "Headless CMS integration", "Built from scratch", "Advanced analytics"],
        popular: true
      }
    ]
  };

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Simple, Transparent Pricing.</h2>
          
          {/* Toggle */}
          <div className="inline-flex bg-neutral-900/50 p-1 rounded-full border border-neutral-800 backdrop-blur-md relative">
            <button 
              onClick={() => setActiveTab('weddings')}
              className={`relative px-8 py-3 rounded-full text-sm font-semibold transition-colors z-10 ${activeTab === 'weddings' ? 'text-neutral-950' : 'text-neutral-400 hover:text-white'}`}
            >
              Weddings
            </button>
            <button 
              onClick={() => setActiveTab('portfolios')}
              className={`relative px-8 py-3 rounded-full text-sm font-semibold transition-colors z-10 ${activeTab === 'portfolios' ? 'text-neutral-950' : 'text-neutral-400 hover:text-white'}`}
            >
              Portfolios
            </button>
            {/* Active Indicator */}
            <motion.div 
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full z-0"
              initial={false}
              animate={{ 
                left: activeTab === 'weddings' ? '4px' : 'calc(50% + 2px)',
                width: activeTab === 'weddings' ? 'calc(50% - 4px)' : 'calc(50% - 4px)'
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`grid gap-8 ${activeTab === 'weddings' ? 'md:grid-cols-3' : 'md:grid-cols-2 max-w-4xl w-full'}`}
            >
              {pricingData[activeTab].map((plan, idx) => (
                <div 
                  key={idx} 
                  className={`relative glass p-8 rounded-3xl flex flex-col ${plan.popular ? 'border-accent-cyan/50 ring-1 ring-accent-cyan/20' : 'border-neutral-800'}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-cyan text-neutral-950 px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                      Best Value
                    </div>
                  )}
                  <h3 className="text-xl font-medium text-neutral-300 mb-2">{plan.name}</h3>
                  <div className="mb-6 flex flex-col justify-center">
                    {plan.oldPrice && (
                      <span className="text-lg font-medium text-neutral-500 line-through decoration-red-500/70 decoration-2 mb-1">
                        {plan.oldPrice}
                      </span>
                    )}
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      {plan.suffix && <span className="text-neutral-400 text-sm ml-1">{plan.suffix}</span>}
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-neutral-300">
                        <Check size={18} className="text-accent-cyan shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={`https://wa.me/917558089857?text=${encodeURIComponent(`Hi Smooth Scroll! I'm interested in the '${plan.name}' package (${plan.price}). Can we discuss the details?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center w-full py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-white text-neutral-950 hover:bg-neutral-200' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
