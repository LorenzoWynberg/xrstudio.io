import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Nav, Footer } from '../../components';
import { services, getServiceBySlug } from '../../data/services';
import { caseStudies } from '../../data/case-studies';

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const service = getServiceBySlug(slug);
    if (!service) return { title: 'Service Not Found' };
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
      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/services"
            className="mb-8 inline-block text-sm text-[#888] transition-colors hover:text-[#00ff88]"
          >
            ← Back to Services
          </Link>
          <div className="mb-8 flex items-start gap-6">
            <span className="font-mono text-5xl font-bold text-[#00ff88]">{service.icon}</span>
            <div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                {service.title}
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed text-[#888]">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="border-y border-[#1a1a1a] bg-[#050505] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="mb-4 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
                What&apos;s Included
              </p>
              <h2 className="mb-8 text-3xl font-bold tracking-tight">Service Scope</h2>
              <ul className="space-y-4">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 shrink-0 bg-[#00ff88]" />
                    <span className="text-[#ccc]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
                Deliverables
              </p>
              <h2 className="mb-8 text-3xl font-bold tracking-tight">What You Get</h2>
              <ul className="space-y-4">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 shrink-0 border border-[#00ff88] bg-[#1a1a1a]" />
                    <span className="text-[#ccc]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
            Success Metrics
          </p>
          <h2 className="mb-12 text-3xl font-bold tracking-tight">How We Measure Success</h2>
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {service.kpis.map((kpi, i) => (
              <div key={i} className="card p-6">
                <span className="mb-3 block font-mono text-sm text-[#00ff88]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm text-[#ccc]">{kpi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="border-y border-[#1a1a1a] bg-[#050505] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
              Related Work
            </p>
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Case Studies</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedStudies.map(
                (study) =>
                  study && (
                    <Link key={study.slug} href={`/work/${study.slug}`} className="card group p-6">
                      <p className="mb-2 font-mono text-xs tracking-wider text-[#00ff88] uppercase">
                        {study.category}
                      </p>
                      <h3 className="text-xl font-semibold transition-colors group-hover:text-[#00ff88]">
                        {study.name}
                      </h3>
                    </Link>
                  )
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-[#888]">
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
