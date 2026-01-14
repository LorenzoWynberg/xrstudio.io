import Image from 'next/image';
import Link from 'next/link';
import { Nav, Footer } from '../components';
import { caseStudies } from '../data/case-studies';

export const metadata = {
  title: 'Work — XR Studio',
  description:
    'Explore our portfolio of festival production, conference execution, and event operations case studies.',
};

export default function WorkPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-black">
      <Nav />

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-20">
        <div className="gradient-orb top-0 left-0 opacity-40" />
        <div className="gradient-orb gradient-orb-2 top-0 right-0 opacity-30" />
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="reveal">
            <div className="accent-bar" />
            <p className="mb-4 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
              Portfolio
            </p>
          </div>
          <h1 className="reveal reveal-delay-1 mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Our Work
          </h1>
          <p className="reveal reveal-delay-2 max-w-2xl text-xl leading-relaxed text-[#888]">
            Case studies showcasing our execution across festivals, conferences, conventions, and
            competitive gaming events.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="relative px-6 py-20">
        <div className="gradient-orb gradient-orb-3 bottom-0 left-1/4 opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study, i) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group hover-glow relative aspect-[16/10] overflow-hidden border border-[#1a1a1a] bg-[#0a0a0a] transition-all hover:border-[#00ff88]"
              >
                <Image
                  src={study.heroImage}
                  alt={study.name}
                  fill
                  className="object-cover opacity-50 transition-all duration-500 group-hover:scale-105 group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-8">
                  <p className="mb-3 font-mono text-xs tracking-wider text-[#00ff88] uppercase">
                    {study.category}
                  </p>
                  <h2 className="mb-3 text-2xl font-semibold transition-colors group-hover:text-[#00ff88] md:text-3xl">
                    {study.name}
                  </h2>
                  <p className="line-clamp-2 max-w-lg text-sm text-[#888]">{study.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-[#1a1a1a] bg-[#050505] px-6 py-32">
        <div className="glow-line absolute top-0 right-0 left-0" />
        <div className="gradient-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
        <div className="grid-pattern absolute inset-0 opacity-20" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Let&apos;s <span className="text-[#00ff88]">talk</span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-[#888]">
            Ready to add your event to our portfolio?
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
