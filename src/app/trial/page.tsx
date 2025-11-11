'use client';

import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { calendarLinks } from '@/config/calendar';
import { events } from '@/utils/analytics';

export default function TrialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Free 2-Week Content Trial
          </h1>
          <p className="text-xl text-gray-400">
            Try our content creation for 2 weeks. See the quality before committing.
          </p>
        </div>

        <div className="glass-effect p-8 rounded-2xl mb-8">
          <h2 className="text-3xl font-bold mb-6 text-amber-500">
            What You Get (100% Free)
          </h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-300">
                <strong>3 professional photos</strong> of your business, products, or menu items
              </span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-300">
                <strong>3 short videos</strong> (15-30 sec Reels/TikToks) showcasing your business
              </span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-300">
                <strong>2 Instagram stories</strong> designed to drive engagement
              </span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-300">
                <strong>Posted directly</strong> to your social media accounts
              </span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-300">
                <strong>Performance report</strong> showing views, engagement, and reach
              </span>
            </li>
          </ul>
        </div>

        <div className="text-center space-y-4">
          <Link
            href={calendarLinks.trialDiscovery}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-gold inline-flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform"
          >
            Book Your Free Trial Call
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <p className="text-sm text-gray-500 mt-4">
            ✓ No credit card required  &nbsp;|&nbsp;  ✓ No contracts  &nbsp;|&nbsp;  ✓ Zero commitment
          </p>
        </div>
      </div>
    </div>
  );
}

