import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProjectHero from '../components/sections/ProjectHero';
import ProjectDescription from '../components/sections/ProjectDescription';
import ServicesOverview from '../components/sections/ServicesOverview';
import ProjectGallery from '../components/sections/ProjectGallery';

// Import project images with optimization
// @ts-ignore - vite-imagetools provides this type
import bravaHero from '../assets/images/Projects/per-project/brava-foods/hero.jpg?project';
// @ts-ignore
import bravaImg3 from '../assets/images/Projects/per-project/brava-foods/3.jpg?project';
// @ts-ignore
import bravaImg4 from '../assets/images/Projects/per-project/brava-foods/4.jpg?project';
// @ts-ignore
import bravaImg5 from '../assets/images/Projects/per-project/brava-foods/5.jpg?project';
// @ts-ignore
import bravaImg6 from '../assets/images/Projects/per-project/brava-foods/6.jpg?project';
// @ts-ignore
import bravaImg8 from '../assets/images/Projects/per-project/brava-foods/8.jpg?project';

// @ts-ignore
import ecobankHero from '../assets/images/Projects/per-project/ecobank/ecobank-hero.jpg?project';
// @ts-ignore
import ecobankImg2 from '../assets/images/Projects/per-project/ecobank/2.jpg?project';
// @ts-ignore
import ecobankImg3 from '../assets/images/Projects/per-project/ecobank/3.jpg?project';
// @ts-ignore
import ecobankImg4 from '../assets/images/Projects/per-project/ecobank/4.jpg?project';

// Lynx Apartments images
// @ts-ignore
import lynxHero from '../assets/images/Projects/per-project/lynx-apartments/hero.jpg?project';
// @ts-ignore
import lynxImg2 from '../assets/images/Projects/per-project/lynx-apartments/2.jpg?project';
// @ts-ignore
import lynxImg3 from '../assets/images/Projects/per-project/lynx-apartments/3.jpg?project';
// @ts-ignore
import lynxImg4 from '../assets/images/Projects/per-project/lynx-apartments/4.jpg?project';

// Nairobi Club images
// @ts-ignore
import nairobiClubHero from '../assets/images/Projects/per-project/nairobi-club/hero.jpg?project';
// @ts-ignore
import nairobiClubImg2 from '../assets/images/Projects/per-project/nairobi-club/nairobi-club.jpg?project';
// @ts-ignore
import nairobiClubImg3 from '../assets/images/Projects/per-project/nairobi-club/3.jpg?project';
// @ts-ignore
import nairobiClubImg4 from '../assets/images/Projects/per-project/nairobi-club/4.jpg?project';

// Ravine Dairies images
// @ts-ignore
import ravineDairiesHero from '../assets/images/Projects/per-project/ravine-dairies/hero.jpg?project';
// @ts-ignore
import ravineDairiesImg2 from '../assets/images/Projects/per-project/ravine-dairies/2.jpg?project';
// @ts-ignore
import ravineDairiesImg3 from '../assets/images/Projects/per-project/ravine-dairies/3.jpg?project';
// @ts-ignore
import ravineDairiesImg4 from '../assets/images/Projects/per-project/ravine-dairies/4.jpg?project';
// @ts-ignore
import ravineDairiesImg5 from '../assets/images/Projects/per-project/ravine-dairies/5.jpg?project';
// @ts-ignore
import ravineDairiesImgMain from '../assets/images/Projects/per-project/ravine-dairies/ravine-dairies.jpg?project';

// Rosita Apartments images
// @ts-ignore
import rositaHero from '../assets/images/Projects/per-project/rosita/1.jpg?project';
// @ts-ignore
import rositaImg2 from '../assets/images/Projects/per-project/rosita/2.jpg?project';
// @ts-ignore
import rositaImg3 from '../assets/images/Projects/per-project/rosita/3.jpg?project';
// @ts-ignore
import rositaImg4 from '../assets/images/Projects/per-project/rosita/4.jpg?project';

// Sanergy images
// @ts-ignore
import sanergyHero from '../assets/images/Projects/per-project/sanergy/hero.jpg?project';
// @ts-ignore
import sanergyImg2 from '../assets/images/Projects/per-project/sanergy/drone-location.jpg?project';
// @ts-ignore
import sanergyImg3 from '../assets/images/Projects/per-project/sanergy/boiler-installation.jpg?project';
// @ts-ignore
import sanergyImg4 from '../assets/images/Projects/per-project/sanergy/dryer.jpg?project';
// @ts-ignore
import sanergyImg5 from '../assets/images/Projects/per-project/sanergy/drone-solar-2.jpg?project';
// @ts-ignore
import sanergyImg6 from '../assets/images/Projects/per-project/sanergy/drone-site-overview-4.jpg?project';

