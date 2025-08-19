import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    university: 'Harvard University, USA',
    course: 'Computer Science',
    image: '👩‍🎓',
    content: 'Right Overseas Solutions made my dream of studying at Harvard a reality. Their guidance through the application process was invaluable, and they supported me every step of the way.',
    rating: 5
  },
  {
    name: 'Arjun Patel',
    university: 'Oxford University, UK',
    course: 'Engineering',
    image: '👨‍🎓',
    content: 'The team at Right Overseas Solutions helped me secure admission to Oxford with a scholarship. Their expertise in visa processing and documentation was exceptional.',
    rating: 5
  },
  {
    name: 'Sneha Gupta',
    university: 'University of Toronto, Canada',
    course: 'Business Administration',
    image: '👩‍💼',
    content: 'From university selection to accommodation, Right Overseas Solutions handled everything professionally. I am now pursuing my MBA at one of the top universities in Canada.',
    rating: 5
  },
  {
    name: 'Rajesh Kumar',
    university: 'University of Melbourne, Australia',
    course: 'Medicine',
    image: '👨‍⚕️',
    content: 'Thanks to Right Overseas Solutions, I am now studying medicine in Australia. Their personalized counseling helped me choose the perfect program for my career goals.',
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} id="testimonials" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Student <span className="text-primary">Success Stories</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Hear from our successful students who are now pursuing their dreams at 
            prestigious universities around the world.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
            <div className="testimonial-card min-h-[400px] flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center w-full">
              <div className="text-center">
                <div className="text-8xl mb-4">
                  {testimonials[currentIndex].image}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-primary font-semibold">
                  {testimonials[currentIndex].course}
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  {testimonials[currentIndex].university}
                </p>
              </div>
              
              <div className="md:col-span-2">
                <div className="flex mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                  "{testimonials[currentIndex].content}"
                </blockquote>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary-glow transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary-glow transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;