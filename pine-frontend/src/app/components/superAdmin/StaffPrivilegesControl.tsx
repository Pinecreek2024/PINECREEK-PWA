// src/components/superAdmin/StaffPrivilegesControl.tsx
import React from 'react';
import useStaffPrivileges from '@/hooks/useStaffPrivileges';
import { StaffMember } from '@/interfaces/StaffMember'; // Import the StaffMember interface

const StaffPrivilegesControl: React.FC = () => {
  const { staffMembers, loading } = useStaffPrivileges<StaffMember[]>(); // Using the StaffMember interface

  if (loading) {
    return <div>Loading staff information...</div>;
  }

  return (
    <div className="staff-privileges-control">
      <h2>Staff Privileges Control</h2>
      {staffMembers.map((member: StaffMember) => (
        <div key={member.id} className="staff-member">
          <p>Name: {member.name}</p>
          <p>Role: {member.role}</p>
          {/* Include buttons or links for editing staff member's privileges */}
          {/* Example: <button onClick={() => handleEditPrivileges(member.id)}>Edit Privileges</button> */}
        </div>
      ))}
    </div>
  );
};

export default StaffPrivilegesControl;
