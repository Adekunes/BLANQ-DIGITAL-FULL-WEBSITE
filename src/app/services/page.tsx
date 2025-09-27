import { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Services - BLANQ Digital',
  description: 'Web development, social media management, and content creation services. Honest work, measurable growth.',
};

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites that convert visitors into customers. Fast, mobile-first, and built for growth.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      href: "/services/web-development",
      metrics: "Avg. 40% faster load times"
    },
    {
      title: "Social Media Management",
      description: "Strategic content and community management that builds authentic engagement and drives results.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12h6m-6 4h6" />
        </svg>
      ),
      href: "/services/social-media",
      metrics: "+62% engagement in 90 days"
    },
    {
      title: "Content Creation & Ads",
      description: "High-converting ad creatives and content that stops the scroll and drives action.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      href: "/services/content-creation",
      metrics: "3.2x ROAS average"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light-gray to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We keep it simple: Web. Social. Content. Done right.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                metrics={service.metrics}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-light-gray rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="primary" size="lg">
                Get a Free Audit
              </CTAButton>
              <CTAButton href="/contact" variant="secondary" size="lg">
                Book a Call
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
