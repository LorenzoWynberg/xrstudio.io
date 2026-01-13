import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav, Footer } from "../../components";
import { services, getServiceBySlug } from "../../data/services";
import { caseStudies } from "../../data/case-studies";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const service = getServiceBySlug(slug);
    if (!service) return { title: "Service Not Found" };
    return {
      title: `${service.title} — XR Studio`,
      description: service.shortDescription,
    };
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedStudies = service.relatedCaseStudies
    .map((slug) => caseStudies.find((cs) => cs.slug === slug))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-black">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/services"
            className="text-[#888] hover:text-[#00ff88] transition-colors text-sm mb-8 inline-block"
          >
            ← Back to Services
          </Link>
          <div className="flex items-start gap-6 mb-8">
            <span className="text-[#00ff88] font-mono text-5xl font-bold">
              {service.icon}
            </span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-[#888] max-w-2xl leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6 bg-[#050505] border-y border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
                What&apos;s Included
              </p>
              <h2 className="text-3xl font-bold tracking-tight mb-8">
                Service Scope
              </h2>
              <ul className="space-y-4">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00ff88] mt-2 shrink-0" />
                    <span className="text-[#ccc]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
                Deliverables
              </p>
              <h2 className="text-3xl font-bold tracking-tight mb-8">
                What You Get
              </h2>
              <ul className="space-y-4">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#1a1a1a] border border-[#00ff88] mt-2 shrink-0" />
                    <span className="text-[#ccc]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
            Success Metrics
          </p>
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            How We Measure Success
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {service.kpis.map((kpi, i) => (
              <div key={i} className="card p-6">
                <span className="text-[#00ff88] font-mono text-sm mb-3 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-[#ccc]">{kpi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="py-20 px-6 bg-[#050505] border-y border-[#1a1a1a]">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
              Related Work
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-12">
              Case Studies
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedStudies.map((study) => (
                study && (
                  <Link
                    key={study.slug}
                    href={`/work/${study.slug}`}
                    className="card p-6 group"
                  >
                    <p className="text-[#00ff88] text-xs uppercase tracking-wider mb-2 font-mono">
                      {study.category}
                    </p>
                    <h3 className="text-xl font-semibold group-hover:text-[#00ff88] transition-colors">
                      {study.name}
                    </h3>
                  </Link>
                )
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to get started?
          </h2>
          <p className="text-[#888] text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s discuss how {service.title.toLowerCase()} can elevate your next event.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
