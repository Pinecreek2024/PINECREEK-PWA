// src/app/components/forms/ReservationForm.tsx
import React from 'react';
import useReservationForm from '@/components/hooks/useReservationForm';

const ReservationForm: React.FC = () => {
  const initialValues = { name: '', email: '', date: '', time: '', numberOfGuests: 1 };
  const { values, handleChange, handleSubmit } = useReservationForm(initialValues);

  const submitReservation = () => {
    // Logic to submit reservation data
    console.log('Reservation Submitted:', values);
  };

  return (
    <form onSubmit={handleSubmit(submitReservation)} className="reservation-form">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={values.name} onChange={handleChange} required />
      </div>
      {/* Additional form fields for email, date, time, and number of guests */}
      {/* Example for number of guests: */}
      <div>
        <label htmlFor="numberOfGuests">Number of Guests</label>
        <input type="number" id="numberOfGuests" name="numberOfGuests" value={values.numberOfGuests} min="1" onChange={handleChange} required />
      </div>
      <button type="submit">Book Reservation</button>
    </form>
  );
};

export default ReservationForm;
