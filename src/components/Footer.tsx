import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/918978636798', '_blank');
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Right Overseas Solutions</h3>
            <p className="text-secondary-foreground/80 leading-relaxed mb-6 max-w-md">
              Your trusted partner for global education opportunities. We help students 
              achieve their dreams of studying abroad with expert guidance and personalized support.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={openWhatsApp}
                className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300 hover:scale-110 transform"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 hover:scale-110 transform">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-300 hover:scale-110 transform">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="p-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors duration-300 hover:scale-110 transform">
                <Facebook className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Quick Links</h4>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('destinations')} 
                className="block text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Destinations
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="block text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Services</h4>
            <div className="space-y-3 text-secondary-foreground/80">
              <div>University Selection</div>
              <div>Visa Assistance</div>
              <div>Test Preparation</div>
              <div>Scholarship Guidance</div>
              <div>Accommodation Support</div>
              <div>Pre-departure Briefing</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            © 2024 Right Overseas Solutions. All rights reserved. | 
            <span className="text-primary"> Empowering Dreams, Enabling Futures</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;