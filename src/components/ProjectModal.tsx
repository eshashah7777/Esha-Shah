import { useEffect } from 'react';
import { X, CheckCircle, FileText, Compass, Layers, Lightbulb } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectOtherProject: (projectId: string) => void;
  allProjects: Project[];
}

export default function ProjectModal({
  project,
  onClose,
  onSelectOtherProject,
  allProjects
}: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const otherProjects = allProjects.filter((p) => p.id !== project.id);

  return (
    <div
      id="project-case-study-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/40 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#FFF9F5] rounded-[32px] border border-[#241F21]/10 shadow-2xl overflow-y-auto my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-4 bg-[#FFF9F5]/90 backdrop-blur-xl border-b border-[#241F21]/8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7C284C]" />
            <span className="text-xs uppercase tracking-wider font-semibold text-[#574F53]">
              Strategy Case Study Brief
            </span>
          </div>
          <button
            id="close-modal-btn"
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-2 rounded-full text-[#241F21] bg-black/5 hover:bg-black/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Title and Brand Header */}
          <div className="space-y-3 border-b border-[#241F21]/8 pb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-tight shadow-2xs"
                style={{
                  backgroundColor: project.slideTheme.badgeBg,
                  color: project.slideTheme.badgeText,
                  borderColor: project.accentColor
                }}
              >
                {project.brand}
              </span>
              <span className="text-xs font-medium text-[#574F53] px-2.5 py-0.5 rounded-full bg-[#241F21]/5">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#574F53] ml-auto">
                Agency Brief
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#241F21] leading-tight">
              {project.title}
            </h2>

            <p className="text-base sm:text-lg text-[#574F53] leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-white border border-[#241F21]/8 text-[#241F21]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Deck Slide Preview Canvas */}
          <div
            className="rounded-[24px] p-6 sm:p-8 border relative overflow-hidden shadow-xs"
            style={{
              backgroundColor: project.slideTheme.bg,
              borderColor: project.slideTheme.border
            }}
          >
            {/* Visual Deck Frame */}
            <div className="flex items-center justify-between border-b border-[#241F21]/10 pb-3 mb-5 text-xs text-[#574F53]">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#7C284C]" />
                <span className="font-semibold uppercase tracking-wider">
                  Publicis Groupe / Account Strategy Deck
                </span>
              </div>
              <span className="text-xs font-mono text-[#7C284C]">
                Slide 01 • Executive Overview
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#7C284C]">
                  Core Strategic Challenge
                </span>
                <p className="text-lg sm:text-xl font-bold text-[#241F21] mt-1 mb-3">
                  "{project.brief}"
                </p>
                <div className="flex items-center gap-2 text-xs font-medium text-[#574F53]">
                  <span className="w-2 h-2 rounded-full bg-[#7C284C]" />
                  <span>Conducted during Publicis Groupe internship</span>
                </div>
              </div>

              {/* Research Matrix Graphic representation */}
              <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#241F21]/8 shadow-2xs space-y-2.5 text-xs">
                <div className="font-semibold text-[#241F21] flex items-center justify-between">
                  <span>Research Pillars Analyzed</span>
                  <span className="text-[10px] text-[#7C284C] font-mono">100% AUDITED</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-[#FFF9F5]">
                    <span className="text-[#574F53]">Content & Messaging Tone</span>
                    <span className="font-semibold text-[#241F21]">Cross-Channel</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-[#FFF9F5]">
                    <span className="text-[#574F53]">Competitive Differentiation</span>
                    <span className="font-semibold text-[#241F21]">Benchmarked</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-[#FFF9F5]">
                    <span className="text-[#574F53]">Audience Sentiment</span>
                    <span className="font-semibold text-[#241F21]">Decoded</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Structured Sections (Brief, Role) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Brief */}
            <div className="p-6 rounded-[24px] bg-white border border-[#241F21]/8 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7C284C]">
                <Compass className="w-4 h-4" />
                <span>The Brief</span>
              </div>
              <p className="text-sm sm:text-base text-[#241F21] leading-relaxed">
                {project.brief}
              </p>
            </div>

            {/* My Role */}
            <div className="p-6 rounded-[24px] bg-white border border-[#241F21]/8 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0369A1]">
                <Layers className="w-4 h-4" />
                <span>My Role & Contribution</span>
              </div>
              <p className="text-sm sm:text-base text-[#241F21] leading-relaxed">
                {project.myRole}
              </p>
            </div>
          </div>

          {/* Strategic Approach (Research -> Analysis -> Insight) */}
          <div className="p-6 sm:p-8 rounded-[28px] bg-white border border-[#241F21]/8 shadow-2xs space-y-6">
            <h3 className="text-lg font-bold text-[#241F21]">
              Strategic Approach
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Step 1: Research */}
              <div className="p-4 rounded-2xl bg-[#FFF9F5] border border-[#241F21]/6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7C284C]">
                    01. Research
                  </span>
                  <span className="text-xs text-[#574F53]">Gather</span>
                </div>
                <p className="text-xs sm:text-sm text-[#241F21] leading-relaxed">
                  {project.approach.research}
                </p>
              </div>

              {/* Step 2: Analysis */}
              <div className="p-4 rounded-2xl bg-[#FFF9F5] border border-[#241F21]/6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5B21B6]">
                    02. Analysis
                  </span>
                  <span className="text-xs text-[#574F53]">Compare</span>
                </div>
                <p className="text-xs sm:text-sm text-[#241F21] leading-relaxed">
                  {project.approach.analysis}
                </p>
              </div>

              {/* Step 3: Insight */}
              <div className="p-4 rounded-2xl bg-[#FFF9F5] border border-[#241F21]/6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0369A1]">
                    03. Insight
                  </span>
                  <span className="text-xs text-[#574F53]">Discover</span>
                </div>
                <p className="text-xs sm:text-sm text-[#241F21] leading-relaxed">
                  {project.approach.insight}
                </p>
              </div>
            </div>
          </div>

          {/* Deliverables & Key Takeaway */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Deliverables */}
            <div className="md:col-span-6 p-6 rounded-[24px] bg-white border border-[#241F21]/8 shadow-2xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#574F53] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#7C284C]" />
                Deliverables Created
              </h4>
              <ul className="space-y-2">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-[#241F21]">
                    <CheckCircle className="w-4 h-4 text-[#7C284C] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Strategic Takeaway */}
            <div className="md:col-span-6 p-6 rounded-[24px] bg-white border border-[#7C284C]/20 shadow-2xs space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7C284C]">
                  <Lightbulb className="w-4 h-4" />
                  <span>Key Strategic Takeaway</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-[#241F21] mt-2 leading-snug">
                  "{project.keyTakeaway}"
                </p>
              </div>
              <p className="text-xs text-[#7C284C] font-medium mt-3">
                Turning qualitative research into sharp creative direction
              </p>
            </div>
          </div>

          {/* Navigation between other case studies */}
          <div className="pt-6 border-t border-[#241F21]/8">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#574F53] mb-3">
              Explore Other Projects:
            </p>
            <div className="flex flex-wrap gap-2">
              {otherProjects.map((other) => (
                <button
                  key={other.id}
                  onClick={() => onSelectOtherProject(other.id)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white hover:bg-[#FFF9F5] border border-[#241F21]/8 hover:border-[#7C284C]/40 text-[#241F21] transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{other.brand}</span>
                  <span className="text-[#574F53]">•</span>
                  <span className="text-[11px] text-[#574F53]">{other.category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
