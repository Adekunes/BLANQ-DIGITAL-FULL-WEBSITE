import { Metadata } from 'next';
import { caseStudies } from '@/lib/caseStudies';
import CaseStudyCard from '@/components/CaseStudyCard';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Case Studies - BLANQ Digital',
  description: 'Real results from real clients. See how we help businesses grow with web development, social media, and content creation.',
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light-gray to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              Case <span className="text-accent">Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Real results from real clients. No fluff, just measurable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                title={caseStudy.title}
                client={caseStudy.client}
                description={caseStudy.description}
                metrics={caseStudy.results.slice(0, 3).map(result => ({
                  label: result.metric,
                  value: result.value
                }))}
                image={caseStudy.image}
                href={`/case-studies/${caseStudy.id}`}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-light-gray rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Ready to see results like these?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a strategy that drives real growth for your business.
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
