'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="glass sticky top-0 z-50 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-3xl font-black text-white group-hover:scale-110 transition-transform duration-300">BLANQ</span>
            <span className="text-3xl font-handwriting text-yellow-300 ml-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
              DIGITAL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white/90 hover:text-yellow-300 transition-all duration-300 font-semibold hover:scale-105">
              Home
            </Link>
            <Link href="/services" className="text-white/90 hover:text-pink-300 transition-all duration-300 font-semibold hover:scale-105">
              Services
            </Link>
            <Link href="/portfolio" className="text-white/90 hover:text-purple-300 transition-all duration-300 font-semibold hover:scale-105">
              Portfolio
            </Link>
            <Link href="/case-studies" className="text-white/90 hover:text-blue-300 transition-all duration-300 font-semibold hover:scale-105">
              Case Studies
            </Link>
            <Link href="/about" className="text-white/90 hover:text-green-300 transition-all duration-300 font-semibold hover:scale-105">
              About
            </Link>
            <Link href="/contact" className="text-white/90 hover:text-orange-300 transition-all duration-300 font-semibold hover:scale-105">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group relative px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-bold hover-lift glow overflow-hidden"
            >
              <span className="relative z-10">Book a Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-charcoal hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="block px-3 py-2 text-charcoal hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-charcoal hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="block px-3 py-2 text-charcoal hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/case-studies"
                className="block px-3 py-2 text-charcoal hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-charcoal hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-charcoal hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="block bg-accent text-white px-3 py-2 rounded-lg hover:bg-accent-dark transition-colors font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
