# Mechanical Services Introduction Section - Comfort Build Engineers

## Overview

Create a React component called `MechanicalServicesIntro` that provides a comprehensive introduction to CBE's Mechanical Engineering services. This section will be positioned on the Services page after the hero section and before the service segments grid reflow system for Mechanical services.

## Layout Structure

### Full-Width Hero Image

- **Image Source**: `src/assets/images/home/services/mechanical.jpg`
- **Dimensions**: Full width of screen, 50vh (half viewport height)
- **Image Treatment**: High-quality display with proper object-fit
- **Alt Text**: "Mechanical Engineering Systems - HVAC and Building Automation"

### Two-Column Description Section

Split into two equal columns (50/50) below the image:

#### Left Column: Service Tagline

A compelling, succinct introduction to Mechanical Engineering services.

**Suggested Tagline Content**:
"Advanced mechanical systems engineering delivering optimal climate control, energy efficiency, and indoor air quality for commercial and industrial facilities across Kenya."

#### Right Column: Two Stacked Content Containers

**Container 1 - Overview**:

- **Title**: "Overview"
- **Content**: "Our mechanical engineering services encompass comprehensive HVAC system design, building automation solutions, and energy management systems. We specialize in creating comfortable, efficient environments through advanced heating, ventilation, air conditioning, and control technologies tailored to Kenya's unique climate and industrial requirements."

**Container 2 - Approach**:

- **Title**: "Approach"
- **Content**: "We combine technical expertise with practical experience to design mechanical systems that balance performance, efficiency, and cost-effectiveness. Our engineering team conducts thorough load calculations, selects optimal equipment, and implements smart control strategies to ensure reliable operation and minimal energy consumption throughout the system lifecycle."

## Design Specifications

### Hero Image Section

- **Full Width**: Spans entire viewport width
- **Height**: 50vh (half viewport height)
- **Object Fit**: cover (maintains aspect ratio while filling space)
- **Position**: relative positioning for potential overlay elements
- **Loading**: eager loading for above-the-fold content
- **Quality**: High-resolution image optimized for web

### Two-Column Layout

- **Container Width**: Follow standard section container width
- **Column Split**: 50/50 on desktop
- **Gap Between Columns**: Appropriate spacing (e.g., 3rem-4rem)
- **Vertical Alignment**: Top alignment or centered as appropriate
- **Background**: White or light background for readability

### Left Column - Tagline

- **Typography**: Large, impactful text using IBM Plex Sans
- **Font Weight**: Semi-bold or bold (600-700)
- **Font Size**: Large heading size (e.g., 2rem-2.5rem on desktop)
- **Line Height**: Comfortable reading (1.4-1.5)
- **Color**: Dark text (neutral-900 or similar)
- **Padding**: Appropriate padding for visual breathing room

### Right Column - Content Containers

- **Stacked Layout**: Two containers vertically stacked
- **Spacing**: Adequate gap between containers (e.g., 2rem-3rem)
- **Background**: Optional subtle background or border for definition
- **Padding**: Internal padding for content (e.g., 1.5rem-2rem)

#### Container Styling

