import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Experience Execution",
    description: "End-to-end production management for live events that demand precision.",
    icon: "01",
  },
  {
    title: "Technical & Stage Design",
    description: "Audio, lighting, video, and stage infrastructure engineered for impact.",
    icon: "02",
  },
  {
    title: "On-Site Operations",
    description: "Crew coordination, logistics, and real-time decision making.",
    icon: "03",
  },
  {
    title: "Audiovisual Production",
    description: "Content capture and post-production that extends your event's reach.",
    icon: "04",
  },
  {
    title: "Performance & Feedback",
    description: "Data-driven reporting and optimization for continuous improvement.",
    icon: "05",
  },
];

const featuredWork = [
  {
    name: "Electric Animals",
    category: "Festival Production",
    image: "/images/electric-animals-logo-fest.webp",
    slug: "electric-animals",
  },
  {
    name: "Pura Tinta Fest",
    category: "Convention Production",
    image: "/images/img_3577.webp",
    slug: "pura-tinta-fest",
  },
  {
    name: "Blockchain Jungle",
    category: "Conference Execution",
    image: "/images/bcjungle-19.webp",
    slug: "blockchain-jungle",
  },
  {
    name: "Magflow",
    category: "Event Production",
    image: "/images/jacobcollier_21-09-25-01550.webp",
    slug: "magflow",
  },
  {
    name: "Sweetspot",
    category: "Esports Operations",
    image: "/images/ss_img_0083.webp",
    slug: "sweetspot",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Blueprint Review",
    description: "We analyze your vision, requirements, and constraints to establish a clear operational foundation.",
  },
  {
    number: "02",
    title: "Production Planning",
    description: "Detailed technical specifications, timelines, vendor coordination, and staffing plans.",
  },
  {
    number: "03",
    title: "Live Execution",
    description: "On-site control, real-time coordination, and incident response with precision.",
  },
  {
    number: "04",
    title: "Reporting & Optimization",
    description: "Post-event analysis, performance metrics, and recommendations for future improvement.",
  },
];

const trustPoints = [
  "Multi-brand production portfolio",
  "Large-scale operations capability",
  "End-to-end execution teams",
  "Data-driven improvement loops",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            XR<span className="text-[#00ff88]">.</span>STUDIO
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-sm text-[#888] hover:text-white transition-colors underline-hover">
              Services
            </Link>
            <Link href="/work" className="text-sm text-[#888] hover:text-white transition-colors underline-hover">
              Work
            </Link>
            <Link href="/process" className="text-sm text-[#888] hover:text-white transition-colors underline-hover">
              Process
            </Link>
            <Link href="/about" className="text-sm text-[#888] hover:text-white transition-colors underline-hover">
              About
            </Link>
            <Link href="/contact" className="btn-primary text-sm">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          <p className="text-[#00ff88] text-sm uppercase tracking-[0.3em] mb-6 font-mono">
            Production & Experience Engine
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
            XR STUDIO
          </h1>
          <p className="text-xl md:text-2xl text-[#888] max-w-2xl mx-auto mb-12 leading-relaxed">
            We execute complex live experiences with precision, control, and international standards.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Request a Production Call
            </Link>
            <Link href="/work" className="btn-secondary">
              View Our Work
            </Link>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#00ff88]" />
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-[#1a1a1a] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#00ff88]" />
                <span className="text-sm text-[#888]">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
                What We Do
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Services
              </h2>
            </div>
            <Link href="/services" className="text-[#888] hover:text-[#00ff88] transition-colors mt-4 md:mt-0 underline-hover">
              View all services →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="card p-8 group cursor-pointer"
              >
                <span className="text-[#00ff88] font-mono text-sm mb-6 block">
                  {service.icon}
                </span>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#00ff88] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
                Featured Work
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Case Studies
              </h2>
            </div>
            <Link href="/work" className="text-[#888] hover:text-[#00ff88] transition-colors mt-4 md:mt-0 underline-hover">
              Explore all case studies →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWork.map((work, i) => (
              <Link
                key={i}
                href={`/work/${work.slug}`}
                className="group relative aspect-[4/3] overflow-hidden bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#00ff88] transition-all"
              >
                <Image
                  src={work.image}
                  alt={work.name}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[#00ff88] text-xs uppercase tracking-wider mb-2 font-mono">
                    {work.category}
                  </p>
                  <h3 className="text-xl font-semibold group-hover:text-[#00ff88] transition-colors">
                    {work.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
              Our Process
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              How We Work
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-[#1a1a1a] mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  {step.description}
                </p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#1a1a1a] to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-32 px-6 bg-[#050505] border-y border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-6 font-mono">
            Ecosystem
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Strategy designed by Broccoli.<br />
            <span className="text-[#00ff88]">Executed by XR Studio.</span>
          </h2>
          <p className="text-[#888] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            We operate as the execution arm within a larger strategic ecosystem.
            Broccoli designs the system and strategy. XR Studio brings it to life
            with operational precision and technical excellence.
          </p>
          <Link href="/about" className="btn-secondary">
            Learn About Our Process
          </Link>
        </div>
      </section>

      {/* CTA Footer Band */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Execute with confidence.
          </h2>
          <p className="text-[#888] text-lg mb-10 max-w-xl mx-auto">
            Ready to bring precision and control to your next live experience?
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Contact XR Studio
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <Link href="/" className="text-xl font-bold tracking-tight">
                XR<span className="text-[#00ff88]">.</span>STUDIO
              </Link>
              <p className="text-[#888] text-sm mt-2">
                Production & Experience Engine
              </p>
            </div>
            <div className="flex flex-wrap gap-8">
              <Link href="/services" className="text-sm text-[#888] hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/work" className="text-sm text-[#888] hover:text-white transition-colors">
                Work
              </Link>
              <Link href="/process" className="text-sm text-[#888] hover:text-white transition-colors">
                Process
              </Link>
              <Link href="/about" className="text-sm text-[#888] hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm text-[#888] hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-[#888] text-sm">
              © {new Date().getFullYear()} XR Studio. All rights reserved.
            </p>
            <p className="text-[#888] text-sm">
              Part of the Broccoli ecosystem
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
