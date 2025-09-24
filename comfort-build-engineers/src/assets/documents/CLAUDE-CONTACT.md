# Contact Page for Comfort Build Engineers Limited

## Overview

Create a complete Contact page component for Comfort Build Engineers Limited that provides visitors with comprehensive contact information and a professional contact form. The page should follow the established design system while incorporating CBE-specific branding and contact details.

## Page Structure & Layout

### Split Layout Design

- **Left Column (Contact Information)**: Company details, address, phone, email
- **Right Column (Contact Form)**: Professional contact form for inquiries
- **Two-column layout on desktop, stacked on mobile**
- **Consistent section padding** with other pages in the repository

## Content Requirements

### Left Column - Contact Information

#### Main Heading

"Contact Comfort Build Engineers"

#### Introduction Paragraph

"Reach out to our team to discuss your mechanical, electrical, and plumbing engineering needs. Learn how Comfort Build Engineers can support your project's success with reliable, dependable, and client-focused solutions."

#### Contact Details

**Address**
"Comfort Build Engineers Limited  
[Insert CBE Address]  
Nairobi, Kenya"

**Phone**
"[Insert CBE Phone Number]"

**Email**
"[Insert CBE Email Address]"

### Right Column - Contact Form

#### Form Fields (Required fields marked with \*)

1. **First name** \* (text input)
2. **Last name** \* (text input)
3. **Work email** \* (email input)
4. **Company name** \* (text input)
5. **What can we do for you?** (large textarea)

#### Submit Button

- Text: "Submit"
- Background color: `#A67458`
- Reference existing button styling patterns from the project base
- Follow repository button design conventions for hover states, typography, padding, etc.

## Design Specifications

### Typography

- **Consistent with Repository**: Use the established font system (Inter for body text, IBM Plex Sans for headings)
- **Proper Hierarchy**: Clear distinction between main heading, section labels, and body text
- **Form Labels**: Clean, professional styling consistent with overall design
- **Responsive Text Sizes**: Appropriate scaling across all screen sizes

### Color Scheme

- **Primary Background**: White (`bg-white`)
- **Button Color**: `#A67458` for the submit button background
- **Text Colors**: Follow established neutral color palette from the design system
- **Form Styling**: Professional input field styling with proper focus states

### Form Design

- **Professional Styling**: Clean, minimal form design
- **Input Field Styling**: Consistent with any existing form patterns in the repository
- **Validation Ready**: Structure to support React Hook Form + Zod validation (as mentioned in README)
- **Accessibility**: Proper labels, focus states, and keyboard navigation
- **Error States**: Prepare structure for validation error display

### Responsive Design

- **Desktop**: Two-column layout (contact info left, form right)
- **Tablet**: May maintain two columns or stack based on screen size
- **Mobile**: Single column stacked layout (contact info above form)
- **Form Responsiveness**: Form fields should adapt properly to container width
- **Touch-Friendly**: Appropriate input sizes and spacing for mobile devices

## Technical Requirements

### Component Structure

- **Main Component**: `ContactPage` as the primary page component
- **Form Integration**: Set up for React Hook Form integration with proper TypeScript types
- **Validation**: Structure ready for Zod schema validation
- **Routing**: Component should work with existing React Router setup

### Styling Requirements

- **Tailwind CSS**: Use established utility classes from the project
- **Button Styling**: Reference and extend existing button patterns with the `#A67458` color
- **Consistent Spacing**: Match section padding and margins with other pages
- **Form Styling**: Professional, accessible form field styling

### Accessibility & Performance

- **Semantic HTML**: Proper heading hierarchy, form labels, and structure
- **Keyboard Navigation**: Full keyboard accessibility for form interaction
- **Screen Reader Support**: Appropriate ARIA labels and descriptions
- **Loading States**: Consider loading states for form submission
- **Error Handling**: Structure for user-friendly error messages

## Integration Notes

### Repository Consistency

- **Follow Design System**: Maintain consistency with established color palette, typography, and spacing
- **Button Patterns**: Study and reference existing button implementations in the codebase
- **Component Architecture**: Follow the established component structure and naming conventions
- **TypeScript**: Full TypeScript support with proper type definitions

### Form Functionality Structure

- **React Hook Form**: Set up component to integrate with React Hook Form
- **Validation Schema**: Prepare structure for Zod validation schema
- **Submit Handler**: Create proper form submission handler structure
- **Success/Error States**: Include structure for handling form submission feedback

## Key Design Considerations

- **Professional Engineering Focus**: The design should reflect CBE's technical expertise and reliability
- **Kenyan Business Context**: Consider local business communication preferences
- **Contact Method Variety**: Provide multiple ways for clients to reach out
- **Project Inquiry Focus**: Form should be optimized for engineering project inquiries
- **Mobile-First Approach**: Ensure excellent mobile experience for on-site consultations

## Additional Requirements

- **Clean, Minimal Design**: Focus on usability and professional presentation
- **Fast Loading**: Optimize for quick page load times
- **Cross-Browser Compatible**: Ensure consistent experience across modern browsers
- **Print-Friendly**: Consider styling for potential print versions of contact info
