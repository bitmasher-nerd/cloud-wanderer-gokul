
import React from 'react';

interface CloudProps {
  size?: 'sm' | 'md' | 'lg';
  position?: string;
  delay?: number;
  opacity?: number;
}

const Cloud: React.FC<CloudProps> = ({ 
  size = 'md', 
  position = 'top-1/4 left-1/4',
  delay = 0,
  opacity = 0.8
}) => {
  const sizeClasses = {
    sm: 'w-16 h-12',
    md: 'w-24 h-16',
    lg: 'w-40 h-24'
  };

  const animationStyle = {
    animationDelay: `${delay}s`
  };

  return (
    <div 
      className={`absolute ${position} ${sizeClasses[size]} bg-white rounded-full
                  opacity-${Math.round(opacity * 10)} animate-float-slow pointer-events-none z-0`}
      style={animationStyle}
    >
      <div className="absolute -top-1/3 left-1/4 w-1/2 h-1/2 bg-white rounded-full" />
      <div className="absolute -top-1/4 left-1/2 w-1/2 h-1/2 bg-white rounded-full" />
      <div className="absolute -top-1/3 right-1/4 w-1/2 h-1/2 bg-white rounded-full" />
    </div>
  );
};

const CloudBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <Cloud size="lg" position="top-1/4 left-1/4" opacity={0.5} />
      <Cloud size="md" position="top-1/2 left-3/4" delay={2} opacity={0.6} />
      <Cloud size="sm" position="top-3/4 left-1/2" delay={1} opacity={0.7} />
      <Cloud size="lg" position="top-1/3 right-1/4" delay={3} opacity={0.4} />
      <Cloud size="md" position="bottom-1/4 left-1/3" delay={2.5} opacity={0.5} />
      <Cloud size="sm" position="bottom-1/3 right-1/4" delay={1.5} opacity={0.6} />
    </div>
  );
};

export default CloudBackground;
