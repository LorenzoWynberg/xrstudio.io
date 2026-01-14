"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Nav,
  Footer,
  HeroSlider,
  ScrollReveal,
  StaggerContainer,
  Parallax,
  ClientLogos,
  Testimonials,
} from "./components";

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

      {/* Hero Section - Headline Focus with Animated BG */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Carousel */}
        <HeroSlider />

        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-20 z-10" />

        {/* Gradient orbs */}
        <div className="gradient-orb -top-40 -left-40 z-10" />
        <div className="gradient-orb gradient-orb-2 -bottom-40 -right-40 z-10" />

        {/* Main Content - Centered Headlines */}
        <div className="relative z-20 max-w-[1400px] mx-auto px-6 text-center">
          <div className="reveal">
            <span className="section-label inline-block mb-8">
              Production & Experience Engine
            </span>
          </div>

          <h1 className="text-hero mb-8 reveal reveal-delay-1">
            <span className="block text-white">XR</span>
            <span className="block gradient-text-animated">STUDIO</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#888] max-w-2xl mx-auto mb-12 reveal reveal-delay-2">
            Execute with <span className="text-white">precision</span>, <span className="text-white">control</span>, and <span className="text-[#00ff88]">international standards</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-delay-3">
            <Link href="/contact" className="btn-primary group">
              <span className="flex items-center gap-2">
                Start a Project
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
            <Link href="/work" className="btn-secondary">
              View Our Work
            </Link>
          </div>
        </div>

      </section>

      {/* Stats Strip */}
      <section className="relative border-y border-[#1a1a1a] bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 py-20">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="stat-number transition-transform group-hover:scale-105">
                  {stat.value}
                </div>
                <div className="text-small text-[#555] uppercase tracking-[0.15em] mt-2 font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* What We Do */}
      <section className="py-32 px-6 relative">
        <div className="gradient-orb gradient-orb-2 -top-40 -right-40" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <span className="section-label block mb-4">What We Do</span>
                <h2 className="text-h2">Services</h2>
              </div>
              <Link
                href="/services"
                className="text-[#555] hover:text-[#00ff88] transition-colors mt-4 md:mt-0 group flex items-center gap-2 text-small"
              >
                View all services
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group p-8 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#00ff88] transition-all duration-300"
              >
                <span className="text-[#00ff88] font-mono text-4xl font-bold opacity-20 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </span>
                <h3 className="text-h3 mt-4 mb-3 group-hover:text-[#00ff88] transition-colors">
                  {service.title}
                </h3>
                <p className="text-small text-[#888] leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-small text-[#555] group-hover:text-[#00ff88] transition-colors">
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Work - Asymmetric Collage Layout */}
      <section className="py-32 px-6 bg-[#050505] relative">
        <div className="gradient-orb top-1/2 -left-40 -translate-y-1/2" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <span className="section-label block mb-4">Featured Work</span>
                <h2 className="text-h2">Case Studies</h2>
              </div>
              <Link
                href="/work"
                className="text-[#555] hover:text-[#00ff88] transition-colors mt-4 md:mt-0 group flex items-center gap-2 text-small"
              >
                Explore all work
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          {/* Asymmetric Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-4">
            {/* Large featured image - left */}
            <ScrollReveal className="lg:col-span-7" direction="left">
              <Link
                href="/work/electric-animals"
                className="group relative block h-full min-h-[500px] lg:min-h-[600px] overflow-hidden border border-[#1a1a1a] hover:border-[#00ff88] transition-colors"
              >
                <Image
                  src="/images/electric-animals-foto-carlcox.webp"
                  alt="Electric Animals"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 z-10">
                  <span className="section-label text-xs">Festival Production</span>
                  <h3 className="text-h3 mt-2 group-hover:text-[#00ff88] transition-colors">
                    Electric Animals
                  </h3>
                  <p className="text-small text-[#888] mt-2 max-w-md">
                    Full-scale festival production featuring international artists
                  </p>
                </div>
              </Link>
            </ScrollReveal>

            {/* Stacked images - right */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <ScrollReveal direction="right">
                <Link
                  href="/work/blockchain-jungle"
                  className="group relative block aspect-[16/10] overflow-hidden border border-[#1a1a1a] hover:border-[#00ff88] transition-colors"
                >
                  <Image
                    src="/images/blockchain-jungle-fotos-bj-1-of-1-3.webp"
                    alt="Blockchain Jungle"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <span className="section-label text-xs">Conference</span>
                    <h3 className="text-lg font-semibold mt-1 group-hover:text-[#00ff88] transition-colors">
                      Blockchain Jungle
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={100}>
                <Link
                  href="/work/magflow"
                  className="group relative block aspect-[16/10] overflow-hidden border border-[#1a1a1a] hover:border-[#00ff88] transition-colors"
                >
                  <Image
                    src="/images/magflow-jacobcollier-fotos-jacob-1-of-1-10.webp"
                    alt="Magflow - Jacob Collier"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <span className="section-label text-xs">Concert Production</span>
                    <h3 className="text-lg font-semibold mt-1 group-hover:text-[#00ff88] transition-colors">
                      Magflow — Jacob Collier
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </div>

          {/* Additional row */}
          <StaggerContainer className="grid md:grid-cols-3 gap-4 mt-4">
            <Link
              href="/work/sweetspot"
              className="group relative aspect-[4/3] overflow-hidden border border-[#1a1a1a] hover:border-[#00ff88] transition-colors"
            >
              <Image
                src="/images/ss_img_0083.webp"
                alt="Sweetspot"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <span className="section-label text-xs">Esports</span>
                <h3 className="text-lg font-semibold mt-1 group-hover:text-[#00ff88] transition-colors">
                  Sweetspot
                </h3>
              </div>
            </Link>

            <Link
              href="/work/pura-tinta-fest"
              className="group relative aspect-[4/3] overflow-hidden border border-[#1a1a1a] hover:border-[#00ff88] transition-colors"
            >
              <Image
                src="/images/pura-tinta-fotos-puratintajpg4.webp"
                alt="Pura Tinta"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <span className="section-label text-xs">Event Production</span>
                <h3 className="text-lg font-semibold mt-1 group-hover:text-[#00ff88] transition-colors">
                  Pura Tinta
                </h3>
              </div>
            </Link>

            <Link
              href="/work/electric-animals"
              className="group relative aspect-[4/3] overflow-hidden border border-[#1a1a1a] hover:border-[#00ff88] transition-colors"
            >
              <Image
                src="/images/electric-animals-foto-oneiro2025.webp"
                alt="Oneiro 2025"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <span className="section-label text-xs">Festival</span>
                <h3 className="text-lg font-semibold mt-1 group-hover:text-[#00ff88] transition-colors">
                  Oneiro 2025
                </h3>
              </div>
            </Link>
          </StaggerContainer>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="gradient-orb gradient-orb-3 bottom-0 right-0" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="section-label block mb-4">Our Process</span>
              <h2 className="text-h2">How We Work</h2>
            </div>
          </ScrollReveal>

          <div className="flex justify-center items-start gap-4 md:gap-0">
            {processSteps.map((step, i) => (
              <StaggerContainer key={i} className="flex-1 max-w-[200px] text-center px-4">
                <div className="text-6xl md:text-7xl font-bold text-[#00ff88] mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                <p className="text-sm text-[#666]">{step.subtitle}</p>
              </StaggerContainer>
            ))}
          </div>

          <ScrollReveal className="text-center mt-16">
            <Link href="/process" className="btn-secondary">
              Learn About Our Process
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Ecosystem Section */}
      <section className="py-32 px-6 bg-[#050505] border-y border-[#1a1a1a] relative overflow-hidden">
        <div className="gradient-orb gradient-orb-2 top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="section-label block mb-6">Ecosystem</span>
            <h2 className="text-h2 mb-8 leading-tight">
              Strategy designed by <span className="text-[#555]">Broccoli</span>.<br />
              Executed by <span className="text-[#00ff88]">XR Studio</span>.
            </h2>
            <p className="text-body-lg mb-10 max-w-2xl mx-auto">
              We operate as the execution arm within a larger strategic ecosystem.
              Broccoli designs the system and strategy. XR Studio brings it to life
              with operational precision and technical excellence.
            </p>
            <Link href="/about" className="btn-secondary">
              Learn About Our Ecosystem
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Footer Band */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="gradient-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-h1 mb-8">
              Execute with<br />
              <span className="gradient-text-animated">confidence</span>.
            </h2>
            <p className="text-body-lg mb-10 max-w-xl mx-auto">
              Ready to bring precision and control to your next live experience?
            </p>
            <Link href="/contact" className="btn-primary">
              Contact XR Studio
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
