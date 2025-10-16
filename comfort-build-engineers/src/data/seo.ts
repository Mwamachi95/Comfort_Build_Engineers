import { contactInfo } from './contact';

// Organization Structured Data (Schema.org)
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Comfort Build Engineers Limited',
  alternateName: 'CBE',
  url: 'https://www.cbengineers.co.ke',
  logo: 'https://www.cbengineers.co.ke/android-chrome-512x512.png',
  description: 'Leading mechanical, electrical, and plumbing (MEP) engineering solutions provider in Kenya, specializing in HVAC, electrical installations, plumbing systems, and industrial engineering.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: contactInfo.phone,
    contactType: 'Customer Service',
    email: contactInfo.email,
    availableLanguage: ['English', 'Swahili'],
  },
  sameAs: [
    // Add social media URLs when available
    // 'https://www.linkedin.com/company/comfort-build-engineers',
    // 'https://www.facebook.com/comfortbuildengineers',
  ],
};

// Local Business Structured Data
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Comfort Build Engineers Limited',
  image: 'https://www.cbengineers.co.ke/android-chrome-512x512.png',
  '@id': 'https://www.cbengineers.co.ke',
  url: 'https://www.cbengineers.co.ke',
  telephone: contactInfo.phone,
  email: contactInfo.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: contactInfo.address,
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -1.2921,
    longitude: 36.8219,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  priceRange: '$$',
  areaServed: {
    '@type': 'Country',
    name: 'Kenya',
  },
};

// Service Structured Data Generator
export const generateServiceSchema = (serviceName: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: serviceName,
  description: description,
  provider: {
    '@type': 'Organization',
    name: 'Comfort Build Engineers Limited',
    url: 'https://www.cbengineers.co.ke',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Kenya',
  },
});

// Default SEO Configuration
export const defaultSEO = {
  siteName: 'Comfort Build Engineers',
  siteUrl: 'https://www.cbengineers.co.ke',
  defaultDescription: 'Leading MEP engineering solutions provider in Kenya. Specializing in mechanical, electrical, and plumbing engineering for industrial, commercial, and residential projects.',
  defaultKeywords: 'MEP engineering Kenya, mechanical engineering, electrical engineering, plumbing engineering, HVAC Kenya, industrial engineering, Nairobi engineers, Comfort Build Engineers',
  twitterHandle: '@cbengineers', // Update when available
};
