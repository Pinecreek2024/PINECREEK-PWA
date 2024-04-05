// src/pages/index.tsx
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import MenuSection from '@/components/sections/MenuSection';
import EventsSection from '@/components/sections/EventsSection';
// Import other components or sections as needed

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Header />
      {/* Main page content */}
      <MenuSection />
      <EventsSection />
      {/* Other sections */}
      <Footer />
    </div>
  );
};

export default HomePage;
