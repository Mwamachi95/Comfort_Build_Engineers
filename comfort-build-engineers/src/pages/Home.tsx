import React from 'react';
import SEO from '../components/common/SEO';
import HomeHero from '../components/sections/HomeHero';
import HomeDescription from '../components/sections/HomeDescription';
import ServicesCarousel from '../components/sections/ServicesCarousel';
import OurClients from '../components/sections/OurClients';
import { organizationSchema, localBusinessSchema } from '../data/seo';

const Home: React.FC = () => {
  // Combine organization and local business schemas
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, localBusinessSchema],
  };

  return (
    <>
      <SEO
        title="Home"
        description="Comfort Build Engineers - Leading MEP engineering solutions provider in Kenya. Specializing in mechanical, electrical, and plumbing engineering for industrial, commercial, and residential projects across East Africa."
        canonicalUrl="/"
        keywords="MEP engineering Kenya, mechanical engineering, electrical engineering, plumbing engineering, HVAC Kenya, industrial engineering, Nairobi engineers, Comfort Build Engineers"
        structuredData={structuredData}
      />
      <div className="min-h-screen">
        <HomeHero />
        <HomeDescription />
        <ServicesCarousel />
        <OurClients />
        {/* Additional Home sections can be added here */}
      </div>
    </>
  );
};

export default Home;