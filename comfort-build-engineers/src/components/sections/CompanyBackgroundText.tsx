import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const CompanyBackgroundText: FC = () => {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full space-y-8">
          {/* Company Description - First Paragraph */}
          <p className="text-3xl md:text-4xl lg:text-5xl text-neutral-800 leading-tight">
            We are Kenya's leading building services firm specializing in mechanical, electrical, and plumbing solutions.
          </p>
          
          {/* Company Description - Second Paragraph */}
          <p className="text-3xl md:text-4xl lg:text-5xl text-neutral-800 leading-tight">
            We collaborate with architects and designers to deliver comfortable, functional spaces on time and within budget.
          </p>
          
          {/* Our Services Button */}
          <div className="pt-4">
            <Link
              to="/services"
              className="inline-flex items-center space-x-3 text-white px-6 py-3 rounded-md text-base font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 font-heading"
              style={{
                backgroundColor: '#D9A91A',
                '--tw-ring-color': '#D9A91A'
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#B8901C';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#D9A91A';
              }}
            >
              <span>Our Services</span>
              <ArrowRightIcon className="h-5 w-5 stroke-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyBackgroundText;