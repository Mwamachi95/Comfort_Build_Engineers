import { type FC } from 'react';
import SEO from '../components/common/SEO';
import AboutHero from '../components/sections/AboutHero';
import CompanyBackground from '../components/sections/CompanyBackground';
import CompanyBackgroundText from '../components/sections/CompanyBackgroundText';
import OurValues from '../components/sections/OurValues';
import VisionMissionHero from '../components/sections/VisionMissionHero';
import { organizationSchema } from '../data/seo';

const About: FC = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Comfort Build Engineers - Kenya's trusted MEP engineering partner. Discover our vision, mission, values, and commitment to providing reliable, dependable, and client-focused engineering solutions."
        canonicalUrl="/about"
        keywords="about CBE, MEP engineering company Kenya, engineering solutions, reliable engineering, Nairobi MEP engineers, company values"
        structuredData={organizationSchema}
      />
      <div className="min-h-screen">
        <AboutHero />
        <CompanyBackground />
        <CompanyBackgroundText />
        <OurValues />
        <VisionMissionHero />
        {/* Additional About sections can be added here */}
      </div>
    </>
  );
};

export default About;