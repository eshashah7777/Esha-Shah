import { GraduationCap, Award, BookOpen, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export default function Education() {
  const { education } = PERSONAL_INFO;

  return (
    <section
      id="education"
      className="py-16 sm:py-24 border-b border-[#241F21]/10 bg-[#FFF9F5] relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <span className="font-handwriting text-2xl text-[#7C284C] block -rotate-1">
            academic foundation ✦
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#241F21] mt-1">
            Education
          </h2>
          <p className="text-sm sm:text-base text-[#574F53] mt-2">
            Blending academic rigor in business commerce with cutting-edge digital marketing practice.
          </p>
        </div>

        {/* Featured Education Card with Editorial Scrapbook Touch */}
        <div className="washi-tape washi-tape-blue relative bg-white rounded-3xl p-6 sm:p-10 border border-[#241F21]/10 shadow-sm overflow-hidden">
          {/* Subtle background badge watermark */}
          <div className="absolute -right-8 -bottom-8 opacity-5 pointer-events-none select-none">
            <GraduationCap className="w-72 h-72 text-[#241F21]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Degree & Institution Info */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#A8D8EA]/30 text-[#0369A1] border border-[#A8D8EA]">
                  {education.period}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#241F21]/5 text-[#241F21]">
                  {education.currentYear}
                </span>
                <span className="font-handwriting text-sm text-[#7C284C]">
                  Mumbai, India
                </span>
              </div>

              <div>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#241F21] leading-tight">
                  {education.degree}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-base sm:text-lg font-medium text-[#574F53]">
                  <Building2 className="w-5 h-5 text-[#7C284C] shrink-0" />
                  <span>{education.institution}</span>
                </div>
              </div>

              {/* Partnership callout */}
              <div className="p-3.5 rounded-xl bg-[#FFF9F5] border border-[#241F21]/10 flex items-center gap-3 max-w-lg">
                <div className="w-8 h-8 rounded-lg bg-[#F4A7C1]/30 flex items-center justify-center text-sm font-bold text-[#7C284C] shrink-0">
                  ✦
                </div>
                <div className="text-xs sm:text-sm text-[#241F21]">
                  <span className="font-semibold text-[#7C284C]">{education.partnership}</span>
                  <p className="text-[#574F53] text-xs">Curriculum integrating real-world digital tools, agency live briefs, and performance simulations.</p>
                </div>
              </div>

              {/* Core Focus Areas */}
              <div className="pt-2">
                <p className="text-xs font-semibold text-[#574F53] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#7C284C]" />
                  Key Modules & Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#FFF9F5] border border-[#241F21]/10 text-[#241F21] flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#7C284C]" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Academic Accolade / CGPA Badge */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-[#FFF9F5] border border-[#241F21]/10 text-center relative">
              {/* Little sticker on corner */}
              <div className="absolute -top-3 -right-2 bg-[#D9E8C5] text-[#3F6212] px-3 py-1 rounded-full text-[11px] font-bold shadow-xs transform rotate-6 border border-white">
                Top Tier ★
              </div>

              <div className="w-14 h-14 rounded-full bg-[#F4A7C1]/30 flex items-center justify-center text-[#7C284C] mb-3">
                <Award className="w-7 h-7" />
              </div>

              <div className="font-serif-display text-4xl sm:text-5xl font-extrabold text-[#241F21] tracking-tight">
                {education.cgpa}
              </div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#7C284C] mt-1">
                Cumulative GPA
              </p>
              <p className="text-xs text-[#574F53] mt-2 max-w-[200px]">
                Maintained across digital business, analytics, and marketing coursework.
              </p>

              <div className="mt-4 pt-3 border-t border-[#241F21]/10 w-full font-handwriting text-base text-[#7C284C]">
                "consistent excellence ✦"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
