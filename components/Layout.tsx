import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Page } from '../App';

interface LayoutProps {
  children: React.ReactNode;
  navigate: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, navigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-x-hidden">
      <Header navigate={navigate} />
      <main className="flex-grow overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;