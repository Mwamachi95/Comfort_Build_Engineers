import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';
import { contactInfo } from '../../data/contact';
import { services } from '../../data/services';
import CBEIconUrl from '../../assets/icons/logo/CBE-Icon.svg';

const projects = [
  { name: 'Commercial', href: '/projects/commercial' },
  { name: 'Design-Build', href: '/projects/design-build' },
  { name: 'Factory Planning', href: '/projects/factory-planning' },
  { name: 'Industrial', href: '/projects/industrial' },
  { name: 'Project Management', href: '/projects/project-management' },
  { name: 'Residential', href: '/projects/residential' },
];

const Footer: React.FC = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  // Get page-specific icon and hover colors
  const getPageColors = () => {
    if (location.pathname === '/') {
      return '#A43D39'; // Home page color
    }
    if (location.pathname === '/contact') {
      return '#A67458'; // Contact page color
    }
    if (location.pathname === '/about') {
      return '#D9A91A'; // Golden yellow
    }
    if (location.pathname.startsWith('/projects') || location.pathname.startsWith('/project/')) {
      return '#5A7E8C'; // Green blue
    }
    if (location.pathname === '/faqs') {
      return '#808C27'; // Green yellow
    }
    if (location.pathname === '/services' || location.pathname.startsWith('/services#')) {
      return '#82AD9C'; // Green
    }
    // Default color (Home page fallback)
    return '#A43D39';
  };

  const pageColor = getPageColors();

  return (
    <footer className="bg-white text-neutral-800">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Information */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src={CBEIconUrl}
                alt="CBE Logo"
                className="h-10 w-10"
              />
              <h3 className="ml-3 text-lg font-semibold font-heading text-neutral-800">
                Comfort Build Engineers
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-neutral-600 text-sm">
                Professional engineering solutions for mechanical, electrical, plumbing services, 
                factory planning, and project management in Kenya.
              </p>
              <div className="space-y-2">
                <p className="text-xs text-neutral-500">
                  Licensed Engineering Firm
                </p>
                <p className="text-xs text-neutral-500">
                  Registration No: EBK/2024/001
                </p>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-heading text-neutral-800">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors duration-200 text-sm relative group"
                >
                  <span className="relative">
                    All Services
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="text-neutral-600 hover:text-neutral-800 transition-colors duration-200 text-sm relative group"
                  >
                    <span className="relative">
                      {service.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-heading text-neutral-800">Projects</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/projects"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors duration-200 text-sm relative group"
                >
                  <span className="relative">
                    All Projects
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              {projects.map((project) => (
                <li key={project.name}>
                  <Link
                    to={project.href}
                    className="text-neutral-600 hover:text-neutral-800 transition-colors duration-200 text-sm relative group"
                  >
                    <span className="relative">
                      {project.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-heading text-neutral-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors duration-200 text-sm relative group"
                >
                  <span className="relative">
                    About Us
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors duration-200 text-sm relative group"
                >
                  <span className="relative">
                    Our Projects
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors duration-200 text-sm relative group"
                >
                  <span className="relative">
                    FAQs
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors duration-200 text-sm relative group"
                >
                  <span className="relative">
                    Blog
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors duration-200 text-sm relative group"
                >
                  <span className="relative">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-heading text-neutral-800">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <PhoneIcon className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: pageColor }} />
                <div>
                  <a 
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="text-sm text-neutral-800 transition-colors duration-200"
                    style={{ '&:hover': { color: pageColor } }}
                    onMouseEnter={(e) => e.target.style.color = pageColor}
                    onMouseLeave={(e) => e.target.style.color = '#1F2937'}
                  >
                    {contactInfo.phone}
                  </a>
                  <p className="text-xs text-neutral-500">Main Line</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <PhoneIcon className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: pageColor }} />
                <div>
                  <a 
                    href={`tel:${contactInfo.emergencyContact.replace(/\s/g, '')}`}
                    className="text-sm text-neutral-800 transition-colors duration-200"
                    onMouseEnter={(e) => e.target.style.color = pageColor}
                    onMouseLeave={(e) => e.target.style.color = '#1F2937'}
                  >
                    {contactInfo.emergencyContact}
                  </a>
                  <p className="text-xs text-neutral-500">Emergency Line</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <EnvelopeIcon className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: pageColor }} />
                <div>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm text-neutral-800 transition-colors duration-200"
                    onMouseEnter={(e) => e.target.style.color = pageColor}
                    onMouseLeave={(e) => e.target.style.color = '#1F2937'}
                  >
                    {contactInfo.email}
                  </a>
                  <p className="text-xs text-neutral-500">General Inquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: pageColor }} />
                <div>
                  <p className="text-sm text-neutral-800">{contactInfo.address}</p>
                  <p className="text-xs text-neutral-500">Head Office</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <ClockIcon className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: pageColor }} />
                <div>
                  <p className="text-sm text-neutral-800">{contactInfo.officeHours}</p>
                  <p className="text-xs text-neutral-500">Business Hours</p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center space-x-4 pt-4">
                <p className="text-xs text-neutral-500">Follow Us:</p>
                <a
                  href="https://linkedin.com/company/comfort-build-engineers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 transition-colors duration-200"
                  aria-label="LinkedIn"
                  onMouseEnter={(e) => e.target.style.color = pageColor}
                  onMouseLeave={(e) => e.target.style.color = '#525252'}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com/comfortbuildengineers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 transition-colors duration-200"
                  aria-label="Facebook"
                  onMouseEnter={(e) => e.target.style.color = pageColor}
                  onMouseLeave={(e) => e.target.style.color = '#525252'}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-300 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-600">
              © {currentYear} Comfort Build Engineers. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-sm text-neutral-600">
              <span>Professional Engineering Services</span>
              <span className="hidden sm:inline">•</span>
              <span>Licensed & Insured</span>
              <span className="hidden sm:inline">•</span>
              <span>cbengineers.co.ke</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;