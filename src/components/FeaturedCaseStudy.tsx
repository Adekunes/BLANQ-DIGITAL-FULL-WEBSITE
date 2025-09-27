import CaseStudyCard from './CaseStudyCard';
import CTAButton from './CTAButton';

export default function FeaturedCaseStudy() {
  const featuredCase = {
    title: "E-commerce Brand Growth",
    client: "Montreal Fashion Co.",
    description: "Organic Instagram growth +62% in 90 days — increased link clicks 4x using short form video + targeted ads.",
    metrics: [
      { label: "Engagement", value: "+62%" },
      { label: "Link Clicks", value: "4x" },
      { label: "Followers", value: "+2.1K" }
    ],
    image: "/placeholder.svg",
    href: "/case-studies/ecommerce-brand-growth"
  };

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Featured Case Study
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real clients. No fluff, just measurable growth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <CaseStudyCard {...featuredCase} />
        </div>

        <div className="text-center">
          <CTAButton href="/case-studies" variant="secondary" size="lg">
            View All Case Studies
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
