import Link from "next/link";
import { Nav, Footer } from "../components";
import { services, industries } from "../data/services";

export const metadata = {
  title: "Services — XR Studio",
  description: "XR Studio delivers execution across production, technical design, operations, and content capture.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
            What We Do
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Services
          </h1>
          <p className="text-xl text-[#888] max-w-2xl leading-relaxed">
            XR Studio delivers execution across production, technical design,
            operations, and content capture.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card p-8 md:p-12 group flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
              >
                <span className="text-[#00ff88] font-mono text-4xl md:text-5xl font-bold">
                  {service.icon}
                </span>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-3 group-hover:text-[#00ff88] transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-[#888] leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="text-[#888] group-hover:text-[#00ff88] transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-6 bg-[#050505] border-y border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
            Industries
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Who We Work With
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#00ff88] mt-2 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{industry.name}</h3>
                  <p className="text-[#888] text-sm">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Book a production consult
          </h2>
          <p className="text-[#888] text-lg mb-10 max-w-xl mx-auto">
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
