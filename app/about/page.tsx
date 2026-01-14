import Link from 'next/link';
import { Nav, Footer } from '../components';

export const metadata = {
  title: 'About — XR Studio',
  description:
    'XR Studio is the execution engine for high-impact experiences across the region. Learn about our role in the Broccoli ecosystem.',
};

const values = [
  {
    title: 'Precision',
    description:
      'Every detail matters. We obsess over the small things so the big picture comes together flawlessly.',
  },
  {
    title: 'Reliability',
    description:
      'When we commit to something, we deliver. Our clients trust us because we earn that trust every day.',
  },
  {
    title: 'Safety & Compliance',
    description:
      'We never compromise on safety. Proper protocols and compliance are non-negotiable in everything we do.',
  },
  {
    title: 'Continuous Improvement',
    description:
      'Every event teaches us something. We capture lessons learned and apply them to make the next one better.',
  },
];

const capabilities = [
  {
    area: 'Production',
    skills: [
      'Event production management',
      'Timeline development',
      'Vendor coordination',
      'Budget management',
    ],
  },
  {
    area: 'Technical',
    skills: ['Audio system design', 'Lighting design', 'Video/LED systems', 'Stage engineering'],
  },
  {
    area: 'Operations',
    skills: [
      'Crew management',
      'Logistics coordination',
      'On-site supervision',
      'Incident response',
    ],
  },
  {
    area: 'Audiovisual',
    skills: ['Multi-camera production', 'Live streaming', 'Content capture', 'Post-production'],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-black">
      <Nav />

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-20">
        <div className="gradient-orb top-0 right-0 opacity-40" />
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="reveal">
            <div className="accent-bar" />
            <p className="mb-4 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
              Who We Are
            </p>
          </div>
          <h1 className="reveal reveal-delay-1 mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            About XR Studio
          </h1>
          <p className="reveal reveal-delay-2 max-w-3xl text-xl leading-relaxed text-[#888]">
            XR Studio is the execution engine for high-impact experiences across the region. We
            bring precision, control, and international standards to every production we touch.
          </p>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="relative overflow-hidden border-y border-[#1a1a1a] bg-[#050505] px-6 py-20">
        <div className="glow-line absolute top-0 right-0 left-0" />
        <div className="gradient-orb gradient-orb-2 bottom-0 left-0 opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="accent-bar" />
              <p className="mb-4 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
                Our Role
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Part of the Broccoli Ecosystem
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-[#888]">
                We operate as the execution arm within a larger strategic ecosystem. While Broccoli
                designs the system and strategy, XR Studio brings it to life with operational
                precision and technical excellence.
              </p>
              <p className="text-lg leading-relaxed text-[#888]">
                This division of labor allows each team to focus on what they do best, resulting in
                better outcomes for clients who need both strategic vision and flawless execution.
              </p>
            </div>
            <div className="space-y-6">
              <div className="card p-8">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-3 w-3 bg-[#888]" />
                  <h3 className="text-xl font-semibold">Broccoli</h3>
                </div>
                <p className="text-[#888]">
                  Designs the system. Develops strategy. Defines the experience architecture.
                </p>
              </div>
              <div className="card border-[#00ff88] p-8">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-3 w-3 bg-[#00ff88]" />
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
      <section className="relative px-6 py-20">
        <div className="gradient-orb gradient-orb-3 top-1/2 right-0 -translate-y-1/2 opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="accent-bar mx-auto" />
            <p className="mb-4 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
              What Drives Us
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Our Values</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <div key={i} className="card hover-glow p-8">
                <span className="mb-4 block font-mono text-sm text-[#00ff88]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                <p className="text-sm leading-relaxed text-[#888]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-[#1a1a1a] bg-[#050505] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-4 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
              What We Bring
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Capabilities</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <div key={i}>
                <h3 className="mb-6 border-b border-[#1a1a1a] pb-4 text-xl font-semibold">
                  {cap.area}
                </h3>
                <ul className="space-y-3">
                  {cap.skills.map((skill, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#00ff88]" />
                      <span className="text-sm text-[#888]">{skill}</span>
                    </li>
                  ))}
                </ul>
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
            Let&apos;s work <span className="text-[#00ff88]">together</span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-[#888]">
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
