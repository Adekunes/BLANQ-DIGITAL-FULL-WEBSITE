import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <FeaturedCaseStudy />
      <FinalCTA />
    </div>
  );
}