'use client';

import Image from 'next/image';

const clients = [
  { name: 'Bose', logo: '/images/logo-bose.webp' },
  { name: 'Loop', logo: '/images/loop.webp' },
  { name: 'Fabrik', logo: '/images/fabrik.webp' },
  { name: 'Oneiro', logo: '/images/oneiro.webp' },
  { name: 'Code', logo: '/images/code.webp' },
];

export function ClientLogos() {
  // Double the clients for seamless loop
  const doubledClients = [...clients, ...clients];

  return (
    <section className="relative overflow-hidden border-y border-[#1a1a1a] bg-black py-16">
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent to-black" />

      <div className="mx-auto mb-8 max-w-7xl px-6">
        <p className="text-center text-sm tracking-wider text-[#888] uppercase">
          Trusted by industry leaders
        </p>
      </div>

      <div className="marquee">
        <div className="marquee-content">
          {doubledClients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="mx-12 flex min-w-[120px] items-center justify-center opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={100}
                height={40}
                className="h-10 w-auto object-contain"
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
    <section className="border-y border-[#1a1a1a] bg-[#050505] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-12 text-center text-sm tracking-wider text-[#888] uppercase">
          Trusted by industry leaders
        </p>
        <div className="grid grid-cols-3 items-center justify-items-center gap-8 md:grid-cols-5">
          {clients.map((client) => (
            <div
              key={client.name}
              className="opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={100}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
