/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Schedule } from './components/Schedule';
import { Ceremonies } from './components/Ceremonies';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

import { Connect } from './components/Connect';

export default function App() {
  // Simple smooth scroll implementation
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="relative selection:bg-terracotta selection:text-offwhite">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Schedule />
        <Ceremonies />
        <Pricing />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
