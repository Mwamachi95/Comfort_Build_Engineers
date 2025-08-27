import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { PlusIcon } from '@heroicons/react/24/outline';
import type { Service } from '../../types';

interface ServiceSegmentsGridProps {
  service: Service;
}

const ServiceSegmentsGrid: React.FC<ServiceSegmentsGridProps> = ({ service }) => {
  // Use service-specific state keys to ensure complete isolation
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [clickedCard, setClickedCard] = useState<string | null>(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const gridRef = useRef<HTMLDivElement>(null);
  const segments = service.segments;

  // Force complete state reset when service changes
  const serviceId = service.id;

  // Helper function to get icon area color (service color with opacity)
  const getIconAreaColor = (color: string) => {
    // Convert hex to rgba with 0.8 opacity
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return `rgba(${r}, ${g}, ${b}, 0.8)`;
  };

  // Reset state when service changes to prevent cross-service state persistence
  useEffect(() => {
    setHoveredCard(null);
    setClickedCard(null);
  }, [serviceId]);

  // Ensure clean initial state on mount
  useEffect(() => {
    setHoveredCard(null);
    setClickedCard(null);
  }, []);


  // Track window resize for consistent screen width detection
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close clicked card when clicking outside (touch devices only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (screenWidth <= 1024 && gridRef.current && !gridRef.current.contains(event.target as Node) && clickedCard) {
        setClickedCard(null);
        setHoveredCard(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [clickedCard, screenWidth]);

  // Mobile/Tablet: click only, Desktop: hover only  
  // Use service-prefixed segment IDs to prevent cross-service state bleeding
  const getSegmentKey = (segmentId: string) => `service_${serviceId}_segment_${segmentId}`;
  const getSegmentIdFromKey = (segmentKey: string | null) => {
    if (!segmentKey) return null;
    const prefix = `service_${serviceId}_segment_`;
    return segmentKey.startsWith(prefix) ? segmentKey.substring(prefix.length) : null;
  };
  
  const activeCardKey = screenWidth <= 1024 ? clickedCard : hoveredCard;
  const activeCard = getSegmentIdFromKey(activeCardKey);
  const isActiveCardValid = activeCard && segments.some(s => s.id === activeCard);
  // Helper function to get grid template columns based on row and column
  const getGridTemplateColumns = useCallback((row: number, col: number) => {
    if (col === 0) return '1.5fr 0.75fr 0.75fr';
    if (col === 1) return '0.75fr 1.5fr 0.75fr';
    if (col === 2) return '0.75fr 0.75fr 1.5fr';
    return '1fr 1fr 1fr'; // Fallback
  }, []);

  // Get position with validation - ensure complete isolation per service
  const hoveredPosition = (activeCard && isActiveCardValid)
    ? (() => {
        const segment = segments.find(s => s.id === activeCard);
        const position = segment?.position;
        
        // Validate position data
        if (position && 
            typeof position.row === 'number' && 
            typeof position.col === 'number' &&
            position.row >= 0 && position.row <= 1 &&
            position.col >= 0 && position.col <= 2) {
          return position;
        }
        return null;
      })()
    : null;


  return (
    <div 
      ref={gridRef}
      className="flex-grow w-full md:w-[calc(70%-14px)] md:h-[320px] lg:h-[400px] max-w-full"
    >
      {/* Mobile: Single column layout */}
      <div className="md:hidden flex flex-col gap-1">
        {segments.map((segment) => {
          const isHovered = activeCard === segment.id;
          
          return (
            <motion.div
              key={getSegmentKey(segment.id)}
              className="relative bg-white cursor-pointer overflow-visible p-4"
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                position: 'relative',
                width: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              animate={{
                boxShadow: isHovered 
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
                  : '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
              }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
              onClick={() => {
                // Mobile only: clear hover state and use click state
                setHoveredCard(null);
                const segmentKey = getSegmentKey(segment.id);
                if (clickedCard === segmentKey) {
                  setClickedCard(null);
                } else {
                  setClickedCard(segmentKey);
                }
              }}
              tabIndex={0}
              role="button"
              aria-expanded={isHovered}
            >
              {/* Plus Icon */}
              <motion.div
                className="absolute z-10 bottom-4 right-4 w-8 h-8 rounded-md flex items-center justify-center"
                animate={{
                  backgroundColor: isHovered ? getIconAreaColor(service.color) : service.color,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <motion.div
                  animate={{ rotate: isHovered ? -45 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <PlusIcon className="w-5 h-5 text-white" strokeWidth={2.5} />
                </motion.div>
              </motion.div>
              
              {/* Card Title */}
              <h3 
                className="font-bold font-heading text-base"
                style={{
                  lineHeight: '1.3',
                  color: service.color,
                  marginRight: '28px',
                  marginBottom: 'auto'
                }}
              >
                {segment.title}
              </h3>
              
              {/* Card Description */}
              <motion.div
                className="overflow-hidden mt-2"
                animate={{
                  opacity: isHovered ? 1 : 0,
                  maxHeight: isHovered ? '120px' : '0px',
                }}
                transition={{
                  opacity: { duration: 0.4, ease: 'easeInOut', delay: isHovered ? 0.2 : 0 },
                  maxHeight: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                }}
              >
                <p 
                  className="text-sm leading-relaxed m-0 pr-8"
                  style={{ color: getIconAreaColor(service.color) }}
                >
                  {segment.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Desktop/Tablet: Two-row grid layout */}
      <div className="hidden md:flex flex-col h-full overflow-visible" style={{ gap: '4px' }}>
        
        {/* Top Row */}
        <motion.div 
          className="grid overflow-visible relative grid-cols-1 md:grid-cols-3"
          style={{
            gap: '4px',
            height: hoveredPosition?.row === 0 ? '60%' : hoveredPosition?.row === 1 ? '40%' : '50%',
            width: '100%',
            gridTemplateColumns: hoveredPosition?.row === 0 && hoveredPosition?.col !== undefined 
              ? getGridTemplateColumns(0, hoveredPosition.col)
              : 'repeat(3, minmax(0, 1fr))',
            alignContent: 'stretch',
            transition: 'height 0.4s cubic-bezier(0.4, 0, 0.2, 1), grid-template-columns 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {segments.slice(0, 3).map((segment) => {
            const isHovered = activeCard === segment.id;
            
            return (
              <motion.div
                key={getSegmentKey(segment.id)}
                className="relative bg-white cursor-pointer overflow-visible p-4 lg:p-6"
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  position: 'relative',
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  minWidth: '0',
                  overflow: 'hidden'
                }}
                animate={{
                  boxShadow: isHovered 
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
                    : '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
                onMouseEnter={() => {
                  // Desktop only: pure hover behavior
                  if (screenWidth > 1024) {
                    setHoveredCard(getSegmentKey(segment.id));
                  }
                }}
                onMouseLeave={() => {
                  // Desktop only: clear hover
                  if (screenWidth > 1024) {
                    setHoveredCard(null);
                  }
                }}
                onClick={(e) => {
                  if (screenWidth <= 1024) {
                    e.stopPropagation();
                    // Mobile + Tablet: Click-only behavior (no hover interference)
                    const segmentKey = getSegmentKey(segment.id);
                    
                    if (clickedCard === segmentKey) {
                      // Closing: clear both states
                      setClickedCard(null);
                      setHoveredCard(null);
                    } else {
                      // Opening: clear hover first, then set clicked state
                      setHoveredCard(null);
                      setClickedCard(segmentKey);
                    }
                  }
                  // Desktop (>1024px): Pure hover, no click handling
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isHovered}
              >
                {/* Plus Icon */}
                <motion.div
                  className="absolute z-10 bottom-4 right-4 lg:bottom-5 lg:right-5 w-8 h-8 rounded-md flex items-center justify-center"
                  animate={{
                    backgroundColor: isHovered ? getIconAreaColor(service.color) : service.color,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <motion.div
                    animate={{ rotate: isHovered ? -45 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <PlusIcon className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </motion.div>
                </motion.div>
                
                {/* Card Title */}
                <h3 
                  className="font-bold font-heading text-sm md:text-base lg:text-lg"
                  style={{
                    lineHeight: '1.3',
                    color: service.color,
                    marginRight: '28px',
                    marginBottom: 'auto', // Push description to bottom
                    minWidth: '0',
                    wordWrap: 'break-word'
                  }}
                >
                  {segment.title}
                </h3>
                
                {/* Card Description - Aligned with Plus Icon */}
                <motion.div
                  className="overflow-hidden mt-auto absolute bottom-4 left-4 right-14 lg:bottom-5 lg:left-6 lg:right-16 max-w-[calc(100%-3.5rem)] lg:max-w-[calc(100%-4rem)]"
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    maxHeight: isHovered ? '100px' : '0px',
                  }}
                  transition={{
                    opacity: { duration: 0.3, ease: 'easeInOut', delay: isHovered ? 0.1 : 0 },
                    maxHeight: { duration: 0.4, ease: 'easeInOut' },
                  }}
                >
                  <p 
                    className="text-xs md:text-xs lg:text-sm leading-relaxed m-0"
                    style={{ color: getIconAreaColor(service.color) }}
                  >
                    {segment.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Bottom Row */}
        <motion.div 
          className="grid overflow-visible relative grid-cols-1 md:grid-cols-3"
          style={{
            gap: '4px',
            height: hoveredPosition?.row === 1 ? '60%' : hoveredPosition?.row === 0 ? '40%' : '50%',
            width: '100%',
            gridTemplateColumns: hoveredPosition?.row === 1 && hoveredPosition?.col !== undefined 
              ? getGridTemplateColumns(1, hoveredPosition.col)
              : 'repeat(3, minmax(0, 1fr))',
            alignContent: 'stretch',
            transition: 'height 0.4s cubic-bezier(0.4, 0, 0.2, 1), grid-template-columns 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {segments.slice(3, 6).map((segment) => {
            const isHovered = activeCard === segment.id;
            
            return (
              <motion.div
                key={getSegmentKey(segment.id)}
                className="relative bg-white cursor-pointer overflow-visible p-4 lg:p-6"
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  position: 'relative',
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  minWidth: '0',
                  overflow: 'hidden'
                }}
                animate={{
                  boxShadow: isHovered 
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
                    : '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
                onMouseEnter={() => {
                  // Desktop only: pure hover behavior
                  if (screenWidth > 1024) {
                    setHoveredCard(getSegmentKey(segment.id));
                  }
                }}
                onMouseLeave={() => {
                  // Desktop only: clear hover
                  if (screenWidth > 1024) {
                    setHoveredCard(null);
                  }
                }}
                onClick={(e) => {
                  if (screenWidth <= 1024) {
                    e.stopPropagation();
                    // Mobile + Tablet: Click-only behavior (no hover interference)
                    const segmentKey = getSegmentKey(segment.id);
                    
                    if (clickedCard === segmentKey) {
                      // Closing: clear both states
                      setClickedCard(null);
                      setHoveredCard(null);
                    } else {
                      // Opening: clear hover first, then set clicked state
                      setHoveredCard(null);
                      setClickedCard(segmentKey);
                    }
                  }
                  // Desktop (>1024px): Pure hover, no click handling
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isHovered}
              >
                {/* Plus Icon */}
                <motion.div
                  className="absolute z-10 bottom-4 right-4 lg:bottom-5 lg:right-5 w-8 h-8 rounded-md flex items-center justify-center"
                  animate={{
                    backgroundColor: isHovered ? getIconAreaColor(service.color) : service.color,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <motion.div
                    animate={{ rotate: isHovered ? -45 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <PlusIcon className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </motion.div>
                </motion.div>
                
                {/* Card Title */}
                <h3 
                  className="font-bold font-heading text-sm md:text-base lg:text-lg"
                  style={{
                    lineHeight: '1.3',
                    color: service.color,
                    marginRight: '28px',
                    marginBottom: 'auto', // Push description to bottom
                    minWidth: '0',
                    wordWrap: 'break-word'
                  }}
                >
                  {segment.title}
                </h3>
                
                {/* Card Description - Aligned with Plus Icon */}
                <motion.div
                  className="overflow-hidden mt-auto absolute bottom-4 left-4 right-14 lg:bottom-5 lg:left-6 lg:right-16 max-w-[calc(100%-3.5rem)] lg:max-w-[calc(100%-4rem)]"
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    maxHeight: isHovered ? '100px' : '0px',
                  }}
                  transition={{
                    opacity: { duration: 0.3, ease: 'easeInOut', delay: isHovered ? 0.1 : 0 },
                    maxHeight: { duration: 0.4, ease: 'easeInOut' },
                  }}
                >
                  <p 
                    className="text-xs md:text-xs lg:text-sm leading-relaxed m-0"
                    style={{ color: getIconAreaColor(service.color) }}
                  >
                    {segment.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceSegmentsGrid;