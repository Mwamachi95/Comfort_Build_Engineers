import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Disclosure, Transition } from '@headlessui/react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import CBEIconUrl from '../../assets/icons/logo/CBE-Icon.svg';

const services = [
  { name: 'Mechanical', href: '/services/mechanical' },
  { name: 'Electrical', href: '/services/electrical' },
  { name: 'Plumbing', href: '/services/plumbing' },
  { name: 'Factory Planning', href: '/services/factory-planning' },
  { name: 'Project Management', href: '/services/project-management' },
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Projects', href: '/projects' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Contact', href: '/contact' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <Disclosure as="div" className="max-w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between py-3 md:py-4">
              {/* Left Section - Logo */}
              <Link to="/" className="flex items-center space-x-3 sm:space-x-4">
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
                    return (
                      <Menu as="div" key={item.name} className="relative">
                        <Menu.Button className="flex items-center space-x-1 px-2 md:px-3 py-2 text-base md:text-lg font-medium text-neutral-700 hover:text-primary-red transition-all duration-200 font-heading">
                          <span>{item.name}</span>
                          <ChevronDownIcon className="h-4 w-4" />
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-neutral-200 focus:outline-none z-50">
                            <div className="py-2">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/services"
                                    className={classNames(
                                      active ? 'bg-neutral-50 text-primary-red' : 'text-neutral-700',
                                      'block px-4 py-2 text-sm font-medium hover:text-primary-red transition-colors duration-200'
                                    )}
                                  >
                                    All Services
                                  </Link>
                                )}
                              </Menu.Item>
                              <div className="border-t border-neutral-100 my-1" />
                              {services.map((service) => (
                                <Menu.Item key={service.name}>
                                  {({ active }) => (
                                    <Link
                                      to={service.href}
                                      className={classNames(
                                        active ? 'bg-neutral-50 text-primary-red' : 'text-neutral-700',
                                        'block px-4 py-2 text-sm hover:text-primary-red transition-colors duration-200'
                                      )}
                                    >
                                      {service.name}
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    );
                  }
                  
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="px-2 md:px-3 py-2 text-base md:text-lg font-medium text-neutral-700 hover:text-primary-red transition-colors duration-200 font-heading"
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
                  className="bg-primary-red text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-md text-sm md:text-base font-semibold hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-red focus:ring-offset-2 font-heading whitespace-nowrap"
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
              <Disclosure.Panel className="xl:hidden border-t border-neutral-200">
                <div className="px-4 pt-2 pb-6 space-y-1">
                  {navigation.map((item) => {
                    if (item.hasDropdown) {
                      return (
                        <div key={item.name} className="space-y-1">
                          <Link
                            to={item.href}
                            className="block px-3 py-3 text-base sm:text-lg font-medium text-neutral-700 hover:text-primary-red hover:bg-neutral-50 rounded-md transition-colors duration-200 font-heading"
                          >
                            {item.name}
                          </Link>
                          <div className="pl-6 space-y-1">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block px-3 py-2 text-sm sm:text-base text-neutral-600 hover:text-primary-red hover:bg-neutral-50 rounded-md transition-colors duration-200 font-heading"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-3 py-3 text-base sm:text-lg font-medium text-neutral-700 hover:text-primary-red hover:bg-neutral-50 rounded-md transition-colors duration-200 font-heading"
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  
                  {/* Mobile CTA Button */}
                  <div className="pt-4 border-t border-neutral-200">
                    <Link
                      to="/contact"
                      className="block w-full text-center bg-primary-red text-white px-6 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-red-700 transition-colors duration-200 font-heading"
                    >
                      Request a Quote
                    </Link>
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