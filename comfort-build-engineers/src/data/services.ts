import type { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Mechanical Engineering',
    title: 'Mechanical',
    description: 'Complete HVAC, ventilation, and building automation solutions for optimal climate control and energy efficiency.',
    icon: 'cog',
    slug: 'mechanical',
    color: '#4C8D8F',
    segments: [
      {
        id: '1',
        title: 'HVAC System Design & Installation',
        description: 'Complete heating, ventilation, and air conditioning systems for optimal climate control and energy efficiency.',
        position: { row: 0, col: 0 }
      },
      {
        id: '2',
        title: 'Building Automation Systems (BAS)',
        description: 'Smart building technologies integrating HVAC, lighting, and security for centralized control.',
        position: { row: 0, col: 1 }
      },
      {
        id: '3',
        title: 'Exhaust & Ventilation',
        description: 'Industrial and commercial ventilation systems ensuring proper air circulation and contaminant removal.',
        position: { row: 0, col: 2 }
      },
      {
        id: '4',
        title: 'Chilled Water & Heating Systems',
        description: 'Centralized cooling and heating distribution systems for commercial and industrial applications.',
        position: { row: 1, col: 0 }
      },
      {
        id: '5',
        title: 'Energy Recovery & Management',
        description: 'Sustainable solutions for energy conservation, heat recovery, and efficient power management.',
        position: { row: 1, col: 1 }
      },
      {
        id: '6',
        title: 'Air Filtration & Cleanroom Solutions',
        description: 'Specialized air purification systems for cleanrooms, laboratories, and pristine air environments.',
        position: { row: 1, col: 2 }
      }
    ]
  },
  {
    id: '2',
    name: 'Plumbing Services',
    title: 'Plumbing',
    description: 'Comprehensive water systems, drainage, and specialized piping solutions for residential and commercial applications.',
    icon: 'wrench',
    slug: 'plumbing',
    color: '#4D594F',
    segments: [
      {
        id: '1',
        title: 'Domestic & Commercial Water Systems',
        description: 'Efficient water supply systems from residential setups to complex commercial installations.',
        position: { row: 0, col: 0 }
      },
      {
        id: '2',
        title: 'Sanitary & Drainage',
        description: 'Comprehensive sanitary and stormwater drainage solutions ensuring proper waste disposal.',
        position: { row: 0, col: 1 }
      },
      {
        id: '3',
        title: 'Fire Suppression Systems',
        description: 'Expert fire sprinkler, hydrant, and hose reel systems meeting safety regulations.',
        position: { row: 0, col: 2 }
      },
      {
        id: '4',
        title: 'Specialized Piping',
        description: 'Industrial process piping, compressed air lines, and medical gas systems.',
        position: { row: 1, col: 0 }
      },
      {
        id: '5',
        title: 'Water Conservation & Treatment',
        description: 'Sustainable solutions including greywater recycling and rainwater harvesting.',
        position: { row: 1, col: 1 }
      },
      {
        id: '6',
        title: 'Maintenance & Repairs',
        description: 'Scheduled maintenance and emergency repairs to ensure optimal system performance.',
        position: { row: 1, col: 2 }
      }
    ]
  },
  {
    id: '3',
    name: 'Electrical Engineering',
    title: 'Electrical',
    description: 'Complete electrical installations, power distribution, and smart building technologies for modern infrastructure.',
    icon: 'bolt',
    slug: 'electrical',
    color: '#708C8C',
    segments: [
      {
        id: '1',
        title: 'Power Distribution & Switchgear',
        description: 'Main electrical panels, switchboards, and power distribution systems for safe electricity supply.',
        position: { row: 0, col: 0 }
      },
      {
        id: '2',
        title: 'Lighting Systems & Controls',
        description: 'Energy-efficient LED lighting with intelligent controls and automation systems.',
        position: { row: 0, col: 1 }
      },
      {
        id: '3',
        title: 'Emergency & Backup Power',
        description: 'Generator systems, UPS installations, and emergency lighting for continuous operations.',
        position: { row: 0, col: 2 }
      },
      {
        id: '4',
        title: 'Industrial Motor & Drive Systems',
        description: 'Motor control centers, variable frequency drives, and industrial automation controls.',
        position: { row: 1, col: 0 }
      },
      {
        id: '5',
        title: 'Security & Communication Systems',
        description: 'CCTV, access control, fire alarms, and structured cabling installations.',
        position: { row: 1, col: 1 }
      },
      {
        id: '6',
        title: 'Energy Management & Solar',
        description: 'Smart metering, energy monitoring, and renewable energy integration systems.',
        position: { row: 1, col: 2 }
      }
    ]
  },
  {
    id: '4',
    name: 'Factory Planning',
    title: 'Factory Planning',
    description: 'Complete industrial facility design, process optimization, and manufacturing infrastructure planning.',
    icon: 'building-office',
    slug: 'factory-planning',
    color: '#2E402F',
    segments: [
      {
        id: '1',
        title: 'Layout Design & Optimization',
        description: 'Efficient factory floor planning and workflow optimization for maximum productivity.',
        position: { row: 0, col: 0 }
      },
      {
        id: '2',
        title: 'Process Engineering',
        description: 'Manufacturing process design, equipment specification, and production line planning.',
        position: { row: 0, col: 1 }
      },
      {
        id: '3',
        title: 'Utility Infrastructure',
        description: 'Industrial power, compressed air, steam, and process water distribution systems.',
        position: { row: 0, col: 2 }
      },
      {
        id: '4',
        title: 'Material Handling Systems',
        description: 'Conveyor systems, automated storage, and material flow optimization.',
        position: { row: 1, col: 0 }
      },
      {
        id: '5',
        title: 'Safety & Compliance',
        description: 'Industrial safety systems, regulatory compliance, and environmental considerations.',
        position: { row: 1, col: 1 }
      },
      {
        id: '6',
        title: 'Expansion & Retrofitting',
        description: 'Facility upgrades, capacity expansion, and modernization of existing operations.',
        position: { row: 1, col: 2 }
      }
    ]
  },
  {
    id: '5',
    name: 'Project Management',
    title: 'Project Management',
    description: 'End-to-end project delivery, coordination, and quality assurance for engineering projects of all scales.',
    icon: 'clipboard-document-check',
    slug: 'project-management',
    color: '#798C79',
    segments: [
      {
        id: '1',
        title: 'Project Planning & Scheduling',
        description: 'Comprehensive project timelines, resource allocation, and milestone management.',
        position: { row: 0, col: 0 }
      },
      {
        id: '2',
        title: 'Cost Management & Budgeting',
        description: 'Accurate cost estimation, budget tracking, and financial project controls.',
        position: { row: 0, col: 1 }
      },
      {
        id: '3',
        title: 'Quality Assurance & Control',
        description: 'Quality standards implementation, testing protocols, and compliance verification.',
        position: { row: 0, col: 2 }
      },
      {
        id: '4',
        title: 'Risk Management',
        description: 'Risk assessment, mitigation strategies, and contingency planning for project success.',
        position: { row: 1, col: 0 }
      },
      {
        id: '5',
        title: 'Stakeholder Coordination',
        description: 'Client communication, vendor management, and multi-disciplinary team coordination.',
        position: { row: 1, col: 1 }
      },
      {
        id: '6',
        title: 'Commissioning & Handover',
        description: 'System testing, documentation, training, and seamless project delivery.',
        position: { row: 1, col: 2 }
      }
    ]
  },
  {
    id: '6',
    name: 'Design & Build',
    title: 'Design & Build',
    description: 'Comprehensive design-build services providing seamless integration from concept to completion under one roof.',
    icon: 'pencil-square',
    slug: 'design-build',
    color: '#345E6D',
    segments: [
      {
        id: '1',
        title: 'Conceptual Design & Planning',
        description: 'Initial design concepts, feasibility studies, and comprehensive project planning from vision to reality.',
        position: { row: 0, col: 0 }
      },
      {
        id: '2',
        title: 'Engineering Design & Documentation',
        description: 'Detailed engineering drawings, specifications, and technical documentation for all disciplines.',
        position: { row: 0, col: 1 }
      },
      {
        id: '3',
        title: 'Permit & Regulatory Compliance',
        description: 'Building permits, regulatory approvals, and compliance with local codes and standards.',
        position: { row: 0, col: 2 }
      },
      {
        id: '4',
        title: 'Construction Management',
        description: 'End-to-end construction oversight, contractor coordination, and quality control.',
        position: { row: 1, col: 0 }
      },
      {
        id: '5',
        title: 'Value Engineering & Cost Control',
        description: 'Optimization of design and construction methods to maximize value while controlling costs.',
        position: { row: 1, col: 1 }
      },
      {
        id: '6',
        title: 'Turnkey Project Delivery',
        description: 'Complete project delivery from design through commissioning with single-point accountability.',
        position: { row: 1, col: 2 }
      }
    ]
  }
];

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

// Helper function to get service segments
export const getServiceSegments = (serviceSlug: string) => {
  const service = getServiceBySlug(serviceSlug);
  return service?.segments || [];
};