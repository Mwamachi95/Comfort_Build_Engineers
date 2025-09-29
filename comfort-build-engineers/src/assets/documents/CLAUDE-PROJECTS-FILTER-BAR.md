# Projects Filter Bar for Comfort Build Engineers

## Overview

Create a React component called `ProjectsFilterBar` that allows users to filter projects by category. This component should be positioned immediately after the Projects Hero section and provide an intuitive, responsive filtering interface.

## Content Requirements

### Filter Categories

The filter bar should include the following categories in this exact order:

1. **All** - Shows all projects (default active state)
2. **Commercial** - Commercial building projects
3. **Design-Build** - Integrated design-build projects
4. **Factory Planning** - Industrial facility planning projects
5. **Industrial** - Industrial sector projects
6. **Project Management** - Project management focused engagements
7. **Residential** - Residential building projects

### Category Display

- Each category should be clickable/tappable
- Clear visual indication of the currently active filter
- All categories should be visible on desktop (no dropdown unless necessary)
- Consider horizontal scrolling on mobile if needed for all categories

## Design Specifications

### Layout Structure

- **Full-width container** with proper section padding
- **Horizontal layout** with categories arranged in a row
- **Centered alignment** - Filter buttons centered within the container
- **White or light background** - Clean, professional appearance
- **Sticky behavior** (optional) - Filter bar could stick to top when scrolling

### Button/Filter Styling

- **Pill-style buttons** or clean rectangular buttons with rounded corners
- **Consistent sizing** - All filter buttons same height
- **Proper spacing** - Even gaps between filter buttons (e.g., 12-16px)
- **Active state**: Clearly distinguished with background color or border
- **Hover state**: Subtle hover effect to indicate interactivity
- **Typography**: Clean, readable font (Inter or IBM Plex Sans)

### Color Scheme

- **Active filter**: Use CBE brand color or a complementary accent color
- **Inactive filters**: Neutral gray or light styling
- **Hover effect**: Subtle color transition
- **Text contrast**: Ensure sufficient contrast for accessibility

### Responsive Design

- **Desktop**: All filters visible in a horizontal row
- **Tablet**: May require slight compression or smaller text
- **Mobile**:
  - Horizontal scrolling if needed to show all categories
  - Touch-friendly button sizes (minimum 44x44px touch targets)
  - Maintain usability on small screens

## Functionality Requirements

### Filter Interaction

- **Click/Tap to Filter**: Clicking a category filters the projects display
- **Active State Management**: Track which filter is currently active
- **Default State**: "All" should be active by default on page load
- **State Persistence**: Consider maintaining filter state during session
- **Smooth Transitions**: Animate the active state change

### Integration with Projects Display

- **State Management**: Component should manage or communicate filter state
- **Prop Passing**: Pass selected filter to Projects Grid component
- **React State/Context**: Use appropriate state management for filter selection
- **Callback Function**: Provide onFilterChange callback for parent component

## Technical Implementation

### Component Structure

- **React Functional Component** with TypeScript
- **useState Hook**: Manage active filter state
- **Event Handlers**: Handle filter button clicks
- **Props Interface**: Define clear TypeScript interfaces
- **Reusable Design**: Component should be maintainable and extensible

### Styling Approach

- **Tailwind CSS**: Use established utility classes
- **Consistent Patterns**: Follow repository styling conventions
- **Active Class Toggling**: Dynamic class application based on state
- **Smooth Animations**: Use Tailwind transitions or Framer Motion

### Accessibility Requirements

- **Keyboard Navigation**: Full keyboard accessibility (Tab, Enter, Space)
- **Focus Indicators**: Clear focus states for keyboard users
- **ARIA Labels**: Appropriate ARIA attributes for screen readers
- **Semantic HTML**: Use proper button elements
- **Announce Changes**: Screen readers should announce filter changes

## Filter Category Details

### Project Type Descriptions (for context)

- **All**: Display all projects across all categories
- **Commercial**: Office buildings, retail spaces, commercial complexes
- **Design-Build**: Turnkey projects from design to construction
- **Factory Planning**: Industrial facility layout and optimization
- **Industrial**: Manufacturing plants, warehouses, industrial facilities
- **Project Management**: Projects highlighting PM expertise
- **Residential**: Apartments, houses, residential complexes

## Visual Design Considerations

### Professional Appearance

- **Clean Interface**: Minimal, uncluttered design
- **Clear Hierarchy**: Filter bar should be visually distinct but not overwhelming
- **Brand Consistency**: Align with CBE's overall design language
- **Modern Aesthetic**: Contemporary UI patterns

### User Experience

- **Immediate Feedback**: Instant visual response to filter selection
- **Clear Affordances**: Obvious that buttons are interactive
- **Loading States**: Consider loading indicator when filtering
- **Empty States**: Handle case where no projects match filter

## Integration Notes

### Component Positioning

- Position immediately below Projects Hero section
- Proper vertical spacing from hero and projects grid
- Should feel integrated with the page, not floating

### State Management Strategy

- **Parent Component**: Projects page manages overall state
- **Filter Bar**: Communicates selection to parent
- **Projects Grid**: Receives filter value and displays accordingly
- **URL Parameters** (optional): Consider reflecting filter in URL

## Performance Considerations

- **Efficient Rendering**: Optimize re-renders when filter changes
- **Smooth Animations**: Hardware-accelerated transitions
- **Touch Responsiveness**: Immediate response to touch interactions
- **Memory Efficiency**: Clean up event listeners properly

## Future Extensibility

- **Easy to Add Categories**: Structure allows for additional filters
- **Multiple Filter Support**: Consider ability to select multiple filters
- **Advanced Filtering**: Could expand to include additional filter criteria
- **Search Integration**: Potential to add search functionality later

## Key Success Criteria

- **Intuitive Usage**: Users immediately understand how to filter
- **Visual Clarity**: Active filter is obvious at a glance
- **Responsive Excellence**: Works perfectly on all device sizes
- **Accessible Design**: Fully accessible to all users
- **Smooth Performance**: Fast, responsive filter switching
