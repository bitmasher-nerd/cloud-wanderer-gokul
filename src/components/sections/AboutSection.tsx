
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="cloud-section relative">
      <div className="container mx-auto">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me a little better"
        />
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="cloud-card order-2 md:order-1">
            <p className="text-lg mb-6">
              Hello! I'm Gokul Kumar Sant, a Computer Engineering student and full-stack web developer 
              with a passion for creating beautiful, functional digital experiences. I love combining 
              technical skills with creative design to build applications that people enjoy using.
            </p>
            
            <p className="text-lg mb-6">
              My journey in tech started with a curiosity about how things work, which evolved into a love 
              for coding and problem-solving. I'm particularly interested in UI/UX design and creating 
              seamless user experiences that feel intuitive and delightful.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center bg-cloud-blue/10 rounded-full px-4 py-2">
                <span className="mr-2">💻</span>
                <span>Loves Clean Code</span>
              </div>
              <div className="flex items-center bg-cloud-lavender/10 rounded-full px-4 py-2">
                <span className="mr-2">✨</span>
                <span>UI Magic</span>
              </div>
              <div className="flex items-center bg-cloud-pink/10 rounded-full px-4 py-2">
                <span className="mr-2">❤️</span>
                <span>Teamwork</span>
              </div>
            </div>
          </div>
          
          <div className="cloud-card order-1 md:order-2">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            
            <div className="mb-6">
              <div className="flex items-start">
                <div className="bg-cloud-blue/20 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">B.Tech in Computer Engineering</h4>
                  <p className="text-gray-600">Dr. A.P.J. Abdul Kalam Technical University</p>
                  <p className="text-gray-600">Graduation: 2026</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-start">
                <div className="bg-cloud-lavender/20 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Activities & Societies</h4>
                  <p className="text-gray-600">PLACEMENT ACTIVITY COMMITTEE</p>
                  <p className="text-gray-600">PROTO-X-VISION</p>
                  <p className="text-gray-600">E-cell (MMDU)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
