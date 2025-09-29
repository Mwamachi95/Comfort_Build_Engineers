import { type FC, useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ProjectHeroProps {
  title: string;
  tagline: string;
  heroImage: string;
}

const ProjectHero: FC<ProjectHeroProps> = ({
  title,
  tagline,
  heroImage
}) => {
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
    <>
      {/* Hero Content */}
      <section className="relative z-10 bg-neutral-50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-4xl">
            {/* Project Title Label */}
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
                {title}
              </span>
            </motion.div>

            {/* Tagline as Main Heading */}
            <motion.h1
              className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-neutral-900 mb-6 font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {(() => {
                const words = tagline.split(' ');
                const firstPart = words.slice(0, -1).join(' ');
                const lastWord = words.slice(-1)[0];

                // Add period only if the word doesn't contain "MEP"
                const firstPartWithPeriod = firstPart.includes('MEP') ? firstPart : firstPart + '.';
                const lastWordWithPeriod = lastWord.includes('MEP') ? lastWord : lastWord + '.';

                return (
                  <>
                    {firstPartWithPeriod}{' '}
                    <span style={{ color: '#5A7E8C' }}>
                      {lastWordWithPeriod}
                    </span>
                  </>
                );
              })()}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Hero Image - Full Width with Parallax */}
      <section ref={containerRef} className="w-full h-screen sm:h-screen md:h-screen lg:h-screen overflow-hidden">
        <div className="relative w-full h-full">
          <motion.img
            src={heroImage}
            alt={`${title} project hero`}
            className="w-full h-full object-cover"
            loading="eager"
            style={{
              y,
            }}
          />
          {/* Overlay for better text contrast if needed */}
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>
      </section>
    </>
  );
};

export default ProjectHero;