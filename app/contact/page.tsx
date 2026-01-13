"use client";

import { Nav, Footer } from "../components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const projectTypes = [
  { value: "festival", label: "Festival / Concert" },
  { value: "conference", label: "Conference / Summit" },
  { value: "convention", label: "Convention" },
  { value: "brand-activation", label: "Brand Activation" },
  { value: "esports", label: "Esports" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  const [projectType, setProjectType] = useState("");

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 relative">
        <div className="gradient-orb top-0 right-0 opacity-40" />
        <div className="gradient-orb gradient-orb-2 bottom-0 left-0 opacity-30" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="reveal">
            <div className="accent-bar" />
            <p className="text-[#00ff88] text-sm uppercase tracking-[0.2em] mb-4 font-mono">
              Get in Touch
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 reveal reveal-delay-1">
            Contact Us
          </h1>
          <p className="text-xl text-[#888] max-w-2xl leading-relaxed reveal reveal-delay-2">
            Ready to execute your next event with precision? Tell us about your
            project and we&apos;ll get back to you with next steps.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <form className="space-y-8">
                {/* Contact Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="bg-[#0a0a0a] border-[#1a1a1a] focus:border-[#00ff88] h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Your company"
                      className="bg-[#0a0a0a] border-[#1a1a1a] focus:border-[#00ff88] h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="bg-[#0a0a0a] border-[#1a1a1a] focus:border-[#00ff88] h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="bg-[#0a0a0a] border-[#1a1a1a] focus:border-[#00ff88] h-12"
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="pt-6 border-t border-[#1a1a1a]">
                  <h3 className="text-lg font-semibold mb-6">Project Details</h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="project-type">Project Type *</Label>
                      <Select value={projectType} onValueChange={setProjectType}>
                        <SelectTrigger className="bg-[#0a0a0a] border-[#1a1a1a] focus:border-[#00ff88] h-12">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0a0a0a] border-[#1a1a1a]">
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
                        className="bg-[#0a0a0a] border-[#1a1a1a] focus:border-[#00ff88] h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="dates">Event Dates</Label>
                      <Input
                        id="dates"
                        placeholder="e.g., March 15-17, 2024"
                        className="bg-[#0a0a0a] border-[#1a1a1a] focus:border-[#00ff88] h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="venue">City / Venue</Label>
                      <Input
                        id="venue"
                        placeholder="e.g., San José, Costa Rica"
                        className="bg-[#0a0a0a] border-[#1a1a1a] focus:border-[#00ff88] h-12"
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
                      className="bg-[#0a0a0a] border-[#1a1a1a] focus:border-[#00ff88] resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full md:w-auto bg-[#00ff88] text-black hover:bg-white h-12 px-8 text-sm uppercase tracking-wider font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="card p-8">
                <h3 className="text-lg font-semibold mb-4">What happens next?</h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  We&apos;ll reply with next steps and a discovery checklist within
                  24-48 hours. This helps us understand your project better and
                  prepare for our initial conversation.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="text-lg font-semibold mb-4">Project Types</h3>
                <ul className="space-y-3">
                  {projectTypes.slice(0, -1).map((type) => (
                    <li key={type.value} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#00ff88]" />
                      <span className="text-[#888] text-sm">{type.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-8 border-[#00ff88]">
                <h3 className="text-lg font-semibold mb-4">Urgent Request?</h3>
                <p className="text-[#888] text-sm leading-relaxed mb-4">
                  For time-sensitive inquiries, reach out directly:
                </p>
                <a
                  href="mailto:hello@xrstudio.io"
                  className="text-[#00ff88] text-sm hover:underline"
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
