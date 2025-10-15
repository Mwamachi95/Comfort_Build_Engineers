import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { services } from '../data/services';
import { getServiceIntroBySlug } from '../data/serviceIntros';
import ServiceSection from '../components/sections/ServiceSection';
import ServiceIntro from '../components/sections/ServiceIntro';
import PipelineMaintenanceSvg from '../assets/images/Service-page/Hero/Pipeline-maintenance-rafiki.svg';

// Helper function to darken a hex color
const getDarkerColor = (hex: string): string => {
  // Remove # if present
  const cleanHex = hex.replace('#', '');

  // Parse RGB values
  const r = parseInt(cleanHex.substr(0, 2), 16);
  const g = parseInt(cleanHex.substr(2, 2), 16);
  const b = parseInt(cleanHex.substr(4, 2), 16);

  // Darken by reducing RGB values by 20%
  const darkerR = Math.floor(r * 0.8);
  const darkerG = Math.floor(g * 0.8);
  const darkerB = Math.floor(b * 0.8);

  // Convert back to hex
  return `#${darkerR.toString(16).padStart(2, '0')}${darkerG.toString(16).padStart(2, '0')}${darkerB.toString(16).padStart(2, '0')}`;
};

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
      <section className="bg-neutral-50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side - Text content */}
            <motion.div 
              className="md:w-3/5 md:pr-8 lg:pr-12 mb-12 md:mb-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* "OUR SERVICES" Label */}
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span 
                  className="text-sm font-semibold tracking-wider uppercase font-heading"
                  style={{ color: '#82AD9C' }}
                >
                  Our Services
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-neutral-900 mb-6 font-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Comprehensive Solutions.{' '}
                <span style={{ color: '#82AD9C' }}>
                  Engineering Excellence.
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p 
                className="text-base md:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                From pipeline maintenance to industrial installations, we deliver precision engineering solutions that ensure safety, efficiency, and long-term reliability across Kenya's industrial landscape.
              </motion.p>
            </motion.div>

            {/* Right side - SVG Illustration */}
            <motion.div 
              className="md:w-2/5 flex justify-center md:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
                <img
                  src={PipelineMaintenanceSvg}
                  alt="Pipeline maintenance and industrial engineering services"
                  className="w-full h-auto"
                  loading="eager"
                />
                {/* Attribution */}
                <p className="text-xs text-neutral-400 mt-2 text-right">
                  <a 
                    href="https://storyset.com/work" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-colors duration-200"
                    style={{ color: 'inherit' }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = '#82AD9C';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = 'inherit';
                    }}
                  >
                    Work illustrations by Storyset
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Services Sections */}
      <div className="space-y-20 md:space-y-32">
        {services.map((service, index) => {
          const serviceIntro = getServiceIntroBySlug(service.slug);

          return (
            <div
              key={service.id}
              id={service.slug}
              className={index > 0 ? 'mt-20 md:mt-32' : ''}
            >
              {/* Service Introduction (if available) */}
              {serviceIntro && (
                <ServiceIntro
                  serviceName={service.name}
                  serviceSlug={service.slug}
                  heroImage={serviceIntro.heroImage}
                  heroImageAlt={serviceIntro.heroImageAlt}
                  serviceColor={service.color}
                  tagline={serviceIntro.tagline}
                  overview={serviceIntro.overview}
                  approach={serviceIntro.approach}
                />
              )}

              {/* Service Segments Grid */}
              <div className="section-container mt-6 md:mt-8 lg:mt-10">
                <ServiceSection
                  service={service}
                  index={index}
                />
              </div>

              {/* Contact Us CTA */}
              <div className="section-container mt-8 md:mt-12 lg:mt-16">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-3 text-white px-6 py-3 rounded-md text-base font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 font-heading"
                  style={{
                    backgroundColor: service.color,
                    '--tw-ring-color': service.color
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    const darkerColor = getDarkerColor(service.color);
                    (e.currentTarget as HTMLElement).style.backgroundColor = darkerColor;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = service.color;
                  }}
                >
                  <span>Contact Us</span>
                  <ArrowRightIcon className="h-5 w-5 stroke-2" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Services;