// Sanofi images
// @ts-ignore
import sanofiHero from '../assets/images/Projects/per-project/sanofi/hero.jpg?project';
// @ts-ignore
import sanofiImg2 from '../assets/images/Projects/per-project/sanofi/2.jpg?project';
// @ts-ignore
import sanofiImg3 from '../assets/images/Projects/per-project/sanofi/3.jpg?project';
// @ts-ignore
import sanofiImg4 from '../assets/images/Projects/per-project/sanofi/4.jpg?project';

// SC Johnson images
// @ts-ignore
import scJohnsonHero from '../assets/images/Projects/per-project/sc-johnson/SC-Johnson.jpg?project';

// Vega images
// @ts-ignore
import vegaHero from '../assets/images/Projects/per-project/vega/hero.jpg?project';
// @ts-ignore
import vegaImg2 from '../assets/images/Projects/per-project/vega/2.jpg?project';
// @ts-ignore
import vegaImg3 from '../assets/images/Projects/per-project/vega/3.jpg?project';
// @ts-ignore
import vegaImg4 from '../assets/images/Projects/per-project/vega/4.jpg?project';

// Vert images
// @ts-ignore
import vertHero from '../assets/images/Projects/per-project/vert/hero.jpg?project';
// @ts-ignore
import vertImg2 from '../assets/images/Projects/per-project/vert/2.jpg?project';
// @ts-ignore
import vertImg3 from '../assets/images/Projects/per-project/vert/3.jpg?project';
// @ts-ignore
import vertImg4 from '../assets/images/Projects/per-project/vert/4.jpg?project';
// @ts-ignore
import vertImg6 from '../assets/images/Projects/per-project/vert/6.jpg?project';
// @ts-ignore
import vertImg7 from '../assets/images/Projects/per-project/vert/7.jpg?project';
// @ts-ignore
import vertImg8 from '../assets/images/Projects/per-project/vert/8.jpg?project';

interface Picture {
  img: { src: string; w: number; h: number };
  sources: { [key: string]: Array<{ src: string; w: number; h: number }> };
}

interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  heroImage: Picture;
  introduction: string;
  description: string;
  descriptionImage: Picture;
  services: Array<{
    title: string;
    description: string;
  }>;
  scope: string[];
  additionalImages: Picture[];
}

