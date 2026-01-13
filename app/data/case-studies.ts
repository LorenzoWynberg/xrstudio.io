export const caseStudies = [
  {
    slug: "electric-animals",
    name: "Electric Animals",
    category: "Festival Production & Live Experience Execution",
    image: "/images/electric-animals-logo-fest.webp",
    heroImage: "/images/_a1a6014.webp",
    summary: "Electric Animals is a flagship electronic music festival experience executed through a high-control production model designed for scale, consistency, and premium attendee experience. XR Studio leads end-to-end execution across technical planning, vendor coordination, onsite operations, and live-show control.",
    scope: [
      "Full production execution and venue operations",
      "Technical coordination (audio, lighting, video) and run-of-show control",
      "Artist/backstage operations and flow management",
      "On-site incident response and operational decision-making",
      "Audiovisual capture strategy to convert the event into long-term brand assets",
    ],
    outcomes: [
      "Predictable execution",
      "Premium production standards",
      "Scalable operating model",
    ],
    gallery: [
      "/images/_a1a6014.webp",
      "/images/_a1a6369.webp",
      "/images/_a1a6440.webp",
      "/images/_a1a6606.webp",
    ],
  },
  {
    slug: "pura-tinta-fest",
    name: "Pura Tinta Fest",
    category: "Convention Production, Floor Operations & Brand Experience",
    image: "/images/img_3577.webp",
    heroImage: "/images/img_3577.webp",
    summary: "Pura Tinta Fest is a large-scale cultural convention that demands operational precision across complex attendee flows, exhibitor needs, and continuous programming. XR Studio executes the event as a controlled system—balancing experience, safety, vendor logistics, and content capture.",
    scope: [
      "Convention production and show-floor operations",
      "Vendor/exhibitor coordination and logistics",
      "Stage/program execution and timing control",
      "Attendee flow design support and on-site enforcement",
      "Audiovisual production for multi-day storytelling and promotion",
    ],
    outcomes: [
      "Smooth show-floor operations",
      "Consistent programming delivery",
      "Strong brand experience",
    ],
    gallery: [
      "/images/img_3577.webp",
      "/images/img_3697.webp",
      "/images/img_3833.webp",
      "/images/img_3499.webp",
    ],
  },
  {
    slug: "blockchain-jungle",
    name: "Blockchain Jungle",
    category: "Conference Execution, Speaker Ops & Technical Production",
    image: "/images/bcjungle-19.webp",
    heroImage: "/images/bcjungle-19.webp",
    summary: "Blockchain Jungle is a multi-stakeholder conference environment requiring precise timing, speaker management, and reliable technical production. XR Studio runs the operational backbone—ensuring sessions, stages, and show flow execute cleanly for partners, speakers, and attendees.",
    scope: [
      "Conference production and stage management",
      "Speaker operations, schedules, and backstage coordination",
      "Technical execution (A/V, lighting, screens) with redundancy mindset",
      "Front-of-house operations and attendee experience control",
      "Post-event reporting and optimization insights",
    ],
    outcomes: [
      "Zero-friction conference flow",
      "Reliable stage execution",
      "Professional stakeholder experience",
    ],
    gallery: [
      "/images/bcjungle-19.webp",
      "/images/bcjungle-28.webp",
      "/images/bcjungle-7.webp",
    ],
  },
  {
    slug: "magflow",
    name: "Magflow",
    category: "Event Production Support & Audiovisual Capture",
    image: "/images/jacobcollier_21-09-25-01550.webp",
    heroImage: "/images/jacobcollier_21-09-25-01550.webp",
    summary: "Magflow is a culture and music platform that translates into live experiences and content-driven programming. XR Studio supports execution with production discipline and captures content designed to extend impact beyond event day.",
    scope: [
      "Production planning and live execution support",
      "Technical coordination scaled to venue and format",
      "Audiovisual production for episodic and promotional use",
      "Operational staffing and onsite control as required",
    ],
    outcomes: [
      "Consistent delivery",
      "High-quality content assets",
      "Repeatable formats",
    ],
    gallery: [
      "/images/jacobcollier_21-09-25-01550.webp",
      "/images/jacobcollier_21-09-25-04416.webp",
      "/images/jacobcollier_21-09-25-04612.webp",
    ],
  },
  {
    slug: "sweetspot",
    name: "Sweetspot",
    category: "Esports Event Operations & Competitive Production",
    image: "/images/ss_img_0083.webp",
    heroImage: "/images/ss_img_0083.webp",
    summary: "Sweetspot competitions require a different type of precision: competitive integrity, technical reliability, and audience-ready execution. XR Studio operates events with structured workflows—ensuring brackets, timing, production cues, and onsite experience run smoothly.",
    scope: [
      "Esports event operations and run-of-show execution",
      "Stage/stream coordination and timing discipline",
      "Onsite logistics for players, staff, and audience",
      "Technical production alignment for live viewing experience",
      "Reporting loops to improve future tournaments",
    ],
    outcomes: [
      "Reliable competitive operations",
      "Clean execution",
      "Scalable tournament delivery",
    ],
    gallery: [
      "/images/ss_img_0083.webp",
      "/images/ss_img_0128.webp",
      "/images/ss_img_0238.webp",
    ],
  },
];

export const categories = [
  "All",
  "Festivals",
  "Conferences",
  "Culture/Conventions",
  "Esports",
  "Content",
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}
