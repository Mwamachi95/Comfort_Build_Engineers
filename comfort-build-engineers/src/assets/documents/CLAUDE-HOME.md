# Home Hero Section for Comfort Build Engineers

## Overview

Create a React component called `HomeHero` that serves as the main hero section for the Comfort Build Engineers homepage. This component should feature a full-width hero layout with background imagery and compelling content that introduces visitors to CBE's engineering expertise.

## Content Requirements

### Main Heading (H1)

"Welcome to Comfort Build Engineers"

### Subtitle/Description Paragraph

"Professional engineering solutions for mechanical, electrical, and plumbing services in Kenya."

### Call-to-Action Button

- Text: "View Our Services"
- Should link to the services page (/services)
- Follow the established button styling patterns from the repository

## Design Specifications

### Layout Structure

- **Full-width hero section** that spans the entire viewport width
- **Background image overlay** with appropriate text contrast
- **Left-aligned content** positioned over the background image
- **Generous padding and spacing** for professional presentation

### Background Image

- **Image Location**: `assets/images/Home/hero/` folder
- **Full-width background** that covers the entire hero section
- **Responsive image handling** for different screen sizes
- **Overlay treatment** to ensure text readability (dark overlay or gradient)
- **Professional engineering/construction theme** that represents CBE's industry

### Typography

- **H1 Styling**: Large, bold heading using IBM Plex Sans
- **Paragraph Styling**: Readable subtitle using Inter font
- **White text** for contrast against background image
- **Proper text hierarchy** with appropriate font sizes and spacing
- **Responsive text sizing** that scales appropriately across devices

### Button Styling

- **Consistent Design**: Reference existing button patterns in the repository
- **Professional appearance** that complements the hero design
- **Proper hover states and transitions**
- **Accessible design** with good contrast and focus states

## Visual Design

### Color Treatment

- **Text Color**: White for optimal contrast against background
- **Overlay**: Semi-transparent dark overlay to ensure text readability
- **Button Colors**: Follow established CBE brand colors and button patterns

### Spacing & Layout

- **Container Width**: Follow the established section container patterns
- **Vertical Centering**: Content should be vertically centered or positioned attractively
- **Left Alignment**: Content aligned to the left side of the container
- **Proper Margins**: Consistent spacing with other page sections

## Responsive Design

### Desktop Layout

- **Full hero height** (likely 60-80vh for impactful presentation)
- **Background image prominently displayed**
- **Content positioned on left side with ample whitespace**

### Tablet & Mobile

- **Maintain hero impact** while ensuring readability
- **Adjust text sizes** for smaller screens
- **Ensure button remains accessible and properly sized**
- **Background image should remain effective across screen sizes**

## Technical Requirements

### Component Structure

- **React functional component** with TypeScript
- **Proper image handling** with optimized loading
- **Responsive background image** implementation
- **Semantic HTML structure** (header, h1, p, button)

### Styling Implementation

- **Tailwind CSS** for all styling
- **Background image utilities** for proper image display
- **Responsive utilities** for cross-device compatibility
- **Follow established design system** patterns

### Performance Considerations

- **Optimized image loading** for hero background
- **Proper image formats** and sizes for web performance
- **Loading eager** for above-the-fold hero content

## Accessibility Requirements

### Semantic Structure

- **Proper heading hierarchy** starting with H1
- **Descriptive alt text** for background images where applicable
- **Keyboard navigation** support for interactive elements

### Visual Accessibility

- **Sufficient color contrast** between text and background
- **Readable font sizes** across all devices
- **Focus indicators** for keyboard navigation

## Integration Notes

### Repository Consistency

- **Follow existing patterns** from About and Services hero sections
- **Maintain design system** colors, typography, and spacing
- **Consistent component architecture** with other page components
- **Proper routing integration** for CTA button

### Brand Alignment

- **Professional engineering focus** appropriate for CBE's industry
- **Trustworthy presentation** that builds client confidence
- **Clear value proposition** highlighting MEP expertise in Kenya
- **Welcoming yet authoritative tone** for potential clients

## Key Success Criteria

- **Immediate Impact**: Visitors should immediately understand CBE's services
- **Professional Credibility**: Design should reflect engineering expertise
- **Clear Navigation**: CTA should guide visitors to learn more about services
- **Mobile Excellence**: Hero should work perfectly on all device sizes
- **Performance**: Fast loading with optimized images and smooth interactions
