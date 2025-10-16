# Procurement Support & Risk Management Services - Comfort Build Engineers

## Overview

Create service introduction sections and service segments for two new services: **Procurement Support Services for Factory Equipment and Machinery** and **Risk Management Services**. These services should follow the exact same template and structure as the existing services (Mechanical, Electrical, Plumbing, Factory Planning, Project Management, and Design & Build) in the project base.

## Template Structure to Follow

Follow the exact component structure, styling, and responsive behavior established in the existing service implementations.

## Service 1: Procurement Support Services for Factory Equipment and Machinery

### Service Color

**Primary Color**: `#A68F97`

### Asset Locations

- **Hero Image**: `src/assets/images/Home/services/procurement-support-services.jpg`
- **Service Logo**: `src/assets/images/Service-page/service-logos/procurement_support_services.svg` (or .png)

### Content

#### Tagline

"Expert procurement guidance and technical evaluation ensuring you acquire the right industrial equipment at optimal value, delivered on time and ready for seamless integration into your operations."

#### Overview

"Our procurement support services provide comprehensive assistance in sourcing, evaluating, and acquiring factory equipment and machinery for industrial facilities. We leverage our technical expertise and industry networks to help clients make informed purchasing decisions, negotiate favorable terms, and ensure equipment specifications align with operational requirements and long-term business objectives."

#### Approach

"We begin with detailed needs assessment and technical specification development, then identify qualified suppliers and evaluate proposals based on performance, reliability, and lifecycle costs. Our team conducts factory acceptance testing, manages logistics coordination, and oversees installation supervision to ensure equipment arrives as specified and integrates smoothly with existing systems and processes."

### Service Segments (6 segments)

#### 1. Equipment Specification Development

"Comprehensive technical specifications defining performance requirements, capacity needs, and compatibility criteria ensuring equipment procurement aligns with operational goals and facility constraints."

#### 2. Supplier Identification & Qualification

"Strategic sourcing and vetting of equipment manufacturers and suppliers worldwide, evaluating reputation, technical capabilities, warranty support, and after-sales service reliability."

#### 3. Technical Bid Evaluation

"Detailed analysis and comparison of equipment proposals assessing technical compliance, performance specifications, energy efficiency, maintenance requirements, and total cost of ownership."

#### 4. Factory Acceptance Testing (FAT)

"On-site equipment inspection and performance verification at manufacturer facilities ensuring machinery meets specifications, quality standards, and operational requirements before shipment."

#### 5. Logistics & Import Coordination

"Complete management of shipping, customs clearance, import documentation, and delivery logistics ensuring equipment arrives safely, on schedule, and in compliance with Kenyan regulations."

#### 6. Installation Supervision & Commissioning Support

"Technical oversight during equipment installation, startup, and performance testing ensuring proper integration with facility systems and achieving specified operational performance."

---

## Service 2: Risk Management Services

### Service Color

**Primary Color**: `#4B4952`

### Asset Locations

- **Hero Image**: `src/assets/images/Home/services/risk-management.jpg`
- **Service Logo**: `src/assets/images/Service-page/service-logos/risk_management.svg` (or .png)

### Content

#### Tagline

"Proactive risk identification and mitigation strategies protecting your MEP projects and facilities from technical, financial, and operational uncertainties throughout the entire project lifecycle."

#### Overview

"Our risk management services provide systematic identification, assessment, and mitigation of potential risks affecting mechanical, electrical, and plumbing projects. We help clients anticipate challenges, develop contingency plans, and implement control measures that minimize project delays, cost overruns, and operational disruptions while ensuring safety, compliance, and business continuity."

#### Approach

"We conduct comprehensive risk assessments examining technical, contractual, financial, and safety aspects of MEP projects and facilities. Our team develops risk registers, implements monitoring protocols, and creates mitigation strategies tailored to each project's unique challenges. Through continuous risk tracking and adaptive management, we help clients make informed decisions and respond effectively to emerging threats throughout project execution and facility operations."

### Service Segments (6 segments)

#### 1. Project Risk Assessment & Analysis

