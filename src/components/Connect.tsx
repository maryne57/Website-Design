import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

export const Connect = () => {
  return (
    <section id="contact" className="bg-sand/30 py-24 md:py-40">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-terracotta mb-6 block">Nurturing Connection</span>
            <h2 className="text-5xl md:text-6xl text-chocolate italic font-light mb-8">Begin your <span className="font-serif italic font-normal">becoming</span>.</h2>
            <p className="text-earth/60 font-sans text-sm leading-loose max-w-md mb-12">
              Whether you have a question about our practice or simply wish to share your journey, 
              our doors and hearts are open. We respond with presence and care.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-offwhite flex items-center justify-center text-terracotta group-hover:bg-chocolate group-hover:text-offwhite transition-all duration-500">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-sans text-[10px] tracking-widest uppercase opacity-40 mb-1">Email us</h4>
                  <p className="font-serif text-lg italic">hello@flowstudio.fr</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-offwhite flex items-center justify-center text-terracotta group-hover:bg-chocolate group-hover:text-offwhite transition-all duration-500">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <h4 className="font-sans text-[10px] tracking-widest uppercase opacity-40 mb-1">Send a message</h4>
                  <p className="font-serif text-lg italic">+33 (0) 1 54 32 10 00</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-offwhite flex items-center justify-center text-terracotta group-hover:bg-chocolate group-hover:text-offwhite transition-all duration-500">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-sans text-[10px] tracking-widest uppercase opacity-40 mb-1">Visit the sanctuary</h4>
                  <p className="font-serif text-lg italic">75 Rue de Bretagne, Paris</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-chocolate/5 border border-sand"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-sans text-[10px] tracking-widest uppercase opacity-40">Your Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-sand py-2 focus:border-terracotta outline-none transition-colors font-serif italic text-lg" placeholder="Elena..." />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-[10px] tracking-widest uppercase opacity-40">Your Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-sand py-2 focus:border-terracotta outline-none transition-colors font-serif italic text-lg" placeholder="elena@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-sans text-[10px] tracking-widest uppercase opacity-40">Inquiry Type</label>
                <select className="w-full bg-transparent border-b border-sand py-2 focus:border-terracotta outline-none transition-colors font-serif italic text-lg appearance-none">
                  <option>New Practice Inquiry</option>
                  <option>Ceremony Invitation</option>
                  <option>Private Consultation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-sans text-[10px] tracking-widest uppercase opacity-40">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-sand py-2 focus:border-terracotta outline-none transition-colors font-serif italic text-lg resize-none" placeholder="Share a piece of your journey..." />
              </div>
              <button className="btn-primary w-full !py-4 !rounded-2xl group flex items-center justify-center gap-3">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
