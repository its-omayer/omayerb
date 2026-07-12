import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto sliding carousel interval
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const activeItem = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 bg-brand-olive overflow-hidden border-t border-white/5"
    >
      {/* Decorative Blur Ambient Sphere */}
      <div className="absolute top-[40%] right-[-20%] w-[500px] h-[500px] rounded-full bg-brand-accent/3 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-brand-highlight/2 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[4px] text-brand-accent">CLIENT SANCTION</span>
          <h2 className="font-display text-5xl sm:text-6xl text-white tracking-wide uppercase">Testimonials</h2>
          <p className="text-brand-secondary-text text-base leading-relaxed max-w-md mx-auto font-sans">
            Hear from prominent brand managers, art curators, and designers who collaborated with us.
          </p>
        </div>

        {/* Dynamic Glass Slide Frame */}
        <div className="relative max-w-4xl mx-auto" id="testimonials-carousel">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="glass-panel relative rounded-[40px] p-8 sm:p-12 md:p-16 border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.4)] flex flex-col gap-8 justify-between min-h-[360px]"
            >
              {/* Quote Ornament */}
              <Quote className="absolute top-8 right-10 w-16 h-16 text-brand-accent/5 pointer-events-none" />

              {/* Star Rating & Narrative */}
              <div className="space-y-6">
                <div className="flex items-center gap-1 text-brand-accent">
                  {Array.from({ length: activeItem.rating }).map((_, rIdx) => (
                    <Star key={rIdx} className="w-4 h-4 fill-brand-accent" />
                  ))}
                </div>

                <blockquote className="text-xl sm:text-2xl leading-relaxed text-white font-light italic font-sans">
                  "{activeItem.review}"
                </blockquote>
              </div>

              {/* Author Card Details */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5 mt-4">
                <img
                  src={activeItem.photo}
                  alt={activeItem.name}
                  className="w-14 h-14 rounded-full object-cover border border-brand-accent/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display text-xl tracking-wide uppercase text-white">
                    {activeItem.name}
                  </h4>
                  <p className="font-mono text-xs text-brand-accent">
                    {activeItem.occupation}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Manual Control Panel below the glass card */}
          <div className="flex items-center justify-between mt-8 px-4">
            
            {/* Sliding Dots Indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === dotIdx ? 'w-8 bg-brand-accent' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Previous & Next Control Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/10 hover:border-brand-accent bg-brand-green hover:bg-brand-accent hover:text-brand-green flex items-center justify-center text-brand-secondary-text transition-all duration-300 shadow-md cursor-pointer"
                aria-label="Previous testimonial"
                id="testimonial-prev"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-white/10 hover:border-brand-accent bg-brand-green hover:bg-brand-accent hover:text-brand-green flex items-center justify-center text-brand-secondary-text transition-all duration-300 shadow-md cursor-pointer"
                aria-label="Next testimonial"
                id="testimonial-next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
