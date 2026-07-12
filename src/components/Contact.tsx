import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Check, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert('Please fill out all required fields.');
      return;
    }
    setIsSubmitting(true);
    
    // Simulate real API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-brand-green overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SPECTACULAR HERO BANNER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full rounded-[40px] bg-brand-accent p-12 sm:p-20 md:p-28 overflow-hidden mb-20 flex flex-col items-center justify-center text-center shadow-2xl border border-white/20 select-none"
        >
          {/* Subtle line background pattern */}
          <div className="absolute inset-0 bg-grain pointer-events-none opacity-20" />
          
          {/* Giant typography in dark olive / black */}
          <h2 className="text-[12vw] sm:text-[10vw] font-display font-extrabold leading-none text-brand-green uppercase tracking-tight z-10">
            CONTACT ME
          </h2>
        </motion.div>

        {/* Two Column Layout: Contact details and Glassmorphic form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start" id="contact-form-section">
          
          {/* Left Column: Direct coordinates info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[4px] text-brand-accent">GET IN TOUCH</span>
              <h3 className="font-display text-4xl text-white tracking-wide uppercase">Let's build systems.</h3>
              <p className="text-brand-secondary-text text-base leading-relaxed max-w-sm">
                Have an upcoming web application project, open-source collaboration, design request, or desktop customization project? Let's connect.
              </p>
            </div>

            {/* Coordinates List */}
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-accent bg-brand-card/30 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-brand-muted">Based In</h4>
                  <p className="text-white text-sm font-medium mt-1">Dhaka, Bangladesh • Working Worldwide</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-accent bg-brand-card/30 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-brand-muted">Digital Mail</h4>
                  <a href="mailto:bhuyinomayer@gmail.com" className="text-white hover:text-brand-accent text-sm font-medium mt-1 transition-colors block">
                    bhuyinomayer@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-accent bg-brand-card/30 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-brand-muted">GitHub Account</h4>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white hover:text-brand-accent text-sm font-medium mt-1 transition-colors block">
                    github.com/its-omayer
                  </a>
                </div>
              </div>

            </div>

            {/* Quick availability indicator */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-accent/20 bg-brand-accent/5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-ping" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-brand-secondary-text">Currently open to projects 2026</span>
            </div>
          </div>

          {/* Right Column: Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel rounded-[32px] p-8 sm:p-10 border border-white/10 shadow-2xl relative"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-mono text-[10px] uppercase tracking-widest text-brand-muted">
                      Your Name <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Omayer B"
                      className="w-full bg-brand-green/60 border border-white/10 focus:border-brand-accent rounded-xl px-4 py-3 text-sm text-white placeholder-brand-muted/50 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-mono text-[10px] uppercase tracking-widest text-brand-muted">
                      Email Address <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full bg-brand-green/60 border border-white/10 focus:border-brand-accent rounded-xl px-4 py-3 text-sm text-white placeholder-brand-muted/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Phone field (optional) */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block font-mono text-[10px] uppercase tracking-widest text-brand-muted">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="Your phone number"
                    className="w-full bg-brand-green/60 border border-white/10 focus:border-brand-accent rounded-xl px-4 py-3 text-sm text-white placeholder-brand-muted/50 focus:outline-none transition-colors"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-mono text-[10px] uppercase tracking-widest text-brand-muted">
                    Project details & scope <span className="text-brand-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your web app concept, design requirements, estimated timeframe..."
                    className="w-full bg-brand-green/60 border border-white/10 focus:border-brand-accent rounded-xl px-4 py-3 text-sm text-white placeholder-brand-muted/50 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="font-mono text-[10px] text-brand-muted/80 text-center sm:text-left max-w-xs leading-relaxed">
                    By submitting, you agree to coordinate and negotiate project scopes directly via bhuyinomayer@gmail.com
                  </span>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-xs uppercase tracking-widest font-mono bg-brand-accent hover:bg-brand-hover text-brand-green font-bold px-8 py-4 rounded-full transition-colors duration-300 disabled:opacity-50 cursor-pointer shadow-lg shrink-0"
                    id="contact-submit"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-brand-green border-t-transparent rounded-full animate-spin" />
                        <span>Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Proposal</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Success Banner */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute bottom-6 left-6 right-6 bg-brand-accent text-brand-green p-4 rounded-xl flex items-center gap-3 border border-brand-green shadow-xl"
                      id="contact-success"
                    >
                      <Check className="w-5 h-5 shrink-0" />
                      <span className="font-sans text-sm font-semibold">
                        Proposal received successfully! Omayer B will get back to you within 24 hours.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
