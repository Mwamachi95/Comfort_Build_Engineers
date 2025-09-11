import { type FC } from 'react';
import CompetitiveIcon from '../../assets/images/About/core-values/competitive.svg';
import CollaborativeIcon from '../../assets/images/About/core-values/collaborative.svg';
import ConsistentIcon from '../../assets/images/About/core-values/consistency.svg';

interface ValueCard {
  title: string;
  icon: string;
  description: string;
}

const values: ValueCard[] = [
  {
    title: 'Competitive',
    icon: CompetitiveIcon,
    description: 'We maintain competitive edge through innovative MEP solutions, cutting-edge technology, and cost-effective project delivery. Our team continuously evolves to meet industry demands while providing exceptional value to our clients.',
  },
  {
    title: 'Collaborative',
    icon: CollaborativeIcon,
    description: 'We work closely with architects, interior designers, and stakeholders to create seamless building services integration. Our collaborative approach ensures every project meets functional requirements and exceeds client expectations.',
  },
  {
    title: 'Consistent',
    icon: ConsistentIcon,
    description: 'We deliver reliable, high-quality engineering solutions with consistent standards across all projects. Our commitment to precision and timely delivery has established us as Kenya\'s trusted building services partner.',
  },
];

const OurValues: FC = () => {
  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: '#FBF5E6' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Content */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6 font-heading">
            Engineering Excellence Through Core Values
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-4xl">
            At Comfort Build Engineers, we are guided by three fundamental principles that define our approach to every project. These values ensure we deliver exceptional building services solutions while maintaining the highest standards of professionalism and client satisfaction.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-left relative">
              {/* Vertical Dotted Line - Only show on desktop and not for last item */}
              {index < values.length - 1 && (
                <div 
                  className="hidden lg:block absolute -right-6 top-0 bottom-0 w-0.5"
                  style={{
                    borderRight: '2px dotted #9CA3AF',
                    borderRightWidth: '2px'
                  }}
                ></div>
              )}
              
              {/* Icon Container */}
              <div className="mb-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#D9A91A' }}
                >
                  <img
                    src={value.icon}
                    alt={`${value.title} icon`}
                    className="w-8 h-8 filter brightness-0"
                  />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-neutral-800 mb-4 font-heading">
                {value.title}
              </h3>
              
              {/* Description */}
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-6">
                {value.description}
              </p>
              
              {/* Horizontal Dotted Line - Only show on mobile and not for last item */}
              {index < values.length - 1 && (
                <div 
                  className="lg:hidden mt-8 w-full h-0.5"
                  style={{
                    borderBottom: '2px dotted #9CA3AF',
                    borderBottomWidth: '2px'
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;