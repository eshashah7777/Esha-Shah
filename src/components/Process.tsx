import { ArrowRight, Brain, Lightbulb, Compass, Sparkles, HelpCircle } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolio';

export default function Process() {
  return (
    <section
      id="process"
      className="py-16 sm:py-24 border-b border-[#241F21]/10 bg-[#FFF9F5] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <span className="font-handwriting text-2xl text-[#7C284C] block -rotate-1">
            strategic mindset & methodology ✦
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#241F21] mt-1">
            "My brain works like..."
          </h2>
          <p className="text-sm sm:text-base text-[#574F53] mt-2">
            A 5-step intuitive loop for turning scattered observations into razor-sharp brand ideas.
          </p>
        </div>

        {/* 5-Step Process Flow (PRD Section 16) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              id={`process-step-${step.number}`}
              className="p-5 rounded-2xl bg-white border border-[#241F21]/10 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between relative group hover:-translate-y-1"
            >
              {/* Connector Arrow on desktop */}
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-[#7C284C]">
                  <ArrowRight className="w-5 h-5 bg-[#FFF9F5] rounded-full p-0.5" />
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-serif-display text-sm font-bold shadow-2xs"
                    style={{ backgroundColor: step.accent, color: '#241F21' }}
                  >
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono text-[#574F53] uppercase tracking-wider">
                    Step {idx + 1}
                  </span>
                </div>

                <h3 className="font-serif-display text-xl font-bold text-[#241F21] mb-1">
                  {step.name}
                </h3>

                {/* Question */}
                <div className="p-2.5 rounded-lg bg-[#FFF9F5] border border-[#241F21]/5 my-3">
                  <p className="font-serif italic text-xs font-semibold text-[#7C284C] leading-snug">
                    "{step.question}"
                  </p>
                </div>

                <p className="text-xs text-[#574F53] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#241F21]/5 flex items-center justify-between text-[11px] font-handwriting text-[#7C284C]">
                <span>phase {step.number}</span>
                <span>✦</span>
              </div>
            </div>
          ))}
        </div>

        {/* Process philosophy banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white/70 border border-dashed border-[#241F21]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C9B6E4]/30 flex items-center justify-center text-[#5B21B6] shrink-0">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif-display font-bold text-[#241F21] text-base">
                Data without human interpretation is just noise.
              </p>
              <p className="text-xs text-[#574F53]">
                Good advertising happens when real human insights reshape the commercial narrative.
              </p>
            </div>
          </div>
          <span className="font-handwriting text-lg text-[#7C284C] whitespace-nowrap">
            curiosity → clarity ✎
          </span>
        </div>
      </div>
    </section>
  );
}
