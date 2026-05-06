import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-earth text-offwhite pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <h2 className="font-serif text-4xl italic mb-8">Flow Studio</h2>
            <p className="max-w-xs opacity-50 font-sans text-sm leading-loose italic mb-8">
              A boutique sanctuary for rhythmic movement and hormonal harmony in the heart of Paris.
            </p>
            <div className="space-y-2 font-sans text-[10px] tracking-widest uppercase opacity-40">
              <p>75 Rue de Bretagne, 75003 Paris</p>
              <p>contact@flowstudio.fr</p>
              <p>+33 (0) 1 54 32 10 00</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-40 mb-8">Sanctuary</h4>
            <ul className="space-y-4 font-serif text-lg italic opacity-80">
              <li><a href="#philosophy" className="hover:text-terracotta transition-colors">Philosophy</a></li>
              <li><a href="#schedule" className="hover:text-terracotta transition-colors">Schedule</a></li>
              <li><a href="#ceremonies" className="hover:text-terracotta transition-colors">Ceremonies</a></li>
              <li><a href="/retreats" className="hover:text-terracotta transition-colors">Retreats</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-40 mb-8">Connect</h4>
            <ul className="space-y-4 font-serif text-lg italic opacity-80">
              <li><a href="#" className="hover:text-terracotta transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Spotify</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-offwhite/10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 font-sans text-[9px] tracking-widest uppercase">
          <p>© 2026 Flow Studio Paris. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="/privacy" className="hover:text-offwhite transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-offwhite transition-colors">Terms</a>
            <a href="/accessibility" className="hover:text-offwhite transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
