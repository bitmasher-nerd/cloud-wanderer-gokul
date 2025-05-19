
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

interface ProjectProps {
  title: string;
  description: string;
  stack: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  stack,
  image,
  githubUrl,
  demoUrl
}) => {
  return (
    <div className="cloud-card h-full flex flex-col">
      <div className="rounded-xl overflow-hidden mb-4 bg-gray-100 aspect-video">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {stack.map((tech, index) => (
          <span 
            key={index}
            className="text-xs bg-cloud-blue/10 text-cloud-blue px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      
      <div className="flex gap-3 mt-auto">
        {githubUrl && (
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors flex items-center"
          >
            <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub
          </a>
        )}
        
        {demoUrl && (
          <a 
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 bg-cloud-blue text-white rounded-full hover:bg-cloud-blue/90 transition-colors flex items-center"
          >
            <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const PortfolioSection: React.FC = () => {
  const projects = [
    {
      title: "Furnimart Chatbox",
      description: "A real-time chat application for an e-commerce furniture store, allowing customers to communicate with support representatives.",
      stack: ["Socket.IO", "MongoDB", "Express", "React"],
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      githubUrl: "https://github.com/gokulsant",
      demoUrl: "#"
    },
    {
      title: "Legal Help Chatbot",
      description: "An AI-powered chatbot that provides legal information and guidance to users, making legal help more accessible.",
      stack: ["Node.js", "React", "AI/ML", "Express"],
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      githubUrl: "https://github.com/gokulsant",
      demoUrl: "#"
    },
    {
      title: "Library DBMS",
      description: "A comprehensive database management system for libraries, including book tracking, member management, and checkout functionality.",
      stack: ["MongoDB", "Express", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      githubUrl: "https://github.com/gokulsant"
    },
    {
      title: "Portfolio Website",
      description: "A cloud-themed portfolio website showcasing my skills, projects, and services in an engaging and interactive way.",
      stack: ["React", "TypeScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1483401757487-2ced3fa77952",
      githubUrl: "https://github.com/gokulsant",
      demoUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="cloud-section bg-cloud-lavender/5 relative">
      <div className="container mx-auto">
        <SectionTitle 
          title="My Portfolio" 
          subtitle="Check out some of my recent projects"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
