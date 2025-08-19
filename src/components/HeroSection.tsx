import { useEffect, useState } from 'react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden mt-24 md:mt-0">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Black overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 text-center px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-3xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Trusted Partner for
            <span className="text-primary block mt-2">Global Education</span>
            <span className="text-white block">Opportunities</span>
          </h1>
          
          <p className="text-base md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your dreams into reality with expert guidance, personalized counseling, 
            and comprehensive support for studying abroad.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hero-button"
            >
              Book Counselling
            </button>
            <button 
              onClick={() => scrollToSection('destinations')}
              className="hero-button bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              Explore Destinations
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;