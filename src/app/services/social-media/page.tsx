import { Metadata } from 'next';
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light-gray to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              Social Media <span className="text-accent">Management</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Strategic content and community management that builds authentic engagement and drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="primary" size="lg">
                Get a Free Audit
              </CTAButton>
              <CTAButton href="/contact" variant="secondary" size="lg">
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
