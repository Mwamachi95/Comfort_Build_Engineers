import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { services } from '../../data/services';

interface NavigationProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ mobile = false, onItemClick }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const handleItemClick = () => {
    if (onItemClick) onItemClick();
    setIsServicesOpen(false);
    setIsProjectsOpen(false);
  };

  const baseClasses = mobile
    ? 'block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-red hover:bg-neutral-50 rounded-md'
    : 'px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary-red transition-colors duration-200';

  const dropdownClasses = mobile
    ? 'pl-6 block px-3 py-2 text-sm text-neutral-600 hover:text-primary-red hover:bg-neutral-50 rounded-md'
    : 'block px-4 py-2 text-sm text-neutral-700 hover:text-primary-red hover:bg-neutral-50';

  if (mobile) {
    return (
      <nav className="space-y-1">
        <Link to="/" className={baseClasses} onClick={handleItemClick}>
          Home
        </Link>
        <Link to="/about" className={baseClasses} onClick={handleItemClick}>
          About Us
        </Link>
        
        {/* Mobile Services Dropdown */}
        <div>
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className={`${baseClasses} w-full text-left flex justify-between items-center`}
          >
            Services
            <ChevronDownIcon className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          {isServicesOpen && (
            <div className="mt-1 space-y-1">
              <Link to="/services" className={dropdownClasses} onClick={handleItemClick}>
                All Services
              </Link>
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className={dropdownClasses}
                  onClick={handleItemClick}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Projects Dropdown */}
        <div>
          <button
            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
            className={`${baseClasses} w-full text-left flex justify-between items-center`}
          >
            Projects
            <ChevronDownIcon className={`h-4 w-4 transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
          </button>
          {isProjectsOpen && (
            <div className="mt-1 space-y-1">
              <Link to="/projects" className={dropdownClasses} onClick={handleItemClick}>
                All Projects
              </Link>
              <Link to="/projects/commercial" className={dropdownClasses} onClick={handleItemClick}>
                Commercial
              </Link>
              <Link to="/projects/industrial" className={dropdownClasses} onClick={handleItemClick}>
                Industrial
              </Link>
              <Link to="/projects/residential" className={dropdownClasses} onClick={handleItemClick}>
                Residential
              </Link>
            </div>
          )}
        </div>

        <Link to="/faqs" className={baseClasses} onClick={handleItemClick}>
          FAQs
        </Link>
        <Link to="/blog" className={baseClasses} onClick={handleItemClick}>
          Blog
        </Link>
        <Link to="/contact" className={baseClasses} onClick={handleItemClick}>
          Contact
        </Link>
      </nav>
    );
  }

  return (
    <nav className="flex items-center space-x-8">
      <Link to="/" className={baseClasses}>
        Home
      </Link>
      <Link to="/about" className={baseClasses}>
        About Us
      </Link>
      
      {/* Desktop Services Dropdown */}
      <div className="relative group">
        <button className={`${baseClasses} flex items-center space-x-1`}>
          <span>Services</span>
          <ChevronDownIcon className="h-4 w-4" />
        </button>
        <div className="absolute top-full left-0 w-64 bg-white rounded-md shadow-lg border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="py-2">
            <Link to="/services" className={dropdownClasses}>
              All Services
            </Link>
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className={dropdownClasses}
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Projects Dropdown */}
      <div className="relative group">
        <button className={`${baseClasses} flex items-center space-x-1`}>
          <span>Projects</span>
          <ChevronDownIcon className="h-4 w-4" />
        </button>
        <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="py-2">
            <Link to="/projects" className={dropdownClasses}>
              All Projects
            </Link>
            <Link to="/projects/commercial" className={dropdownClasses}>
              Commercial
            </Link>
            <Link to="/projects/industrial" className={dropdownClasses}>
              Industrial
            </Link>
            <Link to="/projects/residential" className={dropdownClasses}>
              Residential
            </Link>
          </div>
        </div>
      </div>

      <Link to="/faqs" className={baseClasses}>
        FAQs
      </Link>
      <Link to="/blog" className={baseClasses}>
        Blog
      </Link>
      <Link to="/contact" className={`${baseClasses} btn-primary`}>
        Contact
      </Link>
    </nav>
  );
};

export default Navigation;