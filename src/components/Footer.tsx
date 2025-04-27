import React from 'react';
import { ArrowUp } from 'lucide-react';
import '../assets/styles/main.scss';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-light pt-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white mb-4">
              <span className="text-primary">Anjali</span>
              <span className="text-accent">.</span>
            </h1>
            <p className="text-gray-400 mb-6">
              Creating beautiful digital experiences with clean code and elegant design.
            </p>
            <p className="text-gray-400 flex items-center">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              Available for full-time positions and freelance work
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-primary-light transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-400 hover:text-primary-light transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-gray-400 hover:text-primary-light transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-primary-light transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="text-primary-light">Email:</span> vishwakarmaanjali946@gmail.com
              </li>
              <li className="text-gray-400">
                <span className="text-primary-light">Phone:</span> (+91) 9336364026
              </li>
              {/* <li className="text-gray-400">
                <span className="text-primary-light">Location:</span> San Francisco, CA
              </li> */}
            </ul>
          </div>
        </div>
        
        <hr className="border-dark-lighter" />
        
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Anjali. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-primary hover:bg-primary-dark text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;