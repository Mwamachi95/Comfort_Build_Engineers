import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import type { FilterCategory } from './ProjectsFilterBar';
import OptimizedImage from '../common/OptimizedImage';

interface Picture {
  img: { src: string; w: number; h: number };
  sources: { [key: string]: Array<{ src: string; w: number; h: number }> };
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: Picture;
  categories: FilterCategory[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Left side - Image */}
        <div className="md:w-1/2 relative overflow-hidden rounded-lg">
          <OptimizedImage
            picture={project.image}
            alt={project.title}
            className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

        {/* Right side - Content */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Project Categories */}
            <div className="flex flex-wrap gap-2">
              {project.categories.map((category, index) => (
                <span
                  key={index}
                  className="text-xs font-semibold tracking-wider uppercase"
                  style={{ color: '#5A7E8C' }}
                >
                  {category}
                  {index < project.categories.length - 1 && <span className="ml-2">•</span>}
                </span>
              ))}
            </div>

            {/* Project Title */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-800 leading-tight font-heading">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Learn More Link */}
          <div className="pt-6">
            <Link
              to={`/project/${project.id}`}
              className="inline-flex items-center space-x-3 text-white px-6 py-3 rounded-md text-base font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 font-heading group"
              style={{
                backgroundColor: '#5A7E8C',
                '--tw-ring-color': '#5A7E8C'
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#4A6B75';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#5A7E8C';
              }}
            >
              <span>View Project</span>
              <ArrowRightIcon className="h-5 w-5 stroke-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
export type { Project };