import { Terminal, Instagram, Youtube, Facebook, ArrowUp, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-brand-green border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden relative">
      {/* Background Watermark with high-performance entrance and breathing animations */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none select-none z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="translate-y-[20%]"
        >
          <motion.span
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 7,
              ease: "easeInOut",
            }}
            className="text-[14vw] sm:text-[18vw] font-display font-extrabold tracking-tighter text-white/[0.02] leading-none uppercase select-none block"
          >
            OMAYER B
          </motion.span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Top footer row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 mb-12 pb-12 border-b border-white/5">
          {/* Logo Brand */}
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-brand-accent" />
            <span className="font-display text-2xl tracking-wider uppercase">OMAYER B</span>
          </div>

          {/* Quick lists */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <a href="#home" className="text-xs uppercase tracking-widest font-mono text-brand-secondary-text hover:text-brand-accent transition-colors">Home</a>
            <a href="#about" className="text-xs uppercase tracking-widest font-mono text-brand-secondary-text hover:text-brand-accent transition-colors">About</a>
            <a href="#works" className="text-xs uppercase tracking-widest font-mono text-brand-secondary-text hover:text-brand-accent transition-colors">Works</a>
            <a href="#services" className="text-xs uppercase tracking-widest font-mono text-brand-secondary-text hover:text-brand-accent transition-colors">Services</a>
            <a href="#contact" className="text-xs uppercase tracking-widest font-mono text-brand-secondary-text hover:text-brand-accent transition-colors">Contact</a>
          </nav>

          {/* Scroll to Top */}
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-full border border-white/10 hover:border-brand-accent text-brand-secondary-text hover:text-brand-accent flex items-center justify-center transition-all bg-brand-card/20 shadow-md cursor-pointer"
            aria-label="Scroll to top"
            id="footer-scroll-top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright row */}
        <div className="w-full pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-brand-muted text-xs font-mono">
          <div className="flex items-center gap-6">
            <span>© 2026 OMAYER B. ALL RIGHTS RESERVED.</span>
            <span className="hidden sm:inline">|</span>
            <span>DEVELOPER & UI/UX DESIGNER</span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a href="mailto:bhuyinomayer@gmail.com" className="hover:text-brand-accent transition-colors" aria-label="Mail Support">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://instagram.com/vagusetvacuus" target="_blank" rel="noreferrer" className="hover:text-brand-accent transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://youtube.com/@vagusetvacuus" target="_blank" rel="noreferrer" className="hover:text-brand-accent transition-colors" aria-label="Youtube">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://facebook.com/impstr.lua" target="_blank" rel="noreferrer" className="hover:text-brand-accent transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
