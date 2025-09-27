import { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us - BLANQ Digital',
  description: 'Meet the team behind BLANQ Digital. We are Abdul and Nazif, passionate about creating digital solutions that drive real business growth.',
};

export default function AboutPage() {
  const values = [
    {
      title: "Honesty First",
      description: "We believe in transparent communication and realistic expectations. No fluff, just honest advice and measurable results.",
      icon: "🤝"
    },
    {
      title: "Client-Focused",
      description: "Your success is our success. We take the time to understand your business and create strategies that work for you.",
      icon: "🎯"
    },
    {
      title: "Quality Driven",
      description: "We don't cut corners. Every project is crafted with attention to detail and built to last.",
      icon: "⭐"
    },
    {
      title: "Results-Oriented",
      description: "We measure success by the impact we create for your business, not just the work we deliver.",
      icon: "📈"
    }
  ];

  const team = [
    {
      name: "Abdul",
      role: "Strategy & Growth",
      bio: "Abdul brings 5+ years of experience in digital marketing and business strategy. He specializes in creating comprehensive growth strategies that align with business objectives and drive measurable results.",
      expertise: ["Digital Strategy", "Social Media Marketing", "Business Growth", "Client Relations"]
    },
    {
      name: "Nazif", 
      role: "Development & Technology",
      bio: "Nazif is a full-stack developer with expertise in modern web technologies. He builds fast, scalable websites and applications that provide exceptional user experiences.",
      expertise: ["Web Development", "Mobile-First Design", "Performance Optimization", "Technical Strategy"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light-gray to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              About <span className="text-accent">BLANQ</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're a Montreal-based digital agency focused on creating real results for real businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              BLANQ Digital was born from a simple belief: digital marketing should be honest, 
              measurable, and focused on real business growth. We started because we were tired 
              of agencies that overpromise and underdeliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">The Problem We Saw</h3>
              <p className="text-gray-600 mb-6">
                Too many businesses were spending money on digital marketing without seeing real results. 
                Agencies were focused on vanity metrics instead of what actually drives business growth.
              </p>
              <p className="text-gray-600">
                We knew there had to be a better way - a way that was honest, transparent, and focused 
                on the metrics that actually matter to your bottom line.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Our Solution</h3>
              <p className="text-gray-600 mb-6">
                We built BLANQ Digital to be different. We focus on three core services: 
                web development, social media management, and content creation - and we do them exceptionally well.
              </p>
              <p className="text-gray-600">
                Every project we take on is measured by one question: "Did this help our client grow their business?" 
                If the answer isn't yes, we haven't done our job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Meet the Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're a small but mighty team of digital experts who are passionate about helping businesses grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="w-full h-full bg-light-gray rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-accent">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-2">{member.name}</h3>
                <div className="text-accent font-semibold mb-4">{member.role}</div>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-accent text-white px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Why Choose BLANQ?
            </h2>
            <p className="text-lg text-gray-600">
              We're not just another digital agency. Here's what makes us different.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">We're Local</h3>
                <p className="text-gray-600">
                  Based in Montreal, we understand the local market and can meet with you in person when needed.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">We're Honest</h3>
                <p className="text-gray-600">
                  We'll tell you what works and what doesn't. No sugar-coating, no false promises.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">We're Focused</h3>
                <p className="text-gray-600">
                  We don't try to be everything to everyone. We focus on what we do best: web, social, and content.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">We Deliver Results</h3>
                <p className="text-gray-600">
                  Our clients see measurable growth in engagement, traffic, and conversions. That's how we measure success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to work with us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-accent hover:bg-gray-100"
            >
              Get a Free Audit
            </CTAButton>
            <CTAButton
              href="/contact"
              variant="secondary"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-accent"
            >
              Book a Call
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
