import { Metadata } from 'next';
import { caseStudies } from '@/lib/caseStudies';
import CaseStudyCard from '@/components/CaseStudyCard';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Portfolio - BLANQ Digital',
  description: 'Explore our portfolio of web development, social media, and content creation projects. See real results from real clients.',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light-gray to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              Our <span className="text-accent">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore our work and see the results we've delivered for clients across different industries.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((project) => (
              <CaseStudyCard
                key={project.id}
                title={project.title}
                client={project.client}
                description={project.description}
                metrics={project.results.slice(0, 3).map(result => ({
                  label: result.metric,
                  value: result.value
                }))}
                image={project.image}
                href={`/case-studies/${project.id}`}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-light-gray rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Ready to be our next success story?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="primary" size="lg">
                Start Your Project
              </CTAButton>
              <CTAButton href="/contact" variant="secondary" size="lg">
                View Case Studies
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
