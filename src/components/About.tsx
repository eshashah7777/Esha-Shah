import { PERSONAL_INFO } from '../data/portfolio';

export default function About() {
  const { about } = PERSONAL_INFO;

  const coreStrengths = [
    {
      title: 'Brand Decoding',
      desc: 'Dissecting visual cues, messaging hierarchies, and positioning nuances across industries.',
      accent: '#F4A7C1'
    },
    {
      title: 'Consumer Empathy',
      desc: 'Uncovering authentic human truths beneath metrics through social listening and sentiment scans.',
      accent: '#A8D8EA'
    },
    {
      title: 'Strategic Synthesis',
      desc: 'Transforming messy qualitative findings into clear, inspiring presentation decks and briefs.',
      accent: '#D9E8C5'
    }
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-28 border-b border-[#241F21]/8 bg-[#FFF9F5] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-12 sm:mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#7C284C]">
            Profile & Perspective
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#241F21] mt-2">
            About Me.
          </h2>
          <p className="text-sm sm:text-base text-[#574F53] mt-2 leading-relaxed">
            Exploring where human psychology meets brand strategy, creating work that connects instead of merely selling.
          </p>
        </div>

        {/* Apple-style Bento Layout */}
        <div className="space-y-6">
          {/* Main Narrative Bento Card */}
          <div className="bg-white rounded-[28px] p-7 sm:p-10 border border-[#241F21]/8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4 text-base sm:text-lg text-[#241F21] leading-relaxed">
                <p>{about.bio}</p>
                <p className="text-[#574F53] text-base leading-relaxed">{about.interest}</p>
                <div className="pt-2">
                  <p className="text-sm text-[#7C284C] font-medium border-l-2 border-[#7C284C] pl-4 py-1">
                    {about.inspiration}
                  </p>
                </div>
              </div>

              {/* Education & Academic Spec Capsule */}
              <div className="lg:col-span-4 bg-[#FFF9F5] rounded-2xl p-5 border border-[#241F21]/6 space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7C284C] block">
                  Education & Honors
                </span>
                <p className="text-sm font-semibold text-[#241F21]">
                  K.P.B. Hinduja × IIDE
                </p>
                <p className="text-xs text-[#574F53]">
                  Digital Business & Advertising (3rd Year)
                </p>
                <div className="pt-2 border-t border-[#241F21]/8 flex items-center justify-between text-xs">
                  <span className="text-[#574F53]">Academic Standing</span>
                  <span className="font-semibold text-[#7C284C] bg-white px-2 py-0.5 rounded-full border border-[#241F21]/6">
                    9.0 CGPA
                  </span>
                </div>
              </div>
            </div>

            {/* Currently Into / Focus Areas Pill Flow */}
            <div className="pt-4 border-t border-[#241F21]/8">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#574F53] block mb-3">
                Currently Exploring
              </span>
              <div className="flex flex-wrap gap-2">
                {about.currentlyInto.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#FFF9F5] border border-[#241F21]/8 text-[#241F21] transition-colors hover:border-[#7C284C]/30 hover:text-[#7C284C]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3-Column Core Capabilities Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {coreStrengths.map((strength) => (
              <div
                key={strength.title}
                className="p-6 rounded-[24px] bg-white border border-[#241F21]/8 shadow-[0_2px_16px_rgba(0,0,0,0.02)] transition-all hover:border-[#241F21]/15 hover:shadow-sm"
              >
                <div
                  className="w-7 h-7 rounded-full mb-4 flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: strength.accent, color: '#241F21' }}
                >
                  ✦
                </div>
                <h3 className="text-base font-semibold text-[#241F21] mb-2 tracking-tight">
                  {strength.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#574F53] leading-relaxed">
                  {strength.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