const projectsData: Record<string, ProjectData> = {
  'brava-foods': {
    id: 'brava-foods',
    title: 'Brava Foods Industries',
    tagline: 'Modern Food Processing Facility with Advanced MEP Systems',
    heroImage: bravaHero,
    introduction: 'Comprehensive MEP Solutions for Food Processing Excellence',
    description: `Brava Foods Industries represents a state-of-the-art food processing facility where precision engineering meets operational excellence. Our comprehensive MEP design and installation encompassed specialized ventilation systems, precise temperature control, and advanced automation systems tailored for food safety and quality standards.

The project required intricate coordination between mechanical, electrical, and plumbing systems to ensure seamless operation of food processing equipment while maintaining strict hygiene and safety protocols throughout the facility.`,
    descriptionImage: bravaImg3,
    services: [
      {
        title: 'HVAC System Design',
        description: 'Specialized climate control systems for food processing areas with precise temperature and humidity control.'
      },
      {
        title: 'Electrical Infrastructure',
        description: 'Complete electrical distribution systems including emergency power backup and specialized equipment connections.'
      },
      {
        title: 'Process Utilities',
        description: 'Specialized utility systems for food processing equipment including compressed air and process water systems.'
      },
      {
        title: 'Building Automation',
        description: 'Integrated control systems for monitoring and managing all MEP systems from a centralized platform.'
      }
    ],
    scope: [
      'Complete HVAC design and installation for processing areas',
      'Electrical power distribution and backup systems',
      'Specialized ventilation for food safety compliance',
      'Process water and waste management systems',
      'Building automation and control systems',
      'Emergency safety systems installation'
    ],
    additionalImages: [bravaHero, bravaImg3, bravaImg4, bravaImg5, bravaImg6, bravaImg8]
  },
  'ecobank': {
    id: 'ecobank',
    title: 'Ecobank Refurbishment and Fitouts',
    tagline: 'Modern Banking Infrastructure with Advanced MEP Systems',
    heroImage: ecobankHero,
    introduction: 'Comprehensive Banking Facility Modernization',
    description: `The Ecobank refurbishment project involved complete modernization of electrical infrastructure and HVAC systems for a multi-story commercial banking facility in Nairobi CBD. Our team delivered comprehensive MEP solutions that enhanced operational efficiency while maintaining uninterrupted banking services.

The project required careful phasing to ensure continuous bank operations during the upgrade process, with particular attention to security systems integration and regulatory compliance for financial institutions.`,
    descriptionImage: ecobankImg2,
    services: [
      {
        title: 'Electrical System Upgrade',
        description: 'Complete electrical infrastructure modernization including power distribution and lighting systems.'
      },
      {
        title: 'HVAC Modernization',
        description: 'Energy-efficient climate control systems for optimal customer and staff comfort.'
      },
      {
        title: 'Security Systems Integration',
        description: 'Advanced security and access control systems integrated with MEP infrastructure.'
      },
      {
        title: 'Emergency Systems',
        description: 'Comprehensive emergency power and life safety systems for financial institution compliance.'
      }
    ],
    scope: [
      'Complete electrical infrastructure upgrade',
      'HVAC system modernization and optimization',
      'Security and access control system integration',
      'Emergency power and backup systems',
      'Energy-efficient lighting solutions',
      'Regulatory compliance for banking facilities'
    ],
    additionalImages: [ecobankHero, ecobankImg2, ecobankImg3, ecobankImg4]
  },
  'lynx-apartments': {
    id: 'lynx-apartments',
    title: 'Lynx Apartments',
    tagline: 'Smart Residential Development with Energy-Efficient MEP Systems',
    heroImage: lynxHero,
    introduction: 'Upscale Residential MEP Solutions with Smart Building Technology',
    description: `Lynx Apartments represents modern residential living with comprehensive MEP services featuring smart building automation and energy-efficient systems. Our team delivered cutting-edge mechanical, electrical, and plumbing solutions designed for comfort, efficiency, and sustainability.

The project incorporated advanced building management systems, energy-efficient HVAC solutions, and modern utility infrastructure to create a premium living environment that meets contemporary standards for residential developments.`,
    descriptionImage: lynxImg2,
    services: [
      {
        title: 'Smart Building Automation',
        description: 'Integrated building management systems for centralized control of all MEP systems and energy optimization.'
      },
      {
        title: 'Energy-Efficient HVAC',
        description: 'High-efficiency climate control systems designed for optimal comfort and reduced energy consumption.'
      },
      {
        title: 'Modern Electrical Infrastructure',
        description: 'Complete electrical design including power distribution, lighting, and smart home integration capabilities.'
      },
      {
        title: 'Plumbing & Water Systems',
        description: 'Advanced plumbing systems with water conservation features and modern utility connections.'
      }
    ],
    scope: [
      'Building automation and smart controls implementation',
      'Energy-efficient HVAC system design and installation',
      'Complete electrical infrastructure and smart wiring',
      'Modern plumbing and water management systems',
      'Fire safety and emergency systems',
      'Sustainable design integration'
    ],
    additionalImages: [lynxHero, lynxImg2, lynxImg3, lynxImg4]
  },
  'nairobi-club': {
    id: 'nairobi-club',
    title: 'Nairobi Club Renovation',
    tagline: 'Heritage Building Modernization with Contemporary MEP Solutions',
    heroImage: nairobiClubHero,
    introduction: 'Preserving Heritage While Embracing Modern Engineering',
    description: `The Nairobi Club renovation project required delicate balance between preserving historical architecture and implementing modern MEP systems. Our team successfully upgraded the building's infrastructure while maintaining its character and heritage value.

This challenging project demanded innovative solutions to integrate contemporary mechanical, electrical, and plumbing systems within the constraints of a heritage building, ensuring compliance with modern standards while respecting architectural integrity.`,
    descriptionImage: nairobiClubImg2,
    services: [
      {
        title: 'Heritage-Sensitive HVAC',
        description: 'Climate control systems designed to preserve the building character while providing modern comfort.'
      },
      {
        title: 'Electrical System Upgrade',
        description: 'Comprehensive electrical modernization with minimal visual impact on historical features.'
      },
      {
        title: 'Plumbing Infrastructure',
        description: 'Updated plumbing systems integrated seamlessly within existing architectural elements.'
      },
      {
        title: 'Conservation Engineering',
        description: 'Specialized engineering solutions to protect and preserve heritage building elements.'
      }
    ],
    scope: [
      'Heritage-sensitive MEP system design',
      'Electrical infrastructure modernization',
      'HVAC system integration with minimal impact',
      'Plumbing system upgrades and optimization',
      'Fire safety system implementation',
      'Building conservation compliance'
    ],
    additionalImages: [nairobiClubHero, nairobiClubImg2, nairobiClubImg3, nairobiClubImg4]
  },
  'ravine-dairies': {
    id: 'ravine-dairies',
    title: 'Ravine Dairies Processing Plant',
    tagline: 'Specialized Dairy Processing Facility with Advanced MEP Infrastructure',
    heroImage: ravineDairiesHero,
    introduction: 'Precision Engineering for Dairy Processing Excellence',
    description: `Ravine Dairies Processing Plant features specialized refrigeration and process piping systems designed for dairy processing operations with strict hygiene requirements. Our comprehensive MEP solutions ensure optimal conditions for dairy production while maintaining the highest standards of food safety.

The project required expertise in food-grade systems, specialized refrigeration technology, and process utilities designed specifically for dairy manufacturing operations, all while ensuring compliance with stringent industry regulations.`,
    descriptionImage: ravineDairiesImg2,
    services: [
      {
        title: 'Specialized Refrigeration',
        description: 'Advanced refrigeration systems designed specifically for dairy processing and storage requirements.'
      },
      {
        title: 'Process Piping Systems',
        description: 'Food-grade piping infrastructure for dairy processing with stringent hygiene standards.'
      },
      {
        title: 'Process Utilities',
        description: 'Specialized utility systems including CIP (Clean-in-Place) and process water treatment.'
      },
      {
        title: 'HVAC for Food Processing',
        description: 'Climate control systems designed for food processing environments with contamination control.'
      }
    ],
    scope: [
      'Specialized dairy refrigeration system design',
      'Food-grade process piping installation',
      'Clean-in-place (CIP) system implementation',
      'Process water treatment and distribution',
      'Food safety compliant HVAC systems',
      'Utility systems for dairy processing equipment'
    ],
    additionalImages: [ravineDairiesHero, ravineDairiesImg2, ravineDairiesImg3, ravineDairiesImg4, ravineDairiesImg5, ravineDairiesImgMain]
  },
  'rosita-apartments': {
    id: 'rosita-apartments',
    title: 'Rosita Apartments',
    tagline: 'Advanced Residential MEP Systems with Modern Utilities',
    heroImage: rositaHero,
    introduction: 'Modern Residential Engineering for Contemporary Living',
    description: `Rosita Apartments showcases advanced residential facility MEP systems including modern utilities, emergency power systems, and specialized HVAC solutions. Our comprehensive approach ensures residents enjoy reliable, efficient, and comfortable living environments.

The project emphasized sustainability, energy efficiency, and resident comfort through innovative MEP design that incorporates the latest technologies in residential building systems and smart utility management.`,
    descriptionImage: rositaImg2,
    services: [
      {
        title: 'Modern Utility Systems',
        description: 'Comprehensive utility infrastructure including water, sewer, electrical, and communication systems.'
      },
      {
        title: 'Emergency Power Systems',
        description: 'Backup power solutions ensuring continuous operation of critical systems during outages.'
      },
      {
        title: 'Specialized HVAC',
        description: 'Climate control systems optimized for multi-residential buildings with individual unit control.'
      },
      {
        title: 'Smart Building Integration',
        description: 'Modern building management systems for efficient operation and maintenance.'
      }
    ],
    scope: [
      'Complete MEP system design for residential complex',
      'Emergency power and backup systems installation',
      'Modern utility connections and distribution',
      'HVAC system design for multi-unit residential',
      'Fire safety and emergency systems',
      'Smart building technology integration'
    ],
    additionalImages: [rositaHero, rositaImg2, rositaImg3, rositaImg4]
  },
  'sanergy-facilities': {
    id: 'sanergy-facilities',
    title: 'Sanergy Limited',
    tagline: 'Innovative Waste Processing Facility with Sustainable MEP Solutions',
    heroImage: sanergyHero,
    introduction: 'Sustainable Engineering for Waste-to-Energy Operations',
    description: `Sanergy Limited represents an innovative waste processing facility featuring custom ventilation and biogas recovery systems designed for sustainable operations. Our MEP solutions support waste-to-energy processes while ensuring environmental compliance and operational efficiency.

This unique project required specialized engineering for waste processing environments, including custom ventilation systems, biogas handling infrastructure, and sustainable utility systems that support the facility's environmental mission.`,
    descriptionImage: sanergyImg2,
    services: [
      {
        title: 'Custom Ventilation Systems',
        description: 'Specialized ventilation designed for waste processing environments with odor control and air quality management.'
      },
      {
        title: 'Biogas Recovery Systems',
        description: 'Advanced biogas capture and processing systems for sustainable energy generation from waste.'
      },
      {
        title: 'Process Utilities',
        description: 'Specialized utility systems designed for waste processing and biogas operations.'
      },
      {
        title: 'Environmental Compliance',
        description: 'MEP systems designed to meet strict environmental regulations for waste processing facilities.'
      }
    ],
    scope: [
      'Custom ventilation system design for waste processing',
      'Biogas capture and recovery system installation',
      'Specialized process utility design',
      'Environmental compliance system implementation',
      'Sustainable energy system integration',
      'Waste processing equipment utility support'
    ],
    additionalImages: [sanergyHero, sanergyImg2, sanergyImg3, sanergyImg4, sanergyImg5, sanergyImg6]
  },
  'sanofi-office': {
    id: 'sanofi-office',
    title: 'Sanofi Office Fitout',
    tagline: 'Modern Pharmaceutical Office with Specialized MEP Systems',
    heroImage: sanofiHero,
    introduction: 'Pharmaceutical Industry MEP Solutions',
    description: `Sanofi Office Fitout features modern office infrastructure with specialized HVAC systems and utilities designed for pharmaceutical company headquarters. Our MEP solutions ensure optimal working conditions while meeting the specific requirements of pharmaceutical industry operations.

The project required understanding of pharmaceutical industry standards, clean air requirements, and specialized utility needs that support both office operations and pharmaceutical company activities.`,
    descriptionImage: sanofiImg2,
    services: [
      {
        title: 'Specialized HVAC Systems',
        description: 'Climate control systems designed for pharmaceutical office environments with air quality control.'
      },
      {
        title: 'Modern Office Electrical',
        description: 'Comprehensive electrical infrastructure for modern office operations and specialized equipment.'
      },
      {
        title: 'Utility Systems',
        description: 'Specialized utility infrastructure supporting pharmaceutical industry office requirements.'
      },
      {
        title: 'Office Fitout MEP',
        description: 'Complete MEP systems for modern office spaces with flexibility for future modifications.'
      }
    ],
    scope: [
      'Specialized HVAC design for pharmaceutical office',
      'Modern office electrical infrastructure',
      'Utility systems for pharmaceutical operations',
      'Office fitout MEP coordination',
      'Air quality control systems',
      'Flexible infrastructure for future expansion'
    ],
    additionalImages: [sanofiHero, sanofiImg2, sanofiImg3, sanofiImg4]
  },
  'sc-johnson-facility': {
    id: 'sc-johnson-facility',
    title: 'SC Johnson Manufacturing Plant',
    tagline: 'Complete Turnkey MEP Solution for Consumer Goods Manufacturing',
    heroImage: scJohnsonHero,
    introduction: 'Industrial MEP Excellence for Manufacturing Operations',
    description: `SC Johnson Manufacturing Plant represents a complete turnkey MEP solution for consumer goods manufacturing facility with automated production line support. Our comprehensive approach delivers industrial-grade systems designed for high-efficiency manufacturing operations.

This design-build project required coordination of complex manufacturing processes, automated production line utilities, and industrial-scale MEP systems all delivered through our integrated project management approach.`,
    descriptionImage: scJohnsonHero,
    services: [
      {
        title: 'Industrial HVAC Systems',
        description: 'Heavy-duty climate control systems designed for manufacturing environments and production requirements.'
      },
      {
        title: 'Production Line Utilities',
        description: 'Specialized utility systems supporting automated manufacturing equipment and production processes.'
      },
      {
        title: 'Process Electrical Systems',
        description: 'Industrial electrical infrastructure including power distribution for manufacturing equipment.'
      },
      {
        title: 'Turnkey Project Delivery',
        description: 'Complete design-build approach with integrated project management for seamless delivery.'
      }
    ],
    scope: [
      'Complete turnkey MEP design and installation',
      'Industrial HVAC system for manufacturing',
      'Production line utility support systems',
      'Heavy-duty electrical infrastructure',
      'Automated systems integration',
      'Design-build project management'
    ],
    additionalImages: [scJohnsonHero]
  },
  'vega-offices': {
    id: 'vega-offices',
    title: 'Vega Limited',
    tagline: 'Sustainable Office Complex with Smart Building Controls',
    heroImage: vegaHero,
    introduction: 'Smart Building Technology for Modern Office Operations',
    description: `Vega Limited features a modern office complex with sustainable MEP systems, smart building controls, and energy-efficient solutions. Our integrated approach combines advanced building technology with sustainable design principles to create an optimal working environment.

This project showcases our expertise in both industrial and project management applications, delivering comprehensive MEP solutions that support modern business operations while prioritizing energy efficiency and environmental responsibility.`,
    descriptionImage: vegaImg2,
    services: [
      {
        title: 'Smart Building Controls',
        description: 'Advanced building automation systems for optimal energy management and operational efficiency.'
      },
      {
        title: 'Sustainable MEP Systems',
        description: 'Energy-efficient mechanical, electrical, and plumbing systems designed for environmental sustainability.'
      },
      {
        title: 'Office Infrastructure',
        description: 'Modern office MEP infrastructure supporting contemporary business operations and technology.'
      },
      {
        title: 'Energy Management',
        description: 'Comprehensive energy monitoring and management systems for operational cost optimization.'
      }
    ],
    scope: [
      'Smart building automation system implementation',
      'Sustainable MEP system design and installation',
      'Energy-efficient office infrastructure',
      'Building energy management systems',
      'Modern office utility systems',
      'Environmental sustainability integration'
    ],
    additionalImages: [vegaHero, vegaImg2, vegaImg3, vegaImg4]
  },
  'vert-processing': {
    id: 'vert-processing',
    title: 'Vert Food and Vegetable Processing Factory',
    tagline: 'Complete MEP Infrastructure for Food Processing Operations',
    heroImage: vertHero,
    introduction: 'Comprehensive Food Processing MEP Solutions',
    description: `Vert Food and Vegetable Processing Factory features complete MEP infrastructure designed for food processing operations including specialized refrigeration, ventilation, and process utilities. Our project management approach ensured seamless integration of all systems supporting food processing requirements.

This project demonstrates our capability in managing complex food processing facility requirements, delivering specialized refrigeration systems, food-grade utilities, and process support infrastructure all coordinated through comprehensive project management.`,
    descriptionImage: vertImg2,
    services: [
      {
        title: 'Specialized Refrigeration',
        description: 'Advanced refrigeration systems designed for food and vegetable processing with precise temperature control.'
      },
      {
        title: 'Food Processing Ventilation',
        description: 'Specialized ventilation systems for food processing environments with air quality and hygiene control.'
      },
      {
        title: 'Process Utilities',
        description: 'Food-grade utility systems including process water, steam, and compressed air for processing operations.'
      },
      {
        title: 'Project Management',
        description: 'Comprehensive project management ensuring coordinated delivery of all MEP systems and infrastructure.'
      }
    ],
    scope: [
      'Complete MEP infrastructure design and installation',
      'Specialized food processing refrigeration systems',
      'Food-grade process utility systems',
      'Ventilation systems for food processing',
      'Process support infrastructure',
      'Integrated project management and delivery'
    ],
    additionalImages: [vertHero, vertImg2, vertImg3, vertImg4, vertImg6, vertImg7, vertImg8]
  }
};

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  if (!projectId || !projectsData[projectId]) {
    return <Navigate to="/projects" replace />;
  }

  const project = projectsData[projectId];

  return (
    <div className="min-h-screen bg-white">
      <ProjectHero
        title={project.title}
        tagline={project.tagline}
        heroImage={project.heroImage}
      />

      <ProjectDescription
        introduction={project.introduction}
        description={project.description}
        image={project.descriptionImage}
        imageAlt={`${project.title} - Project Details`}
      />

      <ServicesOverview
        services={project.services}
        scope={project.scope}
      />

      <ProjectGallery
        images={project.additionalImages}
        projectTitle={project.title}
      />
    </div>
  );
};

export default ProjectDetail;