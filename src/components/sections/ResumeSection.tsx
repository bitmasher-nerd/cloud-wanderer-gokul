
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, organization, period, description }) => {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-cloud-blue/20 last:border-0">
      <div className="absolute left-[-8px] top-0 w-4 h-4 bg-white border-2 border-cloud-blue rounded-full"></div>
      <div className="cloud-card">
        <h3 className="text-xl font-bold gradient-text">{title}</h3>
        <p className="font-medium text-gray-700">{organization}</p>
        <p className="text-sm text-gray-500 mb-3">{period}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="cloud-section bg-cloud-blue/5 relative">
      <div className="container mx-auto">
        <SectionTitle 
          title="Resume & Experience" 
          subtitle="My professional journey so far"
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <TimelineItem 
              title="Freelancer on Fiverr"
              organization="Graphics/UI/Web Projects"
              period="2024 - Present"
              description="Working on various freelance projects including UI design, web development, and graphics creation. Collaborating with clients to deliver high-quality solutions that meet their specific needs."
            />
            
            <TimelineItem 
              title="Team Leader – Syndicate Hackathon"
              organization="AI Legal Chatbot"
              period="2024"
              description="Led a team in developing an AI-powered legal chatbot that provides accessible legal information and advice. Managed project timeline, delegated tasks, and ensured successful delivery within tight deadlines."
            />
          </div>
          
          <div className="text-center">
            <a 
              href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:32e855a7-2e61-48e5-8a43-bea3356d263d"
              target="_blank"
              rel="noopener noreferrer"
              className="cloud-button inline-flex items-center"
            >
              <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
