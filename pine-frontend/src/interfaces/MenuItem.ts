// src/interfaces/MenuItem.ts
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string; // Example category of the item
  // Additional fields like 'imageUrl', 'ingredients', etc. can be added
}
