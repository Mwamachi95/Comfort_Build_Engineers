import { type FC } from 'react';
import AboutHero from '../components/sections/AboutHero';

const About: FC = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      {/* Additional About sections can be added here */}
    </div>
  );
};

export default About;