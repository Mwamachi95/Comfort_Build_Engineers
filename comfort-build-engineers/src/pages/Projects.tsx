import React, { useState } from 'react';
import ProjectsHero from '../components/sections/ProjectsHero';
import ProjectsFilterBar, { type FilterCategory } from '../components/sections/ProjectsFilterBar';
import ProjectsGrid from '../components/sections/ProjectsGrid';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const handleFilterChange = (filter: FilterCategory) => {
    setActiveFilter(filter);
  };

  return (
    <div className="min-h-screen bg-white">
      <ProjectsHero />
      <ProjectsFilterBar
        onFilterChange={handleFilterChange}
        initialFilter={activeFilter}
      />
      <ProjectsGrid activeFilter={activeFilter} />
    </div>
  );
};

export default Projects;