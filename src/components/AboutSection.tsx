import { useEffect, useState, useRef } from 'react';
import teamPhoto from '@/assets/team-photo.jpg';

const AboutSection = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [studentsCount, setStudentsCount] = useState(0);
  const [universitiesCount, setUniversitiesCount] = useState(0);
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

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      let studentsTarget = 1000;
      let universitiesTarget = 50;
      let studentsCurrent = 0;
      let universitiesCurrent = 0;
      const studentsStep = Math.ceil(studentsTarget / 60);
      const universitiesStep = Math.ceil(universitiesTarget / 60);
      const interval = setInterval(() => {
        studentsCurrent += studentsStep;
        universitiesCurrent += universitiesStep;
        if (studentsCurrent >= studentsTarget) studentsCurrent = studentsTarget;
        if (universitiesCurrent >= universitiesTarget) universitiesCurrent = universitiesTarget;
        setStudentsCount(studentsCurrent);
        setUniversitiesCount(universitiesCurrent);
        if (studentsCurrent === studentsTarget && universitiesCurrent === universitiesTarget) {
          clearInterval(interval);
        }
      }, 16);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              About <span className="text-primary">Right Overseas Solutions</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                With over a decade of experience in international education consulting, 
                Right Overseas Solutions has been the bridge between ambitious students 
                and world-class universities across the globe.
              </p>
              
              <p>
                Our mission is simple yet profound: to make quality education accessible 
                to every student, regardless of their background. We believe that education 
                is the most powerful tool for personal and professional transformation.
              </p>
              
              <p>
                From visa guidance to university selection, from test preparation to 
                accommodation assistance, we provide end-to-end support that ensures 
                your educational journey abroad is smooth and successful.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{studentsCount}+</div>
                <div className="text-muted-foreground">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{universitiesCount}+</div>
                <div className="text-muted-foreground">Universities</div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              <img 
                src={teamPhoto} 
                alt="Right Overseas Solutions Team" 
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-gold opacity-20 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;