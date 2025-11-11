import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import ContentTrialSection from '@/components/ContentTrialSection';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy';
import FinalCTA from '@/components/FinalCTA';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <ContentTrialSection />
      
      {/* Packages in Scroll Stack */}
      <section className="min-h-screen bg-black pt-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Choose Your Package
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Scroll through our service packages
          </p>
        </div>
        
        <ScrollStack>
          <ScrollStackItem>
            <div className="max-w-4xl mx-auto px-6 text-center">
              <div className="glass-effect p-12 rounded-3xl">
                <h3 className="text-4xl font-bold mb-6 text-amber-500">Free Trial</h3>
                <p className="text-6xl font-bold text-white mb-4">$0</p>
                <p className="text-xl text-gray-300 mb-8">
                  Try our content creation for 2 weeks. See the quality before committing.
                </p>
                <ul className="space-y-4 text-left mb-8">
                  <li className="text-gray-300">✓ 3 photos + 3 videos + 2 stories</li>
                  <li className="text-gray-300">✓ Posted to your socials</li>
                  <li className="text-gray-300">✓ Performance report</li>
                  <li className="text-gray-300">✓ No commitment required</li>
                </ul>
              </div>
            </div>
          </ScrollStackItem>
          
          <ScrollStackItem>
            <div className="max-w-4xl mx-auto px-6 text-center">
              <div className="glass-effect p-12 rounded-3xl border-2 border-amber-500/30">
                <h3 className="text-4xl font-bold mb-6 text-amber-500">Content Creation</h3>
                <p className="text-6xl font-bold text-white mb-4">$500+<span className="text-2xl text-gray-400">/mo</span></p>
                <p className="text-xl text-gray-300 mb-8">
                  Monthly content creation and social media management for growing businesses.
                </p>
                <ul className="space-y-4 text-left mb-8">
                  <li className="text-gray-300">✓ 12 photos per month</li>
                  <li className="text-gray-300">✓ 12 short videos (Reels/TikToks)</li>
                  <li className="text-gray-300">✓ 24 Instagram stories</li>
                  <li className="text-gray-300">✓ Content calendar & strategy</li>
                  <li className="text-gray-300">✓ Analytics & reporting</li>
                </ul>
              </div>
            </div>
          </ScrollStackItem>
          
          <ScrollStackItem>
            <div className="max-w-4xl mx-auto px-6 text-center">
              <div className="glass-effect p-12 rounded-3xl">
                <h3 className="text-4xl font-bold mb-6 text-amber-500">Custom Website</h3>
                <p className="text-6xl font-bold text-white mb-4">$1K<span className="text-2xl text-gray-400">+</span></p>
                <p className="text-xl text-gray-300 mb-8">
                  Professional websites built to convert visitors into customers.
                </p>
                <ul className="space-y-4 text-left mb-8">
                  <li className="text-gray-300">✓ Custom design (no templates)</li>
                  <li className="text-gray-300">✓ Mobile-responsive & fast</li>
                  <li className="text-gray-300">✓ SEO foundation included</li>
                  <li className="text-gray-300">✓ Delivery in 3-4 weeks</li>
                </ul>
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </section>
      
      <FeaturedCaseStudy />
      <FinalCTA />
    </div>
  );
}