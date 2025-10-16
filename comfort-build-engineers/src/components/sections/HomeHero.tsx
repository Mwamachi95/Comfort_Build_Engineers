import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import OptimizedImage from '../common/OptimizedImage';
// @ts-ignore - vite-imagetools provides this type
import HomeHeroBg from '../../assets/images/Home/hero/home-hero.jpg?hero';

const HomeHero: FC = () => {
  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Optimized Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          picture={HomeHeroBg}
          alt="Industrial engineering facility"
          className="w-full h-full object-cover"
          loading="eager"
          sizes="100vw"
        />
      </div>

      {/* Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-32">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label */}
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span 
              className="text-base font-bold tracking-wider uppercase font-heading"
              style={{ color: '#A43D39' }}
            >
              Welcome to Comfort Build Engineers
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white mb-10 font-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional engineering solutions for mechanical, electrical, and{' '}
            <span style={{ color: '#A43D39' }}>
              plumbing services in Kenya.
            </span>
          </motion.h1>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center space-x-3 text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-md text-sm md:text-base font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 font-heading whitespace-nowrap"
              style={{
                backgroundColor: '#A43D39',
                '--tw-ring-color': '#A43D39'
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#8B3530';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#A43D39';
              }}
            >
              <span>View Our Services</span>
              <ArrowRightIcon className="h-5 w-5 stroke-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Photo Attribution */}
      <div className="absolute bottom-4 right-4 z-10">
        <p className="text-xs text-white opacity-70">
          Photo by{' '}
          <a 
            href="https://unsplash.com/@spacexuan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:opacity-100"
            style={{ color: 'inherit' }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = '#A43D39';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = 'inherit';
            }}
          >
            Crystal Kwok
          </a>
          {' '}on{' '}
          <a 
            href="https://unsplash.com/photos/grey-industrial-equipment-mhUsz2ezlXQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:opacity-100"
            style={{ color: 'inherit' }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = '#A43D39';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = 'inherit';
            }}
          >
            Unsplash
          </a>
        </p>
      </div>
    </section>
  );
};

export default HomeHero;