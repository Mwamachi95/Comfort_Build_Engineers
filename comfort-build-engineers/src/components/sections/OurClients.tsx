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
  // Create multiple copies for truly seamless infinite scroll
  const repeatedClients = Array(4).fill(clients).flat();

  return (
    <>
      <style>{`
        .marquee-container {
          overflow: hidden;
          position: relative;
        }

        .marquee-track {
          display: flex;
          gap: 4rem;
          animation: infinite-scroll 40s linear infinite;
          width: max-content;
        }

        @media (min-width: 768px) {
          .marquee-track {
            gap: 5rem;
          }
        }

        @media (min-width: 1024px) {
          .marquee-track {
            gap: 6rem;
          }
        }

        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-25% - 2rem));
          }
        }

        .logo-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 120px;
        }

        @media (min-width: 768px) {
          .logo-item {
            min-width: 140px;
          }
        }

        @media (min-width: 1024px) {
          .logo-item {
            min-width: 160px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
          .marquee-container {
            overflow-x: auto;
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
          <div className="marquee-container">
            <div className="marquee-track">
              {repeatedClients.map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="logo-item"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 md:h-16 lg:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 max-w-full"
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