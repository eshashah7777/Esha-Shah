import { ArrowDown, ArrowUpRight } from 'lucide-react';
import eshaPhoto from '../assets/images/esha_photo.png';
import { PERSONAL_INFO } from '../data/portfolio';

interface HeroProps {
  onExploreWork: () => void;
  onExploreExperience: () => void;
}

export default function Hero({ onExploreWork, onExploreExperience }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-[#241F21]/10 bg-[#FFF9F5]"
    >
      {/* Background Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none" />

      {/* Subtle floating editorial annotations */}
      <div className="hidden lg:block absolute top-24 right-12 font-handwriting text-xl text-[#7C284C] rotate-6 select-none opacity-80 pointer-events-none">
        ✦ advertising & creative strategy
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines & Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Eyebrow / Student status */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4A7C1]/25 border border-[#F4A7C1]/60 text-xs sm:text-sm font-medium text-[#7C284C]">
              <span className="w-2 h-2 rounded-full bg-[#7C284C] animate-pulse" />
              <span>3rd Year Student @ Hinduja × IIDE</span>
              <span className="text-[#241F21]/30">•</span>
              <span className="font-handwriting text-base font-semibold">Available for Internships</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#241F21] leading-[1.08]">
                Hi, I'm <span className="text-[#7C284C] italic font-serif">Esha.</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#574F53] tracking-tight">
                Digital Business & Advertising Student
              </h2>
            </div>

            {/* Core Value Statement */}
            <p className="text-lg sm:text-xl text-[#241F21] leading-relaxed max-w-xl font-normal">
              I like understanding brands, decoding consumers and turning research into{' '}
              <span className="relative inline-block font-semibold">
                meaningful ideas.
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2 text-[#F4A7C1]"
                  viewBox="0 0 120 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1 5.5C30 1.5 85 1.5 119 5.5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </p>

            {/* Handwritten Sticky Note callout */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#FFFDE6] border border-[#E9E4B2] shadow-xs max-w-lg transform -rotate-1 hover:rotate-0 transition-transform">
              <p className="font-handwriting text-lg sm:text-xl text-[#241F21] leading-snug">
                "I understand brands, I understand consumers, and I know how to turn research into ideas."
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                id="hero-explore-work-btn"
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#241F21] text-[#FFF9F5] hover:bg-[#7C284C] transition-all shadow-sm group hover:shadow-md cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </button>

              <button
                id="hero-view-experience-btn"
                onClick={onExploreExperience}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#FFF9F5] text-[#241F21] border border-[#241F21]/20 hover:border-[#7C284C] hover:text-[#7C284C] hover:bg-[#F4A7C1]/10 transition-all shadow-xs group cursor-pointer"
              >
                <span>Agency Experience</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </button>

              <a
                id="hero-linkedin-btn"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-full text-sm font-semibold text-[#574F53] hover:text-[#0369A1] transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Micro-stats / Highlights */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#574F53]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C284C]" />
                <span className="font-semibold text-[#241F21]">Publicis Groupe</span> Intern
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A8D8EA]" />
                <span className="font-semibold text-[#241F21]">9.0 CGPA</span> Academic Track
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9E8C5]" />
                <span className="font-semibold text-[#241F21]">6+ Major Brands</span> Researched
              </div>
            </div>
          </div>

          {/* Right Column: Creative Desk & Moodboard Composition */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6">
            {/* Moodboard Frame */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Polaroid Photo of Esha */}
              <div
                id="esha-polaroid-card"
                className="washi-tape bg-white p-3.5 pb-6 rounded-lg shadow-md border border-[#241F21]/10 transform -rotate-2 hover:rotate-0 transition-transform duration-300 relative z-20"
              >
                <div className="overflow-hidden rounded-sm aspect-square bg-[#F4A7C1]/15 relative">
                  <img
                    src={eshaPhoto}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://i.ibb.co/0RwXLt0y/Screenshot-2026-09-15-143620.png';
                    }}
                    referrerPolicy="no-referrer"
                    alt="Esha Shah — Digital Business & Advertising Student"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  {/* Subtle corner badge */}
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-semibold text-[#7C284C] shadow-xs">
                    Mumbai, IN
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="font-serif-display font-bold text-lg text-[#7C284C]">
                    Esha Shah
                  </p>
                  <p className="font-handwriting text-base text-[#7C284C]">
                    strategist in the making ✎
                  </p>
                </div>
              </div>

              {/* Scrapbook Sticker: Strategy */}
              <div className="absolute -top-4 -left-4 z-30 bg-[#C9B6E4] text-[#241F21] px-3.5 py-1.5 rounded-full shadow-sm text-xs font-semibold uppercase tracking-wider transform -rotate-12 border border-white/60">
                ★ Strategy
              </div>

              {/* Scrapbook Sticker: Advertising */}
              <div className="absolute top-1/2 -right-6 z-30 bg-[#F4A7C1] text-[#7C284C] px-4 py-1.5 rounded-full shadow-sm text-xs font-bold tracking-wide transform rotate-6 border border-white/70">
                Advertising ✦
              </div>

              {/* Background decorative editorial frame */}
              <div className="absolute -inset-4 border border-dashed border-[#241F21]/15 rounded-2xl pointer-events-none -z-10 transform rotate-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
