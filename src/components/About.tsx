import { Sparkles, Compass, Lightbulb, Target, Heart } from 'lucide-react';
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
      className="py-16 sm:py-24 border-b border-[#241F21]/10 bg-[#FFF9F5] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading & Sticky Scrapbook Callout */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <span className="font-handwriting text-2xl text-[#7C284C] block -rotate-2">
                getting to know me ✦
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#241F21]">
                A little about me
              </h2>
            </div>

            {/* Scrapbook Sticky Note */}
            <div className="washi-tape washi-tape-lavender bg-white p-6 rounded-2xl border border-[#241F21]/10 shadow-xs relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7C284C]" />
                <span className="text-xs uppercase tracking-wider font-semibold text-[#574F53]">
                  The Mission
                </span>
              </div>
              <p className="font-handwriting text-xl text-[#241F21] leading-relaxed">
                "To explore where human psychology meets brand strategy, creating work that connects instead of merely selling."
              </p>
              <div className="mt-4 pt-3 border-t border-dashed border-[#241F21]/15 flex items-center justify-between text-xs text-[#574F53]">
                <span>Perspective: Digital-first</span>
                <span className="text-[#7C284C] font-medium">Curiosity-led ✎</span>
              </div>
            </div>

            {/* Academic pill indicator */}
            <div className="p-4 rounded-xl bg-[#F4A7C1]/15 border border-[#F4A7C1]/40 flex items-center gap-3">
              <span className="text-2xl">🎓</span>
              <div>
                <p className="text-xs text-[#7C284C] font-semibold uppercase tracking-wider">Education Track</p>
                <p className="text-sm font-medium text-[#241F21]">K.P.B. Hinduja × IIDE – The Digital School</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & "Currently Into" Grid */}
          <div className="lg:col-span-8 space-y-8">
            {/* Story Paragraphs */}
            <div className="bg-white/70 p-6 sm:p-8 rounded-3xl border border-[#241F21]/10 shadow-xs space-y-5 text-base sm:text-lg text-[#241F21] leading-relaxed">
              <p>
                {about.bio}
              </p>
              <p>
                {about.interest}
              </p>
              <p className="text-[#574F53] text-base border-l-2 border-[#7C284C] pl-4 py-0.5 italic">
                {about.inspiration}
              </p>
            </div>

            {/* "Currently Into" visual pill section requested in PRD Section 10 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#7C284C]" />
                <h3 className="font-serif-display text-xl font-bold text-[#241F21]">
                  Currently into:
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {about.currentlyInto.map((item, idx) => {
                  const colors = [
                    'bg-[#F4A7C1]/25 text-[#7C284C] border-[#F4A7C1]',
                    'bg-[#C9B6E4]/25 text-[#5B21B6] border-[#C9B6E4]',
                    'bg-[#A8D8EA]/25 text-[#0369A1] border-[#A8D8EA]',
                    'bg-[#D9E8C5]/30 text-[#3F6212] border-[#D9E8C5]',
                    'bg-[#FFF2F5] text-[#7C284C] border-[#F4A7C1]'
                  ];
                  return (
                    <span
                      key={item}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-transform hover:-translate-y-0.5 cursor-default ${
                        colors[idx % colors.length]
                      }`}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Core Pillars / Thinking style */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {coreStrengths.map((strength) => (
                <div
                  key={strength.title}
                  className="p-5 rounded-2xl bg-white border border-[#241F21]/10 hover:border-[#7C284C]/30 transition-all shadow-2xs hover:shadow-xs"
                >
                  <div
                    className="w-8 h-8 rounded-full mb-3 flex items-center justify-center font-bold text-xs"
                    style={{ backgroundColor: strength.accent, color: '#241F21' }}
                  >
                    ✦
                  </div>
                  <h4 className="font-serif-display text-base font-bold text-[#241F21] mb-1.5">
                    {strength.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#574F53] leading-relaxed">
                    {strength.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
