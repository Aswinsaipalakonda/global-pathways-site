import { useState, useEffect } from 'react';
import logo from '@/assets/logo.jpg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-lg">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Right Overseas Solutions" className="h-12 w-auto" />
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-link">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('destinations')} className="nav-link">
              Destinations
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </div>
          {/* Hamburger for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              className="text-3xl text-primary focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Nav Links */}
        {menuOpen && (
          <div className="md:hidden bg-background shadow-lg rounded-b-xl px-6 py-4 flex flex-col space-y-4 animate-fade-in-down">
            <button onClick={() => { scrollToSection('home'); setMenuOpen(false); }} className="nav-link text-lg">
              Home
            </button>
            <button onClick={() => { scrollToSection('about'); setMenuOpen(false); }} className="nav-link text-lg">
              About
            </button>
            <button onClick={() => { scrollToSection('destinations'); setMenuOpen(false); }} className="nav-link text-lg">
              Destinations
            </button>
            <button onClick={() => { scrollToSection('testimonials'); setMenuOpen(false); }} className="nav-link text-lg">
              Testimonials
            </button>
            <button onClick={() => { scrollToSection('contact'); setMenuOpen(false); }} className="nav-link text-lg">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;