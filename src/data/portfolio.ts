import { Project, ExperienceItem, SkillItem, BrandItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Esha Shah',
  headline: "Hi, I'm Esha.",
  role: 'Digital Business & Advertising Student',
  subheading: 'I like understanding brands, decoding consumers and turning research into meaningful ideas.',
  email: 'eshashah7777@gmail.com',
  phone: '+91 9699499100',
  location: 'Mumbai, Maharashtra',
  linkedin: 'https://www.linkedin.com/in/esha-shah-22445834a/',
  education: {
    institution: 'K.P.B. Hinduja College of Commerce, Mumbai',
    degree: 'Bachelors in Business Administration (Digital Business)',
    partnership: 'In partnership with IIDE – The Digital School',
    period: '2024–2027',
    currentYear: '3rd Year Student',
    cgpa: '9.0',
    focusAreas: [
      'Digital Marketing Strategy',
      'Consumer Behavior & Insights',
      'Brand Planning & Campaign Architecture',
      'Marketing Analytics & Media Scans'
    ]
  },
  about: {
    bio: 'I am a 3rd year Digital Business student studying at K.P.B. Hinduja College of Commerce in partnership with IIDE – The Digital School.',
    interest: "I'm interested in advertising, digital business and marketing, and I'm looking to gain more exposure to the corporate world while putting my academic learning into practice.",
    inspiration: 'Google is a major source of career inspiration, sparking my curiosity in how digital platforms, consumer search habits, and data-driven communications come together to influence culture.',
    currentlyInto: [
      'Advertising',
      'Digital Marketing',
      'Brand Strategy',
      'Consumer Insights',
      'Creative Research'
    ]
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'icici-bank',
    title: '360° Competitive Communication Scan',
    brand: 'ICICI Bank',
    category: 'Brand & Competitive Research',
    description: 'A 360° competitive communication study analysing ICICI Bank and key competitors across social media, YouTube, print and wealth-management communication.',
    tags: ['Brand Research', 'Competitive Analysis', 'Social Media', 'YouTube', 'Print', 'Wealth Management'],
    filterCategories: ['Brand Research', 'Competitive Research', 'Social Media', 'Advertising', 'Digital'],
    accentColor: '#F4A7C1',
    brief: 'Map out and benchmark ICICI Bank’s communication ecosystem against prominent banking sector rivals across digital, video, print, and wealth segments.',
    myRole: 'Conducted cross-channel scans, tracked message consistency across touchpoints, reviewed YouTube and print collateral, and prepared benchmarking matrices.',
    approach: {
      research: 'Gathered active collateral across banking competitors spanning retail social feeds, long-form YouTube campaigns, and national print features.',
      analysis: 'Evaluated thematic pillars (security, lifestyle convenience, wealth management, customer trust) to compare tone of voice and target demographics.',
      insight: 'Wealth management communications require high visual distinction and clarity of wealth advisory benefits to cut through generic transactional banking noise.'
    },
    deliverables: [
      '360° Competitive Scan Deck',
      'Cross-Channel Media Matrix (Social, YouTube, Print)',
      'Wealth-Management Positioning Map',
      'Communication Gaps & Opportunity Highlights'
    ],
    keyTakeaway: 'Banks that differentiate between everyday utility and aspirational wealth narratives achieve stronger brand loyalty across high-value cohorts.',
    slideTheme: {
      bg: '#FFF2F5',
      border: '#F4A7C1',
      badgeBg: '#FCE7F0',
      badgeText: '#7C284C'
    }
  },
  {
    id: 'head-and-shoulders',
    title: 'Social Media & Communication Analysis',
    brand: 'Head & Shoulders',
    category: 'Social Media Audit',
    description: "An analysis of Head & Shoulders' social media presence and communication approach.",
    tags: ['Social Media Audit', 'Communication Analysis', 'Brand Research'],
    filterCategories: ['Social Media', 'Brand Research', 'Advertising', 'Digital'],
    accentColor: '#A8D8EA',
    brief: 'Audit Head & Shoulders’ social media footprint to examine how product efficacy and lifestyle messaging are balanced across active digital channels.',
    myRole: 'Audited content buckets, tracked audience engagement patterns, evaluated tone of voice, and compared educational vs. celebrity-driven communication.',
    approach: {
      research: 'Audited monthly content formats, comment sections, hook styles, and visual treatments across social platforms.',
      analysis: 'Examined how anti-dandruff clinical messaging is balanced with confidence and youth-oriented lifestyle storytelling.',
      insight: 'Consumers respond most positively when functional hair health proof is paired with relatable, humorous daily grooming situations rather than purely clinical statements.'
    },
    deliverables: [
      'Social Media Content & Format Audit',
      'Pillar Breakdown (Efficacy vs Lifestyle)',
      'Communication Tone Assessment',
      'Recommendations for Social Engagement'
    ],
    keyTakeaway: 'Repositioning clinical hygiene benefits into daily confidence rituals unlocks higher organic engagement among younger audiences.',
    slideTheme: {
      bg: '#F0F8FC',
      border: '#A8D8EA',
      badgeBg: '#E0F2FE',
      badgeText: '#0369A1'
    }
  },
  {
    id: 'raymond',
    title: 'Competitive Print-Ad Research',
    brand: 'Raymond',
    category: 'Print Advertising Research',
    description: 'Competitive research analysing print advertising within the category.',
    tags: ['Advertising', 'Print', 'Competitor Research'],
    filterCategories: ['Advertising', 'Competitive Research', 'Brand Research'],
    accentColor: '#C9B6E4',
    brief: 'Deep-dive into contemporary textile and formalwear print advertising, evaluating Raymond’s classic "The Complete Man" heritage against competing suiting brands.',
    myRole: 'Collected and categorized print ads across major dailies and magazines, analysed copy hooks, visual hierarchy, and modern masculinity themes.',
    approach: {
      research: 'Archived print placements across festive, wedding, and corporate seasons from key textile and apparel competitors.',
      analysis: 'Decoded visual language: photography styling, color palettes, headline structures, and fabric-storytelling versus emotional appeal.',
      insight: 'While modern brands push trend-driven casualization, Raymond’s emotional resonance in print thrives when celebrating modern vulnerability alongside timeless sophistication.'
    },
    deliverables: [
      'Category Print Ad Archive & Layout Matrix',
      'Visual Narrative & Typography Comparison',
      'Headline Copy Hook Breakdown',
      'Summary Presentation Deck'
    ],
    keyTakeaway: 'Print advertising in premium categories remains powerful when tactile craftsmanship is paired with progressive emotional storytelling.',
    slideTheme: {
      bg: '#F8F5FD',
      border: '#C9B6E4',
      badgeBg: '#EDE9FE',
      badgeText: '#5B21B6'
    }
  },
  {
    id: 'pantene',
    title: 'Brand Manifesto Film Research',
    brand: 'Pantene',
    category: 'Creative & Visual Research',
    description: "Contributed to Pantene's brand manifesto film through visual and music research.",
    tags: ['Creative Research', 'Visual Research', 'Music Research'],
    filterCategories: ['Creative', 'Brand Research', 'Advertising'],
    accentColor: '#D9E8C5',
    brief: 'Support the creative development of a brand manifesto film by conducting curated visual moodboarding, cultural tone research, and musical pacing studies.',
    myRole: 'Researched cinematic aesthetics, color treatments, audio references, and authentic hair movement expressions to inspire creative direction.',
    approach: {
      research: 'Scouted cross-industry fashion, wellness, and empowerment films, analyzing lighting treatments and audio soundscapes.',
      analysis: 'Categorized tempo changes, beat drops, and vocal tones to identify which sonic moods trigger genuine empowerment and resilience.',
      insight: 'Manifesto films connect deeply when avoiding exaggerated studio gloss in favor of kinetic, unscripted human movement paired with rhythmic, confident audio.'
    },
    deliverables: [
      'Visual Moodboard & Color Grading Reference Book',
      'Music Track & Acoustic Reference Palette',
      'Manifesto Pacing & Scene Breakdown Sheet'
    ],
    keyTakeaway: 'Audio and lighting choices define the emotional truth of a brand manifesto long before the voiceover speaks the tagline.',
    slideTheme: {
      bg: '#F7FAF3',
      border: '#D9E8C5',
      badgeBg: '#ECFCCB',
      badgeText: '#3F6212'
    }
  },
  {
    id: 'home-centre',
    title: 'Competitor Scan (IKEA & Pepperfry)',
    brand: 'Home Centre',
    category: 'Competitive Research & Retail',
    description: 'Conducted competitor research covering IKEA and Pepperfry for Home Centre.',
    tags: ['Competitive Research', 'Brand Activation', 'Retail'],
    filterCategories: ['Competitive Research', 'Brand Research', 'Digital'],
    accentColor: '#F4A7C1',
    brief: 'Benchmark home furnishing retail positioning between Home Centre, IKEA (global experiential design), and Pepperfry (digital-first marketplace).',
    myRole: 'Scanned omnichannel experiences, promotional calendar activations, seasonal campaigns, and spatial vs. e-commerce consumer journeys.',
    approach: {
      research: 'Monitored digital catalogs, seasonal living room campaigns, festive push notifications, and experiential store messaging.',
      analysis: 'Mapped consumer perception around affordability, convenience of delivery, assembly support, and aesthetic aspiration.',
      insight: 'While IKEA owns DIY lifestyle inspiration and Pepperfry leads on catalog breadth, Home Centre captures value by addressing Indian family home adaptability.'
    },
    deliverables: [
      'Retail Competitor Scan Deck',
      'Omnichannel Activation Matrix (Home Centre vs IKEA vs Pepperfry)',
      'Consumer Pain-Point & Journey Comparison',
      'Promotional Seasonality Timeline'
    ],
    keyTakeaway: 'Home brands succeed by balancing aesthetic inspiration with practical understanding of Indian living spaces and familial rituals.',
    slideTheme: {
      bg: '#FFF2F5',
      border: '#F4A7C1',
      badgeBg: '#FCE7F0',
      badgeText: '#7C284C'
    }
  },
  {
    id: 'kia-seltos',
    title: 'Social Listening & Sentiment Analysis',
    brand: 'Kia Seltos',
    category: 'Social Listening',
    description: 'Analysed consumer sentiment and conversations around Kia Seltos across digital platforms.',
    tags: ['Social Listening', 'Consumer Sentiment', 'Research'],
    filterCategories: ['Social Listening', 'Brand Research', 'Digital'],
    accentColor: '#A8D8EA',
    brief: 'Track real-time consumer sentiments, feature reviews, and ownership discussions about Kia Seltos across digital forums, auto communities, and social media.',
    myRole: 'Conducted social listening queries, categorized sentiment polarity (positive, neutral, critical), and tracked top recurring automotive discussion themes.',
    approach: {
      research: 'Monitored digital chatter, automotive thread discussions, user reviews, and video commentary.',
      analysis: 'Segmented topics by styling, cabin technology, mileage, after-sales experience, and safety perceptions.',
      insight: 'Design and futuristic dashboard tech serve as the primary emotional drivers of positive buzz, while transparent service dialogue quickly neutralizes post-purchase friction.'
    },
    deliverables: [
      'Social Listening Synthesis Report',
      'Sentiment Polarity Breakdown & Word Cloud',
      'Key Consumer Conversation Drivers',
      'Digital Reputation & Community Summary'
    ],
    keyTakeaway: 'Authentic social listening reveals how real drivers talk about their car, converting raw digital chatter into sharp product-marketing opportunities.',
    slideTheme: {
      bg: '#F0F8FC',
      border: '#A8D8EA',
      badgeBg: '#E0F2FE',
      badgeText: '#0369A1'
    }
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'publicis',
    company: 'Publicis Groupe',
    role: 'Account Management Intern',
    period: 'June 2026 – September 2026',
    featured: true,
    badge: 'Featured Agency Experience',
    highlights: [
      'Conducted social media & communication analysis for Head & Shoulders.',
      'Developed a 360° competitive communication scan for ICICI Bank.',
      'Conducted competitive print-ad research for Raymond.',
      'Contributed to Pantene’s brand manifesto film through visual & music research.',
      'Conducted competitor scans for IKEA & Pepperfry under Home Centre.',
      'Conducted social listening for KIA Seltos, analysing consumer sentiment across platforms.'
    ],
    skills: [
      { name: 'Brand Research', icon: 'Search' },
      { name: 'Competitive Scans', icon: 'BarChart3' },
      { name: 'Social Listening', icon: 'Headphones' },
      { name: 'Creative Strategy', icon: 'Lightbulb' },
      { name: 'Client Servicing', icon: 'Briefcase' }
    ],
    projects: [
      { brand: 'Head & Shoulders', task: 'Social media & communication analysis', projectId: 'head-and-shoulders' },
      { brand: 'ICICI Bank', task: '360° competitive communication scan', projectId: 'icici-bank' },
      { brand: 'Raymond', task: 'Competitive print-ad research', projectId: 'raymond' },
      { brand: 'Pantene', task: 'Visual & music research for brand manifesto film', projectId: 'pantene' },
      { brand: 'Home Centre', task: 'Competitor scans for IKEA & Pepperfry', projectId: 'home-centre' },
      { brand: 'Kia Seltos', task: 'Social listening & consumer sentiment analysis', projectId: 'kia-seltos' }
    ]
  },
  {
    id: 'iide',
    company: 'IIDE – The Digital School',
    role: 'Trainee Academic Counsellor',
    period: 'December 2025 – February 2026',
    featured: false,
    badge: 'Student Advisory & Conversion',
    highlights: [
      'Managed 40–50+ inbound and outbound student leads daily via calls and WhatsApp.',
      'Converted 60% cold and warm leads into qualified counselling sessions.',
      'Built strong communication, persuasion, and negotiation skills in a high-touch advisory setting.'
    ],
    skills: [
      { name: 'Communication', icon: 'MessageCircle' },
      { name: 'Sales & Conversion', icon: 'TrendingUp' },
      { name: 'Lead Management', icon: 'Users' },
      { name: 'Negotiation', icon: 'CheckCircle2' }
    ]
  }
];

