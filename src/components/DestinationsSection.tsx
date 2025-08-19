import { useEffect, useState, useRef } from 'react';

const destinations = [
  {
    country: 'United States',
    flag: '🇺🇸',
    landmark: 'Statue of Liberty',
    description: 'World-class universities and diverse opportunities'
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    landmark: 'Big Ben',
    description: 'Rich academic heritage and global recognition'
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    landmark: 'CN Tower',
    description: 'High quality education and post-study work options'
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    landmark: 'Sydney Opera House',
    description: 'Innovation-focused programs and beautiful lifestyle'
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    landmark: 'Brandenburg Gate',
    description: 'Engineering excellence and affordable education'
  }
];

const DestinationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="destinations" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Study <span className="text-primary">Destinations</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Explore world-renowned destinations that offer exceptional educational opportunities 
            and life-changing experiences for international students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.country}
              className={`country-card transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4 transform hover:scale-110 transition-transform duration-300">
                  {destination.flag}
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {destination.country}
                </h3>
                
                <div className="text-primary font-semibold mb-4">
                  {destination.landmark}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {destination.description}
                </p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary-glow transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;