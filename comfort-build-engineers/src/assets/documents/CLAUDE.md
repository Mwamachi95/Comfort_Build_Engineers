# Comfort Build Engineers Website

## Project Overview

This is a professional company profile website for Comfort Build Engineers (cbengineers.co.ke), a Kenyan engineering firm specializing in mechanical, electrical, plumbing services, factory planning, and project management.

## Initial Setup Instructions

### 1. Project Initialization

- Create a new React project using Vite with TypeScript template
- Initialize with `npm create vite@latest comfort-build-engineers -- --template react-ts`
- Set up the project structure with proper folder organization

### 2. Dependencies Installation

Install the following core dependencies:

- React Router DOM v6 for routing
- Tailwind CSS with necessary plugins
- Headless UI for accessible components
- Heroicons for consistent iconography
- React Hook Form for form handling
- Zod for form validation
- Framer Motion for animations (optional but recommended)

### 3. Tailwind CSS Configuration

#### Custom Theme Extension

Configure `tailwind.config.js` with:

- **Brand Colors:**

  - Primary Red: Custom red shade for branding
  - Primary Green: Engineering green for trust/growth
  - Primary Yellow: Accent yellow for highlights
  - Neutral grays for text and backgrounds

- **Typography:**

  - Headings: IBM Plex Sans Bold
  - Body: Inter Regular
  - Configure font weights and sizes for consistent hierarchy

- **Custom Spacing:** Engineering-focused spacing scale
- **Custom Components:** Button variants, card styles, section containers

#### Content Configuration

- Ensure all React components and HTML files are included in content paths
- Configure for production optimization and unused CSS purging

### 4. Project Structure Setup

Create the following folder structure:

```
src/
├── components/
│   ├── ui/              # Reusable UI components (Button, Card, Input, etc.)
│   ├── layout/          # Layout components (Header, Footer, Navigation)
│   ├── sections/        # Page sections (Hero, Services, Projects, etc.)
│   └── forms/           # Form components (ContactForm, QuoteForm, etc.)
├── pages/              # Route components for each page
├── hooks/              # Custom React hooks
├── utils/              # Utility functions and helpers
├── types/              # TypeScript type definitions
├── assets/             # Static assets (images, icons, documents)
│   ├── images/         # Project photos, team photos, logos
│   ├── icons/          # Custom SVG icons
│   └── documents/      # Downloadable PDFs and resources
├── data/               # Static data and configuration
└── styles/             # Global CSS and Tailwind imports
```

### 5. Routing Configuration

Set up React Router with the following page structure:

- **Home** (`/`)
- **About Us** (`/about`)
- **Services** (`/services`)
  - All Services (`/services`)
  - Mechanical (`/services/mechanical`)
  - Electrical (`/services/electrical`)
  - Plumbing (`/services/plumbing`)
  - Factory Planning (`/services/factory-planning`)
  - Project Management (`/services/project-management`)
- **Projects** (`/projects`)
  - Main Projects (`/projects`)
  - By Service Type (`/projects/mechanical`, `/projects/electrical`, etc.)
  - By Sector (`/projects/commercial`, `/projects/industrial`, etc.)
  - By Scale (`/projects/large-scale`, `/projects/specialized`)
  - Individual Project Pages (`/projects/:projectId`)
- **FAQs** (`/faqs`)
- **Blog** (`/blog`)
  - Blog List (`/blog`)
  - Individual Posts (`/blog/:postSlug`)
- **Contact** (`/contact`)

### 6. Layout Components Setup

#### Header/Navigation

- Responsive navigation with mobile hamburger menu
- Professional logo placement
- Service dropdown menus
- Contact information in header (phone, email)
- Emergency contact prominence

#### Footer

- Company information and registration details
- Service links and quick navigation
- Contact information and office hours
- Social media links (LinkedIn, professional platforms)
- Certifications and compliance badges

### 7. Essential UI Components

Create base components for:

- **Button:** Multiple variants (primary, secondary, outline) in brand colors
- **Card:** Project cards, service cards, testimonial cards
- **Hero:** Reusable hero sections with different layouts
- **ServiceGrid:** Grid layouts for services display
- **ProjectCard:** Specialized cards for project showcase
- **ContactForm:** Professional inquiry forms with validation
- **TeamMember:** Staff profile display components
- **Testimonial:** Client testimonial display components

### 8. Development Environment Setup

#### Code Quality Tools

- ESLint configuration for React and TypeScript
- Prettier for code formatting
- Husky for pre-commit hooks
- Configure consistent import ordering and naming conventions

#### Environment Variables

Set up `.env` files for:

- API endpoints (if applicable)
- Contact form submission endpoints
- Google Analytics tracking ID
- Map integration API keys
- Any third-party service configurations

### 9. Asset Organization

#### Image Strategy

- Create organized folders for different image types
- Implement responsive image components
- Plan for WebP format with fallbacks
- Set up lazy loading for performance

#### Icon Strategy

- Use Heroicons for standard UI icons
- Create custom SVG icons for engineering-specific elements
- Ensure consistent sizing and styling across icons

### 10. Performance Optimization Setup

#### Build Configuration

- Configure Vite for optimal production builds
- Set up code splitting for different route chunks
- Implement proper asset optimization
- Configure for proper caching strategies

#### SEO Preparation

- Set up proper meta tag structure
- Configure for Open Graph and Twitter cards
- Plan for structured data implementation
- Set up sitemap generation

## Development Workflow

### Branch Strategy

- Main branch for production-ready code
- Development branch for feature integration
- Feature branches for individual components/pages

### Component Development Approach

1. Start with layout components (Header, Footer, Layout)
2. Build reusable UI components
3. Create page-specific sections
4. Implement routing and navigation
5. Add forms and interactive elements
6. Optimize for performance and accessibility

### Content Strategy

- Plan for easy content updates and management
- Create structured data formats for projects and services
- Implement blog post structure for future content
- Plan for testimonial and case study integration

## Deployment Preparation

### Build Process

- Ensure all environment variables are properly configured
- Test build process for production optimization
- Verify all assets are properly included and optimized

### Hosting Considerations

- Static hosting compatibility (Netlify, Vercel, etc.)
- Domain configuration for cbengineers.co.ke
- SSL certificate setup
- CDN configuration for asset delivery

## Next Steps After Setup

1. Implement core layout structure
2. Create design system components
3. Build individual page components
4. Add content and copy
5. Implement forms and interactivity
6. Optimize for performance and SEO
7. Test across devices and browsers
8. Deploy and configure domain

## Documentation Storage

Store this CLAUDE.md file in a `docs/` folder at the root level of the project for future reference and team collaboration.

## Notes

- This is a company profile website focusing on professional presentation
- Target audience includes both technical and financial decision-makers
- Emphasize trust, credibility, and local Kenyan market expertise
- Maintain professional aesthetic while being approachable
- Ensure mobile responsiveness for field professionals
