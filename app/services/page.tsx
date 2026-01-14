import Link from 'next/link';
import { Nav, Footer } from '../components';
import { services, industries } from '../data/services';

export const metadata = {
  title: 'Services — XR Studio',
  description:
    'XR Studio delivers execution across production, technical design, operations, and content capture.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-black">
      <Nav />

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-20">
        <div className="gradient-orb top-0 right-0 opacity-40" />
        <div className="gradient-orb gradient-orb-3 bottom-0 left-0 opacity-30" />
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="reveal">
            <div className="accent-bar" />
            <p className="mb-4 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
              What We Do
            </p>
          </div>
          <h1 className="reveal reveal-delay-1 mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Services
          </h1>
          <p className="reveal reveal-delay-2 max-w-2xl text-xl leading-relaxed text-[#888]">
            XR Studio delivers execution across production, technical design, operations, and
            content capture.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative px-6 py-20">
        <div className="gradient-orb gradient-orb-2 top-1/2 right-0 -translate-y-1/2 opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-6">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card group hover-glow flex flex-col gap-6 p-8 md:flex-row md:items-center md:gap-12 md:p-12"
              >
                <span className="font-mono text-4xl font-bold text-[#00ff88] md:text-5xl">
                  {service.icon}
                </span>
                <div className="flex-1">
                  <h2 className="mb-3 text-2xl font-semibold transition-colors group-hover:text-[#00ff88] md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="leading-relaxed text-[#888]">{service.shortDescription}</p>
                </div>
                <div className="text-[#888] transition-colors group-hover:text-[#00ff88]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative overflow-hidden border-y border-[#1a1a1a] bg-[#050505] px-6 py-20">
        <div className="glow-line absolute top-0 right-0 left-0" />
        <div className="gradient-orb bottom-0 left-0 opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="accent-bar" />
          <p className="mb-4 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
            Industries
          </p>
          <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-5xl">Who We Work With</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-2 h-2 w-2 shrink-0 bg-[#00ff88]" />
                <div>
                  <h3 className="mb-1 font-semibold">{industry.name}</h3>
                  <p className="text-sm text-[#888]">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-32">
        <div className="gradient-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Book a <span className="text-[#00ff88]">production consult</span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-[#888]">
            Let&apos;s discuss how XR Studio can execute your next event with precision.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
