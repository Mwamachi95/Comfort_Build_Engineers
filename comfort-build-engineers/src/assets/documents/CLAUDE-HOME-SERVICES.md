# Services Carousel Section for Comfort Build Engineers

## Overview

Create a React component called `ServicesCarousel` that showcases CBE's six core service areas through an auto-advancing slideshow with vertical slide transitions. This component should be positioned after the `HomeHero` and `HomeDescription` components on the homepage.

## Content Requirements

### Service Data Structure

Create an array of 6 services with the following information:

#### Service 1: Mechanical Engineering

- **Number**: "01"
- **Title**: "Mechanical Engineering"
- **Description**: "Advanced HVAC system design, building automation, and energy-efficient solutions for optimal indoor climate control across commercial and industrial facilities."
- **Image**: `mechanical.jpg` from `assets/images/Home/services/`
- **Learn More Link**: Links to services page with mechanical hash (`/services#mechanical`)

#### Service 2: Plumbing Services

- **Number**: "02"
- **Title**: "Plumbing Services"
- **Description**: "Comprehensive water systems, sanitary solutions, and fire suppression installations designed for reliability and compliance with Kenyan building standards."
- **Image**: `plumbing.jpg` from `assets/images/Home/services/`
- **Learn More Link**: Links to services page with plumbing hash (`/services#plumbing`)

#### Service 3: Electrical Engineering

- **Number**: "03"
- **Title**: "Electrical Engineering"
- **Description**: "Complete electrical infrastructure from power distribution to lighting systems, ensuring safe and efficient electrical solutions for every project scale."
- **Image**: `electrical.jpg` from `assets/images/Home/services/`
- **Learn More Link**: Links to services page with electrical hash (`/services#electrical`)

#### Service 4: Factory Planning

- **Number**: "04"
- **Title**: "Factory Planning"
- **Description**: "Strategic industrial facility design and layout optimization to maximize operational efficiency while ensuring safety and regulatory compliance."
- **Image**: `factory-planning.jpg` from `assets/images/Home/services/`
- **Learn More Link**: Links to services page with factory planning hash (`/services#factory-planning`)

#### Service 5: Project Management

- **Number**: "05"
- **Title**: "Project Management"
- **Description**: "End-to-end project coordination ensuring timely delivery, budget control, and quality standards throughout every phase of your engineering project."
- **Image**: `project-management.jpg` from `assets/images/Home/services/`
- **Learn More Link**: Links to services page with project management hash (`/services#project-management`)

#### Service 6: Design & Build

- **Number**: "06"
- **Title**: "Design & Build"
- **Description**: "Integrated design-build solutions from conceptual planning to final construction, delivering turnkey MEP engineering projects with seamless execution."
- **Image**: `design-build.jpg` from `assets/images/Home/services/`
- **Learn More Link**: Links to services page with design & build hash (`/services#design-build`)

## Animation Specifications

### Auto-Advancement System

- **Timing Interval**: 4-5 seconds per slide
- **Continuous Loop**: Cycles through all 6 services continuously
- **Smooth Transitions**: Seamless progression with no jarring movements
- **Auto-Start**: Begins cycling automatically when component mounts

### Vertical Slide Animation

- **Direction**: Each service slides upward to reveal the next
- **Duration**: Smooth 0.6-0.8 second transition
- **Easing**: Use smooth easing function (ease-in-out)
- **Coordinated Movement**: Text and image change simultaneously
- **Preloading**: Images should be preloaded for smooth transitions

### Pause Functionality (Optional)

- **Hover Pause**: Consider pausing auto-advance on hover
- **Manual Controls**: Optional dots or progress indicator for user control

## Layout & Design Specifications

### Split Layout Structure

- **Left Column (60%)**: Service content (number, title, description, CTA)
- **Right Column (40%)**: Service image
- **Consistent Layout**: Maintain positioning while content changes
- **Professional Spacing**: Proper padding and margins throughout

### Content Styling

- **Service Number**: Small, stylized number (similar to "02" in reference)
- **Service Title**: Large, bold heading using IBM Plex Sans
- **Description**: Professional paragraph text using Inter font
- **Learn More Link**: Styled link with arrow or appropriate indicator
- **Color Scheme**: Follow CBE brand colors and design system

### Image Treatment

- **High-Quality Display**: Professional image presentation
- **Consistent Sizing**: All images should display at same dimensions
- **Responsive Behavior**: Images adapt appropriately to screen sizes
- **Loading Optimization**: Efficient image loading and caching

## Technical Requirements

### React Implementation

- **Functional Component**: Use React hooks for state management
- **TypeScript**: Full TypeScript support with proper interfaces
- **State Management**: Track current active service index
- **useEffect Hook**: Manage auto-advancement timing
- **Cleanup**: Proper timer cleanup on component unmount

### Animation Library

- **Framer Motion**: Use for smooth slide animations (consistent with repository)
- **Performance Optimized**: Efficient animations that don't impact performance
- **Accessibility Friendly**: Respect reduced motion preferences

### Responsive Design

- **Desktop**: Side-by-side layout as specified
- **Tablet**: May stack or adjust proportions as needed
- **Mobile**: Stack content above images for optimal mobile experience
- **Touch Friendly**: Ensure good experience on touch devices

## Accessibility Considerations

### Motion & Animation

- **Reduced Motion**: Respect user preferences for reduced motion
- **Pause Controls**: Provide way to pause auto-advancement if needed
- **Keyboard Navigation**: Support keyboard interaction for accessibility

### Content Accessibility

- **Alt Text**: Proper alt text for all service images
- **Semantic HTML**: Use appropriate heading hierarchy and structure
- **Focus Management**: Proper focus handling during transitions
- **Screen Reader**: Announce content changes appropriately

## Performance Optimization

### Image Handling

- **Preloading**: Preload all carousel images for smooth transitions
- **Optimized Formats**: Use appropriate image formats and sizes
- **Lazy Loading**: Consider lazy loading for non-critical images
- **Compression**: Ensure images are properly compressed for web

### Animation Performance

- **Hardware Acceleration**: Use CSS transforms for smooth animations
- **Memory Management**: Efficient cleanup of animation resources
- **Battery Considerations**: Optimize for mobile device performance

## Integration Requirements

### Repository Consistency

- **Design System**: Follow established CBE color palette and typography
- **Component Architecture**: Consistent with existing component structure
- **Button Styling**: Use established button patterns for "Learn more" links
- **Routing**: Proper integration with React Router for service links

### Content Management

- **Maintainable Data**: Structure service data for easy updates
- **Flexible Design**: Component should accommodate content variations
- **Scalable Architecture**: Easy to modify timing or add/remove services

## Key Success Metrics

### User Engagement

- **Attention Capture**: Engaging animation that showcases all services
- **Clear Navigation**: Easy path to detailed service information
- **Professional Impression**: Reinforces CBE's expertise and capabilities

### Technical Performance

- **Smooth Animation**: 60fps animation performance
- **Fast Loading**: Quick initial load with preloaded images
- **Cross-Browser**: Consistent experience across modern browsers
- **Mobile Optimized**: Excellent performance on mobile devices

## Additional Notes

- **Service Color Coding**: Consider incorporating the service-specific colors from the design system
- **Loading States**: Include proper loading states for images and content
- **Error Handling**: Graceful fallbacks if images fail to load
- **Analytics Ready**: Structure for potential user interaction tracking
