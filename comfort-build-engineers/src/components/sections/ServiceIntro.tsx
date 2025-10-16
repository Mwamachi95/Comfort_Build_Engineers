import React from 'react';
import { motion } from 'framer-motion';

interface ServiceIntroProps {
  serviceName: string;
  serviceSlug: string;
  heroImage: string;
  heroImageAlt: string;
  serviceColor: string;
  tagline: string;
  overview: {
    title: string;
    content: string;
  };
  approach: {
    title: string;
    content: string;
  };
}

const ServiceIntro: React.FC<ServiceIntroProps> = ({
  serviceName,
  serviceSlug,
  heroImage,
  heroImageAlt,
  serviceColor,
  tagline,
  overview,
  approach,
}) => {
  // Use white text and border for Factory Planning and Plumbing, service color for others
  const titleColor = (serviceSlug === 'factory-planning' || serviceSlug === 'plumbing') ? '#FFFFFF' : serviceColor;
  const borderColor = (serviceSlug === 'factory-planning' || serviceSlug === 'plumbing') ? '#FFFFFF' : serviceColor;
  return (
    <section className="w-full flex flex-col">
      {/* Full-Width Hero Image - 50vh on desktop */}
      <motion.div
        className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden flex-shrink-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Service Name Overlay */}
        <div className="absolute bottom-0 left-0 w-full pb-6 md:pb-8 lg:pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading drop-shadow-lg border-l-8 pl-4 md:pl-6"
              style={{ color: titleColor, borderColor: borderColor }}
            >
              {serviceName}
            </h2>
          </div>
        </div>
      </motion.div>

      {/* Two-Column Content Section - 50vh on desktop */}
      <div className="w-full md:min-h-[50vh] bg-white pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start relative">

          {/* Left Column - Tagline */}
          <motion.div
            className="flex items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight font-heading text-neutral-900"
              style={{ lineHeight: '1.4' }}
            >
              {tagline}
            </p>
          </motion.div>

          {/* Right Column - Two Stacked Containers */}
          <motion.div
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >

            {/* Overview Container */}
            <div>
              <h3
                className="text-lg md:text-xl font-semibold mb-2 pb-2 font-heading border-b-2"
                style={{
                  color: serviceColor,
                  borderColor: serviceColor
                }}
              >
                {overview.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-neutral-700 font-body">
                {overview.content}
              </p>
            </div>

            {/* Approach Container */}
            <div>
              <h3
                className="text-lg md:text-xl font-semibold mb-2 pb-2 font-heading border-b-2"
                style={{
                  color: serviceColor,
                  borderColor: serviceColor
                }}
              >
                {approach.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-neutral-700 font-body">
                {approach.content}
              </p>
            </div>

          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;
