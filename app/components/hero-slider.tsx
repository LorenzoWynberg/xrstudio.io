'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const heroImages = [
  '/images/electric-animals-foto-carlcox.webp',
  '/images/magflow-jacobcollier-fotos-jacob-1-of-1-10.webp',
  '/images/blockchain-jungle-fotos-bj-1-of-1-3.webp',
  '/images/ss_img_0128.webp',
  '/images/pura-tinta-fotos-puratintajpg4.webp',
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      {heroImages.map((image, index) => (
        <div key={image} className={`hero-slide ${index === currentSlide ? 'active' : ''}`}>
          <Image
            src={image}
            alt={`Event ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      {/* Slide indicators */}
      <div className="absolute bottom-12 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-[#00ff88]' : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function HeroCollage() {
  return (
    <div className="absolute inset-0 opacity-40">
      <div className="image-collage">
        <div className="collage-item">
          <Image
            src="/images/_a1a6014.webp"
            alt="Electric Animals"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="collage-item">
          <Image
            src="/images/bcjungle-19.webp"
            alt="Blockchain Jungle"
            fill
            className="object-cover"
          />
        </div>
        <div className="collage-item">
          <Image src="/images/img_3577.webp" alt="Pura Tinta" fill className="object-cover" />
        </div>
        <div className="collage-item">
          <Image
            src="/images/jacobcollier_21-09-25-01550.webp"
            alt="Magflow"
            fill
            className="object-cover"
          />
        </div>
      </div>
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
    </div>
  );
}
