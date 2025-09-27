import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { caseStudies } from '@/lib/caseStudies';
import CTAButton from '@/components/CTAButton';
import Image from 'next/image';

interface CaseStudyPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = caseStudies.find(cs => cs.id === params.id);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found - BLANQ Digital',
    };
  }

  return {
    title: `${caseStudy.title} - Case Study | BLANQ Digital`,
    description: caseStudy.description,
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = caseStudies.find(cs => cs.id === params.id);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light-gray to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-sm text-accent font-semibold mb-4">{caseStudy.client}</div>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              {caseStudy.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {caseStudy.description}
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Summary */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Project Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{caseStudy.summary}</p>
          </div>

          {/* Image */}
          <div className="mb-16">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Problem */}
            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-6">The Problem</h3>
              <ul className="space-y-4">
                {caseStudy.problem.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategy */}
            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-6">Our Strategy</h3>
              <ul className="space-y-4">
                {caseStudy.strategy.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Execution */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-charcoal mb-6">Execution</h3>
            <ul className="space-y-4">
              {caseStudy.execution.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-charcoal mb-8">Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="bg-light-gray rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">{result.value}</div>
                  <div className="text-lg font-semibold text-charcoal mb-1">{result.metric}</div>
                  <div className="text-sm text-gray-600">{result.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {caseStudy.testimonial && (
            <div className="mb-16 bg-accent text-white rounded-2xl p-8">
              <blockquote className="text-xl italic mb-6">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div>
                  <div className="font-semibold">{caseStudy.testimonial.author}</div>
                  <div className="text-accent-100">
                    {caseStudy.testimonial.role}, {caseStudy.testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              Want similar results for your business?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss your project and create a strategy that drives real growth.
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
