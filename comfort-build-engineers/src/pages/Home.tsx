import React from 'react';
import HomeHero from '../components/sections/HomeHero';
import HomeDescription from '../components/sections/HomeDescription';
import ServicesCarousel from '../components/sections/ServicesCarousel';
import OurClients from '../components/sections/OurClients';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HomeHero />
      <HomeDescription />
      <ServicesCarousel />
      <OurClients />
      {/* Additional Home sections can be added here */}
    </div>
  );
};

export default Home;