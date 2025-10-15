export interface SegmentCard {
  id: string;
  title: string;
  description: string;
  position: { row: number; col: number };
}

export interface Service {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: string;
  logo: string;
  slug: string;
  color: string;
  segments: SegmentCard[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  serviceType: string;
  sector: string;
  scale: string;
  images: string[];
  completionDate: string;
  client?: string;
  location: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  qualifications: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  tags: string[];
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  emergencyContact: string;
  officeHours: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  workEmail: string;
  companyName: string;
  message: string;
}

export interface ServiceIntroData {
  serviceSlug: string;
  heroImage: string;
  heroImageAlt: string;
  tagline: string;
  overview: {
    title: string;
    content: string;
  };
  approach: {
    title: string;
    content: string;
  };
}