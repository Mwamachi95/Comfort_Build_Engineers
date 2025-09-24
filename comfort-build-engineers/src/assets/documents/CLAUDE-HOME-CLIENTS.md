# Our Clients Section for Comfort Build Engineers

## Overview

Create a React component called `OurClients` that showcases CBE's client logos in a professional horizontal marquee animation. This section demonstrates CBE's credibility and market presence through visual representation of their business partnerships.

## Content Requirements

### Section Heading

"Our Clients"

### Tagline

"Trusted engineering partnerships with Kenya's most innovative companies."

### Client Logos

- **Logo Location**: `assets/images/Home/our-clients/` folder
- **Logo Format**: Support common formats (PNG, SVG, JPG)
- **Logo Quantity**: Handle flexible number of logos (typically 8-15 client logos)
- **Logo Naming**: Assume consistent naming convention (client1.png, client2.svg, etc.)

## Animation Specifications

### Horizontal Marquee Animation

- **Direction**: Right to left movement (standard reading flow)
- **Speed**: Smooth, moderate pace (not too fast to read, not too slow to be boring)
- **Continuous Loop**: Seamless infinite scroll with no visible breaks
- **Duplicate Content**: Duplicate logo sets for seamless looping effect
- **Auto-Start**: Animation begins automatically when component loads

### Interactive Behavior

- **Hover Pause**: Animation pauses when user hovers over the section
- **Smooth Resume**: Animation resumes smoothly when hover ends
- **Mobile Touch**: Consider touch-friendly behavior for mobile devices

## Visual Design Specifications

### Layout Structure

- **Full-width Section**: Spans entire container width
- **Centered Content**: Section heading and tagline centered above logo strip
- **White/Light Background**: Clean, professional background color
- **Proper Spacing**: Adequate padding above and below the logo strip

### Logo Treatment

- **Consistent Heights**: All logos should display at consistent height (e.g., 60-80px)
- **Aspect Ratio Preservation**: Maintain original logo proportions
- **Grayscale Effect**: Display logos in grayscale for visual consistency
- **Hover Colorization**: Logos become colorized when hovered individually
- **Even Spacing**: Consistent gaps between logos (e.g., 60-80px apart)

### Typography

- **Section Heading**: Use established heading styles (IBM Plex Sans)
- **Tagline**: Professional subtitle styling with proper contrast
- **Centered Alignment**: Both heading and tagline centered above logo strip
- **Responsive Text**: Appropriate sizing across all devices

## Technical Implementation

### Animation Requirements

- **CSS-Based Animation**: Use CSS transforms and keyframes for smooth performance
- **Hardware Acceleration**: Utilize GPU acceleration for smooth scrolling
- **Performance Optimization**: Efficient animation that doesn't impact page performance
- **Reduced Motion**: Respect user preferences for reduced motion accessibility

### Responsive Design

- **Desktop**: Full logo strip with 4-6 logos visible at once
- **Tablet**: Adjust visible logo count and spacing appropriately
- **Mobile**: Fewer logos visible (2-3) with adjusted speed and spacing
- **Logo Scaling**: Logos should scale appropriately on smaller screens

### Component Structure

- **React Functional Component**: Modern component with hooks
- **TypeScript Support**: Full TypeScript implementation
- **Dynamic Logo Loading**: Automatically load all logos from the specified folder
- **Error Handling**: Graceful handling of missing or failed logo loads

## Accessibility Considerations

### Motion & Animation

- **Reduced Motion**: Provide static fallback for users with motion sensitivity
- **Keyboard Navigation**: Ensure section is properly navigable
- **Screen Reader Support**: Appropriate alt text for all client logos

### Visual Accessibility

- **High Contrast**: Ensure sufficient contrast for all text elements
- **Focus Indicators**: Clear focus states for keyboard navigation
- **Semantic HTML**: Proper heading hierarchy and list structure for logos

## Logo Specifications

### Technical Requirements

- **File Formats**: Support SVG (preferred), PNG, and JPG formats
- **Resolution**: High-resolution images for crisp display on all devices
- **File Size**: Optimized images for fast loading
- **Consistent Styling**: All logos should have similar visual weight

### Display Guidelines

- **Background Handling**: Handle logos with transparent or white backgrounds
- **Color Consistency**: Grayscale treatment creates visual harmony
- **Size Normalization**: Scale logos to consistent visual importance
- **Quality Maintenance**: Ensure no pixelation or distortion

## Integration Requirements

### Repository Consistency

- **Design System**: Follow established CBE color palette and typography
- **Component Architecture**: Consistent with existing component structure
- **Styling Patterns**: Use established Tailwind classes and patterns
- **Performance Standards**: Maintain site performance benchmarks

### Content Management

- **Flexible Logo Addition**: Easy to add new client logos to the folder
- **Automatic Detection**: Component automatically includes new logos
- **Fallback Handling**: Graceful behavior when no logos are available
- **Loading States**: Appropriate loading indicators for logo assets

## Section Positioning

- **Homepage Integration**: Position after ServicesCarousel and before any stats section
- **Visual Flow**: Should complement other homepage sections seamlessly
- **Spacing Consistency**: Maintain consistent section spacing with other components

## Key Success Criteria

### Professional Credibility

- **Trust Building**: Logo display should enhance CBE's credibility
- **Quality Presentation**: High-quality visual presentation of client relationships
- **Industry Relevance**: Showcase diverse client portfolio effectively

### User Experience

- **Engaging Animation**: Smooth, professional animation that draws attention
- **Performance**: Fast loading and smooth animation across all devices
- **Accessibility**: Fully accessible to all users including those with disabilities

### Technical Excellence

- **Cross-Browser**: Consistent experience across modern browsers
- **Mobile Optimization**: Excellent performance on mobile devices
- **Scalability**: Easy to maintain and update as client base grows
