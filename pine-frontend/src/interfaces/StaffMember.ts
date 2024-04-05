// src/interfaces/StaffMember.ts
export interface StaffMember {
  id: number;
  name: string;
  position: string; // Job position
  privileges: string[]; // List of access privileges
  // Other fields like 'email', 'phone', etc.
}
