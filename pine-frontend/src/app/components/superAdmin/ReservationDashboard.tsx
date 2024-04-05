// src/components/superAdmin/ReservationDashboard.tsx
import React from 'react';
import useReservationDashboard from '@/hooks/useReservationDashboard';
import { Reservation } from '@/interfaces/Reservation'; // Import the Reservation interface

const ReservationDashboard: React.FC = () => {
  const { reservations, loading } = useReservationDashboard<Reservation[]>(); // Using the Reservation interface

  if (loading) {
    return <div>Loading reservations...</div>;
  }

  return (
    <div className='reservation-dashboard'>
      <h2>Reservation Dashboard</h2>
      {reservations.map((reservation: Reservation) => (
        <div key={reservation.id} className='reservation-item'>
          <p>Customer Name: {reservation.customerName}</p>
          <p>Date: {reservation.date}</p>
          <p>Time: {reservation.time}</p>
          <p>Number of Guests: {reservation.numberOfGuests}</p>
          {/* Example of buttons for managing reservations */}
          {/* <button onClick={() => handleEdit(reservation.id)}>Edit</button>
              <button onClick={() => handleCancel(reservation.id)}>Cancel</button> */}
        </div>
      ))}
    </div>
  );
};

export default ReservationDashboard;
