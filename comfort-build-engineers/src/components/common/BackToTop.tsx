import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Get page-specific colors based on Navbar.tsx color scheme
  const getPageColors = () => {
    if (location.pathname === '/') {
      return {
        bg: '#A43D39',
        hover: '#8B3530'
      };
    }
    if (location.pathname === '/contact') {
      return {
        bg: '#A67458',
        hover: '#8F6049'
      };
    }
    if (location.pathname === '/about') {
      return {
        bg: '#D9A91A',
        hover: '#B8901C'
      };
    }
    if (location.pathname.startsWith('/projects') || location.pathname.startsWith('/project/')) {
      return {
        bg: '#5A7E8C',
        hover: '#4A6B75'
      };
    }
    if (location.pathname.startsWith('/blog')) {
      return {
        bg: '#808C27',
        hover: '#6B7521'
      };
    }
    if (location.pathname === '/services' || location.pathname.startsWith('/services#')) {
      return {
        bg: '#82AD9C',
        hover: '#6B9688'
      };
    }
    // Default colors (Home page fallback)
    return {
      bg: '#A43D39',
      hover: '#8B3530'
    };
  };

  const colors = getPageColors();

  // Show button when user scrolls down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        flex items-center justify-center
        text-white shadow-lg
        transition-all duration-300 ease-in-out
        transform hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
      `}
      style={{
        backgroundColor: colors.bg
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLElement).style.backgroundColor = colors.hover;
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLElement).style.backgroundColor = colors.bg;
      }}
      aria-label="Back to top"
      title="Back to top"
    >
      <ChevronUpIcon className="w-6 h-6" />
    </button>
  );
};

export default BackToTop;