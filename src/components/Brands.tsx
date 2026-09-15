import { ArrowUpRight, Sparkles } from 'lucide-react';
import { BRANDS } from '../data/portfolio';

interface BrandsProps {
  onSelectProject: (projectId: string) => void;
}

export default function Brands({ onSelectProject }: BrandsProps) {
  return (
    <section
      id="brands"
      className="py-16 sm:py-24 border-b border-[#241F21]/10 bg-[#FFF9F5] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <span className="font-handwriting text-2xl text-[#7C284C] block -rotate-1">
              portfolio client roster ✦
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#241F21] mt-1">
              Brands I've worked on
            </h2>
            <p className="text-sm sm:text-base text-[#574F53] mt-2">
              Audits, 360° competitor scans, social listening, and visual research across leading national & global brands.
            </p>
          </div>

          <span className="font-handwriting text-base text-[#7C284C] self-start sm:self-end">
            hover to reveal project scope ✎
          </span>
        </div>

        {/* Brands Grid (PRD Section 17) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {BRANDS.map((brand) => (
            <button
              key={brand.id}
              id={`brand-card-${brand.id}`}
              onClick={() => brand.projectId && onSelectProject(brand.projectId)}
              className="group text-left p-5 sm:p-6 rounded-2xl bg-white border border-[#241F21]/10 hover:border-[#7C284C] shadow-2xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between min-h-[160px] relative overflow-hidden cursor-pointer"
            >
              {/* Corner colored accent dot */}
              <div
                className="w-2 h-2 rounded-full absolute top-4 right-4 group-hover:scale-150 transition-transform"
                style={{ backgroundColor: brand.accent }}
              />

              <div>
                <span className="text-[10px] font-semibold text-[#574F53] uppercase tracking-wider block mb-1">
                  {brand.category}
                </span>
                <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#241F21] group-hover:text-[#7C284C] transition-colors leading-tight">
                  {brand.name}
                </h3>
              </div>

              {/* Hover revealed description as required in PRD Section 17 */}
              <div className="mt-4 pt-3 border-t border-[#241F21]/5">
                <p className="text-xs text-[#574F53] group-hover:text-[#241F21] transition-colors line-clamp-2 leading-relaxed">
                  {brand.roleDescription}
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] font-semibold text-[#7C284C] opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>{brand.badge}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Agency Footnote */}
        <div className="mt-10 text-center text-xs text-[#574F53]">
          <span>Conducted as part of account management, competitive benchmarking & digital strategy engagements.</span>
        </div>
      </div>
    </section>
  );
}
