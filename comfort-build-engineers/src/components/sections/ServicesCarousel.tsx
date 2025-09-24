import { useState, useEffect, useRef, type FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

// Import service images
import mechanicalImg from '../../assets/images/Home/services/mechanical.jpg';
import plumbingImg from '../../assets/images/Home/services/plumbing.jpg';
import electricalImg from '../../assets/images/Home/services/electrical.jpg';
import factoryPlanningImg from '../../assets/images/Home/services/factory-planning.jpg';
import projectManagementImg from '../../assets/images/Home/services/project-management.jpg';
import designBuildImg from '../../assets/images/Home/services/design-build.jpg';

interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const services: Service[] = [
  {
    number: '01',
    title: 'Mechanical Engineering',
    description: 'Advanced HVAC system design, building automation, and energy-efficient solutions for optimal indoor climate control across commercial and industrial facilities.',
    image: mechanicalImg,
    link: '/services#mechanical'
  },
  {
    number: '02',
    title: 'Plumbing Services',
    description: 'Comprehensive water systems, sanitary solutions, and fire suppression installations designed for reliability and compliance with Kenyan building standards.',
    image: plumbingImg,
    link: '/services#plumbing'
  },
  {
    number: '03',
    title: 'Electrical Engineering',
    description: 'Complete electrical infrastructure from power distribution to lighting systems, ensuring safe and efficient electrical solutions for every project scale.',
    image: electricalImg,
    link: '/services#electrical'
  },
  {
    number: '04',
    title: 'Factory Planning',
    description: 'Strategic industrial facility design and layout optimization to maximize operational efficiency while ensuring safety and regulatory compliance.',
    image: factoryPlanningImg,
    link: '/services#factory-planning'
  },
  {
    number: '05',
    title: 'Project Management',
    description: 'End-to-end project coordination ensuring timely delivery, budget control, and quality standards throughout every phase of your engineering project.',
    image: projectManagementImg,
    link: '/services#project-management'
  },
  {
    number: '06',
    title: 'Design & Build',
    description: 'Integrated design-build solutions from conceptual planning to final construction, delivering turnkey MEP engineering projects with seamless execution.',
    image: designBuildImg,
    link: '/services#design-build'
  }
];

const ServicesCarousel: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleServiceClick = (index: number) => {
    setCurrentIndex(index);
    startInterval(); // Restart the timer from this card
  };

  const currentService = services[currentIndex];

  return (
    <>
      <style>{`
        @keyframes fillProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
      <section 
        className="py-20 md:py-24"
        style={{ backgroundColor: '#faf8f8' }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-left mb-16">
          <span 
            className="text-base font-bold tracking-wider uppercase font-heading"
            style={{ color: '#A43D39' }}
          >
            Our Services
          </span>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mt-4 max-w-4xl">
            Comprehensive MEP engineering solutions from design to execution, delivering excellence across mechanical, electrical, and plumbing systems for projects of every scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left Column - Content (40%) */}
          <div className="lg:col-span-2 flex flex-col justify-between h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="flex flex-col justify-between h-full"
              >
                {/* Top Section - Number, Title, Description */}
                <div className="space-y-6">
                {/* Service Number */}
                <div className="text-6xl md:text-7xl font-bold text-gray-200 font-heading">
                  {currentService.number}
                </div>

                {/* Service Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 leading-tight font-heading">
                  {currentService.title}
                </h2>

                {/* Service Description */}
                <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                  {currentService.description}
                </p>
                </div>

                {/* Learn More Link - Bottom Section */}
                <div className="pt-4">
                  <Link
                    to={currentService.link}
                    className="inline-flex items-center space-x-3 text-white px-6 py-3 rounded-md text-base font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 font-heading"
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
                    <span>Learn More</span>
                    <ArrowRightIcon className="h-5 w-5 stroke-2" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column - Image (60%) */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-96 md:h-[32rem] lg:h-[36rem] object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-end mt-12">
          <div className="flex space-x-1 lg:col-span-3 lg:col-start-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => handleServiceClick(index)}
                className={`relative h-1 bg-gray-300 hover:bg-gray-400 focus:outline-none overflow-hidden transition-all duration-300 ${
                  index === currentIndex ? 'w-16' : 'w-8'
                }`}
                aria-label={`Go to service ${index + 1}`}
              >
                <div
                  key={currentIndex}
                  className={`absolute top-0 left-0 h-full ${
                    index === currentIndex ? 'bg-current' : 'bg-transparent'
                  }`}
                  style={{
                    color: '#A43D39',
                    width: index === currentIndex ? '0%' : '0%',
                    animation: index === currentIndex 
                      ? 'fillProgress 5000ms linear forwards' 
                      : 'none'
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default ServicesCarousel;