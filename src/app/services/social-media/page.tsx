import { Metadata } from 'next';
import FluidGlass from '@/components/FluidGlass';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Social Media Management - BLANQ Digital',
  description: 'Strategic content and community management that builds authentic engagement and drives results.',
};

export default function SocialMediaPage() {
  const features = [
    {
      title: "Content Strategy",
      description: "We create a custom content calendar that aligns with your brand voice and business goals.",
      icon: "📅"
    },
    {
      title: "Community Management",
      description: "We engage with your audience, respond to comments, and build meaningful relationships.",
      icon: "💬"
    },
    {
      title: "Visual Content Creation",
      description: "Eye-catching graphics, videos, and stories that stop the scroll and drive engagement.",
      icon: "🎨"
    },
    {
      title: "Analytics & Reporting",
      description: "Regular reports showing growth, engagement rates, and ROI from your social media efforts.",
      icon: "📊"
    }
  ];

  const platforms = [
    { name: "Instagram", description: "Visual storytelling and community building" },
    { name: "Facebook", description: "Business pages and targeted advertising" },
    { name: "LinkedIn", description: "Professional networking and B2B content" },
    { name: "TikTok", description: "Short-form video content and trends" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Fluid Glass */}
      <section className="relative h-screen">
        <FluidGlass 
          mode="bar"
          barProps={{
            scale: 0.2,
            ior: 1.1,
            thickness: 6,
            chromaticAberration: 0.08,
            anisotropy: 0.015,
            navItems: [
              { label: 'Services', link: '/services' },
              { label: 'Web Development', link: '/services/web-development' },
              { label: 'Content Creation', link: '/services/content-creation' },
              { label: 'Contact', link: '/contact' }
            ]
          }}
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="mb-6">
              <span className="font-handwriting text-4xl md:text-5xl text-white/90 drop-shadow-lg">
                Social Media Management
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8">
              Build{' '}
              <span className="gradient-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                authentic
              </span>
              <br />
              engagement
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
              Strategic content and community management that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                href="/contact" 
                variant="secondary" 
                size="lg"
                className="px-12 py-6 text-2xl font-bold rounded-full bg-white text-purple-600 hover:bg-yellow-300 glow"
              >
                Get a Free Audit
              </CTAButton>
              <CTAButton 
                href="/case-studies" 
                variant="secondary" 
                size="lg"
                className="px-12 py-6 text-2xl font-bold rounded-full glass border-2 border-white/30 backdrop-blur-lg text-white hover:bg-white/20"
              >
                View Our Results
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We handle every aspect of your social media presence so you can focus on running your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-4xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Platforms We Manage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're experts across all major social media platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <h3 className="text-xl font-bold text-charcoal mb-2">{platform.name}</h3>
                <p className="text-gray-600">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Real Results
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our clients see measurable growth in engagement, followers, and conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">+62%</div>
              <div className="text-lg text-charcoal font-semibold">Average Engagement Increase</div>
              <div className="text-gray-600">in 90 days</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">4x</div>
              <div className="text-lg text-charcoal font-semibold">More Link Clicks</div>
              <div className="text-gray-600">with strategic content</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">+2.1K</div>
              <div className="text-lg text-charcoal font-semibold">New Followers</div>
              <div className="text-gray-600">per month average</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to grow your social media?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create a social media strategy that drives real results for your business.
          </p>
          <CTAButton
            href="/contact"
            variant="secondary"
            size="lg"
            className="bg-white text-accent hover:bg-gray-100"
          >
            Get Started Today
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
