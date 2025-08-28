import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure, Transition } from '@headlessui/react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import CBEIconUrl from '../../assets/icons/logo/CBE-Icon.svg';

const services = [
  { name: 'Mechanical', href: '/services#mechanical' },
  { name: 'Plumbing', href: '/services#plumbing' },
  { name: 'Electrical', href: '/services#electrical' },
  { name: 'Factory Planning', href: '/services#factory-planning' },
  { name: 'Project Management', href: '/services#project-management' },
  { name: 'Design & Build', href: '/services#design-build' },
];

const projects = [
  { name: 'Commercial', href: '/projects/commercial' },
  { name: 'Design-Build', href: '/projects/design-build' },
  { name: 'Factory Planning', href: '/projects/factory-planning' },
  { name: 'Industrial', href: '/projects/industrial' },
  { name: 'Project Management', href: '/projects/project-management' },
  { name: 'Residential', href: '/projects/residential' },
];

const navigation = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Projects', href: '/projects', hasDropdown: true },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<Record<string, boolean>>({});
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();

  // Get page-specific hover color for navigation links
  const getPageHoverColor = (href: string) => {
    if (href === '/about') return '#D9A91A';
    if (href === '/services' || href.startsWith('/services#')) return '#82AD9C';
    if (href === '/projects' || href.startsWith('/projects/')) return '#5A7E8C';
    if (href === '/faqs') return '#808C27';
    if (href === '/contact') return '#A67458';
    return '#A43D39'; // Default home color
  };

  // Check if a link is active based on current location
  const isLinkActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href === '/about' && location.pathname === '/about') return true;
    if (href === '/services' && (location.pathname === '/services' || location.pathname.startsWith('/services#'))) return true;
    if (href === '/projects' && (location.pathname === '/projects' || location.pathname.startsWith('/projects/'))) return true;
    if (href === '/faqs' && location.pathname === '/faqs') return true;
    if (href === '/contact' && location.pathname === '/contact') return true;
    
    // Check for services hash links
    if (href.startsWith('/services#') && location.pathname === '/services' && location.hash === href.substring(9)) return true;
    
    // Check for project sub-routes
    if (href.startsWith('/projects/') && location.pathname === href) return true;
    
    return false;
  };

  // Get active page color (same as hover color)
  const getActivePageColor = (href: string) => {
    return getPageHoverColor(href);
  };

  // Get final link color based on active and hover states
  const getLinkColor = (href: string) => {
    if (isLinkActive(href)) {
      return getActivePageColor(href);
    }
    if (hoveredLink === href) {
      return getPageHoverColor(href);
    }
    return '#525252'; // Default neutral color
  };

  // Get page-specific CTA color
  const getCtaColor = () => {
    if (location.pathname === '/') {
      return {
        bg: '#A43D39',
        hover: '#8B3530',
        ring: '#A43D39'
      };
    }
    if (location.pathname === '/contact') {
      return {
        bg: '#A67458',
        hover: '#8F6049',
        ring: '#A67458'
      };
    }
    if (location.pathname === '/about') {
      return {
        bg: '#D9A91A',
        hover: '#B8901C',
        ring: '#D9A91A'
      };
    }
    if (location.pathname.startsWith('/projects')) {
      return {
        bg: '#5A7E8C',
        hover: '#4A6B75',
        ring: '#5A7E8C'
      };
    }
    if (location.pathname === '/faqs') {
      return {
        bg: '#808C27',
        hover: '#6B7521',
        ring: '#808C27'
      };
    }
    if (location.pathname === '/services' || location.pathname.startsWith('/services#')) {
      return {
        bg: '#82AD9C',
        hover: '#6B9688',
        ring: '#82AD9C'
      };
    }
    // Default colors (Home page fallback)
    return {
      bg: '#A43D39',
      hover: '#8B3530',
      ring: '#A43D39'
    };
  };

  const ctaColors = getCtaColor();

  const toggleMobileDropdown = (itemName: string) => {
    setOpenMobileDropdowns(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <Disclosure as="div" className="max-w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {({ open, close }) => (
          <>
            <div className="flex items-center justify-between py-3 md:py-4">
              {/* Left Section - Logo */}
              <Link 
                to="/" 
                onClick={() => open && close()}
                className="flex items-center space-x-3 sm:space-x-4"
              >
                <img
                  src={CBEIconUrl}
                  alt="CBE Logo"
                  className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
                />
                <div className="flex flex-col">
                  <span className="hidden sm:block text-lg sm:text-xl md:text-2xl font-bold font-heading text-black">
                    Comfort Build Engineers
                  </span>
                </div>
              </Link>


              {/* Desktop Navigation - Full */}
              <div className="hidden xl:flex items-center space-x-2 lg:space-x-3 flex-1 justify-end mr-4 lg:mr-8">
                {navigation.map((item) => {
                  if (item.hasDropdown) {
                    const isServices = item.name === 'Services';
                    const dropdownItems = isServices ? services : projects;
                    
                    return (
                      <div key={item.name} className="relative group">
                        <Link
                          to={item.href}
                          className="flex items-center space-x-1 px-2 md:px-3 py-2 text-base md:text-lg font-medium transition-all duration-200 font-heading"
                          style={{
                            color: getLinkColor(item.href)
                          }}
                          onMouseEnter={() => setHoveredLink(item.href)}
                          onMouseLeave={() => setHoveredLink(null)}
                        >
                          <span>{item.name}</span>
                          <ChevronDownIcon className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                        </Link>
                        <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-neutral-200 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100">
                          <div className="py-2">
                            <Link
                              to={item.href}
                              className="block px-4 py-2 text-sm font-medium hover:bg-neutral-50 transition-colors duration-200"
                              style={{
                                color: getLinkColor(item.href)
                              }}
                              onMouseEnter={() => setHoveredLink(item.href)}
                              onMouseLeave={() => setHoveredLink(null)}
                            >
                              {isServices ? 'All Services' : 'All Projects'}
                            </Link>
                            <div className="border-t border-neutral-100 my-1" />
                            {dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="block px-4 py-2 text-sm hover:bg-neutral-50 transition-colors duration-200"
                                style={{
                                  color: getLinkColor(dropdownItem.href)
                                }}
                                onMouseEnter={() => setHoveredLink(dropdownItem.href)}
                                onMouseLeave={() => setHoveredLink(null)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="px-2 md:px-3 py-2 text-base md:text-lg font-medium transition-colors duration-200 font-heading"
                      style={{
                        color: getLinkColor(item.href)
                      }}
                      onMouseEnter={() => setHoveredLink(item.href)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* Right Section - CTA Button */}
              <div className="hidden xl:block">
                <Link
                  to="/contact"
                  className="text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-md text-sm md:text-base font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 font-heading whitespace-nowrap"
                  style={{
                    backgroundColor: typeof ctaColors.bg === 'string' ? ctaColors.bg : undefined,
                    focusRingColor: ctaColors.ring
                  }}
                  onMouseEnter={(e) => {
                    if (typeof ctaColors.hover === 'string') {
                      (e.target as HTMLElement).style.backgroundColor = ctaColors.hover;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (typeof ctaColors.bg === 'string') {
                      (e.target as HTMLElement).style.backgroundColor = ctaColors.bg;
                    }
                  }}
                >
                  Request a Quote
                </Link>
              </div>

              {/* Mobile, Tablet & iPad menu button */}
              <Disclosure.Button className="xl:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-primary-red hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-red">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>

            {/* Mobile Navigation Panel */}
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Disclosure.Panel className="xl:hidden fixed inset-0 top-[69px] sm:top-[77px] md:top-[81px] bg-white z-40 flex flex-col">
                <div className="flex-1 px-4 pt-4 pb-6 space-y-1 overflow-y-auto">
                  {/* Home Link */}
                  <Link
                    to="/"
                    onClick={() => close()}
                    className="block px-3 py-3 text-base sm:text-lg font-medium hover:bg-neutral-50 rounded-md transition-colors duration-200 font-heading"
                    style={{
                      color: getLinkColor('/')
                    }}
                    onMouseEnter={() => setHoveredLink('/')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    Home
                  </Link>
                  
                  {navigation.map((item) => {
                    if (item.hasDropdown) {
                      const isServices = item.name === 'Services';
                      const dropdownItems = isServices ? services : projects;
                      const isOpen = openMobileDropdowns[item.name] || false;
                      
                      return (
                        <div key={item.name} className="space-y-1">
                          <div className="flex items-center justify-between">
                            <Link
                              to={item.href}
                              onClick={() => close()}
                              className="flex-1 block px-3 py-3 text-base sm:text-lg font-medium hover:bg-neutral-50 rounded-md transition-colors duration-200 font-heading"
                              style={{
                                color: getLinkColor(item.href)
                              }}
                              onMouseEnter={() => setHoveredLink(item.href)}
                              onMouseLeave={() => setHoveredLink(null)}
                            >
                              {item.name}
                            </Link>
                            <button
                              onClick={() => toggleMobileDropdown(item.name)}
                              className="p-2 transition-colors duration-200"
                              style={{
                                color: getLinkColor(item.href)
                              }}
                              onMouseEnter={() => setHoveredLink(item.href)}
                              onMouseLeave={() => setHoveredLink(null)}
                              aria-label={`Toggle ${item.name} dropdown`}
                            >
                              <ChevronDownIcon 
                                className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                              />
                            </button>
                          </div>
                          {isOpen && (
                            <div className="pl-6 space-y-1">
                              {dropdownItems.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.href}
                                  onClick={() => close()}
                                  className="block px-3 py-2 text-sm sm:text-base hover:bg-neutral-50 rounded-md transition-colors duration-200 font-heading"
                                  style={{
                                    color: getLinkColor(dropdownItem.href)
                                  }}
                                  onMouseEnter={() => setHoveredLink(dropdownItem.href)}
                                  onMouseLeave={() => setHoveredLink(null)}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }
                    
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => close()}
                        className="block px-3 py-3 text-base sm:text-lg font-medium hover:bg-neutral-50 rounded-md transition-colors duration-200 font-heading"
                        style={{
                          color: getLinkColor(item.href)
                        }}
                        onMouseEnter={() => setHoveredLink(item.href)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  
                  {/* Mobile CTA Button - Right after Contact */}
                  <div className="pt-4">
                    <Link
                      to="/contact"
                      onClick={() => close()}
                      className="block w-full text-center text-white px-6 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold transition-colors duration-200 font-heading"
                      style={{
                        backgroundColor: typeof ctaColors.bg === 'string' ? ctaColors.bg : undefined
                      }}
                      onMouseEnter={(e) => {
                        if (typeof ctaColors.hover === 'string') {
                          (e.target as HTMLElement).style.backgroundColor = ctaColors.hover;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (typeof ctaColors.bg === 'string') {
                          (e.target as HTMLElement).style.backgroundColor = ctaColors.bg;
                        }
                      }}
                    >
                      Request a Quote
                    </Link>
                  </div>
                </div>
                
                {/* Social Media Icons - Bottom */}
                <div className="px-4 pb-6">
                  
                  {/* Social Media Icons */}
                  <div className="border-t border-neutral-200 pt-6">
                    <div className="flex justify-center space-x-6">
                      <a
                        href="https://linkedin.com/company/comfort-build-engineers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-primary-red transition-colors duration-200"
                        aria-label="LinkedIn"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a
                        href="https://facebook.com/comfortbuildengineers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-primary-red transition-colors duration-200"
                        aria-label="Facebook"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </nav>
  );
};

export default Navbar;