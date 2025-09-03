# About Us Hero Section

Build a responsive About Us hero section for **Comfort Build Engineers** using **React + TypeScript + TailwindCSS + Framer Motion**. This section serves as the opening introduction to the company's About page.

## Component Overview

Create a clean, professional hero section that establishes trust and credibility for the engineering firm. The design should convey reliability, expertise, and professionalism while maintaining visual appeal.

## Layout Structure

### Desktop Layout (≥768px)

- Full-width section container with horizontal flex layout
- Left side: Text content (approximately 60% width)
- Right side: SVG illustration (approximately 40% width)
- Both sides should be vertically centered within the container
- Generous spacing between text and illustration

### Mobile Layout (<768px)

- Stack vertically with flex-direction column
- Text content first, followed by illustration
- Maintain proper spacing and proportions for mobile viewing
- Ensure readability and visual hierarchy on smaller screens

## Container Specifications

### Section Container

- Background: Light gray (#f8f9fa) or white
- Padding: 80px vertical (desktop), 60px vertical (mobile)
- Horizontal padding: Responsive padding that works with site's max-width constraints
- Max-width: Contained within overall site constraints
- Min-height: Ensure adequate vertical space for content

## Text Content Specifications

### "ABOUT US" Label

- Font: Inter Regular
- Size: 14px (desktop), 13px (mobile)
- Weight: 600
- Color: #D9A91A (golden yellow)
- Letter spacing: 0.1em (uppercase with slight spacing)
- Text transform: Uppercase
- Position: Above main heading
- Margin bottom: 16px

### Main Heading

- Font: IBM Plex Sans Bold
- Size: 48px (desktop), 32px (tablet), 28px (mobile)
- Line height: 1.1 for tight, impactful spacing
- Color: #1f2937 (dark gray/black)
- Font weight: Bold (700)
- Margin bottom: 24px
- Text content: "Engineering Excellence. Reliability Delivered." or similar engineering-focused messaging

### Optional Subtext/Description

- Font: Inter Regular
- Size: 18px (desktop), 16px (mobile)
- Line height: 1.6
- Color: #6b7280 (medium gray)
- Max width: 500px to maintain readability
- If included, provide brief company positioning statement

## SVG Illustration Specifications

### Asset Location

- Import SVG from: `assets/images/About/Hero/creative-team-cuate.svg`; Attribute the Storyset - <a href="https://storyset.com/team">Team illustrations by Storyset</a>
- Ensure proper TypeScript typing for SVG imports
- Handle both inline SVG and image src approaches

### Styling Requirements

- Responsive sizing: Scale appropriately with container
- Maintain aspect ratio at all screen sizes
- Maximum width: Should not exceed allocated space
- Minimum width: Ensure visibility on mobile devices
- Position: Right side on desktop, below text on mobile

### Visual Characteristics

- Clean, professional illustration style
- Colors should complement brand palette (incorporate blues, greens, and yellow accents)
- Modern, minimalist aesthetic suitable for engineering firm
- High-quality rendering at all sizes

## Responsive Behavior

### Breakpoint Considerations

- Large desktop (≥1280px): Maintain proportions with increased spacing
- Desktop (≥1024px): Standard layout as specified
- Tablet (≥768px): Adjust text sizes, maintain side-by-side layout
- Mobile (<768px): Stack vertically, optimize for touch interaction

### Typography Scaling

- Implement fluid typography where appropriate
- Ensure text remains readable at all screen sizes
- Maintain visual hierarchy across breakpoints

## Animation and Interactions

### Framer Motion Implementation

- Subtle entrance animations for text content
- Staggered animation for label and heading
- Smooth illustration fade-in or slide-in effect
- Performance-optimized animations that respect reduced motion preferences

### Suggested Animations

- Text elements: Fade up with slight delay between elements
- Illustration: Gentle fade-in or slide-in from right
- Overall timing: Professional and subtle, not distracting
- Duration: 0.6-0.8 seconds for entrance animations

## Accessibility Requirements

### ARIA and Semantic HTML

- Use proper heading hierarchy (likely h1 for main heading)
- Include alt text for SVG illustration
- Ensure proper color contrast ratios
- Support keyboard navigation where applicable

### Screen Reader Considerations

- Logical reading order for content
- Appropriate semantic markup
- Consider aria-label for decorative elements

## Technical Implementation Requirements

### TypeScript

- Proper type definitions for component props
- Interface definitions for any data structures
- Type-safe SVG imports

### Tailwind CSS

- Utilize Tailwind's utility classes for all styling
- Implement responsive design using Tailwind's breakpoint prefixes
- Use Tailwind's color system and spacing scale
- Ensure consistent styling with overall site design system

### Performance Optimization

- Optimize SVG file size without compromising quality
- Implement proper image loading strategies
- Consider lazy loading for below-fold content
- Minimize bundle impact

## Brand Consistency

### Engineering Firm Context

- Messaging should emphasize reliability, expertise, and professionalism
- Visual design should convey trust and competence
- Color usage should align with engineering industry expectations
- Overall tone: Professional, authoritative, approachable

### Integration Considerations

- Ensure design consistency with other sections of the About page
- Maintain visual hierarchy that leads naturally to subsequent content
- Consider how this section flows into the next about section

## Content Guidelines

### Messaging Framework

- Focus on company strengths and differentiators
- Emphasize reliability and engineering excellence
- Keep messaging concise but impactful
- Avoid overly technical jargon in hero section

### Adaptability

- Design should work with various headline lengths
- Allow for easy content updates
- Support multiple language considerations if needed

Create a polished, professional hero section that serves as an effective introduction to Comfort Build Engineers' capabilities and establishes credibility with potential clients from the first impression.
