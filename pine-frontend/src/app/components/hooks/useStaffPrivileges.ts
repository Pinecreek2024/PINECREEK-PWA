// src/hooks/useStaffPrivileges.ts
import { useState, useEffect } from 'react';
import apiService from '@/services/apiService';
import { StaffMember } from '@/interfaces/StaffMember'; // Import the StaffMember interface

const useStaffPrivileges = () => {
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStaff = async () => {
      setLoading(true);
      try {
        const response = await apiService.get('staff/'); // Replace with your Django API endpoint
        setStaffMembers(response);
      } catch (error) {
        console.error('Error fetching staff:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  const updateStaffPrivileges = async (id: number, updatedStaff: StaffMember) => {
    // Functionality to update staff privileges
  };

  return { staffMembers, loading, updateStaffPrivileges };
};

export default useStaffPrivileges;
