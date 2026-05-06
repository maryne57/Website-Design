import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, User } from 'lucide-react';

const CLASSES = {
  active: [
    { time: '07:00 - 08:30', name: 'Sunrise Vinyasa', instructor: 'Elena R.', level: 'Intermediate' },
    { time: '10:00 - 11:30', name: 'Hormonal Flow', instructor: 'Maya S.', level: 'All Levels' },
    { time: '18:30 - 20:00', name: 'Creative Ritual', instructor: 'Sarah L.', level: 'Open Level' },
  ],
  quiet: [
    { time: '09:00 - 10:30', name: 'Restorative Yin', instructor: 'Chloe M.', level: 'Gentle' },
    { time: '12:00 - 13:00', name: 'Lunch Meditation', instructor: 'Thomas K.', level: 'Beginner' },
    { time: '19:00 - 20:30', name: 'Deep Release', instructor: 'Sofia B.', level: 'Gentle' },
  ]
};

export const Schedule = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'quiet'>('active');

  return (
    <section id="schedule" className="bg-sand/10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-terracotta mb-6 block">The Weekly Rhythm</span>
            <h2 className="text-4x md:text-5xl text-chocolate italic font-light">Choose your practice state.</h2>
          </div>
          <div className="flex gap-4 p-1 bg-sand/20 rounded-full border border-sand">
            <button 
              onClick={() => setActiveTab('active')}
              className={`px-6 py-2 rounded-full font-sans text-[10px] tracking-widest uppercase transition-all ${
                activeTab === 'active' ? 'bg-chocolate text-offwhite shadow-md' : 'text-earth hover:bg-sand/30'
              }`}
            >
              Active Flow
            </button>
            <button 
              onClick={() => setActiveTab('quiet')}
              className={`px-6 py-2 rounded-full font-sans text-[10px] tracking-widest uppercase transition-all ${
                activeTab === 'quiet' ? 'bg-chocolate text-offwhite shadow-md' : 'text-earth hover:bg-sand/30'
              }`}
            >
              Quiet Yin
            </button>
          </div>
        </div>

        <div className="grid gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {CLASSES[activeTab].map((cls, idx) => (
                <div 
                  key={idx}
                  className="group grid md:grid-cols-[1.5fr,2.5fr,1.5fr,1fr] items-center p-8 bg-offwhite border border-sand rounded-3xl hover:shadow-2xl hover:shadow-terracotta/5 transition-all duration-500 cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <Clock size={16} className="text-terracotta" />
                    <span className="font-sans text-xs tracking-wider text-earth/60 uppercase">{cls.time}</span>
                  </div>
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl text-chocolate group-hover:italic transition-all">{cls.name}</h3>
                    <span className="md:hidden font-sans text-[10px] uppercase tracking-widest text-earth/40">{cls.level}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-6 md:mb-0">
                    <div className="w-8 h-8 rounded-full bg-sand flex items-center justify-center overflow-hidden">
                      <User size={14} className="text-chocolate/40" />
                    </div>
                    <span className="font-sans text-xs text-earth/80 uppercase">{cls.instructor}</span>
                  </div>
                  <div className="flex justify-end">
                    <button className="font-sans text-[10px] tracking-widest uppercase text-terracotta font-semibold border-b border-transparent hover:border-terracotta transition-all py-1">
                      Reserve
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
