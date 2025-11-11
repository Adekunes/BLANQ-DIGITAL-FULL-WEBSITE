'use client';

import Link from 'next/link';
import { Check, Store, ShoppingBag, Users, ArrowRight } from 'lucide-react';
import { events } from '@/utils/analytics';

export default function ContentTrialSection() {
  return (
    <section className="content-trial-section py-24 px-6 bg-black/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Not Ready for a Website Yet?
          </h2>
          <p className="text-xl text-gray-400">
            Start with our 2-Week Free Content Trial
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: What You Get */}
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-amber-500">
              What You Get (100% Free)
            </h3>
            <ul className="space-y-4">
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

          {/* Right Side: Who It's For */}
          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-xl hover:border-amber-500/30 border border-white/10 transition-colors">
              <h4 className="text-xl font-bold mb-3 flex items-center">
                <Store className="w-6 h-6 text-amber-500 mr-3" />
                Perfect for Halal Restaurants
              </h4>
              <p className="text-gray-400">
                Showcase your dishes, kitchen, and atmosphere to attract more customers
              </p>
            </div>

            <div className="glass-effect p-6 rounded-xl hover:border-amber-500/30 border border-white/10 transition-colors">
              <h4 className="text-xl font-bold mb-3 flex items-center">
                <ShoppingBag className="w-6 h-6 text-amber-500 mr-3" />
                Great for Small Shops
              </h4>
              <p className="text-gray-400">
                Highlight your products and tell your brand story visually
              </p>
            </div>

            <div className="glass-effect p-6 rounded-xl hover:border-amber-500/30 border border-white/10 transition-colors">
              <h4 className="text-xl font-bold mb-3 flex items-center">
                <Users className="w-6 h-6 text-amber-500 mr-3" />
                Ideal for Service Businesses
              </h4>
              <p className="text-gray-400">
                Build trust with behind-the-scenes content and client testimonials
              </p>
            </div>

            <Link
              href="/trial"
              className="btn-primary-gold w-full text-center inline-flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform"
              onClick={() => events.trialCTAClicked('home-trial-section')}
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12 text-gray-500">
          <p className="text-sm">
            ✓ No credit card required  &nbsp;|&nbsp;  ✓ No contracts  &nbsp;|&nbsp;  ✓ Zero commitment
          </p>
        </div>
      </div>
    </section>
  );
}

