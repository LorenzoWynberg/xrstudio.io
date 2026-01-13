import Link from "next/link";
import { Nav, Footer } from "../components";

export const metadata = {
  title: "Process — XR Studio",
  description: "A disciplined execution framework built for scale. Learn how XR Studio delivers consistent, high-quality event production.",
};

const processSteps = [
  {
    number: "01",
    title: "Blueprint Review",
    description: "We begin by deeply understanding your vision, requirements, and constraints. This phase establishes the operational foundation for everything that follows.",
    details: [
      "Stakeholder interviews and requirement gathering",
      "Venue and site assessment",
      "Budget and timeline analysis",
      "Risk identification and initial mitigation planning",
      "Success criteria definition",
    ],
  },
  {
    number: "02",
    title: "Production Planning",
    description: "With a clear understanding of your goals, we develop comprehensive plans that leave nothing to chance. Every detail is documented and coordinated.",
    details: [
      "Technical specifications and equipment lists",
      "Vendor sourcing and contract negotiation",
      "Staffing plans and crew scheduling",
      "Run-of-show development",
      "Contingency planning and backup systems",
    ],
  },
  {
    number: "03",
    title: "Live Execution & Control",
    description: "On event day, our experienced team takes control. We manage every aspect of production with precision, adapting in real-time to ensure flawless delivery.",
    details: [
      "Load-in coordination and supervision",
      "Real-time show control and communication",
      "Incident response and problem resolution",
      "Stakeholder management and updates",
      "Quality assurance throughout",
    ],
  },
  {
    number: "04",
    title: "Reporting & Continuous Improvement",
    description: "Every event is an opportunity to learn. We capture data, gather feedback, and deliver insights that improve future productions.",
    details: [
      "Post-event debrief with all stakeholders",
      "Performance metrics analysis",
      "Attendee and vendor feedback synthesis",
      "Improvement recommendations",
      "Documentation for future reference",
    ],
  },
];

const clientBenefits = [
  {
    title: "Clear Accountability",
    description: "Single point of responsibility for all production elements. You always know who owns what.",
  },
  {
    title: "Operational Visibility",
    description: "Real-time updates and transparent communication throughout the production process.",
  },
  {
    title: "Risk Reduction",
    description: "Proactive identification and mitigation of potential issues before they become problems.",
  },
  {
    title: "Consistent Standards",
    description: "Proven processes and quality benchmarks applied to every project we execute.",
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-black">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
            Our Approach
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Process
          </h1>
          <p className="text-xl text-[#888] max-w-2xl leading-relaxed">
            A disciplined execution framework built for scale. We bring structure,
            accountability, and continuous improvement to every production.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {processSteps.map((step, i) => (
              <div
                key={step.number}
                className="grid md:grid-cols-2 gap-12 items-start"
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="text-8xl font-bold text-[#1a1a1a] mb-4">
                    {step.number}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    {step.title}
                  </h2>
                  <p className="text-[#888] text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className={`card p-8 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-6 font-mono">
                    Key Activities
                  </p>
                  <ul className="space-y-4">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#00ff88] mt-2 shrink-0" />
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
      <section className="py-20 px-6 bg-[#050505] border-y border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
              Client Benefits
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              What You Get
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientBenefits.map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 border border-[#00ff88] flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#00ff88] font-mono text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Request a Production Call
          </h2>
          <p className="text-[#888] text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s discuss how our process can bring structure and excellence to your next event.
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
