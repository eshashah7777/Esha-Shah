import { useState } from 'react';
import LogoLoop, { LogoItem } from './LogoLoop';
import { LayoutGrid, Repeat } from 'lucide-react';

interface BrandItem {
  id: string;
  name: string;
  category: string;
  scope: string;
  image: string;
  fallbackUrl: string;
}

const BRANDS: BrandItem[] = [
  {
    id: 'icici',
    name: 'ICICI Bank',
    category: 'Banking & Financial Services',
    scope: '360° Competitive Communication Scan',
    image: '/brands/icici.png',
    fallbackUrl: 'https://i.ibb.co/vCX12Bcp/image-Photoroom-4.png'
  },
  {
    id: 'raymond',
    name: 'Raymond',
    category: 'Fashion & Textile Retail',
    scope: 'Competitive Print-Ad Research',
    image: '/brands/raymond.png',
    fallbackUrl: 'https://i.ibb.co/wNFB0xDC/image-Photoroom-5.png'
  },
  {
    id: 'pantene',
    name: 'Pantene',
    category: 'Haircare & FMCG',
    scope: 'Brand Manifesto Film Research',
    image: '/brands/pantene.png',
    fallbackUrl: 'https://i.ibb.co/wZvzRT3R/image-Photoroom-6.png'
  },
  {
    id: 'head-and-shoulders',
    name: 'Head & Shoulders',
    category: 'Personal Care & FMCG',
    scope: 'Social & Communication Analysis',
    image: '/brands/head-and-shoulders.png',
    fallbackUrl: 'https://i.ibb.co/nNKMy8S8/image-Photoroom-7.png'
  },
  {
    id: 'kia-seltos',
    name: 'Kia Seltos',
    category: 'Automotive',
    scope: 'Social Listening & Sentiment Analysis',
    image: '/brands/kia-seltos.png',
    fallbackUrl: 'https://i.ibb.co/m53r9jvy/image-Photoroom-9.png'
  },
  {
    id: 'home-centre',
    name: 'Home Centre',
    category: 'Home & Living Retail',
    scope: 'IKEA & Pepperfry Competitor Scans',
    image: '/brands/home-centre.png',
    fallbackUrl: 'https://i.ibb.co/d0F5k6KT/image.png'
  }
];

interface BrandsProps {
  onSelectProject?: (projectId: string) => void;
}

export default function Brands({ onSelectProject: _onSelectProject }: BrandsProps) {
  const [viewMode, setViewMode] = useState<'loop' | 'grid'>('loop');

  // Convert brand items into LogoLoop-compatible items
  const brandLogos: (LogoItem & BrandItem)[] = BRANDS.map((brand) => ({
    ...brand,
    src: brand.image,
    alt: `${brand.name} logo`,
    title: brand.name,
  }));

  return (
    <section
      id="brands"
      className="py-20 sm:py-28 border-b border-[#241F21]/8 bg-[#FFF9F5] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header with View Mode Switch */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#7C284C]">
              Client Roster & Research Scope
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#241F21] mt-2">
              Brands I've Worked On.
            </h2>
            <p className="text-sm sm:text-base text-[#574F53] mt-2 leading-relaxed">
              Audits, 360° competitor scans, social listening, and visual research across leading national and global accounts.
            </p>
          </div>

          {/* Toggle pill: Loop View vs Grid View */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#241F21]/8 rounded-full shadow-2xs self-start sm:self-auto">
            <button
              onClick={() => setViewMode('loop')}
              aria-label="Infinite Logo Loop View"
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                viewMode === 'loop'
                  ? 'bg-[#7C284C] text-white shadow-xs'
                  : 'text-[#574F53] hover:text-[#7C284C] hover:bg-[#F4A7C1]/15'
              }`}
            >
              <Repeat className="w-3.5 h-3.5" />
              <span>Logo Loop</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              aria-label="Grid Overview"
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#7C284C] text-white shadow-xs'
                  : 'text-[#574F53] hover:text-[#7C284C] hover:bg-[#F4A7C1]/15'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid</span>
            </button>
          </div>
        </div>

        {/* Primary View: React Bits <LogoLoop /> Component */}
        {viewMode === 'loop' ? (
          <div className="relative py-4">
            {/* Horizontal Continuous Logo Loop */}
            <LogoLoop
              logos={brandLogos}
              speed={45}
              direction="left"
              logoHeight={48}
              gap={24}
              hoverSpeed={0}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutColor="#FFF9F5"
              ariaLabel="Client brand logos loop"
              renderItem={(item) => {
                const brand = item as unknown as BrandItem;
                return (
                  <div
                    key={brand.id}
                    id={`loop-brand-${brand.id}`}
                    className="group/brand flex items-center gap-4 px-5 py-4 rounded-2xl bg-white border border-[#241F21]/8 shadow-[0_2px_14px_rgba(0,0,0,0.02)] hover:border-[#7C284C]/35 hover:shadow-md transition-all duration-300 min-w-[280px] max-w-[320px] select-none"
                  >
                    {/* Brand Logo Container */}
                    <div className="w-16 h-12 flex items-center justify-center p-2 rounded-xl bg-[#FFF9F5] border border-[#241F21]/5 shrink-0 group-hover/brand:scale-105 transition-transform duration-300">
                      <img
                        src={brand.image}
                        alt={`${brand.name} logo`}
                        className="max-h-8 max-w-[70px] w-auto h-auto object-contain"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (target.src !== brand.fallbackUrl) {
                            target.src = brand.fallbackUrl;
                          }
                        }}
                        loading="lazy"
                        draggable={false}
                      />
                    </div>

                    {/* Brand Metadata */}
                    <div className="text-left overflow-hidden">
                      <span className="text-[10px] font-semibold text-[#7C284C] uppercase tracking-wider block truncate">
                        {brand.category}
                      </span>
                      <h3 className="text-sm font-bold text-[#241F21] truncate mt-0.5">
                        {brand.name}
                      </h3>
                      <p className="text-[11px] text-[#574F53] truncate mt-0.5">
                        {brand.scope}
                      </p>
                    </div>
                  </div>
                );
              }}
            />

            {/* Helper Caption */}
            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#574F53]/70">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C284C]/40 animate-pulse" />
              <span>Hover anywhere on the track to pause and inspect scopes</span>
            </div>
          </div>
        ) : (
          /* Grid Fallback View */
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 animate-in fade-in duration-300">
            {BRANDS.map((brand) => (
              <div
                key={brand.id}
                id={`brand-card-${brand.id}`}
                className="p-6 rounded-[24px] bg-white border border-[#241F21]/8 shadow-[0_2px_16px_rgba(0,0,0,0.02)] hover:border-[#7C284C]/30 hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                {/* Logo Frame */}
                <div className="w-full h-24 flex items-center justify-center p-3 rounded-2xl bg-[#FFF9F5] border border-[#241F21]/5 mb-4">
                  <img
                    src={brand.image}
                    alt={`${brand.name} logo`}
                    className="max-h-12 max-w-[80%] w-auto h-auto object-contain transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== brand.fallbackUrl) {
                        target.src = brand.fallbackUrl;
                      }
                    }}
                    loading="lazy"
                  />
                </div>

                <div>
                  <span className="text-[11px] font-medium text-[#7C284C] uppercase tracking-wider block">
                    {brand.category}
                  </span>
                  <h3 className="text-base font-semibold text-[#241F21] mt-0.5">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-[#574F53] mt-1 leading-snug">
                    {brand.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
