import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-light-gray to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
            We turn attention into{' '}
            <span className="text-accent">customers</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Web development, social media & paid ads — honest work, measurable growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/contact"
              className="bg-accent text-white px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors font-semibold text-lg w-full sm:w-auto"
            >
              Get a Free Audit
            </Link>
            <Link
              href="/contact"
              className="border-2 border-accent text-accent px-8 py-4 rounded-lg hover:bg-accent hover:text-white transition-colors font-semibold text-lg w-full sm:w-auto"
            >
              Book a 15-min Call
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm">Trusted by 50+ clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm">Avg. client growth: +32% engagement in 90 days</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm">Montreal-based team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
