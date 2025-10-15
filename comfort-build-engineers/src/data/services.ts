import type { Service } from '../types';
import mechanicalLogo from '../assets/images/service-page/service-logos/mechanical_engineering.svg';
import plumbingLogo from '../assets/images/service-page/service-logos/plumbing_services.svg';
import electricalLogo from '../assets/images/service-page/service-logos/electrical_engineering.svg';
import factoryPlanningLogo from '../assets/images/service-page/service-logos/factory_planning.svg';
import projectManagementLogo from '../assets/images/service-page/service-logos/project_management.svg';
import designBuildLogo from '../assets/images/service-page/service-logos/design_&_build.svg';

export const services: Service[] = [
  {
    id: '1',
    name: 'Mechanical Engineering',
    title: 'Mechanical',
    description: 'Complete HVAC, ventilation, and building automation solutions for optimal climate control and energy efficiency.',
    icon: 'cog',
    logo: mechanicalLogo,
    slug: 'mechanical',
    color: '#4C8D8F',
    segments: [
      {
        id: '1',
        title: 'HVAC',
        description: 'Complete heating, ventilation, and air conditioning system design ensuring optimal indoor climate control, air quality, and energy efficiency for all building types.',
        position: { row: 0, col: 0 }
      },
      {
        id: '2',
        title: 'Compressed Air Cooling',
        description: 'Industrial-grade compressed air systems delivering reliable, clean, and efficient pneumatic power for manufacturing processes and equipment operation.',
        position: { row: 0, col: 1 }
      },
      {
        id: '3',
        title: 'Cold Storage',
        description: 'Specialized refrigeration and temperature-controlled storage solutions maintaining precise environmental conditions for pharmaceutical, food, and industrial applications.',
        position: { row: 0, col: 2 }
      },
      {
        id: '4',
        title: 'Steam/Hot Water Boilers',
        description: 'High-efficiency boiler systems providing consistent steam and hot water generation for industrial processes, heating, and sanitization requirements.',
        position: { row: 1, col: 0 }
      },
      {
        id: '5',
        title: 'Fire Protection Systems',
        description: 'Comprehensive fire suppression solutions including sprinkler systems, gaseous suppression, and specialized protection for critical facilities and equipment.',
        position: { row: 1, col: 1 }
      },
      {
        id: '6',
        title: 'Solar Heating Systems',
        description: 'Renewable solar thermal technology harnessing Kenya\'s abundant sunshine to provide cost-effective water and space heating with minimal environmental impact.',
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
    logo: plumbingLogo,
    slug: 'plumbing',
    color: '#4D594F',
    segments: [
      {
        id: '1',
        title: 'Potable Hot & Cold Water Supply',
        description: 'Reliable domestic water distribution systems delivering clean, temperature-controlled water throughout buildings with proper pressure, quality, and conservation measures.',
        position: { row: 0, col: 0 }
      },
      {
        id: '2',
        title: 'Waste Removal Systems',
        description: 'Sanitary drainage and sewage systems efficiently removing wastewater and solid waste while preventing contamination, odors, and ensuring hygienic facility conditions.',
        position: { row: 0, col: 1 }
      },
      {
        id: '3',
        title: 'Water Recovery & Treatment Systems',
        description: 'Sustainable water management solutions including greywater recycling, wastewater treatment, and purification systems reducing consumption and operational costs.',
        position: { row: 0, col: 2 }
      },
      {
        id: '4',
        title: 'Rainwater, Surface & Subsurface Drainage',
        description: 'Comprehensive stormwater management including collection, conveyance, and disposal systems protecting structures from water damage and managing site runoff effectively.',
        position: { row: 1, col: 0 }
      },
      {
        id: '5',
        title: 'Backflow Prevention & Cross-Connection Control',
        description: 'Critical safety devices and testing programs preventing contamination of potable water supplies by ensuring one-way flow and protecting public health.',
        position: { row: 1, col: 1 }
      },
      {
        id: '6',
        title: 'Pumping Systems',
        description: 'Specialized water and wastewater pumping solutions including booster pumps, sump pumps, and sewage ejectors ensuring proper flow and pressure throughout facilities.',
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
    logo: electricalLogo,
    slug: 'electrical',
    color: '#708C8C',
    segments: [
      {
        id: '1',
        title: 'Electric Power Supply & Distribution',
        description: 'Complete electrical infrastructure from utility connection through switchgear, transformers, and distribution panels ensuring safe, reliable power throughout your facility.',
        position: { row: 0, col: 0 }
      },
      {
        id: '2',
        title: 'Lighting',
        description: 'Energy-efficient lighting design combining natural and artificial illumination to optimize visibility, reduce energy costs, and enhance occupant comfort and productivity.',
        position: { row: 0, col: 1 }
      },
      {
        id: '3',
        title: 'Structured Cabling',
        description: 'Integrated data and communications infrastructure supporting voice, data, and video networks with scalable, high-performance cabling systems for modern connectivity needs.',
        position: { row: 0, col: 2 }
      },
      {
        id: '4',
        title: 'Queue Management',
        description: 'Electronic queuing and customer flow management systems utilizing digital displays, ticketing, and analytics to optimize service delivery and reduce wait times.',
        position: { row: 1, col: 0 }
      },
      {
        id: '5',
        title: 'Access Control',
        description: 'Comprehensive security solutions including card readers, biometric systems, and integrated software controlling facility access and monitoring personnel movement.',
        position: { row: 1, col: 1 }
      },
      {
        id: '6',
        title: 'Fire Detection Systems',
        description: 'Advanced fire alarm and detection networks with smoke sensors, heat detectors, and emergency notification systems ensuring rapid response and life safety compliance.',
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
    logo: factoryPlanningLogo,
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
    logo: projectManagementLogo,
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
    logo: designBuildLogo,
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