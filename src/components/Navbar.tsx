import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Experience', id: 'experience' },
    { label: 'Work', id: 'work' },
    { label: 'Skills', id: 'skills' },
    { label: 'Brands', id: 'brands' },
    { label: 'Contact', id: 'connect' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none"
    >
      <div
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between border ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-2xl border-[#7C284C]/15 shadow-[0_8px_32px_rgba(124,40,76,0.08)]'
            : 'bg-white backdrop-blur-xl border-[#7C284C]/10 shadow-[0_4px_24px_rgba(124,40,76,0.04)]'
        }`}
      >
        {/* Brand Monogram & Name */}
        <button
          id="nav-logo-btn"
          onClick={() => handleLinkClick('hero')}
          className="group flex items-center gap-2.5 focus:outline-hidden cursor-pointer"
        >
          <div className="w-7 h-7 rounded-full bg-[#7C284C] flex items-center justify-center text-white text-[11px] font-bold tracking-tight shadow-xs transition-transform duration-200 group-hover:scale-105">
            ES
          </div>
          <span className="font-semibold text-sm tracking-tight text-[#241F21] group-hover:text-[#7C284C] transition-colors">
            Esha Shah
          </span>
        </button>

        {/* Desktop Nav Items - White Capsule with Pink Active State and White Text */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#7C284C] text-white shadow-[0_2px_10px_rgba(124,40,76,0.3)] font-semibold'
                    : 'text-[#574F53] hover:text-[#7C284C] hover:bg-[#F4A7C1]/20'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile Toggle (visible on mobile only) */}
        <div className="flex items-center md:hidden">
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full text-[#241F21] hover:bg-[#F4A7C1]/20 hover:text-[#7C284C] focus:outline-hidden cursor-pointer transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Capsule */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="pointer-events-auto absolute top-16 left-4 right-4 bg-white border border-[#7C284C]/15 rounded-3xl p-4 shadow-xl md:hidden animate-in fade-in zoom-in-95 duration-200"
        >
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#7C284C] text-white font-semibold'
                      : 'text-[#241F21] hover:bg-[#F4A7C1]/20 hover:text-[#7C284C]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
