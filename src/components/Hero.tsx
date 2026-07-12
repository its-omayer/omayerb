import { motion, useScroll, useTransform } from 'motion/react';
import { Instagram, Youtube, Facebook, ArrowDown } from 'lucide-react';
import { ASSETS } from '../data';

export default function Hero() {
  const { scrollY } = useScroll();
  const textParallax = useTransform(scrollY, [0, 500], [0, 80]);
  const imageParallax = useTransform(scrollY, [0, 500], [0, -30]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-brand-green pt-24 pb-16 px-6 overflow-hidden flex flex-col justify-between"
    >
      {/* Decorative ambient blobs */}
      <div className="absolute top-[10%] left-[5%] w-96 h-96 rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-brand-highlight/3 blur-[150px] pointer-events-none" />

      {/* Floating particle elements */}
      <div className="absolute top-[25%] right-[20%] w-2 h-2 rounded-full bg-brand-accent/20 animate-pulse pointer-events-none" />
      <div className="absolute bottom-[35%] left-[15%] w-3 h-3 rounded-full bg-brand-highlight/10 animate-bounce pointer-events-none" />

      {/* Enormous Background Watermark (Oversized Outline Typography) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.03] leading-none pointer-events-none whitespace-nowrap z-0 select-none uppercase">
        DEVELOPER
      </div>

      {/* Main Centerpiece Content Split Grid */}
      <div className="relative max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-grow py-12">
        
        {/* Left Column: Creative Narrative & CTA */}
        <div className="lg:col-span-6 flex flex-col justify-center items-start text-left">
          
          {/* Availability Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 py-1.5 px-4 rounded-full bg-brand-olive border border-white/5 w-fit shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-brand-accent font-mono font-medium">Available for Projects 2026</span>
          </motion.div>

          {/* Majestic Heading */}
          <motion.h1 
            style={{ y: textParallax }}
            className="text-[14vw] sm:text-[10vw] lg:text-[85px] leading-[0.85] font-black tracking-tighter mb-4 uppercase text-left"
          >
            OMAYER<br/><span className="text-brand-accent">B</span>
          </motion.h1>

          {/* Subheading Role Descriptor */}
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-brand-secondary-text mb-6 block font-bold">
            College Student • Full-Stack Developer • UI/UX Designer • Graphic Designer
          </span>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-brand-secondary-text text-base sm:text-lg max-w-md leading-relaxed font-sans mb-10"
          >
            I create modern digital experiences through programming, design, and creativity. From building responsive web applications to crafting clean interfaces and customizing Linux, I enjoy turning ideas into elegant and functional solutions.
          </motion.p>

          {/* Actions & Magazine Badges Strip */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap items-center gap-6 w-full"
          >
            {/* View Portfolio CTA */}
            <a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#works');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-brand-accent text-brand-green font-bold py-4 px-8 rounded-full text-xs uppercase tracking-widest hover:bg-brand-hover hover:scale-105 transition-all duration-300 shadow-xl"
            >
              View Portfolio
            </a>

            {/* Overlapping Badges representing skills from Design HTML */}
            <div className="flex -space-x-3 select-none" title="Environments">
              <div className="w-11 h-11 rounded-full border-2 border-brand-green bg-brand-card flex items-center justify-center text-[8px] font-bold tracking-tight text-brand-muted">FEDORA</div>
              <div className="w-11 h-11 rounded-full border-2 border-brand-green bg-brand-olive flex items-center justify-center text-[8px] font-bold tracking-tight text-brand-muted">GITHUB</div>
              <div className="w-11 h-11 rounded-full border-2 border-brand-green bg-brand-accent text-brand-green flex items-center justify-center text-[9px] font-extrabold italic">FOSS</div>
            </div>
          </motion.div>

          {/* Social Icons Link Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5 w-full max-w-xs"
          >
            <a 
              href="https://instagram.com/vagusetvacuus" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-brand-accent hover:text-brand-accent flex items-center justify-center transition-all duration-300 bg-brand-card/20"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://youtube.com/@vagusetvacuus" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-brand-accent hover:text-brand-accent flex items-center justify-center transition-all duration-300 bg-brand-card/20"
              aria-label="Youtube Channel"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a 
              href="https://facebook.com/impstr.lua" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-brand-accent hover:text-brand-accent flex items-center justify-center transition-all duration-300 bg-brand-card/20"
              aria-label="Facebook Account"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </motion.div>

        </div>

        {/* Right Column: Hero Portrait Frame with Badge Overlay */}
        <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end w-full">
          
          <motion.div 
            style={{ y: imageParallax }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[440px] aspect-[3/4] group z-10"
          >
            {/* Framed container with luxury rounded corners */}
            <div className="w-full h-full rounded-[40px] overflow-hidden border border-white/10 bg-brand-card shadow-[0_30px_100px_rgba(0,0,0,0.5)] relative">
              <img
                src={ASSETS.photographerPortrait}
                alt="Omayer B Portrait"
                className="w-full h-full object-cover object-center transition-transform duration-750 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Soft Gradient Overlay from Design HTML */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              
              {/* Bottom tag on image */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-accent mb-1 font-mono">Featured Setup</span>
                <span className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wider text-white">Fedora Custom Rice</span>
                <span className="text-xs text-brand-muted font-sans mt-0.5">Open Source • 2026</span>
              </div>
            </div>

            {/* Spinner (explore code design text path) in top right corner from Design HTML */}
            <div className="absolute -top-6 -right-6 z-20">
              <div className="w-24 h-24 rounded-full border border-white/20 bg-brand-green/80 backdrop-blur-md flex items-center justify-center relative shadow-lg">
                <div className="absolute inset-0 animate-[spin_10s_linear_infinite] p-1.5">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-white/40 text-[7px] tracking-[2px] uppercase">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                    <text><textPath href="#circlePath">SCROLL • CREATE • CODE • DESIGN •</textPath></text>
                  </svg>
                </div>
                <div className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
              </div>
            </div>

            {/* Giant Rotating Sticker Badge on Left side from Design HTML */}
            <div className="absolute -left-12 top-1/4 z-30 hidden sm:block">
              <motion.div
                whileHover={{ rotate: 3, scale: 1.05 }}
                className="w-32 h-32 rounded-3xl bg-brand-accent p-4 flex flex-col justify-between rotate-[-6deg] shadow-2xl text-brand-green cursor-pointer"
              >
                <div className="font-bold text-3xl italic">FOSS</div>
                <div className="text-[9px] font-bold uppercase leading-tight tracking-tighter font-mono">
                  Open Source & Riced Desktops
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Decorative arrow helper down to next section */}
      <div className="relative max-w-7xl mx-auto w-full z-20 flex justify-center lg:justify-end px-6 md:px-12 mt-4">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            const element = document.querySelector('#about');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="group flex items-center justify-center w-12 h-12 rounded-full border border-brand-accent/20 hover:border-brand-accent text-brand-accent transition-all duration-300 bg-brand-card/30"
          aria-label="Scroll to About Section"
        >
          <ArrowDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
        </a>
      </div>
    </section>
  );
}
