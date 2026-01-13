import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "./components";

const services = [
  {
    title: "Experience Execution",
    description: "End-to-end production management for live events that demand precision.",
    icon: "01",
    href: "/services/experience-execution",
  },
  {
    title: "Technical & Stage Design",
    description: "Audio, lighting, video, and stage infrastructure engineered for impact.",
    icon: "02",
    href: "/services/technical-stage-design",
  },
  {
    title: "On-Site Operations",
    description: "Crew coordination, logistics, and real-time decision making.",
    icon: "03",
    href: "/services/on-site-operations",
  },
  {
    title: "Audiovisual Production",
    description: "Content capture and post-production that extends your event's reach.",
    icon: "04",
    href: "/services/audiovisual-production",
  },
  {
    title: "Performance & Feedback",
    description: "Data-driven reporting and optimization for continuous improvement.",
    icon: "05",
    href: "/services/performance-feedback",
  },
];

const featuredWork = [
  {
    name: "Electric Animals",
    category: "Festival Production",
    image: "/images/_a1a6014.webp",
    slug: "electric-animals",
  },
  {
    name: "Blockchain Jungle",
    category: "Conference Execution",
    image: "/images/bcjungle-19.webp",
    slug: "blockchain-jungle",
  },
  {
    name: "Sweetspot",
    category: "Esports Operations",
    image: "/images/ss_img_0083.webp",
    slug: "sweetspot",
  },
];

const processSteps = [
  { number: "01", title: "Blueprint", subtitle: "Review" },
  { number: "02", title: "Production", subtitle: "Planning" },
  { number: "03", title: "Live", subtitle: "Execution" },
  { number: "04", title: "Reporting", subtitle: "& Optimization" },
];

const stats = [
  { value: "50+", label: "Events Executed" },
  { value: "100K+", label: "Attendees Reached" },
  { value: "5", label: "Countries" },
  { value: "99%", label: "Client Satisfaction" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Nav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated background orbs */}
        <div className="gradient-orb top-0 left-0" />
        <div className="gradient-orb gradient-orb-2 bottom-0 right-0" />
        <div className="gradient-orb gradient-orb-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#1a1a1a] bg-black/50 backdrop-blur-sm mb-8">
              <span className="pulse-dot" />
              <span className="text-[#00ff88] text-sm uppercase tracking-[0.2em] font-mono">
                Production & Experience Engine
              </span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-8 reveal reveal-delay-1">
            <span className="block">XR</span>
            <span className="block text-[#00ff88]">STUDIO</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#888] max-w-2xl mx-auto mb-12 leading-relaxed reveal reveal-delay-2">
            We execute complex live experiences with <span className="text-white">precision</span>, <span className="text-white">control</span>, and <span className="text-[#00ff88]">international standards</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-delay-3">
            <Link href="/contact" className="btn-primary group">
              <span className="flex items-center gap-2">
                Request a Production Call
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link href="/work" className="btn-secondary">
              View Our Work
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 reveal reveal-delay-4">
          <span className="text-[#888] text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#00ff88] to-transparent" />
        </div>
      </section>

      {/* Stats Strip */}
      <section className="relative border-y border-[#1a1a1a] bg-black">
        <div className="glow-line absolute top-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#00ff88] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#888] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="glow-line absolute bottom-0 left-0 right-0" />
      </section>

      {/* What We Do */}
      <section className="py-32 px-6 relative">
        <div className="gradient-orb gradient-orb-2 top-0 right-0 opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <div className="accent-bar" />
              <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
                What We Do
              </p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Services
              </h2>
            </div>
            <Link href="/services" className="text-[#888] hover:text-[#00ff88] transition-colors mt-4 md:mt-0 group flex items-center gap-2">
              View all services
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group p-8 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#00ff88] transition-all duration-300 hover-glow"
              >
                <span className="text-[#00ff88] font-mono text-5xl font-bold opacity-20 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </span>
                <h3 className="text-xl font-semibold mt-4 mb-3 group-hover:text-[#00ff88] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-[#888] group-hover:text-[#00ff88] transition-colors">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-32 px-6 bg-[#050505] relative">
        <div className="gradient-orb top-1/2 left-0 -translate-y-1/2 opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <div className="accent-bar" />
              <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
                Featured Work
              </p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Case Studies
              </h2>
            </div>
            <Link href="/work" className="text-[#888] hover:text-[#00ff88] transition-colors mt-4 md:mt-0 group flex items-center gap-2">
              Explore all work
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Featured large card */}
          <Link
            href={`/work/${featuredWork[0].slug}`}
            className="group relative aspect-[21/9] overflow-hidden mb-6 block"
          >
            <Image
              src={featuredWork[0].image}
              alt={featuredWork[0].name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 border border-[#1a1a1a] group-hover:border-[#00ff88] transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <p className="text-[#00ff88] text-sm uppercase tracking-wider mb-3 font-mono">
                {featuredWork[0].category}
              </p>
              <h3 className="text-3xl md:text-5xl font-bold group-hover:text-[#00ff88] transition-colors">
                {featuredWork[0].name}
              </h3>
            </div>
          </Link>

          {/* Secondary cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {featuredWork.slice(1).map((work, i) => (
              <Link
                key={i}
                href={`/work/${work.slug}`}
                className="group relative aspect-[16/9] overflow-hidden"
              >
                <Image
                  src={work.image}
                  alt={work.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 border border-[#1a1a1a] group-hover:border-[#00ff88] transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-[#00ff88] text-xs uppercase tracking-wider mb-2 font-mono">
                    {work.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-[#00ff88] transition-colors">
                    {work.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="gradient-orb gradient-orb-3 bottom-0 right-0 opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="accent-bar mx-auto" />
            <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
              Our Process
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-8xl font-bold text-[#0a0a0a] group-hover:text-[#111] transition-colors">
                  {step.number}
                </div>
                <div className="absolute top-8 left-4">
                  <div className="w-3 h-3 bg-[#00ff88] mb-4" />
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-[#888]">{step.subtitle}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full">
                    <div className="h-px bg-gradient-to-r from-[#1a1a1a] to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/process" className="btn-secondary">
              Learn About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-32 px-6 bg-[#050505] border-y border-[#1a1a1a] relative overflow-hidden">
        <div className="gradient-orb top-0 left-1/2 -translate-x-1/2 opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="accent-bar mx-auto" />
          <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-6 font-mono">
            Ecosystem
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
            Strategy designed by <span className="text-[#888]">Broccoli</span>.<br />
            Executed by <span className="text-[#00ff88]">XR Studio</span>.
          </h2>
          <p className="text-[#888] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            We operate as the execution arm within a larger strategic ecosystem.
            Broccoli designs the system and strategy. XR Studio brings it to life
            with operational precision and technical excellence.
          </p>
          <Link href="/about" className="btn-secondary">
            Learn About Our Ecosystem
          </Link>
        </div>
      </section>

      {/* CTA Footer Band */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="gradient-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Execute with<br /><span className="text-[#00ff88]">confidence</span>.
          </h2>
          <p className="text-[#888] text-lg mb-10 max-w-xl mx-auto">
            Ready to bring precision and control to your next live experience?
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Contact XR Studio
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
