"use client";

import Image from "next/image";

const clients = [
  { name: "Bose", logo: "/images/logo-bose.webp" },
  { name: "Loop", logo: "/images/loop.webp" },
  { name: "Fabrik", logo: "/images/fabrik.webp" },
  { name: "Oneiro", logo: "/images/oneiro.webp" },
  { name: "Code", logo: "/images/code.webp" },
];

export function ClientLogos() {
  // Double the clients for seamless loop
  const doubledClients = [...clients, ...clients];

  return (
    <section className="py-16 border-y border-[#1a1a1a] bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-[#888] text-sm uppercase tracking-wider text-center">
          Trusted by industry leaders
        </p>
      </div>

      <div className="marquee">
        <div className="marquee-content">
          {doubledClients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center justify-center mx-12 min-w-[120px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={100}
                height={40}
                className="object-contain h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Static grid version
export function ClientLogosGrid() {
  return (
    <section className="py-20 px-6 border-y border-[#1a1a1a] bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#888] text-sm uppercase tracking-wider text-center mb-12">
          Trusted by industry leaders
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={100}
                height={40}
                className="object-contain h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
