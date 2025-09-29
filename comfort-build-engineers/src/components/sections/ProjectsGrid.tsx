import { type FC } from 'react';
import ProjectCard, { type Project } from './ProjectCard';
import type { FilterCategory } from './ProjectsFilterBar';

// Import project images
import bravaFoodsImg from '../../assets/images/Projects/placeholder-images/brava-foods.jpg';
import ecobankImg from '../../assets/images/Projects/placeholder-images/ecobank-placeholder.jpg';
import lynxApartmentsImg from '../../assets/images/Projects/placeholder-images/lynx-apartments.jpg';
import nairobiClubImg from '../../assets/images/Projects/placeholder-images/nairobi-club-placeholder.jpg';
import ravineDairiesImg from '../../assets/images/Projects/placeholder-images/ravine-dairies.jpg';
import rositaImg from '../../assets/images/Projects/placeholder-images/rosita-placeholder.jpeg';
import sanergyImg from '../../assets/images/Projects/placeholder-images/sanergy.jpg';
import sanofiImg from '../../assets/images/Projects/placeholder-images/sanofi-placeholder.jpg';
import scJohnsonImg from '../../assets/images/Projects/placeholder-images/sc-johnson.jpg';
import vegaImg from '../../assets/images/Projects/placeholder-images/vega-placeholder.jpg';
import vertImg from '../../assets/images/Projects/placeholder-images/vert-placeholder.jpg';

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
    id: 'lynx-apartments',
    title: 'Lynx Apartments',
    description: 'Full MEP services for upscale residential development featuring smart building automation and energy-efficient systems.',
    image: lynxApartmentsImg,
    categories: ['Residential'],
    link: '/project/lynx-apartments'
  },
  {
    id: 'nairobi-club',
    title: 'Nairobi Club Renovation',
    description: 'Heritage building upgrade with modern MEP systems while preserving historical architecture and character.',
    image: nairobiClubImg,
    categories: ['Commercial'],
    link: '/project/nairobi-club'
  },
  {
    id: 'ravine-dairies',
    title: 'Ravine Dairies Processing Plant',
    description: 'Specialized refrigeration and process piping systems for dairy processing facility with strict hygiene requirements.',
    image: ravineDairiesImg,
    categories: ['Factory Planning'],
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
    categories: ['Design-Build', 'Industrial'],
    link: '/project/sc-johnson-facility'
  },
  {
    id: 'vega-offices',
    title: 'Vega Limited',
    description: 'Modern office complex with sustainable MEP systems, smart building controls, and energy-efficient solutions.',
    image: vegaImg,
    categories: ['Industrial', 'Project Management'],
    link: '/project/vega-offices'
  },
  {
    id: 'vert-processing',
    title: 'Vert Food and Vegetable Processing Factory',
    description: 'Complete MEP infrastructure for food processing facility including specialized refrigeration, ventilation, and process utilities.',
    image: vertImg,
    categories: ['Project Management'],
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