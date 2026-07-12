import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // High performance positions that bypass React re-render loops on mouse move
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Soft spring physics for the inner dot to keep it ultra-fluid but highly responsive
  const dotSpringConfig = { damping: 35, stiffness: 400, mass: 0.15 };
  const dotX = useSpring(cursorX, dotSpringConfig);
  const dotY = useSpring(cursorY, dotSpringConfig);

  // Deep, buttery-smooth, and organic spring physics for the trailing outer ring
  const ringSpringConfig = { damping: 40, stiffness: 150, mass: 0.75 };
  const trailingX = useSpring(cursorX, ringSpringConfig);
  const trailingY = useSpring(cursorY, ringSpringConfig);

  useEffect(() => {
    // Detect touch-only / mobile devices
    const touchCheck = window.matchMedia('(pointer: coarse)').matches || 
                     'ontouchstart' in window || 
                     navigator.maxTouchPoints > 0;
    
    setIsTouchDevice(touchCheck);
    if (touchCheck) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Apply cursor: none class to document body on desktop
    document.documentElement.classList.add('custom-cursor-active');

    // Dynamically identify and track interactives (links, buttons, inputs)
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer, #footer-scroll-top, #gear-next, #gear-prev'
      );
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Attach listeners on load and on subsequent DOM updates (e.g. state changes)
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.classList.remove('custom-cursor-active');
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* 1. Core Pointer Dot (High precision, mix-blend-difference to stay perfectly legible everywhere) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-brand-accent pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.75 : isHovered ? 1.6 : 1,
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 25 }}
      />

      {/* 2. Trailing Outer Ring (Lag effect, expands and fills subtly on hovering interactive elements) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[9998]"
        style={{
          x: trailingX,
          y: trailingY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? 'rgba(234, 247, 106, 0.08)' : 'rgba(234, 247, 106, 0)',
          borderColor: isHovered ? 'rgba(234, 247, 106, 0.8)' : 'rgba(234, 247, 106, 0.35)',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 24 }}
      />
    </>
  );
}
