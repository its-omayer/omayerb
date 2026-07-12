import React from 'react';
import { motion } from 'motion/react';
import { Compass, Terminal, Cpu, Send } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  details: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Concept & Blueprint',
    description: 'Mapping out user flows, layout systems, color palettes, and desktop custom-ricing guidelines.',
    icon: Compass,
    details: 'System architecture, wireframes, style maps'
  },
  {
    number: '02',
    title: 'Modular Coding',
    description: 'Writing high-performance, type-safe React, TypeScript, and Tailwind CSS code with extreme attention to detail.',
    icon: Terminal,
    details: 'Responsive UI components, clean structure'
  },
  {
    number: '03',
    title: 'UX Tuning & Polish',
    description: 'Refining and optimizing animations, loading speeds, and micro-interactions for an uncompromising UX.',
    icon: Cpu,
    details: 'Performance auditing, motion curves'
  },
  {
    number: '04',
    title: 'Cloud & FOSS Launch',
    description: 'Setting up Git version control, deploying code repositories, and optimizing for production workloads.',
    icon: Send,
    details: 'GitHub commits, production builds'
  }
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-24 sm:py-32 bg-brand-green overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[4px] text-brand-accent">WORKFLOW FLOW</span>
          <h2 className="font-display text-5xl sm:text-6xl text-white tracking-wide uppercase">Creative Process</h2>
          <p className="text-brand-secondary-text text-base leading-relaxed max-w-md mx-auto font-sans">
            How I translate abstract ideas into robust, clean, and highly polished digital experiences.
          </p>
        </div>

        {/* Steps Graphics (desktop connected line, mobile stack) */}
        <div className="relative mt-12">
          
          {/* Horizontal Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-[1px] bg-white/10 -translate-y-[80px] z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10" id="process-steps">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 group"
                >
                  {/* Step Bubble Indicator */}
                  <div className="relative">
                    {/* Circle Container */}
                    <div className="w-20 h-20 rounded-full bg-brand-card border border-white/10 group-hover:border-brand-accent group-hover:bg-brand-accent text-brand-secondary-text group-hover:text-brand-green flex items-center justify-center transition-all duration-500 shadow-xl relative z-10">
                      <IconComp className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    {/* Step Number Floating Badge */}
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-brand-accent group-hover:bg-white text-brand-green text-xs font-mono font-bold flex items-center justify-center border border-brand-green shadow-md z-20 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Narrative details */}
                  <div className="space-y-2 max-w-xs">
                    <h3 className="font-display text-2xl text-white tracking-wider uppercase group-hover:text-brand-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-brand-secondary-text text-sm leading-relaxed font-sans">
                      {step.description}
                    </p>
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-brand-muted">
                      {step.details}
                    </span>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
