// src/hooks/useSuperAdmin.ts
import { useContext } from 'react';
import { SuperAdminContext, SuperAdminContextState } from '@/context/SuperAdminContext';

const useSuperAdmin = (): SuperAdminContextState => {
  const context = useContext(SuperAdminContext);

  if (context === undefined) {
    throw new Error('useSuperAdmin must be used within a SuperAdminProvider');
  }

  return context;
};

export default useSuperAdmin;
