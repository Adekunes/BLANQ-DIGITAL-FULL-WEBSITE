import CTAButton from './CTAButton';

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full float"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-white/15 rounded-full float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-white/20 rounded-full float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <span className="font-handwriting text-5xl md:text-6xl text-white/90 drop-shadow-lg">
            Ready to grow?
          </span>
        </div>
        
        <h2 className="text-6xl md:text-8xl font-black text-white mb-8 slide-in-up">
          Let's build something{' '}
          <span className="gradient-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
            amazing
          </span>
        </h2>
        
        <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto font-light slide-in-up" style={{animationDelay: '0.2s'}}>
          Get your free audit or book a call to get started.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center slide-in-up" style={{animationDelay: '0.4s'}}>
          <CTAButton
            href="/contact"
            variant="secondary"
            size="lg"
            className="group relative px-12 py-6 bg-white text-purple-600 rounded-full font-bold text-2xl hover-lift glow overflow-hidden"
          >
            <span className="relative z-10">Get a Free Audit</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </CTAButton>
          <CTAButton
            href="/contact"
            variant="secondary"
            size="lg"
            className="group glass px-12 py-6 text-white rounded-full font-bold text-2xl hover-lift border-2 border-white/30 backdrop-blur-lg"
          >
            <span className="relative z-10">Book a 15-min Call</span>
          </CTAButton>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-6xl opacity-20 float">🚀</div>
        <div className="absolute top-1/3 right-10 transform -translate-y-1/2 text-4xl opacity-20 float" style={{animationDelay: '3s'}}>✨</div>
        <div className="absolute bottom-1/4 left-1/4 transform -translate-y-1/2 text-5xl opacity-20 float" style={{animationDelay: '1.5s'}}>💫</div>
      </div>
    </section>
  );
}
