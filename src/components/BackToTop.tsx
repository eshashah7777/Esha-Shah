import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  onScrollToTop?: () => void;
}

export default function BackToTop({ onScrollToTop }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate scroll progress percentage (0 - 100)
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (currentScrollY / totalHeight) * 100)));
      }

      // Show button after scrolling past 350px
      if (currentScrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (onScrollToTop) {
      onScrollToTop();
    } else {
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Radius for SVG circle indicator
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 transition-all duration-300 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-5 scale-90 pointer-events-none'
      }`}
    >
      <button
        id="back-to-top-btn"
        onClick={handleClick}
        aria-label="Back to top"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-xl border border-[#7C284C]/15 text-[#7C284C] hover:bg-[#7C284C] hover:text-white hover:border-[#7C284C] shadow-[0_8px_30px_rgba(124,40,76,0.12)] transition-all duration-300 active:scale-90 hover:scale-105 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#7C284C]/50"
      >
        {/* Subtle circular scroll progress indicator */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 40 40"
        >
          <circle
            cx="20"
            cy="20"
            r={radius}
            className="text-[#7C284C]/10"
            strokeWidth="2"
            stroke="currentColor"
            fill="transparent"
          />
          <circle
            cx="20"
            cy="20"
            r={radius}
            className="text-[#7C284C] group-hover:text-white transition-colors duration-300"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
          />
        </svg>

        {/* Minimal Arrow Icon with hover float animation */}
        <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
}
