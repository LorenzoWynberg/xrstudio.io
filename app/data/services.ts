export const services = [
  {
    slug: 'experience-execution',
    title: 'Experience Execution',
    shortDescription: 'End-to-end production management for live events that demand precision.',
    description:
      'Experience Execution is our core offering—comprehensive production management that takes your event from concept to completion. We handle every operational detail so you can focus on the experience itself.',
    icon: '01',
    includes: [
      'Production timeline development and management',
      'Vendor sourcing, contracting, and coordination',
      'On-site production management',
      'Run-of-show creation and execution',
      'Risk assessment and contingency planning',
      'Post-event reporting and analysis',
    ],
    deliverables: [
      'Production bible',
      'Run-of-show document',
      'Vendor matrix',
      'Staffing plan',
      'Risk mitigation plan',
      'Post-event report',
    ],
    kpis: [
      'On-time execution rate',
      'Budget adherence',
      'Vendor satisfaction scores',
      'Incident response time',
      'Client satisfaction rating',
    ],
    relatedCaseStudies: ['electric-animals', 'blockchain-jungle', 'pura-tinta-fest'],
  },
  {
    slug: 'technical-stage-design',
    title: 'Technical & Stage Design',
    shortDescription: 'Audio, lighting, video, and stage infrastructure engineered for impact.',
    description:
      'We design and specify the technical infrastructure that brings your vision to life. From audio and lighting to video systems and stage construction, we ensure every technical element serves the experience.',
    icon: '02',
    includes: [
      'Audio system design and specification',
      'Lighting design and programming',
      'Video and LED system planning',
      'Stage and rigging design',
      'Power distribution planning',
      'Technical rider development',
    ],
    deliverables: [
      'Technical specifications document',
      'Stage plot and CAD drawings',
      'Audio/lighting/video plots',
      'Power distribution plan',
      'Technical rider',
      'Equipment list',
    ],
    kpis: [
      'Technical execution accuracy',
      'Equipment uptime',
      'Safety compliance rate',
      'Sound/visual quality ratings',
      'Setup efficiency',
    ],
    relatedCaseStudies: ['electric-animals', 'magflow', 'sweetspot'],
  },
  {
    slug: 'on-site-operations',
    title: 'On-Site Operations',
    shortDescription: 'Crew coordination, logistics, and real-time decision making.',
    description:
      'Our on-site operations team ensures flawless execution when it matters most. We coordinate crews, manage logistics, and make real-time decisions to keep your event running smoothly.',
    icon: '03',
    includes: [
      'Crew management and coordination',
      'Load-in/load-out supervision',
      'Real-time problem solving',
      'Stakeholder communication',
      'Safety protocol enforcement',
      'Incident response management',
    ],
    deliverables: [
      'Operations manual',
      'Crew schedules',
      'Communication plan',
      'Safety protocols',
      'Incident reports',
      'Daily briefing documents',
    ],
    kpis: [
      'Schedule adherence',
      'Safety incident rate',
      'Communication response time',
      'Crew efficiency metrics',
      'Problem resolution time',
    ],
    relatedCaseStudies: ['pura-tinta-fest', 'blockchain-jungle', 'sweetspot'],
  },
  {
    slug: 'audiovisual-production',
    title: 'Audiovisual Production',
    shortDescription: "Content capture and post-production that extends your event's reach.",
    description:
      'We capture your event in its best light, creating content that extends its impact far beyond the venue. From live streaming to documentary-style coverage, we deliver assets that tell your story.',
    icon: '04',
    includes: [
      'Multi-camera video production',
      'Live streaming setup and management',
      'Audio recording and mixing',
      'Photography coverage',
      'Post-production editing',
      'Content strategy development',
    ],
    deliverables: [
      'Event highlight reel',
      'Full event recording',
      'Social media content package',
      'Photography gallery',
      'Live stream archives',
      'Behind-the-scenes content',
    ],
    kpis: [
      'Content delivery timeline',
      'Stream uptime and quality',
      'Engagement metrics',
      'Asset utilization rate',
      'Client satisfaction',
    ],
    relatedCaseStudies: ['magflow', 'electric-animals', 'blockchain-jungle'],
  },
  {
    slug: 'performance-feedback',
    title: 'Performance & Feedback',
    shortDescription: 'Data-driven reporting and optimization for continuous improvement.',
    description:
      'Every event is an opportunity to learn and improve. We capture data, gather feedback, and deliver insights that help you optimize future productions and demonstrate ROI to stakeholders.',
    icon: '05',
    includes: [
      'Attendee feedback collection',
      'Performance metrics tracking',
      'Stakeholder debriefs',
      'Data analysis and visualization',
      'Recommendations development',
      'Benchmark comparisons',
    ],
    deliverables: [
      'Post-event analytics report',
      'Attendee survey results',
      'Performance dashboard',
      'Improvement recommendations',
      'ROI analysis',
      'Benchmark comparison report',
    ],
    kpis: [
      'Report delivery time',
      'Data accuracy',
      'Recommendation implementation rate',
      'Year-over-year improvement',
      'Stakeholder satisfaction',
    ],
    relatedCaseStudies: ['sweetspot', 'pura-tinta-fest', 'blockchain-jungle'],
  },
];

export const industries = [
  {
    name: 'Festivals & Concerts',
    description: 'Large-scale music and entertainment events',
  },
  {
    name: 'Conferences & Summits',
    description: 'Professional gatherings and thought leadership events',
  },
  {
    name: 'Brand Activations',
    description: 'Experiential marketing and brand experiences',
  },
  {
    name: 'Competitive Gaming / Esports',
    description: 'Tournament production and gaming events',
  },
  {
    name: 'Cultural Events & Conventions',
    description: 'Community gatherings and cultural celebrations',
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
