import type { ServiceIntroData } from '../types';
import mechanicalImage from '../assets/images/home/services/mechanical.jpg';
import plumbingImage from '../assets/images/home/services/plumbing.jpg';
import electricalImage from '../assets/images/home/services/electrical.jpg';
import factoryPlanningImage from '../assets/images/home/services/factory-planning.jpg';
import projectManagementImage from '../assets/images/home/services/project-management.jpg';
import designBuildImage from '../assets/images/home/services/design-build.jpg';

export const serviceIntros: ServiceIntroData[] = [
  {
    serviceSlug: 'mechanical',
    heroImage: mechanicalImage,
    heroImageAlt: 'Mechanical Engineering Systems - HVAC and Building Automation',
    tagline: 'Advanced mechanical systems engineering delivering optimal climate control, energy efficiency, and indoor air quality for commercial and industrial facilities across Kenya.',
    overview: {
      title: 'Overview',
      content: 'Our mechanical engineering services encompass comprehensive HVAC system design, building automation solutions, and energy management systems. We specialize in creating comfortable, efficient environments through advanced heating, ventilation, air conditioning, and control technologies tailored to Kenya\'s unique climate and industrial requirements.',
    },
    approach: {
      title: 'Approach',
      content: 'We combine technical expertise with practical experience to design mechanical systems that balance performance, efficiency, and cost-effectiveness. Our engineering team conducts thorough load calculations, selects optimal equipment, and implements smart control strategies to ensure reliable operation and minimal energy consumption throughout the system lifecycle.',
    },
  },
  {
    serviceSlug: 'plumbing',
    heroImage: plumbingImage,
    heroImageAlt: 'Plumbing Services - Water Systems and Sanitary Solutions',
    tagline: 'Comprehensive water systems and sanitary solutions ensuring reliability, safety, and compliance for every building we serve across Kenya\'s diverse infrastructure landscape.',
    overview: {
      title: 'Overview',
      content: 'Our plumbing engineering services deliver complete water supply, drainage, and fire suppression systems for commercial, industrial, and residential projects. We design reliable plumbing infrastructure that meets Kenyan standards while incorporating water conservation technologies and sustainable practices to ensure long-term performance and resource efficiency.',
    },
    approach: {
      title: 'Approach',
      content: 'We prioritize system reliability through meticulous hydraulic calculations, proper material selection, and code-compliant installations. Our team designs plumbing systems that minimize water waste, prevent contamination, and ensure adequate pressure throughout facilities. From domestic water distribution to specialized industrial piping, we deliver solutions built for durability and ease of maintenance.',
    },
  },
  {
    serviceSlug: 'electrical',
    heroImage: electricalImage,
    heroImageAlt: 'Electrical Engineering - Power Distribution and Energy Management',
    tagline: 'Safe, efficient electrical infrastructure powering Kenya\'s commercial and industrial growth through intelligent design, reliable distribution, and cutting-edge energy management solutions.',
    overview: {
      title: 'Overview',
      content: 'Our electrical engineering services encompass power distribution, lighting systems, emergency backup, and industrial controls for facilities of all scales. We design electrical infrastructure that ensures safety, maximizes energy efficiency, and supports operational continuity while adhering to Kenyan electrical codes and international best practices for modern buildings.',
    },
    approach: {
      title: 'Approach',
      content: 'We combine load analysis, fault calculations, and energy modeling to design electrical systems that are both safe and cost-effective. Our engineering process emphasizes proper circuit protection, efficient lighting design, and strategic placement of distribution equipment. We integrate renewable energy options and smart controls to reduce operational costs while maintaining the highest safety standards.',
    },
  },
  {
    serviceSlug: 'factory-planning',
    heroImage: factoryPlanningImage,
    heroImageAlt: 'Factory Planning - Industrial Facility Design and Optimization',
    tagline: 'Strategic industrial facility design optimizing workflow, productivity, and safety to transform manufacturing operations across Kenya\'s growing industrial sector.',
    overview: {
      title: 'Overview',
      content: 'Our factory planning services provide comprehensive facility layout design, process optimization, and utility infrastructure planning for manufacturing operations. We create efficient production environments that maximize space utilization, streamline material flow, and integrate essential MEP systems to support your industrial processes while ensuring worker safety and regulatory compliance.',
    },
    approach: {
      title: 'Approach',
      content: 'We start with thorough analysis of your production processes, material handling requirements, and growth projections. Our multidisciplinary team designs factory layouts that minimize bottlenecks, reduce operational costs, and accommodate future expansion. We coordinate all MEP systems—power, compressed air, water, HVAC—to support manufacturing efficiency while maintaining flexibility for evolving production needs.',
    },
  },
  {
    serviceSlug: 'project-management',
    heroImage: projectManagementImage,
    heroImageAlt: 'Project Management - MEP Project Coordination and Oversight',
    tagline: 'Expert coordination and oversight ensuring your MEP projects are delivered on time, within budget, and to the highest standards of quality and safety.',
    overview: {
      title: 'Overview',
      content: 'Our project management services provide end-to-end coordination for mechanical, electrical, and plumbing installations across all project scales. We manage schedules, budgets, quality control, and stakeholder communication to ensure seamless execution from design through commissioning. Our systematic approach minimizes risks, prevents delays, and delivers projects that meet your expectations.',
    },
    approach: {
      title: 'Approach',
      content: 'We employ proven project management methodologies tailored to MEP engineering complexities. Our team coordinates contractors, manages procurement, monitors quality, and maintains clear communication with all stakeholders. Through detailed planning, proactive risk management, and regular progress tracking, we keep projects on schedule while ensuring technical specifications are met and budgets are controlled throughout every phase.',
    },
  },
  {
    serviceSlug: 'design-build',
    heroImage: designBuildImage,
    heroImageAlt: 'Design & Build - Integrated MEP Solutions',
    tagline: 'Integrated design-build solutions delivering complete MEP projects from initial concept through final handover—one team, one vision, seamless execution.',
    overview: {
      title: 'Overview',
      content: 'Our design-build service combines engineering design and construction execution under one unified approach for mechanical, electrical, and plumbing systems. This integrated methodology streamlines project delivery, reduces coordination challenges, and provides single-point accountability. We deliver turnkey MEP solutions that are cost-effective, technically sound, and completed faster than traditional project delivery methods.',
    },
    approach: {
      title: 'Approach',
      content: 'We bring together designers, engineers, and construction professionals from project inception, fostering collaboration that eliminates design-construction conflicts. Our team develops value-engineered solutions, manages all permits and approvals, procures materials efficiently, and executes installations with direct oversight. This unified approach accelerates timelines, controls costs, and ensures your vision is realized with precision and quality.',
    },
  },
];

// Helper function to get service intro by slug
export const getServiceIntroBySlug = (slug: string): ServiceIntroData | undefined => {
  return serviceIntros.find(intro => intro.serviceSlug === slug);
};
