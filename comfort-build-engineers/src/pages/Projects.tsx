import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectsHero from '../components/sections/ProjectsHero';
import ProjectsFilterBar, { type FilterCategory } from '../components/sections/ProjectsFilterBar';
import ProjectsGrid from '../components/sections/ProjectsGrid';

const Projects: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  // Convert URL category to FilterCategory
  const getCategoryFromUrl = (urlCategory?: string): FilterCategory => {
    if (!urlCategory) return 'All';

    const categoryMap: Record<string, FilterCategory> = {
      'commercial': 'Commercial',
      'design-build': 'Design-Build',
      'factory-planning': 'Factory Planning',
      'industrial': 'Industrial',
      'project-management': 'Project Management',
      'residential': 'Residential'
    };

    return categoryMap[urlCategory] || 'All';
  };

  // Set initial filter based on URL parameter
  useEffect(() => {
    const initialFilter = getCategoryFromUrl(category);
    setActiveFilter(initialFilter);
  }, [category]);

  const handleFilterChange = (filter: FilterCategory) => {
    setActiveFilter(filter);
  };

  return (
    <div className="min-h-screen bg-white">
      <ProjectsHero />
      <ProjectsFilterBar
        onFilterChange={handleFilterChange}
        activeFilter={activeFilter}
      />
      <ProjectsGrid activeFilter={activeFilter} />
    </div>
  );
};

export default Projects;