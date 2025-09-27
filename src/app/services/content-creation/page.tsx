import { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Content Creation & Ads - BLANQ Digital',
  description: 'High-converting ad creatives and content that stops the scroll and drives action.',
};

export default function ContentCreationPage() {
  const services = [
    {
      title: "Ad Creative Design",
      description: "Eye-catching visuals and copy that convert viewers into customers across all platforms.",
      icon: "🎯"
    },
    {
      title: "Video Production",
      description: "Short-form videos, reels, and stories that engage your audience and drive action.",
      icon: "🎬"
    },
    {
      title: "Photography",
      description: "Professional product photos and lifestyle imagery that showcases your brand authentically.",
      icon: "📸"
    },
    {
      title: "Copywriting",
      description: "Compelling headlines, captions, and ad copy that speaks to your audience and drives conversions.",
      icon: "✍️"
    }
  ];

  const platforms = [
    { name: "Instagram Ads", description: "Visual ads for feed, stories, and reels" },
    { name: "Facebook Ads", description: "Targeted campaigns for your ideal customers" },
    { name: "TikTok Ads", description: "Short-form video ads that perform" },
    { name: "Google Ads", description: "Search and display ads that convert" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light-gray to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              Content Creation & <span className="text-accent">Ads</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              High-converting ad creatives and content that stops the scroll and drives action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="primary" size="lg">
                Get a Free Audit
              </CTAButton>
              <CTAButton href="/contact" variant="secondary" size="lg">
                View Our Work
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              What We Create
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to creation, we produce content that converts across all platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-4xl">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
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
              Ad Platforms We Work With
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We create content optimized for each platform's unique audience and algorithm.
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
              Proven Results
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our content consistently delivers strong returns on ad spend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">3.2x</div>
              <div className="text-lg text-charcoal font-semibold">Average ROAS</div>
              <div className="text-gray-600">return on ad spend</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">-40%</div>
              <div className="text-lg text-charcoal font-semibold">Cost Per Lead</div>
              <div className="text-gray-600">compared to industry average</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">85%</div>
              <div className="text-lg text-charcoal font-semibold">Ad Approval Rate</div>
              <div className="text-gray-600">first-time approval</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Our Creative Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a data-driven approach to create content that performs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Research</h3>
              <p className="text-gray-600">We study your audience, competitors, and platform trends.</p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Concept</h3>
              <p className="text-gray-600">We develop creative concepts that align with your brand.</p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Create</h3>
              <p className="text-gray-600">We produce high-quality content optimized for each platform.</p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Optimize</h3>
              <p className="text-gray-600">We test, analyze, and refine based on performance data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to create content that converts?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create ad creatives and content that drive real results for your business.
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
