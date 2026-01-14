'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Nav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/process', label: 'Process' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav
      className={`nav-sticky transition-all duration-300 ${
        isScrolled ? 'scrolled' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group text-xl font-bold tracking-tight">
          <span className="transition-colors group-hover:text-[#00ff88]">XR</span>
          <span className="text-[#00ff88]">.</span>
          <span className="transition-colors group-hover:text-[#00ff88]">STUDIO</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`underline-hover text-sm transition-colors ${
                pathname.startsWith(link.href) ? 'text-white' : 'text-[#888] hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary px-4 py-2 text-sm">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="p-2 text-white md:hidden">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
