import { type FC, useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import OptimizedImage from '../common/OptimizedImage';
// @ts-ignore - vite-imagetools provides this type
import CompanyBackgroundImage from '../../assets/images/About/Company-background/crystal-kwok-XUEdfpPIhXg-unsplash.jpg?hero';

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
      <motion.div className="relative w-full h-full" style={{ y }}>
        <OptimizedImage
          picture={CompanyBackgroundImage}
          alt="Industrial engineering facility showcasing advanced machinery and technical infrastructure"
          className="w-full h-full object-cover"
          loading="lazy"
          sizes="100vw"
        />
      </motion.div>
    </section>
  );
};

export default CompanyBackground;