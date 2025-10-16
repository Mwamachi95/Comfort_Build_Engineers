import { type FC } from 'react';
import { motion } from 'framer-motion';
import CreativeTeamSvg from '../../assets/images/About/Hero/Creative-team-cuate.svg';

const AboutHero: FC = () => {
  return (
    <section className="bg-neutral-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between relative">
          {/* Left side - Text content */}
          <motion.div 
            className="md:w-3/5 md:pr-8 lg:pr-12 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* "ABOUT US" Label */}
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span 
                className="text-sm font-semibold tracking-wider uppercase font-heading"
                style={{ color: '#D9A91A' }}
              >
                About Us
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-neutral-900 mb-6 font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Engineering Excellence.{' '}
              <span style={{ color: '#D9A91A' }}>
                Reliability Delivered.
              </span>
            </motion.h1>

            {/* Optional Subtext */}
            <motion.p 
              className="text-base md:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              With decades of combined experience, we deliver comprehensive engineering solutions that build trust, ensure quality, and exceed expectations across Kenya's industrial landscape.
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
                src={CreativeTeamSvg}
                alt="Creative team collaborating on engineering solutions"
                className="w-full h-auto"
                loading="eager"
              />
              {/* Attribution */}
              <p className="text-xs text-neutral-400 mt-2 text-right">
                <a 
                  href="https://storyset.com/team" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors duration-200"
                  style={{ color: 'inherit' }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = '#D9A91A';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = 'inherit';
                  }}
                >
                  Team illustrations by Storyset
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;