"Systematic evaluation of potential technical, schedule, cost, and quality risks during project planning and execution phases, prioritizing threats based on likelihood and impact severity."

#### 2. Safety & Compliance Risk Management

"Identification and mitigation of workplace safety hazards, regulatory compliance gaps, and environmental risks ensuring adherence to Kenyan safety standards and industry best practices."

#### 3. Contractual & Legal Risk Evaluation

"Analysis of contract terms, liability exposures, dispute potential, and legal obligations protecting client interests and minimizing contractual disputes in MEP project agreements."

#### 4. Financial Risk Mitigation

"Assessment and management of budget risks, cost escalation factors, payment terms, and financial exposure developing strategies to control costs and protect project financial viability."

#### 5. Technical Risk & Design Review

"Critical evaluation of design assumptions, system specifications, equipment selections, and technical dependencies identifying potential failure points and engineering vulnerabilities."

#### 6. Business Continuity & Operational Risk Planning

"Development of contingency plans, backup systems, and emergency response protocols ensuring facility operations continue despite equipment failures, supply disruptions, or unforeseen events."

---

## Implementation Requirements

### Follow Existing Service Template

- **Component Structure**: Use the same component architecture as existing services
- **Layout System**: Follow the established full-width image + two-column description pattern
- **Grid Reflow System**: Implement the same service segments grid used for other services
- **Responsive Behavior**: Match responsive breakpoints and stacking behavior
- **Typography**: Use established IBM Plex Sans for headings, Inter for body text
- **Spacing**: Maintain consistent section padding and element spacing

### Color Integration

Apply service-specific colors (`#A68F97` for Procurement, `#4B4952` for Risk Management) in:

- Service segment card accents
- Title underlines or highlights
- Hover states
- Border colors
- Any service-specific branding elements

### Asset Integration

- Import images from specified asset folders
- Use proper TypeScript imports for type safety
- Implement appropriate alt text for accessibility
- Ensure responsive image handling

### Navigation & Routing

- Add these services to the main services navigation
- Implement hash-based routing for direct access (e.g., `/services#procurement-support`, `/services#risk-management`)
- Update services data structure to include these new services
- Ensure smooth scrolling to sections

## Data Structure Updates

### Update services.ts

Add both new services to the services data array with:

- Service name
- Service ID/slug
- Service color
- Service description
- Six service segments with descriptions
- Image paths
- Any additional metadata

### Service Order

Position these services in the services list as:

1. Mechanical Engineering
2. Plumbing Services
3. Electrical Engineering
4. Factory Planning
5. Project Management
6. Design & Build
7. **Procurement Support Services** (new)
8. **Risk Management Services** (new)

## Quality Standards

### Design Consistency

- Match visual hierarchy of existing services
- Maintain consistent card styling
- Use same animation patterns (Framer Motion)
- Follow established color usage patterns

### Content Presentation

- Professional, technical language
- Clear, scannable formatting
- Proper heading hierarchy
- Consistent segment card styling

### Responsive Excellence

- Mobile-first approach
- Proper image scaling
- Readable typography at all sizes
- Touch-friendly interactive elements

### Accessibility

- Semantic HTML structure
- Proper alt text for images
- Sufficient color contrast
- Keyboard navigation support
- Screen reader compatibility

## Testing Checklist

After implementation:

- [ ] Both services display correctly on Services page
- [ ] Hero images load and scale properly
- [ ] Two-column layout works on desktop
- [ ] Content stacks correctly on mobile
- [ ] Service segments display in grid
- [ ] Service colors applied correctly
- [ ] Navigation includes new services
- [ ] Hash routing works for direct access
- [ ] All images load with proper alt text
- [ ] Typography matches existing services
- [ ] Responsive behavior is consistent
- [ ] Accessibility requirements met

## Expected Outcome

Two fully functional service sections that:

- Seamlessly integrate with existing services
- Follow established design patterns
- Provide comprehensive service information
- Maintain professional CBE brand standards
- Work perfectly across all devices
- Expand CBE's service portfolio effectively
