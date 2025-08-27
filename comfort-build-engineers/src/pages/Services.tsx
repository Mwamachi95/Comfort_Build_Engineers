import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { services } from '../data/services';
import ServiceSection from '../components/sections/ServiceSection';

const Services: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to section when hash is present
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # 
      const element = document.getElementById(sectionId);
      if (element) {
        // Add a small delay to ensure the page has loaded
        setTimeout(() => {
          const navbarHeight = 100; // Increased navbar height + padding
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
      // If no hash (All Services), scroll to top with small delay
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-neutral-50 py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-neutral-800 mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
              Comprehensive engineering solutions designed to meet your project's unique requirements with precision and expertise.
            </p>
          </div>
        </div>
      </div>

      {/* All Services Sections */}
      <div className="py-16 md:py-24 space-y-20 md:space-y-32">
        <div className="section-container">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.slug}
              className={index > 0 ? 'mt-20 md:mt-32' : ''}
            >
              <ServiceSection 
                service={service} 
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Services;