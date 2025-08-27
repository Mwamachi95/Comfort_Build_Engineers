# Services Section Component

Build a responsive Services Section component for **Comfort Build Engineers** using **React + TypeScript + TailwindCSS + Framer Motion**. This component consists of two main parts: a **Service Card** and a **Service Segments Grid**.

## Component Structure

The Services Section component contains exactly two child components:

1. **Service Card** - Displays the main service information
2. **Service Segments Grid** - Contains 6 individual segment cards in a grid layout

## Overall Container Layout

### Desktop Layout (≥768px)

- Full-width section container with horizontal flex layout
- 32px gap between Service Card and Service Segments Grid
- Service Card takes 33.333% width
- Service Segments Grid takes 66.667% width
- Both containers should have equal heights and be top-aligned

### Mobile Layout (<768px)

- Stack vertically with flex-direction column
- Service Card appears first, then Service Segments Grid
- 24px vertical gap between components

## Service Card Specifications

### Container Properties

- Width: 33.333% of parent container (desktop), full width (mobile)
- Height: Auto, but must match height of Service Segments Grid
- Background: Solid blue (#1e40af)
- Border radius: 16px
- Padding: 40px (desktop), 24px (mobile)
- Box shadow: Subtle elevation shadow

### Content Layout

- **Icon Area**:

  - Position: Top-left corner
  - Size: 48px × 48px circle
  - Background: White with 20% opacity
  - Contains a chart/trending icon, white color, 24px size
  - 32px bottom margin

- **Main Heading**:

  - Font: IBM Plex Sans Bold
  - Size: 28px (desktop), 24px (mobile)
  - Line height: 1.2
  - Color: White
  - 16px bottom margin
  - Text: "Mechanical" (for the test service)

- **Description Text**:
  - Font: Inter Regular
  - Size: 16px
  - Line height: 1.5
  - Color: White with 90% opacity
  - Text: "Complete HVAC, ventilation, and building automation solutions for optimal comfort and efficiency"

### Interactive States

- Hover: Subtle scale transform (scale 1.02)
- Smooth transition: 300ms ease-in-out for all properties

## Service Segments Grid Specifications

### Grid Container

- Width: 66.667% of parent container (desktop), full width (mobile)
- CSS Grid display
- Desktop: 3 columns, 2 rows with 16px gap
- Mobile: 1 column, 6 rows with 16px gap
- Height: Fixed to match Service Card height
- Overflow: Hidden (critical for expansion effect)

### Grid contains exactly 6 segment cards with these titles:

1. "HVAC System Design & Installation"
2. "Building Automation Systems (BAS)"
3. "Exhaust & Ventilation"
4. "Chilled Water & Heating Systems"
5. "Energy Recovery & Management"
6. "Air Filtration & Cleanroom Solutions"

## Segment Card Specifications

### Default State Styling

- Background: White
- Border: 1px solid #e5e7eb
- Border radius: 12px
- Padding: 24px
- Position: Relative
- Overflow: Hidden
- Smooth transitions: 400ms cubic-bezier(0.4, 0, 0.2, 1) for all properties
- Cursor: Pointer

### Card Content Elements

#### Plus Icon

- Position: Absolute top-right corner (20px from top, 20px from right)
- Size: 24px × 24px
- Color: #6b7280 (gray-500)
- Background: Transparent
- Transition: Transform 300ms ease-in-out
- Z-index: 2

#### Card Title

- Font: IBM Plex Sans Bold
- Size: 18px
- Line height: 1.3
- Color: #1f2937 (gray-800)
- Right margin: 32px (space for plus icon)
- Bottom margin: 12px

#### Card Description (Hidden by Default)

- Font: Inter Regular
- Size: 14px
- Line height: 1.4
- Color: #6b7280 (gray-500)
- Opacity: 0 (hidden)
- Max height: 0
- Overflow: Hidden
- Top margin: 12px
- Transitions: Opacity 300ms ease-in-out 100ms, Max-height 400ms ease-in-out

### Hover State Mechanics

#### Card Expansion

- Transform: Scale 1.08 (8% larger)
- Z-index: 10 (above other cards)
- Enhanced shadow: Deeper, more prominent shadow

#### Plus Icon Animation

- Transform: Rotate -45 degrees counterclockwise (forms an ×)
- Color change: #ef4444 (red-500)

#### Content Reveal

- Description opacity: 1 (visible)
- Description max-height: 100px

#### Adjacent Cards Compression

This is the critical complex behavior:

- Cards in the same row must compress horizontally using scaleX(0.92)
- Cards in the same column must compress vertically using scaleY(0.92)
- Cards diagonal to the hovered card compress with scale(0.92)
- The grid container maintains its original dimensions throughout
- All compression animations should be smooth and synchronized

### Grid Position Logic Required

Each card must be aware of its position in the 3×2 grid:

- Position (1,1): Top-left
- Position (1,2): Top-center
- Position (1,3): Top-right
- Position (2,1): Bottom-left
- Position (2,2): Bottom-center
- Position (2,3): Bottom-right

### Content Data for Each Segment

Use the mechanical service segments from the provided document, with appropriate descriptions for each card when expanded.

## Technical Implementation Requirements

### TypeScript

- Proper type definitions for all props and state
- Interface definitions for service data structure

### Framer Motion

- Use for all animations and transitions
- Implement the complex spatial compression logic
- Handle hover states and smooth transitions
- Consider performance optimization for simultaneous animations

### Tailwind CSS

- Utilize Tailwind's utility classes for styling
- Implement responsive design breakpoints
- Use Tailwind's color system and spacing scale

### Accessibility

- Keyboard navigation support (tab through cards)
- Focus states that match hover effects
- ARIA labels for screen readers
- Respect prefers-reduced-motion media query

### Performance Considerations

- Use transform and opacity for animations (GPU acceleration)
- Avoid animating layout properties
- Implement proper will-change declarations where needed

## Development Approach

Focus on building and perfecting this single Mechanical service implementation first. Once the interaction patterns, styling, and responsive behavior work flawlessly, this component will serve as the template for replicating the pattern across all other services (Plumbing, Electrical, Project Management, Factory Planning & Process Design, and Design & Build).

## Expected User Experience

Users should experience a sophisticated, space-efficient interface where hovering over any segment card reveals detailed information while maintaining the overall layout structure. The animation should feel smooth and professional, with clear visual feedback that enhances rather than distracts from the content exploration.

1. Plumbing
1. Domestic & Commercial Water Systems: From simple residential setups to complex commercial and industrial water supply systems, we design and install systems that are efficient, reliable, and compliant with all health and safety standards.

1. Sanitary & Drainage: We provide comprehensive solutions for all sanitary and stormwater drainage needs, ensuring proper waste disposal and preventing blockages. Our designs prioritize hygiene and long-term functionality.

1. Fire Suppression Systems: We are experts in the design and installation of fire sprinkler, hydrant, and hose reel systems. Our fire suppression solutions are built to protect your property and meet stringent fire safety regulations.

1. Specialized Piping: Our services extend to specialized piping for various industrial applications, including process piping, compressed air lines, and medical gas systems, all designed with precision and safety in mind.

1. Water Conservation & Treatment: We help clients implement sustainable plumbing solutions through greywater recycling, rainwater harvesting, and efficient water treatment systems to reduce consumption and costs.

1. Maintenance & Repairs: We offer scheduled maintenance and emergency repair services to ensure your plumbing systems operate flawlessly, minimizing downtime and extending the lifespan of your assets.

1. Mechanical
1. HVAC System Design & Installation: We create custom heating, ventilation, and air conditioning (HVAC) systems for new builds and renovations. Our designs prioritize energy efficiency, thermal comfort, and indoor air quality.

1. Building Automation Systems (BAS): We integrate intelligent BAS controls to automate and optimize your building's mechanical systems. This allows for centralized management and significant reductions in energy consumption.

1. Exhaust & Ventilation: Our services include the design and installation of robust ventilation and exhaust systems for commercial kitchens, laboratories, and industrial facilities, ensuring a safe and clean working environment.

1. Chilled Water & Heating Systems: We specialize in the installation of central heating and cooling plants, including boilers, chillers, and distribution piping, to provide reliable temperature control for large commercial and industrial buildings.

1. Energy Recovery & Management: We design systems that recover waste heat and energy, leading to substantial utility savings. Our energy management solutions are tailored to help you achieve your sustainability goals.

1. Air Filtration & Cleanroom Solutions: For specialized environments, we design and install advanced air filtration and pressurization systems, including cleanroom solutions for healthcare, pharmaceutical, and manufacturing industries.

1. Electrical
1. Power Distribution & Lighting: We design and install safe and efficient power distribution networks, from main switchboards to circuit panels. We also provide comprehensive lighting solutions for every need, from general illumination to architectural lighting.

1. Data & Communication Systems: Our expertise includes the design and installation of structured cabling, fiber optics, and communication systems to support your IT infrastructure, ensuring seamless connectivity and data transfer.

1. Fire, Security & Life Safety: We install integrated fire alarm, CCTV, access control, and public address systems. Our life safety solutions are designed to protect people and property while meeting all regulatory requirements.

1. Emergency & Backup Power: We provide reliable backup power solutions, including generator installations and uninterruptible power supply (UPS) systems, to ensure your critical operations continue without interruption during power outages.

1. Renewable Energy Integration: We assist clients in integrating renewable energy sources, such as solar power, into their electrical systems to reduce their carbon footprint and achieve energy independence.

1. Electrical Maintenance & Audits: We offer regular maintenance plans and electrical audits to identify potential issues, improve system performance, and ensure your electrical infrastructure remains safe and efficient.

1. Project Management
1. Scope & Strategy Definition: We work with you to meticulously define the project scope, objectives, and deliverables. Our strategic planning ensures that the project aligns perfectly with your business goals from the start.

1. Budget & Financial Control: We provide comprehensive budget management, from initial cost estimation to real-time tracking of expenditures. Our financial oversight keeps your project on a solid financial footing.

1. Scheduling & Timeline Management: We develop realistic and detailed project schedules, setting key milestones and deadlines. Our proactive approach ensures that every phase of the project is completed on time.

1. Procurement & Subcontractor Management: We manage the entire procurement process, from sourcing materials to vetting and coordinating subcontractors. We ensure you get the best quality and value for your investment.

1. Risk Management & Mitigation: We identify potential risks and challenges early in the process and develop strategies to mitigate them. Our proactive risk management minimizes disruptions and protects your project from unforeseen issues.

1. Quality Assurance & Control: We implement rigorous quality control measures throughout the project lifecycle. We conduct regular inspections and audits to ensure that all work meets the highest standards of quality and craftsmanship.

1. Factory Planning & Process Design
1. Facility Layout & Optimization: We design efficient and ergonomic factory layouts that optimize material flow, reduce waste, and improve productivity. Our plans are tailored to your specific production processes and future growth.

1. Process Analysis & Improvement: We analyze your existing manufacturing processes to identify bottlenecks and inefficiencies. We then design improved workflows and systems to enhance productivity and quality.

1. Equipment & Systems Integration: We specialize in integrating new and existing machinery, conveyor systems, and automation equipment into a cohesive and efficient production line.

1. Utility & Infrastructure Planning: We provide detailed planning for all factory utilities, including power distribution, compressed air, water lines, and specialized process piping, to support a robust and reliable operation.

1. Automation & Robotics: We design and implement automated and robotic systems to streamline repetitive tasks, improve safety, and increase production speed and accuracy.

1. Regulatory Compliance & Safety: Our designs prioritize safety and compliance with all industry regulations and standards. We ensure your factory is a safe and secure environment for your employees and operations.

1. Design & Build
1. Single-Source Responsibility: We serve as your single point of contact for the entire project, from initial concept to final delivery. This streamlined approach simplifies communication and ensures seamless project execution.

1. Integrated Team Collaboration: Our in-house design and construction teams work together from day one. This close collaboration eliminates common issues and ensures the design vision is brought to life efficiently and accurately.

1. Accelerated Project Timeline: The Design & Build model significantly reduces project timelines by overlapping the design and construction phases. We get your project to completion faster without compromising on quality.

1. Cost & Budget Control: This approach provides greater control over project costs from the outset. Our integrated team identifies potential savings and ensures the project stays within budget without surprises.

1. Value Engineering: Throughout the project, we continuously evaluate design choices and material selections to ensure you get the best possible value for your investment. We look for innovative solutions that optimize both cost and performance.

1. Total Project Accountability: With a single team responsible for both the design and construction, there is full accountability for the project's success. We stand behind our work and are committed to delivering on our promises.
