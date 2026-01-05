# Design System & UI/UX Documentation

This document details the UI/UX design principles, visual identity, and design patterns implemented in the Comfort Build Engineers website.

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Visual Identity](#visual-identity)
3. [Typography](#typography)
4. [Color System](#color-system)
5. [Layout & Grid](#layout--grid)
6. [Component Design](#component-design)
7. [Animation & Motion](#animation--motion)
8. [Responsive Design](#responsive-design)
9. [Accessibility](#accessibility)
10. [Page-Specific Design](#page-specific-design)

---

## Design Philosophy

### Core Principles

1. **Professional Trust** - Design choices reflect the reliability and expertise of an engineering firm
2. **Visual Clarity** - Clean layouts with clear hierarchy guide users to key information
3. **Performance First** - Optimized assets ensure fast load times without sacrificing quality
4. **Accessibility** - Inclusive design that works for all users regardless of ability
5. **Mobile Priority** - Mobile-first approach ensures excellent experience on all devices

### Design Goals

- Establish credibility and trust through professional aesthetics
- Guide visitors toward key conversion actions (contact, quote requests)
- Showcase project portfolio in an engaging, filterable format
- Present complex service offerings in digestible segments
- Maintain brand consistency across all pages

---

## Visual Identity

### Brand Elements

**Company Logo**
- SVG format for crisp rendering at any size
- Icon variant (`CBE-Icon.svg`) for compact spaces
- Full logo with company name for larger contexts

**Visual Style**
- Clean, modern aesthetic with industrial undertones
- High-quality photography featuring engineering projects
- Subtle gradients and overlays for depth
- Consistent border-radius (rounded-md, rounded-lg)

### Imagery Guidelines

**Hero Images**
- Full-viewport background images with dark overlay (30% opacity)
- Subject matter: industrial facilities, engineering projects, team at work
- Optimized for fast loading with WebP format

**Service Images**
- Professional photography of equipment and installations
- Consistent aspect ratios within categories
- Custom SVG logos for each service type

**Project Images**
- Gallery format with lightbox functionality
- Multiple images per project for comprehensive view
- Consistent sizing and framing

---

## Typography

### Font Stack

**Headings: IBM Plex Sans**
```css
font-family: 'IBM Plex Sans', system-ui, sans-serif;
font-weight: 700;
```
- Used for all headings (h1-h6)
- Bold weight (700) for strong hierarchy
- Professional, technical feel appropriate for engineering

**Body: Inter**
```css
font-family: Inter, system-ui, sans-serif;
font-weight: 400;
```
- Clean, highly readable sans-serif
- Excellent screen rendering
- Variable weight for emphasis (400, 500, 600, 700)

### Type Scale

| Element | Mobile | Desktop | Weight | Line Height |
|---------|--------|---------|--------|-------------|
| H1 | 2xl (24px) | 5xl (48px) | Bold | Tight |
| H2 | xl (20px) | 3xl (30px) | Bold | Tight |
| H3 | lg (18px) | xl (20px) | Semibold | Normal |
| Body | base (16px) | lg (18px) | Normal | Relaxed |
| Small | sm (14px) | sm (14px) | Normal | Normal |
| Caption | xs (12px) | xs (12px) | Normal | Normal |

### Typography Patterns

**Section Labels**
```tsx
<span className="text-sm font-semibold tracking-wider uppercase font-heading">
  Section Label
</span>
```
- Uppercase with letter-spacing
- Page-specific accent color
- Creates visual rhythm and hierarchy

**Heading with Accent**
```tsx
<h1 className="text-4xl font-bold text-neutral-900 font-heading">
  Main text. <span style={{ color: '#A67458' }}>Accented text.</span>
</h1>
```
- Two-tone headings for visual interest
- Accent color matches page theme

---

## Color System

### Primary Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Red | `#DC2626` | CTAs, alerts, emphasis |
| Primary Green | `#059669` | Success states, secondary actions |
| Primary Yellow | `#D97706` | Warnings, highlights |

### Page-Specific Accent Colors

Each page has a unique accent color for visual distinction:

| Page | Color | Hex | Usage |
|------|-------|-----|-------|
| Home | Burgundy | `#A43D39` | Hero CTA, accents |
| About | Golden Yellow | `#D9A91A` | Labels, accents |
| Services | Sage Green | `#82AD9C` | Navigation, CTAs |
| Projects | Steel Blue | `#5A7E8C` | Filters, accents |
| Blog | Olive Green | `#808C27` | Links, labels |
| Contact | Warm Brown | `#A67458` | Form accents, CTAs |

### Service Brand Colors

Each service has a distinct color for identification:

| Service | Hex |
|---------|-----|
| Mechanical | `#4C8D8F` |
| Plumbing | `#4D594F` |
| Electrical | `#708C8C` |
| Factory Planning | `#2E402F` |
| Project Management | `#798C79` |
| Design & Build | `#345E6D` |
| Procurement | `#A68F97` |
| Risk Management | `#4B4952` |

### Neutral Palette

```javascript
neutral: {
  50: '#F9FAFB',   // Background light
  100: '#F3F4F6',  // Background
  200: '#E5E7EB',  // Borders
  300: '#D1D5DB',  // Disabled
  400: '#9CA3AF',  // Placeholder
  500: '#6B7280',  // Secondary text
  600: '#4B5563',  // Body text
  700: '#374151',  // Headings
  800: '#1F2937',  // Dark text
  900: '#111827',  // Darkest
}
```

### Color Application Patterns

**Dynamic CTA Buttons**
```tsx
const getCtaColor = () => {
  if (location.pathname === '/') return { bg: '#A43D39', hover: '#8B3530' };
  if (location.pathname === '/contact') return { bg: '#A67458', hover: '#8F6049' };
  // ... page-specific colors
};
```

**Hover State Transitions**
- All interactive elements have smooth color transitions
- 200ms duration for hover/focus states
- Darker shade on hover (approximately 15% darker)

---

## Layout & Grid

### Container System

**Section Container**
```css
.section-container {
  max-width: 1280px; /* 7xl */
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 640px) { padding: 0 24px; }
@media (min-width: 1024px) { padding: 0 32px; }
```

### Grid Patterns

**Two-Column Layout (Contact, About)**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
  <div>{/* Left content */}</div>
  <div>{/* Right content */}</div>
</div>
```

**Three-Column Layout (Services, Footer)**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

**Five-Column Footer**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
  {/* Company, Services, Projects, Quick Links, Contact */}
</div>
```

### Spacing Scale

| Name | Value | Usage |
|------|-------|-------|
| xs | 4px | Icon spacing |
| sm | 8px | Tight margins |
| md | 16px | Standard padding |
| lg | 24px | Section margins |
| xl | 32px | Large gaps |
| 2xl | 48px | Section padding |
| 3xl | 64px | Page sections |

---

## Component Design

### Button System

**Primary Button**
```tsx
<button className="bg-primary-red text-white px-6 py-3 rounded-md font-semibold
  hover:bg-red-700 transition-colors duration-200">
  Button Text
</button>
```

**Secondary Button**
```tsx
<button className="bg-primary-green text-white px-6 py-3 rounded-md font-semibold
  hover:bg-green-700 transition-colors duration-200">
  Button Text
</button>
```

**Outline Button**
```tsx
<button className="border-2 border-primary-red text-primary-red px-6 py-3
  rounded-md font-semibold hover:bg-primary-red hover:text-white
  transition-colors duration-200">
  Button Text
</button>
```

### Card Component

**Standard Card**
```tsx
<div className="bg-white rounded-lg shadow-md p-6 border border-neutral-200">
  {/* Card content */}
</div>
```

**Project Card**
- Image with aspect ratio preservation
- Hover overlay with quick actions
- Category badge positioning
- Title and metadata layout

**Service Card**
- Service logo/icon
- Title and description
- Segment grid (2x3 layout)
- Color-coded accents

### Navigation Patterns

**Desktop Navigation**
- Sticky header with white background
- Dropdown menus for Services and Projects
- Page-specific CTA button color
- Smooth hover transitions

**Mobile Navigation**
- Full-screen overlay panel
- Collapsible dropdowns with chevron indicators
- Touch-friendly tap targets (48px minimum)
- Social media links in footer area

### Form Design

**Input Fields**
```tsx
<input className="w-full px-4 py-3 border border-neutral-300 rounded-md
  focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400
  focus:border-transparent transition-colors duration-200 bg-white" />
```

**Form Layout**
- Two-column layout for name fields on larger screens
- Stacked layout on mobile
- Clear label hierarchy
- Inline error messages
- Loading and success states

---

## Animation & Motion

### Animation Library

The project uses **Framer Motion** for all animations with consistent patterns:

### Entry Animations

**Fade + Slide Up**
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
```

**Staggered Children**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
```

### Timing Patterns

| Animation Type | Duration | Easing |
|----------------|----------|--------|
| Page entry | 800ms | ease-out |
| Hover transition | 200ms | ease |
| Dropdown menu | 200ms | ease-out |
| Modal/overlay | 150ms | ease-in/out |

### Motion Principles

1. **Purpose** - Every animation serves a functional purpose
2. **Subtlety** - Animations enhance rather than distract
3. **Performance** - GPU-accelerated transforms only
4. **Consistency** - Same timing across similar interactions

### Specific Animations

**Hero Content Entrance**
- Container: 0ms delay
- Section label: 200ms delay
- Main heading: 400ms delay
- CTA button: 600ms delay

**Navigation Dropdown**
```tsx
<Transition
  enter="transition ease-out duration-200"
  enterFrom="opacity-0 scale-95"
  enterTo="opacity-100 scale-100"
  leave="transition ease-in duration-150"
  leaveFrom="opacity-100 scale-100"
  leaveTo="opacity-0 scale-95"
>
```

---

## Responsive Design

### Breakpoint System

| Breakpoint | Width | Target Devices |
|------------|-------|----------------|
| sm | 640px | Large phones |
| md | 768px | Tablets |
| lg | 1024px | Small laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

### Mobile-First Approach

All styles are written mobile-first with progressive enhancement:

```tsx
className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl"
```

### Responsive Patterns

**Navigation**
- Mobile: Hamburger menu with full-screen overlay
- Tablet: Same as mobile with larger tap targets
- Desktop (xl+): Horizontal navigation with dropdowns

**Grid Layouts**
- Mobile: Single column
- Tablet (md): Two columns
- Desktop (lg+): Three to five columns

**Hero Sections**
- Mobile: Reduced padding, smaller text
- Desktop: Full viewport height, larger typography

**Images**
- Responsive srcset with multiple widths
- Object-fit cover for consistent aspect ratios
- Native lazy loading for performance

---

## Accessibility

### WCAG 2.1 Compliance

The design follows WCAG 2.1 Level AA guidelines:

### Color Contrast

- All text meets minimum contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Interactive elements have visible focus states
- Color is not the only means of conveying information

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Visible focus indicators on all focusable elements
- Logical tab order following visual layout
- Skip links for main content (where applicable)

### Screen Reader Support

**ARIA Labels**
```tsx
<button aria-label="Toggle Services dropdown">
  <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
</button>
```

**Semantic HTML**
- Proper heading hierarchy (h1 > h2 > h3)
- Landmark regions (header, main, footer, nav)
- Descriptive link text

### Interactive Elements

- Minimum touch target size: 44x44px
- Clear hover and focus states
- Disabled state styling
- Error message association with form fields

### Image Accessibility

```tsx
<OptimizedImage
  picture={image}
  alt="Descriptive alternative text"
  loading="lazy"
/>
```

---

## Page-Specific Design

### Home Page

**Hero Section**
- Full-viewport background image
- Frosted glass content card (backdrop-blur)
- Staggered animation sequence
- Clear call-to-action

**Services Carousel**
- Horizontal scrolling on mobile
- Grid layout on desktop
- Service-specific color coding
- Interactive cards with hover states

**Client Logos Section**
- Horizontal logo strip
- Grayscale with color on hover
- Trust-building social proof

### About Page

**Company Background**
- Split layout: image + text
- Timeline or milestone visualization
- Values grid with icons

**Vision & Mission**
- Hero-style presentation
- Distinct visual treatment from main content
- Inspiring imagery

### Services Page

**Service Cards**
- Expandable/collapsible design
- Segment grid (2 rows x 3 columns)
- Hash-based navigation for direct linking
- Service-specific branding

### Projects Page

**Filter Bar**
- Category tabs (All, Commercial, Industrial, Residential)
- Active state indication
- Mobile-friendly touch targets

**Project Grid**
- Responsive card layout
- Image-forward design
- Category and location metadata
- Hover state with view action

### Contact Page

**Two-Column Layout**
- Left: Contact information with icons
- Right: Contact form in card
- Visual hierarchy emphasizing form submission

**Form Design**
- Clear field labels
- Inline validation
- Success/error messaging
- Loading state for submission

---

## Design Assets

### Icon Library

Using **Heroicons** (Outline style):
- Navigation: Bars3Icon, XMarkIcon, ChevronDownIcon
- Contact: PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon
- Actions: ArrowRightIcon, CheckCircleIcon, XCircleIcon

### Image Optimization

Three image profiles configured in Vite:

```typescript
// Hero images - highest quality, largest sizes
?hero → format: webp;jpg, quality: 75, w: 1920;1280;768

// Service images - medium optimization
?service → format: webp;jpg, quality: 80, w: 1200;800;400

// Project images - gallery optimization
?project → format: webp;jpg, quality: 80, w: 1600;1200;800;400
```

---

## Future Considerations

### Planned Enhancements
- Dark mode theme support
- Animation preference (reduced motion) support
- Print stylesheet optimization
- Progressive Web App (PWA) capabilities

### Design System Evolution
- Component library documentation
- Storybook integration
- Design token management
- Figma design system sync

---

*This design system is maintained as part of the Comfort Build Engineers website project. For technical implementation details, see [ARCHITECTURE.md](./ARCHITECTURE.md).*
