import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav, Footer } from "../../components";
import { caseStudies, getCaseStudyBySlug } from "../../data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const study = getCaseStudyBySlug(slug);
    if (!study) return { title: "Case Study Not Found" };
    return {
      title: `${study.name} — XR Studio`,
      description: study.summary,
    };
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const otherStudies = caseStudies.filter((s) => s.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-black">
      <Nav />

      {/* Hero */}
      <section className="relative pt-24 pb-32">
        <div className="absolute inset-0">
          <Image
            src={study.heroImage}
            alt={study.name}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
          <Link
            href="/work"
            className="text-[#888] hover:text-[#00ff88] transition-colors text-sm mb-8 inline-block"
          >
            ← Back to Work
          </Link>
          <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
            {study.category}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {study.name}
          </h1>
          <p className="text-xl text-[#ccc] max-w-3xl leading-relaxed">
            {study.summary}
          </p>
        </div>
      </section>

      {/* Scope */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
                XR Studio Scope
              </p>
              <h2 className="text-3xl font-bold tracking-tight mb-8">
                What We Did
              </h2>
              <ul className="space-y-4">
                {study.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00ff88] mt-2 shrink-0" />
                    <span className="text-[#ccc]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
                Outcome Focus
              </p>
              <h2 className="text-3xl font-bold tracking-tight mb-8">
                Results
              </h2>
              <div className="space-y-4">
                {study.outcomes.map((outcome, i) => (
                  <div key={i} className="card p-6">
                    <span className="text-[#00ff88] font-mono text-sm mb-2 block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg font-medium">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {study.gallery.length > 0 && (
        <section className="py-20 px-6 bg-[#050505] border-y border-[#1a1a1a]">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
              Gallery
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-12">
              Event Highlights
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {study.gallery.map((image, i) => (
                <div
                  key={i}
                  className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0a] border border-[#1a1a1a]"
                >
                  <Image
                    src={image}
                    alt={`${study.name} gallery ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Case Studies */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
            More Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            Other Case Studies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {otherStudies.map((other) => (
              <Link
                key={other.slug}
                href={`/work/${other.slug}`}
                className="group relative aspect-[16/10] overflow-hidden bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#00ff88] transition-all"
              >
                <Image
                  src={other.heroImage}
                  alt={other.name}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-[#00ff88] text-xs uppercase tracking-wider mb-2 font-mono">
                    {other.category}
                  </p>
                  <h3 className="text-2xl font-semibold group-hover:text-[#00ff88] transition-colors">
                    {other.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-[#050505] border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to create your success story?
          </h2>
          <p className="text-[#888] text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s discuss how XR Studio can execute your next event.
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
