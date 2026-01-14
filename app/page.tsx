'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Nav,
  Footer,
  HeroSlider,
  ScrollReveal,
  StaggerContainer,
  Parallax,
  ClientLogos,
  Testimonials,
} from './components';

const services = [
  {
    title: 'Experience Execution',
    description: 'End-to-end production management for live events that demand precision.',
    icon: '01',
    href: '/services/experience-execution',
  },
  {
    title: 'Technical & Stage Design',
    description: 'Audio, lighting, video, and stage infrastructure engineered for impact.',
    icon: '02',
    href: '/services/technical-stage-design',
  },
  {
    title: 'On-Site Operations',
    description: 'Crew coordination, logistics, and real-time decision making.',
    icon: '03',
    href: '/services/on-site-operations',
  },
  {
    title: 'Audiovisual Production',
    description: "Content capture and post-production that extends your event's reach.",
    icon: '04',
    href: '/services/audiovisual-production',
  },
  {
    title: 'Performance & Feedback',
    description: 'Data-driven reporting and optimization for continuous improvement.',
    icon: '05',
    href: '/services/performance-feedback',
  },
];

const featuredWork = [
  {
    name: 'Electric Animals',
    category: 'Festival Production',
    image: '/images/_a1a6014.webp',
    slug: 'electric-animals',
  },
  {
    name: 'Blockchain Jungle',
    category: 'Conference Execution',
    image: '/images/bcjungle-19.webp',
    slug: 'blockchain-jungle',
  },
  {
    name: 'Sweetspot',
    category: 'Esports Operations',
    image: '/images/ss_img_0083.webp',
    slug: 'sweetspot',
  },
];

const processSteps = [
  { number: '01', title: 'Blueprint', subtitle: 'Review' },
  { number: '02', title: 'Production', subtitle: 'Planning' },
  { number: '03', title: 'Live', subtitle: 'Execution' },
  { number: '04', title: 'Reporting', subtitle: '& Optimization' },
];

