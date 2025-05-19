
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cloud-blue rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cloud-lavender rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto flex flex-col items-center text-center z-10">
        <div className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden mb-8 animate-pulse-soft">
          <img 
            src="/lovable-uploads/31eba279-76d7-4890-9d7c-a0bfdad5e893.png" 
            alt="Gokul Kumar Sant" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-float-slow">
          Hi, I'm <span className="gradient-text">Gokul</span> ☁️💙
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-8">
          Turning technology into lovable digital experiences
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#portfolio" className="cloud-button">
            See My Work
          </a>
          <a href="#contact" className="cloud-button-secondary">
            Let's Connect
          </a>
        </div>
        
        <div className="mt-16 animate-bounce">
          <a href="#about" className="text-gray-500 hover:text-cloud-blue transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5"></path>
              <path d="M7 6l5 5 5-5"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
