import { ArrowUp, Heart, Sparkles, Mail, Linkedin, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#FFF9F5] border-t border-[#241F21]/10 py-12 text-[#241F21]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#241F21]/10">
          <div>
            <span className="font-serif-display text-2xl font-bold tracking-tight text-[#241F21]">
              ESHA SHAH
            </span>
            <p className="text-sm font-medium text-[#574F53] mt-0.5">
              Digital Business & Advertising
            </p>
            <p className="font-handwriting text-base text-[#7C284C] mt-1">
              turning research into ideas ✦
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <button
              onClick={() => onNavigate('work')}
              className="text-[#574F53] hover:text-[#7C284C] transition-colors cursor-pointer"
            >
              Portfolio Work
            </button>
            <button
              onClick={() => onNavigate('experience')}
              className="text-[#574F53] hover:text-[#7C284C] transition-colors cursor-pointer"
            >
              Agency Experience
            </button>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#574F53] hover:text-[#0369A1] transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[#574F53] hover:text-[#7C284C] transition-colors inline-flex items-center gap-1"
            >
              <span>Email</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="self-start md:self-auto p-2.5 rounded-full bg-white border border-[#241F21]/10 text-[#241F21] hover:bg-[#F4A7C1]/20 hover:border-[#7C284C] transition-all shadow-2xs cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#574F53]">
          <p>© 2026 Esha Shah. Made with curiosity & caffeine.</p>
          <p className="flex items-center gap-1">
            <span>Crafted for advertising agencies, creative directors & brand strategists</span>
            <span className="text-[#7C284C]">✦</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
