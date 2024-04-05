// src/hooks/useUserManagement.ts
import { useState, useEffect } from 'react';
import apiService from '@/services/apiService';
import { User } from '@/interfaces/user'; // Import the User interface

const useUserManagement = () => {
  const [users, setUsers] = useState<User[]>([]); // Using the User interface
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await apiService.get('users/'); // Replace with your Django API endpoint
        setUsers(response);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const addUser = async (newUser: User) => {
    // Functionality to add a new user
  };

  const updateUser = async (id: number, updatedUser: User) => {
    // Functionality to update an existing user
  };

  const deleteUser = async (id: number) => {
    // Functionality to delete a user
  };

  return { users, loading, addUser, updateUser, deleteUser };
};

export default useUserManagement;
