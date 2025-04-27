import React, { useState } from 'react';
import { Github, Link as LinkIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import '../assets/styles/main.scss';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  achievements: string[];
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "CareerGenie - AI Job Platform",
      description: "An AI-powered job-seeking platform that helps users with resume generation, interview preparation, and real-time industry insights.",
      image: "https://images.pexels.com/photos/8867430/pexels-photo-8867430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Next.js", "Neon DB", "Prisma", "TailwindCSS", "Gemini API", "Inngest"],
      githubUrl: "https://github.com/Anjali-987-vish/CareerGenie",
      liveUrl: "https://career-genie.vercel.app/",
      achievements: [
        "Integrated features like secure authentication, AI resume generation, and interview prep",
        "Optimized performance with background job workflows via Inngest",
        "Ensured 99.9% uptime with robust error handling"
      ]
    },
    {
      id: 2,
      title: "Real-time Chat Application",
      description: "A full-stack messaging application with real-time communication, theme customization, and user status tracking.",
      image: "https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["MERN Stack", "Socket.io", "TailwindCSS", "DaisyUI", "Zustand"],
      githubUrl: "https://github.com/Anjali-987-vish/Chat-App2",
      liveUrl: "https://chat-app2-t7uz.onrender.com",
      achievements: [
        "Added UI theme switching for user customization",
        "Implemented online user status tracking",
        "Achieved 99.8% message delivery reliability"
      ]
    },
    {
      id: 3,
      title: "ChatGPT Clone",
      description: "A ChatGPT clone that demonstrates modern UI implementation and integration with AI services.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "OpenAI API", "TailwindCSS", "JavaScript"],
      githubUrl: "https://github.com/Anjali-987-vish/Chat-Gpt-Clone",
      achievements: [
        "Implemented responsive chat interface",
        "Integrated with OpenAI's API",
        "Added real-time message streaming"
      ]
    },
    {
      id: 4,
      title: "Speech React App",
      description: "A React application showcasing speech recognition and synthesis capabilities.",
      image: "https://images.pexels.com/photos/3811814/pexels-photo-3811814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Web Speech API", "JavaScript"],
      githubUrl: "https://github.com/Anjali-987-vish/Speech-react-app",
      achievements: [
        "Implemented voice commands",
        "Added text-to-speech functionality",
        "Created accessible voice interface"
      ]
    },
    {
      id: 5,
      title: "Sorting Visualizer",
      description: "An interactive visualization tool for various sorting algorithms.",
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["JavaScript", "Algorithms", "Data Structures", "Visualization"],
      githubUrl: "https://github.com/Anjali-987-vish/Sorting-Visualizer",
      achievements: [
        "Visualized multiple sorting algorithms",
        "Added speed control for animations",
        "Implemented array size customization"
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const nextSlide = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(totalPages - 1);
    }
  };

  const visibleProjects = projects.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section id="projects" className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary opacity-5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent opacity-5 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-xl bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text inline-block">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of my favorite projects that showcase my skills in full-stack development,
            AI integration, and problem-solving abilities.
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <div key={project.id} className="project-card h-full flex flex-col">
                <div className="project-image h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-dark-lighter px-2 py-1 rounded-full text-primary-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-300 hover:text-primary-light transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-gray-300 hover:text-primary-light transition-colors"
                      >
                        <LinkIcon size={16} className="mr-1" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="project-overlay">
                  <h3 className="text-xl font-bold mb-4 text-white">{project.title}</h3>
                  <ul className="text-sm text-gray-200 mb-6 list-disc list-inside">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="mb-1">{achievement}</li>
                    ))}
                  </ul>
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-primary flex items-center"
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-4 bg-transparent border border-white text-white hover:bg-white hover:text-dark rounded-md transition-all flex items-center"
                      >
                        <LinkIcon size={16} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 space-x-4">
              <button 
                onClick={prevSlide} 
                className="p-2 rounded-full bg-dark-lighter hover:bg-primary text-white transition-colors"
                aria-label="Previous projects"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex items-center space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      currentIndex === index ? 'bg-primary' : 'bg-dark-lighter'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextSlide} 
                className="p-2 rounded-full bg-dark-lighter hover:bg-primary text-white transition-colors"
                aria-label="Next projects"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;