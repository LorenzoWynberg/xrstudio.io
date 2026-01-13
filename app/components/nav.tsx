"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          XR<span className="text-[#00ff88]">.</span>STUDIO
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors underline-hover ${
                pathname.startsWith(link.href)
                  ? "text-white"
                  : "text-[#888] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