- **Title Typography**:

  - Font: IBM Plex Sans
  - Weight: Semi-bold (600)
  - Size: Medium heading (e.g., 1.25rem-1.5rem)
  - Color: Mechanical service color (#4C8D8F) or dark neutral
  - Margin Bottom: Space between title and content

- **Content Typography**:
  - Font: Inter
  - Weight: Regular (400)
  - Size: Body text (1rem-1.125rem)
  - Line Height: Readable (1.6-1.7)
  - Color: Neutral gray (neutral-700 or neutral-600)

## Color Scheme

### Mechanical Services Color

- **Primary Color**: `#4C8D8F` (from design system)
- **Usage**: Accent color for titles, borders, or highlights

### Supporting Colors

- **Background**: White (`#FFFFFF`) or light neutral (`#F9FAFB`)
- **Text Primary**: Dark neutral (`#111827` or `#1F2937`)
- **Text Secondary**: Medium neutral (`#4B5563` or `#6B7280`)
- **Borders**: Light gray (`#E5E7EB` or `#D1D5DB`)

## Responsive Design

### Desktop (1024px and above)

- Full-width hero image at 50vh
- Two equal columns (50/50) for content
- Generous spacing and padding
- Large, impactful typography

### Tablet (768px - 1023px)

- Maintain 50vh hero image
- Consider adjusting column proportions (e.g., 40/60) if needed
- Slightly reduced typography sizes
- Adjust spacing proportionally

### Mobile (Below 768px)

- Hero image remains full width but consider reducing height (e.g., 40vh or 300px)
- **Stack columns vertically**: Tagline above, content containers below
- Full-width stacked layout
- Reduced typography sizes for readability
- Adjusted padding for smaller screens
- Maintain visual hierarchy

## Technical Implementation

### Component Structure

- **React Functional Component** with TypeScript
- **Proper image imports** from assets folder
- **Responsive utilities** using Tailwind breakpoints
- **Semantic HTML** structure (section, article, h2, p tags)

### Image Handling

```typescript
import mechanicalImage from "@/assets/images/home/services/mechanical.jpg";
```

- Proper import and usage
- Alt text for accessibility
- Optimized loading strategy

### Styling Approach

- **Tailwind CSS** for all styling
- **Responsive classes**: `sm:`, `md:`, `lg:` breakpoints
- **Grid or Flex**: Use appropriate layout system
- **Consistent spacing**: Follow design system spacing scale

### Performance Considerations

- **Optimized image**: Properly compressed for web
- **Lazy loading consideration**: Eager for above-fold, lazy for below
- **Efficient rendering**: Avoid unnecessary re-renders
- **Accessibility**: Proper heading hierarchy and alt text

## Accessibility Requirements

### Image Accessibility

- **Alt text**: Descriptive alternative text for hero image
- **Decorative handling**: If purely decorative, use empty alt

### Content Accessibility

- **Heading hierarchy**: Proper h2, h3 structure
- **Color contrast**: Meet WCAG AA standards (4.5:1 for body text)
- **Readable text**: Sufficient line height and spacing
- **Semantic HTML**: Use appropriate semantic elements

### Keyboard Navigation

- **Focus states**: Not critical for static content but ensure proper structure
- **Screen reader**: Logical reading order maintained

## Integration Notes

### Services Page Structure

**Position in page flow**:

1. Services Hero Section
2. **→ MechanicalServicesIntro Component** (this component)
3. Mechanical Service Segments Grid (existing grid reflow system)
4. (Repeat pattern for other services)

### Design System Consistency

- **Typography**: Follow established Inter/IBM Plex Sans usage
- **Colors**: Use Mechanical service color (#4C8D8F) from design system
- **Spacing**: Consistent with other page sections
- **Component patterns**: Similar structure as other service intros

## Content Guidelines

### Tagline Best Practices

- **Concise**: One compelling sentence or short paragraph
- **Action-oriented**: Focus on benefits and capabilities
- **Kenya-specific**: Reference local market when relevant
- **Professional tone**: Technical but accessible

### Overview Content

- **Scope definition**: What services are included
- **Technical capabilities**: Key competencies highlighted
- **Market focus**: Target sectors and applications

### Approach Content

- **Methodology**: How CBE delivers these services
- **Differentiators**: What makes CBE's approach unique
- **Value proposition**: Benefits clients receive

## Replication Pattern

This component establishes the pattern for other service introductions:

- **Plumbing Services**: Use plumbing.jpg with #4D594F color
- **Electrical Engineering**: Use electrical.jpg with #708C8C color
- **Factory Planning**: Use factory-planning.jpg with #2E402F color
- **Project Management**: Use project-management.jpg with #798C79 color
- **Design & Build**: Use design-build.jpg with #345E6D color

Each service introduction will follow this exact layout structure with service-specific:

- Hero image
- Tagline content
- Overview description
- Approach description
- Accent color

## Key Success Criteria

### Visual Impact

- **Strong hero image**: Immediately establishes service context
- **Clear hierarchy**: Information flows logically top to bottom
- **Professional presentation**: Builds credibility and expertise

### Content Clarity

- **Easy to scan**: Headers and structure facilitate quick reading
- **Informative**: Provides substantive information about services
- **Engaging**: Compelling content that encourages further exploration

### Technical Excellence

- **Responsive**: Perfect display across all device sizes
- **Performant**: Fast loading and smooth rendering
- **Accessible**: Fully accessible to all users
- **Maintainable**: Easy to replicate for other services
