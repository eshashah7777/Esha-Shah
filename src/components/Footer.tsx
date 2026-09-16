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
    <footer
      id="connect"
      className="bg-[#FFF9F5] border-t border-[#241F21]/8 pt-20 sm:pt-28 pb-12 text-[#241F21] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#241F21]/8 text-xs font-medium text-[#7C284C] mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for Strategic Roles</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#241F21]">
            Let's Connect.
          </h2>
          <p className="text-sm sm:text-base text-[#574F53] mt-2 max-w-xl font-normal leading-relaxed">
            Whether you are looking for an advertising & brand strategy intern, want to discuss a research scan, or explore collaborative agency opportunities.
          </p>
        </div>

        {/* Contact Coordinates Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-16 border-b border-[#241F21]/8">
          {/* Email */}
          <div className="p-6 rounded-[24px] bg-white border border-[#241F21]/8 shadow-[0_2px_16px_rgba(0,0,0,0.02)] hover:border-[#241F21]/15 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-9 h-9 rounded-full bg-[#FFF9F5] border border-[#241F21]/6 flex items-center justify-center text-[#7C284C] mb-4">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-[11px] uppercase font-semibold tracking-wider text-[#574F53]">Email</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="block text-sm font-semibold text-[#241F21] group-hover:text-[#7C284C] transition-colors mt-0.5 break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
            <div className="mt-5 pt-3.5 border-t border-[#241F21]/6 flex items-center justify-between">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-xs font-medium text-[#7C284C] hover:underline flex items-center gap-1"
              >
                <span>Compose</span>
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
          <div className="p-6 rounded-[24px] bg-white border border-[#241F21]/8 shadow-[0_2px_16px_rgba(0,0,0,0.02)] hover:border-[#241F21]/15 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-9 h-9 rounded-full bg-[#FFF9F5] border border-[#241F21]/6 flex items-center justify-center text-[#241F21] mb-4">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-[11px] uppercase font-semibold tracking-wider text-[#574F53]">Phone</span>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="block text-sm font-semibold text-[#241F21] group-hover:text-[#7C284C] transition-colors mt-0.5"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>
            <div className="mt-5 pt-3.5 border-t border-[#241F21]/6 flex items-center justify-between">
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="text-xs font-medium text-[#7C284C] hover:underline flex items-center gap-1"
              >
                <span>Call</span>
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
          <div className="p-6 rounded-[24px] bg-white border border-[#241F21]/8 shadow-[0_2px_16px_rgba(0,0,0,0.02)] hover:border-[#241F21]/15 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-9 h-9 rounded-full bg-[#FFF9F5] border border-[#241F21]/6 flex items-center justify-center text-[#0369A1] mb-4">
                <Linkedin className="w-4 h-4" />
              </div>
              <span className="text-[11px] uppercase font-semibold tracking-wider text-[#574F53]">LinkedIn</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-semibold text-[#241F21] group-hover:text-[#0369A1] transition-colors mt-0.5 truncate"
              >
                esha-shah
              </a>
            </div>
            <div className="mt-5 pt-3.5 border-t border-[#241F21]/6">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[#0369A1] hover:underline flex items-center gap-1"
              >
                <span>View Profile</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="p-6 rounded-[24px] bg-white border border-[#241F21]/8 shadow-[0_2px_16px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-full bg-[#FFF9F5] border border-[#241F21]/6 flex items-center justify-center text-[#7C284C] mb-4">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-[11px] uppercase font-semibold tracking-wider text-[#574F53]">Location</span>
              <p className="text-sm font-semibold text-[#241F21] mt-0.5">
                {PERSONAL_INFO.location}
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-[#241F21]/6">
              <span className="text-xs text-[#574F53] flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Mumbai, Maharashtra</span>
              </span>
            </div>
          </div>
        </div>

        {/* Apple-style Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#574F53]">
          <div>
            <span className="font-semibold tracking-tight text-[#241F21]">
              Esha Shah
            </span>
            <span className="mx-2 text-[#241F21]/20">•</span>
            <span>Digital Business & Advertising Portfolio</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="px-3.5 py-1.5 rounded-full bg-white border border-[#241F21]/8 text-[#241F21] hover:bg-[#FFF9F5] transition-all shadow-2xs cursor-pointer flex items-center gap-1.5 text-xs font-medium"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="pt-4 text-center sm:text-left text-[11px] text-[#574F53]/60">
          © 2026 Esha Shah. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
