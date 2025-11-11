'use client';

import { Check, Calendar } from 'lucide-react';
import Link from 'next/link';
import { calendarLinks } from '@/config/calendar';
import { events } from '@/utils/analytics';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Two-Path Hero Section */}
      <section className="services-hero py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 text-white">
            How BLANQ Helps You Grow
          </h1>
          <p className="text-xl text-center text-gray-400 mb-16 max-w-3xl mx-auto">
            Choose your starting point based on where your business is today
          </p>

          {/* Two-Path Layout */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            
            {/* PATH 1: FREE TRIAL (LEFT SIDE) */}
            <div className="glass-effect p-8 rounded-2xl border-2 border-amber-500/30 relative">
              {/* "START HERE" Badge */}
              <div className="absolute -top-4 left-8 bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                START HERE
              </div>
              
              <h2 className="text-3xl font-bold mb-4 mt-2">Free Content Trial</h2>
              <p className="text-6xl font-bold text-amber-500 mb-4">$0</p>
              <p className="text-gray-400 mb-6">
                Try our content creation for 2 weeks. See the quality before committing.
              </p>
              
              {/* Features List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                  3 photos + 3 videos + 2 stories
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                  Posted to your socials
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                  Performance report
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                  No commitment required
                </li>
              </ul>
              
              {/* CTA */}
              <Link 
                href="/trial" 
                className="btn-primary-gold w-full text-center block hover:scale-105 active:scale-95 transition-transform"
                onClick={() => events.trialCTAClicked('services-page')}
              >
                Start Free Trial →
              </Link>
            </div>

            {/* PATH 2: CUSTOM WEBSITE (RIGHT SIDE) */}
            <div className="glass-effect p-8 rounded-2xl border-2 border-white/10 relative">
              {/* "READY TO SCALE?" Badge */}
              <div className="absolute -top-4 left-8 bg-white/10 text-white px-4 py-1 rounded-full text-sm font-bold">
                READY TO SCALE?
              </div>
              
              <h2 className="text-3xl font-bold mb-4 mt-2">Custom Website</h2>
              <p className="text-6xl font-bold text-white mb-4">
                $1K<span className="text-2xl text-gray-400">+</span>
              </p>
              <p className="text-gray-400 mb-6">
                Professional websites built to convert visitors into customers.
              </p>
              
              {/* Features List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  Custom design (no templates)
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  Mobile-responsive & fast
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  SEO foundation included
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  Delivery in 3-4 weeks
                </li>
              </ul>
              
              {/* CTA */}
              <Link 
                href="/contact"
                className="btn-secondary-glass w-full text-center block hover:scale-105 active:scale-95 transition-transform"
              >
                View Packages →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="service-details py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            What We Build
          </h2>
          
          {/* You can add your service cards here */}
        </div>
      </section>
    </div>
  );
}
