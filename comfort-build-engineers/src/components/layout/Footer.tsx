import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';
import { contactInfo } from '../../data/contact';
import { services } from '../../data/services';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold font-heading text-primary-red">
                CBE
              </div>
              <div className="ml-2">
                <div className="text-sm font-semibold">
                  Comfort Build
                </div>
                <div className="text-xs text-neutral-400">
                  Engineers
                </div>
              </div>
            </div>
            <p className="text-neutral-400 text-sm">
              Professional engineering solutions for mechanical, electrical, plumbing services, 
              factory planning, and project management in Kenya.
            </p>
            <div className="space-y-2">
              <p className="text-xs text-neutral-400">
                Licensed Engineering Firm
              </p>
              <p className="text-xs text-neutral-400">
                Registration No: EBK/2024/001
              </p>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-heading">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-neutral-400 hover:text-primary-yellow transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-heading">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-neutral-400 hover:text-primary-yellow transition-colors duration-200 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-neutral-400 hover:text-primary-yellow transition-colors duration-200 text-sm"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="text-neutral-400 hover:text-primary-yellow transition-colors duration-200 text-sm"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-neutral-400 hover:text-primary-yellow transition-colors duration-200 text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-neutral-400 hover:text-primary-yellow transition-colors duration-200 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-heading">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <PhoneIcon className="h-5 w-5 text-primary-yellow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">{contactInfo.phone}</p>
                  <p className="text-xs text-neutral-400">Main Line</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <PhoneIcon className="h-5 w-5 text-primary-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">{contactInfo.emergencyContact}</p>
                  <p className="text-xs text-neutral-400">Emergency Line</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-primary-yellow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">{contactInfo.email}</p>
                  <p className="text-xs text-neutral-400">General Inquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-primary-yellow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">{contactInfo.address}</p>
                  <p className="text-xs text-neutral-400">Head Office</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <ClockIcon className="h-5 w-5 text-primary-yellow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">{contactInfo.officeHours}</p>
                  <p className="text-xs text-neutral-400">Business Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-400">
              © {currentYear} Comfort Build Engineers. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <span>Professional Engineering Services</span>
              <span>•</span>
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>cbengineers.co.ke</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;