import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Camera, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Works', href: '#works' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between w-full">
        {/* Logo with indicator dot from Design HTML */}
        <a 
          href="#home" 
          onClick={(e) => handleScrollTo(e, '#home')}
          className="flex items-center gap-2 text-white hover:text-brand-accent transition-colors duration-300 font-bold tracking-tighter text-xl"
          id="nav-logo"
        >
          <div className="w-3 h-3 rounded-full bg-brand-accent animate-pulse" />
          <span className="font-display text-2xl tracking-wider uppercase">OMAYER B</span>
        </a>

        {/* Desktop Nav inside premium glass pill backdrop from Design HTML */}
        <nav 
          className="hidden lg:flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3 gap-8 text-[11px] uppercase tracking-[0.2em] font-medium" 
          id="desktop-nav"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`relative transition-colors duration-300 hover:text-brand-accent ${
                  isActive ? 'text-brand-accent' : 'text-brand-secondary-text'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Styled as outlined high-end button from Design HTML */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-green rounded-full px-6 py-2.5 text-[11px] uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-2"
            id="nav-cta"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2 hover:text-brand-accent transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-brand-green border-b border-brand-card/50 px-6 py-6"
            id="mobile-drawer"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className={`text-lg uppercase tracking-widest font-display py-2 border-b border-white/5 flex justify-between items-center ${
                      isActive ? 'text-brand-accent font-medium' : 'text-brand-secondary-text'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="mt-4 text-center w-full bg-brand-accent text-brand-green uppercase tracking-widest font-mono text-xs py-3 rounded-full hover:bg-brand-hover transition-colors"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
