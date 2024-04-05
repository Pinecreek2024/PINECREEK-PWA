// src/components/sections/MenuSection.tsx
import React, { useEffect, useState } from 'react';
import apiService from '@/services/apiService';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  // Add additional fields as per your menu item structure
}

const MenuSection: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const items = await apiService.get('menu-items'); // Adjust endpoint as necessary
        setMenuItems(items);
      } catch (err) {
        setError('Failed to load menu items');
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (loading) {
    return <p>Loading menu...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="menu-section">
      {menuItems.map(item => (
        <div key={item.id} className="menu-item">
          <h3 className="text-xl font-semibold">{item.name}</h3>
          <p>{item.description}</p>
          <p className="font-bold">Price: ${item.price}</p>
          {/* Additional elements for each menu item can go here */}
        </div>
      ))}
    </div>
  );
};

export default MenuSection;
