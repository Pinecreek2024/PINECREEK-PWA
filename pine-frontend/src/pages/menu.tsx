// src/pages/menu.tsx
import React from 'react';
import MenuSection from '@/components/sections/MenuSection';

const MenuPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold my-4">Our Menu</h2>
      <MenuSection />
      {/* Include other components related to your menu page */}
    </div>
  );
};

export default MenuPage;
