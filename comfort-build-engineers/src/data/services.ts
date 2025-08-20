import type { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Mechanical Engineering',
    description: 'Comprehensive mechanical systems design, installation, and maintenance including HVAC, piping systems, and industrial machinery.',
    icon: 'cog',
    slug: 'mechanical',
  },
  {
    id: '2',
    name: 'Electrical Engineering',
    description: 'Complete electrical solutions from power distribution to control systems, lighting design, and renewable energy integration.',
    icon: 'bolt',
    slug: 'electrical',
  },
  {
    id: '3',
    name: 'Plumbing Services',
    description: 'Professional plumbing installation, maintenance, and repair services for residential, commercial, and industrial applications.',
    icon: 'wrench',
    slug: 'plumbing',
  },
  {
    id: '4',
    name: 'Factory Planning',
    description: 'Strategic factory layout design, workflow optimization, and industrial facility planning for maximum efficiency.',
    icon: 'building-office',
    slug: 'factory-planning',
  },
  {
    id: '5',
    name: 'Project Management',
    description: 'End-to-end project management services ensuring timely delivery, quality control, and budget compliance.',
    icon: 'clipboard-document-check',
    slug: 'project-management',
  },
];