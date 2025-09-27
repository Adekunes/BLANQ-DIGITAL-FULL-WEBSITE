import ServiceCard from './ServiceCard';
import CTAButton from './CTAButton';

export default function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites that convert visitors into customers. Fast, mobile-first, and built for growth.",
      icon: (
        <div className="text-6xl">💻</div>
      ),
      href: "/services/web-development",
      metrics: "Avg. 40% faster load times",
      gradient: "from-blue-500 to-purple-600",
      color: "text-blue-500"
    },
    {
      title: "Social Media Management",
      description: "Strategic content and community management that builds authentic engagement and drives results.",
      icon: (
        <div className="text-6xl">📱</div>
      ),
      href: "/services/social-media",
      metrics: "+62% engagement in 90 days",
      gradient: "from-pink-500 to-red-500",
      color: "text-pink-500"
    },
    {
      title: "Content Creation & Ads",
      description: "High-converting ad creatives and content that stops the scroll and drives action.",
      icon: (
        <div className="text-6xl">🎨</div>
      ),
      href: "/services/content-creation",
      metrics: "3.2x ROAS average",
      gradient: "from-green-500 to-teal-500",
      color: "text-green-500"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-20 float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-300 to-green-300 rounded-full opacity-20 float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full opacity-20 float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="font-handwriting text-4xl md:text-5xl text-gray-600">
              What we do
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-gray-800 mb-8">
            We keep it{' '}
            <span className="gradient-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              simple
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light">
            Web. Social. Content. <span className="font-bold text-purple-600">Done right.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className={`relative bg-gradient-to-br ${service.gradient} p-8 rounded-3xl hover-lift glow`}>
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-white/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">{service.title}</h3>
                  <p className="text-white/90 text-lg mb-6">{service.description}</p>
                  <div className={`inline-block px-4 py-2 bg-white/20 rounded-full text-white font-bold`}>
                    {service.metrics}
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href={service.href}
                    className="inline-flex items-center text-white font-bold text-lg group-hover:scale-105 transition-transform duration-300"
                  >
                    Learn more
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CTAButton 
            href="/services" 
            variant="primary" 
            size="lg"
            className="px-12 py-6 text-2xl font-bold rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 glow pulse-glow"
          >
            View All Services
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
