// src/interfaces/Reservation.ts
export interface Reservation {
  id: number;
  customerName: string;
  date: string;
  time: string;
  numberOfGuests: number;
  specialRequests?: string; // Optional field for any special requests
  // Other relevant fields like 'tableNumber', 'status', etc.
}
