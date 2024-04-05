// src/app/components/forms/ReservationForm.tsx
import React from 'react';
import apiService from '@/services/apiService'; // Import the API service
import useReservationForm from '@/hooks/useReservationForm'; // Assuming you have this custom hook

const ReservationForm: React.FC = () => {
  const initialValues = {
    name: '', 
    email: '', 
    date: '', 
    time: '', 
    numberOfGuests: 1
  };
  const { values, handleChange, handleSubmit } = useReservationForm(initialValues);

  const submitReservation = async () => {
    try {
      // Replace 'reservations/create' with your actual Django endpoint for creating reservations
      const response = await apiService.post('reservations/create', values);
      console.log('Reservation Submitted:', response);
      // Handle post-submission logic, like showing a success message or redirecting
    } catch (error) {
      console.error('Failed to submit reservation:', error);
      // Handle errors, such as displaying a failure message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit(submitReservation)} className="reservation-form">
      <div>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={values.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      {/* Repeat similar structure for other fields: email, date, time */}
      <div>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={values.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input 
          type="date" 
          id="date" 
          name="date" 
          value={values.date} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label htmlFor="time">Time</label>
        <input 
          type="time" 
          id="time" 
          name="time" 
          value={values.time} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label htmlFor="numberOfGuests">Number of Guests</label>
        <input 
          type="number" 
          id="numberOfGuests" 
          name="numberOfGuests" 
          value={values.numberOfGuests} 
          min="1" 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit">Book Reservation</button>
    </form>
  );
};

export default ReservationForm;