export const SKILLS: SkillItem[] = [
  {
    id: 'social-audits',
    title: 'Social Media Audits',
    shortDesc: 'Deep-diving into post formats, engagement velocity, and content bucket balance across active channels.',
    category: 'Analysis & Auditing',
    color: '#F4A7C1'
  },
  {
    id: 'comp-research',
    title: 'Competitive & Brand Research',
    shortDesc: 'Benchmarking category leaders, messaging strategies, tone of voice, and whitespace opportunities.',
    category: 'Strategy & Intelligence',
    color: '#C9B6E4'
  },
  {
    id: 'campaign-analysis',
    title: 'Campaign & Communication Analysis',
    shortDesc: 'Dissecting integrated multi-channel campaigns, narrative arcs, and consumer response patterns.',
    category: 'Advertising & Media',
    color: '#A8D8EA'
  },
  {
    id: 'social-listening',
    title: 'Social Listening & Sentiment Analysis',
    shortDesc: 'Tuning into organic online chatter, sentiment polarity, and authentic consumer conversations.',
    category: 'Consumer Intelligence',
    color: '#D9E8C5'
  },
  {
    id: 'brand-activation',
    title: 'Brand Activation Research',
    shortDesc: 'Exploring physical-to-digital retail experiences, pop-ups, and experiential consumer touchpoints.',
    category: 'Experiential & Retail',
    color: '#F4A7C1'
  },
  {
    id: 'digital-app-research',
    title: 'Digital & App Research',
    shortDesc: 'Evaluating digital user journeys, mobile touchpoints, and omnichannel customer behavior.',
    category: 'Digital Ecosystems',
    color: '#A8D8EA'
  },
  {
    id: 'creative-content',
    title: 'Creative Content Development',
    shortDesc: 'Synthesizing visual moodboards, sonic pacing, and culturally resonant concept decks.',
    category: 'Creative & Conceptual',
    color: '#C9B6E4'
  },
  {
    id: 'consumer-insights',
    title: 'Consumer / Competitor Insights',
    shortDesc: 'Translating raw qualitative data and behavioral observations into actionable creative briefs.',
    category: 'Strategic Planning',
    color: '#D9E8C5'
  },
  {
    id: 'deck-dev',
    title: 'Presentation / Deck Development',
    shortDesc: 'Crafting clear, compelling visual narratives and executive pitch decks that make data stick.',
    category: 'Account Management',
    color: '#7C284C'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    name: 'Observe',
    question: 'What is the brand saying?',
    description: 'Immersing in current brand communication, visual tone, and audience touchpoints to establish the baseline.',
    accent: '#F4A7C1'
  },
  {
    number: '02',
    name: 'Research',
    question: 'What are competitors doing?',
    description: 'Scanning category rivals, comparative formats, media allocations, and competitive positioning gaps.',
    accent: '#C9B6E4'
  },
  {
    number: '03',
    name: 'Decode',
    question: 'What are consumers actually saying?',
    description: 'Digging into organic chatter, sentiment, unmet expectations, and honest cultural reactions.',
    accent: '#A8D8EA'
  },
  {
    number: '04',
    name: 'Connect',
    question: 'What patterns can I find?',
    description: 'Joining dots between business objectives, competitive blindspots, and genuine human behaviors.',
    accent: '#D9E8C5'
  },
  {
    number: '05',
    name: 'Create',
    question: 'What can we do with the insight?',
    description: 'Packaging research into inspiring strategic briefs, deck presentations, and impactful campaign directions.',
    accent: '#7C284C'
  }
];

