import { useState, FormEvent } from 'react';
import { Mail, Linkedin, Download, Send, Check, Copy, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrCompany: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDownloadPortfolio = () => {
    // Generate clean print/save view of the portfolio summary
    window.print();
  };

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    // Pre-populate mailto with visitor message
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'} (${formData.roleOrCompany || 'Agency/Brand'})`);
    const body = encodeURIComponent(
      `Hi Esha,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.roleOrCompany}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-[#FFF9F5] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="washi-tape washi-tape-lavender bg-white rounded-3xl p-6 sm:p-12 border border-[#241F21]/15 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Big Closing Statement & Handwritten note */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="font-handwriting text-2xl text-[#7C284C] block -rotate-1">
                  open for opportunities ✦
                </span>
                <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#241F21] leading-tight">
                  Have a project, opportunity or idea?
                </h2>
                <p className="font-serif-display text-2xl sm:text-3xl text-[#7C284C] italic font-semibold">
                  Let's connect.
                </p>
              </div>

              <p className="text-base text-[#574F53] leading-relaxed max-w-md">
                Whether you're an advertising agency searching for an inquisitive account management intern, a brand seeking competitive analysis, or an industry mentor wishing to chat about digital culture.
              </p>

              {/* Playful Handwritten Annotation requested in PRD Section 19 */}
              <div className="inline-block p-3 rounded-xl bg-[#FFFDE6] border border-[#E9E4B2] shadow-2xs transform -rotate-2">
                <p className="font-handwriting text-xl text-[#7C284C] font-semibold">
                  "I promise I don't bite :)"
                </p>
              </div>

              {/* Core Action Buttons requested in PRD Section 19 */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  id="contact-email-btn"
                  href={`mailto:${PERSONAL_INFO.email}?subject=Let's%20Connect%20%E2%80%94%20Esha%20Shah%20Portfolio`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-[#241F21] text-[#FFF9F5] hover:bg-[#7C284C] transition-all shadow-xs group"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                </a>

                <a
                  id="contact-linkedin-btn"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-[#FFF9F5] text-[#241F21] border border-[#241F21]/20 hover:border-[#0369A1] hover:text-[#0369A1] transition-all shadow-2xs"
                >
                  <Linkedin className="w-4 h-4 text-[#0369A1]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  id="contact-download-portfolio-btn"
                  onClick={handleDownloadPortfolio}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-[#FFF9F5] text-[#241F21] border border-[#241F21]/20 hover:border-[#7C284C] hover:text-[#7C284C] transition-all shadow-2xs cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Portfolio</span>
                </button>
              </div>

              {/* Direct email copy helper */}
              <div className="pt-3 flex items-center gap-3 text-xs text-[#574F53]">
                <span>Direct email:</span>
                <button
                  onClick={handleCopyEmail}
                  className="font-mono text-[#241F21] font-semibold hover:text-[#7C284C] underline flex items-center gap-1 cursor-pointer"
                >
                  <span>{PERSONAL_INFO.email}</span>
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[#574F53]" />
                  )}
                </button>
                {copiedEmail && (
                  <span className="text-emerald-700 font-medium">Copied!</span>
                )}
              </div>
            </div>

            {/* Right Column: Quick Interactive Message Form */}
            <div className="lg:col-span-6 bg-[#FFF9F5] p-6 sm:p-8 rounded-3xl border border-[#241F21]/10 shadow-2xs">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-4 h-4 text-[#7C284C]" />
                <h3 className="font-serif-display text-lg font-bold text-[#241F21]">
                  Send a Quick Note
                </h3>
              </div>

              <form onSubmit={handleSubmitForm} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-[#574F53] uppercase tracking-wider mb-1">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#241F21]/15 text-sm text-[#241F21] placeholder-[#574F53]/50 focus:outline-hidden focus:border-[#7C284C]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[#574F53] uppercase tracking-wider mb-1">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="jane@agency.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#241F21]/15 text-sm text-[#241F21] placeholder-[#574F53]/50 focus:outline-hidden focus:border-[#7C284C]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-company" className="block text-xs font-semibold text-[#574F53] uppercase tracking-wider mb-1">
                    Agency / Organization / Role
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    placeholder="Publicis / Ogilvy / Brand Manager"
                    value={formData.roleOrCompany}
                    onChange={(e) => setFormData({ ...formData, roleOrCompany: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#241F21]/15 text-sm text-[#241F21] placeholder-[#574F53]/50 focus:outline-hidden focus:border-[#7C284C]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[#574F53] uppercase tracking-wider mb-1">
                    Message / Opportunity Details
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={3}
                    placeholder="Hi Esha, we'd love to chat about an internship opportunity in strategy..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#241F21]/15 text-sm text-[#241F21] placeholder-[#574F53]/50 focus:outline-hidden focus:border-[#7C284C] resize-none"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full py-3 px-5 rounded-xl text-sm font-semibold bg-[#7C284C] text-white hover:bg-[#5e1e39] transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Message via Email</span>
                  <Send className="w-4 h-4" />
                </button>

                {formSubmitted && (
                  <p className="text-xs text-center text-emerald-700 font-medium animate-in fade-in">
                    Draft prepared! Opening your mail client...
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
