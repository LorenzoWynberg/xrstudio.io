import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "../components";
import { caseStudies } from "../data/case-studies";

export const metadata = {
  title: "Work — XR Studio",
  description: "Explore our portfolio of festival production, conference execution, and event operations case studies.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="gradient-orb top-0 left-0 opacity-40" />
        <div className="gradient-orb gradient-orb-2 top-0 right-0 opacity-30" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="reveal">
            <div className="accent-bar" />
            <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
              Portfolio
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 reveal reveal-delay-1">
            Our Work
          </h1>
          <p className="text-xl text-[#888] max-w-2xl leading-relaxed reveal reveal-delay-2">
            Case studies showcasing our execution across festivals, conferences,
            conventions, and competitive gaming events.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-6 relative">
        <div className="gradient-orb gradient-orb-3 bottom-0 left-1/4 opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, i) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group relative aspect-[16/10] overflow-hidden bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#00ff88] transition-all hover-glow"
              >
                <Image
                  src={study.heroImage}
                  alt={study.name}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-[#00ff88] text-xs uppercase tracking-wider mb-3 font-mono">
                    {study.category}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-semibold group-hover:text-[#00ff88] transition-colors mb-3">
                    {study.name}
                  </h2>
                  <p className="text-[#888] text-sm line-clamp-2 max-w-lg">
                    {study.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-[#050505] border-t border-[#1a1a1a] relative overflow-hidden">
        <div className="glow-line absolute top-0 left-0 right-0" />
        <div className="gradient-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Let&apos;s <span className="text-[#00ff88]">talk</span>
          </h2>
          <p className="text-[#888] text-lg mb-10 max-w-xl mx-auto">
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
