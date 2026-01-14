import Link from 'next/link';
import { Nav, Footer } from '../components';

export const metadata = {
  title: 'Process — XR Studio',
  description:
    'A disciplined execution framework built for scale. Learn how XR Studio delivers consistent, high-quality event production.',
};

const processSteps = [
  {
    number: '01',
    title: 'Blueprint Review',
    description:
      'We begin by deeply understanding your vision, requirements, and constraints. This phase establishes the operational foundation for everything that follows.',
    details: [
      'Stakeholder interviews and requirement gathering',
      'Venue and site assessment',
      'Budget and timeline analysis',
      'Risk identification and initial mitigation planning',
      'Success criteria definition',
    ],
  },
  {
    number: '02',
    title: 'Production Planning',
    description:
      'With a clear understanding of your goals, we develop comprehensive plans that leave nothing to chance. Every detail is documented and coordinated.',
    details: [
      'Technical specifications and equipment lists',
      'Vendor sourcing and contract negotiation',
      'Staffing plans and crew scheduling',
      'Run-of-show development',
      'Contingency planning and backup systems',
    ],
  },
  {
    number: '03',
    title: 'Live Execution & Control',
    description:
      'On event day, our experienced team takes control. We manage every aspect of production with precision, adapting in real-time to ensure flawless delivery.',
    details: [
      'Load-in coordination and supervision',
      'Real-time show control and communication',
      'Incident response and problem resolution',
      'Stakeholder management and updates',
      'Quality assurance throughout',
    ],
  },
  {
    number: '04',
    title: 'Reporting & Continuous Improvement',
    description:
      'Every event is an opportunity to learn. We capture data, gather feedback, and deliver insights that improve future productions.',
    details: [
      'Post-event debrief with all stakeholders',
      'Performance metrics analysis',
      'Attendee and vendor feedback synthesis',
      'Improvement recommendations',
      'Documentation for future reference',
    ],
  },
];

const clientBenefits = [
  {
    title: 'Clear Accountability',
    description:
      'Single point of responsibility for all production elements. You always know who owns what.',
  },
  {
    title: 'Operational Visibility',
    description:
      'Real-time updates and transparent communication throughout the production process.',
  },
  {
    title: 'Risk Reduction',
    description:
      'Proactive identification and mitigation of potential issues before they become problems.',
  },
  {
    title: 'Consistent Standards',
    description: 'Proven processes and quality benchmarks applied to every project we execute.',
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-black">
      <Nav />

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-20">
        <div className="gradient-orb top-0 left-0 opacity-40" />
        <div className="gradient-orb-2 gradient-orb right-0 bottom-0 opacity-30" />
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="reveal">
            <div className="accent-bar" />
            <p className="mb-4 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
              Our Approach
            </p>
          </div>
          <h1 className="reveal reveal-delay-1 mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Process
          </h1>
          <p className="reveal reveal-delay-2 max-w-2xl text-xl leading-relaxed text-[#888]">
            A disciplined execution framework built for scale. We bring structure, accountability,
            and continuous improvement to every production.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="relative px-6 py-20">
        <div className="gradient-orb gradient-orb-3 top-1/4 right-0 opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="space-y-24">
            {processSteps.map((step, i) => (
              <div key={step.number} className="grid items-start gap-12 md:grid-cols-2">
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="mb-4 text-8xl font-bold text-[#1a1a1a] transition-colors group-hover:text-[#222]">
                    {step.number}
                  </div>
                  <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                    {step.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-[#888]">{step.description}</p>
                </div>
                <div className={`card hover-glow p-8 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <p className="mb-6 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
                    Key Activities
                  </p>
                  <ul className="space-y-4">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="mt-2 h-2 w-2 shrink-0 bg-[#00ff88]" />
                        <span className="text-[#ccc]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Clients Get */}
      <section className="relative overflow-hidden border-y border-[#1a1a1a] bg-[#050505] px-6 py-20">
        <div className="glow-line absolute top-0 right-0 left-0" />
        <div className="gradient-orb bottom-0 left-1/4 opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="accent-bar mx-auto" />
            <p className="mb-4 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
              Client Benefits
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">What You Get</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {clientBenefits.map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-[#00ff88]">
                  <span className="font-mono text-sm text-[#00ff88]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-[#888]">{benefit.description}</p>
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
            Request a <span className="text-[#00ff88]">Production Call</span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-[#888]">
            Let&apos;s discuss how our process can bring structure and excellence to your next
            event.
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
