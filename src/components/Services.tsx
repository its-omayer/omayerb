import React from 'react';
import { motion } from 'motion/react';
import { User, Sparkles, Box, Compass, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data';

// Safe mapping for Lucide components
const IconMap: { [key: string]: React.ComponentType<any> } = {
  User: User,
  Sparkles: Sparkles,
  Box: Box,
  Compass: Compass,
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-brand-olive overflow-hidden border-t border-b border-white/5"
    >
      {/* Decorative Background Accents */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-brand-accent/3 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-brand-highlight/2 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[4px] text-brand-accent">SERVICES & SKILLS</span>
          <h2 className="font-display text-5xl sm:text-6xl text-white tracking-wide uppercase">Creative Services</h2>
          <p className="text-brand-secondary-text text-base leading-relaxed max-w-lg mx-auto font-sans">
            Bespoke web applications, high-fidelity UI/UX mockups, customized Linux ricing setups, and creative graphic design.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="services-grid">
          {SERVICES.map((srv, idx) => {
            const IconComponent = IconMap[srv.icon] || TerminalComponent;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-[32px] p-8 sm:p-10 bg-brand-card/30 border border-white/5 hover:border-brand-accent/40 hover:bg-brand-card/50 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                {/* Glowing subtle gradient background inside card on hover */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-brand-accent/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-6">
                  {/* Icon Badge */}
                  <div className="w-14 h-14 rounded-full bg-brand-green border border-white/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-green transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title and description */}
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wider uppercase group-hover:text-brand-accent transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-brand-secondary-text text-sm leading-relaxed font-sans">
                      {srv.description}
                    </p>
                  </div>

                  {/* Feature Lists */}
                  <ul className="space-y-2.5 pt-2 border-t border-white/5">
                    {srv.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-brand-secondary-text font-mono">
                        <Check className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer CTA trigger inside card */}
                <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-brand-muted group-hover:text-brand-accent transition-colors">
                    Inquire availability
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/15 group-hover:border-brand-accent text-white group-hover:text-brand-accent flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// Fallback Icon
function TerminalComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}
