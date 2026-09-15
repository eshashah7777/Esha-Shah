import { useState } from 'react';
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin, Linkedin, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <footer id="connect" className="bg-[#FFF9F5] border-t border-[#241F21]/15 pt-16 pb-12 text-[#241F21] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4A7C1]/20 border border-[#F4A7C1]/50 text-xs font-semibold text-[#7C284C] mb-3">
            <span className="font-handwriting text-base font-bold">open for opportunities ✦</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#241F21]">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base text-[#574F53] mt-2 max-w-xl font-normal">
            Whether you are looking for an advertising & brand strategy intern, want to discuss a research scan, or explore collaborative opportunities.
          </p>
        </div>

        {/* Contact Coordinates Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-12 border-b border-[#241F21]/10">
          {/* Email */}
          <div className="p-5 rounded-2xl bg-white border border-[#241F21]/10 shadow-2xs hover:border-[#7C284C]/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F4A7C1]/20 flex items-center justify-center text-[#7C284C] mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#574F53]">Email</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="block text-sm sm:text-base font-semibold text-[#241F21] group-hover:text-[#7C284C] transition-colors mt-0.5 break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
            <div className="mt-4 pt-3 border-t border-[#241F21]/5 flex items-center justify-between">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-xs font-semibold text-[#7C284C] hover:underline flex items-center gap-1"
              >
                <span>Send email</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <button
                onClick={handleCopyEmail}
                title="Copy email address"
                className="text-xs text-[#574F53] hover:text-[#241F21] flex items-center gap-1 cursor-pointer"
              >
                {copiedEmail ? (
                  <span className="text-emerald-700 font-medium flex items-center gap-0.5">
                    <Check className="w-3 h-3" /> Copied
                  </span>
                ) : (
                  <span className="flex items-center gap-0.5">
                    <Copy className="w-3 h-3" /> Copy
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Phone */}
          <div className="p-5 rounded-2xl bg-white border border-[#241F21]/10 shadow-2xs hover:border-[#7C284C]/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#D9E8C5]/40 flex items-center justify-center text-[#241F21] mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#574F53]">Phone</span>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="block text-sm sm:text-base font-semibold text-[#241F21] group-hover:text-[#7C284C] transition-colors mt-0.5"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>
            <div className="mt-4 pt-3 border-t border-[#241F21]/5 flex items-center justify-between">
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="text-xs font-semibold text-[#7C284C] hover:underline flex items-center gap-1"
              >
                <span>Call now</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <button
                onClick={handleCopyPhone}
                title="Copy phone number"
                className="text-xs text-[#574F53] hover:text-[#241F21] flex items-center gap-1 cursor-pointer"
              >
                {copiedPhone ? (
                  <span className="text-emerald-700 font-medium flex items-center gap-0.5">
                    <Check className="w-3 h-3" /> Copied
                  </span>
                ) : (
                  <span className="flex items-center gap-0.5">
                    <Copy className="w-3 h-3" /> Copy
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="p-5 rounded-2xl bg-white border border-[#241F21]/10 shadow-2xs hover:border-[#0369A1]/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#A8D8EA]/30 flex items-center justify-center text-[#0369A1] mb-3">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#574F53]">LinkedIn</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm sm:text-base font-semibold text-[#241F21] group-hover:text-[#0369A1] transition-colors mt-0.5"
              >
                esha-shah-22445834a
              </a>
            </div>
            <div className="mt-4 pt-3 border-t border-[#241F21]/5">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#0369A1] hover:underline flex items-center gap-1"
              >
                <span>View LinkedIn profile</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="p-5 rounded-2xl bg-white border border-[#241F21]/10 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#C9B6E4]/30 flex items-center justify-center text-[#7C284C] mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#574F53]">Location</span>
              <p className="text-sm sm:text-base font-semibold text-[#241F21] mt-0.5">
                {PERSONAL_INFO.location}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#241F21]/5">
              <span className="text-xs text-[#574F53] flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Mumbai, Maharashtra</span>
              </span>
            </div>
          </div>
        </div>

        {/* Footer Base Info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#574F53]">
          <div>
            <span className="font-serif-display text-lg font-bold tracking-tight text-[#241F21]">
              ESHA SHAH
            </span>
            <p className="text-xs text-[#574F53] mt-0.5">
              Digital Business & Advertising ✦ Mumbai, Maharashtra
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-full bg-white border border-[#241F21]/10 text-[#241F21] hover:bg-[#F4A7C1]/20 hover:border-[#7C284C] transition-all shadow-2xs cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-4 text-center sm:text-left text-[11px] text-[#574F53]/70">
          © 2026 Esha Shah. Made with curiosity & caffeine.
        </div>
      </div>
    </footer>
  );
}
