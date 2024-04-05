// src/context/SuperAdminContext.tsx
import React, { createContext, useState, ReactNode } from 'react';
import { User } from '@/interfaces/user';
import { MenuItem } from '@/interfaces/MenuItem';
import { StaffMember } from '@/interfaces/StaffMember';

interface SuperAdminContextState {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  staffMembers: StaffMember[];
  setStaffMembers: React.Dispatch<React.SetStateAction<StaffMember[]>>;
  // Add other states and setters as needed
}

export const SuperAdminContext = createContext<SuperAdminContextState | undefined>(undefined);

interface SuperAdminProviderProps {
  children: ReactNode;
}

export const SuperAdminProvider: React.FC<SuperAdminProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>([]);
  // Initialize other states here

  const contextValue = {
    users,
    setUsers,
    menuItems,
    setMenuItems,
    staffMembers,
    setStaffMembers,
    // Add other states and setters here
  };

  return <SuperAdminContext.Provider value={contextValue}>{children}</SuperAdminContext.Provider>;
};

// Exporting the context state interface
export type { SuperAdminContextState };
