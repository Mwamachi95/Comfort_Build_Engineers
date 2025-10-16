import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// Import client logos
import BolloreLogoSrc from '../../assets/images/About/Vision-mission/bollore-seeklogo.png';
import EcobankLogoSrc from '../../assets/images/About/Vision-mission/ecobank-seeklogo.png';
import KcbLogoSrc from '../../assets/images/About/Vision-mission/kcb-group-plc-seeklogo.png';
import SanofiLogoSrc from '../../assets/images/About/Vision-mission/sanofi-seeklogo.png';
import ScJohnsonLogoSrc from '../../assets/images/About/Vision-mission/sc-johnson-seeklogo.png';

const VisionMissionHero: FC = () => {
  const clientLogos = [
    { src: BolloreLogoSrc, alt: 'Bollore Group - Engineering Partner' },
    { src: EcobankLogoSrc, alt: 'Ecobank - Engineering Solutions' },
    { src: KcbLogoSrc, alt: 'KCB Group - Infrastructure Partner' },
    { src: SanofiLogoSrc, alt: 'Sanofi - Industrial Engineering' },
    { src: ScJohnsonLogoSrc, alt: 'SC Johnson - Manufacturing Solutions' },
  ];

  // Create multiple sets for seamless infinite scroll
  const extendedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="bg-white text-neutral-900 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row min-h-[600px] gap-8 lg:gap-12 relative">
          {/* Left Side - Content */}
          <motion.div 
            className="lg:w-3/5 flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Content */}
            <div className="flex-grow">
              {/* Vision Section */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-sm font-semibold tracking-wider uppercase text-neutral-600 font-heading mb-4 block">
                  Our Vision
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight font-heading text-neutral-900">
                  We focus on the holistic solutions for our Partners, holistic growth for our Employees and our Business
                </h2>
              </motion.div>

              {/* Mission Section */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="text-sm font-semibold tracking-wider uppercase text-neutral-600 font-heading mb-4 block">
                  Our Mission
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight font-heading text-neutral-900">
                  Provide solutions through a{' '}
                  <span className="font-bold" style={{ color: '#B8901C' }}>reliable</span>,{' '}
                  <span className="font-bold" style={{ color: '#F2C84B' }}>dependable</span> and{' '}
                  <span className="font-bold" style={{ color: '#D9A91A' }}>client-focused</span> team
                </h3>
              </motion.div>

              {/* Body Paragraph */}
              <motion.p 
                className="text-lg md:text-xl text-neutral-700 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                At Comfort Build Engineers, we believe that exceptional engineering solutions emerge from a foundation of trust, expertise, and unwavering commitment to excellence. Our integrated approach ensures that every mechanical, electrical, and plumbing project we undertake not only meets technical specifications but also fosters long-term partnerships built on reliability and mutual success.
              </motion.p>
            </div>

            {/* CTA Button - Pushed to bottom */}
            <motion.div
              className="mt-auto pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                to="/services"
                className="inline-flex items-center space-x-3 text-white px-6 py-3 rounded-md text-base font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 font-heading"
                style={{
                  backgroundColor: '#D9A91A',
                  '--tw-ring-color': '#D9A91A'
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#B8901C';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#D9A91A';
                }}
              >
                <span>Our Services</span>
                <ArrowRightIcon className="h-5 w-5 stroke-2" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Client Logo Gallery */}
          <motion.div 
            className="lg:w-2/5 relative overflow-hidden bg-neutral-100 rounded-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute inset-0 flex gap-2">
              {/* Column 1 - Moving Down */}
              <div className="w-1/2 relative overflow-hidden">
                <motion.div
                  className="flex flex-col space-y-4 py-8"
                  animate={{
                    y: [0, -320 * (extendedLogos.length / 3)]
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {extendedLogos.map((logo, index) => (
                    <div 
                      key={`col1-${index}`}
                      className="flex-shrink-0 bg-white rounded-lg p-10 mx-1 shadow-lg"
                      style={{ height: '280px' }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Column 2 - Moving Up */}
              <div className="w-1/2 relative overflow-hidden">
                <motion.div
                  className="flex flex-col space-y-4 py-8"
                  animate={{
                    y: [-320 * (extendedLogos.length / 3), 0]
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {extendedLogos.reverse().map((logo, index) => (
                    <div 
                      key={`col2-${index}`}
                      className="flex-shrink-0 bg-white rounded-lg p-10 mx-1 shadow-lg"
                      style={{ height: '280px' }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Gradient Overlays for Seamless Loop */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-neutral-100 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-neutral-100 to-transparent z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionHero;