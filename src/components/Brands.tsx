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
      className="py-20 sm:py-28 border-b border-[#241F21]/8 bg-[#FFF9F5] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-12 sm:mb-16">
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

        {/* Clean Apple Ecosystem Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              id={`brand-card-${brand.id}`}
              className="p-6 rounded-[24px] bg-white border border-[#241F21]/8 shadow-[0_2px_16px_rgba(0,0,0,0.02)] hover:border-[#241F21]/15 hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              {/* Logo Frame */}
              <div className="w-full h-24 flex items-center justify-center p-3 rounded-2xl bg-[#FFF9F5] border border-[#241F21]/5 mb-4">
                <img
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  className="max-h-12 max-w-[80%] w-auto h-auto object-contain transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
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
      </div>
    </section>
  );
}
