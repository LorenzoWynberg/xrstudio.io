'use client';

import { Nav, Footer } from '../components';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

const projectTypes = [
  { value: 'festival', label: 'Festival / Concert' },
  { value: 'conference', label: 'Conference / Summit' },
  { value: 'convention', label: 'Convention' },
  { value: 'brand-activation', label: 'Brand Activation' },
  { value: 'esports', label: 'Esports' },
  { value: 'other', label: 'Other' },
];

export default function ContactPage() {
  const [projectType, setProjectType] = useState('');

  return (
    <div className="min-h-screen overflow-hidden bg-black">
      <Nav />

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-12">
        <div className="gradient-orb top-0 right-0 opacity-40" />
        <div className="gradient-orb gradient-orb-2 bottom-0 left-0 opacity-30" />
        <div className="grid-pattern absolute inset-0 opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="reveal">
            <div className="accent-bar" />
            <p className="mb-4 font-mono text-sm tracking-[0.2em] text-[#00ff88] uppercase">
              Get in Touch
            </p>
          </div>
          <h1 className="reveal reveal-delay-1 mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Contact Us
          </h1>
          <p className="reveal reveal-delay-2 max-w-2xl text-xl leading-relaxed text-[#888]">
            Ready to execute your next event with precision? Tell us about your project and
            we&apos;ll get back to you with next steps.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative px-6 py-12">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <form className="space-y-8">
                {/* Contact Info */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="h-12 border-[#1a1a1a] bg-[#0a0a0a] focus:border-[#00ff88]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Your company"
                      className="h-12 border-[#1a1a1a] bg-[#0a0a0a] focus:border-[#00ff88]"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="h-12 border-[#1a1a1a] bg-[#0a0a0a] focus:border-[#00ff88]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="h-12 border-[#1a1a1a] bg-[#0a0a0a] focus:border-[#00ff88]"
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="border-t border-[#1a1a1a] pt-6">
                  <h3 className="mb-6 text-lg font-semibold">Project Details</h3>

                  <div className="mb-6 grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="project-type">Project Type *</Label>
                      <Select value={projectType} onValueChange={setProjectType}>
                        <SelectTrigger className="h-12 border-[#1a1a1a] bg-[#0a0a0a] focus:border-[#00ff88]">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent className="border-[#1a1a1a] bg-[#0a0a0a]">
                          {projectTypes.map((type) => (
                            <SelectItem
                              key={type.value}
                              value={type.value}
                              className="focus:bg-[#1a1a1a] focus:text-white"
                            >
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="attendance">Expected Attendance</Label>
                      <Input
                        id="attendance"
                        placeholder="e.g., 500, 5000, 50000"
                        className="h-12 border-[#1a1a1a] bg-[#0a0a0a] focus:border-[#00ff88]"
                      />
                    </div>
                  </div>

                  <div className="mb-6 grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="dates">Event Dates</Label>
                      <Input
                        id="dates"
                        placeholder="e.g., March 15-17, 2024"
                        className="h-12 border-[#1a1a1a] bg-[#0a0a0a] focus:border-[#00ff88]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="venue">City / Venue</Label>
                      <Input
                        id="venue"
                        placeholder="e.g., San José, Costa Rica"
                        className="h-12 border-[#1a1a1a] bg-[#0a0a0a] focus:border-[#00ff88]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="scope">Project Scope / Description *</Label>
                    <Textarea
                      id="scope"
                      placeholder="Tell us about your event, what you're looking for, and any specific requirements..."
                      required
                      rows={6}
                      className="resize-none border-[#1a1a1a] bg-[#0a0a0a] focus:border-[#00ff88]"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="h-12 w-full bg-[#00ff88] px-8 text-sm font-semibold tracking-wider text-black uppercase hover:bg-white md:w-auto"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="card p-8">
                <h3 className="mb-4 text-lg font-semibold">What happens next?</h3>
                <p className="text-sm leading-relaxed text-[#888]">
                  We&apos;ll reply with next steps and a discovery checklist within 24-48 hours.
                  This helps us understand your project better and prepare for our initial
                  conversation.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="mb-4 text-lg font-semibold">Project Types</h3>
                <ul className="space-y-3">
                  {projectTypes.slice(0, -1).map((type) => (
                    <li key={type.value} className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 bg-[#00ff88]" />
                      <span className="text-sm text-[#888]">{type.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card border-[#00ff88] p-8">
                <h3 className="mb-4 text-lg font-semibold">Urgent Request?</h3>
                <p className="mb-4 text-sm leading-relaxed text-[#888]">
                  For time-sensitive inquiries, reach out directly:
                </p>
                <a
                  href="mailto:hello@xrstudio.io"
                  className="text-sm text-[#00ff88] hover:underline"
                >
                  hello@xrstudio.io
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
