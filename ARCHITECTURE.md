# Technical Architecture Documentation

This document provides comprehensive technical specifications for the Comfort Build Engineers website, including architecture decisions, implementation patterns, and development guidelines.

## Table of Contents

1. [System Overview](#system-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Component Architecture](#component-architecture)
5. [Routing System](#routing-system)
6. [State Management](#state-management)
7. [Form Handling](#form-handling)
8. [Image Optimization](#image-optimization)
9. [SEO Implementation](#seo-implementation)
10. [Build Configuration](#build-configuration)
11. [Performance Optimization](#performance-optimization)
12. [Type System](#type-system)
13. [Code Quality](#code-quality)

---

## System Overview

### Architecture Type

**Single Page Application (SPA)** with client-side routing, built on React and TypeScript.

### Key Characteristics

- **Static Site Generation Ready** - Can be deployed to static hosting
- **Client-Side Rendering** - All rendering happens in the browser
- **No Backend Required** - Form submissions handled via Formspree
- **CDN-Optimized** - All assets optimized for CDN delivery

### Data Flow

```
User Request
     ↓
Static HTML Shell (index.html)
     ↓
React Hydration
     ↓
React Router (Client-side)
     ↓
Page Component Render
     ↓
Data from Static Files (src/data/)
     ↓
Component Rendering
```

---

## Technology Stack

### Core Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3.1 | UI library |
| react-dom | ^18.3.1 | DOM rendering |
| react-router-dom | ^7.8.1 | Client-side routing |
| typescript | ~5.8.3 | Type safety |

### UI & Styling

| Package | Version | Purpose |
|---------|---------|---------|
| tailwindcss | ^3.4.17 | Utility CSS framework |
| @headlessui/react | ^2.2.7 | Accessible UI components |
| @heroicons/react | ^2.2.0 | SVG icons |
| framer-motion | ^12.23.12 | Animation library |

### Forms & Validation

| Package | Version | Purpose |
|---------|---------|---------|
| react-hook-form | ^7.62.0 | Form state management |
| @formspree/react | ^3.0.0 | Form submission backend |
| @hookform/resolvers | ^5.2.1 | Schema resolvers |
| zod | ^4.0.17 | Schema validation |

### SEO

| Package | Version | Purpose |
|---------|---------|---------|
| react-helmet-async | ^2.0.5 | Document head management |

### Build Tools

| Package | Version | Purpose |
|---------|---------|---------|
| vite | ^7.1.2 | Build tool & dev server |
| @vitejs/plugin-react | ^5.0.0 | React Fast Refresh |
| vite-imagetools | ^9.0.0 | Image optimization |
| sharp | ^0.34.4 | Image processing |
| postcss | ^8.5.6 | CSS processing |
| autoprefixer | ^10.4.21 | CSS vendor prefixes |

### Linting

| Package | Version | Purpose |
|---------|---------|---------|
| eslint | ^9.33.0 | Code linting |
| typescript-eslint | ^8.39.1 | TypeScript linting |
| eslint-plugin-react-hooks | ^5.2.0 | React hooks rules |
| eslint-plugin-react-refresh | ^0.4.20 | Fast Refresh support |

---

## Project Structure

### Directory Organization

```
comfort-build-engineers/
├── src/
│   ├── assets/              # Static assets
│   │   ├── documents/       # PDFs, documents
│   │   ├── icons/           # SVG icons
│   │   │   └── logo/        # Brand logos
│   │   └── images/          # Photographs
│   │       ├── About/       # About page images
│   │       ├── Home/        # Home page images
│   │       ├── Projects/    # Project gallery images
│   │       └── Service-page/ # Service images
│   │
│   ├── components/          # React components
│   │   ├── common/          # Shared utility components
│   │   ├── forms/           # Form components
│   │   ├── layout/          # Layout components
│   │   ├── sections/        # Page section components
│   │   └── ui/              # Base UI components
│   │
│   ├── data/                # Static data files
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Page components
│   ├── styles/              # Additional stylesheets
│   ├── types/               # TypeScript definitions
│   ├── utils/               # Utility functions
│   │
│   ├── App.tsx              # Root component
│   ├── App.css              # App styles
│   ├── index.css            # Global styles
│   ├── main.tsx             # Entry point
│   └── vite-env.d.ts        # Vite types
│
├── public/                  # Public static files
├── dist/                    # Build output
│
├── index.html               # HTML template
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── tsconfig.app.json        # App TS config
├── tsconfig.node.json       # Node TS config
├── vite.config.ts           # Vite config
├── tailwind.config.js       # Tailwind config
├── postcss.config.js        # PostCSS config
└── eslint.config.js         # ESLint config
```

### File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `HomeHero.tsx` |
| Pages | PascalCase | `Projects.tsx` |
| Utilities | camelCase | `contactValidation.ts` |
| Data files | camelCase | `services.ts` |
| Types | camelCase | `index.ts` |
| Styles | camelCase | `index.css` |
| Images | kebab-case | `home-hero.jpg` |

---

## Component Architecture

### Component Categories

**Page Components** (`src/pages/`)
- Top-level route components
- Compose section components
- Handle page-specific logic
- Manage SEO metadata

**Section Components** (`src/components/sections/`)
- Self-contained page sections
- Reusable across pages
- May have local state
- Example: `HomeHero`, `ProjectsGrid`

**Layout Components** (`src/components/layout/`)
- Structural components
- Wrap page content
- Handle global UI elements
- Example: `Layout`, `Navbar`, `Footer`

**Common Components** (`src/components/common/`)
- Utility components
- Highly reusable
- No business logic
- Example: `SEO`, `OptimizedImage`, `BackToTop`

### Component Pattern

**Functional Components with TypeScript**

```tsx
import React from 'react';

interface ComponentProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const Component: React.FC<ComponentProps> = ({
  title,
  description,
  children
}) => {
  return (
    <div className="component-class">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
};

export default Component;
```

### Layout System

**Root Layout Structure**

```tsx
// App.tsx
<Router>
  <ScrollToTop />
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* ... routes */}
    </Routes>
  </Layout>
</Router>
```

**Layout Component**

```tsx
// Layout.tsx
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-grow relative">
        {children}
      </main>
      <FooterCTA />
      <Footer />
      <BackToTop />
    </div>
  );
};
```

---

## Routing System

### Route Configuration

```tsx
// App.tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/services" element={<Services />} />
  <Route path="/services/:serviceType" element={<Services />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/projects/:category" element={<Projects />} />
  <Route path="/project/:projectId" element={<ProjectDetail />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/blog/:postSlug" element={<Blog />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

### Route Parameters

| Route | Parameter | Usage |
|-------|-----------|-------|
| `/services/:serviceType` | serviceType | Filter to specific service |
| `/projects/:category` | category | Filter by project category |
| `/project/:projectId` | projectId | Display specific project |
| `/blog/:postSlug` | postSlug | Display specific blog post |

### Navigation Patterns

**Internal Navigation**
```tsx
import { Link } from 'react-router-dom';
<Link to="/services">Services</Link>
```

**Hash Navigation (Services)**
```tsx
<Link to="/services#mechanical">Mechanical</Link>
```

**Programmatic Navigation**
```tsx
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
navigate('/projects');
```

### Scroll Restoration

```tsx
// ScrollToTop.tsx
const ScrollToTop: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
```

---

## State Management

### State Strategy

The application uses **component-local state** without global state management:

- **useState** - Local component state
- **useEffect** - Side effects and subscriptions
- **URL State** - Route parameters for filtering
- **Form State** - Managed by react-hook-form

### State Patterns

**URL-Driven State (Projects Filter)**

```tsx
const Projects: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  useEffect(() => {
    const initialFilter = getCategoryFromUrl(category);
    setActiveFilter(initialFilter);
  }, [category]);
};
```

**UI State (Mobile Navigation)**

```tsx
const Navbar: React.FC = () => {
  const [openMobileDropdowns, setOpenMobileDropdowns] =
    useState<Record<string, boolean>>({});
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
};
```

### Data Layer

Static data is imported directly from TypeScript files:

```tsx
// Usage
import { services } from '../data/services';
import { contactInfo } from '../data/contact';

// Data structure
export const services: Service[] = [
  {
    id: '1',
    name: 'Mechanical Engineering',
    slug: 'mechanical',
    // ...
  },
];
```

---

## Form Handling

### Form Architecture

```
react-hook-form (state management)
        ↓
Zod Schema (validation)
        ↓
Formspree (submission)
```

### Validation Schema

```typescript
// utils/contactValidation.ts
import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters'),

  lastName: z
    .string()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters'),

  workEmail: z
    .string()
    .min(1, 'Work email is required')
    .email('Please enter a valid email address'),

  companyName: z
    .string()
    .min(1, 'Company name is required')
    .min(2, 'Company name must be at least 2 characters'),

  message: z
    .string()
    .optional()
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
```

### Form Implementation

```tsx
const Contact: React.FC = () => {
  const [formspreeState, handleFormspreeSubmit] = useFormspree("xrbyrlkn");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormSchema) => {
    await handleFormspreeSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName')} />
      {errors.firstName && <span>{errors.firstName.message}</span>}
      {/* ... */}
    </form>
  );
};
```

---

## Image Optimization

### Vite Image Tools Configuration

```typescript
// vite.config.ts
imagetools({
  defaultDirectives: (url) => {
    // Hero images: aggressive optimization
    if (url.searchParams.has('hero')) {
      return new URLSearchParams({
        format: 'webp;jpg',
        quality: '75',
        w: '1920;1280;768',
        as: 'picture'
      });
    }

    // Service images: medium optimization
    if (url.searchParams.has('service')) {
      return new URLSearchParams({
        format: 'webp;jpg',
        quality: '80',
        w: '1200;800;400',
        as: 'picture'
      });
    }

    // Project images: standard optimization
    if (url.searchParams.has('project')) {
      return new URLSearchParams({
        format: 'webp;jpg',
        quality: '80',
        w: '1600;1200;800;400',
        as: 'picture'
      });
    }

    return new URLSearchParams();
  }
})
```

### Image Import Pattern

```tsx
// Import with optimization query parameter
import HomeHeroBg from '../../assets/images/Home/hero/home-hero.jpg?hero';

// Usage
<OptimizedImage picture={HomeHeroBg} alt="..." loading="eager" />
```

### OptimizedImage Component

```tsx
interface Picture {
  img: { src: string; w: number; h: number };
  sources: {
    [key: string]: Array<{ src: string; w: number; h: number }>;
  };
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  picture,
  alt,
  className = '',
  loading = 'lazy',
  sizes = '100vw'
}) => {
  return (
    <picture>
      {/* WebP sources */}
      {picture.sources['image/webp'] && (
        <source
          type="image/webp"
          srcSet={generateSrcSet(picture.sources['image/webp'])}
          sizes={sizes}
        />
      )}

      {/* JPEG fallback */}
      {picture.sources['image/jpeg'] && (
        <source
          type="image/jpeg"
          srcSet={generateSrcSet(picture.sources['image/jpeg'])}
          sizes={sizes}
        />
      )}

      {/* Fallback img */}
      <img
        src={picture.img.src}
        alt={alt}
        className={className}
        loading={loading}
        width={picture.img.w}
        height={picture.img.h}
      />
    </picture>
  );
};
```

---

## SEO Implementation

### SEO Component

```tsx
// components/common/SEO.tsx
interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  keywords?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = (props) => {
  const siteUrl = 'https://www.cbengineers.co.ke';
  const fullTitle = `${props.title} | Comfort Build Engineers`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={props.description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={props.description} />

      {/* Twitter */}
      <meta name="twitter:card" content={props.twitterCard} />

      {/* Structured Data */}
      {props.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(props.structuredData)}
        </script>
      )}
    </Helmet>
  );
};
```

### Structured Data (Schema.org)

```typescript
// data/seo.ts
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Comfort Build Engineers Limited',
  url: 'https://www.cbengineers.co.ke',
  logo: 'https://www.cbengineers.co.ke/android-chrome-512x512.png',
  // ...
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Comfort Build Engineers Limited',
  // ...
};
```

### Per-Page SEO

```tsx
// pages/Home.tsx
<SEO
  title="Home"
  description="Comfort Build Engineers - Leading MEP engineering..."
  canonicalUrl="/"
  keywords="MEP engineering Kenya, mechanical engineering..."
  structuredData={{
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, localBusinessSchema],
  }}
/>
```

---

## Build Configuration

### Vite Configuration

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [
    react(),
    imagetools({ /* ... */ })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-forms': ['react-hook-form', '@formspree/react', '@hookform/resolvers', 'zod'],
          'vendor-ui': ['@headlessui/react', '@heroicons/react']
        }
      }
    },
    chunkSizeWarningLimit: 500,
    minify: 'esbuild'
  }
});
```

### TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### Tailwind Configuration

```javascript
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#DC2626',
          green: '#059669',
          yellow: '#D97706',
        },
        neutral: { /* ... */ },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

---

## Performance Optimization

### Code Splitting

Vendor chunks are split for optimal caching:

| Chunk | Contents | Size (approx) |
|-------|----------|---------------|
| vendor-react | React, ReactDOM, Router | ~140KB |
| vendor-motion | Framer Motion | ~100KB |
| vendor-forms | Form libraries | ~50KB |
| vendor-ui | UI components | ~30KB |

### Image Optimization

- **WebP format** with JPEG fallback
- **Responsive srcsets** for device-appropriate sizes
- **Quality optimization** (75-80%)
- **Native lazy loading** for below-fold images
- **Explicit dimensions** to prevent layout shift

### Bundle Size Management

- Tree-shaking enabled via ESM
- CSS purging via Tailwind
- esbuild minification for fast builds
- Chunk size warning at 500KB

### Runtime Optimizations

- **React.memo** for expensive components (where applicable)
- **CSS transitions** instead of JS animations where possible
- **GPU-accelerated transforms** for animations
- **Event delegation** for lists

---

## Type System

### Core Type Definitions

```typescript
// types/index.ts

export interface Service {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: string;
  logo: string;
  slug: string;
  color: string;
  segments: SegmentCard[];
}

export interface SegmentCard {
  id: string;
  title: string;
  description: string;
  position: { row: number; col: number };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  serviceType: string;
  sector: string;
  scale: string;
  images: string[];
  completionDate: string;
  client?: string;
  location: string;
  features: string[];
}

export interface Picture {
  img: { src: string; w: number; h: number };
  sources: {
    [key: string]: Array<{ src: string; w: number; h: number }>
  };
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  workEmail: string;
  companyName: string;
  message: string;
}
```

### Type Usage Patterns

**Props Interface**
```tsx
interface ComponentProps {
  title: string;
  isActive?: boolean;
  onAction: () => void;
}

const Component: React.FC<ComponentProps> = ({ title, isActive = false }) => {
  // ...
};
```

**Event Handlers**
```tsx
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
};
```

**Form Types**
```tsx
type ContactFormSchema = z.infer<typeof contactFormSchema>;
```

---

## Code Quality

### ESLint Configuration

```javascript
// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);
```

### Code Style Guidelines

1. **Functional Components** - Use FC type and arrow functions
2. **Named Exports** - For utilities and types
3. **Default Exports** - For components and pages
4. **Consistent Formatting** - Via Prettier (recommended)
5. **TypeScript Strict Mode** - All strict checks enabled

### Development Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

---

## Deployment

### Build Process

```bash
# Type check and build
npm run build

# Output in dist/
# - index.html
# - assets/
#   - *.js (chunked)
#   - *.css
#   - images (optimized)
```

### Hosting Requirements

- Static file hosting (Vercel, Netlify, Cloudflare Pages)
- SPA routing support (fallback to index.html)
- HTTPS required for production
- CDN recommended for global performance

### Environment Considerations

| Environment | Notes |
|-------------|-------|
| Development | `npm run dev` - localhost:5173 |
| Production | Static build, CDN-hosted |
| Preview | `npm run preview` - production build locally |

---

*For design system and UI/UX documentation, see [DESIGN.md](./DESIGN.md).*
