# Vision Mission Hero Section for Comfort Build Engineers

## Overview

Create a React component called `VisionMissionHero` that displays CBE's combined vision and mission statement in a sophisticated hero-style layout with an animated image gallery. This replaces the previous simple Vision & Mission section with a more engaging, dynamic presentation.

## Content Requirements

### Section Label

"Our Vision and Mission"

### Main Heading

"We focus on the holistic solutions for our Partners, holistic growth for our Employees and our Business providing solutions through a **reliable**, **dependable** and **client-focused** team."

### Body Paragraph

"At Comfort Build Engineers, we believe that exceptional engineering solutions emerge from a foundation of trust, expertise, and unwavering commitment to excellence. Our integrated approach ensures that every mechanical, electrical, and plumbing project we undertake not only meets technical specifications but also fosters long-term partnerships built on reliability and mutual success."

### Call-to-Action Button

- Text: "Learn About Our Services"
- Should link to the services page (/services)
- Style consistent with other repository buttons (follow existing button design patterns)

## Layout Structure

### Split Layout Design

- **Left Side (Content)**: Dark background with white text containing all content
- **Right Side (Images)**: Vertical marquee image gallery
- **Split Ratio**: Approximately 50/50 or 60/40 (content/images)
- **Full Container**: Dark background fills the entire container width

### Content Side (Left)

- Dark background that extends across the full container
- White text for optimal contrast
- Proper vertical spacing between elements
- Left-aligned content with appropriate padding
- Section label at the top
- Main heading with bold formatting for key words
- Body paragraph below heading
- CTA button positioned prominently

## Animated Image Gallery (Right Side)

### Image Source

- Images located in `assets/images/about/vision-mission/` folder
- 5 images total for the carousel

### Animation Specifications

- **Vertical Marquee with Column Rotation**: Images move vertically in opposite directions
- **2-3 Column Layout**: Images arranged in columns
- **Infinite Scrolling**: Continuous loop animation
- **Split-Direction Movement**: Left column moves down, right column moves up
- **Periodic Column Switching**: Images periodically move between columns
- **Smooth Transitions**: Seamless animation without jarring movements

### Image Layout

- Mixed image sizes for visual interest
- Professional spacing between images
- Proper aspect ratio maintenance
- Responsive behavior across screen sizes

## Design Specifications

### Typography

- Section label: Small, uppercase styling
- Main heading: Large, bold with emphasis on "reliable", "dependable", and "client-focused"
- Body text: Readable size with proper line height
- Use established fonts (Inter for body, IBM Plex Sans for headings)

### Color Scheme

- **Background**: Dark (consistent with image reference - likely dark gray/black)
- **Text**: White for optimal contrast
- **CTA Button**: Follow existing repository button styling
- **Accents**: Use CBE brand colors where appropriate

### Responsive Design

- Desktop: Side-by-side layout as described
- Tablet: May stack or maintain side-by-side with adjusted proportions
- Mobile: Stack content above images or adapt layout appropriately
- Ensure readability and functionality across all screen sizes

## Technical Requirements

- React functional component with TypeScript
- Framer Motion for smooth animations (following repository patterns)
- Tailwind CSS for styling
- Proper image imports from specified assets folder
- Seamless integration with existing About page layout
- Accessibility considerations for animated content
- Performance optimization for smooth marquee animations

## Key Design Notes

- The dark background should fill the entire section container, not just the content area
- Omit any testimonial sections - focus purely on vision/mission content
- Maintain visual consistency with existing repository design patterns
- Ensure the CTA button follows the established button design system
- The animation should be engaging but not distracting from the content
- Bold formatting for the three key descriptive words in the heading is crucial
