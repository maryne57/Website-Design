import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const CEREMONIES = [
  {
    title: 'Full Moon Sound Bath',
    date: 'May 24, 2026',
    description: 'A deep immersion into celestial frequencies and collective release.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Equinox Cacao Ritual',
    date: 'June 21, 2026',
    description: 'Honoring the shift of seasons through heart-opening plant medicine and movement.',
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1000&auto=format&fit=crop'
  }
];

export const Ceremonies = () => {
  return (
    <section id="ceremonies" className="bg-earth py-24 md:py-40 text-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase opacity-40 mb-6 block">Special Events</span>
            <h2 className="editorial-title text-offwhite italic">Ritual & Ceremony</h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-24">
          {CEREMONIES.map((ceremony, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/9] mb-10 overflow-hidden rounded-2xl transform transition-transform duration-700 group-hover:rotate-1">
                <img 
                  src={ceremony.image} 
                  alt={ceremony.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-earth/20 group-hover:bg-earth/0 transition-colors duration-500" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-sans text-[10px] tracking-widest uppercase opacity-40 mb-3 block">{ceremony.date}</span>
                  <h3 className="text-3xl md:text-4xl font-serif italic mb-4 group-hover:pl-4 transition-all duration-300">{ceremony.title}</h3>
                  <p className="max-w-md opacity-60 font-sans text-sm leading-relaxed mb-8">{ceremony.description}</p>
                  <button className="flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase text-terracotta group-hover:gap-4 transition-all">
                    Request Invitation <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
