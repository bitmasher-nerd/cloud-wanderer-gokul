
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { cn } from '@/lib/utils';

interface SkillBubbleProps {
  skill: string;
  className?: string;
  delay?: number;
}

const SkillBubble: React.FC<SkillBubbleProps> = ({ skill, className, delay = 0 }) => {
  const animationStyle = {
    animationDelay: `${delay}s`
  };

  return (
    <div 
      className={cn(
        "cloud-bubble font-medium px-6 py-3 text-center",
        className
      )}
      style={animationStyle}
    >
      {skill}
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const skillsData = [
    { skill: "React", className: "bg-blue-50", delay: 0 },
    { skill: "Node.js", className: "bg-green-50", delay: 0.2 },
    { skill: "MongoDB", className: "bg-emerald-50", delay: 0.4 },
    { skill: "Express", className: "bg-gray-50", delay: 0.6 },
    { skill: "Figma", className: "bg-purple-50", delay: 0.8 },
    { skill: "Adobe XD", className: "bg-pink-50", delay: 1 },
    { skill: "JWT Auth", className: "bg-yellow-50", delay: 1.2 },
    { skill: "Socket.IO", className: "bg-indigo-50", delay: 1.4 },
    { skill: "Cybersecurity Basics", className: "bg-red-50", delay: 1.6 },
    { skill: "SQL", className: "bg-blue-50", delay: 1.8 }
  ];

  const learningData = [
    { skill: "TypeScript", className: "bg-blue-50", delay: 0 },
    { skill: "Next.js", className: "bg-gray-50", delay: 0.2 },
    { skill: "GraphQL", className: "bg-pink-50", delay: 0.4 },
    { skill: "Tailwind CSS", className: "bg-cyan-50", delay: 0.6 }
  ];

  return (
    <section id="skills" className="cloud-section relative">
      <div className="container mx-auto">
        <SectionTitle 
          title="My Skills" 
          subtitle="Technologies and tools I work with"
        />
        
        <div className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {skillsData.map((item, index) => (
              <SkillBubble 
                key={index} 
                skill={item.skill} 
                className={item.className}
                delay={item.delay}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center justify-center">
            <span className="mr-2">🌱</span>
            <span>Currently Learning</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {learningData.map((item, index) => (
              <SkillBubble 
                key={index} 
                skill={item.skill} 
                className={item.className}
                delay={item.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
