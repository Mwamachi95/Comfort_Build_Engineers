import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// Import client logos
import kcbLogo from '../../assets/images/Home/our-clients/kcb-group-plc-seeklogo.png';
import bolloreLogo from '../../assets/images/Home/our-clients/bollore-seeklogo.png';
import ecobankLogo from '../../assets/images/Home/our-clients/ecobank-seeklogo.png';
import scJohnsonLogo from '../../assets/images/Home/our-clients/sc-johnson-seeklogo.png';
import sanofiLogo from '../../assets/images/Home/our-clients/sanofi-seeklogo.png';
import vertLogo from '../../assets/images/Home/our-clients/vert.png';

interface Client {
  name: string;
  logo: string;
  id: string;
}

const clients: Client[] = [
  {
    id: 'kcb',
    name: 'KCB Group PLC',
    logo: kcbLogo
  },
  {
    id: 'bollore',
    name: 'Bolloré',
    logo: bolloreLogo
  },
  {
    id: 'ecobank',
    name: 'Ecobank',
    logo: ecobankLogo
  },
  {
    id: 'sc-johnson',
    name: 'SC Johnson',
    logo: scJohnsonLogo
  },
  {
    id: 'sanofi',
    name: 'Sanofi',
    logo: sanofiLogo
  },
  {
    id: 'vert',
    name: 'Vert',
    logo: vertLogo
  }
];

const OurClients: FC = () => {
  // Duplicate the clients array for seamless looping
  const duplicatedClients = [...clients, ...clients];

  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        
        .marquee {
          animation: marquee 20s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none;
          }
        }
      `}</style>
      
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <span 
              className="text-base font-bold tracking-wider uppercase font-heading"
              style={{ color: '#A43D39' }}
            >
              Our Clients
            </span>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mt-4 max-w-3xl mx-auto">
              Trusted engineering partnerships with Kenya's most innovative companies.
            </p>
          </div>

          {/* Logo Marquee */}
          <div className="overflow-hidden">
            <div className="flex items-center space-x-16 md:space-x-20 lg:space-x-24 marquee">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 md:h-16 lg:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-left mt-16">
            <Link
              to="/projects"
              className="inline-flex items-center space-x-3 text-white px-6 py-3 rounded-md text-base font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 font-heading"
              style={{
                backgroundColor: '#A43D39',
                '--tw-ring-color': '#A43D39'
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#8B3530';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#A43D39';
              }}
            >
              <span>View Our Work</span>
              <ArrowRightIcon className="h-5 w-5 stroke-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurClients;