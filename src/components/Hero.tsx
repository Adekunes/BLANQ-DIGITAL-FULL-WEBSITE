import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 opacity-70"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/30 rounded-full float" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-white/15 rounded-full float" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Handwritten Tagline */}
        <div className="mb-8 slide-in-up">
          <span className="font-handwriting text-3xl md:text-4xl text-white/90 drop-shadow-lg">
            Let's create something amazing together
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 slide-in-up" style={{animationDelay: '0.2s'}}>
          We turn{' '}
          <span className="gradient-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
            attention
          </span>
          <br />
          into{' '}
          <span className="font-handwriting text-7xl md:text-8xl lg:text-9xl text-yellow-300 drop-shadow-2xl">
            customers
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto font-light slide-in-up" style={{animationDelay: '0.4s'}}>
          Web development, social media & paid ads — 
          <span className="font-semibold text-yellow-300"> honest work</span>, 
          <span className="font-semibold text-pink-300"> measurable growth</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 slide-in-up" style={{animationDelay: '0.6s'}}>
          <Link
            href="/contact"
            className="group relative px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-bold text-xl hover-lift glow pulse-glow overflow-hidden"
          >
            <span className="relative z-10">Get a Free Audit</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link
            href="/contact"
            className="group glass px-12 py-6 text-white rounded-full font-bold text-xl hover-lift border-2 border-white/30 backdrop-blur-lg"
          >
            <span className="relative z-10">Book a 15-min Call</span>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80 slide-in-up" style={{animationDelay: '0.8s'}}>
          <div className="flex items-center gap-3 glass px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-yellow-400 rounded-full pulse-glow"></div>
            <span className="font-semibold">Trusted by 50+ clients</span>
          </div>
          <div className="flex items-center gap-3 glass px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-pink-400 rounded-full pulse-glow" style={{animationDelay: '1s'}}></div>
            <span className="font-semibold">+32% engagement in 90 days</span>
          </div>
          <div className="flex items-center gap-3 glass px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-purple-400 rounded-full pulse-glow" style={{animationDelay: '2s'}}></div>
            <span className="font-semibold">Montreal-based team</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
