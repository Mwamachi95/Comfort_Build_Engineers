import { type FC } from 'react';
import { motion } from 'framer-motion';
import ProjectsHeroSvg from '../../assets/images/Projects/hero/projects-hero.svg';

const ProjectsHero: FC = () => {
  return (
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
            {/* "OUR PROJECTS" Label */}
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span
                className="text-sm font-semibold tracking-wider uppercase font-heading"
                style={{ color: '#5A7E8C' }}
              >
                Our Projects
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-neutral-900 mb-6 font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Proven Results.{' '}
              <span style={{ color: '#5A7E8C' }}>
                Engineered Success.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-base md:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Explore our portfolio of successful engineering projects across Kenya. From commercial buildings to industrial facilities, we deliver solutions that stand the test of time.
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
                src={ProjectsHeroSvg}
                alt="Engineering projects and construction portfolio"
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
                    (e.target as HTMLElement).style.color = '#5A7E8C';
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
  );
};

export default ProjectsHero;