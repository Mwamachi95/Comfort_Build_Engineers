# Comfort Build Engineers Website

## Project Overview

The Comfort Build Engineers website is a modern, responsive React-based web application showcasing comprehensive engineering services across Kenya's industrial landscape. Built with cutting-edge technologies, the site emphasizes professional presentation, user experience, and seamless navigation through diverse engineering solutions.

### Company Focus
Comfort Build Engineers specializes in mechanical, electrical, and plumbing (MEP) engineering services, factory planning, project management, and design-build solutions, delivering excellence across Kenya's industrial and commercial sectors.

## Technology Stack

### Frontend Framework
- **React 19.1.1** - Latest React with enhanced performance and features
- **TypeScript 5.8.3** - Type-safe development with full TypeScript support
- **Vite 7.1.2** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework for rapid styling
- **Framer Motion 12.23.12** - Advanced animations and micro-interactions
- **PostCSS 8.5.6** - CSS post-processing with Autoprefixer
- **Custom Design System** - Consistent color palette, typography, and component library

### Routing & Navigation
- **React Router DOM 7.8.1** - Client-side routing with advanced navigation features
- **Hash-based Section Navigation** - Smooth scrolling to service sections

### Forms & Validation
- **React Hook Form 7.62.0** - Performant forms with minimal re-renders
- **Zod 4.0.17** - Schema validation for form data
- **@hookform/resolvers 5.2.1** - Integration between React Hook Form and Zod

### UI Components
- **@headlessui/react 2.2.7** - Unstyled, accessible UI components
- **@heroicons/react 2.2.0** - Beautiful hand-crafted SVG icons

### Development Tools
- **ESLint 9.33.0** - Code linting with TypeScript support
- **TypeScript ESLint 8.39.1** - TypeScript-specific linting rules
- **Vite Plugin React 5.0.0** - Optimized React support for Vite

## Project Structure

```
src/
├── assets/                 # Static assets and resources
│   ├── documents/          # Documentation files
│   ├── icons/             # SVG icons and custom graphics
│   └── images/            # Image assets organized by page
│       ├── About/         # About page illustrations
│       └── Service-page/  # Services page illustrations
├── components/            # Reusable React components
│   ├── forms/            # Form components
│   ├── layout/           # Layout components (Header, Footer, Navigation)
│   ├── sections/         # Page-specific sections
│   └── ui/               # Basic UI components
├── data/                 # Static data and configurations
│   ├── contact.ts        # Contact information
│   └── services.ts       # Service definitions and data
├── hooks/                # Custom React hooks
├── pages/                # Page components
├── styles/               # Global styles and themes
├── types/                # TypeScript type definitions
└── utils/                # Utility functions and helpers
```

## Key Features

### 1. Responsive Design System
- **Mobile-First Approach** - Optimized for all device sizes
- **Consistent Typography** - Inter for body text, IBM Plex Sans for headings
- **Color System** - Professional neutral palette with strategic accent colors
- **Component Library** - Reusable UI components with consistent styling

### 2. Advanced Animations
- **Framer Motion Integration** - Smooth entrance animations and micro-interactions
- **Staggered Animations** - Sequential element animations for engaging user experience
- **Performance Optimized** - Hardware-accelerated animations for smooth performance

### 3. Service Architecture
- **Comprehensive Service Catalog** - Six main service categories with detailed segments
- **Dynamic Routing** - Direct navigation to specific services via URL hash routing
- **Service Detail Pages** - In-depth information with visual service breakdowns

