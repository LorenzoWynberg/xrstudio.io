import Link from "next/link";
import { Nav, Footer } from "../components";

export const metadata = {
  title: "About — XR Studio",
  description: "XR Studio is the execution engine for high-impact experiences across the region. Learn about our role in the Broccoli ecosystem.",
};

const values = [
  {
    title: "Precision",
    description: "Every detail matters. We obsess over the small things so the big picture comes together flawlessly.",
  },
  {
    title: "Reliability",
    description: "When we commit to something, we deliver. Our clients trust us because we earn that trust every day.",
  },
  {
    title: "Safety & Compliance",
    description: "We never compromise on safety. Proper protocols and compliance are non-negotiable in everything we do.",
  },
  {
    title: "Continuous Improvement",
    description: "Every event teaches us something. We capture lessons learned and apply them to make the next one better.",
  },
];

const capabilities = [
  {
    area: "Production",
    skills: ["Event production management", "Timeline development", "Vendor coordination", "Budget management"],
  },
  {
    area: "Technical",
    skills: ["Audio system design", "Lighting design", "Video/LED systems", "Stage engineering"],
  },
  {
    area: "Operations",
    skills: ["Crew management", "Logistics coordination", "On-site supervision", "Incident response"],
  },
  {
    area: "Audiovisual",
    skills: ["Multi-camera production", "Live streaming", "Content capture", "Post-production"],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
            Who We Are
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            About XR Studio
          </h1>
          <p className="text-xl text-[#888] max-w-3xl leading-relaxed">
            XR Studio is the execution engine for high-impact experiences across
            the region. We bring precision, control, and international standards
            to every production we touch.
          </p>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-20 px-6 bg-[#050505] border-y border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
                Our Role
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Part of the Broccoli Ecosystem
              </h2>
              <p className="text-[#888] text-lg leading-relaxed mb-6">
                We operate as the execution arm within a larger strategic ecosystem.
                While Broccoli designs the system and strategy, XR Studio brings it
                to life with operational precision and technical excellence.
              </p>
              <p className="text-[#888] text-lg leading-relaxed">
                This division of labor allows each team to focus on what they do best,
                resulting in better outcomes for clients who need both strategic vision
                and flawless execution.
              </p>
            </div>
            <div className="space-y-6">
              <div className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 bg-[#888]" />
                  <h3 className="text-xl font-semibold">Broccoli</h3>
                </div>
                <p className="text-[#888]">
                  Designs the system. Develops strategy. Defines the experience architecture.
                </p>
              </div>
              <div className="card p-8 border-[#00ff88]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 bg-[#00ff88]" />
                  <h3 className="text-xl font-semibold">XR Studio</h3>
                </div>
                <p className="text-[#888]">
                  Executes the experience. Manages production. Delivers operational excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
              What Drives Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="card p-8">
                <span className="text-[#00ff88] font-mono text-sm mb-4 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-6 bg-[#050505] border-y border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
              What We Bring
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Capabilities
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, i) => (
              <div key={i}>
                <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-[#1a1a1a]">
                  {cap.area}
                </h3>
                <ul className="space-y-3">
                  {cap.skills.map((skill, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#00ff88] mt-2 shrink-0" />
                      <span className="text-[#888] text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s work together
          </h2>
          <p className="text-[#888] text-lg mb-10 max-w-xl mx-auto">
            Ready to bring precision and excellence to your next event?
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
