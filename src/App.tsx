import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Progress Calculation
  useEffect(() => {
    const handleScrollProgress = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };
    window.addEventListener('scroll', handleScrollProgress);
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, []);

  // Premium Loader Countdown Simulation
  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setLoadPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 800); // brief hold at 100%
          return 100;
        }
        // randomized step speed for artisanal feeling
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 80);
    return () => clearInterval(interval);
  }, [isLoading]);

  // Section Tracking IntersectionObserver
  useEffect(() => {
    if (isLoading) return;

    const sections = ['home', 'about', 'works', 'services', 'contact'];
    const observers = sections.map((secId) => {
      const element = document.getElementById(secId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(secId);
          }
        },
        {
          rootMargin: '-30% 0px -60% 0px', // focused center band trigger
        }
      );
      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, [isLoading]);

  return (
    <div className="relative min-h-screen bg-brand-green text-white selection:bg-brand-accent selection:text-brand-green">
      
      {/* Luxury Grain Background Overlay */}
      <div className="bg-grain" />

      {/* Modern Minimal Custom Cursor */}
      <CustomCursor />

      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[#16290F] flex flex-col justify-between p-8 sm:p-12"
            id="premium-loader"
          >
            {/* Top Row: Artist Identity */}
            <div className="flex justify-between items-center w-full">
              <span className="font-mono text-xs uppercase tracking-[4px] text-brand-accent">OMAYER B</span>
              <span className="font-mono text-xs text-brand-muted">DEVELOPER & DESIGNER</span>
            </div>

            {/* Middle Row: Massive Centered Count */}
            <div className="flex flex-col items-center">
              {/* Rotating aperture rings */}
              <div className="w-16 h-16 rounded-full border border-dashed border-brand-accent/30 animate-spin-slow mb-6 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border border-brand-accent/50 animate-ping" />
              </div>

              {/* Ticking Percentage */}
              <div className="overflow-hidden">
                <motion.h1 
                  key={loadPercentage}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="font-display text-[22vw] sm:text-[15vw] leading-none text-brand-accent tracking-tighter"
                >
                  {loadPercentage}%
                </motion.h1>
              </div>
              
              <span className="font-mono text-xs uppercase tracking-[3px] text-brand-secondary-text mt-4 animate-pulse">
                Compiling Beautiful Interfaces
              </span>
            </div>

            {/* Bottom Row: Curated Quote */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 w-full">
              <span className="font-sans text-xs text-brand-muted italic max-w-xs">
                "We design elegant, functional software, balancing creative ricing and minimalist layout systems."
              </span>
              <span className="font-mono text-xs text-brand-accent uppercase tracking-widest">
                PREMIUM PORTFOLIO © 2026
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active App Viewport */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Scroll Progress Bar at very top */}
          <div 
            style={{ width: `${scrollProgress * 100}%` }}
            className="fixed top-0 left-0 h-[3px] bg-brand-accent z-[99] transition-all duration-100 ease-out" 
            id="scroll-progress-bar"
          />

          {/* Sticky Navigation Header */}
          <Header activeSection={activeSection} />

          {/* Core Content Blocks */}
          <main>
            <Hero />
            <About />
            <Works />
            <Services />
            <Process />
            <Testimonials />
            <Contact />
          </main>

          {/* Footer Branding */}
          <Footer />
        </motion.div>
      )}

    </div>
  );
}
