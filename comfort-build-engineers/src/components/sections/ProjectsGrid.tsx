import { type FC } from 'react';
import ProjectCard, { type Project } from './ProjectCard';
import type { FilterCategory } from './ProjectsFilterBar';

// Import project images with optimization
// @ts-ignore - vite-imagetools provides this type
import bravaFoodsImg from '../../assets/images/Projects/placeholder-images/brava-foods.jpg?project';
// @ts-ignore
import ecobankImg from '../../assets/images/Projects/placeholder-images/ecobank-placeholder.jpg?project';
// @ts-ignore
import kcbNyamiraImg from '../../assets/images/Projects/per-project/kcb-nyamira/kcb-placeholder.jpg?project';
// @ts-ignore
import lynxApartmentsImg from '../../assets/images/Projects/placeholder-images/lynx-apartments.jpg?project';
// @ts-ignore
import origenImg from '../../assets/images/Projects/per-project/origen/origen-placeholder.jpg?project';
// @ts-ignore
import ravineDairiesImg from '../../assets/images/Projects/placeholder-images/ravine-dairies.jpg?project';
// @ts-ignore
import rositaImg from '../../assets/images/Projects/placeholder-images/rosita-placeholder.jpeg?project';
// @ts-ignore
import sanergyImg from '../../assets/images/Projects/placeholder-images/sanergy.jpg?project';
// @ts-ignore
import sanofiImg from '../../assets/images/Projects/placeholder-images/sanofi-placeholder.jpg?project';
// @ts-ignore
import scJohnsonImg from '../../assets/images/Projects/placeholder-images/sc-johnson.jpg?project';
// @ts-ignore
import vertImg from '../../assets/images/Projects/placeholder-images/vert-placeholder.jpg?project';

interface ProjectsGridProps {
  activeFilter: FilterCategory;
}

const projects: Project[] = [
  {
    id: 'brava-foods',
    title: 'Brava Foods Industries',
    description: 'Complete MEP design and installation for modern food processing facility with specialized ventilation and temperature control systems.',
    image: bravaFoodsImg,
    categories: ['Industrial'],
    link: '/project/brava-foods'
  },
  {
    id: 'ecobank',
    title: 'Ecobank Refurbishment and Fitouts',
    description: 'Comprehensive electrical infrastructure and HVAC systems for multi-story commercial banking facility in Nairobi CBD.',
    image: ecobankImg,
    categories: ['Commercial'],
    link: '/project/ecobank'
  },
  {
    id: 'kcb-nyamira',
    title: 'KCB Nyamira Branch',
    description: 'Complete MEP design and installation for modern banking facility featuring efficient HVAC, electrical systems, and fire safety infrastructure.',
    image: kcbNyamiraImg,
    categories: ['Commercial'],
    link: '/project/kcb-nyamira'
  },
  {
    id: 'lynx-apartments',
    title: 'Lynx Apartments',
    description: 'Full MEP services for upscale residential development featuring smart building automation and energy-efficient systems.',
    image: lynxApartmentsImg,
    categories: ['Residential'],
    link: '/project/lynx-apartments'
  },
  {
    id: 'origen',
    title: 'Origen Enterprises',
    description: 'Industrial MEP systems for manufacturing facility including process utilities, electrical infrastructure, and specialized ventilation systems.',
    image: origenImg,
    categories: ['Industrial'],
    link: '/project/origen'
  },
  {
    id: 'ravine-dairies',
    title: 'Ravine Dairies Processing Plant',
    description: 'Specialized refrigeration and process piping systems for dairy processing facility with strict hygiene requirements.',
    image: ravineDairiesImg,
    categories: ['Industrial'],
    link: '/project/ravine-dairies'
  },
  {
    id: 'rosita-apartments',
    title: 'Rosita Apartments',
    description: 'Advanced residential facility MEP systems including modern utilities, emergency power, and specialized HVAC.',
    image: rositaImg,
    categories: ['Residential'],
    link: '/project/rosita-apartments'
  },
  {
    id: 'sanergy-facilities',
    title: 'Sanergy Limited',
    description: 'Innovative waste processing facility with custom ventilation and biogas recovery systems for sustainable operations.',
    image: sanergyImg,
    categories: ['Industrial'],
    link: '/project/sanergy-facilities'
  },
  {
    id: 'sanofi-office',
    title: 'Sanofi Office Fitout',
    description: 'Modern office fitout with specialized HVAC systems and utilities for pharmaceutical company headquarters.',
    image: sanofiImg,
    categories: ['Commercial'],
    link: '/project/sanofi-office'
  },
  {
    id: 'sc-johnson-facility',
    title: 'SC Johnson Manufacturing Plant',
    description: 'Complete turnkey MEP solution for consumer goods manufacturing facility with automated production line support.',
    image: scJohnsonImg,
    categories: ['Industrial'],
    link: '/project/sc-johnson-facility'
  },
  {
    id: 'vert-processing',
    title: 'Vert Food and Vegetable Processing Factory',
    description: 'Complete MEP infrastructure for food processing facility including specialized refrigeration, ventilation, and process utilities.',
    image: vertImg,
    categories: ['Industrial'],
    link: '/project/vert-processing'
  }
];

const ProjectsGrid: FC<ProjectsGridProps> = ({ activeFilter }) => {
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.categories.includes(activeFilter));

  if (filteredProjects.length === 0) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-neutral-600">
              No projects found for the selected category.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 md:space-y-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;