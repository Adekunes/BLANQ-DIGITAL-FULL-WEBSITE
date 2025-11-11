'use client';

import FluidGlass from '@/components/FluidGlass';
import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black">
      <div style={{ height: '100vh', position: 'relative' }}>
        <FluidGlass 
          mode="lens"
          lensProps={{
            scale: 0.25,
            ior: 1.15,
            thickness: 5,
            chromaticAberration: 0.1,
            anisotropy: 0.01,
            navItems: [
              { label: 'Home', link: '/' },
              { label: 'Services', link: '/services' },
              { label: 'Portfolio', link: '/portfolio' },
              { label: 'Case Studies', link: '/case-studies' },
              { label: 'About', link: '/about' },
              { label: 'Contact', link: '/contact' }
            ]
          }}
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <span className="font-handwriting text-4xl md:text-5xl text-white/90 drop-shadow-lg">
              Our Portfolio
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8">
            Explore our{' '}
            <span className="gradient-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              amazing work
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
            Interactive 3D lens showcasing our best projects
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-6 bg-amber-500 hover:bg-amber-600 text-black rounded-full font-bold text-xl transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}
