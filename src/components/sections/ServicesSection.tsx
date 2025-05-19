
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="cloud-card text-center h-full flex flex-col">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that users love to interact with. Focus on user experience, accessibility, and modern design principles."
    },
    {
      icon: "🖥️",
      title: "Frontend Development",
      description: "Building responsive, performant websites and web applications using React, Tailwind CSS, and other modern frontend technologies."
    },
    {
      icon: "💬",
      title: "Real-Time Chat Integration",
      description: "Implementing real-time communication features in applications using Socket.IO, creating engaging interactive experiences."
    },
    {
      icon: "✍️",
      title: "Technical Copywriting",
      description: "Creating clear, concise, and engaging technical content including documentation, tutorials, and articles related to web development."
    }
  ];

  return (
    <section id="services" className="cloud-section relative">
      <div className="container mx-auto">
        <SectionTitle 
          title="My Services" 
          subtitle="What I can do for you"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
