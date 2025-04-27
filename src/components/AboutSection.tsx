import React from 'react';
import { Award, Zap, Music, Dumbbell } from 'lucide-react';
import '../assets/styles/main.scss';
import anjaliImage from '../assets/images/anjali.jpeg'; // Adjust the path as needed

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-light relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark to-dark-light"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-dark-light"></div>
      
      {/* Glow effect blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary opacity-10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent opacity-10 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-xl bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text inline-block">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-6">Who am I?</h3>
            
            <p className="text-gray-300 mb-6">
              I'm Anjali, a passionate full-stack developer with 1+ years of experience in creating beautiful, functional 
              web applications. I specialize in developing responsive interfaces and scalable back-end systems.
            </p>
            
            <p className="text-gray-300 mb-6">
              I completed my B.Tech degree in Information Technology from Dr. A.P.J. Abdul Kalam Technical University, Lucknow. 
              My education has equipped me with strong problem-solving skills and a solid foundation in software development.
            </p>
            
            <p className="text-gray-300 mb-8">
              When I'm not coding, you can find me playing guitar, singing, or hitting the gym. I believe in maintaining 
              a balanced lifestyle that fuels creativity and innovation in my work.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Award className="text-primary" size={24} />
                <div>
                  <h4 className="font-semibold">Experience</h4>
                  <p className="text-sm text-gray-400">1+ Years</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="text-accent" size={24} />
                <div>
                  <h4 className="font-semibold">Projects</h4>
                  <p className="text-sm text-gray-400">10+ Completed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Music className="text-secondary" size={24} />
                <div>
                  <h4 className="font-semibold">Music</h4>
                  <p className="text-sm text-gray-400">Guitar & Singing</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Dumbbell className="text-accent-light" size={24} />
                <div>
                  <h4 className="font-semibold">Fitness</h4>
                  <p className="text-sm text-gray-400">Gym Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-dark p-1">
                <img 
                  src={anjaliImage} 
                  alt="Anjali portrait" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 p-4 bg-dark rounded-lg shadow-lg">
                <p className="text-sm font-bold text-primary-light">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
