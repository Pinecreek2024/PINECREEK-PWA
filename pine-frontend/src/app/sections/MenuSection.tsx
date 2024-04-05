// src/app/sections/MenuSection.tsx
import React, { useEffect, useState } from 'react';
import apiService from '@/services/apiService';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  // Add any other relevant fields
}

const MenuSection: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        const items = await apiService.get('menu-items'); // Adjust 'menu-items' to your actual API endpoint
        setMenuItems(items);
        setLoading(false);
      } catch (error) {
        setError('Failed to load menu items.');
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (loading) {
    return <div>Loading menu items...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="menu-section">
      <h2>Our Menu</h2>
      {menuItems.length === 0 ? (
        <p>No menu items available.</p>
      ) : (
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              {/* Add more details or a 'Add to Cart' button */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuSection;
