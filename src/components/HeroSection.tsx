import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { ChevronDown } from 'lucide-react';
import ChatBot from './ChatBot';
import Sparkles from './Sparkles';
import '../assets/styles/main.scss';

const HeroSection: React.FC = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'Designer', 'AI enthusiast. ', 'Problem Solver'],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <Sparkles count={40} />
      
      {/* Magical background effect */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-dark to-dark"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIi8+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/0 via-dark to-dark-light"></div>
      </div>
      
      {/* Northern lights effect */}
      <div className="absolute top-0 left-0 w-full h-64 overflow-hidden">
        <div className="aurora-beam"></div>
        <div className="aurora-beam" style={{ animationDelay: '-2s' }}></div>
        <div className="aurora-beam" style={{ animationDelay: '-4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Anjali
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium mb-8 h-12">
            I'm a{' '}
            <span className="text-primary-light">
              {text}
              <Cursor cursorStyle="_" />
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            Bringing creative ideas to life through clean code and elegant designs. 
            Specialized in building modern web applications with cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="button-primary glow-effect"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="py-2 px-4 bg-transparent border border-primary text-primary hover:bg-primary hover:text-white rounded-md transition-all"
            >
              Contact Me
            </button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <ChatBot />
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={handleScrollDown}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-lighter text-white hover:bg-primary transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;