import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Work', id: 'work' },
    { label: 'Skills', id: 'skills' },
    { label: 'Brands', id: 'brands' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF9F5]/90 backdrop-blur-md border-b border-[#241F21]/10 shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleLinkClick('hero')}
          className="text-left group flex items-baseline gap-2 focus:outline-hidden"
        >
          <span className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight text-[#241F21] group-hover:text-[#7C284C] transition-colors">
            ESHA SHAH
          </span>
          <span className="hidden md:inline-block font-handwriting text-sm text-[#7C284C] rotate-[-2deg]">
            ✦ portfolio
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all relative ${
                  isActive
                    ? 'text-[#241F21] font-semibold bg-[#F4A7C1]/25'
                    : 'text-[#574F53] hover:text-[#241F21] hover:bg-[#241F21]/5'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#7C284C] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            id="nav-cta-btn"
            onClick={() => handleLinkClick('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#241F21] text-[#FFF9F5] hover:bg-[#7C284C] transition-colors shadow-xs group"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Hamburger button */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#241F21] hover:bg-[#241F21]/5 focus:outline-hidden"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden bg-[#FFF9F5] border-b border-[#241F21]/10 px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#F4A7C1]/20 text-[#7C284C] font-semibold'
                      : 'text-[#241F21] hover:bg-[#241F21]/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-3 border-t border-[#241F21]/10 mt-1">
              <button
                id="mobile-cta-btn"
                onClick={() => handleLinkClick('contact')}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-[#7C284C] text-white shadow-xs"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
