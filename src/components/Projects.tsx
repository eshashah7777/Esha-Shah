import { useState } from 'react';
import { ArrowRight, Filter, Sparkles, ExternalLink, Eye } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS, FILTER_OPTIONS } from '../data/portfolio';

interface ProjectsProps {
  onSelectProject: (projectId: string) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.filterCategories.includes(activeFilter));

  return (
    <section
      id="work"
      className="py-16 sm:py-24 border-b border-[#241F21]/10 bg-[#FFF9F5] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading & Editorial Note */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <span className="font-handwriting text-2xl text-[#7C284C] block -rotate-1">
              curated strategy & research ✦
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#241F21] mt-1">
              Things I've worked on
            </h2>
            <p className="text-sm sm:text-base text-[#574F53] mt-2">
              From 360° competitive scans to social listening audits and manifesto film research.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[#7C284C] bg-[#F4A7C1]/20 px-3.5 py-1.5 rounded-full self-start md:self-end border border-[#F4A7C1]/50">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Click any card for full strategic breakdown</span>
          </div>
        </div>

        {/* Interactive Filter Pills (PRD Section 14) */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            <span className="text-xs font-semibold text-[#574F53] uppercase tracking-wider flex items-center gap-1.5 mr-1">
              <Filter className="w-3.5 h-3.5 text-[#7C284C]" />
              Filter:
            </span>
            {FILTER_OPTIONS.map((cat) => {
              const isActive = activeFilter === cat;
              const count = cat === 'All'
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.filterCategories.includes(cat)).length;

              return (
                <button
                  key={cat}
                  id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#241F21] text-[#FFF9F5] shadow-xs'
                      : 'bg-white hover:bg-[#F4A7C1]/20 text-[#574F53] hover:text-[#241F21] border border-[#241F21]/10'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-[#7C284C] text-white' : 'bg-[#241F21]/10 text-[#574F53]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Large Project Cards Grid (PRD Section 13) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const padNum = `0${PROJECTS.findIndex((p) => p.id === project.id) + 1}`;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject(project.id)}
                className="group cursor-pointer rounded-3xl bg-white border border-[#241F21]/15 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between transform hover:-translate-y-1 relative"
              >
                {/* Top Deck Presentation Banner / Slide Canvas */}
                <div
                  className="p-6 sm:p-7 border-b transition-colors relative overflow-hidden"
                  style={{
                    backgroundColor: project.slideTheme.bg,
                    borderColor: project.slideTheme.border
                  }}
                >
                  {/* Floating Number watermark / Stamp */}
                  <div className="absolute top-4 right-5 font-serif-display text-4xl sm:text-5xl font-extrabold opacity-15 text-[#241F21] select-none pointer-events-none">
                    {padNum}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border shadow-2xs"
                      style={{
                        backgroundColor: project.slideTheme.badgeBg,
                        color: project.slideTheme.badgeText,
                        borderColor: project.accentColor
                      }}
                    >
                      {project.brand}
                    </span>
                    <span className="text-xs font-medium text-[#574F53]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#241F21] group-hover:text-[#7C284C] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Micro-insight preview snippet */}
                  <div className="mt-4 p-3 rounded-xl bg-white/80 backdrop-blur-xs border border-[#241F21]/10 text-xs text-[#241F21]">
                    <span className="font-semibold text-[#7C284C]">Strategic Focus: </span>
                    <span>{project.brief}</span>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <p className="text-sm text-[#574F53] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#FFF9F5] border border-[#241F21]/10 text-[#241F21]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer Action Button */}
                    <div className="pt-3 border-t border-[#241F21]/10 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#7C284C] group-hover:underline flex items-center gap-1">
                        <span>View Project Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="text-xs font-handwriting text-[#574F53]">
                        slide overview ✦
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State if filter returns nothing */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#241F21]/10 p-8">
            <p className="text-base text-[#574F53]">
              No projects match the selected filter category.
            </p>
            <button
              onClick={() => setActiveFilter('All')}
              className="mt-3 text-sm font-semibold text-[#7C284C] underline cursor-pointer"
            >
              Reset to view all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
