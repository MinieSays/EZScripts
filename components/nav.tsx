"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { MenuIcon } from 'lucide-react';


export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold">
          EzScripter
        </Link>
      </div>
      <div className="nav-menu">
        <Link href="/" className="nav-link">
          Youtube Script Generator
        </Link>
        <Link href="/case-studies" className="nav-link">
          Case Studies
        </Link>
        <Link href="/pricing" className="nav-link">
          Pricing
        </Link>
        <Button
            variant={"link"}
            className="rounded-full text-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white font-bold shadow-lg hover:no-underline"
          >
            <Link href="/#pricing" className="flex gap-2 items-center">
              <span className="relative">Get Started </span>
            </Link>
          </Button>
      </div>
      <div className="mobile-menu">
      <button
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        className="text-purple-600"
      >
        <MenuIcon className="w-6 h-6" />
      </button>
    </div>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full mobile-nav-open md:hidden">
          <Link href="/" className="nav-link">
            Free Youtube Script Generator
          </Link>
          <Link href="/case-studies" className="nav-link">
            Case Studies
          </Link>
          <Link href="/pricing" className="nav-link">
            Pricing
          </Link>
          <Button
            variant={"link"}
            className="rounded-full text-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white hover:no-underline"
          >
            <Link href="/#pricing" className="flex gap-2 items-center">
              <span className="relative">Get Started </span>
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
