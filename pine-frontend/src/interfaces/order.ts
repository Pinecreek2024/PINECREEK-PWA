// src/interfaces/order.ts
export interface Order {
  id: number;
  date: string;
  total: number;
  items: OrderItem[];
  // Add other order-related fields
}

export interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  // Add other item-related fields
}
