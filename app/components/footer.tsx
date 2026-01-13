import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight">
              XR<span className="text-[#00ff88]">.</span>STUDIO
            </Link>
            <p className="text-[#888] text-sm mt-2">
              Production & Experience Engine
            </p>
          </div>
          <div className="flex flex-wrap gap-8">
            <Link href="/services" className="text-sm text-[#888] hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/work" className="text-sm text-[#888] hover:text-white transition-colors">
              Work
            </Link>
            <Link href="/process" className="text-sm text-[#888] hover:text-white transition-colors">
              Process
            </Link>
            <Link href="/about" className="text-sm text-[#888] hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-[#888] hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[#888] text-sm">
            © {new Date().getFullYear()} XR Studio. All rights reserved.
          </p>
          <p className="text-[#888] text-sm">
            Part of the Broccoli ecosystem
          </p>
        </div>
      </div>
    </footer>
  );
}
