import React from 'react';
import type { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div
      className="flex-shrink-0 w-full md:w-[calc(30%-6px)] shadow-lg relative overflow-hidden flex flex-col h-[300px] md:h-[320px] lg:h-[400px] p-6 md:p-6 lg:p-10"
      style={{
        backgroundColor: service.color,
        borderRadius: '6px'
      }}
    >
      {/* Logo Area */}
      <div
        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mb-6 lg:mb-8"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
      >
        <img
          src={service.logo}
          alt={`${service.name} logo`}
          className="w-7 h-7 lg:w-8 lg:h-8"
        />
      </div>
      
      {/* Content pushed to bottom */}
      <div style={{ marginTop: 'auto' }}>
        {/* Main Heading */}
        <h2 className="font-bold font-heading text-white text-xl md:text-[22px] lg:text-[28px] leading-tight mb-3 lg:mb-4">
          {service.title}
        </h2>
        
        {/* Description Text */}
        <p className="text-white opacity-90 text-sm md:text-sm lg:text-base leading-relaxed m-0">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;