const stats = [
  { value: '50+', label: 'Events Executed' },
  { value: '100K+', label: 'Attendees Reached' },
  { value: '5', label: 'Countries' },
  { value: '99%', label: 'Client Satisfaction' },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-black">
      <Nav />

      {/* Hero Section - Headline Focus with Animated BG */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background Image Carousel */}
        <HeroSlider />

        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

        {/* Grid pattern overlay */}
        <div className="grid-pattern absolute inset-0 z-10 opacity-20" />

        {/* Gradient orbs */}
        <div className="gradient-orb -top-40 -left-40 z-10" />
        <div className="gradient-orb gradient-orb-2 -right-40 -bottom-40 z-10" />

        {/* Main Content - Centered Headlines */}
        <div className="relative z-20 mx-auto max-w-[1400px] px-6 text-center">
          <div className="reveal">
            <span className="section-label mb-8 inline-block">Production & Experience Engine</span>
          </div>

          <h1 className="text-hero reveal reveal-delay-1 mb-8">
            <span className="block text-white">XR</span>
            <span className="gradient-text-animated block">STUDIO</span>
          </h1>

          <p className="reveal reveal-delay-2 mx-auto mb-12 max-w-2xl text-xl text-[#888] md:text-2xl">
            Execute with <span className="text-white">precision</span>,{' '}
            <span className="text-white">control</span>, and{' '}
            <span className="text-[#00ff88]">international standards</span>.
          </p>

          <div className="reveal reveal-delay-3 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary group">
              <span className="flex items-center gap-2">
                Start a Project
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <StaggerContainer className="grid grid-cols-2 gap-12 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="group text-center">
                <div className="stat-number transition-transform group-hover:scale-105">
                  {stat.value}
                </div>
                <div className="text-small mt-2 font-mono tracking-[0.15em] text-[#555] uppercase">
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
      <section className="relative px-6 py-32">
        <div className="gradient-orb gradient-orb-2 -top-40 -right-40" />
        <div className="relative z-10 mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between">
              <div>
                <span className="section-label mb-4 block">What We Do</span>
                <h2 className="text-h2">Services</h2>
              </div>
              <Link
                href="/services"
                className="group text-small mt-4 flex items-center gap-2 text-[#555] transition-colors hover:text-[#00ff88] md:mt-0"
              >
                View all services
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
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

          <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group border border-[#1a1a1a] bg-[#0a0a0a] p-8 transition-all duration-300 hover:border-[#00ff88]"
              >
                <span className="font-mono text-4xl font-bold text-[#00ff88] opacity-20 transition-opacity group-hover:opacity-100">
                  {service.icon}
                </span>
                <h3 className="text-h3 mt-4 mb-3 transition-colors group-hover:text-[#00ff88]">
                  {service.title}
                </h3>
                <p className="text-small leading-relaxed text-[#888]">{service.description}</p>
                <div className="text-small mt-6 flex items-center gap-2 text-[#555] transition-colors group-hover:text-[#00ff88]">
                  <span>Learn more</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
      <section className="relative bg-[#050505] px-6 py-32">
        <div className="gradient-orb top-1/2 -left-40 -translate-y-1/2" />
        <div className="relative z-10 mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between">
              <div>
                <span className="section-label mb-4 block">Featured Work</span>
                <h2 className="text-h2">Case Studies</h2>
              </div>
              <Link
                href="/work"
                className="group text-small mt-4 flex items-center gap-2 text-[#555] transition-colors hover:text-[#00ff88] md:mt-0"
              >
                Explore all work
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
          <div className="grid gap-4 lg:grid-cols-12">
            {/* Large featured image - left */}
            <ScrollReveal className="lg:col-span-7" direction="left">
              <Link
                href="/work/electric-animals"
                className="group relative block h-full min-h-[500px] overflow-hidden border border-[#1a1a1a] transition-colors hover:border-[#00ff88] lg:min-h-[600px]"
              >
                <Image
                  src="/images/electric-animals-foto-carlcox.webp"
                  alt="Electric Animals"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 z-10 p-8 lg:p-10">
                  <span className="section-label text-xs">Festival Production</span>
                  <h3 className="text-h3 mt-2 transition-colors group-hover:text-[#00ff88]">
                    Electric Animals
                  </h3>
                  <p className="text-small mt-2 max-w-md text-[#888]">
                    Full-scale festival production featuring international artists
                  </p>
                </div>
              </Link>
            </ScrollReveal>

            {/* Stacked images - right */}
            <div className="flex flex-col gap-4 lg:col-span-5">
              <ScrollReveal direction="right">
                <Link
                  href="/work/blockchain-jungle"
                  className="group relative block aspect-[16/10] overflow-hidden border border-[#1a1a1a] transition-colors hover:border-[#00ff88]"
                >
                  <Image
                    src="/images/blockchain-jungle-fotos-bj-1-of-1-3.webp"
                    alt="Blockchain Jungle"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 z-10 p-6">
                    <span className="section-label text-xs">Conference</span>
                    <h3 className="mt-1 text-lg font-semibold transition-colors group-hover:text-[#00ff88]">
                      Blockchain Jungle
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={100}>
                <Link
                  href="/work/magflow"
                  className="group relative block aspect-[16/10] overflow-hidden border border-[#1a1a1a] transition-colors hover:border-[#00ff88]"
                >
                  <Image
                    src="/images/magflow-jacobcollier-fotos-jacob-1-of-1-10.webp"
                    alt="Magflow - Jacob Collier"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 z-10 p-6">
                    <span className="section-label text-xs">Concert Production</span>
                    <h3 className="mt-1 text-lg font-semibold transition-colors group-hover:text-[#00ff88]">
                      Magflow — Jacob Collier
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </div>

          {/* Additional row */}
          <StaggerContainer className="mt-4 grid gap-4 md:grid-cols-3">
            <Link
              href="/work/sweetspot"
              className="group relative aspect-[4/3] overflow-hidden border border-[#1a1a1a] transition-colors hover:border-[#00ff88]"
            >
              <Image
                src="/images/ss_img_0083.webp"
                alt="Sweetspot"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 z-10 p-6">
                <span className="section-label text-xs">Esports</span>
                <h3 className="mt-1 text-lg font-semibold transition-colors group-hover:text-[#00ff88]">
                  Sweetspot
                </h3>
              </div>
            </Link>

            <Link
              href="/work/pura-tinta-fest"
              className="group relative aspect-[4/3] overflow-hidden border border-[#1a1a1a] transition-colors hover:border-[#00ff88]"
            >
              <Image
                src="/images/pura-tinta-fotos-puratintajpg4.webp"
                alt="Pura Tinta"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 z-10 p-6">
                <span className="section-label text-xs">Event Production</span>
                <h3 className="mt-1 text-lg font-semibold transition-colors group-hover:text-[#00ff88]">
                  Pura Tinta
                </h3>
              </div>
            </Link>

            <Link
              href="/work/electric-animals"
              className="group relative aspect-[4/3] overflow-hidden border border-[#1a1a1a] transition-colors hover:border-[#00ff88]"
            >
              <Image
                src="/images/electric-animals-foto-oneiro2025.webp"
                alt="Oneiro 2025"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 z-10 p-6">
                <span className="section-label text-xs">Festival</span>
                <h3 className="mt-1 text-lg font-semibold transition-colors group-hover:text-[#00ff88]">
                  Oneiro 2025
                </h3>
              </div>
            </Link>
          </StaggerContainer>
        </div>
      </section>

      {/* How We Work */}
      <section className="relative overflow-hidden px-6 py-32">
        <div className="gradient-orb gradient-orb-3 right-0 bottom-0" />
        <div className="relative z-10 mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="mb-20 text-center">
              <span className="section-label mb-4 block">Our Process</span>
              <h2 className="text-h2">How We Work</h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-md grid-cols-2 gap-8 md:max-w-2xl lg:max-w-5xl lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <StaggerContainer key={i} className="group relative">
                <div className="border border-[#1a1a1a] bg-[#0a0a0a]/50 p-6 transition-all duration-300 hover:border-[#00ff88] hover:bg-[#0a0a0a]">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-mono text-sm text-[#00ff88]">{step.number}</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#00ff88]/50 to-transparent" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-[#00ff88]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#666]">{step.subtitle}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="absolute top-1/2 -right-3 hidden h-px w-6 bg-[#1a1a1a] lg:block" />
                )}
              </StaggerContainer>
            ))}
          </div>

          <ScrollReveal className="mt-16 text-center">
            <Link href="/process" className="btn-secondary">
              Learn About Our Process
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Ecosystem Section */}
      <section className="relative overflow-hidden px-6 py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/electric-animals-foto-carlcox.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <span className="section-label mb-6 block">Ecosystem</span>
            <h2 className="text-h2 mb-8 leading-tight">
              <span className="inline-block bg-[#00ff88] px-4 py-2 text-black">
                Strategy designed by Broccoli.
              </span>
              <br />
              <span className="mt-2 inline-block bg-[#00ff88] px-4 py-2 text-black">
                Executed by XR Studio.
              </span>
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white">
              We operate as the execution arm within a larger strategic ecosystem. Broccoli designs
              the system and strategy. XR Studio brings it to life with operational precision and
              technical excellence.
            </p>
            <Link href="/about" className="btn-secondary">
              Learn About Our Ecosystem
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Footer Band */}
      <section className="relative overflow-hidden px-6 py-32">
        <div className="gradient-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="grid-pattern absolute inset-0 opacity-20" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-h1 mb-8">
              Execute with
              <br />
              <span className="gradient-text-animated">confidence.</span>
            </h2>
            <p className="text-body-lg mx-auto mb-10 max-w-xl">
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