export const BRANDS: BrandItem[] = [
  {
    id: 'head-and-shoulders',
    name: 'Head & Shoulders',
    category: 'FMCG / Haircare',
    roleDescription: 'Social media audit & cross-platform communication analysis.',
    accent: '#0369A1',
    badge: 'Social Audit',
    projectId: 'head-and-shoulders'
  },
  {
    id: 'icici-bank',
    name: 'ICICI Bank',
    category: 'Banking & Wealth',
    roleDescription: '360° competitive communication scan across social, print & YouTube.',
    accent: '#C2410C',
    badge: '360° Scan',
    projectId: 'icici-bank'
  },
  {
    id: 'raymond',
    name: 'Raymond',
    category: 'Textiles & Fashion',
    roleDescription: 'Competitive print-ad research & category visual analysis.',
    accent: '#B91C1C',
    badge: 'Print Research',
    projectId: 'raymond'
  },
  {
    id: 'pantene',
    name: 'Pantene',
    category: 'Beauty & Haircare',
    roleDescription: 'Visual & music research for brand manifesto film.',
    accent: '#15803D',
    badge: 'Manifesto Film',
    projectId: 'pantene'
  },
  {
    id: 'home-centre',
    name: 'Home Centre',
    category: 'Home & Living',
    roleDescription: 'Competitor scans and retail positioning analysis.',
    accent: '#854D0E',
    badge: 'Retail Scan',
    projectId: 'home-centre'
  },
  {
    id: 'ikea',
    name: 'IKEA',
    category: 'Global Retail',
    roleDescription: 'Retail competitor scan & experiential benchmark for Home Centre.',
    accent: '#1D4ED8',
    badge: 'Benchmark',
    projectId: 'home-centre'
  },
  {
    id: 'pepperfry',
    name: 'Pepperfry',
    category: 'E-commerce Furniture',
    roleDescription: 'Digital catalog & marketplace competitor scan for Home Centre.',
    accent: '#EA580C',
    badge: 'E-com Scan',
    projectId: 'home-centre'
  },
  {
    id: 'kia-seltos',
    name: 'Kia Seltos',
    category: 'Automotive',
    roleDescription: 'Social listening & digital consumer sentiment analysis.',
    accent: '#18181B',
    badge: 'Social Listening',
    projectId: 'kia-seltos'
  }
];

export const FILTER_OPTIONS = [
  'All',
  'Brand Research',
  'Social Media',
  'Advertising',
  'Competitive Research',
  'Social Listening',
  'Creative',
  'Digital'
];
