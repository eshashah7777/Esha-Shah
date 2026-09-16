import { useState } from 'react';
import { Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { SKILLS } from '../data/portfolio';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 border-b border-[#241F21]/10 bg-[#FFF9F5] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <span className="font-handwriting text-2xl text-[#7C284C] block -rotate-1">
            capabilities & competencies ✦
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#241F21] mt-1">
            The Skills I Learned
          </h2>
          <p className="text-sm sm:text-base text-[#574F53] mt-2">
            The toolkit I bring to agency strategy desks, client servicing, and digital research.
          </p>
        </div>

        {/* Skills Cards Grid with Hover Detail Expansion as per PRD Section 15 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((skill, index) => {
            const isHovered = hoveredSkill === skill.id;

            return (
              <div
                key={skill.id}
                id={`skill-card-${skill.id}`}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`p-6 rounded-2xl bg-white border transition-all duration-200 shadow-2xs flex flex-col justify-between relative group ${
                  isHovered
                    ? 'border-[#7C284C] shadow-md -translate-y-1 bg-[#FFF9F5]'
                    : 'border-[#241F21]/10 hover:border-[#241F21]/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shadow-2xs"
                      style={{ backgroundColor: skill.color, color: '#241F21' }}
                    >
                      0{index + 1}
                    </span>
                    <span className="text-[11px] font-medium text-[#574F53] uppercase tracking-wider bg-[#241F21]/5 px-2.5 py-0.5 rounded-full">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#241F21] mb-2 group-hover:text-[#7C284C] transition-colors">
                    {skill.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#574F53] leading-relaxed transition-opacity">
                    {skill.shortDesc}
                  </p>
                </div>

                {/* Subtle Interactive Micro-Badge */}
                <div className="mt-4 pt-3 border-t border-[#241F21]/5 flex items-center justify-between text-xs">
                  <span className="font-handwriting text-sm text-[#7C284C]">
                    ✦ practical agency application
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full transition-transform ${
                      isHovered ? 'scale-125 bg-[#7C284C]' : 'bg-[#241F21]/20'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Playful Scrapbook Note at Bottom */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFFDE6] border border-[#E9E4B2] shadow-2xs">
            <span className="font-handwriting text-lg text-[#241F21]">
              "Always excited to pick up new tools, research platforms & analytical frameworks."
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
