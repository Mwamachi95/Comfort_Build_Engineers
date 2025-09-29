import { type FC } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

interface Service {
  title: string;
  description: string;
}

interface ServicesOverviewProps {
  services: Service[];
  scope: string[];
  projectColor?: string;
}

const ServicesOverview: FC<ServicesOverviewProps> = ({
  services,
  scope,
  projectColor = '#5A7E8C'
}) => {
  return (
    <section className="py-16 md:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Services Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <span
                  className="text-sm font-semibold tracking-wider uppercase font-heading"
                  style={{ color: projectColor }}
                >
                  Services Provided
                </span>
              </motion.div>

              <motion.h2
                className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 font-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Engineering Solutions Delivered
              </motion.h2>

              <div className="space-y-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="border-l-4 pl-6 py-2"
                    style={{ borderColor: projectColor }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  >
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2 font-heading">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Scope */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Scope Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-6"
              >
                <span
                  className="text-sm font-semibold tracking-wider uppercase font-heading"
                  style={{ color: projectColor }}
                >
                  Project Scope
                </span>
              </motion.div>

              <motion.h2
                className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 font-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Scope of Work
              </motion.h2>

              <div className="space-y-4">
                {scope.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                  >
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: projectColor }}
                    >
                      <CheckIcon className="w-3 h-3 text-white stroke-2" />
                    </div>
                    <p className="text-neutral-700 leading-relaxed">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;