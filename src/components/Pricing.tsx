import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const PLANS = [
  {
    name: 'Discovery',
    price: '95',
    period: 'Single Class',
    features: ['1-on-1 Consultation', 'Initial Cycle Map', 'Access to Lounge', 'Mat & Towel Service'],
    recommended: false
  },
  {
    name: 'Rhythmic',
    price: '280',
    period: 'Monthly',
    features: ['Unlimited Classes', 'Monthly Ritual Circle', 'Personalized Cycle Plan', '10% Shop Discount', 'Priority Booking'],
    recommended: true
  },
  {
    name: 'Sanctuary',
    price: '720',
    period: 'Quarterly',
    features: ['All Rhythmic Features', '2 Private Sessions/mo', 'Full Ceremony Access', 'Wellness Gift Box', 'Locker Rental'],
    recommended: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="bg-offwhite py-24 md:py-40">
      <div className="section-container">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-terracotta mb-6 block">Membership</span>
          <h2 className="text-5xl md:text-6xl text-chocolate italic font-light mb-8">Invest in your <span className="font-serif italic font-normal">longevity</span>.</h2>
          <p className="text-earth/60 font-sans text-sm leading-loose italic">
            Tiered access designed to harmonize with your lifestyle and practice depth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-10 rounded-[40px] border transition-all duration-500 ${
                plan.recommended 
                  ? 'bg-chocolate text-offwhite border-chocolate shadow-2xl shadow-chocolate/20 scale-105 z-10' 
                  : 'bg-white border-sand text-earth hover:shadow-xl'
              }`}
            >
              {plan.recommended && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-terracotta text-white px-4 py-1 rounded-full font-sans text-[8px] tracking-[0.3em] uppercase">Most Harmonious</span>
              )}
              <div className="mb-10">
                <h3 className="font-serif text-3xl italic mb-6">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-sans opacity-60">€</span>
                  <span className="text-5xl font-serif">{plan.price}</span>
                  <span className="text-[10px] font-sans tracking-widest uppercase opacity-40 ml-2">/ {plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <Check size={14} className={plan.recommended ? 'text-terracotta' : 'text-sage'} />
                    <span className="text-xs font-sans opacity-80">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full !rounded-2xl transition-transform active:scale-95 ${
                plan.recommended ? 'btn-outline !text-offwhite !border-offwhite hover:!bg-offwhite hover:!text-chocolate' : 'btn-primary'
              }`}>
                Begin Journey
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
