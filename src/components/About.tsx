import { motion } from 'motion/react';
import { ArrowUpRight, Laptop, Terminal, Layers } from 'lucide-react';

interface GearItem {
  name: string;
  type: string;
  description: string;
  icon: any;
}

const GEAR_ITEMS: GearItem[] = [
  {
    name: 'Fedora Workstation',
    type: 'Primary OS & Laptop',
    description: 'A sleek high-end laptop running Fedora Linux, customized with tiling window managers, customized status bars, and terminal-first development workflows.',
    icon: Laptop
  },
  {
    name: 'Tactile Mechanical Keyboard',
    type: 'Custom Typing Hardware',
    description: 'Equipped with tactile switches, high-contrast dye-sub custom keycaps, and finely lubed stabilizers for an uncompromising coding feedback loop.',
    icon: Terminal
  },
  {
    name: 'Figma & Vector Design Labs',
    type: 'UI/UX & Branding Suite',
    description: 'Drafting pixel-perfect responsive layouts, grid systems, typography scales, and custom vector graphic identities for modern client web experiences.',
    icon: Layers
  }
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-brand-green border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Split Layout: Huge heading on left, Narrative text on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20 items-start">
          
          <div className="lg:col-span-5">
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[12vw] sm:text-[9vw] lg:text-[7vw] font-display font-extrabold leading-none text-brand-accent uppercase"
              id="about-title"
            >
              about
            </motion.h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-brand-secondary-text">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl sm:text-2xl font-light leading-relaxed max-w-3xl"
            >
              Welcome to my digital and creative environment. I am <strong className="text-white font-medium">Omayer B</strong>, a college student passionate about programming, UI/UX design, and graphic design. I enjoy building modern, responsive, and user-friendly web applications while continuously learning new technologies.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-brand-muted text-base leading-relaxed max-w-2xl"
            >
              My philosophy lies in clean modularity and modern design. I love Linux desktop customization (desktop ricing) and use Fedora Linux as my primary operating system. Besides software development, I am a technology enthusiast who enjoys exploring open-source software, experimenting with new tools, and creating visually appealing digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="pt-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 group text-sm uppercase tracking-widest font-mono text-brand-accent hover:text-white transition-colors duration-300"
              >
                <span>Learn More About My Work</span>
                <span className="w-8 h-8 rounded-full border border-brand-accent/20 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-green group-hover:border-brand-accent transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
            </motion.div>
          </div>

        </div>

        {/* Dynamic Gear Showcase Box - Beautiful 3-card grid */}
        <div className="relative py-12">
          
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-[4px] text-brand-accent">EQUIPMENT & SETUP</span>
            <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wider mt-1 uppercase">Creative Arsenal</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {GEAR_ITEMS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-brand-card/20 border border-white/10 rounded-3xl p-8 hover:border-brand-accent/40 hover:bg-brand-card/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-green group-hover:border-brand-accent transition-all duration-300">
                      <IconComponent className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-brand-muted">
                        {item.type}
                      </span>
                      <h4 className="font-display text-xl text-white tracking-wide uppercase">
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-brand-secondary-text text-sm leading-relaxed">
                      {item.description}
                    </p>
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
