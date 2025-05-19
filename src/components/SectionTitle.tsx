
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = true,
  className
}) => {
  return (
    <div className={cn('mb-12', center && 'text-center', className)}>
      <h2 className="text-3xl md:text-4xl font-bold relative inline-block gradient-text mb-3">
        {title}
        <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cloud-blue to-cloud-lavender rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
