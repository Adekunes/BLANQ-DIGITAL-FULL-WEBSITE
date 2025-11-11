import { Metadata } from 'next';
import FluidGlass from '@/components/FluidGlass';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Web Development Services - BLANQ Digital',
  description: 'Custom websites that convert visitors into customers. Fast, mobile-first, and built for growth.',
};

export default function WebDevelopmentPage() {
  const features = [
    {
      title: "Mobile-First Design",
      description: "Every website we build is optimized for mobile devices first, ensuring your customers have a great experience on any screen size.",
      icon: "📱"
    },
    {
      title: "Fast Loading Times",
      description: "We optimize for speed with clean code, compressed images, and modern web technologies. Average 40% faster load times.",
      icon: "⚡"
    },
    {
      title: "SEO Optimized",
      description: "Built with search engines in mind, helping your business get found by potential customers online.",
      icon: "🔍"
    },
    {
      title: "Conversion Focused",
      description: "Every element is designed to guide visitors toward taking action, whether that's making a purchase or contacting you.",
      icon: "🎯"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We learn about your business, goals, and target audience to create a custom strategy."
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "We create wireframes and designs that align with your brand and convert visitors."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your website with clean, fast code and thoroughly test across all devices."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We launch your site and provide ongoing support to keep it running smoothly."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Fluid Glass */}
      <section className="relative h-screen">
        <FluidGlass 
          mode="cube"
          cubeProps={{
            scale: 0.3,
            ior: 1.2,
            thickness: 8,
            chromaticAberration: 0.15,
            anisotropy: 0.02,
            navItems: [
              { label: 'Services', link: '/services' },
              { label: 'Social Media', link: '/services/social-media' },
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
                Web Development
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8">
              Websites that{' '}
              <span className="gradient-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                convert
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
              Fast, mobile-first websites built for growth and conversions.
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
                href="/portfolio" 
                variant="secondary" 
                size="lg"
                className="px-12 py-6 text-2xl font-bold rounded-full glass border-2 border-white/30 backdrop-blur-lg text-white hover:bg-white/20"
              >
                View Our Work
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
              Why Choose Our Web Development?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We don't just build websites, we build digital experiences that drive results.
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

      {/* Process Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure your website exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to build your website?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
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
