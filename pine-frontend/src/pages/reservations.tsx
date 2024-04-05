// src/pages/reservations.tsx
import React from 'react';
import ReservationForm from '@/components/forms/ReservationForm';

const ReservationsPage: React.FC = () => {
  return (
    <div className="reservations-page">
      <h1 className="text-2xl font-semibold my-4">Make a Reservation</h1>
      <p className="mb-4">
        We're excited to have you dine with us! Please fill out the form below to reserve your table.
      </p>
      <ReservationForm />
      {/* You can add additional content here, like FAQs about reservations, contact information, or special instructions */}
    </div>
  );
};

export default ReservationsPage;
