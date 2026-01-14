'use client';

import Image from 'next/image';
import { ScrollReveal, StaggerContainer } from './scroll-animations';

const testimonials = [
  {
    quote:
      "XR Studio brought a level of precision to our festival that we've never experienced before. Their technical execution was flawless.",
    author: 'Festival Director',
    company: 'Electric Animals',
    image: '/images/fernando.webp',
  },
  {
    quote:
      'From planning to execution, they delivered exactly what they promised. The attention to detail and real-time problem solving was impressive.',
    author: 'Event Manager',
    company: 'Blockchain Jungle',
    image: '/images/pablo.webp',
  },
  {
    quote:
      'Our esports tournaments have never run smoother. They understand the unique demands of competitive gaming events.',
    author: 'Tournament Organizer',
    company: 'Sweetspot',
    image: '/images/rob.webp',
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div className="gradient-orb gradient-orb-3 top-0 left-0 opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <div className="accent-bar mx-auto" />
            <p className="mb-4 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
              Testimonials
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">What Our Clients Say</h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="testimonial-card hover-glow">
              <p className="mb-6 pt-8 leading-relaxed text-[#ccc]">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full border border-[#00ff88]/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-[#00ff88]">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
