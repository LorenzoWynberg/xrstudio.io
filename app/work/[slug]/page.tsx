import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Nav, Footer } from '../../components';
import { caseStudies, getCaseStudyBySlug } from '../../data/case-studies';

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const study = getCaseStudyBySlug(slug);
    if (!study) return { title: 'Case Study Not Found' };
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
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16">
          <Link
            href="/work"
            className="mb-8 inline-block text-sm text-[#888] transition-colors hover:text-[#00ff88]"
          >
            ← Back to Work
          </Link>
          <p className="mb-4 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
            {study.category}
          </p>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">{study.name}</h1>
          <p className="max-w-3xl text-xl leading-relaxed text-[#ccc]">{study.summary}</p>
        </div>
      </section>

      {/* Scope */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="mb-4 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
                XR Studio Scope
              </p>
              <h2 className="mb-8 text-3xl font-bold tracking-tight">What We Did</h2>
              <ul className="space-y-4">
                {study.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 shrink-0 bg-[#00ff88]" />
                    <span className="text-[#ccc]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
                Outcome Focus
              </p>
              <h2 className="mb-8 text-3xl font-bold tracking-tight">Results</h2>
              <div className="space-y-4">
                {study.outcomes.map((outcome, i) => (
                  <div key={i} className="card p-6">
                    <span className="mb-2 block font-mono text-sm text-[#00ff88]">
                      {String(i + 1).padStart(2, '0')}
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
        <section className="border-y border-[#1a1a1a] bg-[#050505] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
              Gallery
            </p>
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Event Highlights</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {study.gallery.map((image, i) => (
                <div
                  key={i}
                  className="relative aspect-[16/10] overflow-hidden border border-[#1a1a1a] bg-[#0a0a0a]"
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
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
            More Work
          </p>
          <h2 className="mb-12 text-3xl font-bold tracking-tight">Other Case Studies</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {otherStudies.map((other) => (
              <Link
                key={other.slug}
                href={`/work/${other.slug}`}
                className="group relative aspect-[16/10] overflow-hidden border border-[#1a1a1a] bg-[#0a0a0a] transition-all hover:border-[#00ff88]"
              >
                <Image
                  src={other.heroImage}
                  alt={other.name}
                  fill
                  className="object-cover opacity-50 transition-all duration-500 group-hover:scale-105 group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-8">
                  <p className="mb-2 font-mono text-xs tracking-wider text-[#00ff88] uppercase">
                    {other.category}
                  </p>
                  <h3 className="text-2xl font-semibold transition-colors group-hover:text-[#00ff88]">
                    {other.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1a1a] bg-[#050505] px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Ready to create your success story?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-[#888]">
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
