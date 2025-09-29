import { type FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

type FilterCategory =
  | 'All'
  | 'Commercial'
  | 'Design-Build'
  | 'Factory Planning'
  | 'Industrial'
  | 'Project Management'
  | 'Residential';

interface ProjectsFilterBarProps {
  onFilterChange?: (filter: FilterCategory) => void;
  activeFilter: FilterCategory;
}

const filterCategories: FilterCategory[] = [
  'All',
  'Commercial',
  'Design-Build',
  'Factory Planning',
  'Industrial',
  'Project Management',
  'Residential'
];

const ProjectsFilterBar: FC<ProjectsFilterBarProps> = ({
  onFilterChange,
  activeFilter
}) => {
  const navigate = useNavigate();

  // Convert FilterCategory to URL slug
  const getCategorySlug = (category: FilterCategory): string => {
    const slugMap: Record<FilterCategory, string> = {
      'All': '',
      'Commercial': 'commercial',
      'Design-Build': 'design-build',
      'Factory Planning': 'factory-planning',
      'Industrial': 'industrial',
      'Project Management': 'project-management',
      'Residential': 'residential'
    };
    return slugMap[category];
  };

  const handleFilterClick = (filter: FilterCategory) => {
    onFilterChange?.(filter);

    // Navigate to the appropriate URL
    const slug = getCategorySlug(filter);
    if (slug) {
      navigate(`/projects/${slug}`);
    } else {
      navigate('/projects');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, filter: FilterCategory) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleFilterClick(filter);
    }
  };

  return (
    <section className="bg-white py-12 border-b border-neutral-100" role="region" aria-label="Project filter options">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start">
          <div className="flex flex-wrap justify-start gap-3 md:gap-4 max-w-full">
            {filterCategories.map((category) => {
              const isActive = activeFilter === category;

              return (
                <motion.button
                  key={category}
                  onClick={() => handleFilterClick(category)}
                  onKeyDown={(e) => handleKeyDown(e, category)}
                  className={`
                    px-6 py-3 rounded-full text-sm font-semibold font-heading
                    transition-colors duration-200 flex-shrink-0 min-w-fit
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                    ${isActive
                      ? 'text-white shadow-md focus:ring-[#5A7E8C]'
                      : 'text-neutral-700 bg-neutral-100 hover:bg-neutral-200 focus:ring-neutral-400'
                    }
                  `}
                  style={{
                    backgroundColor: isActive ? '#5A7E8C' : undefined,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.target as HTMLElement).style.backgroundColor = '#e5e7eb';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.target as HTMLElement).style.backgroundColor = '#f5f5f5';
                    }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: filterCategories.indexOf(category) * 0.05
                  }}
                  aria-pressed={isActive}
                  aria-label={`Filter projects by ${category === 'All' ? 'all categories' : category}`}
                >
                  {category}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Screen reader announcement for filter changes */}
        <div
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        >
          {activeFilter === 'All'
            ? 'Showing all projects'
            : `Showing ${activeFilter} projects`
          }
        </div>
      </div>
    </section>
  );
};

export default ProjectsFilterBar;
export type { FilterCategory };