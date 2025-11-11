'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">BLANQ</span>
            <span className="text-2xl font-handwriting text-amber-500 ml-2">Digital</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-white/80 hover:text-amber-500 transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/services" className="text-white/80 hover:text-amber-500 transition-colors text-sm font-medium">
              Services
            </Link>
            <Link href="/portfolio" className="text-white/80 hover:text-amber-500 transition-colors text-sm font-medium">
              Portfolio
            </Link>
            <Link href="/case-studies" className="text-white/80 hover:text-amber-500 transition-colors text-sm font-medium">
              Case Studies
            </Link>
            <Link href="/about" className="text-white/80 hover:text-amber-500 transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2 rounded-full font-semibold text-sm transition-colors">
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-amber-500 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-white/80 hover:text-amber-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-4 py-2 text-white/80 hover:text-amber-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="block px-4 py-2 text-white/80 hover:text-amber-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/case-studies"
                className="block px-4 py-2 text-white/80 hover:text-amber-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-white/80 hover:text-amber-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-white/80 hover:text-amber-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="block mt-4 mx-4 bg-amber-500 text-black px-6 py-3 rounded-full font-semibold text-center hover:bg-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
