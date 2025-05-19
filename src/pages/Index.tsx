
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import CloudBackground from '@/components/CloudBackground';
import Footer from '@/components/Footer';

// Import all sections
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ResumeSection from '@/components/sections/ResumeSection';
import SkillsSection from '@/components/sections/SkillsSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Gokul Kumar Sant | Portfolio";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <CloudBackground />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <SkillsSection />
        <PortfolioSection />
        <ServicesSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
