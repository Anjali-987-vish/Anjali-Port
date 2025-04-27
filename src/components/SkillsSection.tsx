import React from 'react';
import { Code, Server, Database, Cpu, Palette, Globe } from 'lucide-react';
import '../assets/styles/main.scss';

interface Skill {
  category: string;
  icon: React.ReactNode;
  items: string[];
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    {
      category: "Frontend",
      icon: <Code className="text-primary" size={40} />,
      items: ["React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "HTML/CSS"]
    },
    {
      category: "Backend",
      icon: <Server className="text-secondary" size={40} />,
      items: ["Node.js", "Express", "RESTful APIs", "Socket.io", "Prisma", "Inngest"]
    },
    {
      category: "Database",
      icon: <Database className="text-accent" size={40} />,
      items: ["MongoDB", "PostgreSQL", "Neon DB", "MySQL"]
    },
    {
      category: "AI & Machine Learning",
      icon: <Cpu className="text-primary-light" size={40} />,
      items: ["Gemini API", "OpenAI API", "Natural Language Processing", "AI Integration"]
    },
    {
      category: "Design",
      icon: <Palette className="text-accent-light" size={40} />,
      items: ["UI/UX Design", "Wix Studio", "Responsive Design", "Cloudinary"]
    },
    {
      category: "Version Control & Tools",
      icon: <Globe className="text-secondary-light" size={40} />,
      items: ["Git", "GitHub", "VS Code", "Postman", "npm/yarn"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark to-dark-light"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-dark-light"></div>
      
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary opacity-10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-accent opacity-10 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-xl bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text inline-block">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            I specialize in modern web technologies and AI integration. Here's a comprehensive 
            breakdown of my technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card h-full">
              <div className="flex flex-col items-center text-center">
                <div className="skill-icon mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;