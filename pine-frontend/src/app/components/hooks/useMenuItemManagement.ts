// src/hooks/useMenuItemManagement.ts
import { useState, useEffect } from 'react';
import apiService from '@/services/apiService';
import { MenuItem } from '@/interfaces/MenuItem'; // Import the MenuItem interface

const useMenuItemManagement = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuItems = async () => {
      setLoading(true);
      try {
        const response = await apiService.get('menu-items/'); // Replace with your Django API endpoint
        setMenuItems(response);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  const addMenuItem = async (menuItem: MenuItem) => {
    // Functionality to add a new menu item
  };

  const updateMenuItem = async (id: number, updatedItem: MenuItem) => {
    // Functionality to update an existing menu item
  };

  const deleteMenuItem = async (id: number) => {
    // Functionality to delete a menu item
  };

  return { menuItems, loading, addMenuItem, updateMenuItem, deleteMenuItem };
};

export default useMenuItemManagement;
