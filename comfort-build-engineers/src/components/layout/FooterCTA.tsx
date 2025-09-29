import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ClipboardIcon } from '@heroicons/react/24/outline';

const FooterCTA: React.FC = () => {
  const location = useLocation();
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Get page-specific background color
  const getBackgroundColor = () => {
    if (location.pathname === '/') {
      return '#A43D39'; // Home page color
    }
    if (location.pathname === '/contact') {
      return '#A67458'; // Contact page color
    }
    if (location.pathname === '/about') {
      return '#D9A91A'; // Golden yellow for About Us
    }
    if (location.pathname.startsWith('/projects') || location.pathname.startsWith('/project/')) {
      return '#5A7E8C'; // Green blue for Projects
    }
    if (location.pathname === '/faqs') {
      return '#808C27'; // Green yellow for FAQs
    }
    if (location.pathname === '/services' || location.pathname.startsWith('/services#')) {
      return '#82AD9C'; // Green for Services
    }
    // Default color (Home page fallback)
    return '#A43D39';
  };

  // Get page-specific button colors
  const getButtonColors = () => {
    if (location.pathname === '/') {
      return {
        default: '#8B3530',
        hover: '#A43D39',
        copied: '#F2F2F2'
      };
    }
    if (location.pathname === '/contact') {
      return {
        default: '#8F6049',
        hover: '#A67458',
        copied: '#F2F2F2'
      };
    }
    if (location.pathname === '/about') {
      return {
        default: '#B8901C',
        hover: '#D9A91A',
        copied: '#F2F2F2'
      };
    }
    if (location.pathname.startsWith('/projects') || location.pathname.startsWith('/project/')) {
      return {
        default: '#4A6B75',
        hover: '#759BB2',
        copied: '#F2F2F2'
      };
    }
    if (location.pathname === '/faqs') {
      return {
        default: '#6B7521',
        hover: '#A3B03F',
        copied: '#F2F2F2'
      };
    }
    if (location.pathname === '/services' || location.pathname.startsWith('/services#')) {
      return {
        default: '#6B9688',
        hover: '#A8C4B8',
        copied: '#F2F2F2'
      };
    }
    // Default colors (Home page fallback)
    return {
      default: '#8B3530',
      hover: '#A43D39',
      copied: '#F2F2F2'
    };
  };

  const backgroundColors = getBackgroundColor();
  const buttonColors = getButtonColors();

  const getPageMessage = (pathname: string): string => {
    // Handle exact matches and patterns
    if (pathname === '/') {
      return "Ready to bring your project to life? We'd love to hear from you.";
    }
    if (pathname === '/about') {
      return "Ready to meet the team behind your next successful project?";
    }
    if (pathname.startsWith('/projects')) {
      return "Planning something similar? Let's discuss your vision and requirements.";
    }
    if (pathname.startsWith('/services')) {
      return "Let's explore how our expertise can solve your specific challenges.";
    }
    if (pathname === '/faqs') {
      return "Still have questions? We'd love to provide personalized answers.";
    }
    if (pathname.startsWith('/blog')) {
      return "Want to discuss how this applies to your project? We're here to help.";
    }
    if (pathname === '/contact') {
      return "Ready to bring your project to life? We'd love to hear from you.";
    }
    
    // Default fallback message
    return "Ready to bring your project to life? We'd love to hear from you.";
  };

  const handleCopyEmail = async () => {
    const email = 'info@cbengineers.co.ke';
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="section-container">
        <div 
          className="rounded-2xl py-12 md:py-16"
          style={{ backgroundColor: backgroundColors }}
        >
          <div className="max-w-4xl mx-auto text-center space-y-6 px-6 md:px-8">
          {/* Headline */}
          <h2 className="font-bold font-heading text-white" style={{ fontSize: '48px' }}>
            Let's Connect
          </h2>
          
          {/* Dynamic Message */}
          <p className="text-neutral-100 max-w-3xl mx-auto" style={{ fontSize: '16px' }}>
            {getPageMessage(location.pathname)}
          </p>
          
          {/* Email Button */}
          <div className="pt-4">
            <button
              onClick={handleCopyEmail}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 font-heading"
              style={{
                backgroundColor: copied ? buttonColors.copied : (isHovered ? buttonColors.hover : buttonColors.default),
                color: copied ? '#333333' : (isHovered ? '#333333' : 'white'),
                width: '280px',
                height: '60px'
              }}
            >
              {copied ? (
                <>
                  <span className="text-xl">😊</span>
                  <span>Copied!</span>
                </>
              ) : isHovered ? (
                <>
                  <ClipboardIcon className="h-5 w-5" />
                  <span>Copy email address</span>
                </>
              ) : (
                <span>info@cbengineers.co.ke</span>
              )}
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;