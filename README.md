# Comfort Build Engineers Website

A modern, responsive corporate website for Comfort Build Engineers Limited - a leading MEP (Mechanical, Electrical, and Plumbing) engineering solutions provider based in Nairobi, Kenya, serving East Africa.

## Overview

This website serves as the digital presence for Comfort Build Engineers, showcasing their comprehensive engineering services, project portfolio, and company information. Built with React and TypeScript, it delivers a fast, accessible, and visually engaging experience across all devices.

**Live Site:** [cbengineers.co.ke](https://www.cbengineers.co.ke)

## Features

### Core Functionality
- **Multi-page Application** - Home, About, Services, Projects, Blog, and Contact pages
- **Dynamic Routing** - URL-based navigation with React Router v7
- **Responsive Design** - Mobile-first approach with breakpoints for tablet and desktop
- **Contact Form** - Integrated with Formspree for email submissions with Zod validation
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, and JSON-LD structured data

### User Experience
- **Smooth Animations** - Page transitions and micro-interactions powered by Framer Motion
- **Optimized Images** - WebP format with responsive srcsets via vite-imagetools
- **Accessible Navigation** - Keyboard-friendly with ARIA labels and focus management
- **Back to Top** - Scroll-triggered button for easy navigation
- **Project Filtering** - Filter projects by category (Commercial, Industrial, Residential)

### Performance
- **Code Splitting** - Vendor chunks for React, Framer Motion, forms, and UI libraries
- **Lazy Loading** - Images loaded on-demand with native lazy loading
- **Build Optimization** - esbuild minification with chunk size management

## Tech Stack

### Frontend Framework
- **React 18.3** - Component-based UI library
- **TypeScript 5.8** - Type-safe JavaScript
- **React Router DOM 7** - Client-side routing

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **PostCSS** - CSS processing with Autoprefixer
- **Custom CSS Components** - Reusable button and card styles

### UI Components
- **Headless UI 2.2** - Accessible, unstyled components (Disclosure, Transition)
- **Heroicons 2.2** - SVG icon library
- **Framer Motion 12** - Animation library

### Forms & Validation
- **React Hook Form 7** - Performant form handling
- **Zod 4** - Schema validation
- **Formspree** - Form backend service

### Build Tools
- **Vite 7** - Next-generation frontend tooling
- **vite-imagetools** - Image optimization and transformation
- **Sharp** - High-performance image processing
- **ESLint 9** - Code linting

### SEO
- **react-helmet-async** - Document head management
- **Schema.org JSON-LD** - Structured data for search engines

## Project Structure

```
comfort-build-engineers/
├── src/
│   ├── assets/
│   │   ├── documents/          # PDF and document assets
│   │   ├── icons/              # Logo and icon assets
│   │   │   └── logo/           # Company logo variations
│   │   └── images/             # Organized by page/feature
│   │       ├── About/          # About page images
│   │       ├── Home/           # Homepage images
│   │       ├── Projects/       # Project portfolio images
│   │       └── Service-page/   # Service page assets
│   │
│   ├── components/
│   │   ├── common/             # Reusable components
│   │   │   ├── BackToTop.tsx   # Scroll-to-top button
│   │   │   ├── OptimizedImage.tsx  # Responsive image component
│   │   │   ├── ScrollToTop.tsx # Route change scroll handler
│   │   │   └── SEO.tsx         # Meta tags component
│   │   ├── forms/              # Form components
│   │   ├── layout/             # Layout components
│   │   │   ├── Footer.tsx      # Site footer
│   │   │   ├── FooterCTA.tsx   # Call-to-action section
│   │   │   ├── Layout.tsx      # Main layout wrapper
│   │   │   └── Navbar.tsx      # Navigation bar
│   │   ├── sections/           # Page section components
│   │   │   ├── HomeHero.tsx    # Homepage hero section
│   │   │   ├── ServicesCarousel.tsx  # Services showcase
│   │   │   ├── ProjectsGrid.tsx      # Project portfolio grid
│   │   │   └── ...             # Other section components
│   │   └── ui/                 # Base UI components
│   │
│   ├── data/                   # Static data files
│   │   ├── contact.ts          # Contact information
│   │   ├── seo.ts              # SEO configuration
│   │   ├── services.ts         # Services data
│   │   └── serviceIntros.ts    # Service introduction content
│   │
│   ├── hooks/                  # Custom React hooks
│   ├── pages/                  # Page components
│   │   ├── About.tsx           # About Us page
│   │   ├── Blog.tsx            # Blog page
│   │   ├── Contact.tsx         # Contact page
│   │   ├── Home.tsx            # Homepage
│   │   ├── ProjectDetail.tsx   # Individual project view
│   │   ├── Projects.tsx        # Projects portfolio
│   │   └── Services.tsx        # Services overview
│   │
│   ├── styles/                 # Additional styles
│   ├── types/                  # TypeScript type definitions
│   │   └── index.ts            # Shared interfaces
│   ├── utils/                  # Utility functions
│   │   └── contactValidation.ts  # Form validation schemas
│   │
│   ├── App.tsx                 # Root application component
│   ├── App.css                 # App-level styles
│   ├── index.css               # Global styles with Tailwind
│   ├── main.tsx                # Application entry point
│   └── vite-env.d.ts           # Vite type declarations
│
├── public/                     # Static public assets
├── dist/                       # Production build output
├── tailwind.config.js          # Tailwind configuration
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.js           # PostCSS configuration
├── eslint.config.js            # ESLint configuration
└── package.json                # Dependencies and scripts
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/comfort-build-engineers.git

# Navigate to project directory
cd comfort-build-engineers/comfort-build-engineers

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The development server runs at `http://localhost:5173` with hot module replacement.

### Building for Production

```bash
# Type-check and build
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Services Offered

The website showcases 8 core engineering services:

1. **Mechanical Engineering** - HVAC, compressed air, cold storage, boilers, fire protection, solar heating
2. **Plumbing Services** - Water supply, waste removal, water treatment, drainage, pumping systems
3. **Electrical Engineering** - Power distribution, lighting, structured cabling, access control, fire detection
4. **Factory Planning** - Layout design, process engineering, utility infrastructure, material handling
5. **Project Management** - Planning, cost management, quality assurance, risk management
6. **Design & Build** - Conceptual design, engineering documentation, construction management
7. **Procurement Support** - Equipment specification, supplier qualification, factory acceptance testing
8. **Risk Management** - Project risk assessment, safety compliance, financial risk mitigation

## Configuration

### Environment Variables

The project uses Formspree for contact form submissions. The form ID is configured in `src/pages/Contact.tsx`.

### Tailwind Theme

Custom colors and fonts are defined in `tailwind.config.js`:

- **Primary Colors:** Red (#DC2626), Green (#059669), Yellow (#D97706)
- **Page-Specific Accents:** Each page has a unique accent color
- **Fonts:** Inter (body), IBM Plex Sans (headings)

### Image Optimization

Images are processed through vite-imagetools with three optimization profiles:

- `?hero` - Hero images: 1920/1280/768px widths, 75% quality
- `?service` - Service images: 1200/800/400px widths, 80% quality
- `?project` - Project images: 1600/1200/800/400px widths, 80% quality

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

All rights reserved. Comfort Build Engineers Limited.

## Contact

**Comfort Build Engineers Limited**
- Website: [cbengineers.co.ke](https://www.cbengineers.co.ke)
- Email: info@cbengineers.co.ke
- Location: Nairobi, Kenya

---

See [DESIGN.md](./DESIGN.md) for UI/UX documentation and [ARCHITECTURE.md](./ARCHITECTURE.md) for technical specifications.
