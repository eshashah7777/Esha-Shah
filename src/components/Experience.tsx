import { Briefcase, ArrowUpRight, MessageCircle, TrendingUp, Users, CheckCircle2, Star, Sparkles, Building } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolio';

interface ExperienceProps {
  onSelectProject: (projectId: string) => void;
}

export default function Experience({ onSelectProject }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="py-16 sm:py-24 border-b border-[#241F21]/10 bg-[#FFF9F5] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <span className="font-handwriting text-2xl text-[#7C284C] block -rotate-1">
            career journey & agency work ✦
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#241F21] mt-1">
            Experience
          </h2>
          <p className="text-sm sm:text-base text-[#574F53] mt-2">
            Real agency client servicing, brand scans, qualitative research, and high-conversion client communication.
          </p>
        </div>

        <div className="space-y-12">
          {/* Publicis Groupe (FEATURED EXPERIENCE) */}
          <div
            id="experience-publicis"
            className="washi-tape washi-tape-lavender bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#C9B6E4]/70 shadow-md relative"
          >
            {/* Featured Badge */}
            <div className="absolute -top-3 right-6 sm:right-10 bg-[#7C284C] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Featured Agency Experience</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#241F21]/10 pb-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7C284C]">
                  Leading Global Communications Network
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#241F21]">
                  Publicis Groupe
                </h3>
                <p className="text-base sm:text-lg font-medium text-[#574F53]">
                  Account Management Intern
                </p>
              </div>
              <div className="sm:text-right">
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#C9B6E4]/25 text-[#5B21B6] border border-[#C9B6E4]">
                  June 2026 – September 2026
                </span>
                <p className="text-xs text-[#574F53] mt-1">Mumbai, India</p>
              </div>
            </div>

            {/* Description & Impact */}
            <p className="text-sm sm:text-base text-[#241F21] mt-4 leading-relaxed max-w-3xl">
              Immersed in account management and brand strategy, working directly on high-profile accounts. Prepared cross-platform competitive scans, consumer sentiment audits, visual/audio moodboard references, and category benchmarking decks for brand leads.
            </p>

            {/* Publicis Client Projects - Clickable Cards Grid as requested in PRD Section 12 */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-serif-display text-lg sm:text-xl font-bold text-[#241F21] flex items-center gap-2">
                  <span>Client Projects Handled</span>
                  <span className="text-xs font-sans font-normal text-[#574F53]">
                    (click to inspect case study)
                  </span>
                </h4>
                <span className="font-handwriting text-base text-[#7C284C]">
                  6 accounts scanned ✦
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {EXPERIENCES[0].projects?.map((item) => (
                  <button
                    key={item.brand}
                    id={`exp-proj-${item.projectId || item.brand.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => item.projectId && onSelectProject(item.projectId)}
                    className="group text-left p-4 rounded-2xl bg-[#FFF9F5] border border-[#241F21]/10 hover:border-[#7C284C] hover:bg-white transition-all shadow-2xs hover:shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-serif-display text-base font-bold text-[#241F21] group-hover:text-[#7C284C] transition-colors">
                          {item.brand}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-[#574F53] group-hover:text-[#7C284C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      <p className="text-xs text-[#574F53] leading-relaxed">
                        {item.task}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-[#241F21]/5 flex items-center justify-between text-[11px] text-[#7C284C] font-semibold">
                      <span>View Deck Brief</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Core Competencies badges */}
            <div className="mt-6 pt-5 border-t border-[#241F21]/10 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#574F53] uppercase tracking-wider mr-2">
                Agency Competencies:
              </span>
              {EXPERIENCES[0].skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-[#241F21]/10 text-[#241F21]"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* IIDE – The Digital School */}
          <div
            id="experience-iide"
            className="washi-tape washi-tape-green bg-white rounded-3xl p-6 sm:p-8 border border-[#241F21]/10 shadow-xs relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#241F21]/10 pb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#3F6212]">
                  EdTech & Digital Education
                </span>
                <h3 className="font-serif-display text-2xl font-bold text-[#241F21]">
                  IIDE – The Digital School
                </h3>
                <p className="text-base font-medium text-[#574F53]">
                  Trainee Academic Counsellor
                </p>
              </div>
              <div className="sm:text-right">
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#D9E8C5]/40 text-[#3F6212] border border-[#D9E8C5]">
                  December 2025 – February 2026
                </span>
                <p className="text-xs text-[#574F53] mt-1">Mumbai, India</p>
              </div>
            </div>

            {/* Key Accomplishments from PRD */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#FFF9F5] border border-[#241F21]/10">
                <div className="font-serif-display text-2xl font-bold text-[#241F21]">
                  40–50+
                </div>
                <p className="text-xs font-semibold text-[#7C284C] uppercase tracking-wider mt-0.5">
                  Daily Leads Managed
                </p>
                <p className="text-xs text-[#574F53] mt-1">
                  Handled inbound and outbound prospective students via direct calls and WhatsApp.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFF9F5] border border-[#241F21]/10">
                <div className="font-serif-display text-2xl font-bold text-[#3F6212]">
                  60%
                </div>
                <p className="text-xs font-semibold text-[#3F6212] uppercase tracking-wider mt-0.5">
                  Lead Conversion Rate
                </p>
                <p className="text-xs text-[#574F53] mt-1">
                  Converted cold and warm student leads into qualified, attended academic counselling sessions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFF9F5] border border-[#241F21]/10">
                <div className="font-serif-display text-2xl font-bold text-[#241F21]">
                  High-Touch
                </div>
                <p className="text-xs font-semibold text-[#5B21B6] uppercase tracking-wider mt-0.5">
                  Advisory & Persuasion
                </p>
                <p className="text-xs text-[#574F53] mt-1">
                  Mastered consultative selling, objection handling, active listening, and student empathy.
                </p>
              </div>
            </div>

            {/* Required skill badges with icons as per PRD Section 12 */}
            <div className="mt-6 pt-4 border-t border-[#241F21]/10 flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold text-[#574F53] uppercase tracking-wider">
                Developed Skills:
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#FFF9F5] border border-[#241F21]/10 text-[#241F21]">
                  <MessageCircle className="w-3.5 h-3.5 text-[#7C284C]" />
                  Communication
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#FFF9F5] border border-[#241F21]/10 text-[#241F21]">
                  <TrendingUp className="w-3.5 h-3.5 text-[#3F6212]" />
                  Sales
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#FFF9F5] border border-[#241F21]/10 text-[#241F21]">
                  <Users className="w-3.5 h-3.5 text-[#0369A1]" />
                  Lead Management
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#FFF9F5] border border-[#241F21]/10 text-[#241F21]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B21B6]" />
                  Negotiation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
