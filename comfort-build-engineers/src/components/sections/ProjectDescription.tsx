import { type FC } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../common/OptimizedImage';

interface Picture {
  img: { src: string; w: number; h: number };
  sources: { [key: string]: Array<{ src: string; w: number; h: number }> };
}

interface ProjectDescriptionProps {
  introduction: string;
  description: string;
  image: Picture;
  imageAlt: string;
  projectColor?: string;
}

const ProjectDescription: FC<ProjectDescriptionProps> = ({
  introduction,
  description,
  image,
  imageAlt,
  projectColor = '#5A7E8C'
}) => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span
                className="text-sm font-semibold tracking-wider uppercase font-heading"
                style={{ color: projectColor }}
              >
                Project Overview
              </span>
            </motion.div>

            {/* Introduction */}
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 leading-tight font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {introduction}
            </motion.h2>

            {/* Description */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {description.split('\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base md:text-lg text-neutral-600 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <OptimizedImage
                picture={image}
                alt={imageAlt}
                className="w-full h-96 md:h-[28rem] lg:h-[32rem] object-cover"
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;