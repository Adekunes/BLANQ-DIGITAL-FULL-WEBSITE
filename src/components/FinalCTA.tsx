import CTAButton from './CTAButton';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to grow?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's build something that converts. Get your free audit or book a call to get started.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            Book a 15-min Call
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
