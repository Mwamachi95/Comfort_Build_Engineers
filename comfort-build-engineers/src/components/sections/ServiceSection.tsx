import React from 'react';
import { motion } from 'framer-motion';
import type { Service } from '../../types';
import ServiceCard from './ServiceCard';
import ServiceSegmentsGrid from './ServiceSegmentsGrid';

interface ServiceSectionProps {
  service: Service;
  index: number;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ service, index }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="w-full"
    >
      {/* Desktop Layout */}
      <div 
        className="hidden md:flex items-stretch"
        style={{
          gap: '20px',
          width: '100%',
          maxWidth: '100%',
          overflow: 'hidden'
        }}
      >
        <ServiceCard service={service} />
        <ServiceSegmentsGrid service={service} />
      </div>
      
      {/* Mobile Layout */}
      <div 
        className="md:hidden flex flex-col"
        style={{
          gap: '24px'
        }}
      >
        <ServiceCard service={service} />
        <ServiceSegmentsGrid service={service} />
      </div>
    </motion.section>
  );
};

export default ServiceSection;