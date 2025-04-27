import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Code, Mail } from 'lucide-react';
import '../assets/styles/main.scss';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-light bg-opacity-80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">
              <span className="text-primary">Anjali</span>
              <span className="text-accent">.</span>
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => handleNavLinkClick('home')} className="nav-link text-white hover:text-primary-light flex items-center">
                <Home className="w-4 h-4 mr-1" />
                <span>Home</span>
              </button>
              <button onClick={() => handleNavLinkClick('about')} className="nav-link text-white hover:text-primary-light flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>About</span>
              </button>
              <button onClick={() => handleNavLinkClick('projects')} className="nav-link text-white hover:text-primary-light flex items-center">
                <Briefcase className="w-4 h-4 mr-1" />
                <span>Projects</span>
              </button>
              <button onClick={() => handleNavLinkClick('skills')} className="nav-link text-white hover:text-primary-light flex items-center">
                <Code className="w-4 h-4 mr-1" />
                <span>Skills</span>
              </button>
              <button onClick={() => handleNavLinkClick('contact')} className="nav-link text-white hover:text-primary-light flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                <span>Contact</span>
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-light bg-opacity-95 backdrop-blur-md">
          <button 
            onClick={() => handleNavLinkClick('home')}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-dark-lighter w-full text-left"
          >
            <div className="flex items-center">
              <Home className="w-4 h-4 mr-2" />
              <span>Home</span>
            </div>
          </button>
          <button 
            onClick={() => handleNavLinkClick('about')}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-dark-lighter w-full text-left"
          >
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>About</span>
            </div>
          </button>
          <button 
            onClick={() => handleNavLinkClick('projects')}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-dark-lighter w-full text-left"
          >
            <div className="flex items-center">
              <Briefcase className="w-4 h-4 mr-2" />
              <span>Projects</span>
            </div>
          </button>
          <button 
            onClick={() => handleNavLinkClick('skills')}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-dark-lighter w-full text-left"
          >
            <div className="flex items-center">
              <Code className="w-4 h-4 mr-2" />
              <span>Skills</span>
            </div>
          </button>
          <button 
            onClick={() => handleNavLinkClick('contact')}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-dark-lighter w-full text-left"
          >
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>Contact</span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;