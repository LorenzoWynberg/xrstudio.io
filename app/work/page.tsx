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
    <div className="min-h-screen bg-black">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Our Work
          </h1>
          <p className="text-xl text-[#888] max-w-2xl leading-relaxed">
            Case studies showcasing our execution across festivals, conferences,
            conventions, and competitive gaming events.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, i) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group relative aspect-[16/10] overflow-hidden bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#00ff88] transition-all"
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
      <section className="py-32 px-6 bg-[#050505] border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s talk
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
