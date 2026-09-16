import { SKILLS } from '../data/portfolio';

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28 border-b border-[#241F21]/8 bg-[#FFF9F5] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-12 sm:mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#7C284C]">
            Capabilities & Competencies
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#241F21] mt-2">
            The Skills I Learned.
          </h2>
          <p className="text-sm sm:text-base text-[#574F53] mt-2 leading-relaxed">
            The strategic methodology, research platforms, and creative frameworks applied to live client accounts.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((skill, index) => (
            <div
              key={skill.id}
              id={`skill-card-${skill.id}`}
              className="p-6 rounded-[24px] bg-white border border-[#241F21]/8 shadow-[0_2px_16px_rgba(0,0,0,0.02)] transition-all duration-200 hover:border-[#241F21]/15 hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-medium text-[#574F53]">
                    0{index + 1}
                  </span>
                  <span className="text-[11px] font-medium text-[#574F53] bg-[#FFF9F5] px-2.5 py-0.5 rounded-full border border-[#241F21]/6">
                    {skill.category}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-[#241F21] mb-2 tracking-tight">
                  {skill.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#574F53] leading-relaxed">
                  {skill.shortDesc}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#241F21]/6 flex items-center justify-between text-xs text-[#574F53]">
                <span>Practical Agency Application</span>
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Apple-style Subtle Footer Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#241F21]/8 text-xs text-[#574F53] shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C284C]" />
            <span>Continuous learner across cultural trends, consumer anthropology & marketing intelligence.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
