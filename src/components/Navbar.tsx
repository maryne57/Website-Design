import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Ceremonies', href: '#ceremonies' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-offwhite/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-earth">
        <div className="flex gap-8 items-center hidden md:flex">
          {navLinks.slice(0, 2).map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-sans text-[10px] tracking-[0.3em] uppercase hover:text-terracotta transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a href="/" className="group flex flex-col items-center">
          <span className="font-serif text-2xl md:text-3xl tracking-tight group-hover:italic transition-all">
            Flow Studio
          </span>
          <span className="font-sans text-[8px] tracking-[0.4em] uppercase opacity-60">
            Wellness Sanctuary
          </span>
        </a>

        <div className="flex gap-8 items-center hidden md:flex">
          {navLinks.slice(2).map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-sans text-[10px] tracking-[0.3em] uppercase hover:text-terracotta transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="btn-primary !py-2 !px-6 !text-[10px]">
            Book Now
          </button>
        </div>

        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-offwhite border-t border-sand md:hidden py-8 px-6 flex flex-col gap-6 items-center shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-serif text-xl italic"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="btn-primary w-full mt-4">Book Now</button>
            <div className="flex gap-6 mt-8 opacity-40">
              <Instagram size={20} />
              <Facebook size={20} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
