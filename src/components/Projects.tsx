import { useState } from 'react';
import { ArrowRight, Eye } from 'lucide-react';
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
      className="py-20 sm:py-28 border-b border-[#241F21]/8 bg-[#FFF9F5] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#7C284C]">
              Selected Strategy & Research
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#241F21] mt-2">
              Work.
            </h2>
            <p className="text-sm sm:text-base text-[#574F53] mt-2 leading-relaxed">
              From 360° competitive scans to social listening audits and brand manifesto research.
            </p>
          </div>

          <div className="text-xs text-[#574F53] bg-white px-3.5 py-1.5 rounded-full border border-[#241F21]/8 self-start md:self-end">
            Click any project for deep-dive deck
          </div>
        </div>

        {/* Apple Segmented Control Filter */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1 bg-white rounded-full border border-[#241F21]/8 shadow-2xs min-w-max">
            {FILTER_OPTIONS.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#241F21] text-white shadow-2xs'
                      : 'text-[#574F53] hover:text-[#241F21]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => onSelectProject(project.id)}
              className="group bg-white rounded-[28px] overflow-hidden border border-[#241F21]/8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#241F21]/15 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
            >
              {/* Slide Deck Canvas Header */}
              <div
                className="p-6 sm:p-7 relative aspect-[16/10] flex flex-col justify-between overflow-hidden"
                style={{
                  backgroundColor: project.slideTheme.bg,
                  borderColor: project.slideTheme.border
                }}
              >
                {/* Brand and Category Pill */}
                <div className="flex items-center justify-between z-10">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold tracking-tight shadow-2xs"
                    style={{
                      backgroundColor: project.slideTheme.badgeBg,
                      color: project.slideTheme.badgeText
                    }}
                  >
                    {project.brand}
                  </span>
                  <span className="text-[11px] font-mono text-[#574F53] px-2.5 py-0.5 rounded-full bg-white/70 backdrop-blur-xs border border-black/5">
                    Agency Brief
                  </span>
                </div>

                {/* Center Presentation Title */}
                <div className="my-auto z-10 max-w-sm">
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#574F53] mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug text-[#241F21]">
                    {project.title}
                  </h3>
                </div>

                {/* Footer preview note inside canvas */}
                <div className="flex items-center justify-between text-xs text-[#574F53] z-10 pt-2 border-t border-black/5">
                  <span className="truncate max-w-[200px]">{project.deliverables[0] || 'Strategic Deck'}</span>
                  <span className="flex items-center gap-1 font-medium text-[#7C284C]">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Deck</span>
                  </span>
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <p className="text-xs sm:text-sm text-[#574F53] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Insight Chip */}
                  <div className="mt-4 p-3.5 rounded-2xl bg-[#FFF9F5] border border-[#241F21]/6 text-xs text-[#241F21] leading-relaxed">
                    <span className="font-semibold text-[#7C284C] block mb-0.5">
                      Strategic Insight:
                    </span>
                    {project.keyTakeaway}
                  </div>
                </div>

                {/* Card Footer with CTA */}
                <div className="pt-4 border-t border-[#241F21]/8 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#FFF9F5] border border-[#241F21]/6 text-[#574F53]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7C284C] group-hover:translate-x-0.5 transition-transform">
                    <span>Open Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#241F21]/8 p-8">
            <p className="text-sm text-[#574F53]">
              No projects found in this category.
            </p>
            <button
              onClick={() => setActiveFilter('All')}
              className="mt-3 text-xs font-semibold text-[#7C284C] underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
