import React from 'react';
import { motion } from 'motion/react';

export const Philosophy = () => {
  return (
    <section id="philosophy" className="bg-offwhite border-y border-sand overflow-hidden">
      <div className="section-container grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-sand overflow-hidden rounded-[40px] md:rounded-[80px]">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" 
              alt="Yoga practice"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-terracotta rounded-full flex items-center justify-center p-8 text-offwhite text-center animate-float">
            <span className="font-serif italic text-sm">Empowered by cycles</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-terracotta mb-6 block">Our Core Essence</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-chocolate mb-8 leading-tight">
            The Flow state is a <span className="italic font-light">balance</span> between discipline and surrender.
          </h2>
          <div className="space-y-6 text-earth/80 font-sans leading-loose">
            <p>
              At Flow Studio, we believe that wellness is not a constant intensity, but a rhythmic 
              expression of your inner landscape. Our approach integrates traditional Vinyasa with 
              modern cycle-syncing wisdom.
            </p>
            <p>
              We’ve crafted a sanctuary where movement is tailored to your hormonal phases, 
              honoring the inherent wisdom of the body’s natural fluctuations.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 py-8 border-t border-sand">
            <div>
              <span className="font-serif text-3xl italic block mb-2 text-chocolate">01.</span>
              <span className="font-sans text-[10px] tracking-widest uppercase font-semibold">Seasonal Rituals</span>
            </div>
            <div>
              <span className="font-serif text-3xl italic block mb-2 text-chocolate">02.</span>
              <span className="font-sans text-[10px] tracking-widest uppercase font-semibold">Cyclical Practice</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
