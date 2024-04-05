// src/components/superAdmin/UserManagement.tsx
import React from 'react';
import useUserManagement from '@/hooks/useUserManagement';
import { User } from '@/interfaces/user'; // Import the User interface

const UserManagement: React.FC = () => {
  const { users, loading } = useUserManagement<User[]>(); // Using the User interface

  if (loading) {
    return <div>Loading users...</div>;
  }

  return (
    <div className="user-management">
      <h2>User Management</h2>
      {users.map((user: User) => (
        <div key={user.id} className="user-item">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Additional user details can be displayed here */}
          {/* Example of buttons for edit and delete functionality */}
          {/* <button onClick={() => handleEditUser(user.id)}>Edit</button>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default UserManagement;
