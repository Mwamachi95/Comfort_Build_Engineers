# Navigation Bar Implementation

Build a responsive, accessible navigation bar for **Comfort Build Engineers** using **React + TailwindCSS + Headless UI**. The navbar should follow a similar structure to Anthropic's navigation bar: clean, modern, and with dropdown grouping where needed.

## Requirements

### 1. Left Section

- A container that holds the company logo from the logo folder in the icons namely "CBE-Icon.svg" and text label: _Comfort Build Engineers_
- This should be aligned to the far left

### 2. Main Navigation Links (horizontal layout)

- _Home_
- _About Us_
- _Services_ → must be a **Headless UI** `<Menu>` dropdown with the following items:
  - Mechanical
  - Electrical
  - Plumbing
  - Factory Planning
  - Project Management
- _Projects_
- _FAQs_
- _Contact_

### 3. Styling & Behavior

- Use Tailwind classes for spacing, typography, hover/active states, and layout
- Dropdown menus should use **Headless UI** `Menu.Items` styled with a white background, subtle shadow, padding, and rounded corners
- On hover/active, links should show a clear state (e.g., text-blue-600 or background-blue-100)
- Ensure dropdown is fully keyboard accessible and ARIA-compliant (inherited from Headless UI)

### 4. Right Section (Optional CTA)

- Add a prominent button on the far right labeled _Request a Quote_
- Style it with Tailwind (e.g., `bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700`)

### 5. Responsive Behavior

- On mobile, collapse links into a hamburger menu using Headless UI's `<Disclosure>` component
- Dropdowns should adapt to mobile (stack vertically)

### 6. Overall Feel

- Minimalist and professional
- Layout and grouping inspired by Anthropic's navbar (clean spacing, grouped dropdowns, accessible)

## Technical Implementation Details

### Required Dependencies

Ensure the following are installed:

```bash
npm install @headlessui/react @heroicons/react
```

### Component Structure

Create a `Navbar.jsx` component that includes:

- Headless UI `Menu` for Services dropdown
- Headless UI `Disclosure` for mobile hamburger menu
- Proper Tailwind responsive classes (`hidden md:flex`, `md:hidden`, etc.)
- Heroicons for hamburger menu and dropdown chevrons

### Accessibility Requirements

- All interactive elements must be keyboard navigable
- Proper ARIA labels and roles (provided by Headless UI)
- Focus visible states using Tailwind's `focus:` variants
- Semantic HTML structure with `<nav>` element

### Color Scheme & Brand Alignment

Use professional colors suitable for an engineering firm:

- Primary: As defined in the project
- Neutral: As defined in the project
- Hover states: Subtle blue/gray combinations

### Responsive Breakpoints

- Desktop: Full horizontal navigation (md: and above)
- Tablet: Maintain horizontal layout with adjusted spacing
- Mobile: Hamburger menu with vertical stacked links (below md:)

### Implementation Notes

- Use React Router `Link` components for navigation (import from 'react-router-dom')
- Implement smooth transitions using Tailwind's `transition-all duration-200`
- Ensure dropdown closes on outside click and escape key
- Mobile menu should slide in/out smoothly using Headless UI transitions

Create a complete, production-ready navigation component that demonstrates best practices for accessibility, responsive design, and modern React development.
