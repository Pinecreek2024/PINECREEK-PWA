// src/pages/superAdmin.tsx
import React from 'react';
import UserManagement from '@/components/superAdmin/UserManagement';
import MenuItemManagement from '@/components/superAdmin/MenuItemManagement';
import StaffPrivilegesControl from '@/components/superAdmin/StaffPrivilegesControl';
import ReservationDashboard from '@/components/superAdmin/ReservationDashboard';

const SuperAdminPage: React.FC = () => {
  return (
    <div className="super-admin-page">
      <h1>Super Admin Control Panel</h1>

      <UserManagement />
      <MenuItemManagement />
      <StaffPrivilegesControl />
      <ReservationDashboard />
    </div>
  );
};

export default SuperAdminPage;
