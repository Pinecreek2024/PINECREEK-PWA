// src/components/superAdmin/MenuItemManagement.tsx
import React from 'react';
import useMenuItemManagement from '@/hooks/useMenuItemManagement';
import { MenuItem } from '@/interfaces/MenuItem'; // Import the MenuItem interface

const MenuItemManagement: React.FC = () => {
  const { menuItems, loading } = useMenuItemManagement<MenuItem[]>(); // Using the MenuItem interface

  if (loading) {
    return <div>Loading menu items...</div>;
  }

  return (
    <div className="menu-item-management">
      <h2>Menu Item Management</h2>
      {menuItems.map((item: MenuItem) => (
        <div key={item.id} className="menu-item">
          <p>Name: {item.name}</p>
          <p>Description: {item.description}</p>
          <p>Price: {item.price}</p>
          {/* Include buttons or links for edit and delete functionality */}
          {/* Example: <button onClick={() => handleEdit(item.id)}>Edit</button> */}
        </div>
      ))}
    </div>
  );
};

export default MenuItemManagement;
