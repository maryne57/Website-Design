import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sand/30">
      {/* Background visual element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 flex items-center justify-center"
      >
        <div className="w-[80vw] h-[80vw] md:w-[60vh] md:h-[60vh] rounded-full bg-terracotta blur-[100px] md:blur-[150px]" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <span className="font-sans text-[10px] md:text-xs tracking-[0.5em] uppercase text-chocolate/60 block mb-8">
            Rhythmic Yoga & Hormonal Harmony
          </span>
          <h1 className="editorial-title text-chocolate mb-10">
            Find your <span className="italic font-light">natural</span> rhythm.
          </h1>
          <p className="font-sans text-sm md:text-base leading-relaxed text-earth/80 max-w-xl mx-auto mb-12">
            A boutique wellness sanctuary dedicated to unhurried practice, 
            ritual movement, and the celebration of feminine cycles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary group relative overflow-hidden">
              Explore Practice
            </button>
            <button className="btn-outline group relative overflow-hidden">
              View Schedule
            </button>
          </div>
        </motion.div>
      </div>

      {/* Side Graphic Elements */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end gap-2"
      >
        <div className="h-px w-24 bg-sand" />
        <span className="font-sans text-[9px] tracking-widest uppercase opacity-40">Located in Paris, 75003</span>
      </motion.div>
    </section>
  );
};
