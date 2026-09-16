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
              client roster & audits ✦
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#241F21] mt-1">
              Brands I've worked on
            </h2>
            <p className="text-sm sm:text-base text-[#574F53] mt-2">
              Audits, 360° competitor scans, social listening, and visual research across leading national & global brands.
            </p>
          </div>
        </div>

        {/* Clean Landscape Brand Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              id={`brand-card-${brand.id}`}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#241F21]/10 hover:border-[#7C284C]/30 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[180px] relative overflow-hidden"
            >
              {/* Landscape Logo Container - cleanly fitted so full logo is visible */}
              <div className="w-full h-24 sm:h-28 flex items-center justify-center p-3 sm:p-4 rounded-xl bg-[#FAF6F3] border border-[#241F21]/5 mb-4">
                <img
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  className="max-h-14 sm:max-h-16 max-w-[85%] w-auto h-auto object-contain transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    // Fallback to remote ibb URL if needed
                    e.currentTarget.src = brand.fallbackUrl;
                  }}
                  loading="lazy"
                />
              </div>

              {/* Brand Details */}
              <div>
                <span className="text-[10px] font-semibold text-[#7C284C] uppercase tracking-wider block mb-1">
                  {brand.category}
                </span>
                <h3 className="font-serif-display text-base sm:text-lg font-bold text-[#241F21] leading-tight">
                  {brand.name}
                </h3>
                <p className="text-xs text-[#574F53] mt-1.5 leading-relaxed">
                  {brand.scope}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Agency Footnote */}
        <div className="mt-10 text-center text-xs text-[#574F53]">
          <span>Conducted as part of account management, competitive benchmarking & digital strategy engagements at Publicis Groupe.</span>
        </div>
      </div>
    </section>
  );
}

