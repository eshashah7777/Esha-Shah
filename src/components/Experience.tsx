import { EXPERIENCES } from '../data/portfolio';

interface ExperienceProps {
  onSelectProject?: (projectId: string) => void;
}

export default function Experience({ onSelectProject: _onSelectProject }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 border-b border-[#241F21]/8 bg-[#FFF9F5] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-12 sm:mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#7C284C]">
            Industry Background
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#241F21] mt-2">
            Experience.
          </h2>
          <p className="text-sm sm:text-base text-[#574F53] mt-2 leading-relaxed">
            Real agency client servicing, competitive intelligence, consumer audits, and category benchmarking.
          </p>
        </div>

        <div className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              id={`experience-${exp.id}`}
              className="bg-white rounded-[28px] p-7 sm:p-10 border border-[#241F21]/8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all hover:border-[#241F21]/15"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#241F21]/8 pb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#7C284C]">
                      {exp.company}
                    </span>
                    {exp.featured && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#7C284C]/10 text-[#7C284C]">
                        Featured Agency Role
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#241F21]">
                    {exp.role}
                  </h3>
                  {exp.badge && (
                    <p className="text-xs font-medium text-[#574F53] mt-1">
                      {exp.badge}
                    </p>
                  )}
                </div>

                <div className="sm:text-right flex sm:flex-col items-center sm:items-end justify-between gap-1">
                  <span className="inline-block px-3.5 py-1 rounded-full text-xs font-medium bg-[#FFF9F5] border border-[#241F21]/8 text-[#241F21]">
                    {exp.period}
                  </span>
                  <span className="text-xs text-[#574F53]">
                    Mumbai, India
                  </span>
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="mt-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#574F53] block mb-3">
                  Key Responsibilities & Deliverables
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {exp.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#574F53] bg-[#FFF9F5] p-3 rounded-2xl border border-[#241F21]/6"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C284C] mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Competencies Badges */}
              <div className="mt-6 pt-5 border-t border-[#241F21]/8 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-[#574F53] mr-1">
                  Core Skills:
                </span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#FFF9F5] border border-[#241F21]/8 text-[#241F21]"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
