import { type FC } from 'react';
import AboutHero from '../components/sections/AboutHero';
import CompanyBackground from '../components/sections/CompanyBackground';
import CompanyBackgroundText from '../components/sections/CompanyBackgroundText';
import OurValues from '../components/sections/OurValues';
import VisionMissionHero from '../components/sections/VisionMissionHero';

const About: FC = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <CompanyBackground />
      <CompanyBackgroundText />
      <OurValues />
      <VisionMissionHero />
      {/* Additional About sections can be added here */}
    </div>
  );
};

export default About;