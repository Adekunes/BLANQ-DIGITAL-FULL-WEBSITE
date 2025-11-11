'use client';

import Link from 'next/link';
import Ballpit from './Ballpit';
import { ArrowRight } from 'lucide-react';
import { events } from '@/utils/analytics';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* 3D Ballpit Background */}
      <div className="absolute inset-0">
        <Ballpit
          count={150}
          gravity={0.7}
          friction={0.8}
          wallBounce={0.95}
          followCursor={true}
        />
      </div>
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-purple-900/20 to-black/40"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main Headline - Short & Impactful */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-tight">
          Websites that{' '}
          <span className="text-amber-500">convert</span>
        </h1>
        
        {/* Subheadline - Clean & Simple */}
        <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Premium web development for Halal businesses in Montreal
        </p>

        {/* Single CTA */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Link
            href="/trial"
            className="bg-amber-500 hover:bg-amber-600 text-black px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            onClick={() => events.trialCTAClicked('hero')}
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <Link
            href="/portfolio"
            className="border-2 border-white/30 text-white hover:border-amber-500 hover:text-amber-500 px-10 py-5 rounded-full font-semibold text-lg transition-all"
          >
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
