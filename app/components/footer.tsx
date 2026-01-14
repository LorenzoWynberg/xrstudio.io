import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight">
              XR<span className="text-[#00ff88]">.</span>STUDIO
            </Link>
            <p className="mt-2 text-sm text-[#888]">Production & Experience Engine</p>
          </div>
          <div className="flex flex-wrap gap-8">
            <Link
              href="/services"
              className="text-sm text-[#888] transition-colors hover:text-white"
            >
              Services
            </Link>
            <Link href="/work" className="text-sm text-[#888] transition-colors hover:text-white">
              Work
            </Link>
            <Link
              href="/process"
              className="text-sm text-[#888] transition-colors hover:text-white"
            >
              Process
            </Link>
            <Link href="/about" className="text-sm text-[#888] transition-colors hover:text-white">
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-[#888] transition-colors hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-[#1a1a1a] pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[#888]">
            © {new Date().getFullYear()} XR Studio. All rights reserved.
          </p>
          <p className="text-sm text-[#888]">Part of the Broccoli ecosystem</p>
        </div>
      </div>
    </footer>
  );
}
