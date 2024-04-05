// src/interfaces/User.ts
export interface User {
  id: number;
  name: string;
  email: string;
  role: string; // Example: 'admin', 'editor', etc.
  // Add other fields as needed, like 'password', 'createdAt', etc.
}
