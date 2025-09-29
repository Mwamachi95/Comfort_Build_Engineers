import { type FC, useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CompanyBackgroundImage from '../../assets/images/About/Company-background/crystal-kwok-XUEdfpPIhXg-unsplash.jpg';

const CompanyBackground: FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check for mobile screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  // Track scroll progress for this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to y position - responsive values
  const yRange = isMobile ? [-150, 150] : [-300, 300];
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <section ref={containerRef} className="relative w-full h-screen sm:h-screen md:h-screen lg:h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <motion.img
          src={CompanyBackgroundImage}
          alt="Industrial engineering facility showcasing advanced machinery and technical infrastructure"
          className="w-full h-full object-cover"
          loading="lazy"
          style={{
            y,
          }}
        />
        {/* Attribution */}
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-10">
          <p className="text-xs sm:text-xs text-white/80 bg-black/50 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1 rounded">
            Photo by{' '}
            <a 
              href="https://unsplash.com/@spacexuan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors duration-200 underline"
            >
              Crystal Kwok
            </a>
            {' '}on{' '}
            <a 
              href="https://unsplash.com/photos/gray-commercial-machine-XUEdfpPIhXg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors duration-200 underline"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyBackground;