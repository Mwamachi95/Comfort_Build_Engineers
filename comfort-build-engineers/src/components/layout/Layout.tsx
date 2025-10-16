import React from 'react';
import Navbar from './Navbar';
import FooterCTA from './FooterCTA';
import Footer from './Footer';
import BackToTop from '../common/BackToTop';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-grow relative">
        {children}
      </main>
      <FooterCTA />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;