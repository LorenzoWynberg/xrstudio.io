"use client";

import Image from "next/image";
import { ScrollReveal, StaggerContainer } from "./scroll-animations";

const testimonials = [
  {
    quote:
      "XR Studio brought a level of precision to our festival that we've never experienced before. Their technical execution was flawless.",
    author: "Festival Director",
    company: "Electric Animals",
    image: "/images/fernando.webp",
  },
  {
    quote:
      "From planning to execution, they delivered exactly what they promised. The attention to detail and real-time problem solving was impressive.",
    author: "Event Manager",
    company: "Blockchain Jungle",
    image: "/images/pablo.webp",
  },
  {
    quote:
      "Our esports tournaments have never run smoother. They understand the unique demands of competitive gaming events.",
    author: "Tournament Organizer",
    company: "Sweetspot",
    image: "/images/rob.webp",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="gradient-orb gradient-orb-3 top-0 left-0 opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="accent-bar mx-auto" />
            <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              What Our Clients Say
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="testimonial-card hover-glow">
              <p className="text-[#ccc] leading-relaxed mb-6 pt-8">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#00ff88]/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-[#00ff88] text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
