import { Building2, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export default function Education() {
  const { education } = PERSONAL_INFO;

  return (
    <section
      id="education"
      className="py-20 sm:py-28 border-b border-[#241F21]/8 bg-[#FFF9F5] relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-12 sm:mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#7C284C]">
            Academic Foundation
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#241F21] mt-2">
            Education.
          </h2>
          <p className="text-sm sm:text-base text-[#574F53] mt-2 leading-relaxed">
            Integrating rigorous business commerce fundamentals with real-world digital marketing and strategy.
          </p>
        </div>

        {/* Apple-style Education Bento Card */}
        <div className="bg-white rounded-[28px] p-7 sm:p-10 border border-[#241F21]/8 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Degree & Institution Info */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#241F21] text-white">
                  {education.period}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#FFF9F5] border border-[#241F21]/8 text-[#574F53]">
                  {education.currentYear}
                </span>
                <span className="text-xs text-[#574F53] ml-1">
                  Mumbai, India
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#241F21]">
                  {education.degree}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-base text-[#574F53]">
                  <Building2 className="w-4 h-4 text-[#7C284C] shrink-0" />
                  <span>{education.institution}</span>
                </div>
              </div>

              {/* Partnership callout */}
              <div className="p-4 rounded-2xl bg-[#FFF9F5] border border-[#241F21]/6 text-xs sm:text-sm text-[#574F53] leading-relaxed">
                <span className="font-semibold text-[#7C284C] block mb-1">
                  {education.partnership}
                </span>
                Curriculum integrating industry-standard digital tools, agency live briefs, qualitative research labs, and performance simulations.
              </div>

              {/* Core Focus Areas */}
              <div>
                <p className="text-xs font-semibold text-[#574F53] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#7C284C]" />
                  Key Modules & Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#FFF9F5] border border-[#241F21]/8 text-[#241F21] flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#7C284C]" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Academic Accolade / CGPA Stat Block */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-[#FFF9F5] border border-[#241F21]/6 text-center">
              <div className="w-12 h-12 rounded-full bg-white border border-[#241F21]/6 flex items-center justify-center text-[#7C284C] mb-3 shadow-2xs">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-5xl font-extrabold text-[#241F21] tracking-tight">
                {education.cgpa.replace(' CGPA', '')}
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#7C284C] mt-1">
                Cumulative GPA
              </p>
              <p className="text-xs text-[#574F53] mt-2 max-w-[180px]">
                Consistently ranked in the top academic percentile
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