#### Service Categories:
1. **Mechanical Engineering** (#4C8D8F)
   - HVAC System Design & Installation
   - Building Automation Systems (BAS)
   - Exhaust & Ventilation
   - Chilled Water & Heating Systems
   - Energy Recovery & Management
   - Air Filtration & Cleanroom Solutions

2. **Plumbing Services** (#4D594F)
   - Domestic & Commercial Water Systems
   - Sanitary & Drainage
   - Fire Suppression Systems
   - Specialized Piping
   - Water Conservation & Treatment
   - Maintenance & Repairs

3. **Electrical Engineering** (#708C8C)
   - Power Distribution & Switchgear
   - Lighting Systems & Controls
   - Emergency & Backup Power
   - Industrial Motor & Drive Systems
   - Security & Communication Systems
   - Energy Management & Solar

4. **Factory Planning** (#2E402F)
   - Layout Design & Optimization
   - Process Engineering
   - Utility Infrastructure
   - Material Handling Systems
   - Safety & Compliance
   - Expansion & Retrofitting

5. **Project Management** (#798C79)
   - Project Planning & Scheduling
   - Cost Management & Budgeting
   - Quality Assurance & Control
   - Risk Management
   - Stakeholder Coordination
   - Commissioning & Handover

6. **Design & Build** (#345E6D)
   - Conceptual Design & Planning
   - Engineering Design & Documentation
   - Permit & Regulatory Compliance
   - Construction Management
   - Value Engineering & Cost Control
   - Turnkey Project Delivery

### 4. Professional Hero Sections
- **About Page Hero** - Creative team illustration with company mission
- **Services Page Hero** - Pipeline maintenance illustration showcasing service focus
- **Consistent Design Language** - Matching layouts with brand-specific content
- **Storyset Attribution** - Proper attribution for professional illustrations

### 5. Navigation System
- **Smart Routing** - Hash-based navigation with smooth scrolling
- **Mobile Optimization** - Responsive navigation with mobile-first design
- **Active State Management** - Visual indicators for current page/section
- **Scroll Compensation** - Navbar height consideration for accurate positioning

## Design System

### Color Palette
```css
/* Primary Colors */
--primary-red: #DC2626
--primary-green: #059669
--primary-yellow: #D97706

/* Services Colors */
--services-teal: #82AD9C      /* Services page accent */
--mechanical: #4C8D8F         /* Mechanical Engineering */
--plumbing: #4D594F           /* Plumbing Services */
--electrical: #708C8C         /* Electrical Engineering */
--factory: #2E402F            /* Factory Planning */
--project-mgmt: #798C79       /* Project Management */
--design-build: #345E6D       /* Design & Build */

/* Neutral Scale */
--neutral-50: #F9FAFB
--neutral-100: #F3F4F6
--neutral-200: #E5E7EB
--neutral-300: #D1D5DB
--neutral-400: #9CA3AF
--neutral-500: #6B7280
--neutral-600: #4B5563
--neutral-700: #374151
--neutral-800: #1F2937
--neutral-900: #111827
```

### Typography
```css
/* Font Families */
font-family-sans: Inter, system-ui, sans-serif
font-family-heading: IBM Plex Sans, system-ui, sans-serif

/* Font Weights */
font-weight-normal: 400
font-weight-medium: 500
font-weight-semibold: 600
font-weight-bold: 700
```

### Component Classes
```css
.btn-primary: Primary button styling with hover effects
.btn-secondary: Secondary button styling
.btn-outline: Outlined button styling
.card: Standardized card component
.section-container: Consistent section width and padding
```

## Pages Overview

### 1. Home Page (`/`)
- **Status**: Basic implementation
- **Features**: Welcome message and company introduction
- **Development Stage**: Foundation laid, awaiting full content implementation

### 2. About Page (`/about`)
- **Status**: Complete with hero section
- **Features**: 
  - Animated hero section with creative team illustration
  - Company mission and values presentation
  - Professional Storyset attribution
- **Hero Content**: "Engineering Excellence. Reliability Delivered."

### 3. Services Page (`/services`)
- **Status**: Fully functional with comprehensive service catalog
- **Features**:
  - Pipeline maintenance hero section with #82AD9C accent color
  - Complete service breakdown with 6 main categories
  - 36 total service segments across all categories
  - Hash-based navigation to specific services
  - Visual service cards with color-coded categories
- **Hero Content**: "Comprehensive Solutions. Engineering Excellence."

### 4. Projects Page (`/projects`)
- **Status**: Placeholder implementation
- **Development Stage**: Awaiting content and project showcase development

### 5. Blog Page (`/blog`)
- **Status**: Placeholder implementation
- **Development Stage**: Awaiting blog architecture and content management

### 6. Contact Page (`/contact`)
- **Status**: Placeholder implementation
- **Development Stage**: Awaiting contact form and information implementation

### 7. FAQs Page (`/faqs`)
- **Status**: Placeholder implementation
- **Development Stage**: Awaiting FAQ content and accordion implementation

## Component Architecture

### Layout Components
- **Header**: Main site header with branding
- **Navbar**: Primary navigation with active states and mobile responsiveness
- **Footer**: Site footer with links and company information
- **FooterCTA**: Call-to-action section in footer
- **Layout**: Main layout wrapper for consistent page structure

### Section Components
- **AboutHero**: Hero section for About page with animations
- **ServiceCard**: Individual service display cards
- **ServiceSection**: Complete service section with segments
- **ServiceSegmentsGrid**: Grid layout for service segments

### Form Components
- **Directory Structure**: Ready for form components
- **Integration**: React Hook Form + Zod validation setup

### UI Components
- **Directory Structure**: Prepared for reusable UI components
- **Design System**: Consistent styling through Tailwind classes

## Data Architecture

### Services Data (`src/data/services.ts`)
- **Comprehensive Service Definitions**: Complete data for all 6 service categories
- **Structured Segments**: Each service contains 6 detailed segments
- **Color Coding**: Unique colors for visual service differentiation
- **Helper Functions**: Utility functions for service retrieval and filtering
- **Type Safety**: Full TypeScript support with Service interface

### Contact Data (`src/data/contact.ts`)
- **Structure**: Ready for contact information management
- **Usage**: Centralized contact data for consistent site-wide usage

## Development Workflow

### Available Scripts
```bash
npm run dev        # Start development server (Vite)
npm run build      # Production build (TypeScript + Vite)
npm run lint       # ESLint code analysis
npm run preview    # Preview production build
```

### Development Server
- **Port**: 5173 (default Vite port)
- **Hot Module Replacement**: Enabled for rapid development
- **TypeScript Support**: Full type checking during development

### Build Process
1. **TypeScript Compilation**: `tsc -b` for type checking
2. **Vite Build**: Asset optimization and bundling
3. **Output**: Optimized static files ready for deployment

## Performance Optimizations

### Code Splitting
- **React Router**: Automatic code splitting by routes
- **Lazy Loading**: Ready for implementation of lazy-loaded components

### Asset Optimization
- **Vite Build**: Automatic asset optimization and bundling
- **SVG Management**: Optimized SVG imports and usage
- **Image Optimization**: Strategic image loading with `loading="eager"` for critical assets

### Animation Performance
- **Hardware Acceleration**: Framer Motion optimizations for smooth animations
- **Reduced Motion**: Respect for user accessibility preferences

## Accessibility Features

### Semantic HTML
- **Proper Heading Structure**: Hierarchical heading usage
- **ARIA Labels**: Descriptive alt text for images
- **Keyboard Navigation**: Full keyboard accessibility support

### Visual Design
- **Color Contrast**: Professional color palette with adequate contrast ratios
- **Focus States**: Clear focus indicators for keyboard navigation
- **Responsive Text**: Scalable typography across all devices

## Future Development Roadmap

### Immediate Priorities
1. **Complete Home Page**: Full hero section and content implementation
2. **Projects Portfolio**: Showcase of completed engineering projects
3. **Contact System**: Functional contact forms with backend integration
4. **Blog Platform**: Content management and article publishing system

### Enhancement Opportunities
1. **CMS Integration**: Content management system for easy updates
2. **Multi-language Support**: English and Swahili language options
3. **Project Gallery**: Interactive project showcases with case studies
4. **Client Portal**: Secure area for project updates and communications
5. **SEO Optimization**: Enhanced meta tags and structured data
6. **Performance Metrics**: Analytics integration and performance monitoring

## Deployment Considerations

### Build Requirements
- **Node.js**: Version 18+ recommended
- **npm/yarn**: Package manager for dependency installation
- **TypeScript**: Compilation support for type checking

### Static Hosting Compatible
- **Vite Output**: Static files ready for CDN deployment
- **SPA Support**: Single-page application routing considerations
- **Asset Optimization**: Minified CSS, JS, and optimized images

## Brand Guidelines

### Visual Identity
- **Professional Engineering Focus**: Clean, technical aesthetic
- **Color Psychology**: Trust-building blues and greens with energy accents
- **Typography**: Modern, readable fonts suitable for technical content
- **Illustration Style**: Professional Storyset illustrations with proper attribution

### Content Tone
- **Professional Expertise**: Authoritative yet approachable technical content
- **Local Focus**: Kenya-specific engineering solutions and requirements
- **Quality Emphasis**: Reliability, precision, and excellence messaging

## Technical Specifications

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Responsive Breakpoints**: Mobile-first design with desktop enhancements

### Performance Targets
- **Fast Loading**: Optimized for quick initial load times
- **Smooth Animations**: 60fps animation performance
- **Accessibility**: WCAG 2.1 AA compliance ready

This comprehensive documentation reflects the current state of the Comfort Build Engineers website, showcasing a professional, feature-rich React application ready for production deployment with room for strategic enhancements and content expansion.