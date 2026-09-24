import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-24 pb-12 px-6 border-t border-neutral-800 bg-neutral-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-gold/5 rounded-t-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Ready to build something memorable?</h2>
        <p className="text-neutral-400 text-lg mb-10">Leave your details below and we'll reach out within 24 hours.</p>

        <form action="https://formsubmit.co/thesmoothscroll@gmail.com" method="POST" className="text-left bg-neutral-900/50 backdrop-blur-xl p-8 rounded-3xl border border-neutral-800 shadow-2xl">
          {/* FormSubmit Config */}
          <input type="hidden" name="_subject" value="New Lead from Smooth Scroll!" />
          <input type="hidden" name="_captcha" value="false" />
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-neutral-400 font-medium">Name</label>
              <input 
                type="text" 
                name="Name"
                placeholder="John Doe" 
                className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neutral-600 transition-colors"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-neutral-400 font-medium">WhatsApp Number</label>
              <input 
                type="tel" 
                name="WhatsApp"
                placeholder="+91 75580 89857" 
                className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neutral-600 transition-colors"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-neutral-400 font-medium">Project Type</label>
              <select name="Project_Type" className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neutral-600 transition-colors appearance-none">
                <option>Wedding Invite</option>
                <option>Portfolio</option>
                <option>Photographer Partnership</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-neutral-400 font-medium">Launch Deadline</label>
              <input 
                type="date" 
                name="Launch_Deadline"
                className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neutral-600 transition-colors"
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-white text-neutral-950 py-4 rounded-xl font-bold text-lg hover:bg-neutral-200 transition-colors">
            Let's Talk
          </button>
        </form>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-900 text-sm text-neutral-500">
        <p>© 2026 Smooth Scroll. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://x.com/smoothscroll0" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
          <a href="https://www.instagram.com/smooth__scroll?stkn=M2NjNmQ0ZXBqdTVv" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a 
        href="https://wa.me/917558089857" 
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl z-50 hover:bg-green-400 transition-colors"
      >
        <MessageCircle size={28} />
      </motion.a>
    </footer>
  );
}
