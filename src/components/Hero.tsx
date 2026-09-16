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
      className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 border-b border-[#241F21]/8 bg-[#FFF9F5] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Minimal Apple Typography */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#241F21]/8 shadow-2xs text-xs font-medium text-[#241F21]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Brand Strategy & Agency Roles</span>
            </div>

            {/* Apple-style Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#241F21] leading-[1.05]">
                Esha Shah.
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-[#7C284C]">
                Strategy. Planning. Research.
              </p>
            </div>

            {/* Sub-headline / Core Statement */}
            <p className="text-base sm:text-lg text-[#574F53] leading-relaxed max-w-xl font-normal">
              I decode consumers, dissect brand ecosystems, and turn rigorous qualitative research into clear, impactful advertising narratives.
            </p>

            {/* Apple-style Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="hero-explore-work-btn"
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#241F21] text-white hover:bg-black transition-all active:scale-[0.98] shadow-sm cursor-pointer"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                id="hero-view-experience-btn"
                onClick={onExploreExperience}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium bg-white border border-[#241F21]/15 text-[#241F21] hover:bg-[#FFF9F5] transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Agency Experience</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <a
                id="hero-linkedin-btn"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full text-xs sm:text-sm font-medium text-[#574F53] hover:text-[#241F21] transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Apple-style Understated Spec Dock */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#574F53]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C284C]" />
                <span>Publicis Groupe Intern</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A8D8EA]" />
                <span>9.0 CGPA Academic Track</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9E8C5]" />
                <span>K.P.B. Hinduja × IIDE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Apple Studio Hardware Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm">
              <div
                id="esha-portrait-frame"
                className="relative rounded-[32px] bg-white p-2.5 shadow-[0_24px_64px_-12px_rgba(0,0,0,0.07)] border border-[#241F21]/8 transition-transform duration-300 hover:scale-[1.01]"
              >
                {/* Photo container */}
                <div className="overflow-hidden rounded-[24px] aspect-[4/4.5] bg-[#F7EFE9] relative">
                  <img
                    src={eshaPhoto}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://i.ibb.co/0RwXLt0y/Screenshot-2026-09-15-143620.png';
                    }}
                    referrerPolicy="no-referrer"
                    alt="Esha Shah — Brand Strategist & Advertising Student"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  {/* Subtle Location Capsule */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-[11px] font-medium text-[#241F21] border border-black/5 shadow-2xs">
                    Mumbai, India
                  </div>
                </div>

                {/* Subtitle Under Portrait */}
                <div className="py-3 px-1 text-center">
                  <p className="text-base font-bold tracking-tight text-[#7C284C]">
                    Esha Shah
                  </p>
                  <p className="text-xs text-[#7C284C]/80 font-medium tracking-tight mt-0.5">
                    strategist in the making ✎
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
